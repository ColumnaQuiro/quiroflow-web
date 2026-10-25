import { BOOKING_URL, SIGNUP_URL } from '~/utils/links'

// Loads Google's tag, but only once the visitor has opted in, and keeps
// Consent Mode v2 signals in sync with the banner. See useConsent.ts for why
// this is "basic" consent mode rather than "advanced".

interface GtagWindow extends Window {
  dataLayer?: unknown[]
  gtag?: (...args: unknown[]) => void
  fbq?: ((...args: unknown[]) => void) & { callMethod?: (...args: unknown[]) => void; queue?: unknown[][]; loaded?: boolean; version?: string; push?: unknown }
  _fbq?: unknown
}

export default defineNuxtPlugin((nuxtApp) => {
  const { consent, granted, hydrate } = useConsent()
  const w = window as GtagWindow

  // Deferred to app:mounted rather than run here. Plugins execute before Vue
  // hydrates, so reading localStorage at this point flips the banner on while
  // Vue is still reconciling against server HTML that has no banner in it --
  // which is exactly a hydration mismatch. After mount, showing the banner is
  // an ordinary reactive update.
  nuxtApp.hook('app:mounted', () => hydrate())

  function ensureGtagShim() {
    w.dataLayer = w.dataLayer || []
    if (typeof w.gtag !== 'function') {
      // Google's own snippet shape: pushes the arguments object, not an array.
      w.gtag = function gtag() {
        // eslint-disable-next-line prefer-rest-params
        w.dataLayer!.push(arguments)
      }
    }
  }

  let scriptLoaded = false

  function loadGtag() {
    // trackingEnabled() also covers the hostname check, so no Google request
    // is ever made from a deploy preview, a branch build or localhost.
    if (scriptLoaded || !trackingEnabled()) return
    scriptLoaded = true

    ensureGtagShim()
    // Defaults must be queued before the library evaluates them, so that the
    // very first state the tag sees is "denied" and only then our update.
    w.gtag!('consent', 'default', {
      ad_storage: 'denied',
      ad_user_data: 'denied',
      ad_personalization: 'denied',
      analytics_storage: 'denied',
    })

    const s = document.createElement('script')
    s.async = true
    s.src = `https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ADS.id}`
    document.head.appendChild(s)

    w.gtag!('js', new Date())
    w.gtag!('config', GOOGLE_ADS.id)
  }

  let metaLoaded = false

  // Meta's own snippet, minus the automatic PageView: the pixel is only
  // reached after an explicit opt-in, so the first thing it must see is the
  // consent grant, and only then the page view. Firing PageView from inside
  // the snippet would send it before that grant is queued.
  function loadMeta() {
    if (metaLoaded || !metaEnabled()) return
    metaLoaded = true

    const n: GtagWindow['fbq'] = function fbq(...args: unknown[]) {
      const self = w.fbq!
      if (self.callMethod) self.callMethod(...args)
      else self.queue!.push(args)
    } as NonNullable<GtagWindow['fbq']>
    n.queue = []
    n.loaded = true
    n.version = '2.0'
    w.fbq = n
    w._fbq = n

    const s = document.createElement('script')
    s.async = true
    s.src = 'https://connect.facebook.net/en_US/fbevents.js'
    document.head.appendChild(s)

    w.fbq('consent', 'grant')
    w.fbq('init', META_PIXEL.id)
    w.fbq('track', 'PageView')
  }

  function sync() {
    const g = granted.value
    // Nothing granted means nothing loads. This is the whole point of basic
    // consent mode: no third-party request happens before opt-in.
    if (!g.ads && !g.analytics) return

    loadGtag()
    // Meta has no analytics/ads split: it is an advertising pixel, so it
    // rides on the ads grant alone.
    if (g.ads) loadMeta()
    w.gtag?.('consent', 'update', {
      ad_storage: g.ads ? 'granted' : 'denied',
      ad_user_data: g.ads ? 'granted' : 'denied',
      ad_personalization: g.ads ? 'granted' : 'denied',
      analytics_storage: g.analytics ? 'granted' : 'denied',
    })
  }

  watch(consent, sync, { immediate: true })

  // Everything an ad network put on the landing URL, kept for the session so
  // it survives the walk from the landing page to whichever button the
  // visitor eventually presses. Without this the sign-up link arrives at
  // app.quiroflow.com naked and the account it creates can only be tied back
  // to a campaign by lining timestamps up by eye -- which is a guess.
  const ATTRIBUTION_KEYS = ['gclid', 'utm_source', 'utm_medium', 'utm_campaign', 'utm_term']

  // Captured here, while the plugin is still running, rather than read inside
  // rememberAttribution. Hydrating a prerendered page makes the router rewrite
  // history to the canonical route before app:mounted fires, so by the time a
  // hook runs window.location.search is briefly empty -- the query reappears
  // afterwards, which is why this looked fine in `nuxt dev` (no prerender, no
  // rewrite) and silently dropped every gclid on the generated site.
  const initialSearch = window.location.search

  function rememberAttribution() {
    try {
      const params = new URLSearchParams(initialSearch)
      const found = ATTRIBUTION_KEYS.filter(k => params.get(k))
      // Only when this page actually carries something: a later direct visit
      // must not wipe the click that brought them here earlier.
      if (!found.length) return
      const stored: Record<string, string> = {}
      for (const key of found) stored[key] = params.get(key)!.slice(0, 200)
      sessionStorage.setItem('qf_attribution', JSON.stringify(stored))
    }
    catch {
      // Private mode, blocked storage: attribution is a nice-to-have, never
      // a reason for a button to stop working.
    }
  }

  function signupHref(base: string) {
    try {
      const stored = sessionStorage.getItem('qf_attribution')
      if (!stored) return base
      const url = new URL(base)
      for (const [key, value] of Object.entries(JSON.parse(stored) as Record<string, string>)) {
        url.searchParams.set(key, value)
      }
      return url.toString()
    }
    catch {
      return base
    }
  }

  nuxtApp.hook('app:mounted', () => rememberAttribution())

  // A demo booking finishes on calendar.app.google and a trial sign-up
  // finishes on app.quiroflow.com -- both off this domain, so the click-out
  // is the only thing we can observe. Delegated on document rather than wired
  // into each of the components that render one of these links, so a new
  // button anywhere is tracked without remembering to add it.
  document.addEventListener(
    'click',
    (e) => {
      const target = e.target as HTMLElement | null
      const link = target?.closest?.('a[href]') as HTMLAnchorElement | null
      if (!link) return
      if (link.href.startsWith(BOOKING_URL)) {
        trackConversion('demo')
        trackMetaConversion('demo')
      }
      else if (link.href.startsWith(SIGNUP_URL)) {
        trackConversion('signup')
        trackMetaConversion('signup')
        // Rewritten here rather than in every template that renders a trial
        // button: this listener already exists precisely so a new button
        // anywhere is covered without anyone remembering to wire it up.
        link.href = signupHref(link.href)
      }
    },
    { capture: true },
  )
})

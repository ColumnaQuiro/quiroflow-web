// Google Ads conversion reporting.

/**
 * Hardcoded rather than environment variables on purpose. These values ship
 * in client-side JavaScript to every visitor, so they are configuration, not
 * secrets -- and because the site is statically generated, runtimeConfig
 * values are baked in at build time anyway, so an env var would still need a
 * rebuild to change. Keeping them here means they show up in code review and
 * in git history, instead of living invisibly in Netlify's settings where the
 * next person reading this file cannot tell what is configured.
 *
 * Empty strings disable tracking entirely: nothing loads and nothing fires,
 * so this is safe to ship before the conversion actions exist in Google Ads.
 * Fill in from Google Ads > Objetivos > Conversiones > (action) > Configurar
 * etiqueta > Instalar manualmente, which gives a snippet containing
 * send_to: 'AW-XXXXXXXXX/<label>'.
 */
export const GOOGLE_ADS = {
  /** Google tag for Ads account 257-649-3349 (QuiroFlow). */
  id: 'AW-18450337095',
  /** "Captura de email - fisioterapia" — primary conversion. */
  emailLabel: '20gcCP7ErvccEMea591E',
  /** "Clic reservar demo" — the booking click-out. */
  demoLabel: '5UrYCPu3svccEMea591E',
  /**
   * "Clic empezar prueba" — the click-out to app.quiroflow.com/signup.
   * Created 16 Oct 2026 as a manual event-snippet action under the Registro
   * category, primary, one conversion per click, value 1 EUR. Worth its own
   * action rather than folding into demoLabel: a self-serve trial and a sales
   * call are different outcomes with very different values, and bidding
   * against one average of the two optimises for neither.
   *
   * Setting the label here is necessary but not sufficient: a campaign only
   * bids towards this action if its conversion goals include Registro. They
   * do today -- Registro is an account-default goal and "QF | ES |
   * Fisioterapia" runs on the account defaults -- but a campaign created with
   * its own goal selection would silently not optimise for this.
   */
  signupLabel: 'IlXfCNWZj58dEMea591E',
}

/**
 * Meta pixel, for the Facebook and Instagram campaigns. Same reasoning as
 * GOOGLE_ADS above: it ships to every visitor in client-side JavaScript, so
 * it is configuration and not a secret, and keeping it here rather than in
 * Netlify's settings means it shows up in code review.
 *
 * An empty id disables it completely -- no script is requested and no event
 * fires -- so this is safe to ship before the pixel exists. Fill in from
 * Meta Events Manager > Data sources > (your pixel) > Settings, where it is
 * the 15-16 digit "Pixel ID".
 *
 * Browser pixel only, on purpose. The Conversions API needs a server to post
 * to and this site is statically generated, so CAPI belongs in a Netlify
 * function behind the same consent gate -- not here.
 */
export const META_PIXEL = {
  id: '',
}

// Deploy previews, branch builds and localhost share this code, and without a
// guard every test submission would report a conversion and pollute the data
// the bidding later optimises against. www included because Netlify serves it
// as an alias rather than only redirecting.
const TRACKING_HOSTS = ['quiroflow.com', 'www.quiroflow.com']

/** True only on the real production site, with an id actually configured. */
export function trackingEnabled() {
  if (import.meta.server) return false
  if (!GOOGLE_ADS.id) return false
  return TRACKING_HOSTS.includes(window.location.hostname)
}

/** True only on the real production site, with a pixel id actually configured. */
export function metaEnabled() {
  if (import.meta.server) return false
  if (!META_PIXEL.id) return false
  return TRACKING_HOSTS.includes(window.location.hostname)
}

export type ConversionName = 'emailCapture' | 'demo' | 'signup'

interface GtagWindow extends Window {
  gtag?: (...args: unknown[]) => void
}

export function trackConversion(name: ConversionName) {
  if (!trackingEnabled()) return

  const w = window as GtagWindow
  // Undefined until the analytics plugin loads gtag, which it only does after
  // consent. No consent, no call -- not even a queued one.
  if (typeof w.gtag !== 'function') return

  const labels: Record<ConversionName, string> = {
    emailCapture: GOOGLE_ADS.emailLabel,
    demo: GOOGLE_ADS.demoLabel,
    signup: GOOGLE_ADS.signupLabel,
  }
  const label = labels[name]
  if (!label) return

  w.gtag('event', 'conversion', { send_to: `${GOOGLE_ADS.id}/${label}` })
}

interface FbqWindow extends Window {
  fbq?: (...args: unknown[]) => void
}

/**
 * The Meta equivalent of trackConversion. Mapped to standard events rather
 * than one custom event for all three: Meta optimises against standard
 * events out of the box, and a trial, a booked call and an email address are
 * not the same outcome -- the same reason the three Google actions are
 * separate rather than folded into one.
 */
const META_EVENTS: Record<ConversionName, string> = {
  emailCapture: 'Lead',
  demo: 'Schedule',
  signup: 'StartTrial',
}

export function trackMetaConversion(name: ConversionName) {
  if (!metaEnabled()) return
  const w = window as FbqWindow
  // Undefined until the analytics plugin loads the pixel, which it only does
  // after consent. No consent, no call -- not even a queued one.
  if (typeof w.fbq !== 'function') return
  w.fbq('track', META_EVENTS[name])
}

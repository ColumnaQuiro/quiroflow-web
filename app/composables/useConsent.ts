// Cookie consent state, shared by the banner and the analytics plugin.
//
// Deliberately "basic" consent mode rather than Google's "advanced": no Google
// script is loaded at all until the visitor opts in. Advanced mode loads gtag
// up front with storage denied and buys you modelled conversions, but the
// AEPD's guidance in Spain is that non-essential third-party trackers should
// not load before consent, and that risk is not worth the modelling at our
// volume. The trade-off is real and worth knowing: conversions are only ever
// measured for visitors who accept, so Google Ads will under-count.

export interface ConsentState {
  /** Google Ads: ad_storage, ad_user_data, ad_personalization. */
  ads: boolean
  /** analytics_storage. */
  analytics: boolean
  /** When the choice was made, ISO. Kept so consent can be re-asked if stale. */
  decidedAt: string
  /** Bump to re-ask everyone after a material change to what we load. */
  version: number
}

export const CONSENT_VERSION = 1
const STORAGE_KEY = 'qf-consent'

function read(): ConsentState | null {
  if (import.meta.server) return null
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY)
    if (!raw) return null
    const parsed = JSON.parse(raw) as ConsentState
    // A stored choice from an older version is treated as no choice, so a
    // change to what we load always re-asks rather than silently inheriting.
    if (parsed?.version !== CONSENT_VERSION) return null
    return parsed
  }
  catch {
    // Private mode, blocked storage, corrupt value -- treat as undecided
    // rather than throwing on every page load.
    return null
  }
}

function write(state: ConsentState) {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state))
  }
  catch {
    // Nothing to do: the choice applies for this page view, and we will ask
    // again next time rather than assuming consent we could not record.
  }
}

export function useConsent() {
  // null = not yet decided. Starts null on the server so the banner never
  // renders during SSR -- the client decides after mount, which keeps
  // hydration identical on both sides.
  const consent = useState<ConsentState | null>('qf-consent', () => null)
  const ready = useState<boolean>('qf-consent-ready', () => false)

  function hydrate() {
    consent.value = read()
    ready.value = true
  }

  function set(ads: boolean, analytics: boolean) {
    const next: ConsentState = {
      ads,
      analytics,
      decidedAt: new Date().toISOString(),
      version: CONSENT_VERSION,
    }
    consent.value = next
    write(next)
  }

  const acceptAll = () => set(true, true)
  const rejectAll = () => set(false, false)

  /** Re-opens the banner so a visitor can withdraw consent later. */
  function reopen() {
    consent.value = null
  }

  const decided = computed(() => consent.value !== null)
  const granted = computed(() => ({
    ads: consent.value?.ads === true,
    analytics: consent.value?.analytics === true,
  }))

  return { consent, ready, decided, granted, hydrate, set, acceptAll, rejectAll, reopen }
}

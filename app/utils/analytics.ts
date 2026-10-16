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
   * Empty until the conversion action exists in Google Ads, which disables
   * it the same way an empty id disables everything else here. Worth its own
   * action rather than folding into demoLabel: a self-serve trial and a sales
   * call are different outcomes with very different values, and bidding
   * against one average of the two optimises for neither.
   */
  signupLabel: '',
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

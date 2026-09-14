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
  /** e.g. 'AW-123456789' */
  id: '',
  /** Label for the fisioterapia email capture (primary conversion). */
  emailLabel: '',
  /** Label for the demo booking click-out (secondary conversion). */
  demoLabel: '',
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

export type ConversionName = 'emailCapture' | 'demo'

interface GtagWindow extends Window {
  gtag?: (...args: unknown[]) => void
}

export function trackConversion(name: ConversionName) {
  if (!trackingEnabled()) return

  const w = window as GtagWindow
  // Undefined until the analytics plugin loads gtag, which it only does after
  // consent. No consent, no call -- not even a queued one.
  if (typeof w.gtag !== 'function') return

  const label = name === 'emailCapture' ? GOOGLE_ADS.emailLabel : GOOGLE_ADS.demoLabel
  if (!label) return

  w.gtag('event', 'conversion', { send_to: `${GOOGLE_ADS.id}/${label}` })
}

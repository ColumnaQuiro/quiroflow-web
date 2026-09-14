// Google Ads conversion reporting.
//
// Every function here no-ops unless three things are true: the visitor granted
// ads consent (which is what causes the plugin to define window.gtag at all),
// and both the account id and the conversion label are configured. That means
// this ships safely before the Ads account has conversion actions -- nothing
// fires against a placeholder.

export type ConversionName = 'emailCapture' | 'demo'

interface GtagWindow extends Window {
  gtag?: (...args: unknown[]) => void
}

export function trackConversion(name: ConversionName) {
  if (import.meta.server) return

  const w = window as GtagWindow
  // Undefined until the analytics plugin loads gtag, which it only does after
  // consent. No consent, no call -- not even a queued one.
  if (typeof w.gtag !== 'function') return

  const cfg = useRuntimeConfig().public.googleAds
  const label = name === 'emailCapture' ? cfg.emailLabel : cfg.demoLabel
  if (!cfg.id || !label) return

  w.gtag('event', 'conversion', { send_to: `${cfg.id}/${label}` })
}

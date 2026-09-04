export type Locale = 'es' | 'en' | 'fr'

// Thin wrapper over useI18n() so every existing call site (const { locale,
// setLocale } = useLocale()) keeps working unchanged after the move to
// real per-locale routes -- locale now reflects the current URL (via
// @nuxtjs/i18n) rather than a client-only useState flipped by a button,
// and setLocale navigates to that locale's URL instead of just mutating
// state at the same URL.
export function useLocale() {
  const { locale: i18nLocale } = useI18n()
  const switchLocalePath = useSwitchLocalePath()

  const locale = computed<Locale>(() => i18nLocale.value as Locale)

  function setLocale(l: Locale) {
    return navigateTo(switchLocalePath(l))
  }

  return { locale, setLocale }
}

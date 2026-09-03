export type Locale = 'es' | 'en'

export function useLocale() {
  const locale = useState<Locale>('locale', () => 'es')

  function setLocale(l: Locale) {
    locale.value = l
    if (import.meta.client) localStorage.setItem('quiroflow-locale', l)
  }

  function toggleLocale() {
    setLocale(locale.value === 'es' ? 'en' : 'es')
  }

  return { locale, setLocale, toggleLocale }
}

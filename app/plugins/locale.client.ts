export default defineNuxtPlugin(() => {
  const { setLocale } = useLocale()
  const stored = localStorage.getItem('quiroflow-locale')
  if (stored === 'es' || stored === 'en') setLocale(stored)
})

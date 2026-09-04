import { es } from '~/i18n/es'
import { en } from '~/i18n/en'
import { fr } from '~/i18n/fr'

// Feeds the existing es.ts/en.ts/fr.ts dictionaries straight into vue-i18n as
// static messages -- no lazy-loading, since the site is small enough that
// splitting translations per-locale-per-request would be pure overhead.
// Keeps the dictionary files themselves untouched: every t('a.b.c') call
// site across the app already matches vue-i18n's own dot-path lookup.
export default defineI18nConfig(() => ({
  legacy: false,
  messages: { es, en, fr },
}))

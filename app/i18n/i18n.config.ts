import { es } from '~/i18n/es'
import { en } from '~/i18n/en'
import { fr } from '~/i18n/fr'
import { siteEs } from '~/i18n/site/es'
import { siteEn } from '~/i18n/site/en'
import { siteFr } from '~/i18n/site/fr'

// Feeds the existing es.ts/en.ts/fr.ts dictionaries straight into vue-i18n as
// static messages -- no lazy-loading, since the site is small enough that
// splitting translations per-locale-per-request would be pure overhead.
// Keeps the dictionary files themselves untouched: every t('a.b.c') call
// site across the app already matches vue-i18n's own dot-path lookup.
// site/*.ts adds the redesigned pages' copy under keys of its own (site,
// home, pricingPage, featuresPage, comparePage, switchPage).
export default defineI18nConfig(() => ({
  legacy: false,
  messages: {
    es: { ...es, ...siteEs },
    en: { ...en, ...siteEn },
    fr: { ...fr, ...siteFr },
  },
}))

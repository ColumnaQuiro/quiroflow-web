import { siteEs } from '~/i18n/site/es'
import { siteEn } from '~/i18n/site/en'
import { siteFr } from '~/i18n/site/fr'
import type { LocalisedText } from '~/composables/usePageSeo'

type PageKey = 'pricingPage' | 'featuresPage' | 'comparePage' | 'switchPage'

/** usePageSeo for a kit page whose title and description live in site/*.ts. */
export function useKitSeo(page: PageKey, faq?: () => { q: string; a: string }[]) {
  const titles: LocalisedText = { es: siteEs[page].seoTitle, en: siteEn[page].seoTitle, fr: siteFr[page].seoTitle }
  const descriptions: LocalisedText = { es: siteEs[page].seoDescription, en: siteEn[page].seoDescription, fr: siteFr[page].seoDescription }
  usePageSeo({
    titles,
    descriptions,
    image: '/og-image.png',
    jsonLdKey: `ld-json-${page}`,
    jsonLd: ({ url, locale, description }) => ({
      '@context': 'https://schema.org',
      '@graph': [
        webPageJsonLd({ url, name: titles[locale], description, locale }),
        ...(faq ? [faqJsonLd(faq())] : []),
      ],
    }),
  })
}

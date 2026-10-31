import type { Locale } from '~/composables/useLocale'

export type LocalisedText = Record<Locale, string>

interface PageSeoOptions {
  titles: LocalisedText
  descriptions: LocalisedText
  /** Absolute path of the page's OG image, e.g. '/og-fisioterapia.png'. */
  image?: string
  imageAlts?: LocalisedText
  /** Built fresh per locale; returned object is serialised into JSON-LD. */
  jsonLd?: (ctx: { url: string; locale: Locale; description: string }) => unknown
  /** Stable useHead key for the JSON-LD tag -- see the comment below. */
  jsonLdKey?: string
  robots?: string
}

/**
 * The per-page half of this site's head tags. Every page was repeating the
 * same forty lines -- useLocaleHead spread, description, the four og:*, the
 * two twitter:*, the canonical URL built from the route -- which is how one
 * page ends up with an og:url the others don't have.
 *
 * useLocaleHead supplies htmlAttrs.lang/dir, the hreflang alternates, the
 * canonical link and og:locale/og:locale:alternate, all correctly per-locale
 * from the current route, which a hand-written version could only ever get
 * right for one language at a time.
 */
export function usePageSeo(options: PageSeoOptions) {
  const { locale } = useLocale()
  const route = useRoute()
  const i18nHead = useLocaleHead({ seo: true })

  const pageUrl = computed(() => `https://quiroflow.com${route.path}`)
  const title = computed(() => options.titles[locale.value])
  const description = computed(() => options.descriptions[locale.value])
  const imageUrl = computed(() => (options.image ? `https://quiroflow.com${options.image}` : null))
  const imageAlt = computed(() => options.imageAlts?.[locale.value] ?? null)

  const siteGraph = computed(() => siteJsonLd(locale.value))

  useHead(() => ({
    htmlAttrs: { lang: i18nHead.value.htmlAttrs?.lang },
    title: title.value,
    link: [...(i18nHead.value.link ?? [])],
    meta: [
      ...(i18nHead.value.meta ?? []),
      { name: 'description', content: description.value },
      { property: 'og:title', content: title.value },
      { property: 'og:description', content: description.value },
      { property: 'og:url', content: pageUrl.value },
      { name: 'twitter:title', content: title.value },
      { name: 'twitter:description', content: description.value },
      // A page-specific image overrides the site-wide default from
      // nuxt.config. These pages get shared between practitioners over
      // WhatsApp constantly, and one generic card for every URL wastes the
      // single most-seen piece of the link.
      ...(imageUrl.value
        ? [
            { property: 'og:image', content: imageUrl.value },
            { name: 'twitter:image', content: imageUrl.value },
          ]
        : []),
      ...(imageAlt.value ? [{ property: 'og:image:alt', content: imageAlt.value }] : []),
      ...(options.robots ? [{ name: 'robots', content: options.robots }] : []),
    ],
    script: [
      // On every page, not just the homepage: pages reference the
      // organisation and the product by @id, and a crawler reads each URL on
      // its own, so an @id defined only on / dangles everywhere else.
      {
        key: 'ld-json-site',
        type: 'application/ld+json',
        innerHTML: JSON.stringify(siteGraph.value),
      },
      ...(options.jsonLd
        ? [
            {
              // Without a stable key, useHead treats each locale switch's
              // recomputed innerHTML as a brand new tag and appends it rather
              // than replacing the previous one -- which shows up as duplicate
              // <script> blocks (one per language) in the rendered head.
              key: options.jsonLdKey ?? 'ld-json-page',
              type: 'application/ld+json',
              innerHTML: JSON.stringify(
                options.jsonLd({ url: pageUrl.value, locale: locale.value, description: description.value }),
              ),
            },
          ]
        : []),
    ],
  }))

  return { pageUrl, title, description }
}

export const ORGANIZATION_ID = 'https://quiroflow.com/#organization'
export const WEBSITE_ID = 'https://quiroflow.com/#website'
export const SOFTWARE_ID = 'https://quiroflow.com/#software'

const LANGUAGE_TAGS: Record<Locale, string> = { es: 'es-ES', en: 'en-US', fr: 'fr-FR' }

const SOFTWARE_DESCRIPTIONS: LocalisedText = {
  es: 'Software de gestión para clínicas de quiropráctica, fisioterapia, osteopatía y podología: agenda con asignación automática de salas, historiales clínicos, facturación VeriFactu, bonos y recordatorios por WhatsApp.',
  en: 'Practice management software for chiropractic, physiotherapy, osteopathy and podiatry clinics: scheduling with automatic room assignment, clinical records, VeriFactu invoicing, packages and WhatsApp reminders.',
  fr: 'Logiciel de gestion pour cabinets de chiropraxie, kinésithérapie, ostéopathie et podologie : agenda avec attribution automatique des salles, dossiers cliniques, facturation VeriFactu, forfaits et rappels WhatsApp.',
}

/**
 * The organisation, the website and the one product, emitted on every page.
 *
 * Organization deliberately carries no postal address: the "Quiénes somos"
 * page was removed to keep the COLUMNAQUIRO S.L. identity block off the
 * marketing pages, and the legal notice (noindexed) is where LSSI-CE needs
 * it. Add `sameAs` once real company profiles (LinkedIn, Capterra...) exist
 * -- never a guessed URL.
 */
function siteJsonLd(locale: Locale) {
  const home = locale === 'es' ? 'https://quiroflow.com/' : `https://quiroflow.com/${locale}`
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': ORGANIZATION_ID,
        name: 'QuiroFlow',
        legalName: 'COLUMNAQUIRO S.L.',
        url: 'https://quiroflow.com/',
        logo: { '@type': 'ImageObject', url: 'https://quiroflow.com/icon-512.png', width: 512, height: 512 },
        email: 'hola@quiroflow.com',
        contactPoint: {
          '@type': 'ContactPoint',
          contactType: 'customer support',
          email: 'hola@quiroflow.com',
          availableLanguage: ['es', 'en', 'fr'],
        },
      },
      {
        '@type': 'WebSite',
        '@id': WEBSITE_ID,
        name: 'QuiroFlow',
        url: 'https://quiroflow.com/',
        publisher: { '@id': ORGANIZATION_ID },
        inLanguage: Object.values(LANGUAGE_TAGS),
      },
      {
        // One product, referenced by @id from every page. Each page used to
        // declare its own "QuiroFlow" SoftwareApplication with its own url,
        // which reads as five different apps with the same name.
        '@type': 'SoftwareApplication',
        '@id': SOFTWARE_ID,
        name: 'QuiroFlow',
        url: 'https://quiroflow.com/',
        applicationCategory: 'BusinessApplication',
        operatingSystem: 'Web, iOS, Android',
        description: SOFTWARE_DESCRIPTIONS[locale],
        publisher: { '@id': ORGANIZATION_ID },
        offers: {
          '@type': 'AggregateOffer',
          priceCurrency: 'EUR',
          lowPrice: String(Math.min(...PRICING_TIERS.map(tier => tier.monthly))),
          highPrice: String(Math.max(...PRICING_TIERS.map(tier => tier.monthly))),
          offerCount: PRICING_TIERS.length,
          offers: PRICING_TIERS.map(tier => ({
            '@type': 'Offer',
            name: tier.name,
            price: String(tier.monthly),
            priceCurrency: 'EUR',
            url: `${home}#precios`,
            // Per professional per month, VAT excluded -- as the pricing
            // cards say. The annual figures are a client-side toggle and
            // are not in the prerendered HTML, so they stay out of here.
            priceSpecification: {
              '@type': 'UnitPriceSpecification',
              price: String(tier.monthly),
              priceCurrency: 'EUR',
              unitText: 'MON',
              valueAddedTaxIncluded: false,
            },
          })),
        },
      },
    ],
  }
}

/**
 * The page-level node for a page that describes (part of) the product. It
 * points at the shared SoftwareApplication instead of redeclaring it.
 */
export function webPageJsonLd(page: { url: string; name: string; description: string; locale: Locale; dateModified?: string }) {
  return {
    '@type': 'WebPage',
    '@id': page.url,
    url: page.url,
    name: page.name,
    description: page.description,
    inLanguage: LANGUAGE_TAGS[page.locale],
    isPartOf: { '@id': WEBSITE_ID },
    about: { '@id': SOFTWARE_ID },
    publisher: { '@id': ORGANIZATION_ID },
    ...(page.dateModified ? { dateModified: page.dateModified } : {}),
  }
}

/**
 * FAQPage schema, built from the questions actually rendered on the page.
 * rt() resolves vue-i18n's compiled message objects back to plain strings --
 * tm() alone is fine inside a template, but a compiled message serialises as
 * an empty object once it reaches JSON.stringify.
 */
export function useFaqItems(key: string) {
  const { tm, rt } = useI18n()
  return computed(() =>
    (tm(key) as { q: string; a: string }[]).map(item => ({ q: rt(item.q), a: rt(item.a) })),
  )
}

export function faqJsonLd(items: { q: string; a: string }[]) {
  return {
    '@type': 'FAQPage',
    mainEntity: items.map(item => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
  }
}

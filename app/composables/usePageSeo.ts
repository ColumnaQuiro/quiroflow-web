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
    script: options.jsonLd
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
      : [],
  }))

  return { pageUrl, title, description }
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

import type { Locale } from '~/composables/useLocale'
import { CHOOSING_SOFTWARE } from '~/content/articles/choosing-software'
import { REDUCING_NO_SHOWS } from '~/content/articles/reducing-no-shows'

/**
 * The Resources index and article pages read from here. Deliberately a typed
 * array rather than a CMS or @nuxt/content: the site is statically generated
 * with no server, there is nothing to publish yet, and a build-time array
 * keeps the whole thing to two page components until volume justifies more.
 *
 * To publish the first post, append an entry below. Everything else follows
 * automatically -- the index stops rendering its empty state, /recursos drops
 * its noindex, and the sitemap picks up the new URL (remove the '/recursos'
 * entries from the sitemap exclude list in nuxt.config.ts at the same time).
 *
 * `body` is an array of blocks rather than a raw HTML string on purpose: it
 * keeps rendering escaped by default, so a post can never inject markup into
 * the page.
 */
export type PostBlock =
  | { type: 'p'; text: string }
  | { type: 'h2'; text: string }
  | { type: 'list'; items: string[] }

export interface Post {
  /** URL segment, per locale -- the slug is a ranking signal like any other. */
  slug: Record<Locale, string>
  /** ISO date, used for <time datetime> and the article JSON-LD. */
  date: string
  readingMinutes: number
  title: Record<Locale, string>
  description: Record<Locale, string>
  body: Record<Locale, PostBlock[]>
}

export const posts: Post[] = [CHOOSING_SOFTWARE, REDUCING_NO_SHOWS]

/**
 * With a locale, only that locale's slug matches: /en/resources/<spanish slug>
 * must 404, or every post exists at three URLs per language. Without one, any
 * locale's slug finds the post (the header uses that to build the language
 * switcher's links).
 */
export function findPost(slug: string, locale?: Locale) {
  return posts.find(post => (locale ? post.slug[locale] === slug : Object.values(post.slug).includes(slug)))
}

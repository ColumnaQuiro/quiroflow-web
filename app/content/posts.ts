import type { Locale } from '~/composables/useLocale'

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

export const posts: Post[] = []

export function findPost(slug: string) {
  return posts.find(post => Object.values(post.slug).includes(slug))
}

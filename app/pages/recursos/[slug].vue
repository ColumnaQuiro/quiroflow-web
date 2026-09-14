<script setup lang="ts">
import { findPost } from '~/content/posts'
import type { Locale } from '~/composables/useLocale'

definePageMeta({
  i18n: { paths: { en: '/resources/[slug]', fr: '/ressources/[slug]' } },
})

const t = useT()
const { locale } = useLocale()
const localePath = useLocalePath()
const route = useRoute()

const post = computed(() => findPost(String(route.params.slug)))

// A slug that does not match any entry is a 404, not an empty article page --
// otherwise every typo under /recursos/ renders a blank indexable URL.
if (!post.value) {
  throw createError({ statusCode: 404, statusMessage: 'Post not found' })
}

const entry = computed(() => {
  const p = post.value!
  const l = locale.value as Locale
  return {
    title: p.title[l],
    description: p.description[l],
    body: p.body[l],
    date: p.date,
    readingMinutes: p.readingMinutes,
  }
})

const dateFormatter = computed(() => new Intl.DateTimeFormat(locale.value, { dateStyle: 'long' }))

usePageSeo({
  titles: Object.fromEntries(
    (['es', 'en', 'fr'] as Locale[]).map(l => [l, `${post.value!.title[l]} | QuiroFlow`]),
  ) as Record<Locale, string>,
  descriptions: post.value!.description,
  jsonLdKey: 'ld-json-post',
  jsonLd: ({ url, locale: l }) => ({
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.value!.title[l],
    description: post.value!.description[l],
    datePublished: post.value!.date,
    mainEntityOfPage: url,
    publisher: { '@id': 'https://quiroflow.com/#organization' },
  }),
})
</script>

<template>
  <div>
    <article class="py-20">
      <div class="mx-auto flex max-w-[720px] flex-col gap-6 px-8">
        <NuxtLink :to="localePath('recursos')" class="text-[13.5px] font-semibold text-brand-text hover:underline">
          ← {{ t('resources.backToList') }}
        </NuxtLink>

        <header class="flex flex-col gap-3">
          <p class="text-[12.5px] font-semibold uppercase tracking-wide text-ink-faint">
            {{ t('resources.publishedOn') }}
            <time :datetime="entry.date">{{ dateFormatter.format(new Date(entry.date)) }}</time>
            · {{ entry.readingMinutes }} {{ t('resources.readingTime') }}
          </p>
          <h1 class="text-[34px] leading-[1.18] tracking-tightTitle text-ink-900">{{ entry.title }}</h1>
          <p class="text-[16.5px] leading-[1.6] text-ink-muted">{{ entry.description }}</p>
        </header>

        <div class="flex flex-col gap-5 border-t border-line pt-6">
          <template v-for="(block, i) in entry.body" :key="i">
            <h2 v-if="block.type === 'h2'" class="mt-3 text-[24px] tracking-tightTitle text-ink-900">{{ block.text }}</h2>
            <p v-else-if="block.type === 'p'" class="text-[15.5px] leading-[1.75] text-ink-muted">{{ block.text }}</p>
            <ul v-else class="flex flex-col gap-2.5">
              <li v-for="item in block.items" :key="item" class="flex items-start gap-2.5 text-[15px] leading-[1.7] text-ink-muted">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" class="mt-1 shrink-0" aria-hidden="true">
                  <circle cx="9" cy="9" r="9" fill="#EEF0FE" />
                  <path d="M5.5 9.3l2.2 2.2 4.8-5" stroke="#4F46E5" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" fill="none" />
                </svg>
                <span>{{ item }}</span>
              </li>
            </ul>
          </template>
        </div>
      </div>
    </article>

    <EmailCapture form-name="recursos-articulo-info" />
  </div>
</template>

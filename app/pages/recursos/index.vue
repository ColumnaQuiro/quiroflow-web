<script setup lang="ts">
import { posts } from '~/content/posts'
import type { LocalisedText } from '~/composables/usePageSeo'

definePageMeta({
  i18n: { paths: { en: '/resources', fr: '/ressources' } },
})

const t = useT()
const { locale } = useLocale()
const localePath = useLocalePath()

const titles: LocalisedText = {
  es: 'Recursos para gestionar una clínica | QuiroFlow',
  en: 'Resources for running a clinic | QuiroFlow',
  fr: 'Ressources pour gérer un cabinet | QuiroFlow',
}
const descriptions: LocalisedText = {
  es: 'Guías prácticas sobre agenda, retención de pacientes, bonos y protección de datos en clínicas de quiropráctica, fisioterapia y osteopatía.',
  en: 'Practical guides on scheduling, patient retention, packages and data protection in chiropractic, physiotherapy and osteopathy clinics.',
  fr: "Guides pratiques sur l'agenda, la fidélisation des patients, les forfaits et la protection des données dans les cabinets de chiropraxie, kinésithérapie et ostéopathie.",
}

const hasPosts = computed(() => posts.length > 0)

const entries = computed(() =>
  [...posts]
    .sort((a, b) => b.date.localeCompare(a.date))
    .map(post => ({
      slug: post.slug[locale.value],
      date: post.date,
      title: post.title[locale.value],
      description: post.description[locale.value],
      readingMinutes: post.readingMinutes,
    })),
)

const dateFormatter = computed(() => new Intl.DateTimeFormat(locale.value, { dateStyle: 'long' }))

usePageSeo({
  titles,
  descriptions,
  // An index page with nothing on it is a thin page, and a thin page in the
  // sitemap is worse than no page at all. It indexes itself the moment the
  // first post lands -- see the matching note in nuxt.config.ts's sitemap
  // exclude list, which has to be edited by hand at the same time.
  robots: hasPosts.value ? undefined : 'noindex, follow',
})
</script>

<template>
  <div>
    <section class="border-b border-line bg-surface-page py-20">
      <div class="mx-auto flex max-w-[760px] flex-col items-center gap-5 px-8 text-center">
        <span class="w-fit rounded-full border border-brand-tintBorder bg-brand-tint px-3 py-[5px] text-[13px] font-semibold text-brand-text">
          {{ t('resources.badge') }}
        </span>
        <h1 class="text-[36px] leading-[1.15] tracking-tightTitle text-ink-900 md:text-[42px]">
          {{ t('resources.title') }}
        </h1>
        <p class="text-[16.5px] leading-[1.6] text-ink-muted">{{ t('resources.description') }}</p>
      </div>
    </section>

    <section class="py-20">
      <div class="mx-auto max-w-[760px] px-8">
        <div v-if="hasPosts" class="flex flex-col gap-5">
          <NuxtLink
            v-for="entry in entries"
            :key="entry.slug"
            :to="localePath({ name: 'recursos-slug', params: { slug: entry.slug } })"
            class="group flex flex-col gap-2 rounded-card border border-line bg-white p-7 transition-colors hover:border-brand"
          >
            <p class="text-[12.5px] font-semibold uppercase tracking-wide text-ink-faint">
              <time :datetime="entry.date">{{ dateFormatter.format(new Date(entry.date)) }}</time>
              · {{ entry.readingMinutes }} {{ t('resources.readingTime') }}
            </p>
            <h2 class="text-[19px] font-semibold tracking-tightTitle text-ink-900">{{ entry.title }}</h2>
            <p class="text-[14.5px] leading-[1.65] text-ink-muted">{{ entry.description }}</p>
            <span class="mt-1 text-[14px] font-semibold text-brand-text group-hover:underline">{{ t('resources.readMore') }} →</span>
          </NuxtLink>
        </div>

        <div v-else class="rounded-card border border-line bg-white p-8 text-center">
          <h2 class="text-[20px] font-semibold tracking-tightTitle text-ink-900">{{ t('resources.empty.title') }}</h2>
          <p class="mx-auto mt-2 max-w-[480px] text-[14.5px] leading-[1.65] text-ink-muted">{{ t('resources.empty.body') }}</p>
        </div>
      </div>
    </section>

    <EmailCapture form-name="recursos-info" />
  </div>
</template>

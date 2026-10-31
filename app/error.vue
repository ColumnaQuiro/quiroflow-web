<script setup lang="ts">
import type { NuxtError } from '#app'

// Without this file the 404 page was Nuxt's default error screen inside the
// homepage's <head>: the homepage title, index/follow, and no way back. It
// is prerendered once as dist/404.html and Netlify serves that single file
// for every unknown path in every language, so it links to all three
// homepages rather than guessing the visitor's language from the URL.
const props = defineProps<{ error: NuxtError }>()

const t = useT()
const notFound = computed(() => props.error.statusCode === 404)

useHead({
  // The brand suffix is added here, not in the dictionaries: vue-i18n reads
  // "|" as a plural separator and silently drops everything after it.
  title: () => `${notFound.value ? t('errorPage.notFoundTitle') : t('errorPage.genericTitle')} | QuiroFlow`,
  meta: [{ name: 'robots', content: 'noindex, follow' }],
})
</script>

<template>
  <NuxtLayout>
    <section class="py-28">
      <div class="mx-auto flex max-w-[560px] flex-col items-center gap-4 px-8 text-center">
        <span class="w-fit rounded-full border border-brand-tintBorder bg-brand-tint px-3 py-[5px] text-[13px] font-semibold text-brand-text">
          {{ error.statusCode }}
        </span>
        <h1 class="text-[34px] leading-[1.15] tracking-tightTitle text-ink-900">
          {{ notFound ? t('errorPage.notFoundHeading') : t('errorPage.genericHeading') }}
        </h1>
        <p class="text-[15.5px] leading-[1.6] text-ink-muted">
          {{ notFound ? t('errorPage.notFoundBody') : t('errorPage.genericBody') }}
        </p>
        <div class="mt-2 flex flex-wrap items-center justify-center gap-3">
          <a
            href="/"
            class="inline-flex items-center justify-center rounded-ctl bg-brand px-[22px] py-3 text-[14.5px] font-semibold text-white hover:bg-brand-hover"
          >
            {{ t('errorPage.home') }}
          </a>
          <a href="/en" hreflang="en" lang="en" class="rounded-ctl px-3 py-3 text-[14.5px] font-semibold text-ink-700 hover:text-ink-900">English</a>
          <a href="/fr" hreflang="fr" lang="fr" class="rounded-ctl px-3 py-3 text-[14.5px] font-semibold text-ink-700 hover:text-ink-900">Français</a>
        </div>
      </div>
    </section>
  </NuxtLayout>
</template>

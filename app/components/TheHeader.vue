<script setup lang="ts">
import { BOOKING_URL } from '~/utils/links'

const { locale } = useLocale()
const t = useT()
const localePath = useLocalePath()
const switchLocalePath = useSwitchLocalePath()

// Real hrefs (via localePath), not a hardcoded "/#slug" -- on an /en/* page
// that would take the visitor to the Spanish homepage's section instead of
// staying in English.
const homeAnchor = (hash: string) => `${localePath('index')}#${hash}`
</script>

<template>
  <header class="sticky top-0 z-20 border-b border-line bg-white/90 backdrop-blur">
    <div class="mx-auto flex h-[72px] max-w-[1120px] items-center justify-between px-8">
      <NuxtLink :to="localePath('index')" class="flex items-center gap-2.5">
        <LogoMark :size="26" />
        <span class="text-[17px] font-bold tracking-tightTitle text-ink-900">QuiroFlow</span>
      </NuxtLink>
      <nav class="hidden items-center gap-8 md:flex">
        <a :href="homeAnchor('funcionalidades')" class="text-sm font-medium text-ink-600 hover:text-ink-900">{{ t('nav.features') }}</a>
        <a :href="homeAnchor('precios')" class="text-sm font-medium text-ink-600 hover:text-ink-900">{{ t('nav.pricing') }}</a>
        <a :href="homeAnchor('comparativa')" class="text-sm font-medium text-ink-600 hover:text-ink-900">{{ t('nav.comparison') }}</a>
        <a :href="homeAnchor('practicehub')" class="text-sm font-medium text-ink-600 hover:text-ink-900">{{ t('nav.migrate') }}</a>
        <a :href="homeAnchor('contacto')" class="text-sm font-medium text-ink-600 hover:text-ink-900">{{ t('nav.contact') }}</a>
      </nav>
      <div class="flex items-center gap-3">
        <div class="flex items-center rounded-full border border-line-control bg-surface-page p-0.5 text-[12.5px] font-semibold">
          <!-- Real links to the other locale's URL (not a JS-only toggle) --
               crawlable, reinforces the hreflang tags, and works with
               right-click/open-in-new-tab like a normal link should. -->
          <NuxtLink
            :to="switchLocalePath('es')"
            class="rounded-full px-2.5 py-1 transition-colors"
            :class="locale === 'es' ? 'bg-white text-ink-900 shadow-card' : 'text-ink-faint hover:text-ink-600'"
            :aria-current="locale === 'es' ? 'true' : undefined"
          >
            ES
          </NuxtLink>
          <NuxtLink
            :to="switchLocalePath('en')"
            class="rounded-full px-2.5 py-1 transition-colors"
            :class="locale === 'en' ? 'bg-white text-ink-900 shadow-card' : 'text-ink-faint hover:text-ink-600'"
            :aria-current="locale === 'en' ? 'true' : undefined"
          >
            EN
          </NuxtLink>
          <NuxtLink
            :to="switchLocalePath('fr')"
            class="rounded-full px-2.5 py-1 transition-colors"
            :class="locale === 'fr' ? 'bg-white text-ink-900 shadow-card' : 'text-ink-faint hover:text-ink-600'"
            :aria-current="locale === 'fr' ? 'true' : undefined"
          >
            FR
          </NuxtLink>
        </div>
        <a
          :href="BOOKING_URL"
          target="_blank"
          rel="noopener"
          class="inline-flex items-center justify-center rounded-ctl bg-brand px-[22px] py-3 text-[14.5px] font-semibold text-white hover:bg-brand-hover"
        >
          {{ t('nav.bookDemo') }}
        </a>
      </div>
    </div>
  </header>
</template>

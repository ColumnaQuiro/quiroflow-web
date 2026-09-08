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
    <!-- gap-8 on the container, shrink-0 on the logo and the right-hand group,
         whitespace-nowrap on every label. Without all four, flex resolves a
         tight row by squeezing children and wrapping their text instead of
         overflowing -- which is why a scrollWidth check reports the header as
         fine while it is visibly breaking. -->
    <div class="mx-auto flex h-[72px] max-w-[1120px] items-center justify-between gap-3 px-5 md:gap-8 md:px-8">
      <NuxtLink :to="localePath('index')" class="flex shrink-0 items-center gap-2.5">
        <LogoMark :size="26" />
        <span class="text-[16px] font-bold tracking-tightTitle text-ink-900 md:text-[17px]">QuiroFlow</span>
      </NuxtLink>
      <!-- Tighter between nav items at lg (six of them only just fit at
           1024px), roomier from xl. The gap-8 separating the three groups
           stays put at every size. -->
      <nav class="hidden items-center gap-4 lg:flex xl:gap-6">
        <a :href="homeAnchor('funcionalidades')" class="whitespace-nowrap text-sm font-medium text-ink-600 hover:text-ink-900">{{ t('nav.features') }}</a>
        <NuxtLink :to="localePath('software-fisioterapia')" class="whitespace-nowrap text-sm font-medium text-ink-600 hover:text-ink-900">{{ t('nav.physio') }}</NuxtLink>
        <a :href="homeAnchor('precios')" class="whitespace-nowrap text-sm font-medium text-ink-600 hover:text-ink-900">{{ t('nav.pricing') }}</a>
        <a :href="homeAnchor('comparativa')" class="whitespace-nowrap text-sm font-medium text-ink-600 hover:text-ink-900">{{ t('nav.comparison') }}</a>
        <a :href="homeAnchor('practicehub')" class="whitespace-nowrap text-sm font-medium text-ink-600 hover:text-ink-900">{{ t('nav.migrate') }}</a>
        <a :href="homeAnchor('contacto')" class="whitespace-nowrap text-sm font-medium text-ink-600 hover:text-ink-900">{{ t('nav.contact') }}</a>
      </nav>
      <div class="flex shrink-0 items-center gap-2.5 md:gap-4">
        <div class="flex items-center rounded-full border border-line-control bg-surface-page p-0.5 text-[12px] font-semibold md:text-[12.5px]">
          <!-- Real links to the other locale's URL (not a JS-only toggle) --
               crawlable, reinforces the hreflang tags, and works with
               right-click/open-in-new-tab like a normal link should. -->
          <NuxtLink
            :to="switchLocalePath('es')"
            class="rounded-full px-2 py-1 transition-colors md:px-2.5"
            :class="locale === 'es' ? 'bg-white text-ink-900 shadow-card' : 'text-ink-faint hover:text-ink-600'"
            :aria-current="locale === 'es' ? 'true' : undefined"
          >
            ES
          </NuxtLink>
          <NuxtLink
            :to="switchLocalePath('en')"
            class="rounded-full px-2 py-1 transition-colors md:px-2.5"
            :class="locale === 'en' ? 'bg-white text-ink-900 shadow-card' : 'text-ink-faint hover:text-ink-600'"
            :aria-current="locale === 'en' ? 'true' : undefined"
          >
            EN
          </NuxtLink>
          <NuxtLink
            :to="switchLocalePath('fr')"
            class="rounded-full px-2 py-1 transition-colors md:px-2.5"
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
          class="inline-flex shrink-0 items-center justify-center whitespace-nowrap rounded-ctl bg-brand px-3.5 py-2.5 text-[13.5px] font-semibold text-white hover:bg-brand-hover sm:px-[22px] sm:py-3 sm:text-[14.5px]"
        >
          <span class="sm:hidden">{{ t('nav.bookDemoShort') }}</span>
          <span class="hidden sm:inline">{{ t('nav.bookDemo') }}</span>
        </a>
      </div>
    </div>
  </header>
</template>

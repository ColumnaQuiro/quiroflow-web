<script setup lang="ts">
import { BOOKING_URL } from '~/utils/links'

const { locale, setLocale } = useLocale()
const t = useT()
</script>

<template>
  <header class="sticky top-0 z-20 border-b border-line bg-white/90 backdrop-blur">
    <div class="mx-auto flex h-[72px] max-w-[1120px] items-center justify-between px-8">
      <div class="flex items-center gap-2.5">
        <LogoMark :size="26" />
        <span class="text-[17px] font-bold tracking-tightTitle text-ink-900">QuiroFlow</span>
      </div>
      <nav class="hidden items-center gap-8 md:flex">
        <a href="#funcionalidades" class="text-sm font-medium text-ink-600 hover:text-ink-900">{{ t('nav.features') }}</a>
        <a href="#precios" class="text-sm font-medium text-ink-600 hover:text-ink-900">{{ t('nav.pricing') }}</a>
        <a href="#comparativa" class="text-sm font-medium text-ink-600 hover:text-ink-900">{{ t('nav.comparison') }}</a>
        <a href="#practicehub" class="text-sm font-medium text-ink-600 hover:text-ink-900">{{ t('nav.migrate') }}</a>
        <a href="#contacto" class="text-sm font-medium text-ink-600 hover:text-ink-900">{{ t('nav.contact') }}</a>
      </nav>
      <div class="flex items-center gap-3">
        <div class="flex items-center rounded-full border border-line-control bg-surface-page p-0.5 text-[12.5px] font-semibold">
          <button
            type="button"
            class="rounded-full px-2.5 py-1 transition-colors"
            :class="locale === 'es' ? 'bg-white text-ink-900 shadow-card' : 'text-ink-faint hover:text-ink-600'"
            :aria-pressed="locale === 'es'"
            @click="setLocale('es')"
          >
            ES
          </button>
          <button
            type="button"
            class="rounded-full px-2.5 py-1 transition-colors"
            :class="locale === 'en' ? 'bg-white text-ink-900 shadow-card' : 'text-ink-faint hover:text-ink-600'"
            :aria-pressed="locale === 'en'"
            @click="setLocale('en')"
          >
            EN
          </button>
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

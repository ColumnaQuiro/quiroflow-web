<script setup lang="ts">
import { BOOKING_URL, SIGNUP_URL } from '~/utils/links'

// Shared by /software-quiropractica and /software-fisioterapia. The two pages
// had (and would keep) byte-identical hero markup differing only in which
// translation keys it reads, which is how the CTA on one of them drifts out
// of sync with the other.
defineProps<{ badge: string; title: string; description: string; ctaPrimary: string; ctaSecondary: string; seeFeatures: string }>()

const t = useT()
const { tm } = useI18n()
</script>

<template>
  <section class="border-b border-line bg-surface-page py-20">
    <div class="mx-auto flex max-w-[1120px] flex-col items-center gap-5 px-8 text-center">
      <span class="w-fit rounded-full border border-brand-tintBorder bg-brand-tint px-3 py-[5px] text-[13px] font-semibold text-brand-text">
        {{ badge }}
      </span>
      <h1 class="max-w-[760px] text-[38px] leading-[1.12] tracking-tightTitle text-ink-900 md:text-[46px]">
        {{ title }}
      </h1>
      <p class="max-w-[640px] text-[16.5px] leading-[1.6] text-ink-muted">
        {{ description }}
      </p>
      <div class="mt-2 flex flex-wrap items-center justify-center gap-3">
        <a
          :href="SIGNUP_URL"
          target="_blank"
          rel="noopener"
          class="inline-flex items-center justify-center rounded-ctl bg-brand px-[22px] py-3 text-[14.5px] font-semibold text-white hover:bg-brand-hover"
        >
          {{ ctaPrimary }}
        </a>
        <a
          :href="BOOKING_URL"
          target="_blank"
          rel="noopener"
          class="inline-flex items-center justify-center rounded-ctl border border-line-control bg-white px-[22px] py-3 text-[14.5px] font-semibold text-ink-700 hover:border-ink-faint"
        >
          {{ ctaSecondary }}
        </a>
        <a
          href="#funcionalidades"
          class="inline-flex items-center justify-center px-2 py-3 text-[14.5px] font-semibold text-brand-text underline-offset-4 hover:underline"
        >
          {{ seeFeatures }}
        </a>
      </div>
      <ul class="mt-1 flex flex-wrap items-center justify-center gap-x-4 gap-y-2">
        <li v-for="item in (tm('hero.proof') as string[])" :key="item" class="flex items-center gap-1.5 text-[13.5px] font-medium text-ink-600">
          <svg width="16" height="16" viewBox="0 0 18 18" fill="none" class="shrink-0" aria-hidden="true">
            <circle cx="9" cy="9" r="9" fill="#E9F6EF" />
            <path d="M5.5 9.3l2.2 2.2 4.8-5" stroke="#157F52" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" fill="none" />
          </svg>
          {{ item }}
        </li>
      </ul>
      <!-- Keeps the eyebrow text from the parent page addressable by tests and
           by the header anchor without the pages repeating this block. -->
      <slot name="after" />
    </div>
  </section>
</template>

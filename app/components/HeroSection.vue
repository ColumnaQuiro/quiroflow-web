<script setup lang="ts">
import { BOOKING_URL, SIGNUP_URL } from '~/utils/links'

const t = useT()
// tm(), not t() -- `hero.proof` resolves to an array of strings, and t()
// would stringify the whole array into one unusable line.
const { tm } = useI18n()
</script>

<template>
  <section class="bg-gradient-to-b from-[#F7F8FF] to-white pb-16 pt-[88px]">
    <div class="mx-auto grid max-w-[1120px] grid-cols-1 items-center gap-14 px-8 md:grid-cols-2">
      <div class="flex flex-col gap-[22px]">
        <span class="w-fit rounded-full border border-brand-tintBorder bg-brand-tint px-3 py-[5px] text-[13px] font-semibold text-brand-text">
          {{ t('hero.badge') }}
        </span>
        <h1 class="text-[34px] leading-[1.12] tracking-tightTitle text-ink-900 sm:text-[40px] md:text-[46px]">
          {{ t('hero.titleLine1') }}<br>{{ t('hero.titleLine2') }}
        </h1>
        <p class="max-w-[480px] text-[17px] leading-[1.55] text-ink-muted">
          {{ t('hero.description') }}
        </p>
        <div class="mt-1 flex flex-wrap gap-3">
          <!-- Primary is the self-serve trial and it opens the real sign-up.
               The demo keeps its own button rather than sharing one label
               with the trial, which is what made the old CTA a promise the
               destination did not keep. -->
          <a :href="SIGNUP_URL" target="_blank" rel="noopener" class="inline-flex items-center justify-center rounded-ctl bg-brand px-[26px] py-[13px] text-[15px] font-semibold text-white hover:bg-brand-hover">
            {{ t('hero.ctaPrimary') }}
          </a>
          <a :href="BOOKING_URL" target="_blank" rel="noopener" class="inline-flex items-center justify-center rounded-ctl border border-line-control bg-white px-[26px] py-[13px] text-[15px] font-semibold text-ink-900 hover:border-ink-faint">
            {{ t('hero.ctaSecondary') }}
          </a>
        </div>
        <!-- Risk reversal above the fold. These three facts used to live only
             in the footnote under Pricing, where a visitor who does not
             scroll never reaches them. -->
        <ul class="flex flex-wrap items-center gap-x-4 gap-y-2">
          <li v-for="item in (tm('hero.proof') as string[])" :key="item" class="flex items-center gap-1.5 text-[13.5px] font-medium text-ink-600">
            <svg width="16" height="16" viewBox="0 0 18 18" fill="none" class="shrink-0" aria-hidden="true">
              <circle cx="9" cy="9" r="9" fill="#E9F6EF" />
              <path d="M5.5 9.3l2.2 2.2 4.8-5" stroke="#157F52" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" fill="none" />
            </svg>
            {{ item }}
          </li>
        </ul>
      </div>
      <MockupsCalendarMockup />
    </div>
  </section>
</template>

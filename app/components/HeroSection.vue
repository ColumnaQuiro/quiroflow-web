<script setup lang="ts">
import { BOOKING_URL } from '~/utils/links'

const t = useT()
</script>

<template>
  <section class="bg-gradient-to-b from-[#F7F8FF] to-white pb-16 pt-[88px]">
    <div class="mx-auto grid max-w-[1120px] grid-cols-1 items-center gap-14 px-8 md:grid-cols-2">
      <div class="flex flex-col gap-[22px]">
        <span class="w-fit rounded-full border border-brand-tintBorder bg-brand-tint px-3 py-[5px] text-[13px] font-semibold text-brand-text">
          {{ t('hero.badge') }}
        </span>
        <h1 class="text-[46px] leading-[1.12] tracking-tightTitle text-ink-900">
          {{ t('hero.titleLine1') }}<br>{{ t('hero.titleLine2') }}
        </h1>
        <p class="max-w-[480px] text-[17px] leading-[1.55] text-ink-muted">
          {{ t('hero.description') }}
        </p>
        <div class="mt-1 flex gap-3">
          <a :href="BOOKING_URL" target="_blank" rel="noopener" class="inline-flex items-center justify-center rounded-ctl bg-brand px-[26px] py-[13px] text-[15px] font-semibold text-white hover:bg-brand-hover">
            {{ t('hero.ctaPrimary') }}
          </a>
          <a href="#funcionalidades" class="inline-flex items-center justify-center rounded-ctl border border-line-control px-[26px] py-[13px] text-[15px] font-semibold text-ink-900 hover:border-ink-faint">
            {{ t('hero.ctaSecondary') }}
          </a>
        </div>
      </div>
      <MockupsCalendarMockup />
    </div>
  </section>
</template>

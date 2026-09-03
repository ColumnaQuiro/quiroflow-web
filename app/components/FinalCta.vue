<script setup lang="ts">
import { BOOKING_URL } from '~/utils/links'

const t = useT()
</script>

<template>
  <section class="bg-brand py-24">
    <div class="mx-auto flex max-w-[1120px] flex-col items-center gap-[18px] px-8 text-center">
      <h2 class="text-[32px] tracking-tightTitle text-white">{{ t('finalCta.title') }}</h2>
      <p class="max-w-[480px] text-[15.5px] text-brand-tintBorder">
        {{ t('finalCta.description') }}
      </p>
      <a :href="BOOKING_URL" target="_blank" rel="noopener" class="mt-1 inline-flex items-center justify-center rounded-ctl bg-white px-[26px] py-[13px] text-[15px] font-semibold text-brand-text hover:bg-brand-tint">
        {{ t('finalCta.cta') }}
      </a>
    </div>
  </section>
</template>

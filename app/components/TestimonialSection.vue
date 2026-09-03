<script setup lang="ts">
const t = useT()
</script>

<template>
  <section class="border-y border-line bg-surface-page py-24">
    <div class="mx-auto flex max-w-[720px] flex-col items-center gap-5 px-8 text-center">
      <svg width="32" height="24" viewBox="0 0 32 24" fill="#D8DCFB">
        <path d="M0 24V14.4C0 6.4 5.2 1.2 12.8 0l1.6 4.4C9.2 5.6 6.8 8.4 6.4 12h6.4v12H0zm17.6 0V14.4c0-8 5.2-13.2 12.8-14.4L32 4.4c-5.2 1.2-7.6 4-8 7.6h6.4v12H17.6z" />
      </svg>
      <p class="text-[19px] leading-[1.5] text-ink-700">
        {{ t('testimonial.quote') }}
      </p>
      <div>
        <p class="text-[14.5px] font-semibold text-ink-700">{{ t('testimonial.name') }}</p>
        <p class="text-[13px] text-ink-faint">{{ t('testimonial.location') }}</p>
      </div>
    </div>
  </section>
</template>

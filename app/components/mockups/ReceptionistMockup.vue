<script setup lang="ts">
const t = useT()
</script>

<template>
  <div class="rounded-card border border-line bg-white p-[22px]">
    <p class="mb-1 text-xs font-semibold text-ink-faint">{{ t('receptionist.visual.header') }}</p>
    <div class="mt-2 flex flex-col gap-1.5">
      <div class="max-w-[85%] self-start rounded-[12px] rounded-bl-[3px] bg-surface-page px-3.5 py-2.5">
        <p class="text-[13.5px] leading-[1.5] text-ink-600">{{ t('receptionist.visual.patient1') }}</p>
      </div>
      <div class="max-w-[85%] self-end rounded-[12px] rounded-br-[3px] bg-brand px-3.5 py-2.5">
        <p class="text-[13.5px] leading-[1.5] text-white">{{ t('receptionist.visual.ai1') }}</p>
      </div>
      <div class="max-w-[60%] self-start rounded-[12px] rounded-bl-[3px] bg-surface-page px-3.5 py-2.5">
        <p class="text-[13.5px] leading-[1.5] text-ink-600">{{ t('receptionist.visual.patient2') }}</p>
      </div>
      <div class="max-w-[85%] self-end rounded-[12px] rounded-br-[3px] bg-brand px-3.5 py-2.5">
        <p class="text-[13.5px] leading-[1.5] text-white">{{ t('receptionist.visual.ai2') }}</p>
      </div>
      <div class="mt-2 flex flex-wrap items-center justify-between gap-2">
        <span class="rounded-full bg-success-bg px-2 py-[3px] text-[11px] font-semibold text-success-text">{{ t('receptionist.visual.booked') }}</span>
        <span class="text-[11.5px] text-ink-faint">{{ t('receptionist.visual.footer') }}</span>
      </div>
    </div>
  </div>
</template>

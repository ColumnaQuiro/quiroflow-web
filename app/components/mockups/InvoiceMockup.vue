<script setup lang="ts">
// The service line is the one string in this mockup that is not the same in
// every clinic -- a fisio invoice that reads "Ajuste quiropráctico" undoes
// the whole point of a dedicated fisio page. Defaults to the neutral wording
// used on the homepage; the vertical pages pass their own.
const props = defineProps<{ serviceLabel?: string }>()
const t = useT()
const service = computed(() => props.serviceLabel || t('billing.visual.item1'))
</script>

<template>
  <div class="rounded-card border border-line bg-white p-[22px]">
    <p class="mb-3 text-xs font-semibold text-ink-faint">{{ t('billing.visual.header') }}</p>
    <div class="flex justify-between border-b border-line-control/60 py-2 text-[13.5px] text-ink-600">
      <span>{{ service }}</span>
      <span class="font-semibold">{{ t('billing.visual.item1Price') }}</span>
    </div>
    <div class="flex justify-between border-b border-line-control/60 py-2 text-[13.5px] text-ink-600">
      <span>{{ t('billing.visual.item2') }}</span>
      <span class="font-semibold">{{ t('billing.visual.item2Price') }}</span>
    </div>
    <div class="flex justify-between py-2.5 text-[14px] font-bold text-ink-900">
      <span>{{ t('billing.visual.total') }}</span>
      <span>{{ t('billing.visual.totalPrice') }}</span>
    </div>
    <div class="mt-2.5 flex flex-wrap gap-1.5">
      <span class="inline-flex items-center gap-1.5 rounded-full bg-success-bg px-2.5 py-[5px] text-[11.5px] font-semibold text-success-text">
        {{ t('billing.visual.recurring') }}
      </span>
      <span class="inline-flex items-center gap-1.5 rounded-full bg-brand-tint px-2.5 py-[5px] text-[11.5px] font-semibold text-brand-text">
        {{ t('billing.visual.legal') }}
      </span>
    </div>
  </div>
</template>

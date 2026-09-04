<script setup lang="ts">
const t = useT()
// tm(), not t() -- resolves to an array of {label, type} objects, and
// t() would stringify it instead of returning the raw array to v-for.
const { tm } = useI18n()
</script>

<template>
  <div class="rounded-card border border-line bg-white p-[22px]">
    <p class="mb-3 text-xs font-semibold text-ink-faint">{{ t('forms.visual.header') }}</p>
    <div class="flex flex-col gap-2">
      <div v-for="f in tm('forms.visual.fields')" :key="f.label" class="flex items-center justify-between rounded-[7px] border border-line-control/60 px-3 py-[9px]">
        <span class="text-[13px] text-ink-600">{{ f.label }}</span>
        <span class="rounded-[5px] bg-surface-page px-2 py-[3px] text-[10.5px] font-semibold text-ink-faint">{{ f.type }}</span>
      </div>
    </div>
  </div>
</template>

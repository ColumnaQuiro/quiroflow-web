<script setup lang="ts">
const t = useT()
// tm(), not t() -- resolves to an array of {label, value} objects, and
// t() would stringify it instead of returning the raw array to v-for.
const { tm } = useI18n()
</script>

<template>
  <div class="rounded-card border border-line bg-white p-[22px]">
    <div class="mb-3 flex items-center justify-between">
      <p class="text-xs font-semibold text-ink-faint">{{ t('reports.visual.header') }}</p>
      <p class="text-[11px] text-ink-faint">{{ t('reports.visual.compareLabel') }}</p>
    </div>
    <div class="grid grid-cols-2 gap-2.5 sm:grid-cols-3">
      <div v-for="stat in tm('reports.visual.stats')" :key="stat.label" class="rounded-[8px] bg-surface-page p-3">
        <p class="mb-1 text-[11px] text-ink-faint">{{ stat.label }}</p>
        <div class="flex items-baseline gap-1.5">
          <p class="text-[17px] font-bold text-ink-900">{{ stat.value }}</p>
          <span class="text-[11px] font-semibold" :class="stat.up ? 'text-success-text' : 'text-danger-text'">
            {{ stat.up ? '↑' : '↓' }} {{ stat.delta }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

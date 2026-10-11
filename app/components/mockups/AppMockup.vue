<script setup lang="ts">
const t = useT()
// tm(), not t() -- both lists resolve to arrays of strings, and t() would
// stringify them instead of returning the raw arrays to v-for.
const { tm } = useI18n()

const columns = computed(() => [
  { header: t('app.visual.staffHeader'), items: tm('app.visual.staff') as string[] },
  { header: t('app.visual.patientHeader'), items: tm('app.visual.patient') as string[] },
])
</script>

<template>
  <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
    <div
      v-for="col in columns"
      :key="col.header"
      class="rounded-[22px] border border-line bg-white p-[18px] shadow-[0_1px_3px_rgba(16,24,40,0.06)]"
    >
      <div class="mx-auto mb-4 h-1.5 w-12 rounded-full bg-line" aria-hidden="true" />
      <p class="mb-3 text-xs font-semibold text-ink-faint">{{ col.header }}</p>
      <ul class="flex flex-col gap-2">
        <li
          v-for="item in col.items"
          :key="item"
          class="flex items-start gap-2 rounded-ctl border border-line-control/60 px-2.5 py-2 text-[12.5px] font-semibold text-ink-600"
        >
          <svg width="14" height="14" viewBox="0 0 18 18" fill="none" class="mt-px shrink-0" aria-hidden="true">
            <circle cx="9" cy="9" r="9" fill="#EEF0FE" />
            <path d="M5.5 9.3l2.2 2.2 4.8-5" stroke="#4F46E5" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" fill="none" />
          </svg>
          <span>{{ item }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
const bars = [45, 65, 90, 55, 75, 60]
</script>

<template>
  <div class="rounded-card border border-line bg-white p-[22px]">
    <div class="mb-4 grid grid-cols-2 gap-2.5">
      <div class="rounded-[8px] bg-surface-page p-3">
        <p class="mb-1 text-[11px] text-ink-faint">Ocupación</p>
        <p class="text-[19px] font-bold text-ink-900">82%</p>
      </div>
      <div class="rounded-[8px] bg-surface-page p-3">
        <p class="mb-1 text-[11px] text-ink-faint">Ingresos del mes</p>
        <p class="text-[19px] font-bold text-ink-900">12.480 €</p>
      </div>
    </div>
    <div class="flex h-[70px] items-end gap-2">
      <div
        v-for="(h, i) in bars"
        :key="i"
        class="flex-1 rounded-t-[4px]"
        :class="i === 2 ? 'bg-brand' : 'bg-brand-tintBorder'"
        :style="{ height: h + '%' }"
      />
    </div>
  </div>
</template>

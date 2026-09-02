<script setup lang="ts">
const stats = [
  { label: 'Ocupación', value: '82%' },
  { label: 'Ingresos del mes', value: '12.480 €' },
  { label: 'PVA', value: '42 €' },
  { label: 'Retención', value: '68%' },
  { label: 'Conversión', value: '34%' },
  { label: '1ª visitas (mes)', value: '24' },
]
</script>

<template>
  <div class="rounded-card border border-line bg-white p-[22px]">
    <p class="mb-3 text-xs font-semibold text-ink-faint">ESTADÍSTICAS</p>
    <div class="grid grid-cols-2 gap-2.5 sm:grid-cols-3">
      <div v-for="stat in stats" :key="stat.label" class="rounded-[8px] bg-surface-page p-3">
        <p class="mb-1 text-[11px] text-ink-faint">{{ stat.label }}</p>
        <p class="text-[17px] font-bold text-ink-900">{{ stat.value }}</p>
      </div>
    </div>
  </div>
</template>

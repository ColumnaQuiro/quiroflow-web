<script setup lang="ts">
const stats = [
  { label: 'Ocupación', value: '82%', delta: '+4%', up: true },
  { label: 'Ingresos del mes', value: '12.480 €', delta: '+9%', up: true },
  { label: 'PVA', value: '42 €', delta: '+2%', up: true },
  { label: 'Retención', value: '68%', delta: '-3%', up: false },
  { label: 'Conversión', value: '34%', delta: '+6%', up: true },
  { label: '1ª visitas (mes)', value: '24', delta: '+1', up: true },
]
</script>

<template>
  <div class="rounded-card border border-line bg-white p-[22px]">
    <div class="mb-3 flex items-center justify-between">
      <p class="text-xs font-semibold text-ink-faint">ESTADÍSTICAS</p>
      <p class="text-[11px] text-ink-faint">vs. mes anterior</p>
    </div>
    <div class="grid grid-cols-2 gap-2.5 sm:grid-cols-3">
      <div v-for="stat in stats" :key="stat.label" class="rounded-[8px] bg-surface-page p-3">
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

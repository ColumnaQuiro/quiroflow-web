<script setup lang="ts">
interface Appt { day: number; label: string; tone: 'brand' | 'success' | 'danger' }
const rows: { time: string; appts: (Appt | null)[] }[] = [
  { time: '09', appts: [{ day: 0, label: 'Ana · Ajuste', tone: 'brand' }, null, { day: 2, label: 'Marco · Revisión', tone: 'success' }] },
  { time: '10', appts: [null, { day: 1, label: 'Elena · 1ª visita', tone: 'brand' }, null] },
  { time: '11', appts: [{ day: 0, label: 'Sofía · Cancelada', tone: 'danger' }, null, { day: 2, label: 'Diego · Ajuste', tone: 'success' }] },
  { time: '12', appts: [{ day: 0, label: 'Lucía · Ajuste', tone: 'brand' }, null, null] },
]
const toneClasses: Record<Appt['tone'], string> = {
  brand: 'bg-brand-tint border-brand text-brand-text',
  success: 'bg-success-bg border-[#1D8A5B] text-success-text',
  danger: 'bg-danger-bg border-[#B4230F] text-danger-text',
}
</script>

<template>
  <div class="rounded-card border border-line bg-white p-5 shadow-card">
    <div class="mb-4 flex items-center justify-between">
      <div class="flex items-center gap-2">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="#6B7180" stroke-width="1.3">
          <rect x="2.5" y="3.5" width="11" height="10" rx="1.5" />
          <path d="M2.5 6.6h11M5.6 2v2M10.4 2v2" />
        </svg>
        <span class="text-[13px] font-semibold text-ink-700">Semana laboral</span>
      </div>
      <span class="text-xs text-ink-faint">1 – 5 sept</span>
    </div>
    <div class="grid grid-cols-[36px_repeat(3,minmax(0,1fr))]">
      <div />
      <div v-for="d in ['LUN', 'MAR', 'MIÉ']" :key="d" class="pb-2 text-center text-[11px] font-semibold text-ink-faint">{{ d }}</div>

      <template v-for="row in rows" :key="row.time">
        <div class="pr-1.5 text-right text-[10px] text-ink-faint/70">{{ row.time }}</div>
        <div v-for="col in 3" :key="col" class="border-t border-line-control/60 p-1">
          <div
            v-if="row.appts[col - 1]"
            class="rounded-[5px] border-l-[3px] px-1.5 py-1 text-[11px] font-semibold"
            :class="toneClasses[row.appts[col - 1]!.tone]"
          >
            {{ row.appts[col - 1]!.label }}
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

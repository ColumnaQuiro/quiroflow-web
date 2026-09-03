<script setup lang="ts">
type ApptType = 'Ajuste' | '1ª visita' | 'Revisión' | 'Cancelada'
interface Appt { day: number; name: string; type: ApptType }
const rows: { time: string; appts: (Appt | null)[] }[] = [
  { time: '09', appts: [{ day: 0, name: 'Ana', type: 'Ajuste' }, null, { day: 2, name: 'Marco', type: 'Revisión' }] },
  { time: '10', appts: [null, { day: 1, name: 'Elena', type: '1ª visita' }, null] },
  { time: '11', appts: [{ day: 0, name: 'Sofía', type: 'Cancelada' }, null, { day: 2, name: 'Diego', type: 'Ajuste' }] },
  { time: '12', appts: [{ day: 0, name: 'Lucía', type: 'Ajuste' }, null, null] },
]
const toneClasses: Record<ApptType, string> = {
  'Ajuste': 'bg-brand-tint border-brand text-brand-text',
  '1ª visita': 'bg-[#FDF3E7] border-[#B4650A] text-[#8A4E08]',
  'Revisión': 'bg-success-bg border-[#1D8A5B] text-success-text',
  'Cancelada': 'bg-danger-bg border-[#B4230F] text-danger-text',
}
const dotClasses: Record<ApptType, string> = {
  'Ajuste': 'bg-brand',
  '1ª visita': 'bg-[#B4650A]',
  'Revisión': 'bg-[#1D8A5B]',
  'Cancelada': 'bg-[#B4230F]',
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
            :class="toneClasses[row.appts[col - 1]!.type]"
          >
            {{ row.appts[col - 1]!.name }} · {{ row.appts[col - 1]!.type }}
          </div>
        </div>
      </template>
    </div>
    <div class="mt-3 flex flex-wrap gap-x-3 gap-y-1.5 border-t border-line-control/60 pt-2.5">
      <div v-for="type in Object.keys(toneClasses) as ApptType[]" :key="type" class="flex items-center gap-1.5">
        <span class="h-[7px] w-[7px] rounded-full" :class="dotClasses[type]" />
        <span class="text-[10px] text-ink-faint">{{ type }}</span>
      </div>
    </div>
  </div>
</template>

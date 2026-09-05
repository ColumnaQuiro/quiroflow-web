<script setup lang="ts">
type Cell = boolean

interface RowFlags {
  quiroflow: Cell
  practicehub: Cell
  quirohiro: Cell
  doctoralia: Cell
  quirocitas: Cell
}

const competitors = [
  { key: 'practicehub', name: 'PracticeHub' },
  { key: 'quirohiro', name: 'QuiroHiro' },
  { key: 'doctoralia', name: 'Doctoralia' },
  { key: 'quirocitas', name: 'Quirocitas' },
] as const

// QuiroHiro's flags are set from what quirohiro.io publicly advertises on its
// own site (checked September 2026): automatic WhatsApp appointment reminders
// and automated Google review requests are stated outright; the rest are not
// shown publicly, which is exactly what the "—" and the footnote below mean.
// It does advertise generic automated campaigns and real-time financial
// reports, but neither is the same claim as a referral-specific thank-you
// campaign or retention/conversion/value-per-visit stats, so those stay "—".
const rowFlags: RowFlags[] = [
  { quiroflow: true, practicehub: false, quirohiro: false, doctoralia: false, quirocitas: false },
  { quiroflow: true, practicehub: false, quirohiro: true, doctoralia: false, quirocitas: false },
  { quiroflow: true, practicehub: false, quirohiro: false, doctoralia: false, quirocitas: false },
  { quiroflow: true, practicehub: false, quirohiro: false, doctoralia: false, quirocitas: false },
  { quiroflow: true, practicehub: true, quirohiro: false, doctoralia: false, quirocitas: false },
  { quiroflow: true, practicehub: false, quirohiro: false, doctoralia: true, quirocitas: true },
  { quiroflow: true, practicehub: true, quirohiro: false, doctoralia: true, quirocitas: false },
  { quiroflow: true, practicehub: false, quirohiro: false, doctoralia: true, quirocitas: false },
  { quiroflow: true, practicehub: false, quirohiro: false, doctoralia: false, quirocitas: false },
  { quiroflow: true, practicehub: false, quirohiro: false, doctoralia: false, quirocitas: false },
  { quiroflow: true, practicehub: false, quirohiro: true, doctoralia: true, quirocitas: false },
]

const t = useT()
// tm(), not t() -- resolves to an array of feature-name strings, and t()
// would stringify the whole array into one unusable string instead of
// returning it raw for .map() to iterate.
const { tm } = useI18n()
const rows = computed(() => (tm('comparison.rows') as string[]).map((feature, i) => ({ feature, ...rowFlags[i] })))
</script>

<template>
  <section id="comparativa" class="border-y border-line bg-surface-page py-24">
    <div class="mx-auto max-w-[1120px] px-8">
      <div class="mx-auto mb-10 flex max-w-[640px] flex-col items-center gap-4 text-center">
        <span class="w-fit rounded-full border border-brand-tintBorder bg-brand-tint px-3 py-[5px] text-[13px] font-semibold text-brand-text">
          {{ t('comparison.badge') }}
        </span>
        <h2 class="text-[30px] tracking-tightTitle text-ink-900">{{ t('comparison.title') }}</h2>
        <p class="text-[15.5px] leading-[1.6] text-ink-muted">
          {{ t('comparison.subtitle') }}
        </p>
      </div>

      <div class="overflow-x-auto rounded-card border border-line bg-white shadow-card">
        <table class="w-full min-w-[720px] border-collapse text-left">
          <thead>
            <tr class="border-b border-line">
              <th class="sticky left-0 w-[280px] bg-white px-5 py-4 text-[13px] font-semibold text-ink-faint">
                {{ t('comparison.featureHeader') }}
              </th>
              <th class="bg-brand-tint px-4 py-4 text-center text-[13.5px] font-bold text-brand-text">
                QuiroFlow
              </th>
              <th v-for="c in competitors" :key="c.key" class="px-4 py-4 text-center text-[13.5px] font-semibold text-ink-600">
                {{ c.name }}
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="row in rows" :key="row.feature" class="border-b border-line/70 last:border-0">
              <td class="sticky left-0 bg-white px-5 py-3.5 text-[14px] text-ink-700">
                {{ row.feature }}
              </td>
              <td class="bg-brand-tint/40 px-4 py-3.5 text-center">
                <svg v-if="row.quiroflow" width="18" height="18" viewBox="0 0 18 18" fill="none" class="mx-auto">
                  <circle cx="9" cy="9" r="9" fill="#E9F6EF" />
                  <path d="M5.5 9.3l2.2 2.2 4.8-5" stroke="#157F52" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" fill="none" />
                </svg>
                <span v-else class="text-ink-faint">—</span>
              </td>
              <td v-for="c in competitors" :key="c.key" class="px-4 py-3.5 text-center">
                <svg v-if="row[c.key]" width="18" height="18" viewBox="0 0 18 18" fill="none" class="mx-auto">
                  <circle cx="9" cy="9" r="9" fill="#F1F2F5" />
                  <path d="M5.5 9.3l2.2 2.2 4.8-5" stroke="#5B6072" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" fill="none" />
                </svg>
                <span v-else class="text-ink-faint">—</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <p class="mt-4 text-[12.5px] leading-[1.6] text-ink-faint">
        {{ t('comparison.footnote') }}
      </p>
    </div>
  </section>
</template>

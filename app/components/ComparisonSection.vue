<script setup lang="ts">
type Cell = boolean

interface RowFlags {
  quiroflow: Cell
  practicehub: Cell
  quirohiro: Cell
  cliniccloud: Cell
  doctoralia: Cell
  quirocitas: Cell
}

const competitors = [
  { key: 'practicehub', name: 'PracticeHub' },
  { key: 'quirohiro', name: 'QuiroHiro' },
  { key: 'cliniccloud', name: 'Clinic Cloud' },
  { key: 'doctoralia', name: 'Doctoralia' },
  { key: 'quirocitas', name: 'Quirocitas' },
] as const

// Every flag below was re-checked against each vendor's own website in
// October 2026, after QuiroHiro told us the table undersold them. A tick means
// the vendor states it on its own site (home, feature, pricing or product
// pages) or confirmed it to us directly; "—" means not shown publicly, per the footnote, not proven absent.
// Where a public claim is close enough to the row, it gets the tick -- erring
// generous on competitors is the safe side of a comparison table.
//
// What changed in that pass:
// - QuiroHiro: AI receptionist ticked from its site (CAi books, confirms and
//   reschedules 24/7 over WhatsApp and voice, quirohiro.io/cai). QuiroHiro
//   then sent us, in October 2026, a marked-up copy of this table claiming
//   data export, automatic room/table assignment, online booking, forms,
//   retention stats, waitlist, treatment-plan alerts and referral campaigns.
//   Those are ticked on their word -- the footnote covers vendor-confirmed
//   cells. They did not claim patient-chosen reminders or legal invoicing for
//   bonos, and the posture and exercise rows came after their markup.
// - PracticeHub: data export ("Export your records to Excel"), online booking,
//   invoicing for prepaid packages and memberships, and exercise programs in
//   its Patient App, all on practicehub.io/features-overview and /patient-app.
//   No WhatsApp or review requests of its own: those come via integrations.
// - Clinic Cloud: online booking (through its Doctoralia integration),
//   Verifactu invoicing with bonos, and Noa Reception, its AI phone
//   receptionist (early access at the time of checking).
// - Doctoralia: WhatsApp reminders and confirmation, and online booking
//   (pro.doctoralia.es). Its stats tick predates this pass; its page only
//   says "informes operativos", kept generously.
// - Quirocitas lives at quirocitas.es now (the .com no longer resolves). It
//   advertises facturas and bonos and table management ("gestión de
//   camillas", not automatic assignment), and shows no prices.
// Nobody but QuiroFlow advertises posture analysis.
const rowFlags: RowFlags[] = [
  // Full data export
  { quiroflow: true, practicehub: true, quirohiro: true, cliniccloud: false, doctoralia: false, quirocitas: false },
  // Automatic room/table assignment
  { quiroflow: true, practicehub: false, quirohiro: true, cliniccloud: false, doctoralia: false, quirocitas: false },
  // WhatsApp reminders and confirmation
  { quiroflow: true, practicehub: false, quirohiro: true, cliniccloud: true, doctoralia: true, quirocitas: false },
  // Patient chooses how many reminders
  { quiroflow: true, practicehub: false, quirohiro: false, cliniccloud: false, doctoralia: false, quirocitas: false },
  // 24/7 online booking
  { quiroflow: true, practicehub: true, quirohiro: true, cliniccloud: true, doctoralia: true, quirocitas: false },
  // Digital intake and consent forms
  { quiroflow: true, practicehub: true, quirohiro: true, cliniccloud: true, doctoralia: false, quirocitas: false },
  // Invoices for packages and memberships
  { quiroflow: true, practicehub: true, quirohiro: false, cliniccloud: true, doctoralia: true, quirocitas: true },
  // Retention, conversion and value-per-visit stats
  { quiroflow: true, practicehub: true, quirohiro: true, cliniccloud: false, doctoralia: true, quirocitas: false },
  // Waitlist re-offering cancelled slots
  { quiroflow: true, practicehub: false, quirohiro: true, cliniccloud: false, doctoralia: true, quirocitas: false },
  // Treatment plan adherence alert
  { quiroflow: true, practicehub: false, quirohiro: true, cliniccloud: false, doctoralia: false, quirocitas: false },
  // Referral thank-you campaign
  { quiroflow: true, practicehub: false, quirohiro: true, cliniccloud: false, doctoralia: false, quirocitas: false },
  // Automatic Google review request
  { quiroflow: true, practicehub: false, quirohiro: true, cliniccloud: false, doctoralia: true, quirocitas: false },
  // AI receptionist
  { quiroflow: true, practicehub: false, quirohiro: true, cliniccloud: true, doctoralia: false, quirocitas: false },
  // Posture analysis
  { quiroflow: true, practicehub: false, quirohiro: false, cliniccloud: false, doctoralia: false, quirocitas: false },
  // Home exercise library for patients
  { quiroflow: true, practicehub: true, quirohiro: false, cliniccloud: false, doctoralia: false, quirocitas: false },
  // Published entry price, last row. Not a differentiator: practicehub.io,
  // quirohiro.io, clinic-cloud.com and pro.doctoralia.es all publish prices;
  // quirocitas.es does not. Kept because a buyer does want to know -- drop
  // this row and its label in the three dictionaries if the table should only
  // carry things QuiroFlow wins.
  { quiroflow: true, practicehub: true, quirohiro: true, cliniccloud: true, doctoralia: true, quirocitas: false },
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
              <!-- The ticks are bare SVGs, so each cell also carries a
                   visually hidden word: without it, screen readers and AI
                   text extractors read the whole QuiroFlow column as empty. -->
              <td class="bg-brand-tint/40 px-4 py-3.5 text-center">
                <template v-if="row.quiroflow">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" class="mx-auto" aria-hidden="true">
                    <circle cx="9" cy="9" r="9" fill="#E9F6EF" />
                    <path d="M5.5 9.3l2.2 2.2 4.8-5" stroke="#157F52" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" fill="none" />
                  </svg>
                  <span class="sr-only">{{ t('comparison.yes') }}</span>
                </template>
                <template v-else>
                  <span class="text-ink-faint" aria-hidden="true">—</span>
                  <span class="sr-only">{{ t('comparison.notShown') }}</span>
                </template>
              </td>
              <td v-for="c in competitors" :key="c.key" class="px-4 py-3.5 text-center">
                <template v-if="row[c.key]">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" class="mx-auto" aria-hidden="true">
                    <circle cx="9" cy="9" r="9" fill="#F1F2F5" />
                    <path d="M5.5 9.3l2.2 2.2 4.8-5" stroke="#5B6072" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" fill="none" />
                  </svg>
                  <span class="sr-only">{{ t('comparison.yes') }}</span>
                </template>
                <template v-else>
                  <span class="text-ink-faint" aria-hidden="true">—</span>
                  <span class="sr-only">{{ t('comparison.notShown') }}</span>
                </template>
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

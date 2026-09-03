<script setup lang="ts">
type Cell = boolean

interface Row {
  feature: string
  quiroflow: Cell
  practicehub: Cell
  praxxos: Cell
  doctoralia: Cell
  quirocitas: Cell
}

const competitors = [
  { key: 'practicehub', name: 'PracticeHub' },
  { key: 'praxxos', name: 'Praxxos' },
  { key: 'doctoralia', name: 'Doctoralia' },
  { key: 'quirocitas', name: 'Quirocitas' },
] as const

const rows: Row[] = [
  { feature: 'Asigna sala o camilla libre en automático', quiroflow: true, practicehub: false, praxxos: false, doctoralia: false, quirocitas: false },
  { feature: 'Recordatorios y confirmación de cita por WhatsApp', quiroflow: true, practicehub: false, praxxos: true, doctoralia: false, quirocitas: false },
  { feature: 'El paciente elige cuántos recordatorios recibir', quiroflow: true, practicehub: false, praxxos: false, doctoralia: false, quirocitas: false },
  { feature: 'Página de reserva online en tu propio subdominio', quiroflow: true, practicehub: false, praxxos: false, doctoralia: false, quirocitas: false },
  { feature: 'Formularios digitales de intake y consentimiento', quiroflow: true, practicehub: false, praxxos: false, doctoralia: false, quirocitas: false },
  { feature: 'Facturas legales automáticas para bonos y membresías', quiroflow: true, practicehub: false, praxxos: false, doctoralia: true, quirocitas: true },
  { feature: 'Estadísticas de retención, conversión y valor por visita', quiroflow: true, practicehub: false, praxxos: true, doctoralia: true, quirocitas: false },
]
</script>

<template>
  <section id="comparativa" class="border-y border-line bg-surface-page py-24">
    <div class="mx-auto max-w-[1120px] px-8">
      <div class="mx-auto mb-10 flex max-w-[640px] flex-col items-center gap-4 text-center">
        <span class="w-fit rounded-full border border-brand-tintBorder bg-brand-tint px-3 py-[5px] text-[13px] font-semibold text-brand-text">
          Comparativa
        </span>
        <h2 class="text-[30px] tracking-tightTitle text-ink-900">Cómo se compara QuiroFlow</h2>
        <p class="text-[15.5px] leading-[1.6] text-ink-muted">
          Sin exagerar: esto es lo que cada plataforma muestra públicamente en su propia web.
        </p>
      </div>

      <div class="overflow-x-auto rounded-card border border-line bg-white shadow-card">
        <table class="w-full min-w-[720px] border-collapse text-left">
          <thead>
            <tr class="border-b border-line">
              <th class="sticky left-0 w-[280px] bg-white px-5 py-4 text-[13px] font-semibold text-ink-faint">
                Funcionalidad
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
        Comparativa elaborada a partir de la información publicada en las webs oficiales de cada proveedor
        (septiembre de 2026). Un "—" indica que el proveedor no lo muestra públicamente, no que no exista —
        confirma directamente con cada uno antes de decidir.
      </p>
    </div>
  </section>
</template>

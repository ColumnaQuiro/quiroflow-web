<script setup lang="ts">
const items = ['Pacientes', 'Citas', 'Pagos', 'Notas clínicas', 'Planes de tratamiento', 'Formularios']
</script>

<template>
  <section id="practicehub" class="border-y border-line bg-surface-page py-24">
    <div class="mx-auto grid max-w-[1120px] grid-cols-1 items-center gap-16 px-8 md:grid-cols-2">
      <div class="flex flex-col gap-[18px]">
        <span class="w-fit rounded-full border border-brand-tintBorder bg-brand-tint px-3 py-[5px] text-[13px] font-semibold text-brand-text">
          Migración
        </span>
        <h2 class="text-[32px] tracking-tightTitle text-ink-900">¿Vienes de PracticeHub?<br>Cambia en un fin de semana.</h2>
        <p class="text-[15.5px] leading-[1.6] text-ink-muted">
          Nada de exportar, revisar y volver a subir durante semanas. QuiroFlow trae un importador construido
          específicamente para clínicas que migran desde PracticeHub.
        </p>
        <ul class="mt-2 flex flex-col gap-3">
          <li class="flex items-start gap-2.5 text-[14.5px] text-ink-600">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" class="mt-px shrink-0">
              <circle cx="9" cy="9" r="9" fill="#EEF0FE" />
              <path d="M5.5 9.3l2.2 2.2 4.8-5" stroke="#4F46E5" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" fill="none" />
            </svg>
            <span>Pacientes y citas se importan desde tu propio export de PracticeHub.</span>
          </li>
          <li class="flex items-start gap-2.5 text-[14.5px] text-ink-600">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" class="mt-px shrink-0">
              <circle cx="9" cy="9" r="9" fill="#EEF0FE" />
              <path d="M5.5 9.3l2.2 2.2 4.8-5" stroke="#4F46E5" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" fill="none" />
            </svg>
            <span>Pagos, notas clínicas, planes de tratamiento y formularios se sincronizan directamente por API — sin tocar un CSV.</span>
          </li>
          <li class="flex items-start gap-2.5 text-[14.5px] text-ink-600">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" class="mt-px shrink-0">
              <circle cx="9" cy="9" r="9" fill="#EEF0FE" />
              <path d="M5.5 9.3l2.2 2.2 4.8-5" stroke="#4F46E5" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" fill="none" />
            </svg>
            <span>Puedes volver a ejecutar la importación cuando quieras: lo ya migrado nunca se duplica.</span>
          </li>
          <li class="flex items-start gap-2.5 text-[14.5px] text-ink-600">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" class="mt-px shrink-0">
              <circle cx="9" cy="9" r="9" fill="#EEF0FE" />
              <path d="M5.5 9.3l2.2 2.2 4.8-5" stroke="#4F46E5" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" fill="none" />
            </svg>
            <span>¿Vienes de otro sistema (Cliniko, MyClinic, un Excel...)? Importa tus pacientes por CSV mapeando tus propias columnas, sin depender de un formato fijo.</span>
          </li>
        </ul>
      </div>

      <div class="rounded-card border border-line bg-white p-7 shadow-card">
        <div class="mb-6 flex items-center justify-center gap-[18px]">
          <div class="rounded-ctl border border-dashed border-[#D5D7DE] px-[18px] py-3 text-[13px] font-semibold text-ink-faint">
            PracticeHub
          </div>
          <svg width="28" height="14" viewBox="0 0 28 14" fill="none">
            <path d="M1 7h24m0 0l-6-6m6 6l-6 6" stroke="#B3B7C4" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
          <div class="flex items-center gap-2 rounded-ctl bg-brand px-[18px] py-3">
            <LogoMark :size="16" color="#fff" />
            <span class="text-[13px] font-semibold text-white">QuiroFlow</span>
          </div>
        </div>
        <div class="grid grid-cols-2 gap-2.5">
          <div v-for="item in items" :key="item" class="flex items-center gap-2 rounded-[7px] bg-surface-page px-3 py-[9px]">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M2.5 7.3l2.7 2.7 6-6" stroke="#1D8A5B" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" fill="none" />
            </svg>
            <span class="text-[13px] text-ink-600">{{ item }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

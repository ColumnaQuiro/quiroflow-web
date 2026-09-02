<script setup lang="ts">
const fields = [
  { label: 'Nombre completo', type: 'Texto' },
  { label: 'Alergias conocidas', type: 'Texto largo' },
  { label: 'Consentimiento informado', type: 'Firma' },
]
</script>

<template>
  <div class="rounded-card border border-line bg-white p-[22px]">
    <p class="mb-3 text-xs font-semibold text-ink-faint">FORMULARIO DE PRIMERA VISITA</p>
    <div class="flex flex-col gap-2">
      <div v-for="f in fields" :key="f.label" class="flex items-center justify-between rounded-[7px] border border-line-control/60 px-3 py-[9px]">
        <span class="text-[13px] text-ink-600">{{ f.label }}</span>
        <span class="rounded-[5px] bg-surface-page px-2 py-[3px] text-[10.5px] font-semibold text-ink-faint">{{ f.type }}</span>
      </div>
    </div>
  </div>
</template>

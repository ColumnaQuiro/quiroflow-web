<script setup lang="ts">
const practitioners = [
  { initials: 'AT', name: 'Ana Torres', avail: 'Disponible lunes a viernes', tone: 'brand' },
  { initials: 'MR', name: 'Marco Ruiz', avail: 'Disponible martes y jueves', tone: 'success' },
] as const
</script>

<template>
  <div class="rounded-card border border-line bg-white p-5">
    <p class="mb-3 text-xs font-semibold text-ink-faint">RESERVA ONLINE · tuclinica.quiroflow.com</p>
    <div class="flex flex-col gap-2">
      <div v-for="p in practitioners" :key="p.name" class="flex items-center gap-2.5 rounded-ctl border border-line-control/60 px-3 py-2.5">
        <span
          class="flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-[11px] font-bold"
          :class="p.tone === 'brand' ? 'bg-brand-tint text-brand-text' : 'bg-success-bg text-success-text'"
        >
          {{ p.initials }}
        </span>
        <div class="flex-1">
          <p class="text-[13px] font-semibold text-ink-900">{{ p.name }}</p>
          <p class="text-[11.5px] text-ink-faint">{{ p.avail }}</p>
        </div>
        <span class="text-ink-faint">›</span>
      </div>
    </div>
  </div>
</template>

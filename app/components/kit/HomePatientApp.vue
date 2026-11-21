<script setup lang="ts">
import { SCREENS } from '~/utils/screens'

// The patient app, screen by screen: three whole phones on the brand stage.
// On narrower screens they become a row you swipe (scroll-snap), each phone
// whole, never cut.
const c = useCopy()
const a = computed(() => c('home.patientApp'))
const phones = computed(() => (['pacienteInicio', 'pacienteCitas', 'pacienteEjercicios', 'pacienteProgreso', 'pacienteFacturas'] as const).map((k, i) => ({ ...SCREENS[k], alt: a.value.alts[i] as string })))
</script>

<template>
  <section id="app-pacientes" class="section" aria-labelledby="app-h">
    <div class="wrap">
      <div class="section-head">
        <h2 id="app-h">{{ a.h2 }}</h2>
        <p>{{ a.lead }}</p>
      </div>
      <div class="stage-brand phones">
        <div class="phones__row" tabindex="0" :aria-label="a.h2">
          <img v-for="p in phones" :key="p.src" class="phones__phone" :src="p.src" :alt="p.alt" :width="p.w" :height="p.h" loading="lazy" decoding="async">
        </div>
      </div>
    </div>
  </section>
</template>

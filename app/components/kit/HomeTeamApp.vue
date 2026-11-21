<script setup lang="ts">
import { SCREENS } from '~/utils/screens'

// The team's app: the text on the left, three whole phones on the right, the
// day in front and the calendar and a record behind it.
const c = useCopy()
const t = computed(() => c('home.teamApp'))
const s = SCREENS
</script>

<template>
  <section id="app-equipo" class="section" aria-labelledby="eq-h">
    <div class="wrap">
      <div class="grid">
        <div class="span-5 stack-5">
          <h2 id="eq-h">{{ t.h2 }}</h2>
          <p class="t-lead">{{ t.lead }}</p>
          <ul class="rows">
            <li v-for="r in t.rows" :key="r"><span class="rows__name">{{ r }}</span></li>
          </ul>
        </div>
        <div class="frame frame--split frame--tall stage-soft team span-6 start-7">
          <img class="team__phone team__phone--l" :src="s.equipoAgenda.src" :alt="t.alts[1]" :width="s.equipoAgenda.w" :height="s.equipoAgenda.h" loading="lazy" decoding="async">
          <img class="team__phone team__phone--r" :src="s.equipoFicha.src" :alt="t.alts[2]" :width="s.equipoFicha.w" :height="s.equipoFicha.h" loading="lazy" decoding="async">
          <img class="team__phone team__phone--c" :src="s.equipoDia.src" :alt="t.alts[0]" :width="s.equipoDia.w" :height="s.equipoDia.h" loading="lazy" decoding="async">
        </div>
      </div>
    </div>
  </section>
</template>

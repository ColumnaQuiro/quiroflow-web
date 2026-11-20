<script setup lang="ts">
import { alternatives } from '~/content/alternatives'

// The /alternativa-a-* pages exist in Spanish only, so this section is shown
// on the Spanish page only.
const c = useCopy()
const a = computed(() => c('comparePage.alternatives'))
</script>

<template>
  <section id="alternativas" class="section" style="--hm: 2" aria-labelledby="alt-h">
    <div class="wrap">
      <div class="section-head">
        <h2 id="alt-h">{{ a.h2 }}</h2>
        <p>{{ a.lead }}</p>
      </div>
      <div class="grid">
        <a v-for="alt in alternatives" :key="alt.slug" class="card card--row card--open span-4" :href="`/alternativa-a-${alt.slug}`">
          <h3>{{ alt.name }}</h3>
          <p>{{ alt.heading }}</p>
          <div class="panel panel--name"><span>{{ alt.name }}</span><span class="panel__arrow" aria-hidden="true">→</span><span class="panel__to">QuiroFlow</span></div>
        </a>
      </div>
    </div>
  </section>
</template>

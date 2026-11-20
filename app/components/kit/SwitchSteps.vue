<script setup lang="ts">
// steps (taste-skill): the three real steps of a switch, in order.
const c = useCopy()
const s = computed(() => c('switchPage.steps'))
const TONES = [['', 's1', 's1'], ['', 's2', 's2'], ['', 's2', 's2']]
</script>

<template>
  <section id="pasos" class="section" style="--hm: 2" aria-labelledby="pas-h">
    <div class="wrap">
      <div class="section-head">
        <h2 id="pas-h">{{ s.h2 }}</h2>
        <p>{{ s.lead }}</p>
      </div>
      <div class="grid">
        <article v-for="(step, i) in s.items" :key="step.title" class="card card--row card--open span-4">
          <span class="step-num">{{ i + 1 }}</span>
          <h3>{{ step.title }}</h3>
          <p>{{ step.text }}</p>
          <div class="panel"><KitMini :rows="step.rows" :tones="TONES[i]" /></div>
        </article>
      </div>
    </div>
  </section>
</template>

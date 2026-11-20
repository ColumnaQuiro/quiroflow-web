<script setup lang="ts">
// Four linked cards, one per specialty, each leading to its own page.
const c = useCopy()
const s = computed(() => c('home.specialties'))
const localePath = useLocalePath()
const cards = computed(() => [
  { ...s.value.chiro, href: localePath('software-quiropractica'), tones: ['', '', ''] },
  { ...s.value.physio, href: localePath('software-fisioterapia'), tones: ['', '', ''] },
  { ...s.value.osteo, href: localePath('software-osteopatia'), tones: ['', 's2', ''] },
  { ...s.value.podo, href: localePath('software-podologia'), tones: ['', '', ''] },
])
</script>

<template>
  <section id="clinicas" class="section" style="--hm: 2" aria-labelledby="cli-h">
    <div class="wrap">
      <div class="section-head">
        <h2 id="cli-h">{{ s.h2 }}</h2>
        <p>{{ s.lead }}</p>
      </div>
      <div class="grid">
        <a v-for="card in cards" :key="card.title" class="card card--row card--open span-3" :href="card.href">
          <h3>{{ card.title }}</h3>
          <p>{{ card.body }}</p>
          <div class="panel"><KitMini :rows="card.rows" :tones="card.tones" /></div>
        </a>
      </div>
    </div>
  </section>
</template>

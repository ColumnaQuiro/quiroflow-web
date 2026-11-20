<script setup lang="ts">
// app-frame (taste-skill): the product big, the day's list beside the open
// patient record, in one app window across the .wrap.
const c = useCopy()
const a = computed(() => c('home.agenda'))
const localePath = useLocalePath()
</script>

<template>
  <section id="agenda" class="section" aria-labelledby="agenda-h">
    <div class="wrap">
      <div class="grid">
        <h2 id="agenda-h" class="span-5">{{ a.h2 }}</h2>
        <p class="span-6 start-7 muted">{{ a.lead }} <a class="link" :href="localePath('funcionalidades')">{{ a.link }}</a></p>
      </div>
      <div class="shot shot--app fill">
        <img src="/screens/calendario.webp" :alt="c('site.shots.calendario')" width="1600" height="1000" loading="lazy" decoding="async">
      </div>
    </div>
  </section>
</template>

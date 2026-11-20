<script setup lang="ts">
const c = useCopy()
const p = computed(() => c('home.pricing'))
const localePath = useLocalePath()
</script>

<template>
  <section id="precios" class="section" aria-labelledby="pre-h">
    <div class="wrap">
      <div class="section-head">
        <h2 id="pre-h">{{ p.h2 }}</h2>
        <p>{{ p.lead }} <a class="link" :href="localePath('precios')">{{ p.link }}</a></p>
      </div>
      <KitPlanCards mode="summary" />
    </div>
  </section>
</template>

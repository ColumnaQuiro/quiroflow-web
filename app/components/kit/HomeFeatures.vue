<script setup lang="ts">
// Two cards on one screen: the waitlist re-offering a cancelled slot, and
// the care-plan alert. Each panel holds a small drawn view of the feature.
const c = useCopy()
const f = computed(() => c('home.features'))
</script>

<template>
  <section id="funcionalidades" class="section" aria-labelledby="fun-h">
    <div class="wrap">
      <div class="section-head">
        <h2 id="fun-h">{{ f.h2 }}</h2>
      </div>
      <div class="grid">
        <article class="card card--row card--open span-6">
          <h3>{{ f.waitlist.title }}</h3>
          <p>{{ f.waitlist.body }}</p>
          <KitIll kind="waitlist" :rows="f.waitlist.slot" :extra="f.waitlist.list" />
        </article>
        <article class="card card--row card--open span-6">
          <h3>{{ f.plans.title }}</h3>
          <p>{{ f.plans.body }}</p>
          <KitIll kind="plan" :rows="f.plans.rows" />
        </article>
      </div>
    </div>
  </section>
</template>

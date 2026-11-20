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
          <div class="panel">
            <KitMini :rows="f.waitlist.slot" :tones="['', 'strike s4', 's2']" style="right: 32%; top: 34%" />
            <KitMini :rows="f.waitlist.list" :tones="['', 's1', 's1']" style="left: 48%; top: 64%" />
          </div>
        </article>
        <article class="card card--row card--open span-6">
          <h3>{{ f.plans.title }}</h3>
          <p>{{ f.plans.body }}</p>
          <div class="panel"><KitMini :rows="f.plans.rows" :tones="['', 's4', 's2', 's2']" /></div>
        </article>
      </div>
    </div>
  </section>
</template>

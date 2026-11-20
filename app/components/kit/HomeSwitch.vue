<script setup lang="ts">
// split-text-left with a diagram card (public/kit/diagrams): six kinds of data
// fanning into the importer and out to QuiroFlow, a pulse running the lines.
const c = useCopy()
const s = computed(() => c('home.switch'))
const localePath = useLocalePath()
const ICONS = ['ui:users', 'ui:calendar', 'ui:credit-card', 'ui:file-text', 'ui:list-checks', 'ui:clipboard']
const spec = computed(() => JSON.stringify({
  layout: 'fanin',
  alt: s.value.diagram.alt,
  sources: s.value.diagram.sources.map((src: string[], i: number) => ({ label: src[0], icon: ICONS[i], sub: src[1] })),
  target: { label: s.value.diagram.target, icon: 'ui:database' },
  then: { label: s.value.diagram.then[0], icon: 'ui:check', meta: s.value.diagram.then[1] },
}))
</script>

<template>
  <section id="migracion" class="section" aria-labelledby="cam-h">
    <div class="wrap">
      <div class="grid">
        <div class="span-5 stack-5">
          <h2 id="cam-h">{{ s.h2 }}</h2>
          <p class="t-lead">{{ s.lead }}</p>
          <ul class="rows">
            <li v-for="r in s.rows" :key="r"><span class="rows__name">{{ r }}</span></li>
          </ul>
          <p><a class="link" :href="localePath('cambiar-de-programa')">{{ s.link }}</a></p>
        </div>
        <div class="frame frame--split frame--tall span-6 start-7">
          <!-- diagram.js reads the spec as JSON from the attribute. -->
          <div class="dg" :data-diagram="spec" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// What comes across from PracticeHub (through the API) and from any other
// program (its export), as a small table beside the text.
const c = useCopy()
const m = computed(() => c('switchPage.moves'))
const sw = computed(() => c('home.switch'))
const ICONS = ['ui:users', 'ui:calendar', 'ui:credit-card', 'ui:file-text', 'ui:list-checks', 'ui:clipboard']
const spec = computed(() => JSON.stringify({
  layout: 'fanin',
  alt: sw.value.diagram.alt,
  sources: sw.value.diagram.sources.map((src: string[], i: number) => ({ label: src[0], icon: ICONS[i], sub: src[1] })),
  target: { label: sw.value.diagram.target, icon: 'ui:database' },
  then: { label: sw.value.diagram.then[0], icon: 'ui:check', meta: sw.value.diagram.then[1] },
}))
const label = (v: string) => (v === 'api' ? m.value.api : v === 'file' ? m.value.file : m.value.no)
</script>

<template>
  <section id="que-se-importa" class="section" style="--hm: 2" aria-labelledby="mov-h">
    <div class="wrap">
      <div class="grid">
        <div class="span-5 stack-5">
          <h2 id="mov-h">{{ m.h2 }}</h2>
          <p class="t-lead">{{ m.lead }}</p>
          <p class="muted">{{ m.note }}</p>
          <div class="moves" role="table" :aria-label="m.h2">
            <div class="moves__row moves__row--head" role="row">
              <span v-for="col in m.cols" :key="col" role="columnheader">{{ col }}</span>
            </div>
            <div v-for="r in m.rows" :key="r[0]" class="moves__row" role="row">
              <span role="rowheader">{{ r[0] }}</span>
              <span role="cell"><span class="chip" :class="r[1] === 'api' ? 's2' : 's1'">{{ label(r[1]) }}</span></span>
              <span role="cell"><span class="chip" :class="r[2] === 'file' ? 's1' : 's3'">{{ label(r[2]) }}</span></span>
            </div>
          </div>
        </div>
        <div class="frame frame--split frame--tall span-6 start-7">
          <div class="dg" :data-diagram="spec" />
        </div>
      </div>
    </div>
  </section>
</template>

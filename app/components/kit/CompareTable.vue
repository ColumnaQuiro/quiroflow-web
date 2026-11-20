<script setup lang="ts">
import { COMPETITORS, ROW_FLAGS } from '~/utils/comparison'

// comparison-table (taste-skill): the whole table from utils/comparison.ts
// and comparison.rows / comparison.footnote in es/en/fr.ts, the same data as
// the old ComparisonSection and the /alternativa-a-* pages.
const c = useCopy()
const t = computed(() => c('comparePage.table'))
const cmp = computed(() => c('comparison'))
const cols = [{ key: 'quiroflow', name: 'QuiroFlow' }, ...COMPETITORS]
// The phone shows the six marks in one row under each feature, headed once
// by these short names (the full ones do not fit 342px across six columns).
const SHORT: Record<string, string> = { quiroflow: 'QFlow', practicehub: 'PHub', quirohiro: 'QHiro', cliniccloud: 'CCloud', doctoralia: 'Doctor.', quirocitas: 'QCitas' }
</script>

<template>
  <section id="tabla" class="section" style="--h: 2" aria-labelledby="tab-h">
    <div class="wrap">
      <div class="section-head">
        <h2 id="tab-h">{{ t.h2 }}</h2>
        <p>{{ t.lead }}</p>
      </div>
      <div class="cmp" role="table" :aria-label="t.h2">
        <div class="cmp__row cmp__row--head" role="row">
          <span role="columnheader">{{ cmp.featureHeader }}</span>
          <span v-for="col in cols" :key="col.key" role="columnheader"><span class="cmp__full">{{ col.name }}</span><span class="cmp__short" aria-hidden="true">{{ SHORT[col.key] }}</span></span>
        </div>
        <div v-for="(label, i) in cmp.rows" :key="label" class="cmp__row" role="row">
          <span role="rowheader">{{ label }}</span>
          <span v-for="col in cols" :key="col.key" role="cell" :data-name="col.name" :class="ROW_FLAGS[i]![col.key as keyof typeof ROW_FLAGS[number]] ? 'yes' : 'no'">
            <template v-if="ROW_FLAGS[i]![col.key as keyof typeof ROW_FLAGS[number]]"><span aria-hidden="true">✓</span><span class="sr-only">{{ t.included }}</span></template>
            <template v-else><span aria-hidden="true">—</span><span class="sr-only">{{ t.notShown }}</span></template>
          </span>
        </div>
      </div>
      <p class="t-small muted cmp__foot">{{ cmp.footnote }}</p>
    </div>
  </section>
</template>

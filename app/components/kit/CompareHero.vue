<script setup lang="ts">
import { SIGNUP_URL } from '~/utils/links'
import { COMPETITORS, ROW_FLAGS } from '~/utils/comparison'

// The dealt hero "collage": the words on five columns; on the right a piece
// of the comparison table itself, cut by its frame, with the sources note
// over its lower-left corner.
const c = useCopy()
const h = computed(() => c('comparePage.hero'))
const rows = computed(() => c('comparison.rows') as string[])
const cols = ['QuiroFlow', ...COMPETITORS.map(x => x.name)]
const keys = ['quiroflow', ...COMPETITORS.map(x => x.key)] as const
// Four rows from the table: the AI receptionist, the waitlist, posture
// analysis and the exercise library (indices into comparison.rows).
const PICK = [12, 8, 13, 14]
const excerpt = computed(() => PICK.map(i => ({ label: rows.value[i], flags: keys.map(k => ROW_FLAGS[i]![k]) })))
</script>

<template>
  <section class="hero hero--collage" data-enter aria-labelledby="hero-h">
    <div class="wrap">
      <div class="hero-text grid hero__grid">
        <div class="hero__text span-5">
          <h1 id="hero-h">{{ h.h1 }}</h1>
          <p class="hero__lead">{{ h.lead }}</p>
          <div class="btn-row">
            <a class="btn btn--primary" :href="SIGNUP_URL">{{ c('site.cta') }}<svg class="m-arrow" viewBox="0 0 12 12" aria-hidden="true"><path class="m-arrow__stem" d="M1 6h8" /><path class="m-arrow__head" d="M4.5 2.5 8 6l-3.5 3.5" /></svg></a>
            <a class="btn btn--secondary" href="#tabla">{{ h.secondary }}</a>
          </div>
          <p class="hero__proof">{{ h.proof }}</p>
        </div>
        <div class="hero__art frame--lit span-6 start-7" role="img" :aria-label="h.aria">
          <div class="ly-piece ly-piece--main cmp-piece" aria-hidden="true">
            <div class="pc-head">{{ h.head }}</div>
            <div class="cmp-piece__row cmp-piece__row--head"><span /><span v-for="col in cols" :key="col">{{ col }}</span></div>
            <div v-for="r in excerpt" :key="r.label" class="cmp-piece__row">
              <span>{{ r.label }}</span>
              <span v-for="(f, j) in r.flags" :key="j" :class="f ? 'yes' : 'no'">{{ f ? '✓' : '—' }}</span>
            </div>
          </div>
          <div class="ly-piece pc-note cmp-note" aria-hidden="true">
            <strong>{{ h.note[0] }}</strong><span>{{ h.note[1] }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

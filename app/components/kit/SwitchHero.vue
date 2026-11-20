<script setup lang="ts">
import { BOOKING_URL, SIGNUP_URL } from '~/utils/links'

// The dealt hero "triptych", as on the homepage, with this page's three sets:
// an import in progress, the source programs, and the data export.
const c = useCopy()
const h = computed(() => c('switchPage.hero'))
</script>

<template>
  <section class="hero hero--triptych" data-enter aria-labelledby="hero-h">
    <div class="wrap">
      <div class="hero-text grid hero__grid">
        <div class="span-3">
          <h1 id="hero-h">{{ h.h1 }}</h1>
          <p class="hero__lead">{{ h.lead }}</p>
        </div>
        <div class="ly-collage span-6 start-4" role="img" :aria-label="h.aria">
          <div class="ly-collage__set is-on">
            <div class="ly-piece pc-flow" style="left: 4%; top: 6%; width: 62%">
              <div class="pc-head">{{ h.import.head }}<small>API</small></div>
              <div v-for="(r, i) in h.import.rows" :key="r[0]" class="r"><span>{{ r[0] }} · {{ r[1] }}</span><span class="chip" :class="i === 3 ? 's1' : 's2'">{{ r[2] }}</span></div>
            </div>
            <div class="ly-piece pc-note" style="left: 46%; top: 66%; width: 50%">
              <strong>{{ h.rerun[0] }}</strong><span>{{ h.rerun[1] }}</span>
            </div>
          </div>
          <div class="ly-collage__set" aria-hidden="true">
            <div class="ly-piece pc-flow" style="left: 4%; top: 6%; width: 60%">
              <div class="pc-head">{{ h.sources.head }}</div>
              <div v-for="r in h.sources.rows" :key="r[0]" class="r"><span>{{ r[0] }}</span><span class="chip s1">{{ r[1] }}</span></div>
            </div>
            <div class="ly-piece pc-note" style="left: 44%; top: 64%; width: 52%">
              <strong>{{ h.csv[0] }}</strong><span class="pc-mono">{{ h.csv[1] }}</span>
            </div>
          </div>
          <div class="ly-collage__set" aria-hidden="true">
            <div class="ly-piece pc-flow" style="left: 4%; top: 6%; width: 58%">
              <div class="pc-head">{{ h.export.head }}</div>
              <div v-for="r in h.export.rows" :key="r[0]" class="r"><span>{{ r[0] }}</span><span class="chip s2">{{ r[1] }}</span></div>
            </div>
            <div class="ly-piece pc-note" style="left: 46%; top: 66%; width: 50%">
              <strong>{{ h.eu[0] }}</strong><span>{{ h.eu[1] }}</span>
            </div>
          </div>
        </div>
        <div class="span-3 start-10 hero__cta">
          <a class="btn btn--primary" :href="SIGNUP_URL">{{ c('site.cta') }}<svg class="m-arrow" viewBox="0 0 12 12" aria-hidden="true"><path class="m-arrow__stem" d="M1 6h8" /><path class="m-arrow__head" d="M4.5 2.5 8 6l-3.5 3.5" /></svg></a>
          <a class="btn btn--secondary" :href="BOOKING_URL">{{ c('site.demo') }}</a>
        </div>
      </div>
    </div>
  </section>
</template>

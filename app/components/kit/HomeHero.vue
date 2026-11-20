<script setup lang="ts">
import { BOOKING_URL, SIGNUP_URL } from '~/utils/links'

// The dealt hero "triptych": the h1 on the left, a collage of three sets of
// drawn product views in the middle (layout.js crossfades them every 2.8 s,
// with a pause button), one large button on the right line.
const c = useCopy()
const h = computed(() => c('home.hero'))
const flowTones = ['s1', 's2', 's3']
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
            <div class="ly-piece pc-wa" style="left: 4%; top: 4%; width: 56%">
              <div class="pc-head">{{ h.wa.head }}<small>22:47</small></div>
              <div class="msgs">
                <div class="m">{{ h.wa.msgs[0] }}</div>
                <div class="m me">{{ h.wa.msgs[1] }}</div>
                <div class="m">{{ h.wa.msgs[2] }}</div>
                <div class="m me hide-s">{{ h.wa.msgs[3] }}</div>
              </div>
              <div class="ok">{{ h.wa.ok }}</div>
            </div>
            <div class="ly-piece pc-flow" style="left: 44%; top: 65%; width: 52%; height: 31%">
              <div class="pc-head">{{ h.flow.head }}<small>{{ h.flow.today }}</small></div>
              <div v-for="(r, i) in h.flow.rows" :key="r[0]" class="r"><span>{{ r[0] }}</span><span class="chip" :class="flowTones[i]">{{ r[1] }}</span></div>
            </div>
            <div class="ly-piece pc-note hide-s" style="left: 64%; top: 14%; width: 32%">
              <strong>{{ h.reoffer[0] }}</strong><span>{{ h.reoffer[1] }}</span>
            </div>
          </div>
          <div class="ly-collage__set" aria-hidden="true">
            <div class="ly-piece pc-inv" style="left: 4%; top: 6%; width: 58%">
              <div class="pc-head">{{ h.invoice.head }}<small>VERI*FACTU</small></div>
              <div v-for="l in h.invoice.lines" :key="l[0]" class="ln"><span>{{ l[0] }}</span><span>{{ l[1] }}</span></div>
              <div class="ln t"><span>{{ h.invoice.total[0] }}</span><span>{{ h.invoice.total[1] }}</span></div>
              <div class="qr"><i /><span>{{ h.invoice.chained }}</span></div>
            </div>
            <div class="ly-piece pc-note" style="left: 44%; top: 66%; width: 52%; height: 30%">
              <strong>{{ h.accepted[0] }}</strong><span>{{ h.accepted[1] }}</span><span class="pc-mono">{{ h.accepted[2] }}</span>
            </div>
            <div class="ly-piece pc-note hide-s" style="left: 66%; top: 18%; width: 30%">
              <strong>{{ h.bono[0] }}</strong><span>{{ h.bono[1] }}</span>
            </div>
          </div>
          <div class="ly-collage__set" aria-hidden="true">
            <div class="ly-piece pc-post" style="left: 4%; top: 6%; width: 60%">
              <div class="fig"><b /><b /></div>
              <div v-for="v in h.posture" :key="v[0]" class="v"><span>{{ v[0] }}</span><strong>{{ v[1] }}</strong></div>
            </div>
            <div class="ly-piece pc-flow" style="left: 40%; top: 62%; width: 56%; height: 34%">
              <div class="pc-head">{{ h.plan.head }}<small>{{ h.plan.week }}</small></div>
              <div class="r"><span>{{ h.plan.rows[0][0] }}</span><span class="chip s4">{{ h.plan.rows[0][1] }}</span></div>
              <div class="r"><span>{{ h.plan.rows[1][0] }}</span><span class="chip s2">{{ h.plan.rows[1][1] }}</span></div>
            </div>
            <div class="ly-piece pc-note hide-s" style="left: 68%; top: 16%; width: 28%">
              <strong>{{ h.review[0] }}</strong><span>{{ h.review[1] }}</span>
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

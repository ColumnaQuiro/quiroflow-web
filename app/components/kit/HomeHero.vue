<script setup lang="ts">
import { BOOKING_URL, SIGNUP_URL } from '~/utils/links'

// The dealt hero "triptych": the h1 on the left, a collage of three sets of
// drawn product views in the middle (layout.js crossfades them every 2.8 s,
// with a pause button), one large button on the right line.
const c = useCopy()
const h = computed(() => c('home.hero'))
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
          <!-- The whole calendar and the patient app (real screens of the
               fictional Clínica Demo), then two sets of feature
               illustrations; layout.js crossfades the three sets. -->
          <div class="ly-collage__set is-on">
            <div class="ly-piece pc-screen" style="left: 4%; top: 10%; width: 74%"><img src="/screens/calendario.webp" alt="" width="1280" height="800"></div>
            <div class="ly-piece pc-shot--phone" style="left: 64%; top: 30%; width: 30%; height: 64%"><img src="/screens/app-paciente-inicio.webp" alt=""></div>
          </div>
          <div class="ly-collage__set" aria-hidden="true">
            <div class="ly-piece pc-ill" style="left: 2%; top: 4%; width: 96%; height: 46%"><KitIll kind="bono" :rows="c('home.features.billing.rows')" /></div>
            <div class="ly-piece pc-ill" style="left: 2%; top: 50%; width: 96%; height: 46%"><KitIll kind="invoice" :rows="c('home.features.verifactu.rows')" /></div>
          </div>
          <div class="ly-collage__set" aria-hidden="true">
            <div class="ly-piece pc-ill" style="left: 2%; top: 4%; width: 96%; height: 50%"><KitIll kind="plan" :rows="c('home.features.plans.rows')" /></div>
            <div class="ly-piece pc-ill" style="left: 2%; top: 54%; width: 96%; height: 42%"><KitIll kind="reports" :rows="c('featuresPage.money.reports.rows')" /></div>
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

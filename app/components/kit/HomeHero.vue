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
          <!-- Real screens of the app (public/screens), captured from the
               fictional Clínica Demo; layout.js crossfades the three sets. -->
          <div class="ly-collage__set is-on">
            <div class="ly-piece pc-shot" style="left: 4%; top: 5%; width: 64%; height: 50%"><img src="/screens/calendario-salas.webp" alt=""></div>
            <div class="ly-piece pc-shot" style="left: 4%; top: 60%; width: 58%; height: 30%"><img src="/screens/plan-cuidados.webp" alt=""></div>
            <div class="ly-piece pc-shot pc-shot--phone" style="left: 66%; top: 18%; width: 30%; height: 76%"><img src="/screens/app-paciente-inicio.webp" alt=""></div>
          </div>
          <div class="ly-collage__set" aria-hidden="true">
            <div class="ly-piece pc-shot" style="left: 4%; top: 6%; width: 84%; height: 24%"><img src="/screens/bono.webp" alt=""></div>
            <div class="ly-piece pc-shot" style="left: 12%; top: 36%; width: 84%; height: 18%"><img src="/screens/facturas.webp" alt=""></div>
            <div class="ly-piece pc-shot" style="left: 4%; top: 60%; width: 74%; height: 34%"><img src="/screens/retencion.webp" alt=""></div>
          </div>
          <div class="ly-collage__set" aria-hidden="true">
            <div class="ly-piece pc-shot" style="left: 4%; top: 6%; width: 74%; height: 56%"><img src="/screens/postural.webp" alt=""></div>
            <div class="ly-piece pc-shot" style="left: 24%; top: 66%; width: 72%; height: 28%"><img src="/screens/plan-cuidados.webp" alt=""></div>
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

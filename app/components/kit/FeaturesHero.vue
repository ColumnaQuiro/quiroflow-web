<script setup lang="ts">
import { SIGNUP_URL } from '~/utils/links'

// The dealt hero "centred": the pill, the centred h1 and two buttons, then the
// product's inbox window rising out of the lit frame under them.
const c = useCopy()
const h = computed(() => c('featuresPage.hero'))
const localePath = useLocalePath()
</script>

<template>
  <section class="hero hero--centred" data-enter aria-labelledby="hero-h">
    <div class="wrap">
      <div class="hero-text">
        <div class="hero__c">
          <a class="pill" href="#recepcionista"><span>{{ h.pill[0] }}</span><span class="muted">{{ h.pill[1] }}</span></a>
          <h1 id="hero-h">{{ h.h1 }}</h1>
          <p class="hero__lead">{{ h.lead }}</p>
          <div class="btn-row">
            <a class="btn btn--primary" :href="SIGNUP_URL">{{ c('site.cta') }}<svg class="m-arrow" viewBox="0 0 12 12" aria-hidden="true"><path class="m-arrow__stem" d="M1 6h8" /><path class="m-arrow__head" d="M4.5 2.5 8 6l-3.5 3.5" /></svg></a>
            <a class="btn btn--secondary" :href="localePath('precios')">{{ h.secondary }}</a>
          </div>
        </div>
        <div class="hero__window stage-brand">
          <div class="ly-piece">
            <KitBrowser screen="bandeja" :alt="c('site.shots.bandeja')" eager />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

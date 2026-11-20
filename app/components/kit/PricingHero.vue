<script setup lang="ts">
import { SIGNUP_URL } from '~/utils/links'

// The dealt hero "split": the words on five columns, on the right the monthly
// bill of a three-practitioner clinic on Practice, with the trial as the
// floating card.
const c = useCopy()
const h = computed(() => c('pricingPage.hero'))
</script>

<template>
  <section class="hero hero--split" data-enter aria-labelledby="hero-h">
    <div class="wrap">
      <div class="hero-text grid hero__grid">
        <div class="hero__text span-5">
          <p class="hero__kicker"><span class="dot" aria-hidden="true" />{{ h.kicker }}</p>
          <h1 id="hero-h">{{ h.h1 }}</h1>
          <p class="hero__lead">{{ h.lead }}</p>
          <div class="btn-row">
            <a class="btn btn--primary" :href="SIGNUP_URL">{{ c('site.cta') }}<svg class="m-arrow" viewBox="0 0 12 12" aria-hidden="true"><path class="m-arrow__stem" d="M1 6h8" /><path class="m-arrow__head" d="M4.5 2.5 8 6l-3.5 3.5" /></svg></a>
            <a class="btn btn--secondary" href="#planes">{{ h.plans }}</a>
          </div>
        </div>
        <div class="hero__media hero__media--drawn span-6 start-7" role="img" :aria-label="h.aria">
          <div class="bill">
            <div class="bill__head">{{ h.bill.head }}</div>
            <div v-for="r in h.bill.rows" :key="r[0]" class="bill__row"><span>{{ r[0] }}</span><span>{{ r[1] }}</span></div>
            <div class="bill__row bill__row--total"><span>{{ h.bill.total[0] }}</span><span>{{ h.bill.total[1] }}</span></div>
          </div>
          <div class="ly-float">
            <div class="ly-float__row"><span class="ly-live">{{ h.float[0] }}</span></div>
            <div class="ly-float__title">{{ h.float[1] }}</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

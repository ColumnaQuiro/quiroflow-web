<script setup lang="ts">
import { BOOKING_URL } from '~/utils/links'

// The add-ons and what is billed separately, as a price list. The lines are
// the same pricing.* strings the old pricing section showed, so a price
// changed in es/en/fr.ts changes here too.
const c = useCopy()
const e = computed(() => c('pricingPage.extras'))
const p = computed(() => c('pricing'))
const lines = computed(() => [p.value.extraPro, p.value.extraSite, p.value.growthAddOn, p.value.receptionistAddOn, p.value.receptionistNote, p.value.verifactuNote, p.value.vatNote])
</script>

<template>
  <section id="extras" class="section" aria-labelledby="ext-h">
    <div class="wrap">
      <div class="grid">
        <div class="span-5 stack-5">
          <h2 id="ext-h">{{ e.h2 }}</h2>
          <p class="t-lead">{{ e.lead }}</p>
          <p><a class="link" :href="BOOKING_URL">{{ e.talk }}</a></p>
        </div>
        <ul class="rows span-6 start-7">
          <li v-for="l in lines" :key="l"><span class="rows__name">{{ l }}</span></li>
        </ul>
      </div>
    </div>
  </section>
</template>

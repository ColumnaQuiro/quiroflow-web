<script setup lang="ts">
import { PRICING_TIERS } from '~/utils/pricing'
import { SIGNUP_URL } from '~/utils/links'
import { eur } from '~/utils/money'

// pricing-three (taste-skill). "summary" (the homepage): monthly price, the
// yearly one under it and five short lines per plan. "full" (/precios): a
// monthly/yearly switch (kit tabs, system.js swaps the panels) and the
// complete feature lists from pricing.tiers in es/en/fr.ts.
const props = defineProps<{ mode: 'summary' | 'full' }>()
const c = useCopy()
const { locale } = useLocale()
const pricing = computed(() => c('pricing'))
const home = computed(() => c('home.pricing'))
const page = computed(() => c('pricingPage.plans'))
const cta = computed(() => c('site.cta'))

const plans = computed(() => PRICING_TIERS.map(tier => ({
  ...tier,
  for: pricing.value.tiers[tier.key].for as string,
  lines: (props.mode === 'full' ? pricing.value.tiers[tier.key].features : home.value.checks[tier.key]) as string[],
  monthlyPrice: eur(tier.monthly, locale.value),
  annualPrice: eur(tier.annual, locale.value),
})))
const monthlyIds = PRICING_TIERS.map(t => `price-${t.key}-m`).join(' ')
const annualIds = PRICING_TIERS.map(t => `price-${t.key}-a`).join(' ')
</script>

<template>
  <div class="stack-6" :class="mode === 'summary' ? 'plans--summary' : 'plans--full'">
    <div v-if="mode === 'full'" class="tabs" role="tablist" :aria-label="page.tabsLabel">
      <button class="tab" type="button" role="tab" aria-selected="true" :aria-controls="monthlyIds">{{ pricing.monthly }}</button>
      <button class="tab" type="button" role="tab" aria-selected="false" :aria-controls="annualIds">{{ pricing.annual }} · {{ pricing.annualSave }}</button>
    </div>
    <div class="grid">
      <article v-for="plan in plans" :key="plan.key" class="card card--plan span-4" :class="{ 'is-featured': plan.featured }">
        <h3>{{ plan.name }} <span v-if="plan.featured" class="badge">{{ pricing.mostChosen }}</span></h3>
        <p class="muted">{{ plan.for }}</p>
        <template v-if="mode === 'full'">
          <div :id="`price-${plan.key}-m`" role="tabpanel">
            <p class="price"><span class="t-stat">{{ plan.monthlyPrice }}</span><span class="muted">{{ page.perMonth }}</span></p>
            <p class="t-small muted">{{ page.monthlyLinePrefix }} {{ plan.annualPrice }} {{ page.monthlyLineSuffix }}</p>
          </div>
          <div :id="`price-${plan.key}-a`" role="tabpanel" hidden>
            <p class="price"><span class="t-stat">{{ plan.annualPrice }}</span><span class="muted">{{ page.perMonth }}</span></p>
            <p class="t-small muted">{{ page.annualLine }}</p>
          </div>
        </template>
        <template v-else>
          <p class="price"><span class="t-stat">{{ plan.monthlyPrice }}</span><span class="muted">{{ pricing.perMonth }}</span></p>
          <p class="t-small muted">{{ plan.annualPrice }}{{ pricing.perMonth }} {{ home.annual }}</p>
        </template>
        <a v-if="plan.featured" class="btn btn--primary" :href="SIGNUP_URL">{{ cta }}</a>
        <a v-else class="btn btn--secondary" :href="SIGNUP_URL">{{ home.tryPlan }} {{ plan.name }}</a>
        <ul class="checks">
          <li v-for="line in plan.lines" :key="line">{{ line }}</li>
        </ul>
      </article>
    </div>
  </div>
</template>

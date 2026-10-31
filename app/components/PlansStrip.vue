<script setup lang="ts">
// The vertical pages never said what QuiroFlow costs: "45 €" appeared nowhere
// on them, while the searches they target ("software quiropráctica",
// "software fisioterapia") are dominated by listicles complaining that
// vendors hide their prices. They also never linked to the VERI*FACTU guide,
// the automations page or the pricing table. This band fixes both, once,
// for every vertical.
import { SIGNUP_URL } from '~/utils/links'

const t = useT()
const localePath = useLocalePath()
const { locale } = useLocale()

const fromPrice = Math.min(...PRICING_TIERS.map(tier => tier.monthly))
const pricingHref = computed(() => `${localePath('index')}#precios`)
// The VERI*FACTU guide is Spanish-only (it is about a Spanish obligation),
// so en/fr link to the homepage section that covers it instead.
const verifactuHref = computed(() =>
  locale.value === 'es' ? localePath('verifactu-clinicas') : `${localePath('index')}#verifactu`,
)
</script>

<template>
  <section class="py-16">
    <div class="mx-auto flex max-w-[1120px] flex-col gap-8 px-8">
      <h2 class="text-center text-[26px] tracking-tightTitle text-ink-900">{{ t('plansStrip.title') }}</h2>
      <div class="grid grid-cols-1 gap-5 md:grid-cols-3">
        <div class="flex flex-col gap-2 rounded-card border border-line bg-white p-6">
          <p class="text-[17px] font-semibold tracking-tightTitle text-ink-900">{{ t('plansStrip.price.title', { price: fromPrice }) }}</p>
          <p class="text-[14px] leading-[1.6] text-ink-muted">{{ t('plansStrip.price.body') }}</p>
          <NuxtLink :to="pricingHref" class="mt-auto pt-1 text-[14px] font-semibold text-brand-text hover:underline">
            {{ t('plansStrip.price.link') }} →
          </NuxtLink>
        </div>
        <div class="flex flex-col gap-2 rounded-card border border-line bg-white p-6">
          <p class="text-[17px] font-semibold tracking-tightTitle text-ink-900">{{ t('plansStrip.trial.title') }}</p>
          <p class="text-[14px] leading-[1.6] text-ink-muted">{{ t('plansStrip.trial.body') }}</p>
          <a :href="SIGNUP_URL" target="_blank" rel="noopener" class="mt-auto pt-1 text-[14px] font-semibold text-brand-text hover:underline">
            {{ t('plansStrip.trial.link') }} →
          </a>
        </div>
        <div class="flex flex-col gap-2 rounded-card border border-line bg-white p-6">
          <p class="text-[17px] font-semibold tracking-tightTitle text-ink-900">{{ t('plansStrip.verifactu.title') }}</p>
          <p class="text-[14px] leading-[1.6] text-ink-muted">{{ t('plansStrip.verifactu.body') }}</p>
          <NuxtLink :to="verifactuHref" class="mt-auto pt-1 text-[14px] font-semibold text-brand-text hover:underline">
            {{ t('plansStrip.verifactu.link') }} →
          </NuxtLink>
        </div>
      </div>
      <p class="text-center text-[14px] text-ink-muted">
        {{ t('plansStrip.automations.text') }}
        <NuxtLink :to="localePath('automatizaciones')" class="font-semibold text-brand-text hover:underline">
          {{ t('plansStrip.automations.link') }}
        </NuxtLink>
      </p>
    </div>
  </section>
</template>

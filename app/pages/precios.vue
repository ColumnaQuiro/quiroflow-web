<script setup lang="ts">
definePageMeta({ layout: 'kit', i18n: { paths: { en: '/pricing', fr: '/tarifs' } } })

const c = useCopy()
const p = computed(() => c('pricingPage'))
const faqItems = useFaqItems('pricingPage.faq.items')
useKitSeo('pricingPage', () => faqItems.value)
</script>

<template>
  <main id="top">
    <KitPricingHero />
    <section id="planes" class="section" style="--h: 2" aria-labelledby="pla-h">
      <div class="wrap">
        <div class="section-head">
          <h2 id="pla-h">{{ p.plans.h2 }}</h2>
          <p>{{ p.plans.lead }}</p>
        </div>
        <KitPlanCards mode="full" />
      </div>
    </section>
    <KitPricingExtras />
    <KitStatement id="hueco" :copy="p.statement" />
    <KitFaq id="preguntas" :h2="p.faq.h2" :lead="p.faq.lead" :items="p.faq.items" :hm="2">
      <KitEmailCapture />
    </KitFaq>
  </main>
</template>

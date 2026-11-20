<script setup lang="ts">
definePageMeta({ layout: 'kit', i18n: { paths: { en: '/switch', fr: '/changer-de-logiciel' } } })

const c = useCopy()
const s = computed(() => c('switchPage'))
// Data, migration, leaving and the trial: the four questions of the old
// homepage FAQ (faq.items in es/en/fr.ts) about changing software.
const allFaq = useFaqItems('faq.items')
const faqItems = computed(() => [0, 1, 2, 7].map(i => allFaq.value[i]!).filter(Boolean))
useKitSeo('switchPage', () => faqItems.value)
</script>

<template>
  <main id="top">
    <KitSwitchHero />
    <KitSwitchSteps />
    <KitSwitchMoves />
    <KitSwitchData />
    <KitFaq id="preguntas" :h2="s.faq.h2" :lead="s.faq.lead" :items="faqItems" />
  </main>
</template>

<script setup lang="ts">
definePageMeta({ layout: 'kit', i18n: { paths: { en: '/comparison', fr: '/comparatif' } } })

const { locale } = useLocale()
useKitSeo('comparePage')
</script>

<template>
  <main id="top">
    <KitCompareHero />
    <KitCompareTable />
    <!-- The /alternativa-a-* pages are Spanish only. -->
    <KitCompareAlternatives v-if="locale === 'es'" />
  </main>
</template>

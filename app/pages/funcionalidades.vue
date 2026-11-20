<script setup lang="ts">
definePageMeta({ layout: 'kit', i18n: { paths: { en: '/features', fr: '/fonctionnalites' } } })

const c = useCopy()
const f = computed(() => c('featuresPage'))
const home = computed(() => c('home'))
const localePath = useLocalePath()
useKitSeo('featuresPage')

const clinicCards = computed(() => [
  { ...f.value.clinic.agenda, tones: ['', 's1', 's2', 's3'] },
  { ...f.value.clinic.waitlist, tones: ['', 'strike s4', 's2'] },
  { ...f.value.clinic.forms, tones: ['', '', '', ''] },
  { ...f.value.clinic.exercises, tones: ['', '', '', 's2'] },
])
const moneyCards = computed(() => [
  { ...f.value.money.billing, tones: ['', 's2', '', 's2'] },
  { ...f.value.money.verifactu, tones: ['', '', '', 's2'] },
  { ...f.value.money.payments },
  { ...f.value.money.reports },
  { ...f.value.money.growth, tones: ['', '', 's2'] },
])
const moreCards = computed(() => [
  { ...f.value.more.booking, tones: ['', '', '', 's2'] },
  { ...f.value.more.automations },
  { ...f.value.more.app },
  { ...f.value.more.reminders, tones: ['', 's2', ''] },
])
</script>

<template>
  <main id="top">
    <KitFeaturesHero />
    <KitCardGrid id="consulta" :h2="f.clinic.h2" :muted="f.clinic.h2Muted" layout="two-rows" :cards="clinicCards" />
    <KitSplitChat
      id="recepcionista"
      :h2="f.receptionist.h2"
      :lead="f.receptionist.lead"
      :rows="f.receptionist.rows"
      :link="{ href: localePath('precios'), label: f.receptionist.link }"
      :chat="home.receptionist.chat"
    />
    <KitCardGrid id="cobros" :h2="f.money.h2" layout="bento" :cards="moneyCards" />
    <KitCardGrid
      id="reservas"
      :h2="f.more.h2"
      layout="two-rows"
      :cards="moreCards"
      :link="{ href: localePath('automatizaciones'), label: f.more.automationsLink }"
    />
    <KitProviders />
  </main>
</template>

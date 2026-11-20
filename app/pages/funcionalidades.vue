<script setup lang="ts">
definePageMeta({ layout: 'kit', i18n: { paths: { en: '/features', fr: '/fonctionnalites' } } })

const c = useCopy()
const f = computed(() => c('featuresPage'))
const home = computed(() => c('home'))
const localePath = useLocalePath()
const alt = computed(() => c('site.shots'))
useKitSeo('featuresPage')

const clinicCards = computed(() => [
  { ...f.value.clinic.agenda, shot: { src: '/screens/calendario-salas.webp', alt: alt.value.calendarioSalas } },
  { ...f.value.clinic.waitlist, tones: ['', 'strike s4', 's2'] },
  { ...f.value.clinic.forms, tones: ['', '', '', ''] },
  { ...f.value.clinic.exercises, tones: ['', '', '', 's2'] },
])
const moneyCards = computed(() => [
  { ...f.value.money.billing, shot: { src: '/screens/bono.webp', alt: alt.value.bono } },
  { ...f.value.money.verifactu, shot: { src: '/screens/facturas.webp', alt: alt.value.facturas } },
  { ...f.value.money.payments },
  { ...f.value.money.reports, shot: { src: '/screens/retencion.webp', alt: alt.value.retencion } },
  { ...f.value.money.growth, tones: ['', '', 's2'] },
])
const moreCards = computed(() => [
  { ...f.value.more.booking, tones: ['', '', '', 's2'] },
  { ...f.value.more.automations },
  { ...f.value.more.app, shot: { src: '/screens/app-paciente-inicio.webp', alt: alt.value.app, phone: true } },
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

<script setup lang="ts">
import { BOOKING_URL } from '~/utils/links'
import type { LocalisedText } from '~/composables/usePageSeo'

// The homepage, redesigned on the kit (layouts/kit.vue). It is the summary:
// pricing, features, comparison and switching each have their own page now,
// so each can rank for its own search instead of one long page for all.
// The root URL still targets the category itself (practice management
// software for clinics), not one specialty.
definePageMeta({ layout: 'kit' })

const c = useCopy()
const home = computed(() => c('home'))
const localePath = useLocalePath()

const titles: LocalisedText = {
  es: 'QuiroFlow — Software de gestión para clínicas',
  en: 'QuiroFlow — Practice management software for clinics',
  fr: 'QuiroFlow — Logiciel de gestion pour cabinets',
}
const descriptions: LocalisedText = {
  es: 'Agenda, recepcionista con IA en WhatsApp, bonos, facturación VeriFactu y app para pacientes. Para quiropráctica, fisioterapia, osteopatía y podología.',
  en: 'Calendar, AI receptionist on WhatsApp, packages, VeriFactu invoicing and a patient app. For chiropractic, physiotherapy, osteopathy and podiatry clinics.',
  fr: 'Agenda, réceptionniste IA sur WhatsApp, forfaits, facturation VeriFactu et app patient. Pour la chiropraxie, la kinésithérapie, l’ostéopathie et la podologie.',
}
const imageAlts: LocalisedText = {
  es: 'QuiroFlow — software de gestión para clínicas de terapia manual',
  en: 'QuiroFlow — practice management software for manual therapy clinics',
  fr: 'QuiroFlow — logiciel de gestion pour cabinets de thérapie manuelle',
}

// The FAQ schema lists exactly the questions shown on the page.
const faqItems = useFaqItems('home.faq.items')

usePageSeo({
  titles,
  descriptions,
  image: '/og-image.png',
  imageAlts,
  jsonLdKey: 'ld-json-home',
  jsonLd: ({ url, locale, description }) => ({
    '@context': 'https://schema.org',
    '@graph': [
      webPageJsonLd({ url, name: titles[locale], description, locale }),
      faqJsonLd(faqItems.value),
    ],
  }),
})
</script>

<template>
  <main id="top">
    <KitHomeHero />
    <KitHomeAgenda />
    <KitHomeFeatures />
    <KitSplitChat
      id="recepcionista"
      :h2="home.receptionist.h2"
      :lead="home.receptionist.lead"
      :rows="home.receptionist.rows"
      :link="{ href: localePath('precios'), label: home.receptionist.link }"
      :chat="home.receptionist.chat"
      :shot="{ alt: c('site.shots.recepcionista') }"
    />
    <KitHomeMoney />
    <KitStatement id="ficha" :copy="home.statement" />
    <KitHomeSpecialties />
    <KitHomeSwitch />
    <KitHomePricing />
    <KitFaq
      id="preguntas"
      :hm="2"
      :h2="home.faq.h2"
      :lead="home.faq.lead"
      :items="home.faq.items"
      :link="{ href: BOOKING_URL, label: home.faq.link }"
    >
      <KitEmailCapture />
    </KitFaq>
  </main>
</template>

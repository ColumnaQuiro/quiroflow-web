<script setup lang="ts">
import { BOOKING_URL, SIGNUP_URL } from '~/utils/links'
import type { LocalisedText } from '~/composables/usePageSeo'

// Localised slugs, same as the other vertical pages: the slug is one of the
// strongest on-page signals for the term the page targets.
definePageMeta({
  i18n: { paths: { en: '/osteopathy-software', fr: '/logiciel-osteopathie' } },
})

const t = useT()
const { tm, rt } = useI18n()

// The title leads with the practitioner ("osteópatas") because that is how the
// search is phrased far more often than "clínicas de osteopatía"; the H1 keeps
// the clinic wording for the person reading the page.
const titles: LocalisedText = {
  es: 'Software para osteópatas y centros de osteopatía | QuiroFlow',
  en: 'Practice management software for osteopaths | QuiroFlow',
  fr: 'Logiciel de gestion pour ostéopathes | QuiroFlow',
}
const descriptions: LocalisedText = {
  es: 'Software para osteópatas: sala asignada sola, anamnesis y diagrama corporal desde el móvil del paciente, notas con pruebas adjuntas y facturación VeriFactu.',
  en: 'Software for osteopaths: automatic room assignment, a case history and body chart patients fill in on their phone, and session notes with scans attached.',
  fr: "Logiciel pour ostéopathes : salles attribuées automatiquement, anamnèse et schéma corporel remplis sur mobile, notes de séance avec examens joints.",
}
const imageAlts: LocalisedText = {
  es: 'QuiroFlow — software de gestión para centros de osteopatía',
  en: 'QuiroFlow — practice management software for osteopathy clinics',
  fr: "QuiroFlow — logiciel de gestion pour cabinets d'ostéopathie",
}

const faqItems = useFaqItems('osteopatia.faq.items')

// Same rt() treatment as the FAQ -- tm() alone hands back compiled messages
// for nested objects, which render as [object Object].
const edgeItems = computed(() =>
  (tm('osteopatia.edge.items') as { title: string; body: string }[]).map(item => ({
    title: rt(item.title),
    body: rt(item.body),
  })),
)

usePageSeo({
  titles,
  descriptions,
  image: '/og-osteopatia.png',
  imageAlts,
  jsonLdKey: 'ld-json-osteopatia',
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
  <div>
    <VerticalHero
      :badge="t('osteopatia.badge')"
      :title="t('osteopatia.title')"
      :description="t('osteopatia.description')"
      :cta-primary="t('osteopatia.ctaPrimary')"
      :cta-secondary="t('osteopatia.ctaSecondary')"
      :see-features="t('osteopatia.seeFeatures')"
    />

    <section id="funcionalidades" class="pt-20">
      <div class="mx-auto max-w-[1120px] px-8 text-center">
        <h2 class="text-[32px] tracking-tightTitle text-ink-900">
          {{ t('funcionalidades.sectorTitle') }}
        </h2>
      </div>
    </section>

    <FeatureSection
      :eyebrow="t('osteopatia.features.agenda.eyebrow')"
      :title="t('osteopatia.features.agenda.title')"
      :description="t('osteopatia.features.agenda.description')"
    >
      <template #visual>
        <MockupsCalendarMockup :treatment-label="t('osteopatia.mockups.calendarType')" />
      </template>
    </FeatureSection>

    <FeatureSection
      reverse
      :eyebrow="t('osteopatia.features.historia.eyebrow')"
      :title="t('osteopatia.features.historia.title')"
      :description="t('osteopatia.features.historia.description')"
    >
      <template #visual>
        <MockupsFormBuilderMockup />
      </template>
    </FeatureSection>

    <FeatureSection
      :eyebrow="t('osteopatia.features.revisiones.eyebrow')"
      :title="t('osteopatia.features.revisiones.title')"
      :description="t('osteopatia.features.revisiones.description')"
    >
      <template #visual>
        <MockupsWhatsappMockup />
      </template>
    </FeatureSection>

    <FeatureSection
      reverse
      :eyebrow="t('osteopatia.features.bonos.eyebrow')"
      :title="t('osteopatia.features.bonos.title')"
      :description="t('osteopatia.features.bonos.description')"
    >
      <template #visual>
        <MockupsInvoiceMockup :service-label="t('osteopatia.mockups.invoiceItem')" />
      </template>
    </FeatureSection>

    <FeatureSection
      :eyebrow="t('osteopatia.features.informes.eyebrow')"
      :title="t('osteopatia.features.informes.title')"
      :description="t('osteopatia.features.informes.description')"
    >
      <template #visual>
        <MockupsReportsMockup />
      </template>
    </FeatureSection>

    <section class="border-y border-line bg-surface-page py-20">
      <div class="mx-auto flex max-w-[1120px] flex-col gap-10 px-8">
        <div class="mx-auto flex max-w-[640px] flex-col gap-3 text-center">
          <h2 class="text-[30px] tracking-tightTitle text-ink-900">{{ t('osteopatia.edge.title') }}</h2>
          <p class="text-[15.5px] leading-[1.6] text-ink-muted">{{ t('osteopatia.edge.description') }}</p>
        </div>
        <div class="grid grid-cols-1 gap-5 md:grid-cols-2">
          <div
            v-for="item in edgeItems"
            :key="item.title"
            class="flex flex-col gap-2.5 rounded-card border border-line bg-white p-7"
          >
            <h3 class="text-[17px] font-semibold tracking-tightTitle text-ink-900">{{ item.title }}</h3>
            <p class="text-[14.5px] leading-[1.7] text-ink-muted">{{ item.body }}</p>
          </div>
        </div>
      </div>
    </section>

    <MigrationSection />

    <DataSection />

    <FaqSection :title="t('osteopatia.faq.title')" :items="faqItems" />

    <EmailCapture form-name="osteopatia-info" />

    <section class="border-t border-line py-24">
      <div class="mx-auto flex max-w-[640px] flex-col items-center gap-4 px-8 text-center">
        <h2 class="text-[30px] tracking-tightTitle text-ink-900">{{ t('osteopatia.cta.title') }}</h2>
        <p class="text-[15.5px] leading-[1.6] text-ink-muted">{{ t('osteopatia.cta.description') }}</p>
        <div class="mt-2 flex flex-wrap items-center justify-center gap-3">
          <a
            :href="SIGNUP_URL"
            target="_blank"
            rel="noopener"
            class="inline-flex items-center justify-center rounded-ctl bg-brand px-[22px] py-3 text-[14.5px] font-semibold text-white hover:bg-brand-hover"
          >
            {{ t('osteopatia.cta.button') }}
          </a>
          <a
            :href="BOOKING_URL"
            target="_blank"
            rel="noopener"
            class="inline-flex items-center justify-center rounded-ctl border border-line-control bg-white px-[22px] py-3 text-[14.5px] font-semibold text-ink-700 hover:border-ink-faint"
          >
            {{ t('osteopatia.cta.buttonSecondary') }}
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { BOOKING_URL, SIGNUP_URL } from '~/utils/links'
import type { LocalisedText } from '~/composables/usePageSeo'

// Localised slugs, same as the other vertical pages: the slug is one of the
// strongest on-page signals for the term the page targets.
definePageMeta({
  i18n: { paths: { en: '/podiatry-software', fr: '/logiciel-podologie' } },
})

const t = useT()
const { tm, rt } = useI18n()

// Leads with the practitioner ("podólogos"), as on the osteopathy page --
// that is how the search is usually phrased.
const titles: LocalisedText = {
  es: 'Software para podólogos y clínicas de podología | QuiroFlow',
  en: 'Practice management software for podiatrists | QuiroFlow',
  fr: 'Logiciel de gestion pour podologues | QuiroFlow',
}
const descriptions: LocalisedText = {
  es: 'Software para podólogos: agenda por gabinete, fotos e informes en la ficha del paciente, venta de productos con stock, revisiones periódicas por WhatsApp, reserva online y facturación VeriFactu.',
  en: 'Software for podiatrists: a calendar by treatment room, photos and reports on the patient record, product sales with stock, WhatsApp check-up reminders and online booking.',
  fr: 'Logiciel pour podologues : agenda par cabinet, photos et comptes rendus dans le dossier patient, vente de produits avec stock, rappels de contrôle par WhatsApp et réservation en ligne.',
}
const imageAlts: LocalisedText = {
  es: 'QuiroFlow — software de gestión para clínicas de podología',
  en: 'QuiroFlow — practice management software for podiatry clinics',
  fr: 'QuiroFlow — logiciel de gestion pour cabinets de podologie',
}

const faqItems = useFaqItems('podologia.faq.items')

// Same rt() treatment as the FAQ -- tm() alone hands back compiled messages
// for nested objects, which render as [object Object].
const edgeItems = computed(() =>
  (tm('podologia.edge.items') as { title: string; body: string }[]).map(item => ({
    title: rt(item.title),
    body: rt(item.body),
  })),
)

usePageSeo({
  titles,
  descriptions,
  image: '/og-podologia.png',
  imageAlts,
  jsonLdKey: 'ld-json-podologia',
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
      :badge="t('podologia.badge')"
      :title="t('podologia.title')"
      :description="t('podologia.description')"
      :cta-primary="t('podologia.ctaPrimary')"
      :cta-secondary="t('podologia.ctaSecondary')"
      :see-features="t('podologia.seeFeatures')"
    />

    <section id="funcionalidades" class="pt-20">
      <div class="mx-auto max-w-[1120px] px-8 text-center">
        <h2 class="text-[32px] tracking-tightTitle text-ink-900">
          {{ t('funcionalidades.sectorTitle') }}
        </h2>
      </div>
    </section>

    <FeatureSection
      :eyebrow="t('podologia.features.agenda.eyebrow')"
      :title="t('podologia.features.agenda.title')"
      :description="t('podologia.features.agenda.description')"
    >
      <template #visual>
        <MockupsCalendarMockup :treatment-label="t('podologia.mockups.calendarType')" />
      </template>
    </FeatureSection>

    <FeatureSection
      reverse
      :eyebrow="t('podologia.features.historia.eyebrow')"
      :title="t('podologia.features.historia.title')"
      :description="t('podologia.features.historia.description')"
    >
      <template #visual>
        <MockupsFormBuilderMockup />
      </template>
    </FeatureSection>

    <FeatureSection
      :eyebrow="t('podologia.features.productos.eyebrow')"
      :title="t('podologia.features.productos.title')"
      :description="t('podologia.features.productos.description')"
    >
      <template #visual>
        <MockupsInvoiceMockup :service-label="t('podologia.mockups.invoiceItem')" />
      </template>
    </FeatureSection>

    <FeatureSection
      reverse
      :eyebrow="t('podologia.features.revisiones.eyebrow')"
      :title="t('podologia.features.revisiones.title')"
      :description="t('podologia.features.revisiones.description')"
    >
      <template #visual>
        <MockupsWhatsappMockup />
      </template>
    </FeatureSection>

    <FeatureSection
      :eyebrow="t('podologia.features.reserva.eyebrow')"
      :title="t('podologia.features.reserva.title')"
      :description="t('podologia.features.reserva.description')"
    >
      <template #visual>
        <MockupsBookingWidgetMockup />
      </template>
    </FeatureSection>

    <section class="border-y border-line bg-surface-page py-20">
      <div class="mx-auto flex max-w-[1120px] flex-col gap-10 px-8">
        <div class="mx-auto flex max-w-[640px] flex-col gap-3 text-center">
          <h2 class="text-[30px] tracking-tightTitle text-ink-900">{{ t('podologia.edge.title') }}</h2>
          <p class="text-[15.5px] leading-[1.6] text-ink-muted">{{ t('podologia.edge.description') }}</p>
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

    <FaqSection :title="t('podologia.faq.title')" :items="faqItems" />

    <EmailCapture form-name="podologia-info" />

    <section class="border-t border-line py-24">
      <div class="mx-auto flex max-w-[640px] flex-col items-center gap-4 px-8 text-center">
        <h2 class="text-[30px] tracking-tightTitle text-ink-900">{{ t('podologia.cta.title') }}</h2>
        <p class="text-[15.5px] leading-[1.6] text-ink-muted">{{ t('podologia.cta.description') }}</p>
        <div class="mt-2 flex flex-wrap items-center justify-center gap-3">
          <a
            :href="SIGNUP_URL"
            target="_blank"
            rel="noopener"
            class="inline-flex items-center justify-center rounded-ctl bg-brand px-[22px] py-3 text-[14.5px] font-semibold text-white hover:bg-brand-hover"
          >
            {{ t('podologia.cta.button') }}
          </a>
          <a
            :href="BOOKING_URL"
            target="_blank"
            rel="noopener"
            class="inline-flex items-center justify-center rounded-ctl border border-line-control bg-white px-[22px] py-3 text-[14.5px] font-semibold text-ink-700 hover:border-ink-faint"
          >
            {{ t('podologia.cta.buttonSecondary') }}
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

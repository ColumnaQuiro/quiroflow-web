<script setup lang="ts">
import { BOOKING_URL, SIGNUP_URL } from '~/utils/links'
import type { LocalisedText } from '~/composables/usePageSeo'

// Localised slugs rather than /en/software-fisioterapia -- same reasoning as
// the legal pages, and it matters more here: this page exists to rank, and the
// slug is one of the strongest on-page signals for the term it targets.
definePageMeta({
  i18n: { paths: { en: '/physiotherapy-software', fr: '/logiciel-kinesitherapie' } },
})

const t = useT()
const { tm, rt } = useI18n()

// Deliberately not the same string as the H1: the title tag leads with the
// exact phrase the page targets ("software para clínicas de fisioterapia"),
// while the H1 reads as a sentence for the person actually landing here.
const titles: LocalisedText = {
  es: 'Software para clínicas de fisioterapia | QuiroFlow',
  en: 'Practice management software for physiotherapy clinics | QuiroFlow',
  fr: 'Logiciel de gestion pour cabinets de kinésithérapie | QuiroFlow',
}
const descriptions: LocalisedText = {
  es: 'Software de gestión para clínicas de fisioterapia: agenda con asignación automática de camilla o box, bonos de sesiones, historia clínica digital y recordatorios por WhatsApp.',
  en: 'Practice management software for physiotherapy clinics: automatic room and table assignment, session packages, digital clinical records and WhatsApp reminders.',
  fr: 'Logiciel de gestion pour cabinets de kinésithérapie : attribution automatique des tables, forfaits de séances, dossier patient numérique et rappels WhatsApp.',
}
// Was inheriting the site-wide default, which said "clínicas quiroprácticas"
// on the page whose whole job is to convince a physiotherapist it is for them.
const imageAlts: LocalisedText = {
  es: 'QuiroFlow — software de gestión para clínicas de fisioterapia',
  en: 'QuiroFlow — practice management software for physiotherapy clinics',
  fr: 'QuiroFlow — logiciel de gestion pour cabinets de kinésithérapie',
}

const faqItems = useFaqItems('fisioterapia.faq.items')

// Same rt() treatment as the FAQ -- tm() alone hands back compiled messages
// for nested objects, which render as [object Object].
const edgeItems = computed(() =>
  (tm('fisioterapia.edge.items') as { title: string; body: string }[]).map(item => ({
    title: rt(item.title),
    body: rt(item.body),
  })),
)

usePageSeo({
  titles,
  descriptions,
  image: '/og-fisioterapia.png',
  imageAlts,
  jsonLdKey: 'ld-json-fisioterapia',
  jsonLd: ({ url, description }) => ({
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'SoftwareApplication',
        name: 'QuiroFlow',
        url,
        applicationCategory: 'BusinessApplication',
        operatingSystem: 'Web',
        description,
        publisher: { '@id': 'https://quiroflow.com/#organization' },
      },
      // FAQPage schema is honest here -- every question below is really on
      // the page as visible text, which is what Google requires for the rich
      // result.
      faqJsonLd(faqItems.value),
    ],
  }),
})
</script>

<template>
  <div>
    <VerticalHero
      :badge="t('fisioterapia.badge')"
      :title="t('fisioterapia.title')"
      :description="t('fisioterapia.description')"
      :cta-primary="t('fisioterapia.ctaPrimary')"
      :cta-secondary="t('fisioterapia.ctaSecondary')"
      :see-features="t('fisioterapia.seeFeatures')"
    />

    <section id="funcionalidades" class="pt-20">
      <div class="mx-auto max-w-[1120px] px-8 text-center">
        <h2 class="text-[32px] tracking-tightTitle text-ink-900">
          {{ t('funcionalidades.sectorTitle') }}
        </h2>
      </div>
    </section>

    <FeatureSection
      :eyebrow="t('fisioterapia.features.agenda.eyebrow')"
      :title="t('fisioterapia.features.agenda.title')"
      :description="t('fisioterapia.features.agenda.description')"
    >
      <template #visual>
        <!-- Was labelling every appointment "Ajuste" on the physiotherapy
             page, which is the one word a fisio does not use. -->
        <MockupsCalendarMockup :treatment-label="t('fisioterapia.mockups.calendarType')" />
      </template>
    </FeatureSection>

    <FeatureSection
      reverse
      :eyebrow="t('fisioterapia.features.bonos.eyebrow')"
      :title="t('fisioterapia.features.bonos.title')"
      :description="t('fisioterapia.features.bonos.description')"
    >
      <template #visual>
        <!-- Same problem on the invoice: the sample line read "Ajuste
             quiropráctico" on a page selling to physiotherapists. -->
        <MockupsInvoiceMockup :service-label="t('fisioterapia.mockups.invoiceItem')" />
      </template>
    </FeatureSection>

    <FeatureSection
      :eyebrow="t('fisioterapia.features.whatsapp.eyebrow')"
      :title="t('fisioterapia.features.whatsapp.title')"
      :description="t('fisioterapia.features.whatsapp.description')"
    >
      <template #visual>
        <MockupsWhatsappMockup />
      </template>
    </FeatureSection>

    <FeatureSection
      reverse
      :eyebrow="t('fisioterapia.features.historia.eyebrow')"
      :title="t('fisioterapia.features.historia.title')"
      :description="t('fisioterapia.features.historia.description')"
    >
      <template #visual>
        <MockupsFormBuilderMockup />
      </template>
    </FeatureSection>

    <FeatureSection
      :eyebrow="t('fisioterapia.features.reserva.eyebrow')"
      :title="t('fisioterapia.features.reserva.title')"
      :description="t('fisioterapia.features.reserva.description')"
    >
      <template #visual>
        <MockupsBookingWidgetMockup />
      </template>
    </FeatureSection>

    <FeatureSection
      reverse
      :eyebrow="t('fisioterapia.features.informes.eyebrow')"
      :title="t('fisioterapia.features.informes.title')"
      :description="t('fisioterapia.features.informes.description')"
    >
      <template #visual>
        <MockupsReportsMockup />
      </template>
    </FeatureSection>

    <section class="border-y border-line bg-surface-page py-20">
      <div class="mx-auto flex max-w-[1120px] flex-col gap-10 px-8">
        <div class="mx-auto flex max-w-[640px] flex-col gap-3 text-center">
          <h2 class="text-[30px] tracking-tightTitle text-ink-900">{{ t('fisioterapia.edge.title') }}</h2>
          <p class="text-[15.5px] leading-[1.6] text-ink-muted">{{ t('fisioterapia.edge.description') }}</p>
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

    <FaqSection :title="t('fisioterapia.faq.title')" :items="faqItems" />

    <EmailCapture form-name="fisioterapia-info" />

    <section class="border-t border-line py-24">
      <div class="mx-auto flex max-w-[640px] flex-col items-center gap-4 px-8 text-center">
        <h2 class="text-[30px] tracking-tightTitle text-ink-900">{{ t('fisioterapia.cta.title') }}</h2>
        <p class="text-[15.5px] leading-[1.6] text-ink-muted">{{ t('fisioterapia.cta.description') }}</p>
        <div class="mt-2 flex flex-wrap items-center justify-center gap-3">
          <a
            :href="SIGNUP_URL"
            target="_blank"
            rel="noopener"
            class="inline-flex items-center justify-center rounded-ctl bg-brand px-[22px] py-3 text-[14.5px] font-semibold text-white hover:bg-brand-hover"
          >
            {{ t('fisioterapia.cta.button') }}
          </a>
          <a
            :href="BOOKING_URL"
            target="_blank"
            rel="noopener"
            class="inline-flex items-center justify-center rounded-ctl border border-line-control bg-white px-[22px] py-3 text-[14.5px] font-semibold text-ink-700 hover:border-ink-faint"
          >
            {{ t('fisioterapia.cta.buttonSecondary') }}
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

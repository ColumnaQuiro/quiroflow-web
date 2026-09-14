<script setup lang="ts">
import { BOOKING_URL, SIGNUP_URL } from '~/utils/links'
import type { LocalisedText } from '~/composables/usePageSeo'

// Localised slugs rather than /en/software-quiropractica -- same reasoning as
// the legal pages, and it matters more here: this page exists to rank, and the
// slug is one of the strongest on-page signals for the term it targets.
definePageMeta({
  i18n: { paths: { en: '/chiropractic-software', fr: '/logiciel-chiropraxie' } },
})

const t = useT()
const { tm, rt } = useI18n()

// "software para quiroprácticos" leads the Spanish title on purpose: it is the
// only chiropractic-software phrase Google's own suggestion index will admit
// has real search volume (~20/mo), while the far more natural-sounding
// "software de gestión para clínicas quiroprácticas" -- which every competitor
// writes in their title tag -- returns no suggestions at all. This page, not
// the homepage, is now the one carrying that term.
const titles: LocalisedText = {
  es: 'Software para quiroprácticos y clínicas de quiropráctica | QuiroFlow',
  en: 'Practice management software for chiropractors | QuiroFlow',
  fr: 'Logiciel de gestion pour chiropracteurs | QuiroFlow',
}
const descriptions: LocalisedText = {
  es: 'Software para quiroprácticos: agenda con asignación automática de sala, planes de cuidado con aviso de paciente retrasado, bonos con cobro recurrente y recordatorios por WhatsApp. Migra desde PracticeHub en un fin de semana.',
  en: 'Software for chiropractors: a calendar with automatic room assignment, care plans with behind-schedule alerts, packages with recurring billing, and WhatsApp reminders. Migrate from PracticeHub in a weekend.',
  fr: "Logiciel pour chiropracteurs : agenda avec attribution automatique des salles, plans de soins avec alerte de retard, forfaits à prélèvement récurrent et rappels WhatsApp. Migrez depuis PracticeHub en un week-end.",
}
const imageAlts: LocalisedText = {
  es: 'QuiroFlow — software de gestión para clínicas quiroprácticas',
  en: 'QuiroFlow — practice management software for chiropractic clinics',
  fr: 'QuiroFlow — logiciel de gestion pour cabinets de chiropraxie',
}

const faqItems = useFaqItems('quiropractica.faq.items')

// Same rt() treatment as the FAQ -- tm() alone hands back compiled messages
// for nested objects, which render as [object Object].
const edgeItems = computed(() =>
  (tm('quiropractica.edge.items') as { title: string; body: string }[]).map(item => ({
    title: rt(item.title),
    body: rt(item.body),
  })),
)

usePageSeo({
  titles,
  descriptions,
  image: '/og-quiropractica.png',
  imageAlts,
  jsonLdKey: 'ld-json-quiropractica',
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
      :badge="t('quiropractica.badge')"
      :title="t('quiropractica.title')"
      :description="t('quiropractica.description')"
      :cta-primary="t('quiropractica.ctaPrimary')"
      :cta-secondary="t('quiropractica.ctaSecondary')"
      :see-features="t('quiropractica.seeFeatures')"
    />

    <section id="funcionalidades" class="pt-20">
      <div class="mx-auto max-w-[1120px] px-8 text-center">
        <h2 class="text-[32px] tracking-tightTitle text-ink-900">
          {{ t('funcionalidades.title') }}
        </h2>
      </div>
    </section>

    <FeatureSection
      :eyebrow="t('quiropractica.features.flujo.eyebrow')"
      :title="t('quiropractica.features.flujo.title')"
      :description="t('quiropractica.features.flujo.description')"
    >
      <template #visual>
        <!-- The chiropractic wording lives here, not in the shared mockup --
             the same component renders "Sesión" on the homepage and
             "Séance"/"Session" in the other locales. -->
        <MockupsCalendarMockup :treatment-label="t('quiropractica.mockups.calendarType')" />
      </template>
    </FeatureSection>

    <FeatureSection
      reverse
      :eyebrow="t('quiropractica.features.planes.eyebrow')"
      :title="t('quiropractica.features.planes.title')"
      :description="t('quiropractica.features.planes.description')"
    >
      <template #visual>
        <div class="rounded-card border border-line bg-white p-[22px]">
          <p class="mb-2 text-xs font-semibold text-ink-faint">{{ t('waitlist.visual.delayedHeader') }}</p>
          <div class="mb-3 flex items-center justify-between rounded-ctl border border-line-control/60 p-2.5">
            <span class="text-[12.5px] text-ink-600">{{ t('waitlist.visual.patient') }}</span>
            <span class="rounded-full bg-danger-bg px-2 py-[3px] text-[11px] font-semibold text-danger-text">{{ t('waitlist.visual.delayBadge') }}</span>
          </div>
          <p class="mb-2 text-xs font-semibold text-ink-faint">{{ t('waitlist.visual.canceledHeader') }}</p>
          <div class="mb-3 flex items-center justify-between rounded-ctl border border-line-control/60 p-2.5">
            <span class="text-[12.5px] text-ink-faint line-through">{{ t('waitlist.visual.slot') }}</span>
            <span class="rounded-full bg-danger-bg px-2 py-[3px] text-[11px] font-semibold text-danger-text">{{ t('waitlist.visual.canceledBadge') }}</span>
          </div>
          <div class="flex items-center justify-between rounded-[5px] border-l-[3px] border-brand bg-brand-tint px-3 py-2">
            <span class="text-[12.5px] font-semibold text-brand-text">{{ t('waitlist.visual.offeredTo') }}</span>
            <span class="rounded-full bg-success-bg px-2 py-[3px] text-[11px] font-semibold text-success-text">{{ t('waitlist.visual.bookedBadge') }}</span>
          </div>
        </div>
      </template>
    </FeatureSection>

    <FeatureSection
      :eyebrow="t('quiropractica.features.bonos.eyebrow')"
      :title="t('quiropractica.features.bonos.title')"
      :description="t('quiropractica.features.bonos.description')"
    >
      <template #visual>
        <MockupsInvoiceMockup :service-label="t('quiropractica.mockups.invoiceItem')" />
      </template>
    </FeatureSection>

    <FeatureSection
      reverse
      :eyebrow="t('quiropractica.features.whatsapp.eyebrow')"
      :title="t('quiropractica.features.whatsapp.title')"
      :description="t('quiropractica.features.whatsapp.description')"
    >
      <template #visual>
        <MockupsWhatsappMockup />
      </template>
    </FeatureSection>

    <FeatureSection
      :eyebrow="t('quiropractica.features.historia.eyebrow')"
      :title="t('quiropractica.features.historia.title')"
      :description="t('quiropractica.features.historia.description')"
    >
      <template #visual>
        <MockupsFormBuilderMockup />
      </template>
    </FeatureSection>

    <FeatureSection
      reverse
      :eyebrow="t('quiropractica.features.informes.eyebrow')"
      :title="t('quiropractica.features.informes.title')"
      :description="t('quiropractica.features.informes.description')"
    >
      <template #visual>
        <MockupsReportsMockup />
      </template>
    </FeatureSection>

    <section class="border-y border-line bg-surface-page py-20">
      <div class="mx-auto flex max-w-[1120px] flex-col gap-10 px-8">
        <div class="mx-auto flex max-w-[640px] flex-col gap-3 text-center">
          <h2 class="text-[30px] tracking-tightTitle text-ink-900">{{ t('quiropractica.edge.title') }}</h2>
          <p class="text-[15.5px] leading-[1.6] text-ink-muted">{{ t('quiropractica.edge.description') }}</p>
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

    <FaqSection :title="t('quiropractica.faq.title')" :items="faqItems" />

    <EmailCapture form-name="quiropractica-info" />

    <section class="border-t border-line py-24">
      <div class="mx-auto flex max-w-[640px] flex-col items-center gap-4 px-8 text-center">
        <h2 class="text-[30px] tracking-tightTitle text-ink-900">{{ t('quiropractica.cta.title') }}</h2>
        <p class="text-[15.5px] leading-[1.6] text-ink-muted">{{ t('quiropractica.cta.description') }}</p>
        <div class="mt-2 flex flex-wrap items-center justify-center gap-3">
          <a
            :href="SIGNUP_URL"
            target="_blank"
            rel="noopener"
            class="inline-flex items-center justify-center rounded-ctl bg-brand px-[22px] py-3 text-[14.5px] font-semibold text-white hover:bg-brand-hover"
          >
            {{ t('quiropractica.cta.button') }}
          </a>
          <a
            :href="BOOKING_URL"
            target="_blank"
            rel="noopener"
            class="inline-flex items-center justify-center rounded-ctl border border-line-control bg-white px-[22px] py-3 text-[14.5px] font-semibold text-ink-700 hover:border-ink-faint"
          >
            {{ t('quiropractica.cta.buttonSecondary') }}
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

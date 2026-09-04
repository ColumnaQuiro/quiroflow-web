<script setup lang="ts">
import type { Locale } from '~/composables/useLocale'

const t = useT()
const { tm } = useI18n()
const { locale } = useLocale()
const route = useRoute()

// useLocaleHead supplies htmlAttrs.lang/dir, the hreflang alternate links,
// the canonical link, and og:locale/og:locale:alternate -- all correctly
// per-locale from the current route, which a hand-written version of this
// page's old useHead() could only ever get right for one language at a time.
const i18nHead = useLocaleHead({ seo: true })
const pageUrl = computed(() => `https://quiroflow.com${route.path}`)

const titles: Record<Locale, string> = {
  es: 'QuiroFlow — Software de gestión para clínicas quiroprácticas',
  en: 'QuiroFlow — Practice management software for chiropractic clinics',
  fr: 'QuiroFlow — Logiciel de gestion pour cabinets de chiropraxie',
}
const descriptions: Record<Locale, string> = {
  es: 'Agenda con asignación automática de salas, facturación y recordatorios por WhatsApp, todo en una plataforma para tu clínica. Migra desde PracticeHub en un fin de semana.',
  en: 'A calendar with automatic room assignment, billing, and WhatsApp reminders, all in one platform for your clinic. Migrate from PracticeHub in a weekend.',
  fr: "Un agenda avec attribution automatique des salles, facturation et rappels WhatsApp, le tout sur une seule plateforme pour votre cabinet. Migrez depuis PracticeHub en un week-end.",
}
const jsonLdDescriptions: Record<Locale, string> = {
  es: 'Software de gestión para clínicas quiroprácticas: agenda con asignación automática de salas, historiales clínicos, facturación, bonos y recordatorios por WhatsApp.',
  en: 'Practice management software for chiropractic clinics: scheduling with automatic room assignment, clinical records, billing, memberships, and WhatsApp reminders.',
  fr: "Logiciel de gestion pour cabinets de chiropraxie : agenda avec attribution automatique des salles, dossiers cliniques, facturation, forfaits et rappels WhatsApp.",
}
const title = computed(() => titles[locale.value])
const description = computed(() => descriptions[locale.value])

useHead(() => ({
  htmlAttrs: { lang: i18nHead.value.htmlAttrs?.lang },
  title: title.value,
  link: [...(i18nHead.value.link ?? [])],
  meta: [
    ...(i18nHead.value.meta ?? []),
    { name: 'description', content: description.value },
    { property: 'og:title', content: title.value },
    { property: 'og:description', content: description.value },
    { property: 'og:url', content: pageUrl.value },
    { name: 'twitter:title', content: title.value },
    { name: 'twitter:description', content: description.value },
  ],
  // SoftwareApplication + Organization JSON-LD -- the two schema types that
  // actually match what this page is (a SaaS product's marketing site),
  // rather than reaching for FAQPage/BreadcrumbList schema the site has no
  // real content to back honestly.
  script: [
    {
      // Without a stable key, useHead treats each locale switch's
      // recomputed innerHTML as a brand new tag and appends it rather than
      // replacing the previous one -- caught by inspecting the rendered
      // head after toggling locale, which showed two duplicate <script>
      // blocks (one per language) instead of one.
      key: 'ld-json-software-application',
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@graph': [
          {
            '@type': 'Organization',
            '@id': 'https://quiroflow.com/#organization',
            name: 'QuiroFlow',
            url: 'https://quiroflow.com/',
            logo: 'https://quiroflow.com/icon-512.png',
          },
          {
            '@type': 'SoftwareApplication',
            name: 'QuiroFlow',
            url: pageUrl.value,
            applicationCategory: 'BusinessApplication',
            operatingSystem: 'Web',
            description: jsonLdDescriptions[locale.value],
            publisher: { '@id': 'https://quiroflow.com/#organization' },
          },
        ],
      }),
    },
  ],
}))
</script>

<template>
  <div>
    <HeroSection />

    <PracticeHubSection />

    <section id="funcionalidades" class="pt-24">
      <div class="mx-auto max-w-[1120px] px-8 text-center">
        <span class="w-fit rounded-full border border-brand-tintBorder bg-brand-tint px-3 py-[5px] text-[13px] font-semibold text-brand-text">
          {{ t('funcionalidades.badge') }}
        </span>
        <h2 class="mt-4 text-[34px] tracking-tightTitle text-ink-900">{{ t('funcionalidades.title') }}</h2>
      </div>
    </section>

    <FeatureSection
      :eyebrow="t('platform.eyebrow')"
      :title="t('platform.title')"
      :description="t('platform.description')"
    >
      <template #visual>
        <div class="rounded-card border border-line bg-white p-[22px]">
          <div class="flex flex-col gap-2.5">
            <div class="flex items-center justify-between rounded-[8px] bg-surface-page px-3.5 py-3">
              <span class="text-[13px] font-semibold text-ink-600">{{ t('platform.visual.inboxLabel') }}</span>
              <span class="rounded-full bg-brand px-2 py-[3px] text-[11px] font-semibold text-white">{{ t('platform.visual.inboxBadge') }}</span>
            </div>
            <div class="flex items-center justify-between rounded-[8px] bg-surface-page px-3.5 py-3">
              <span class="text-[13px] font-semibold text-ink-600">{{ t('platform.visual.templateLabel') }}</span>
              <span class="rounded-full bg-success-bg px-2 py-[3px] text-[11px] font-semibold text-success-text">{{ t('platform.visual.active') }}</span>
            </div>
            <div class="flex items-center justify-between rounded-[8px] bg-surface-page px-3.5 py-3">
              <span class="text-[13px] font-semibold text-ink-600">{{ t('platform.visual.campaignLabel') }}</span>
              <span class="rounded-full bg-success-bg px-2 py-[3px] text-[11px] font-semibold text-success-text">{{ t('platform.visual.active') }}</span>
            </div>
            <div class="flex items-center justify-between rounded-[8px] bg-surface-page px-3.5 py-3">
              <span class="text-[13px] font-semibold text-ink-600">{{ t('platform.visual.occupancyLabel') }}</span>
              <span class="text-[13px] font-bold text-ink-900">82%</span>
            </div>
          </div>
        </div>
      </template>
    </FeatureSection>

    <FeatureSection
      reverse
      :eyebrow="t('agenda.eyebrow')"
      :title="t('agenda.title')"
      :description="t('agenda.description')"
    >
      <template #visual>
        <div class="rounded-card border border-line bg-white p-[22px]">
          <p class="mb-3 text-xs font-semibold text-ink-faint">{{ t('agenda.visual.header') }}</p>
          <div class="flex flex-col gap-1.5">
            <div v-for="row in tm('agenda.visual.rows')" :key="row.label" class="flex items-center justify-between rounded-ctl border border-line-control/60 px-2.5 py-2">
              <span class="text-[12.5px] font-semibold text-ink-600">{{ row.label }}</span>
              <span class="rounded-full bg-success-bg px-2 py-[3px] text-[11px] font-semibold text-success-text">{{ row.status }}</span>
            </div>
          </div>
        </div>
      </template>
    </FeatureSection>

    <FeatureSection
      :eyebrow="t('whatsapp.eyebrow')"
      :title="t('whatsapp.title')"
      :description="t('whatsapp.description')"
    >
      <template #visual>
        <MockupsWhatsappMockup />
      </template>
    </FeatureSection>

    <FeatureSection
      reverse
      :eyebrow="t('booking.eyebrow')"
      :title="t('booking.title')"
      :description="t('booking.description')"
    >
      <template #visual>
        <MockupsBookingWidgetMockup />
      </template>
    </FeatureSection>

    <FeatureSection
      :eyebrow="t('waitlist.eyebrow')"
      :title="t('waitlist.title')"
      :description="t('waitlist.description')"
    >
      <template #visual>
        <div class="rounded-card border border-line bg-white p-[22px]">
          <p class="mb-3 text-xs font-semibold text-ink-faint">{{ t('waitlist.visual.canceledHeader') }}</p>
          <div class="mb-3 flex items-center justify-between rounded-ctl border border-line-control/60 p-2.5">
            <span class="text-[12.5px] text-ink-faint line-through">{{ t('waitlist.visual.slot') }}</span>
            <span class="rounded-full bg-danger-bg px-2 py-[3px] text-[11px] font-semibold text-danger-text">{{ t('waitlist.visual.canceledBadge') }}</span>
          </div>
          <div class="mb-4 flex items-center justify-between rounded-[5px] border-l-[3px] border-brand bg-brand-tint px-3 py-2">
            <span class="text-[12.5px] font-semibold text-brand-text">{{ t('waitlist.visual.offeredTo') }}</span>
            <span class="rounded-full bg-success-bg px-2 py-[3px] text-[11px] font-semibold text-success-text">{{ t('waitlist.visual.bookedBadge') }}</span>
          </div>
          <p class="mb-2 text-xs font-semibold text-ink-faint">{{ t('waitlist.visual.delayedHeader') }}</p>
          <div class="flex items-center justify-between rounded-ctl border border-line-control/60 p-2.5">
            <span class="text-[12.5px] text-ink-600">{{ t('waitlist.visual.patient') }}</span>
            <span class="rounded-full bg-danger-bg px-2 py-[3px] text-[11px] font-semibold text-danger-text">{{ t('waitlist.visual.delayBadge') }}</span>
          </div>
        </div>
      </template>
    </FeatureSection>

    <FeatureSection
      reverse
      :eyebrow="t('billing.eyebrow')"
      :title="t('billing.title')"
      :description="t('billing.description')"
    >
      <template #visual>
        <MockupsInvoiceMockup />
      </template>
    </FeatureSection>

    <FeatureSection
      :eyebrow="t('forms.eyebrow')"
      :title="t('forms.title')"
      :description="t('forms.description')"
    >
      <template #visual>
        <MockupsFormBuilderMockup />
      </template>
    </FeatureSection>

    <FeatureSection
      reverse
      :eyebrow="t('reports.eyebrow')"
      :title="t('reports.title')"
      :description="t('reports.description')"
    >
      <template #visual>
        <MockupsReportsMockup />
      </template>
    </FeatureSection>

    <TestimonialSection />

    <ComparisonSection />

    <PricingSection />

    <FinalCta />
  </div>
</template>

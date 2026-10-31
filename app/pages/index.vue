<script setup lang="ts">
import type { LocalisedText } from '~/composables/usePageSeo'

const t = useT()
const { tm, rt } = useI18n()

// The homepage no longer claims the chiropractic head term -- that moved to
// /software-quiropractica, which can rank for it without telling every fisio,
// osteópata and podólogo who lands here from an ad that the page is not for
// them. What the root URL targets now is the category itself: the job the
// product does, for whoever runs the clinic.
const titles: LocalisedText = {
  es: 'QuiroFlow — Software de gestión para clínicas',
  en: 'QuiroFlow — Practice management software for clinics',
  fr: 'QuiroFlow — Logiciel de gestion pour cabinets',
}
// Kept near 155 characters so Google shows them whole; the previous ones ran
// to 260-290 and were cut mid-list. The AI receptionist answers on WhatsApp
// only -- Instagram shares the inbox but the receptionist does not reply there.
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

const faqItems = useFaqItems('faq.items')

// The table-stakes blocks that used to get a full-width FeatureSection each.
// Seven equal-weight sections meant nothing stood out; these are answered in
// a compact grid so the three differentiators above can. Deliberately without
// `agenda`, which keeps its own full section above -- room assignment is part
// of what makes the calendar different rather than a generic calendar.
const gridItems = computed(() =>
  (['whatsapp', 'platform', 'automations', 'booking', 'forms', 'exercises', 'payments', 'reports', 'growth'] as const).map(key => ({
    eyebrow: t(`${key}.eyebrow`),
    title: t(`${key}.title`),
    body: t(`${key}.short`),
  })),
)

usePageSeo({
  titles,
  descriptions,
  image: '/og-image.png',
  imageAlts,
  jsonLdKey: 'ld-json-home',
  // Organization, WebSite and the SoftwareApplication with its offers come
  // from usePageSeo on every page; this adds the page itself and its FAQ.
  // The FAQ schema is honest: every question below is really on the page as
  // visible text.
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
    <HeroSection />

    <OneAppSection />

    <VideoSection />

    <SectorsSection />

    <!-- Reordered by what differentiates, not by category. The waitlist
         re-offer, the behind-schedule alert and recurring-billing packages
         are the three things not one competitor in the table below
         advertises; they used to sit at positions five and six behind the
         calendar and the invoicing every system already has. -->
    <section id="funcionalidades" class="pt-24">
      <div class="mx-auto flex max-w-[1120px] flex-col items-center gap-4 px-8 text-center">
        <span class="w-fit rounded-full border border-brand-tintBorder bg-brand-tint px-3 py-[5px] text-[13px] font-semibold text-brand-text">
          {{ t('funcionalidades.badge') }}
        </span>
        <h2 class="max-w-[720px] text-[34px] leading-[1.15] tracking-tightTitle text-ink-900">{{ t('funcionalidades.title') }}</h2>
        <p class="max-w-[620px] text-[15.5px] leading-[1.6] text-ink-muted">{{ t('funcionalidades.subtitle') }}</p>
      </div>
    </section>

    <!-- First, because it is the newest and the one most worth seeing: it
         answers and books on its own, from the clinic's real calendar. -->
    <FeatureSection
      :eyebrow="t('receptionist.eyebrow')"
      :title="t('receptionist.title')"
      :description="t('receptionist.description')"
      reverse
    >
      <template #visual>
        <MockupsReceptionistMockup />
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
      :eyebrow="t('agenda.eyebrow')"
      :title="t('agenda.title')"
      :description="t('agenda.description')"
    >
      <template #visual>
        <div class="rounded-card border border-line bg-white p-[22px]">
          <p class="mb-3 text-xs font-semibold text-ink-faint">{{ t('agenda.visual.header') }}</p>
          <div class="flex flex-col gap-1.5">
            <div v-for="row in tm('agenda.visual.rows')" :key="rt(row.label)" class="flex items-center justify-between rounded-ctl border border-line-control/60 px-2.5 py-2">
              <span class="text-[12.5px] font-semibold text-ink-600">{{ rt(row.label) }}</span>
              <span class="rounded-full bg-success-bg px-2 py-[3px] text-[11px] font-semibold text-success-text">{{ rt(row.status) }}</span>
            </div>
          </div>
        </div>
      </template>
    </FeatureSection>

    <!-- Not under the "no other program does this" heading above: VeriFactu
         is an obligation every Spanish program has to meet, and the app is
         expected rather than unique. They get full sections because they
         answer the two questions a clinic now asks first. -->
    <section class="pt-14">
      <div class="mx-auto max-w-[1120px] px-8">
        <h2 class="max-w-[640px] text-[25px] tracking-tightTitle text-ink-900">{{ t('funcionalidades.essentialsTitle') }}</h2>
      </div>
    </section>

    <!-- id is the target of PlansStrip's VERI*FACTU link on /en and /fr,
         where the Spanish-only guide page does not exist. -->
    <FeatureSection
      id="verifactu"
      reverse
      :eyebrow="t('verifactu.eyebrow')"
      :title="t('verifactu.title')"
      :description="t('verifactu.description')"
    >
      <template #visual>
        <MockupsVerifactuMockup />
      </template>
    </FeatureSection>

    <FeatureSection
      :eyebrow="t('app.eyebrow')"
      :title="t('app.title')"
      :description="t('app.description')"
    >
      <template #visual>
        <MockupsAppMockup />
      </template>
    </FeatureSection>

    <section class="py-14">
      <div class="mx-auto flex max-w-[1120px] flex-col gap-8 px-8">
        <h2 class="max-w-[640px] text-[25px] tracking-tightTitle text-ink-900">{{ t('funcionalidades.moreTitle') }}</h2>
        <FeatureGrid :items="gridItems" />
      </div>
    </section>

    <MigrationSection />

    <DataSection />

    <TestimonialSection />

    <ComparisonSection />

    <PricingSection />

    <FaqSection :title="t('faq.title')" :description="t('faq.description')" :items="faqItems" />

    <EmailCapture form-name="info-general" />

    <FinalCta />
  </div>
</template>

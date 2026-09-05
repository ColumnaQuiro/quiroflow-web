<script setup lang="ts">
import { BOOKING_URL } from '~/utils/links'
import type { Locale } from '~/composables/useLocale'

// Localised slugs rather than /en/software-fisioterapia -- same reasoning as
// the legal pages, and it matters more here: this page exists to rank, and the
// slug is one of the strongest on-page signals for the term it targets.
definePageMeta({
  i18n: { paths: { en: '/physiotherapy-software', fr: '/logiciel-kinesitherapie' } },
})

const t = useT()
// rt() resolves vue-i18n's compiled message objects back to plain strings --
// tm() alone is fine inside a template, but the FAQ also feeds the JSON-LD
// below, where a compiled message would serialise as an empty object.
const { tm, rt } = useI18n()
const { locale } = useLocale()
const route = useRoute()

const i18nHead = useLocaleHead({ seo: true })
const pageUrl = computed(() => `https://quiroflow.com${route.path}`)

const faqItems = computed(() =>
  (tm('fisioterapia.faq.items') as { q: string; a: string }[]).map(item => ({
    q: rt(item.q),
    a: rt(item.a),
  })),
)

// Deliberately not the same string as the H1: the title tag leads with the
// exact phrase the page targets ("software para clínicas de fisioterapia"),
// while the H1 reads as a sentence for the person actually landing here.
const titles: Record<Locale, string> = {
  es: 'Software para clínicas de fisioterapia | QuiroFlow',
  en: 'Practice management software for physiotherapy clinics | QuiroFlow',
  fr: 'Logiciel de gestion pour cabinets de kinésithérapie | QuiroFlow',
}
const descriptions: Record<Locale, string> = {
  es: 'Software de gestión para clínicas de fisioterapia: agenda con asignación automática de camilla o box, bonos de sesiones, historia clínica digital y recordatorios por WhatsApp.',
  en: 'Practice management software for physiotherapy clinics: automatic room and table assignment, session packages, digital clinical records and WhatsApp reminders.',
  fr: 'Logiciel de gestion pour cabinets de kinésithérapie : attribution automatique des tables, forfaits de séances, dossier patient numérique et rappels WhatsApp.',
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
  script: [
    {
      // FAQPage schema is honest here -- every question below is really on the
      // page as visible text, which is what Google requires for the rich result.
      key: 'ld-json-fisioterapia',
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@graph': [
          {
            '@type': 'SoftwareApplication',
            name: 'QuiroFlow',
            url: pageUrl.value,
            applicationCategory: 'BusinessApplication',
            operatingSystem: 'Web',
            description: description.value,
            publisher: { '@id': 'https://quiroflow.com/#organization' },
          },
          {
            '@type': 'FAQPage',
            mainEntity: faqItems.value.map(item => ({
              '@type': 'Question',
              name: item.q,
              acceptedAnswer: { '@type': 'Answer', text: item.a },
            })),
          },
        ],
      }),
    },
  ],
}))
</script>

<template>
  <div>
    <section class="border-b border-line bg-surface-page py-20">
      <div class="mx-auto flex max-w-[1120px] flex-col items-center gap-5 px-8 text-center">
        <span class="w-fit rounded-full border border-brand-tintBorder bg-brand-tint px-3 py-[5px] text-[13px] font-semibold text-brand-text">
          {{ t('fisioterapia.badge') }}
        </span>
        <h1 class="max-w-[760px] text-[38px] leading-[1.12] tracking-tightTitle text-ink-900 md:text-[46px]">
          {{ t('fisioterapia.title') }}
        </h1>
        <p class="max-w-[640px] text-[16.5px] leading-[1.6] text-ink-muted">
          {{ t('fisioterapia.description') }}
        </p>
        <div class="mt-2 flex flex-wrap items-center justify-center gap-3">
          <a
            :href="BOOKING_URL"
            target="_blank"
            rel="noopener"
            class="inline-flex items-center justify-center rounded-ctl bg-brand px-[22px] py-3 text-[14.5px] font-semibold text-white hover:bg-brand-hover"
          >
            {{ t('fisioterapia.ctaPrimary') }}
          </a>
          <a
            href="#funcionalidades"
            class="inline-flex items-center justify-center rounded-ctl border border-line-control bg-white px-[22px] py-3 text-[14.5px] font-semibold text-ink-700 hover:border-ink-faint"
          >
            {{ t('fisioterapia.ctaSecondary') }}
          </a>
        </div>
      </div>
    </section>

    <section id="funcionalidades" class="pt-20">
      <div class="mx-auto max-w-[1120px] px-8 text-center">
        <h2 class="text-[32px] tracking-tightTitle text-ink-900">
          {{ t('funcionalidades.title') }}
        </h2>
      </div>
    </section>

    <FeatureSection
      :eyebrow="t('fisioterapia.features.agenda.eyebrow')"
      :title="t('fisioterapia.features.agenda.title')"
      :description="t('fisioterapia.features.agenda.description')"
    >
      <template #visual>
        <MockupsCalendarMockup />
      </template>
    </FeatureSection>

    <FeatureSection
      reverse
      :eyebrow="t('fisioterapia.features.bonos.eyebrow')"
      :title="t('fisioterapia.features.bonos.title')"
      :description="t('fisioterapia.features.bonos.description')"
    >
      <template #visual>
        <MockupsInvoiceMockup />
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
      <div class="mx-auto flex max-w-[760px] flex-col gap-8 px-8">
        <h2 class="text-center text-[30px] tracking-tightTitle text-ink-900">
          {{ t('fisioterapia.faq.title') }}
        </h2>
        <div class="flex flex-col gap-5">
          <div
            v-for="item in faqItems"
            :key="item.q"
            class="rounded-card border border-line bg-white p-6"
          >
            <h3 class="text-[16px] font-semibold tracking-tightTitle text-ink-900">{{ item.q }}</h3>
            <p class="mt-2 text-[14.5px] leading-[1.7] text-ink-muted">{{ item.a }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="py-24">
      <div class="mx-auto flex max-w-[640px] flex-col items-center gap-4 px-8 text-center">
        <h2 class="text-[30px] tracking-tightTitle text-ink-900">{{ t('fisioterapia.cta.title') }}</h2>
        <p class="text-[15.5px] leading-[1.6] text-ink-muted">{{ t('fisioterapia.cta.description') }}</p>
        <a
          :href="BOOKING_URL"
          target="_blank"
          rel="noopener"
          class="mt-2 inline-flex items-center justify-center rounded-ctl bg-brand px-[22px] py-3 text-[14.5px] font-semibold text-white hover:bg-brand-hover"
        >
          {{ t('fisioterapia.cta.button') }}
        </a>
      </div>
    </section>
  </div>
</template>

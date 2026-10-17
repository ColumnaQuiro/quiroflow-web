<script setup lang="ts">
import { BOOKING_URL, SIGNUP_URL } from '~/utils/links'
import type { LocalisedText } from '~/composables/usePageSeo'

// Built as the destination for the "Fisio - automatizaciones IA" ad group:
// the ads promise an AI receptionist and WhatsApp automation, and until now
// they landed on a homepage where that section sits below the fold between
// everything else. Localised slugs for the same reason as the vertical pages.
definePageMeta({
  i18n: { paths: { en: '/automation', fr: '/automatisations' } },
})

const t = useT()
const { tm, rt } = useI18n()

const titles: LocalisedText = {
  es: 'Recepcionista con IA y recordatorios por WhatsApp | QuiroFlow',
  en: 'AI receptionist and WhatsApp reminders for clinics | QuiroFlow',
  fr: 'Réceptionniste IA et rappels WhatsApp pour cabinets | QuiroFlow',
}
const descriptions: LocalisedText = {
  es: 'La recepcionista con IA contesta tu WhatsApp y reserva la cita, los recordatorios se confirman en un toque y el hueco cancelado se reofrece solo al primero de la lista de espera.',
  en: 'An AI receptionist that answers your WhatsApp and books the appointment, reminders confirmed in one tap, and cancelled slots re-offered to the first patient on the waiting list.',
  fr: "Une réceptionniste IA qui répond à votre WhatsApp et réserve le rendez-vous, des rappels confirmés en un geste et les créneaux annulés reproposés automatiquement.",
}
const imageAlts: LocalisedText = {
  es: 'QuiroFlow — recepcionista con IA y automatizaciones para clínicas',
  en: 'QuiroFlow — AI receptionist and automation for clinics',
  fr: 'QuiroFlow — réceptionniste IA et automatisations pour cabinets',
}

const faqItems = useFaqItems('automatizaciones.faq.items')

// tm() alone returns compiled messages for nested objects, which render as
// [object Object] -- same rt() treatment as the vertical pages.
const edgeItems = computed(() =>
  (tm('automatizaciones.edge.items') as { title: string; body: string }[]).map(item => ({
    title: rt(item.title),
    body: rt(item.body),
  })),
)

usePageSeo({
  titles,
  descriptions,
  // No dedicated OG image yet: the site-wide one is neutral and correct,
  // which beats referencing a file that does not exist.
  image: '/og-image.png',
  imageAlts,
  jsonLdKey: 'ld-json-automatizaciones',
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
      faqJsonLd(faqItems.value),
    ],
  }),
})
</script>

<template>
  <div>
    <VerticalHero
      :badge="t('automatizaciones.badge')"
      :title="t('automatizaciones.title')"
      :description="t('automatizaciones.description')"
      :cta-primary="t('automatizaciones.ctaPrimary')"
      :cta-secondary="t('automatizaciones.ctaSecondary')"
      :see-features="t('automatizaciones.seeFeatures')"
    />

    <!-- Renders nothing in production until PRODUCT_VIDEO_URL is set. -->
    <VideoSection />

    <section id="funcionalidades" class="pt-20">
      <div class="mx-auto max-w-[1120px] px-8 text-center">
        <h2 class="text-[32px] tracking-tightTitle text-ink-900">
          {{ t('automatizaciones.sectionTitle') }}
        </h2>
      </div>
    </section>

    <!-- The four product sections reuse the homepage dictionary keys rather
         than restating the features: one source of truth per capability. -->
    <FeatureSection
      :eyebrow="t('receptionist.eyebrow')"
      :title="t('receptionist.title')"
      :description="t('receptionist.description')"
    >
      <template #visual>
        <MockupsReceptionistMockup />
      </template>
    </FeatureSection>

    <FeatureSection
      reverse
      :eyebrow="t('whatsapp.eyebrow')"
      :title="t('whatsapp.title')"
      :description="t('whatsapp.description')"
    >
      <template #visual>
        <MockupsWhatsappMockup />
      </template>
    </FeatureSection>

    <FeatureSection
      :eyebrow="t('waitlist.eyebrow')"
      :title="t('waitlist.title')"
      :description="t('waitlist.description')"
    >
      <template #visual>
        <MockupsCalendarMockup />
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

    <section class="border-y border-line bg-surface-page py-20">
      <div class="mx-auto flex max-w-[1120px] flex-col gap-10 px-8">
        <div class="mx-auto flex max-w-[640px] flex-col gap-3 text-center">
          <h2 class="text-[30px] tracking-tightTitle text-ink-900">{{ t('automatizaciones.edge.title') }}</h2>
          <p class="text-[15.5px] leading-[1.6] text-ink-muted">{{ t('automatizaciones.edge.description') }}</p>
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

    <DataSection />

    <FaqSection :title="t('automatizaciones.faq.title')" :items="faqItems" />

    <EmailCapture form-name="automatizaciones-info" />

    <section class="border-t border-line py-24">
      <div class="mx-auto flex max-w-[640px] flex-col items-center gap-4 px-8 text-center">
        <h2 class="text-[30px] tracking-tightTitle text-ink-900">{{ t('automatizaciones.cta.title') }}</h2>
        <p class="text-[15.5px] leading-[1.6] text-ink-muted">{{ t('automatizaciones.cta.description') }}</p>
        <div class="mt-2 flex flex-wrap items-center justify-center gap-3">
          <a
            :href="SIGNUP_URL"
            target="_blank"
            rel="noopener"
            class="inline-flex items-center justify-center rounded-ctl bg-brand px-[22px] py-3 text-[14.5px] font-semibold text-white hover:bg-brand-hover"
          >
            {{ t('automatizaciones.cta.button') }}
          </a>
          <a
            :href="BOOKING_URL"
            target="_blank"
            rel="noopener"
            class="inline-flex items-center justify-center rounded-ctl border border-line-control bg-white px-[22px] py-3 text-[14.5px] font-semibold text-ink-700 hover:border-ink-faint"
          >
            {{ t('automatizaciones.cta.buttonSecondary') }}
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

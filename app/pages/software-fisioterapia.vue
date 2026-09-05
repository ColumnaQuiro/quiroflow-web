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
const localePath = useLocalePath()
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

// Netlify Forms: the form is submitted with fetch so the visitor gets an inline
// confirmation instead of Netlify's generic success page, but the real <form>
// with data-netlify stays in the prerendered HTML because that markup is what
// Netlify's build step scans to register the form at all. Without JS the native
// POST still works, so this degrades rather than breaks.
const FORM_NAME = 'fisioterapia-info'
const email = ref('')
const clinic = ref('')
const consent = ref(false)
const status = ref<'idle' | 'sending' | 'ok' | 'error'>('idle')

async function submitCapture() {
  if (status.value === 'sending' || !email.value || !consent.value) return
  status.value = 'sending'
  try {
    const body = new URLSearchParams({
      'form-name': FORM_NAME,
      email: email.value,
      clinica: clinic.value,
      consentimiento: 'si',
    })
    const res = await fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: body.toString(),
    })
    if (!res.ok) throw new Error(String(res.status))
    status.value = 'ok'
  }
  catch {
    status.value = 'error'
  }
}

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

    <section class="py-20">
      <div class="mx-auto max-w-[640px] px-8">
        <div class="rounded-card border border-line bg-white p-8 shadow-card">
          <h2 class="text-[24px] tracking-tightTitle text-ink-900">{{ t('fisioterapia.capture.title') }}</h2>
          <p class="mt-2 text-[14.5px] leading-[1.6] text-ink-muted">{{ t('fisioterapia.capture.description') }}</p>

          <p v-if="status === 'ok'" class="mt-5 rounded-ctl bg-success-bg px-4 py-3 text-[14.5px] font-semibold text-success-text">
            {{ t('fisioterapia.capture.success') }}
          </p>

          <form
            v-else
            :name="FORM_NAME"
            method="POST"
            data-netlify="true"
            netlify-honeypot="bot-field"
            class="mt-5 flex flex-col gap-3"
            @submit.prevent="submitCapture"
          >
            <input type="hidden" name="form-name" :value="FORM_NAME" />
            <p class="hidden">
              <label>No rellenar: <input name="bot-field" /></label>
            </p>

            <label class="flex flex-col gap-1.5">
              <span class="text-[13px] font-semibold text-ink-700">{{ t('fisioterapia.capture.emailLabel') }}</span>
              <input
                v-model="email"
                type="email"
                name="email"
                required
                placeholder="hola@tuclinica.com"
                class="rounded-ctl border border-line-control px-3.5 py-2.5 text-[14.5px] text-ink-900 outline-none focus:border-brand"
              />
            </label>

            <label class="flex flex-col gap-1.5">
              <span class="text-[13px] font-semibold text-ink-700">{{ t('fisioterapia.capture.clinicLabel') }}</span>
              <input
                v-model="clinic"
                type="text"
                name="clinica"
                class="rounded-ctl border border-line-control px-3.5 py-2.5 text-[14.5px] text-ink-900 outline-none focus:border-brand"
              />
            </label>

            <label class="mt-1 flex items-start gap-2.5 text-[13px] leading-[1.5] text-ink-muted">
              <input
                v-model="consent"
                type="checkbox"
                name="consentimiento"
                required
                class="mt-0.5 h-4 w-4 shrink-0 accent-brand"
              />
              <span>
                {{ t('fisioterapia.capture.consentBefore') }}
                <NuxtLink :to="localePath('politica-de-privacidad')" class="text-brand underline">
                  {{ t('fisioterapia.capture.consentLink') }}
                </NuxtLink>.
              </span>
            </label>

            <button
              type="submit"
              :disabled="status === 'sending'"
              class="mt-1 inline-flex items-center justify-center rounded-ctl bg-brand px-[22px] py-3 text-[14.5px] font-semibold text-white hover:bg-brand-hover disabled:opacity-60"
            >
              {{ status === 'sending' ? t('fisioterapia.capture.sending') : t('fisioterapia.capture.button') }}
            </button>

            <p v-if="status === 'error'" class="text-[13.5px] text-danger-text">
              {{ t('fisioterapia.capture.error') }}
            </p>
          </form>
        </div>
      </div>
    </section>

    <section class="border-t border-line py-24">
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

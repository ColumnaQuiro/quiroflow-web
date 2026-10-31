<script setup lang="ts">
import { BOOKING_URL, SIGNUP_URL } from '~/utils/links'
import type { LocalisedText } from '~/composables/usePageSeo'
import { findAlternative } from '~/content/alternatives'
import { ROW_FLAGS } from '~/utils/comparison'

// Spanish only, like /verifactu-clinicas: "alternativa a PracticeHub" is a
// search a Spanish clinic makes, and the copy leans on VeriFactu and on
// Spanish competitors that mean nothing in /en or /fr.
definePageMeta({
  i18n: { locales: ['es'] },
})

const route = useRoute()
const alternative = findAlternative(String(route.params.competidor))
if (!alternative) {
  throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })
}

const t = useT()
const { tm, rt } = useI18n()

// usePageSeo takes a string per locale; this page only ever renders in one.
const onlyEs = (text: string): LocalisedText => ({ es: text, en: text, fr: text })

// QuiroFlow against this one competitor, from the same flags as the homepage
// table. The last row (published price) is left out: it is not a feature.
const rows = computed(() =>
  (tm('comparison.rows') as unknown[]).slice(0, -1).map((label, i) => ({
    feature: rt(label as string),
    quiroflow: ROW_FLAGS[i].quiroflow,
    competitor: ROW_FLAGS[i][alternative.competitor],
  })),
)

usePageSeo({
  titles: onlyEs(alternative.title),
  descriptions: onlyEs(alternative.description),
  image: '/og-image.png',
  imageAlts: onlyEs(`QuiroFlow, alternativa a ${alternative.name}`),
  jsonLdKey: 'ld-json-alternativa',
  jsonLd: ({ url, description }) => ({
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        url,
        name: alternative.title,
        description,
        inLanguage: 'es-ES',
        publisher: { '@id': 'https://quiroflow.com/#organization' },
      },
      faqJsonLd(alternative.faq),
    ],
  }),
})
</script>

<template>
  <div>
    <VerticalHero
      :badge="`Alternativa a ${alternative.name}`"
      :title="alternative.heading"
      :description="alternative.intro"
      :cta-primary="t('hero.ctaPrimary')"
      :cta-secondary="t('hero.ctaSecondary')"
      see-features="Ver la comparativa"
    />

    <section class="py-20">
      <div class="mx-auto grid max-w-[1120px] grid-cols-1 gap-5 px-8 md:grid-cols-2">
        <div class="flex flex-col gap-2.5 rounded-card border border-line bg-white p-7">
          <h2 class="text-[17px] font-semibold tracking-tightTitle text-ink-900">Lo que {{ alternative.name }} hace bien</h2>
          <p class="text-[14.5px] leading-[1.7] text-ink-muted">{{ alternative.strengths }}</p>
        </div>
        <div class="flex flex-col gap-2.5 rounded-card border border-line bg-white p-7">
          <h2 class="text-[17px] font-semibold tracking-tightTitle text-ink-900">Cuándo puede seguir encajándote</h2>
          <p class="text-[14.5px] leading-[1.7] text-ink-muted">{{ alternative.stillFits }}</p>
        </div>
      </div>
    </section>

    <section id="funcionalidades" class="border-y border-line bg-surface-page py-20">
      <div class="mx-auto flex max-w-[860px] flex-col gap-8 px-8">
        <div class="flex flex-col gap-3 text-center">
          <h2 class="text-[30px] tracking-tightTitle text-ink-900">QuiroFlow frente a {{ alternative.name }}</h2>
          <p class="text-[15.5px] leading-[1.6] text-ink-muted">{{ t('comparison.subtitle') }}</p>
        </div>
        <div class="overflow-hidden rounded-card border border-line bg-white shadow-card">
          <table class="w-full border-collapse text-left">
            <thead>
              <tr class="border-b border-line">
                <th scope="col" class="px-5 py-4 text-[13px] font-semibold text-ink-faint">{{ t('comparison.featureHeader') }}</th>
                <th scope="col" class="w-[96px] bg-brand-tint px-3 py-4 text-center text-[13.5px] font-bold text-brand-text">QuiroFlow</th>
                <th scope="col" class="w-[110px] px-3 py-4 text-center text-[13.5px] font-semibold text-ink-600">{{ alternative.name }}</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="row in rows" :key="row.feature" class="border-b border-line/70 last:border-0">
                <td class="px-5 py-3.5 text-[14px] text-ink-700">{{ row.feature }}</td>
                <td v-for="(on, i) in [row.quiroflow, row.competitor]" :key="i" class="px-3 py-3.5 text-center" :class="i === 0 ? 'bg-brand-tint/40' : ''">
                  <template v-if="on">
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" class="mx-auto" aria-hidden="true">
                      <circle cx="9" cy="9" r="9" :fill="i === 0 ? '#E9F6EF' : '#F1F2F5'" />
                      <path d="M5.5 9.3l2.2 2.2 4.8-5" :stroke="i === 0 ? '#157F52' : '#5B6072'" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" fill="none" />
                    </svg>
                    <span class="sr-only">{{ t('comparison.yes') }}</span>
                  </template>
                  <template v-else>
                    <span class="text-ink-faint" aria-hidden="true">—</span>
                    <span class="sr-only">{{ t('comparison.notShown') }}</span>
                  </template>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <p class="text-[12.5px] leading-[1.6] text-ink-faint">{{ t('comparison.footnote') }}</p>
      </div>
    </section>

    <section class="py-20">
      <div class="mx-auto flex max-w-[760px] flex-col gap-3 px-8">
        <h2 class="text-[30px] tracking-tightTitle text-ink-900">Cómo es el cambio desde {{ alternative.name }}</h2>
        <p class="text-[15.5px] leading-[1.7] text-ink-muted">{{ alternative.migration }}</p>
      </div>
    </section>

    <FaqSection :title="`Preguntas frecuentes sobre ${alternative.name} y QuiroFlow`" :items="alternative.faq" />

    <section class="border-t border-line py-24">
      <div class="mx-auto flex max-w-[640px] flex-col items-center gap-4 px-8 text-center">
        <h2 class="text-[30px] tracking-tightTitle text-ink-900">Pruébalo con los datos de tu clínica</h2>
        <p class="text-[15.5px] leading-[1.6] text-ink-muted">
          30 días de prueba sin tarjeta, con la migración incluida, o cuéntanos cómo trabajáis con {{ alternative.name }} y te enseñamos el cambio.
        </p>
        <div class="mt-2 flex flex-wrap items-center justify-center gap-3">
          <a
            :href="SIGNUP_URL"
            target="_blank"
            rel="noopener"
            class="inline-flex items-center justify-center rounded-ctl bg-brand px-[22px] py-3 text-[14.5px] font-semibold text-white hover:bg-brand-hover"
          >
            {{ t('hero.ctaPrimary') }}
          </a>
          <a
            :href="BOOKING_URL"
            target="_blank"
            rel="noopener"
            class="inline-flex items-center justify-center rounded-ctl border border-line-control bg-white px-[22px] py-3 text-[14.5px] font-semibold text-ink-700 hover:border-ink-faint"
          >
            {{ t('hero.ctaSecondary') }}
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

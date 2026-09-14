<script setup lang="ts">
import { BOOKING_URL } from '~/utils/links'
import type { LocalisedText } from '~/composables/usePageSeo'

// Localised slugs, same reasoning as the legal and vertical pages.
definePageMeta({
  i18n: { paths: { en: '/about', fr: '/a-propos' } },
})

const t = useT()
const { tm, rt } = useI18n()

// Every fact on this page comes from something already published by this
// company: the LSSI-CE identity block in aviso-legal.vue (COLUMNAQUIRO S.L.,
// NIF, Valencia address), the testimonial (Léa, Columna Quiro), the booking
// link (a 30-minute slot with Raúl) and the contact email. Nothing here is
// invented -- but the roles and the story should still be read over by a
// human before this ships, since they are the one part not literally quoted
// from an existing document.
const titles: LocalisedText = {
  es: 'Quiénes somos | QuiroFlow',
  en: 'About us | QuiroFlow',
  fr: 'Qui sommes-nous | QuiroFlow',
}
const descriptions: LocalisedText = {
  es: 'QuiroFlow lo construye y lo mantiene COLUMNAQUIRO S.L., la sociedad detrás de Columna Quiro, una clínica quiropráctica de Valencia. Quién hay detrás, desde dónde damos soporte y por qué existe el producto.',
  en: 'QuiroFlow is built and maintained by COLUMNAQUIRO S.L., the company behind Columna Quiro, a chiropractic clinic in Valencia. Who is behind it, where support comes from, and why the product exists.',
  fr: "QuiroFlow est développé et maintenu par COLUMNAQUIRO S.L., la société derrière Columna Quiro, un cabinet de chiropraxie à Valence. Qui est derrière, d'où vient le support et pourquoi le produit existe.",
}
const imageAlts: LocalisedText = {
  es: 'QuiroFlow — quiénes somos',
  en: 'QuiroFlow — about us',
  fr: 'QuiroFlow — qui sommes-nous',
}

const CONTACT_EMAIL = 'hola@quiroflow.com'

const paragraphs = computed(() => (tm('about.story.paragraphs') as string[]).map(p => rt(p)))
const people = computed(() =>
  (tm('about.people.items') as { name: string; role: string; body: string }[]).map(item => ({
    name: rt(item.name),
    role: rt(item.role),
    body: rt(item.body),
  })),
)
// The contact row is appended here rather than living in the dictionary:
// vue-i18n's message compiler reserves `@` for linked-message syntax, so a
// message value containing a literal email address fails to compile with
// "Invalid linked format" -- the same trap TheFooter.vue documents. Only the
// row's label is translatable; the address itself is the same in every locale.
const facts = computed(() => [
  ...(tm('about.facts.items') as { label: string; value: string }[]).map(item => ({
    label: rt(item.label),
    value: rt(item.value),
  })),
  { label: t('about.facts.contactLabel'), value: CONTACT_EMAIL },
])

usePageSeo({
  titles,
  descriptions,
  image: '/og-quienes-somos.png',
  imageAlts,
  jsonLdKey: 'ld-json-about',
  // AboutPage pointing at the same Organization node the homepage defines,
  // rather than a second copy of it -- one entity, described once.
  jsonLd: ({ url }) => ({
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'AboutPage',
        url,
        mainEntity: { '@id': 'https://quiroflow.com/#organization' },
      },
      {
        '@type': 'Organization',
        '@id': 'https://quiroflow.com/#organization',
        name: 'QuiroFlow',
        legalName: 'COLUMNAQUIRO S.L.',
        vatID: 'B16365504',
        url: 'https://quiroflow.com/',
        logo: 'https://quiroflow.com/icon-512.png',
        email: CONTACT_EMAIL,
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Calle dels Vivons, 29',
          postalCode: '46006',
          addressLocality: 'Valencia',
          addressCountry: 'ES',
        },
      },
    ],
  }),
})
</script>

<template>
  <div>
    <section class="border-b border-line bg-surface-page py-20">
      <div class="mx-auto flex max-w-[760px] flex-col items-center gap-5 px-8 text-center">
        <span class="w-fit rounded-full border border-brand-tintBorder bg-brand-tint px-3 py-[5px] text-[13px] font-semibold text-brand-text">
          {{ t('about.badge') }}
        </span>
        <h1 class="text-[36px] leading-[1.15] tracking-tightTitle text-ink-900 md:text-[42px]">
          {{ t('about.title') }}
        </h1>
        <p class="text-[16.5px] leading-[1.6] text-ink-muted">
          {{ t('about.description') }}
        </p>
      </div>
    </section>

    <section class="py-20">
      <div class="mx-auto flex max-w-[720px] flex-col gap-5 px-8">
        <h2 class="text-[28px] tracking-tightTitle text-ink-900">{{ t('about.story.title') }}</h2>
        <p v-for="paragraph in paragraphs" :key="paragraph" class="text-[15.5px] leading-[1.75] text-ink-muted">
          {{ paragraph }}
        </p>
      </div>
    </section>

    <section class="border-y border-line bg-surface-page py-20">
      <div class="mx-auto flex max-w-[1120px] flex-col gap-9 px-8">
        <div class="flex max-w-[640px] flex-col gap-3">
          <h2 class="text-[28px] tracking-tightTitle text-ink-900">{{ t('about.people.title') }}</h2>
          <p class="text-[15.5px] leading-[1.6] text-ink-muted">{{ t('about.people.description') }}</p>
        </div>
        <div class="grid grid-cols-1 gap-5 md:grid-cols-2">
          <div
            v-for="person in people"
            :key="person.name"
            class="flex flex-col gap-2 rounded-card border border-line bg-white p-7"
          >
            <h3 class="text-[18px] font-semibold tracking-tightTitle text-ink-900">{{ person.name }}</h3>
            <p class="text-[13.5px] font-semibold text-brand-text">{{ person.role }}</p>
            <p class="mt-1 text-[14.5px] leading-[1.7] text-ink-muted">{{ person.body }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="py-20">
      <div class="mx-auto flex max-w-[720px] flex-col gap-6 px-8">
        <h2 class="text-[28px] tracking-tightTitle text-ink-900">{{ t('about.facts.title') }}</h2>
        <dl class="flex flex-col divide-y divide-line rounded-card border border-line bg-white">
          <div v-for="fact in facts" :key="fact.label" class="flex flex-col gap-1 px-6 py-4 sm:flex-row sm:items-baseline sm:gap-6">
            <dt class="text-[13.5px] font-semibold text-ink-faint sm:w-[220px] sm:shrink-0">{{ fact.label }}</dt>
            <dd class="text-[14.5px] text-ink-700">{{ fact.value }}</dd>
          </div>
        </dl>
      </div>
    </section>

    <section class="border-t border-line py-24">
      <div class="mx-auto flex max-w-[640px] flex-col items-center gap-4 px-8 text-center">
        <h2 class="text-[30px] tracking-tightTitle text-ink-900">{{ t('about.cta.title') }}</h2>
        <p class="text-[15.5px] leading-[1.6] text-ink-muted">{{ t('about.cta.description') }}</p>
        <div class="mt-2 flex flex-wrap items-center justify-center gap-3">
          <a
            :href="BOOKING_URL"
            target="_blank"
            rel="noopener"
            class="inline-flex items-center justify-center rounded-ctl bg-brand px-[22px] py-3 text-[14.5px] font-semibold text-white hover:bg-brand-hover"
          >
            {{ t('about.cta.button') }}
          </a>
          <a
            :href="`mailto:${CONTACT_EMAIL}`"
            class="inline-flex items-center justify-center rounded-ctl border border-line-control bg-white px-[22px] py-3 text-[14.5px] font-semibold text-ink-700 hover:border-ink-faint"
          >
            {{ t('about.cta.emailButton') }}
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

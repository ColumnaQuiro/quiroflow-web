<script setup lang="ts">
import { BOOKING_URL, SIGNUP_URL } from '~/utils/links'
import type { LocalisedText } from '~/composables/usePageSeo'

// Spanish only: VERI*FACTU is a Spanish tax obligation, so an /en or /fr copy
// would be a page nobody searches for, competing with the real one for the
// same signals. Its copy lives here rather than in the dictionaries for the
// same reason -- es.ts is the type every other locale has to match, and this
// page has nothing for en.ts or fr.ts to say.
definePageMeta({
  i18n: { locales: ['es'] },
})

const t = useT()

// usePageSeo takes a string per locale; this page only ever renders in one.
const onlyEs = (text: string): LocalisedText => ({ es: text, en: text, fr: text })

// Last checked against the BOE and the Hacienda note of 5 Oct 2026. The dates
// below are the part of this page that goes stale -- when the October 2028
// delay is published (or is not), update DATES, the FAQ and UPDATED together.
const UPDATED = '30 de octubre de 2026'

const DATES = [
  {
    who: 'Sociedades (Impuesto sobre Sociedades)',
    date: '1 de enero de 2027',
    note: 'Fecha en vigor hoy, fijada por el Real Decreto-ley 15/2025.',
  },
  {
    who: 'Autónomos y profesionales (IRPF)',
    date: '1 de julio de 2027',
    note: 'Fecha en vigor hoy, fijada por el Real Decreto-ley 15/2025.',
  },
  {
    who: 'Todos (aplazamiento anunciado)',
    date: 'Octubre de 2028',
    note: 'Anunciado por Hacienda el 5 de octubre de 2026 para hacerlo coincidir con la factura electrónica obligatoria. Todavía no está publicado en el BOE: hasta entonces mandan las dos fechas de arriba.',
  },
]

const STEPS = [
  {
    title: 'Cada factura sale con su QR',
    body: 'Desde el día en que pasas a producción, el código QR tributario y la leyenda VERI*FACTU se imprimen en el PDF de la factura que recibe el paciente, para que pueda comprobarla en la sede de la AEAT.',
  },
  {
    title: 'Encadenada a la anterior',
    body: 'Cada registro lleva la huella de la factura anterior, de modo que no se puede borrar ni alterar una sin que se note. Cada sede tiene su propia serie.',
  },
  {
    title: 'Enviada a la AEAT al minuto',
    body: 'El registro se envía solo en cuanto emites la factura. Si la AEAT no responde, se reintenta, y ves en los ajustes cuántos registros hay enviados, en espera o con error.',
  },
  {
    title: 'Rectificativas sin pensar',
    body: 'Al devolver un pago se genera la factura rectificativa correspondiente, con su propio registro y su envío, sin rehacer nada a mano.',
  },
  {
    title: 'Tu certificado o el nuestro',
    body: 'Envía con el certificado electrónico de tu clínica o autoriza a QuiroFlow para que envíe por ti mediante apoderamiento o colaboración social, si no quieres gestionar certificados.',
  },
  {
    title: 'Tú eliges el día',
    body: 'Prueba hoy en modo de pruebas, sin coste y sin enviar nada real. Cuando decidas el día de paso a producción, desde la medianoche de ese día cada factura va al servicio real de la AEAT.',
  },
]

const faqItems = [
  {
    q: '¿Qué es VERI*FACTU?',
    a: 'Es el sistema de la Agencia Tributaria que obliga a que los programas de facturación generen un registro de cada factura, encadenado con el anterior y con un código QR, para que no se puedan alterar ni borrar. Lo regula el Real Decreto 1007/2023 (Reglamento de requisitos de los sistemas informáticos de facturación) y desarrolla la Ley Antifraude 11/2021. En la modalidad VERI*FACTU, además, cada registro se envía a la AEAT en el momento.',
  },
  {
    q: '¿Cuándo es obligatorio VERI*FACTU para una clínica?',
    a: `A ${UPDATED}, la ley en vigor (Real Decreto-ley 15/2025) fija el 1 de enero de 2027 para las sociedades y el 1 de julio de 2027 para autónomos y profesionales. El 5 de octubre de 2026 Hacienda anunció que retrasará ambas fechas a octubre de 2028, pero ese aplazamiento todavía no está publicado en el BOE, así que hasta que lo esté conviene prepararse para 2027.`,
  },
  {
    // Not "fisioterapia o quiropráctica": chiropractic is not a regulated
    // health profession in Spain, so its sessions usually carry IVA.
    q: 'Mis sesiones están exentas de IVA. ¿Me afecta igual?',
    a: 'La exención de IVA no te libra de emitir factura: los servicios sanitarios exentos, como los de fisioterapia, siguen facturándose. VERI*FACTU afecta al programa con el que emites esas facturas, no al IVA que llevan. Si facturas con un programa informático, ese programa tendrá que cumplir. Cada caso tiene matices (régimen, territorio, SII), así que confírmalo con tu asesor.',
  },
  {
    q: '¿Qué pasa si sigo facturando con un programa que no cumple?',
    a: 'La Ley General Tributaria (artículo 201 bis) sanciona con hasta 50.000 € por ejercicio la tenencia de sistemas de facturación que no cumplan los requisitos, además de las sanciones para quien los fabrica o comercializa. Por eso el cambio de programa conviene hacerlo con margen, no la semana antes.',
  },
  {
    q: '¿Afecta en el País Vasco y Navarra?',
    a: 'No. Las haciendas forales tienen sus propios sistemas (TicketBAI en el País Vasco y su equivalente en Navarra). VERI*FACTU tampoco aplica a quien ya lleva sus libros por el Suministro Inmediato de Información (SII).',
  },
  {
    q: '¿Cuánto cuesta VERI*FACTU en QuiroFlow?',
    a: 'El modo de pruebas es gratis. Desde el día en que pasas a producción y empiezas a enviar a la AEAT de verdad, cuesta 7,50 € + IVA al mes por sede, que se añade a tu suscripción. Antes de ese día no pagas nada por VERI*FACTU.',
  },
  {
    q: '¿Necesito un certificado digital?',
    a: 'No necesariamente. Puedes enviar con el certificado de tu clínica o autorizar a QuiroFlow para que envíe por ti mediante apoderamiento o colaboración social. QuiroFlow comprueba que el certificado pertenece a tu empresa, que no ha caducado y que la AEAT lo acepta antes de usarlo.',
  },
  {
    q: '¿Puedo cambiar a QuiroFlow ahora y facturar con VERI*FACTU desde el primer día?',
    a: 'Sí. Migramos tus pacientes, citas y bonos (la migración está incluida) y puedes empezar en modo de pruebas desde hoy. El día que elijas pasar a producción, todas las facturas siguientes salen ya con VERI*FACTU, sin cambiar de programa en 2027.',
  },
]

const title = 'VERI*FACTU para clínicas: fechas, obligaciones y software | QuiroFlow'
const description =
  'Qué es VERI*FACTU, cuándo es obligatorio para clínicas de fisioterapia, quiropráctica, osteopatía y podología (fechas en vigor y aplazamiento anunciado a 2028) y cómo facturar con QR y envío automático a la AEAT.'

usePageSeo({
  titles: onlyEs(title),
  descriptions: onlyEs(description),
  image: '/og-image.png',
  imageAlts: onlyEs('QuiroFlow — facturación VERI*FACTU para clínicas'),
  jsonLdKey: 'ld-json-verifactu',
  jsonLd: ({ url }) => ({
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        url,
        name: title,
        description,
        inLanguage: 'es-ES',
        dateModified: '2026-10-30',
        publisher: { '@id': 'https://quiroflow.com/#organization' },
      },
      {
        '@type': 'SoftwareApplication',
        name: 'QuiroFlow',
        url: 'https://quiroflow.com/',
        applicationCategory: 'BusinessApplication',
        operatingSystem: 'Web, iOS, Android',
        featureList: STEPS.map(step => step.title),
        publisher: { '@id': 'https://quiroflow.com/#organization' },
      },
      faqJsonLd(faqItems),
    ],
  }),
})
</script>

<template>
  <div>
    <VerticalHero
      badge="VERI*FACTU"
      title="VERI*FACTU para clínicas: qué cambia y cuándo"
      description="Una clínica de fisioterapia, quiropráctica, osteopatía o podología emite factura por sus sesiones, lleven IVA o estén exentas, y el programa con el que la emite tendrá que cumplir VERI*FACTU. Aquí tienes las fechas como están hoy, qué tienes que hacer y cómo lo resuelve QuiroFlow."
      :cta-primary="t('hero.ctaPrimary')"
      :cta-secondary="t('hero.ctaSecondary')"
      see-features="Cómo funciona"
    />

    <section class="py-20">
      <div class="mx-auto flex max-w-[860px] flex-col gap-8 px-8">
        <div class="flex flex-col gap-3">
          <h2 class="text-[30px] tracking-tightTitle text-ink-900">Fechas de VERI*FACTU</h2>
          <p class="text-[15.5px] leading-[1.6] text-ink-muted">
            Actualizado el {{ UPDATED }}. Las fechas han cambiado dos veces; las mantenemos al día en esta página.
          </p>
        </div>
        <div class="overflow-hidden rounded-card border border-line">
          <table class="w-full text-left text-[14.5px]">
            <thead class="bg-surface-page text-[13px] font-semibold text-ink-600">
              <tr>
                <th scope="col" class="px-5 py-3">Quién</th>
                <th scope="col" class="px-5 py-3">Desde</th>
                <th scope="col" class="hidden px-5 py-3 md:table-cell">Estado</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="row in DATES" :key="row.who" class="border-t border-line align-top">
                <td class="px-5 py-4 font-semibold text-ink-900">
                  {{ row.who }}
                  <p class="mt-1.5 text-[13.5px] font-normal leading-[1.6] text-ink-muted md:hidden">{{ row.note }}</p>
                </td>
                <td class="whitespace-nowrap px-5 py-4 text-ink-900">{{ row.date }}</td>
                <td class="hidden px-5 py-4 leading-[1.6] text-ink-muted md:table-cell">{{ row.note }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>

    <section id="funcionalidades" class="border-y border-line bg-surface-page py-20">
      <div class="mx-auto flex max-w-[1120px] flex-col gap-10 px-8">
        <div class="mx-auto flex max-w-[640px] flex-col gap-3 text-center">
          <h2 class="text-[30px] tracking-tightTitle text-ink-900">Cómo factura QuiroFlow con VERI*FACTU</h2>
          <p class="text-[15.5px] leading-[1.6] text-ink-muted">
            La agenda, los bonos y los cobros ya viven en QuiroFlow, así que la factura sale de la misma ficha del paciente y el registro va con ella. No hay un segundo programa que sincronizar.
          </p>
        </div>
        <div class="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          <div
            v-for="step in STEPS"
            :key="step.title"
            class="flex flex-col gap-2.5 rounded-card border border-line bg-white p-7"
          >
            <h3 class="text-[17px] font-semibold tracking-tightTitle text-ink-900">{{ step.title }}</h3>
            <p class="text-[14.5px] leading-[1.7] text-ink-muted">{{ step.body }}</p>
          </div>
        </div>
      </div>
    </section>

    <FeatureSection
      eyebrow="Para el paciente"
      title="Una factura que se puede comprobar"
      description="El paciente recibe la factura con su QR y puede verificarla en la sede de la AEAT. Tú ves en los ajustes de VERI*FACTU cuántos registros se han enviado, cuántos esperan y la última respuesta de la AEAT, sin tener que entrar en su sede a mirarlo."
    >
      <template #visual>
        <MockupsVerifactuMockup />
      </template>
    </FeatureSection>

    <MigrationSection />

    <FaqSection title="Preguntas frecuentes sobre VERI*FACTU" :items="faqItems" />

    <section class="border-t border-line py-24">
      <div class="mx-auto flex max-w-[640px] flex-col items-center gap-4 px-8 text-center">
        <h2 class="text-[30px] tracking-tightTitle text-ink-900">Llega a 2027 sin cambiar de programa a última hora</h2>
        <p class="text-[15.5px] leading-[1.6] text-ink-muted">
          Prueba QuiroFlow 30 días sin tarjeta, con VERI*FACTU en modo de pruebas desde el primer día, o cuéntanos cómo facturáis hoy y te enseñamos el paso.
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

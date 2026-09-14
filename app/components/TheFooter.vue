<script setup lang="ts">
const t = useT()
const localePath = useLocalePath()
const { reopen } = useConsent()

// Same reasoning as TheHeader.vue -- these have to resolve through the
// current locale or an /en/* visitor gets bounced back to Spanish content.
const homeAnchor = (hash: string) => `${localePath('index')}#${hash}`

// Not in the i18n dictionary: vue-i18n's message compiler reserves `@` for
// linked-message syntax (`@:key`), so a message value containing a literal
// email address fails to compile ("Invalid linked format") -- and an email
// isn't translatable content anyway, same language in both locales.
const CONTACT_EMAIL = 'hola@quiroflow.com'
</script>

<template>
  <footer id="contacto" class="border-t border-line py-14">
    <div class="mx-auto flex max-w-[1120px] flex-col gap-10 px-8">
      <!-- Three columns rather than one flat row. The site grew from two
           pages to six, and the vertical pages in particular need a
           permanent home here now that they are out of the header nav. -->
      <div class="flex flex-col gap-10 md:flex-row md:justify-between">
        <div class="flex flex-col gap-3">
          <div class="flex items-center gap-2.5">
            <LogoMark :size="22" />
            <span class="text-[15px] font-bold text-ink-900">QuiroFlow</span>
          </div>
          <a :href="`mailto:${CONTACT_EMAIL}`" class="text-[13.5px] text-ink-muted hover:text-ink-900">{{ CONTACT_EMAIL }}</a>
        </div>

        <div class="grid grid-cols-2 gap-x-12 gap-y-8 sm:grid-cols-3">
          <nav class="flex flex-col gap-2.5">
            <p class="text-[12.5px] font-semibold uppercase tracking-wide text-ink-faint">{{ t('footer.productTitle') }}</p>
            <a :href="homeAnchor('funcionalidades')" class="text-[13.5px] text-ink-muted hover:text-ink-900">{{ t('footer.features') }}</a>
            <a :href="homeAnchor('precios')" class="text-[13.5px] text-ink-muted hover:text-ink-900">{{ t('footer.pricing') }}</a>
            <a :href="homeAnchor('comparativa')" class="text-[13.5px] text-ink-muted hover:text-ink-900">{{ t('footer.comparison') }}</a>
            <a :href="homeAnchor('migracion')" class="text-[13.5px] text-ink-muted hover:text-ink-900">{{ t('footer.migrate') }}</a>
          </nav>

          <nav class="flex flex-col gap-2.5">
            <p class="text-[12.5px] font-semibold uppercase tracking-wide text-ink-faint">{{ t('footer.sectorsTitle') }}</p>
            <NuxtLink :to="localePath('software-quiropractica')" class="text-[13.5px] text-ink-muted hover:text-ink-900">{{ t('footer.chiro') }}</NuxtLink>
            <NuxtLink :to="localePath('software-fisioterapia')" class="text-[13.5px] text-ink-muted hover:text-ink-900">{{ t('footer.physio') }}</NuxtLink>
          </nav>

          <nav class="flex flex-col gap-2.5">
            <p class="text-[12.5px] font-semibold uppercase tracking-wide text-ink-faint">{{ t('footer.companyTitle') }}</p>
            <NuxtLink :to="localePath('quienes-somos')" class="text-[13.5px] text-ink-muted hover:text-ink-900">{{ t('footer.about') }}</NuxtLink>
            <NuxtLink :to="localePath('recursos')" class="text-[13.5px] text-ink-muted hover:text-ink-900">{{ t('footer.resources') }}</NuxtLink>
          </nav>
        </div>
      </div>

      <div class="flex flex-wrap items-center justify-between gap-3 border-t border-line-control/60 pt-6">
        <p class="text-[12.5px] text-ink-faint">{{ t('footer.copyright') }}</p>
        <div class="flex gap-[18px]">
          <NuxtLink :to="localePath('politica-de-privacidad')" class="text-[12.5px] text-ink-faint hover:text-ink-600">{{ t('footer.privacy') }}</NuxtLink>
          <NuxtLink :to="localePath('aviso-legal')" class="text-[12.5px] text-ink-faint hover:text-ink-600">{{ t('footer.terms') }}</NuxtLink>
          <!-- Consent has to be as easy to withdraw as it was to give, so the
               banner stays reachable after the first choice. -->
          <button type="button" class="text-[12.5px] text-ink-faint hover:text-ink-600" @click="reopen">
            {{ t('footer.cookies') }}
          </button>
        </div>
      </div>
    </div>
  </footer>
</template>

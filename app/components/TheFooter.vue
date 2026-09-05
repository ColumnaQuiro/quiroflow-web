<script setup lang="ts">
const t = useT()
const localePath = useLocalePath()

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
    <div class="mx-auto flex max-w-[1120px] flex-col gap-8 px-8">
      <div class="flex flex-wrap items-center justify-between gap-8">
        <div class="flex items-center gap-2.5">
          <LogoMark :size="22" />
          <span class="text-[15px] font-bold text-ink-900">QuiroFlow</span>
        </div>
        <nav class="flex flex-wrap gap-7">
          <a :href="homeAnchor('funcionalidades')" class="text-[13.5px] text-ink-muted hover:text-ink-900">{{ t('footer.features') }}</a>
          <a :href="homeAnchor('precios')" class="text-[13.5px] text-ink-muted hover:text-ink-900">{{ t('footer.pricing') }}</a>
          <a :href="homeAnchor('practicehub')" class="text-[13.5px] text-ink-muted hover:text-ink-900">{{ t('footer.migrate') }}</a>
          <NuxtLink :to="localePath('software-fisioterapia')" class="text-[13.5px] text-ink-muted hover:text-ink-900">{{ t('footer.physio') }}</NuxtLink>
          <a :href="`mailto:${CONTACT_EMAIL}`" class="text-[13.5px] text-ink-muted hover:text-ink-900">{{ CONTACT_EMAIL }}</a>
        </nav>
      </div>
      <div class="flex flex-wrap items-center justify-between gap-3 border-t border-line-control/60 pt-6">
        <p class="text-[12.5px] text-ink-faint">{{ t('footer.copyright') }}</p>
        <div class="flex gap-[18px]">
          <NuxtLink :to="localePath('politica-de-privacidad')" class="text-[12.5px] text-ink-faint hover:text-ink-600">{{ t('footer.privacy') }}</NuxtLink>
          <NuxtLink :to="localePath('aviso-legal')" class="text-[12.5px] text-ink-faint hover:text-ink-600">{{ t('footer.terms') }}</NuxtLink>
        </div>
      </div>
    </div>
  </footer>
</template>

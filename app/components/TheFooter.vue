<script setup lang="ts">
const t = useT()
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
          <a href="/#funcionalidades" class="text-[13.5px] text-ink-muted hover:text-ink-900">{{ t('footer.features') }}</a>
          <a href="/#precios" class="text-[13.5px] text-ink-muted hover:text-ink-900">{{ t('footer.pricing') }}</a>
          <a href="/#practicehub" class="text-[13.5px] text-ink-muted hover:text-ink-900">{{ t('footer.migrate') }}</a>
          <a :href="`mailto:${t('footer.contactEmail')}`" class="text-[13.5px] text-ink-muted hover:text-ink-900">{{ t('footer.contactEmail') }}</a>
        </nav>
      </div>
      <div class="flex flex-wrap items-center justify-between gap-3 border-t border-line-control/60 pt-6">
        <p class="text-[12.5px] text-ink-faint">{{ t('footer.copyright') }}</p>
        <div class="flex gap-[18px]">
          <NuxtLink to="/politica-de-privacidad" class="text-[12.5px] text-ink-faint hover:text-ink-600">{{ t('footer.privacy') }}</NuxtLink>
          <NuxtLink to="/aviso-legal" class="text-[12.5px] text-ink-faint hover:text-ink-600">{{ t('footer.terms') }}</NuxtLink>
        </div>
      </div>
    </div>
  </footer>
</template>

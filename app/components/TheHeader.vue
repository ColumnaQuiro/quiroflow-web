<script setup lang="ts">
import { BOOKING_URL } from '~/utils/links'
</script>

<template>
  <header class="sticky top-0 z-20 border-b border-line bg-white/90 backdrop-blur">
    <div class="mx-auto flex h-[72px] max-w-[1120px] items-center justify-between px-8">
      <div class="flex items-center gap-2.5">
        <LogoMark :size="26" />
        <span class="text-[17px] font-bold tracking-tightTitle text-ink-900">QuiroFlow</span>
      </div>
      <nav class="hidden items-center gap-8 md:flex">
        <a href="#funcionalidades" class="text-sm font-medium text-ink-600 hover:text-ink-900">Funcionalidades</a>
        <a href="#precios" class="text-sm font-medium text-ink-600 hover:text-ink-900">Precios</a>
        <a href="#comparativa" class="text-sm font-medium text-ink-600 hover:text-ink-900">Comparativa</a>
        <a href="#practicehub" class="text-sm font-medium text-ink-600 hover:text-ink-900">Cambiar desde PracticeHub</a>
        <a href="#contacto" class="text-sm font-medium text-ink-600 hover:text-ink-900">Contacto</a>
      </nav>
      <a
        :href="BOOKING_URL"
        target="_blank"
        rel="noopener"
        class="inline-flex items-center justify-center rounded-ctl bg-brand px-[22px] py-3 text-[14.5px] font-semibold text-white hover:bg-brand-hover"
      >
        Reservar demo
      </a>
    </div>
  </header>
</template>

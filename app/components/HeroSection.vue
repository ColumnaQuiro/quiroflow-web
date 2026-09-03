<script setup lang="ts">
import { BOOKING_URL } from '~/utils/links'
</script>

<template>
  <section class="bg-gradient-to-b from-[#F7F8FF] to-white pb-16 pt-[88px]">
    <div class="mx-auto grid max-w-[1120px] grid-cols-1 items-center gap-14 px-8 md:grid-cols-2">
      <div class="flex flex-col gap-[22px]">
        <span class="w-fit rounded-full border border-brand-tintBorder bg-brand-tint px-3 py-[5px] text-[13px] font-semibold text-brand-text">
          Software de gestión para clínicas quiroprácticas
        </span>
        <h1 class="text-[46px] leading-[1.12] tracking-tightTitle text-ink-900">
          Menos tiempo administrando.<br>Más tiempo ajustando.
        </h1>
        <p class="max-w-[480px] text-[17px] leading-[1.55] text-ink-muted">
          Agenda con seguimiento del flujo de tu consulta, historiales clínicos, facturación, bonos y recordatorios
          por WhatsApp — todo en una sola plataforma pensada para clínicas quiroprácticas de una o varias sedes.
        </p>
        <div class="mt-1 flex gap-3">
          <a :href="BOOKING_URL" target="_blank" rel="noopener" class="inline-flex items-center justify-center rounded-ctl bg-brand px-[26px] py-[13px] text-[15px] font-semibold text-white hover:bg-brand-hover">
            Reservar una demo
          </a>
          <a href="#funcionalidades" class="inline-flex items-center justify-center rounded-ctl border border-line-control px-[26px] py-[13px] text-[15px] font-semibold text-ink-900 hover:border-ink-faint">
            Ver funcionalidades
          </a>
        </div>
      </div>
      <MockupsCalendarMockup />
    </div>
  </section>
</template>

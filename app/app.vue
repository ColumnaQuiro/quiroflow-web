<template>
  <div class="bg-white">
    <TheHeader />

    <HeroSection />

    <PracticeHubSection />

    <section id="funcionalidades" class="pt-24">
      <div class="mx-auto max-w-[1120px] px-8 text-center">
        <span class="w-fit rounded-full border border-brand-tintBorder bg-brand-tint px-3 py-[5px] text-[13px] font-semibold text-brand-text">
          Funcionalidades
        </span>
        <h2 class="mt-4 text-[34px] tracking-tightTitle text-ink-900">Todo lo que necesita tu clínica, en un solo lugar</h2>
      </div>
    </section>

    <FeatureSection
      eyebrow="Agenda"
      title="Asignación automática de salas"
      description="QuiroFlow asigna cada cita a una sala libre automáticamente, para que nunca tengas que comprobar a mano si hay un hueco. Vista por día, semana laboral o semana completa, con seguimiento de flujo por consulta (llegó, en sesión, en caja)."
    >
      <template #visual>
        <div class="rounded-card border border-line bg-white p-[22px]">
          <p class="mb-3 text-xs font-semibold text-ink-faint">SALAS</p>
          <div class="grid grid-cols-2 gap-3">
            <div class="rounded-ctl border border-line-control/60 p-2.5">
              <p class="mb-2 text-[11px] font-semibold text-ink-faint">Sala 1</p>
              <div class="mb-1.5 rounded-[5px] border-l-[3px] border-brand bg-brand-tint px-2 py-1.5 text-[11.5px] font-semibold text-brand-text">09:00 Ana</div>
              <div class="rounded-[5px] border-l-[3px] border-brand bg-brand-tint px-2 py-1.5 text-[11.5px] font-semibold text-brand-text">10:30 Diego</div>
            </div>
            <div class="rounded-ctl border border-line-control/60 p-2.5">
              <p class="mb-2 text-[11px] font-semibold text-ink-faint">Sala 2</p>
              <div class="rounded-[5px] border-l-[3px] border-[#1D8A5B] bg-success-bg px-2 py-1.5 text-[11.5px] font-semibold text-success-text">09:15 Elena</div>
            </div>
          </div>
        </div>
      </template>
    </FeatureSection>

    <FeatureSection
      reverse
      eyebrow="WhatsApp integrado"
      title="Recordatorios y recalls por el canal que tus pacientes ya usan"
      description="Confirmaciones de cita, recordatorios automáticos y recalls para pacientes inactivos, enviados directamente por WhatsApp — sin depender de que abran un email."
    >
      <template #visual>
        <MockupsWhatsappMockup />
      </template>
    </FeatureSection>

    <FeatureSection
      eyebrow="Reserva online"
      title="Un widget de reserva en tu propio subdominio"
      description="Cada clínica recibe su propia página pública de reservas, con tu marca y horarios reales. Los pacientes reservan cita sin llamar, y la cita entra directamente en tu agenda."
    >
      <template #visual>
        <MockupsBookingWidgetMockup />
      </template>
    </FeatureSection>

    <FeatureSection
      reverse
      eyebrow="Facturación y bonos"
      title="Bonos y membresías con cobro automático"
      description="Facturas al momento, bonos de sesiones y membresías con cobro recurrente automatizado vía Stripe. Sin perseguir pagos manualmente cada mes."
    >
      <template #visual>
        <MockupsInvoiceMockup />
      </template>
    </FeatureSection>

    <FeatureSection
      eyebrow="Docs"
      title="Formularios sin papel"
      description="Crea tus propios formularios de intake y consentimiento con un generador simple de arrastrar y soltar. El paciente los rellena antes de la cita, desde el móvil."
    >
      <template #visual>
        <MockupsFormBuilderMockup />
      </template>
    </FeatureSection>

    <FeatureSection
      reverse
      eyebrow="Informes"
      title="Tu clínica, en números claros"
      description="Ocupación, ingresos y estadísticas por profesional, actualizados en tiempo real — sin exportar nada a una hoja de cálculo."
    >
      <template #visual>
        <MockupsReportsMockup />
      </template>
    </FeatureSection>

    <TestimonialSection />

    <PricingSection />

    <FinalCta />

    <TheFooter />
  </div>
</template>

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
      eyebrow="Todo en un mismo sitio"
      title="Una sola plataforma para gestionar tu consulta"
      description="Los mensajes de tus pacientes te llegan aquí, puedes crear campañas para recuperar pacientes inactivos y ver estadísticas claras de tu consulta — sin saltar entre varias aplicaciones distintas."
    >
      <template #visual>
        <div class="rounded-card border border-line bg-white p-[22px]">
          <div class="flex flex-col gap-2.5">
            <div class="flex items-center justify-between rounded-[8px] bg-surface-page px-3.5 py-3">
              <span class="text-[13px] font-semibold text-ink-600">Bandeja de mensajes</span>
              <span class="rounded-full bg-brand px-2 py-[3px] text-[11px] font-semibold text-white">3 nuevos</span>
            </div>
            <div class="flex items-center justify-between rounded-[8px] bg-surface-page px-3.5 py-3">
              <span class="text-[13px] font-semibold text-ink-600">Campaña: recall pacientes inactivos</span>
              <span class="rounded-full bg-success-bg px-2 py-[3px] text-[11px] font-semibold text-success-text">Activa</span>
            </div>
            <div class="flex items-center justify-between rounded-[8px] bg-surface-page px-3.5 py-3">
              <span class="text-[13px] font-semibold text-ink-600">Ocupación de la consulta</span>
              <span class="text-[13px] font-bold text-ink-900">82%</span>
            </div>
          </div>
        </div>
      </template>
    </FeatureSection>

    <FeatureSection
      reverse
      eyebrow="Agenda"
      title="Asignación automática de sala o camilla"
      description="QuiroFlow asigna cada cita a una sala o camilla libre automáticamente, para que nunca tengas que comprobar a mano si hay un hueco. Vista por día, semana laboral o semana completa, con seguimiento de flujo por consulta (llegó, en sesión, en caja)."
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
      eyebrow="WhatsApp integrado"
      title="Recordatorios y recalls por el canal que tus pacientes ya usan"
      description="Activa confirmaciones de cita por WhatsApp si las necesitas, junto con recordatorios automáticos y recalls para pacientes inactivos. Además, tus pacientes pueden elegir cuántos recordatorios quieren recibir — sin depender de que abran un email."
    >
      <template #visual>
        <MockupsWhatsappMockup />
      </template>
    </FeatureSection>

    <FeatureSection
      reverse
      eyebrow="Reserva online"
      title="Un widget de reserva en tu propio subdominio"
      description="Cada clínica recibe su propia página pública de reservas, con tu marca y horarios reales. Los pacientes reservan cita sin llamar, y la cita entra directamente en tu agenda."
    >
      <template #visual>
        <MockupsBookingWidgetMockup />
      </template>
    </FeatureSection>

    <FeatureSection
      eyebrow="Facturación y bonos"
      title="Bonos y membresías con cobro automático"
      description="Facturas al momento, bonos de sesiones y membresías con cobro recurrente automatizado vía Stripe. Si quieres, activa la facturación legal y automática para tus membresías — sin perseguir pagos manualmente cada mes."
    >
      <template #visual>
        <MockupsInvoiceMockup />
      </template>
    </FeatureSection>

    <FeatureSection
      reverse
      eyebrow="Docs"
      title="Formularios sin papel"
      description="Crea tus propios formularios de intake y consentimiento con un generador simple de arrastrar y soltar. El paciente los rellena antes de la cita, desde el móvil."
    >
      <template #visual>
        <MockupsFormBuilderMockup />
      </template>
    </FeatureSection>

    <FeatureSection
      eyebrow="Informes"
      title="Tu clínica, en números claros"
      description="Ocupación, ingresos, PVA (precio medio por visita), retención, conversión, número de primeras visitas y estadísticas por profesional, actualizados en tiempo real — sin exportar nada a una hoja de cálculo. Todo lo que necesitas para tomar decisiones y crecer mejor."
    >
      <template #visual>
        <MockupsReportsMockup />
      </template>
    </FeatureSection>

    <TestimonialSection />

    <ComparisonSection />

    <PricingSection />

    <FinalCta />

    <TheFooter />
  </div>
</template>

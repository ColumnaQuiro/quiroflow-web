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
      description="Los mensajes de tus pacientes te llegan aquí, puedes convertir leads nuevos en pacientes con plantillas de mensajes automáticas (bienvenida, seguimiento, recordatorio de reserva), lanzar campañas de recall y ver estadísticas claras de tu consulta — sin saltar entre varias aplicaciones distintas."
    >
      <template #visual>
        <div class="rounded-card border border-line bg-white p-[22px]">
          <div class="flex flex-col gap-2.5">
            <div class="flex items-center justify-between rounded-[8px] bg-surface-page px-3.5 py-3">
              <span class="text-[13px] font-semibold text-ink-600">Bandeja de mensajes</span>
              <span class="rounded-full bg-brand px-2 py-[3px] text-[11px] font-semibold text-white">3 nuevos</span>
            </div>
            <div class="flex items-center justify-between rounded-[8px] bg-surface-page px-3.5 py-3">
              <span class="text-[13px] font-semibold text-ink-600">Plantilla: lead nuevo → seguimiento</span>
              <span class="rounded-full bg-success-bg px-2 py-[3px] text-[11px] font-semibold text-success-text">Activa</span>
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
      title="Sabe siempre dónde está cada paciente"
      description="QuiroFlow gestiona el flujo de tu consulta de principio a fin: sabes en todo momento quién ha llegado, quién está en sesión y quién está en caja, con asignación automática de sala o camilla de fondo para que nunca tengas que comprobarlo a mano. Vista por día, semana laboral o semana completa — y soporte para varias sedes desde la misma cuenta si tu clínica tiene más de una ubicación."
    >
      <template #visual>
        <div class="rounded-card border border-line bg-white p-[22px]">
          <p class="mb-3 text-xs font-semibold text-ink-faint">FLUJO DE CONSULTA</p>
          <div class="flex flex-col gap-1.5">
            <div class="flex items-center justify-between rounded-ctl border border-line-control/60 px-2.5 py-2">
              <span class="text-[12.5px] font-semibold text-ink-600">09:00 Ana · Sala 1</span>
              <span class="rounded-full bg-success-bg px-2 py-[3px] text-[11px] font-semibold text-success-text">En sesión</span>
            </div>
            <div class="flex items-center justify-between rounded-ctl border border-line-control/60 px-2.5 py-2">
              <span class="text-[12.5px] font-semibold text-ink-600">09:15 Elena · Sala 2</span>
              <span class="rounded-full bg-brand-tint px-2 py-[3px] text-[11px] font-semibold text-brand-text">Ha llegado</span>
            </div>
            <div class="flex items-center justify-between rounded-ctl border border-line-control/60 px-2.5 py-2">
              <span class="text-[12.5px] font-semibold text-ink-600">10:30 Diego · Sala 1</span>
              <span class="rounded-full bg-surface-page px-2 py-[3px] text-[11px] font-semibold text-ink-faint">En caja</span>
            </div>
          </div>
        </div>
      </template>
    </FeatureSection>

    <FeatureSection
      eyebrow="WhatsApp integrado"
      title="Todo tu WhatsApp, dentro de QuiroFlow"
      description="Recordatorios automáticos con botones para confirmar o cambiar la cita en un toque, recalls para pacientes inactivos, y los mensajes que te escriben tus pacientes llegan directamente a tu bandeja en QuiroFlow — sin cambiar de app ni depender de que abran un email."
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
      eyebrow="Lista de espera y continuidad"
      title="Ningún hueco vacío ni paciente perdido a medio tratamiento"
      description="Cuando se cancela una cita, QuiroFlow ofrece automáticamente ese hueco al primer paciente en lista de espera, con un enlace para reservarlo al momento. Y si un paciente con un plan de tratamiento activo se retrasa respecto a su propia cadencia, te avisa antes de que deje de venir."
    >
      <template #visual>
        <div class="rounded-card border border-line bg-white p-[22px]">
          <p class="mb-3 text-xs font-semibold text-ink-faint">CITA CANCELADA → REOFRECIDA</p>
          <div class="mb-3 flex items-center justify-between rounded-ctl border border-line-control/60 p-2.5">
            <span class="text-[12.5px] text-ink-faint line-through">Jue 10:00 · Sala 2</span>
            <span class="rounded-full bg-danger-bg px-2 py-[3px] text-[11px] font-semibold text-danger-text">Cancelada</span>
          </div>
          <div class="mb-4 flex items-center justify-between rounded-[5px] border-l-[3px] border-brand bg-brand-tint px-3 py-2">
            <span class="text-[12.5px] font-semibold text-brand-text">Ofrecida a María G.</span>
            <span class="rounded-full bg-success-bg px-2 py-[3px] text-[11px] font-semibold text-success-text">Reservada</span>
          </div>
          <p class="mb-2 text-xs font-semibold text-ink-faint">PLAN DE TRATAMIENTO RETRASADO</p>
          <div class="flex items-center justify-between rounded-ctl border border-line-control/60 p-2.5">
            <span class="text-[12.5px] text-ink-600">Carlos R. · cada 1 semana</span>
            <span class="rounded-full bg-danger-bg px-2 py-[3px] text-[11px] font-semibold text-danger-text">12 días de retraso</span>
          </div>
        </div>
      </template>
    </FeatureSection>

    <FeatureSection
      reverse
      eyebrow="Facturación y bonos"
      title="Bonos y membresías con cobro automático"
      description="Facturas al momento, bonos de sesiones y membresías con cobro recurrente automatizado vía Stripe. Si quieres, activa la facturación legal y automática para tus membresías — sin perseguir pagos manualmente cada mes."
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
      description="Ocupación, ingresos, PVA (precio medio por visita), retención, conversión, número de primeras visitas y estadísticas por profesional, al minuto y comparadas con el periodo anterior — no solo cuántas visitas tienes, sino cómo evoluciona tu negocio día a día. Sin exportar nada a una hoja de cálculo."
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

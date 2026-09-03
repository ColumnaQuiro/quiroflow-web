export const es = {
  nav: {
    features: 'Funcionalidades',
    pricing: 'Precios',
    comparison: 'Comparativa',
    migrate: 'Cambiar desde PracticeHub',
    contact: 'Contacto',
    bookDemo: 'Reservar demo',
  },

  hero: {
    badge: 'Software de gestión para clínicas quiroprácticas',
    titleLine1: 'Menos tiempo administrando.',
    titleLine2: 'Más tiempo ajustando.',
    description: 'Agenda con seguimiento del flujo de tu consulta, historiales clínicos, facturación, bonos y recordatorios por WhatsApp — todo en una sola plataforma pensada para clínicas quiroprácticas de una o varias sedes.',
    ctaPrimary: 'Reservar una demo',
    ctaSecondary: 'Ver funcionalidades',
  },

  practicehub: {
    badge: 'Migración',
    titleLine1: '¿Vienes de PracticeHub?',
    titleLine2: 'Cambia en un fin de semana.',
    description: 'Nada de exportar, revisar y volver a subir durante semanas. QuiroFlow trae un importador construido específicamente para clínicas que migran desde PracticeHub.',
    bullets: [
      'Pacientes y citas se importan desde tu propio export de PracticeHub.',
      'Pagos, notas clínicas, planes de tratamiento y formularios se sincronizan directamente por API — sin tocar un CSV.',
      'Puedes volver a ejecutar la importación cuando quieras: lo ya migrado nunca se duplica.',
      '¿Vienes de otro sistema (Cliniko, MyClinic, un Excel...)? Importa tus pacientes por CSV mapeando tus propias columnas, sin depender de un formato fijo.',
    ],
    fromLabel: 'PracticeHub',
    toLabel: 'QuiroFlow',
    items: ['Pacientes', 'Citas', 'Pagos', 'Notas clínicas', 'Planes de tratamiento', 'Formularios'],
  },

  funcionalidades: {
    badge: 'Funcionalidades',
    title: 'Todo lo que necesita tu clínica, en un solo lugar',
  },

  platform: {
    eyebrow: 'Todo en un mismo sitio',
    title: 'Una sola plataforma para gestionar tu consulta',
    description: 'Los mensajes de tus pacientes te llegan aquí, puedes convertir leads nuevos en pacientes con plantillas de mensajes automáticas (bienvenida, seguimiento, recordatorio de reserva), lanzar campañas de recall y ver estadísticas claras de tu consulta — sin saltar entre varias aplicaciones distintas.',
    visual: {
      inboxLabel: 'Bandeja de mensajes',
      inboxBadge: '3 nuevos',
      templateLabel: 'Plantilla: lead nuevo → seguimiento',
      active: 'Activa',
      campaignLabel: 'Campaña: recall pacientes inactivos',
      occupancyLabel: 'Ocupación de la consulta',
    },
  },

  agenda: {
    eyebrow: 'Agenda',
    title: 'Sabe siempre dónde está cada paciente',
    description: 'QuiroFlow gestiona el flujo de tu consulta de principio a fin: sabes en todo momento quién ha llegado, quién está en sesión y quién está en caja, con asignación automática de sala o camilla de fondo para que nunca tengas que comprobarlo a mano. Vista por día, semana laboral o semana completa — y soporte para varias sedes desde la misma cuenta si tu clínica tiene más de una ubicación.',
    visual: {
      header: 'FLUJO DE CONSULTA',
      rows: [
        { label: '09:00 Ana · Sala 1', status: 'En sesión' },
        { label: '09:15 Elena · Sala 2', status: 'Ha llegado' },
        { label: '10:30 Diego · Sala 1', status: 'En caja' },
      ],
    },
  },

  whatsapp: {
    eyebrow: 'WhatsApp integrado',
    title: 'Todo tu WhatsApp, dentro de QuiroFlow',
    description: 'Recordatorios automáticos con botones para confirmar o cambiar la cita en un toque, recalls para pacientes inactivos, y los mensajes que te escriben tus pacientes llegan directamente a tu bandeja en QuiroFlow — sin cambiar de app ni depender de que abran un email.',
  },

  booking: {
    eyebrow: 'Reserva online',
    title: 'Un widget de reserva en tu propio subdominio',
    description: 'Cada clínica recibe su propia página pública de reservas, con tu marca y horarios reales. Los pacientes reservan cita sin llamar, y la cita entra directamente en tu agenda.',
  },

  waitlist: {
    eyebrow: 'Lista de espera y continuidad',
    title: 'Ningún hueco vacío ni paciente perdido a medio tratamiento',
    description: 'Cuando se cancela una cita, QuiroFlow ofrece automáticamente ese hueco al primer paciente en lista de espera, con un enlace para reservarlo al momento. Y si un paciente con un plan de tratamiento activo se retrasa respecto a su propia cadencia, te avisa antes de que deje de venir.',
    visual: {
      canceledHeader: 'CITA CANCELADA → REOFRECIDA',
      slot: 'Jue 10:00 · Sala 2',
      canceledBadge: 'Cancelada',
      offeredTo: 'Ofrecida a María G.',
      bookedBadge: 'Reservada',
      delayedHeader: 'PLAN DE TRATAMIENTO RETRASADO',
      patient: 'Carlos R. · cada 1 semana',
      delayBadge: '12 días de retraso',
    },
  },

  billing: {
    eyebrow: 'Facturación y bonos',
    title: 'Bonos y membresías con cobro automático',
    description: 'Facturas al momento, bonos de sesiones y membresías con cobro recurrente automatizado vía Stripe. Si quieres, activa la facturación legal y automática para tus membresías — sin perseguir pagos manualmente cada mes.',
    visual: {
      header: 'FACTURA #0142',
      item1: 'Ajuste quiropráctico x1',
      item1Price: '45,00 €',
      item2: 'Bono 10 sesiones',
      item2Price: '380,00 €',
      total: 'Total',
      totalPrice: '425,00 €',
      recurring: 'Pago recurrente activo · Stripe',
      legal: 'Factura legal automática',
    },
  },

  forms: {
    eyebrow: 'Docs',
    title: 'Formularios sin papel',
    description: 'Crea tus propios formularios de intake y consentimiento con un generador simple de arrastrar y soltar. El paciente los rellena antes de la cita, desde el móvil.',
    visual: {
      header: 'FORMULARIO DE PRIMERA VISITA',
      fields: [
        { label: 'Nombre completo', type: 'Texto' },
        { label: 'Alergias conocidas', type: 'Texto largo' },
        { label: 'Consentimiento informado', type: 'Firma' },
      ],
    },
  },

  reports: {
    eyebrow: 'Informes',
    title: 'Tu clínica, en números claros',
    description: 'Ocupación, ingresos, PVA (precio medio por visita), retención, conversión, número de primeras visitas y estadísticas por profesional, al minuto y comparadas con el periodo anterior — no solo cuántas visitas tienes, sino cómo evoluciona tu negocio día a día. Sin exportar nada a una hoja de cálculo.',
    visual: {
      header: 'ESTADÍSTICAS',
      compareLabel: 'vs. mes anterior',
      stats: [
        { label: 'Ocupación', value: '82%', delta: '+4%', up: true },
        { label: 'Ingresos del mes', value: '12.480 €', delta: '+9%', up: true },
        { label: 'PVA', value: '42 €', delta: '+2%', up: true },
        { label: 'Retención', value: '68%', delta: '-3%', up: false },
        { label: 'Conversión', value: '34%', delta: '+6%', up: true },
        { label: '1ª visitas (mes)', value: '24', delta: '+1', up: true },
      ],
    },
  },

  testimonial: {
    quote: 'Migramos desde PracticeHub en un fin de semana. Ahora las confirmaciones de cita llegan solas por WhatsApp y dejamos de perseguir pagos a mano — la agenda y la caja por fin cuadran sin que nadie tenga que revisarlas.',
    name: 'Léa · Columna Quiro',
    location: 'Valencia, España',
  },

  comparison: {
    badge: 'Comparativa',
    title: 'Cómo se compara QuiroFlow',
    subtitle: 'Sin exagerar: esto es lo que cada plataforma muestra públicamente en su propia web.',
    featureHeader: 'Funcionalidad',
    rows: [
      'Asigna sala o camilla libre en automático',
      'Recordatorios y confirmación de cita por WhatsApp',
      'El paciente elige cuántos recordatorios recibir',
      'Página de reserva online en tu propio subdominio',
      'Formularios digitales de intake y consentimiento',
      'Facturas legales automáticas para bonos y membresías',
      'Estadísticas de retención, conversión y valor por visita',
      'Lista de espera: reoferta automática de huecos cancelados',
      'Alerta cuando un paciente se retrasa en su plan de tratamiento',
      'Campaña automática de agradecimiento a pacientes que refieren',
      'Solicitud automática de reseña de Google tras la visita',
    ],
    footnote: 'Comparativa elaborada a partir de la información publicada en las webs oficiales de cada proveedor (septiembre de 2026). Un "—" indica que el proveedor no lo muestra públicamente, no que no exista — confirma directamente con cada uno antes de decidir.',
  },

  pricing: {
    badge: 'Precios',
    title: 'Un plan ajustado a tu clínica',
    description: 'El precio depende del número de sedes y profesionales. Cuéntanos sobre tu clínica y te preparamos una propuesta — incluida la migración desde tu sistema actual.',
    cta: 'Hablar con nosotros',
  },

  finalCta: {
    title: 'Empieza a cambiar cómo gestionas tu clínica',
    description: 'Cuéntanos sobre tu clínica y te mostramos cómo encaja QuiroFlow — sin compromiso.',
    cta: 'Reservar una demo',
  },

  footer: {
    features: 'Funcionalidades',
    pricing: 'Precios',
    migrate: 'Cambiar desde PracticeHub',
    contactPlaceholder: '[email de contacto]',
    copyright: '© 2026 QuiroFlow. Todos los derechos reservados.',
    privacy: '[Política de privacidad]',
    terms: '[Términos y condiciones]',
  },

  mockups: {
    calendar: {
      weekLabel: 'Semana laboral',
      dateRange: '1 – 5 sept',
      days: ['LUN', 'MAR', 'MIÉ'],
      types: {
        ajuste: 'Ajuste',
        primeraVisita: '1ª visita',
        revision: 'Revisión',
        cancelada: 'Cancelada',
      },
    },
    whatsapp: {
      reminderHeader: 'RECORDATORIO AUTOMÁTICO',
      reminderMessage: 'Hola Ana 👋 Te recordamos tu cita mañana a las 10:00 con Marta.',
      confirmBtn: '✅ Confirmar asistencia',
      rescheduleBtn: '🔁 Cambiar cita',
      confirmedReply: 'Confirmado ✅',
      inboundHeader: 'MENSAJE ENTRANTE → BANDEJA QUIROFLOW',
      inboundMessage: '¿Puedo llevar a mi hijo a la misma cita?',
    },
    booking: {
      label: 'RESERVA ONLINE · tuclinica.quiroflow.com',
      practitioners: [
        { initials: 'AT', name: 'Ana Torres', avail: 'Disponible lunes a viernes' },
        { initials: 'MR', name: 'Marco Ruiz', avail: 'Disponible martes y jueves' },
      ],
    },
  },
}

export type Messages = typeof es

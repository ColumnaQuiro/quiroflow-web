export const es = {
  nav: {
    features: 'Funcionalidades',
    pricing: 'Precios',
    // "Comparativa" and "Migración" were internal labels -- they name the
    // artefact we built, not the job the visitor came to do. "Comparar" and
    // "Cambiar de programa" say the same thing from their side of the screen.
    comparison: 'Comparar',
    migrate: 'Cambiar de programa',
    about: 'Quiénes somos',
    chiro: 'Quiropráctica',
    physio: 'Fisioterapia',
    resources: 'Recursos',
    contact: 'Contacto',
    bookDemo: 'Reservar demo',
    // Shown instead of bookDemo below 640px: the logo, the ES/EN/FR toggle and
    // a full-length CTA cannot all fit on a 375px header without one of them
    // being squeezed until its text wraps.
    bookDemoShort: 'Demo',
    startTrial: 'Empezar prueba',
    startTrialShort: 'Probar',
  },

  hero: {
    // Neutral on purpose. The old badge ("Software para quiroprácticos") and
    // closing line ("Más tiempo ajustando") told every fisio, osteópata and
    // podólogo arriving from an ad or a referral that the page was not for
    // them. The vertical-specific framing now lives on /software-quiropractica
    // and /software-fisioterapia, where it earns its keyword instead of
    // excluding three quarters of the market on the root URL.
    badge: 'Software de gestión para clínicas',
    titleLine1: 'Menos tiempo en la agenda.',
    titleLine2: 'Más tiempo en la camilla.',
    description: 'Agenda con sala o camilla asignada automáticamente, bonos de sesiones que se descuentan solos, recordatorios por WhatsApp y aviso cuando un paciente se retrasa en su plan de tratamiento. Una sola plataforma para clínicas de quiropráctica, fisioterapia, osteopatía y podología.',
    ctaPrimary: 'Empezar prueba de 30 días',
    ctaSecondary: 'Reservar una demo',
    seeFeatures: 'Ver funcionalidades',
    // The risk-reversal used to be buried in the small print under Pricing,
    // which is the one place a visitor who has not scrolled will never see it.
    proof: ['30 días de prueba', 'Sin tarjeta', 'Migración incluida'],
  },

  video: {
    eyebrow: 'Ver el producto',
    title: 'QuiroFlow funcionando, en 90 segundos',
    description: 'Una vuelta por la agenda, los bonos y los recordatorios con datos reales de clínica — sin diapositivas.',
  },

  sectors: {
    badge: 'Para quién es',
    title: 'El mismo trabajo, en cuatro consultas distintas',
    description: 'Cambia el nombre de la sesión y poco más. La agenda con espacio asignado, los bonos, los recordatorios por WhatsApp y el seguimiento del plan de tratamiento funcionan igual se llame ajuste, sesión o tratamiento.',
    chiro: {
      title: 'Quiropráctica',
      body: 'Flujo de consulta de alto volumen, planes de cuidado largos y aviso cuando un paciente se sale de su cadencia.',
      link: 'Ver el software para clínicas de quiropráctica',
    },
    physio: {
      title: 'Fisioterapia',
      body: 'Camilla o box asignado en cada franja, bonos de sesiones que se descuentan solos y seguimiento del alta.',
      link: 'Ver el software para clínicas de fisioterapia',
    },
    others: {
      title: 'Osteopatía, podología y otras terapias manuales',
      body: 'No tienen página propia todavía, pero QuiroFlow se usa igual: los tipos de sesión, las salas y los formularios los defines tú. Escríbenos y te enseñamos cómo encaja en tu consulta.',
    },
  },

  funcionalidades: {
    badge: 'Funcionalidades',
    title: 'Lo que no hace ningún otro programa de tu lista',
    subtitle: 'Agenda, facturación y formularios los tiene todo el mundo. Estas tres son la razón por la que una clínica cambia.',
    moreTitle: 'Y todo lo demás que esperas de un programa de gestión',
  },

  platform: {
    eyebrow: 'Todo en un mismo sitio',
    title: 'Una sola plataforma para gestionar tu consulta',
    description: 'Los mensajes de tus pacientes te llegan aquí, puedes convertir leads nuevos en pacientes con plantillas de mensajes automáticas (bienvenida, seguimiento, recordatorio de reserva), lanzar campañas de recall y ver estadísticas claras de tu consulta — sin saltar entre varias aplicaciones distintas.',
    short: 'Bandeja única, plantillas automáticas para leads nuevos y campañas de recall, sin saltar entre aplicaciones.',
  },

  agenda: {
    eyebrow: 'Agenda',
    title: 'Sabe siempre dónde está cada paciente',
    description: 'QuiroFlow gestiona el flujo de tu consulta de principio a fin: sabes en todo momento quién ha llegado, quién está en sesión y quién está en caja, con asignación automática de sala o camilla de fondo para que nunca tengas que comprobarlo a mano. Vista por día, semana laboral o semana completa — y soporte para varias sedes desde la misma cuenta si tu clínica tiene más de una ubicación.',
    short: 'Quién ha llegado, quién está en sesión y quién está en caja, con la sala asignada sola. Día, semana laboral o semana completa, y varias sedes desde la misma cuenta.',
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
    short: 'Recordatorios con botón para confirmar o cambiar la cita, y los mensajes de tus pacientes en tu bandeja, sin cambiar de app.',
  },

  booking: {
    eyebrow: 'Reserva online',
    title: 'Un widget de reserva en tu propio subdominio',
    description: 'Cada clínica recibe su propia página pública de reservas, con tu marca y horarios reales. Los pacientes reservan cita sin llamar, y la cita entra directamente en tu agenda.',
    short: 'Tu propia página de reservas, con tu marca y tus horarios reales. La cita entra directa en la agenda.',
  },

  waitlist: {
    eyebrow: 'Lista de espera y continuidad',
    title: 'Ningún hueco vacío ni paciente perdido a medio tratamiento',
    description: 'Cuando se cancela una cita, QuiroFlow ofrece automáticamente ese hueco al primer paciente en lista de espera, con un enlace para reservarlo al momento. Y si un paciente con un plan de tratamiento activo se retrasa respecto a su propia cadencia, te avisa antes de que deje de venir.',
    short: 'El hueco cancelado se reofrece solo, y te avisa cuando un paciente se retrasa en su plan.',
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
    short: 'Bonos que se descuentan solos, cobro recurrente con Stripe y factura legal automática.',
    visual: {
      header: 'FACTURA #0142',
      // Neutral on the homepage: the per-vertical pages override this line
      // with their own wording (see quiropractica/fisioterapia .mockups).
      item1: 'Sesión de tratamiento x1',
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
    short: 'Intake y consentimiento con un generador de arrastrar y soltar. El paciente los rellena desde el móvil antes de llegar.',
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
    short: 'Ocupación, PVA, retención, conversión y primeras visitas, al minuto y comparadas con el periodo anterior.',
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

  // Was `practicehub`, and was the second thing on the page. Naming the
  // section after a competitor only speaks to the small share of visitors
  // already using that competitor; titling it by the fear ("¿y si pierdo los
  // historiales?") speaks to everyone considering a change. Now sits below
  // the features, where the visitor already knows what they would be moving to.
  migration: {
    badge: 'Cambiar de programa',
    titleLine1: '¿Y si pierdo los historiales al cambiar?',
    titleLine2: 'No pierdes nada, y cambias en un fin de semana.',
    description: 'Es el miedo que frena a casi todas las clínicas, y es razonable: cambiar de programa suena a semanas exportando, revisando y volviendo a subir. QuiroFlow trae un importador para que no lo sea.',
    bullets: [
      'Pacientes y citas se importan desde el export de tu programa actual.',
      'Cuando tu sistema lo permite (por ejemplo PracticeHub), pagos, notas clínicas, planes de tratamiento y formularios se sincronizan directamente por API — sin tocar un CSV.',
      'Puedes volver a ejecutar la importación cuando quieras: lo ya migrado nunca se duplica.',
      '¿Vienes de un Excel o de un programa sin exportación estándar? Importa tus pacientes por CSV mapeando tus propias columnas, sin depender de un formato fijo.',
    ],
    fromLabel: 'Tu programa actual',
    toLabel: 'QuiroFlow',
    items: ['Pacientes', 'Citas', 'Pagos', 'Notas clínicas', 'Planes de tratamiento', 'Formularios'],
  },

  data: {
    badge: 'Datos y salida',
    title: 'Tus datos son tuyos, también el día que te vayas',
    // The quiet objection to buying from a small vendor is not "does it
    // work?" but "what happens to my clinical records if this company
    // disappears or I change my mind?". Saying it out loud, including the
    // exit, defuses it; leaving it unsaid does not make it go away.
    description: 'Nos estás pidiendo que guardemos el historial clínico de tus pacientes. Lo mínimo es decirte dónde está, quién responde de él y cómo te lo llevas si un día decides irte.',
    items: [
      {
        title: 'Alojados en la Unión Europea',
        body: 'Los datos de tu clínica y de tus pacientes se alojan en servidores dentro de la UE, sin transferencias internacionales para el tratamiento ordinario.',
      },
      {
        title: 'Copias de seguridad diarias',
        body: 'Copia diaria con retención, y restauración a un punto anterior si algo se borra por error desde tu propia cuenta.',
      },
      {
        title: 'Exportación completa, cuando quieras',
        body: 'Pacientes, citas, notas clínicas, formularios y facturación se exportan en formatos abiertos (CSV y PDF) desde tu cuenta, sin pedirlo por email y sin coste. No hay puerta de salida cerrada.',
      },
      {
        title: 'Encargado del tratamiento, por contrato',
        body: 'Tu clínica sigue siendo la responsable de los datos de sus pacientes. QuiroFlow actúa como encargado del tratamiento y firma el contrato correspondiente, conforme al RGPD y a la LOPDGDD.',
      },
    ],
    note: '¿Necesitas el detalle técnico o el contrato de encargado antes de decidir? Escríbenos y te lo mandamos sin pasar por una demo.',
  },

  testimonial: {
    quote: 'Migramos desde PracticeHub en un fin de semana. Ahora las confirmaciones de cita llegan solas por WhatsApp y dejamos de perseguir pagos a mano — la agenda y la caja por fin cuadran sin que nadie tenga que revisarlas.',
    name: 'Léa · Columna Quiro',
    location: 'Valencia, España',
  },

  comparison: {
    badge: 'Comparar',
    title: 'Cómo se compara QuiroFlow',
    subtitle: 'Sin exagerar: esto es lo que cada plataforma muestra públicamente en su propia web.',
    featureHeader: 'Funcionalidad',
    rows: [
      'Exportación completa de tus datos desde tu cuenta',
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
      'Precio de entrada publicado en su propia web',
    ],
    footnote: 'Comparativa elaborada a partir de la información publicada en las webs oficiales de cada proveedor (septiembre de 2026). Un "—" indica que el proveedor no lo muestra públicamente, no que no exista — confirma directamente con cada uno antes de decidir.',
  },

  pricing: {
    badge: 'Precios',
    title: 'Precio por profesional, no por paciente',
    description: 'Pacientes ilimitados en todos los planes. Solo pagas por los profesionales que pasan consulta — recepción y administración son gratis e ilimitados.',
    monthly: 'Mensual',
    annual: 'Anual',
    annualSave: 'Ahorra ~15%',
    perMonth: '/mes',
    billedAnnually: 'facturado anualmente',
    // Was "Más elegido", which asserts a fact about customer distribution we
    // cannot yet back. "Recomendado" carries the same signal honestly.
    mostChosen: 'Recomendado',
    extraPro: 'Profesional adicional: 29 €/mes',
    // The trial button now opens the real sign-up at app.quiroflow.com, and
    // the call has its own separate button. Before, both promises were on one
    // button that only ever led to a calendar.
    cta: 'Empezar prueba de 30 días',
    ctaSecondary: 'Hablar con el equipo',
    exVat: 'sin IVA',
    vatNote: 'Precios sin IVA. Se añade un 21% en la factura.',
    ctaNote: '30 días de prueba. Sin tarjeta. Migración incluida.',
    anchor: {
      title: 'Con lo que cuesta un hueco perdido a la semana',
      body: 'Una cancelación que no se vuelve a llenar, a 45 € la sesión, son unos 180 € al mes. El plan Practice cuesta 119 €. La reoferta automática del hueco y el aviso de paciente retrasado existen justamente para tapar ese agujero.',
    },
    tiers: {
      solo: {
        name: 'Solo',
        for: '1 profesional, 1 sede',
        features: [
          'Pacientes ilimitados',
          'Usuarios de administración gratis e ilimitados',
          'Agenda con asignación automática de sala',
          'Reserva online en tu propia página',
          'WhatsApp: bandeja, recordatorios y plantillas',
          'Recordatorios de revisión y campañas automáticas',
          'Lista de espera y alertas de continuidad',
          'Facturación, pagos y bonos',
        ],
      },
      practice: {
        name: 'Practice',
        for: 'Hasta 3 profesionales, 1 sede',
        features: [
          'Todo lo de Solo',
          'Roles y permisos personalizados',
          'Informes avanzados: PVA, retención y conversión',
          'Profesionales adicionales a 29 €/mes',
        ],
      },
      clinic: {
        name: 'Clinic',
        for: 'Hasta 6 profesionales, sedes ilimitadas',
        features: [
          'Todo lo de Practice',
          'Multi-sede',
          'API y webhooks',
          'Migración asistida y soporte prioritario',
        ],
      },
    },
  },

  faq: {
    title: 'Preguntas frecuentes',
    description: 'Las dos más caras — protección de datos y migración — primero.',
    items: [
      {
        q: '¿Cómo se tratan los datos de mis pacientes?',
        a: 'Conforme al RGPD y a la LOPDGDD. Tu clínica sigue siendo la responsable de los datos de sus pacientes y QuiroFlow actúa como encargado del tratamiento, firmando el contrato correspondiente con cada clínica. Los datos se alojan en servidores dentro de la Unión Europea.',
      },
      {
        q: '¿Puedo migrar desde el programa que uso ahora?',
        a: 'Sí, y suele hacerse en un fin de semana. Pacientes y citas se importan desde el export de tu programa actual; cuando el sistema de origen lo permite, notas clínicas, planes de tratamiento, pagos y formularios se sincronizan por API. Si vienes de un Excel o de un programa sin exportación estándar, importas por CSV mapeando tus propias columnas. La migración está incluida, no se factura aparte.',
      },
      {
        q: '¿Y si un día quiero irme? ¿Puedo llevarme mis datos?',
        a: 'Sí, y sin pedir permiso. Pacientes, citas, notas clínicas, formularios y facturación se exportan en CSV y PDF desde tu propia cuenta, cuando quieras y sin coste. Preferimos decirlo antes de que lo preguntes.',
      },
      {
        q: '¿Sirve si no soy quiropráctico?',
        a: 'Sí. QuiroFlow se usa en clínicas de quiropráctica, fisioterapia, osteopatía y podología. Los tipos de sesión, las salas, los formularios y los planes de tratamiento los defines tú, así que la herramienta se adapta a cómo trabajas en lugar de imponerte un flujo.',
      },
      {
        q: '¿Qué incluye la prueba de 30 días?',
        a: 'El producto entero, sin recortes y sin tarjeta. Si durante la prueba decides quedarte, migramos tus datos antes de que empieces a pagar.',
      },
      {
        q: '¿Cómo se cuentan los profesionales del precio?',
        a: 'Solo cuentan los profesionales que pasan consulta. Recepción, administración y dirección son usuarios gratis e ilimitados en todos los planes, y los pacientes no se cuentan nunca.',
      },
    ],
  },

  capture: {
    title: '¿Todavía no quieres una demo?',
    description: 'Te enviamos los precios y un resumen de funcionalidades por email, y lo miras con calma. Sin llamadas y sin compromiso.',
    emailLabel: 'Tu email',
    clinicLabel: 'Nombre de tu clínica (opcional)',
    consentBefore: 'He leído y acepto la',
    consentLink: 'política de privacidad',
    button: 'Enviar',
    sending: 'Enviando...',
    success: 'Recibido. Te escribimos en menos de 24 horas.',
    error: 'No hemos podido enviarlo. Inténtalo de nuevo o escríbenos directamente.',
  },

  finalCta: {
    title: 'Empieza a cambiar cómo gestionas tu clínica',
    description: 'Abre una prueba de 30 días sin tarjeta, o cuéntanos cómo trabajáis y te enseñamos cómo encaja QuiroFlow.',
    cta: 'Empezar prueba de 30 días',
    ctaSecondary: 'Reservar una demo',
  },

  about: {
    badge: 'Quiénes somos',
    title: 'QuiroFlow lo mantiene la clínica que lo necesitaba',
    description: 'No somos una agencia que decidió hacer software sanitario. Somos COLUMNAQUIRO S.L., la sociedad que gestiona Columna Quiro, una clínica quiropráctica de Valencia — y QuiroFlow nació dentro de ella porque ningún programa del mercado hacía lo que necesitábamos.',
    story: {
      title: 'Por qué existe',
      paragraphs: [
        'Columna Quiro funcionaba con un programa que costaba más de lo que resolvía. La agenda no sabía qué sala estaba libre, los bonos se llevaban a mano, los recordatorios salían de un móvil personal y nadie se enteraba de que un paciente había dejado de venir hasta dos meses después.',
        'Construimos QuiroFlow para la propia clínica, con la agenda y la caja de un centro real encima. Cada función que ves en esta web salió de un problema que tuvimos en consulta, no de una lista de la competencia.',
        'Cuando otras clínicas nos empezaron a preguntar qué usábamos, decidimos abrirlo. Eso significa que seguimos siendo los primeros usuarios del producto: si algo se rompe, se rompe en nuestra propia agenda antes que en la tuya.',
      ],
    },
    people: {
      title: 'Con quién hablas',
      description: 'Somos un equipo pequeño. Cuando reservas una demo o escribes al soporte, no hay un call center en medio.',
      items: [
        {
          name: 'Raúl',
          role: 'Producto y desarrollo',
          body: 'Construye y mantiene QuiroFlow, y es quien está al otro lado del enlace de la demo. Si tienes una pregunta técnica sobre la migración o la exportación de datos, la contesta él.',
        },
        {
          name: 'Léa',
          role: 'Columna Quiro · uso diario en clínica',
          body: 'Pasa consulta en Columna Quiro y usa QuiroFlow todos los días. Buena parte de lo que hay en el roadmap sale de lo que le estorba a ella primero.',
        },
      ],
    },
    facts: {
      title: 'Los datos, sin adornos',
      contactLabel: 'Contacto directo',
      items: [
        { label: 'Empresa', value: 'COLUMNAQUIRO S.L. · NIF B16365504' },
        { label: 'Dónde estamos', value: 'Valencia, España' },
        { label: 'Desde dónde damos soporte', value: 'Valencia, en español, inglés y francés' },
        { label: 'Dónde viven tus datos', value: 'Servidores en la Unión Europea' },
      ],
    },
    cta: {
      title: '¿Prefieres preguntar antes de probar?',
      description: 'Escríbenos y te contesta una persona que pasa consulta o que ha escrito el código. Normalmente el mismo día.',
      button: 'Reservar una demo',
      emailButton: 'Escribir un email',
    },
  },

  resources: {
    badge: 'Recursos',
    title: 'Recursos para gestionar una clínica',
    description: 'Guías prácticas sobre agenda, retención, bonos y protección de datos en clínicas de terapia manual. Sin relleno.',
    empty: {
      title: 'Todavía no hay nada publicado',
      body: 'Estamos escribiendo las primeras guías. Déjanos tu email y te avisamos cuando salga la primera — es el mismo formulario con el que te mandamos los precios.',
    },
    readMore: 'Leer',
    backToList: 'Volver a Recursos',
    publishedOn: 'Publicado el',
    readingTime: 'min de lectura',
  },

  quiropractica: {
    badge: 'Quiropráctica',
    title: 'Software de gestión para clínicas de quiropráctica',
    description: 'Agenda con flujo de consulta y sala asignada automáticamente, planes de cuidado con aviso cuando un paciente se retrasa, bonos con cobro recurrente, historial clínico digital y recordatorios por WhatsApp. Para consultas de un quiropráctico y para centros de varias sedes.',
    ctaPrimary: 'Empezar prueba de 30 días',
    ctaSecondary: 'Reservar una demo',
    seeFeatures: 'Ver cómo funciona',
    features: {
      flujo: {
        eyebrow: 'Flujo de consulta',
        title: 'Volumen alto sin perder de vista a nadie',
        description: 'Una consulta quiropráctica mueve muchas visitas cortas al día, y ahí se pierde el control. QuiroFlow te dice en todo momento quién ha llegado, quién está en sala, quién está esperando y quién está en caja, y asigna la sala libre automáticamente al crear la cita. Vista por día, semana laboral o semana completa, y varias sedes desde la misma cuenta.',
      },
      planes: {
        eyebrow: 'Planes de cuidado',
        title: 'El paciente que se cae del plan, antes de que se caiga',
        description: 'Un plan de cuidado quiropráctico se sostiene en la cadencia: dos por semana, luego una, luego mantenimiento. QuiroFlow conoce la cadencia de cada paciente y te avisa cuando alguien se retrasa respecto a la suya, mientras todavía estás a tiempo de recuperarlo — en vez de descubrirlo revisando la agenda dos meses después.',
      },
      bonos: {
        eyebrow: 'Bonos y membresías',
        title: 'Bonos y cuotas que se cobran solos',
        description: 'Vende bonos de ajustes o cuotas de mantenimiento y deja que QuiroFlow descuente la sesión en cada visita. Cobro recurrente automatizado con Stripe y facturación legal automática, para que la caja del mes no dependa de que alguien persiga los pagos.',
      },
      whatsapp: {
        eyebrow: 'WhatsApp y lista de espera',
        title: 'El hueco cancelado se vuelve a llenar solo',
        description: 'Recordatorios automáticos con botones para confirmar o cambiar la cita en un toque. Y cuando alguien cancela, el hueco se ofrece automáticamente al primer paciente de la lista de espera, con un enlace para reservarlo al momento. Los mensajes que te escriben llegan a tu bandeja dentro de QuiroFlow.',
      },
      historia: {
        eyebrow: 'Historial clínico y consentimientos',
        title: 'Valoración, ajustes y consentimiento sin papel',
        description: 'Historial clínico digital con la valoración inicial, el registro de cada ajuste y las pruebas que quieras adjuntar. Los formularios de primera visita y el consentimiento informado los rellena el paciente desde el móvil antes de llegar.',
      },
      informes: {
        eyebrow: 'Informes',
        title: 'PVA, retención y conversión de primera visita',
        description: 'Ocupación por profesional y por sala, ingresos, precio medio por visita, retención y cuántas primeras visitas acaban convirtiéndose en un plan de cuidado completo. Al minuto y comparado con el periodo anterior, sin exportar nada a una hoja de cálculo.',
      },
    },
    edge: {
      title: 'Dos cosas que deciden el año de una consulta quiropráctica',
      description: 'La quiropráctica no se juega en el ajuste. Se juega en si el paciente completa el plan y en si la agenda no deja huecos por el camino.',
      items: [
        {
          title: 'Te avisa antes de que un paciente abandone el plan',
          body: 'El cuidado se pierde entre visitas, no en la sala. Si un paciente con un plan activo se sale de su propia cadencia, QuiroFlow te lo dice mientras todavía puedes llamarle, en lugar de que lo veas al cerrar el mes.',
        },
        {
          title: 'La reseña de Google se pide sola',
          body: 'Tras la visita, QuiroFlow puede pedir la reseña automáticamente. Para una consulta que compite en búsquedas locales, esa constancia acaba pesando más que cualquier campaña puntual.',
        },
      ],
    },
    faq: {
      title: 'Preguntas frecuentes',
      items: [
        {
          q: '¿Sirve QuiroFlow si soy un solo quiropráctico?',
          a: 'Sí. Funciona igual para una consulta individual que para un centro con varias salas y profesionales. El precio se ajusta al número de sedes y de profesionales que pasan consulta, así que una consulta pequeña no paga por lo que no usa.',
        },
        {
          q: '¿Puedo gestionar planes de cuidado con cadencias distintas?',
          a: 'Sí. Defines la cadencia de cada plan (por ejemplo dos visitas por semana durante un mes y luego una) y QuiroFlow la sigue paciente a paciente, avisándote cuando alguien se retrasa respecto a la suya.',
        },
        {
          q: '¿Cómo se asignan las salas?',
          a: 'QuiroFlow asigna la sala libre automáticamente al crear la cita, según la duración y el tipo de visita. Puedes cambiarla a mano siempre que lo necesites.',
        },
        {
          q: '¿Puedo vender bonos de ajustes y cuotas mensuales?',
          a: 'Sí. Los bonos descuentan una sesión en cada visita sin llevar la cuenta a mano, y las cuotas mensuales se cobran solas vía Stripe, con factura legal automática si la activas.',
        },
        {
          q: '¿Puedo migrar desde PracticeHub?',
          a: 'Sí, y es el caso que mejor cubrimos: pacientes y citas se importan desde tu export, y pagos, notas clínicas, planes de tratamiento y formularios se sincronizan por API. Desde cualquier otro sistema puedes importar por CSV mapeando tus columnas.',
        },
        {
          q: '¿Cómo se tratan los datos de los pacientes?',
          a: 'Conforme al RGPD y a la LOPDGDD, con los datos alojados en servidores de la Unión Europea. QuiroFlow actúa como encargado del tratamiento y firma el contrato correspondiente con cada clínica, que sigue siendo la responsable de los datos de sus pacientes.',
        },
      ],
    },
    cta: {
      title: 'Ve QuiroFlow con los datos de tu consulta',
      description: 'Abre una prueba de 30 días sin tarjeta, o cuéntanos cómo trabajáis y te enseñamos cómo encaja en tu clínica quiropráctica.',
      button: 'Empezar prueba de 30 días',
      buttonSecondary: 'Reservar una demo',
    },
    mockups: {
      invoiceItem: 'Ajuste quiropráctico x1',
      calendarType: 'Ajuste',
    },
  },

  fisioterapia: {
    badge: 'Fisioterapia',
    title: 'Software de gestión para clínicas de fisioterapia',
    description: 'Agenda con asignación automática de camilla o box, bonos de sesiones que se descuentan solos, historia clínica digital y recordatorios por WhatsApp. Todo en una sola plataforma, para consultas de un fisioterapeuta y para centros de varias sedes.',
    ctaPrimary: 'Empezar prueba de 30 días',
    ctaSecondary: 'Reservar una demo',
    seeFeatures: 'Ver cómo funciona',
    features: {
      agenda: {
        eyebrow: 'Agenda y ocupación',
        title: 'Cada sesión, con su box y su camilla asignados',
        description: 'QuiroFlow asigna automáticamente el box o la camilla libre en cada franja, así que nunca acabas con dos pacientes citados en el mismo espacio. Vista por día, semana laboral o semana completa, y varias sedes desde la misma cuenta.',
      },
      bonos: {
        eyebrow: 'Bonos y facturación',
        title: 'Bonos de sesiones que se descuentan solos',
        description: 'Vende bonos de 5, 10 o 20 sesiones y deja que QuiroFlow descuente una cada vez que el paciente acude. Cobro recurrente automatizado con Stripe para tarifas planas, y facturación legal automática — sin perseguir pagos a final de mes.',
      },
      whatsapp: {
        eyebrow: 'Recordatorios por WhatsApp',
        title: 'Menos huecos perdidos por un olvido',
        description: 'Recordatorios automáticos con botones para confirmar o cambiar la cita en un toque. Y si alguien cancela, el hueco se ofrece solo al primer paciente de la lista de espera, con un enlace para reservarlo al momento.',
      },
      historia: {
        eyebrow: 'Historia clínica y consentimientos',
        title: 'Valoración, evolución y consentimiento sin papel',
        description: 'Historia clínica digital con la valoración inicial, la evolución sesión a sesión y las pruebas que quieras adjuntar. Los formularios de anamnesis y el consentimiento informado los rellena el paciente desde el móvil antes de llegar.',
      },
      reserva: {
        eyebrow: 'Reserva online',
        title: 'Una página de reservas con tu marca',
        description: 'Tu clínica recibe su propia página pública de reservas en tu subdominio, con tus horarios reales y cada fisioterapeuta con su disponibilidad. El paciente reserva sin llamar y la cita entra directa en la agenda.',
      },
      informes: {
        eyebrow: 'Informes',
        title: 'Ocupación, retención y valor por sesión',
        description: 'Ocupación por fisioterapeuta y por sala, ingresos, precio medio por visita, retención y cuántas primeras visitas acaban convirtiéndose en un plan completo. Al minuto y comparado con el periodo anterior.',
      },
    },
    edge: {
      title: 'Dos detalles que pesan en tratamientos largos',
      description: 'La fisioterapia rara vez se juega en una sola sesión. Se juega en si el paciente completa el plan y en si vuelve el año que viene.',
      items: [
        {
          title: 'Te avisa antes de que un paciente deje de venir',
          body: 'Un tratamiento se pierde en el hueco entre sesiones, no en la consulta. Si un paciente con un plan activo se retrasa respecto a su propia cadencia, QuiroFlow te avisa mientras todavía estás a tiempo de recuperarlo, en vez de que lo descubras al revisar la agenda dos meses después.',
        },
        {
          title: 'Las reseñas de Google se piden solas',
          body: 'Tras la visita, QuiroFlow puede pedir la reseña automáticamente. Para una clínica que compite en búsquedas locales, esa constancia acaba valiendo más que cualquier campaña puntual.',
        },
      ],
    },
    faq: {
      title: 'Preguntas frecuentes',
      items: [
        {
          q: '¿Sirve QuiroFlow si soy un solo fisioterapeuta?',
          a: 'Sí. Funciona igual para una consulta individual que para un centro con varias salas y profesionales. El precio se ajusta al número de sedes y de fisioterapeutas, así que una consulta pequeña no paga por lo que no usa.',
        },
        {
          q: '¿Puedo gestionar bonos de sesiones?',
          a: 'Sí. Puedes crear bonos del número de sesiones que quieras y cada visita descuenta una automáticamente, sin llevar la cuenta a mano. También puedes activar el cobro recurrente para tarifas planas o membresías mensuales.',
        },
        {
          q: '¿Cómo se asignan las camillas o los boxes?',
          a: 'QuiroFlow asigna el espacio libre automáticamente al crear la cita, según la duración y el tipo de sesión. Puedes cambiarlo a mano siempre que lo necesites.',
        },
        {
          q: '¿Los pacientes pueden reservar cita online?',
          a: 'Sí. Cada clínica tiene su propia página de reservas en su subdominio, con disponibilidad real por fisioterapeuta. La cita entra directamente en tu agenda, sin llamadas ni confirmaciones manuales.',
        },
        {
          q: '¿Puedo migrar desde el software que uso ahora?',
          a: 'Sí. Importamos pacientes y citas desde tu propio export, y desde cualquier otro sistema puedes importar por CSV mapeando tus columnas, sin depender de un formato fijo.',
        },
        {
          q: '¿Cómo se tratan los datos de los pacientes?',
          a: 'Conforme al RGPD y a la LOPDGDD, con los datos alojados en servidores de la Unión Europea. QuiroFlow actúa como encargado del tratamiento y firma el contrato correspondiente con cada clínica, que sigue siendo la responsable de los datos de sus pacientes.',
        },
      ],
    },
    cta: {
      title: 'Ve QuiroFlow con los datos de tu clínica',
      description: 'Abre una prueba de 30 días sin tarjeta, o cuéntanos cómo trabajáis y te enseñamos cómo encaja en tu centro de fisioterapia.',
      button: 'Empezar prueba de 30 días',
      buttonSecondary: 'Reservar una demo',
    },
    mockups: {
      invoiceItem: 'Sesión de fisioterapia x1',
      calendarType: 'Sesión',
    },
  },

  footer: {
    productTitle: 'Producto',
    sectorsTitle: 'Por especialidad',
    companyTitle: 'Empresa',
    features: 'Funcionalidades',
    pricing: 'Precios',
    comparison: 'Comparar',
    migrate: 'Cambiar de programa',
    chiro: 'Quiropráctica',
    physio: 'Fisioterapia',
    about: 'Quiénes somos',
    resources: 'Recursos',
    copyright: '© 2026 QuiroFlow. Todos los derechos reservados.',
    privacy: 'Política de privacidad',
    terms: 'Aviso legal',
    cookies: 'Preferencias de cookies',
  },

  consent: {
    title: 'Cookies',
    body: 'Usamos cookies necesarias para que la web funcione y, solo si nos das permiso, cookies de Google para medir si nuestros anuncios acaban en una demo. Rechazarlas no limita nada de la web.',
    accept: 'Aceptar',
    reject: 'Rechazar',
    settings: 'Configurar',
    save: 'Guardar preferencias',
    always: 'Siempre activas',
    necessaryTitle: 'Necesarias',
    necessaryBody: 'Imprescindibles para que la web funcione y recuerde tu elección de idioma y de cookies.',
    adsTitle: 'Publicidad',
    adsBody: 'Google Ads. Nos permite saber qué anuncios terminan en una demo o en una solicitud de precios.',
    analyticsTitle: 'Analítica',
    analyticsBody: 'Medición agregada del uso de la web para saber qué páginas funcionan y cuáles no.',
  },

  mockups: {
    calendar: {
      weekLabel: 'Semana laboral',
      dateRange: '1 – 5 sept',
      days: ['LUN', 'MAR', 'MIÉ'],
      types: {
        // Neutral by default; the per-vertical pages pass their own label for
        // the primary appointment type (see quiropractica/fisioterapia.mockups).
        ajuste: 'Sesión',
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

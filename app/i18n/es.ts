export const es = {
  nav: {
    features: 'Funcionalidades',
    pricing: 'Precios',
    // "Comparativa" and "Migración" were internal labels -- they name the
    // artefact we built, not the job the visitor came to do. "Comparar" and
    // "Cambiar de programa" say the same thing from their side of the screen.
    comparison: 'Comparar',
    migrate: 'Cambiar de programa',
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
    titleLine1: 'Toda tu clínica en una sola app.',
    titleLine2: 'Del primer mensaje a la revisión.',
    description: 'Los leads de tus anuncios, la recepcionista con IA que contesta y reserva, la agenda, el análisis postural, los planes de cuidado, los bonos, las facturas VeriFactu y la app de tus pacientes. Todo comparte la misma ficha, así que nada se sincroniza y nada se pierde por el camino. Para clínicas de quiropráctica, fisioterapia, osteopatía y podología.',
    ctaPrimary: 'Empezar prueba de 15 días',
    ctaSecondary: 'Reservar una demo',
    seeFeatures: 'Ver funcionalidades',
    // The risk-reversal used to be buried in the small print under Pricing,
    // which is the one place a visitor who has not scrolled will never see it.
    proof: ['15 días de prueba', 'Sin tarjeta', 'Migración incluida'],
    // The five steps of a patient's journey, which name the One app section below.
    verbs: ['Captar', 'Atender', 'Tratar', 'Cobrar', 'Fidelizar'],
  },

  // Everything the product does, grouped by the step of the patient's
  // journey it serves. Only what is live in the app: web chat, Messenger and
  // replying to Google reviews join once they are in production.
  oneApp: {
    badge: 'Una sola app',
    title: 'Cinco cosas que hace una clínica, en el mismo sitio',
    description: 'Una clínica no compra un CRM, una recepcionista y un programa de gestión: quiere que lleguen pacientes y que no se vayan. Cada cosa que hace QuiroFlow está en uno de estos cinco pasos, y todos leen la misma ficha del paciente.',
    pillars: [
      { verb: 'Captar', what: 'Que el paciente nuevo llegue.', items: ['Leads de tus anuncios de Meta', 'Tablero de leads por etapas', 'Coste por lead y por paciente', 'Reserva online con tu marca'] },
      { verb: 'Atender', what: 'Que nadie se quede sin respuesta.', items: ['Recepcionista con IA, también de noche', 'WhatsApp e Instagram en una bandeja', 'Reserva en la agenda real', 'Recordatorios que se confirman en un toque'] },
      { verb: 'Tratar', what: 'La consulta, sin papel.', items: ['Agenda con sala asignada', 'Análisis postural', 'Planes de cuidado y revaloraciones', 'Ejercicios en casa'] },
      { verb: 'Cobrar', what: 'Que la caja cuadre sola.', items: ['Bonos y membresías', 'Facturas VeriFactu', 'Pago online', 'Tarjetas regalo'] },
      { verb: 'Fidelizar', what: 'Que vuelva, y que lo cuente.', items: ['Recordatorios de revisión', 'Reseña de Google pedida tras la visita', 'App del paciente con Wallet', 'Referidos'] },
    ],
  },

  // The hero's illustration (JourneyIllustration.vue). Invented patient, invented numbers.
  journey: {
    aria: 'El recorrido de un paciente dentro de QuiroFlow: captar, atender, tratar, cobrar y fidelizar, alrededor de una sola app.',
    center: 'una app · una ficha',
    lead: 'Laura G. · nuevo lead',
    leadFrom: 'Meta Ads → WhatsApp',
    ask: '¿Tenéis hueco el martes?',
    reply: 'Martes 17:30, reservado ✓',
    replyBy: 'Recepcionista IA · 23:12',
    shoulders: 'Hombros',
    shouldersValue: '4,2° dcha',
    pelvis: 'Pelvis',
    pelvisValue: '1,8° izq',
    plan: 'Plan de 12 visitas',
    invoiceItem: 'Bono 10 sesiones',
    amount: '380,00 €',
    accepted: 'Aceptada por la AEAT',
    review: 'Reseña pedida tras la visita',
    recall: 'Revisión en 6 semanas',
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
    osteo: {
      title: 'Osteopatía',
      body: 'Anamnesis y diagrama corporal rellenados desde el móvil antes de la primera visita, notas con pruebas adjuntas y revisiones que no se olvidan.',
      link: 'Ver el software para osteópatas',
    },
    podo: {
      title: 'Podología',
      body: 'Gabinete asignado en cada cita, fotos de la evolución en la ficha y venta de productos con su stock.',
      link: 'Ver el software para podólogos',
    },
    others: {
      title: 'Otras terapias manuales',
      body: 'QuiroFlow se usa igual en cualquier consulta de terapia manual: los tipos de sesión, las salas y los formularios los defines tú. Escríbenos y te enseñamos cómo encaja en la tuya.',
    },
  },

  funcionalidades: {
    badge: 'Funcionalidades',
    title: 'Lo que no hace ningún otro programa de tu lista',
    sectorTitle: 'Todo lo que necesita tu clínica, en un solo lugar',
    subtitle: 'Agenda, facturación y formularios los tiene todo el mundo. Estas tres son la razón por la que una clínica cambia.',
    // Heads the VeriFactu and app sections. Neither belongs under the title
    // above: other programs do VeriFactu too, and "no other program does
    // this" would stop being true the moment either sat under it.
    essentialsTitle: 'Lo que te piden Hacienda y tus pacientes',
    moreTitle: 'Y todo lo demás que esperas de un programa de gestión',
  },

  verifactu: {
    eyebrow: 'VeriFactu',
    title: 'Facturas listas para VeriFactu, sin cambiar de programa en 2027',
    // The real chain starts on 1 Jan 2027 by itself (the app's #443); before
    // that a clinic can only run in test mode, which is why the copy says so
    // instead of implying anything is being sent to the AEAT for real today.
    description: 'Cada factura sale con su código QR, queda encadenada a la anterior y se envía sola a la AEAT al minuto de emitirla. Al devolver un pago se genera la rectificativa, y cada sede lleva su propia serie. Envía con el certificado de tu clínica o deja que QuiroFlow envíe por ti con un apoderamiento. Puedes probarlo hoy en modo de pruebas; el envío real empieza solo el 1 de enero de 2027.',
    short: 'QR en cada factura, registros encadenados y envío automático a la AEAT, con tu certificado o el nuestro.',
    visual: {
      header: 'FACTURA F2027-0142',
      item: 'Sesión de tratamiento x1',
      itemPrice: '45,00 €',
      total: 'Total',
      totalPrice: '45,00 €',
      qrLabel: 'QR tributario · VERI*FACTU',
      chained: 'Encadenada a la F2027-0141',
      sent: 'Aceptada por la AEAT',
    },
  },

  app: {
    eyebrow: 'App para iPhone, iPad y Android',
    title: 'La clínica en el bolsillo, para tu equipo y para tus pacientes',
    description: 'Tu equipo lleva la agenda, las fichas, las notas de la visita, los cobros y la bandeja en el móvil, entra con Face ID y recibe un aviso cuando llega una reserva online o un mensaje. En el iPad de recepción, el paciente firma sus formularios al llegar. Y tus pacientes usan la misma app para confirmar o cambiar su cita, pagar una factura pendiente con tarjeta, apuntarse a la lista de espera y hacer los ejercicios que les mandas.',
    short: 'Agenda, fichas, cobros y bandeja en el móvil del equipo; confirmar, pagar y ejercicios en el de tus pacientes.',
    visual: {
      staffHeader: 'TU EQUIPO',
      staff: ['Agenda de día, 3 días o semana', 'Ficha, notas S/O/A/P y cobros', 'Caja del día y números de la clínica', 'Modo recepción: firma en el iPad'],
      patientHeader: 'TUS PACIENTES',
      patient: ['Confirmar o cambiar la cita', 'Pagar una factura con tarjeta', 'Ejercicios para casa, con vídeo', 'Apuntarse a la lista de espera'],
    },
  },

  platform: {
    eyebrow: 'Bandeja única',
    title: 'WhatsApp e Instagram en una sola bandeja',
    description: 'Los mensajes de WhatsApp e Instagram llegan a la misma bandeja, y un número desconocido que te escribe se convierte en un lead. Asigna cada conversación a una persona, deja notas internas mencionando a un compañero, posponla hasta más tarde y, sin salir del chat, reserva la cita o manda un enlace de pago.',
    short: 'WhatsApp e Instagram juntos: asigna, deja notas internas para el equipo, pospón una conversación y reserva o cobra desde el chat.',
  },

  automations: {
    eyebrow: 'Automatizaciones',
    title: 'Flujos que montas arrastrando',
    short: 'Un editor visual para encadenar mensajes, esperas y condiciones: espera a que el paciente rellene un formulario, sigue un camino u otro según sus respuestas y le escribe en su idioma.',
  },

  exercises: {
    eyebrow: 'Ejercicios en casa',
    title: 'Lo que hace entre sesión y sesión',
    short: 'Asigna un programa de ejercicios con vídeo o foto desde la ficha. El paciente lo sigue en la app con un recordatorio diario, y te avisa si deja de hacerlos.',
  },

  payments: {
    eyebrow: 'Cobros',
    title: 'Cobra online y cuadra la caja',
    short: 'Enlaces de pago desde el chat, facturas pendientes que el paciente paga con tarjeta desde la app, y la caja del día con cada cobro y a qué corresponde.',
  },

  // Sold as an add-on (and included in Practice and Clinic), so the grid names it -- the
  // pricing cards mention Growth and otherwise nothing says what it is.
  growth: {
    eyebrow: 'Growth',
    title: 'Captación de pacientes nuevos',
    short: 'Los leads de tus anuncios entran solos en un tablero por etapas, la recepcionista con IA les contesta por WhatsApp y reserva la cita, y la reseña de Google se pide tras la visita.',
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
    title: 'Recordatorios que se confirman en un toque',
    description: 'Recordatorios automáticos con botones para confirmar o cambiar la cita en un toque, recalls para pacientes inactivos, y los mensajes que te escriben tus pacientes llegan directamente a tu bandeja en QuiroFlow — sin cambiar de app ni depender de que abran un email.',
    short: 'Recordatorios por WhatsApp con botón para confirmar o cambiar la cita, y recalls automáticos para los pacientes que hace tiempo que no vienen.',
  },

  booking: {
    eyebrow: 'Reserva online',
    title: 'Un widget de reserva en tu propio subdominio',
    description: 'Cada clínica recibe su propia página pública de reservas, con tu marca y horarios reales. Los pacientes reservan cita sin llamar, y la cita entra directamente en tu agenda.',
    short: 'Tu propia página de reservas, con tu marca y tus horarios reales. La cita entra directa en la agenda.',
  },

  // The headline feature since October 2026: it answers and books on its
  // own, and is sold on its own as well as inside Growth, Practice and Clinic.
  receptionist: {
    eyebrow: 'Nuevo · Recepcionista con IA',
    title: 'Contesta tu WhatsApp y reserva la cita, también a las once de la noche',
    description: 'La recepcionista con IA responde por WhatsApp a tus pacientes y a quien te escribe por primera vez, con lo que tú le cuentas de la clínica: precios, horarios, qué tratáis. Ofrece huecos reales de tu agenda y, cuando el paciente elige uno, reserva o mueve la cita ella sola. Tú decides cuándo contesta sola — fuera de horario, o también en horario — y cuándo solo deja un borrador para que lo apruebes. Lo que no le toca lo pasa a una persona con una nota en la conversación, y nunca cancela una cita.',
    visual: {
      header: 'WHATSAPP · 22:47',
      patient1: 'Hola, ¿tenéis hueco esta semana para una primera visita? Tengo la espalda fatal',
      ai1: 'Hola, Laura. La primera visita cuesta 50 € e incluye la valoración y la primera sesión. Tengo el jueves a las 10:00 o el viernes a las 17:30. ¿Te encaja alguna?',
      patient2: 'El jueves a las 10',
      ai2: 'Hecho: tu primera visita queda el jueves a las 10:00 con Marta. Te llegará la confirmación por aquí.',
      booked: 'Reservada por la recepcionista IA',
      footer: 'Contestado sola, fuera de horario',
    },
  },

  waitlist: {
    eyebrow: 'Lista de espera y continuidad',
    title: 'Ningún hueco vacío ni paciente perdido a medio tratamiento',
    description: 'Cuando se cancela una cita, QuiroFlow ofrece automáticamente ese hueco al primer paciente en lista de espera, con un enlace para reservarlo al momento. Y si un paciente con un plan de tratamiento activo se retrasa respecto a su propia cadencia, te avisa antes de que deje de venir. Los planes se definen como N visitas cada M semanas, se reservan enteros de una vez y muestran semana a semana si el paciente va al día.',
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
    description: 'Facturas al momento, bonos de sesiones que puede usar toda la familia y membresías con cobro recurrente automatizado vía Stripe. Cada plan de tratamiento dice cómo se paga — por visita, con un bono o con una membresía — y la facturación legal de tus membresías puede ir en automático, sin perseguir pagos cada mes.',
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
    description: 'Crea tus propios formularios de intake y consentimiento con un generador simple de arrastrar y soltar, con firma y diagramas corporales sobre los que el paciente marca dónde le duele. Los rellena en su idioma desde el móvil antes de la cita, o en el iPad de recepción al llegar.',
    short: 'Intake y consentimiento con firma y diagrama corporal. El paciente los rellena desde el móvil antes de llegar, o en el iPad de recepción.',
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
    description: 'Ocupación, ingresos, PVA (precio medio por visita), retención, conversión, número de primeras visitas y estadísticas por profesional, al minuto y comparadas con el periodo anterior — no solo cuántas visitas tienes, sino cómo evoluciona tu negocio día a día. Además, cuánto esperan tus pacientes y cuánto duran las sesiones, cada mensaje enviado por cualquier canal, y paneles propios que descargas en PDF.',
    short: 'Ocupación, PVA, retención y conversión comparadas con el periodo anterior, tiempos de espera y paneles propios que descargas en PDF.',
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
      {
        title: 'Doble factor al entrar',
        body: 'Cada persona puede proteger su acceso con un código de una app de autenticación, y tu clínica puede exigirlo a todo el equipo. Una contraseña robada, por sí sola, no abre ninguna ficha.',
      },
      {
        title: 'Registro de actividad',
        body: 'Quién ha abierto o cambiado cada ficha, y quién ha entrado y cuándo, queda registrado y lo consultas desde Ajustes. Y si mandas un informe por WhatsApp, va en un PDF que solo se abre con el DNI o NIE del paciente.',
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
      'Reserva online 24/7 para tus pacientes',
      'Formularios digitales de intake y consentimiento',
      'Facturas legales automáticas para bonos y membresías',
      'Estadísticas de retención, conversión y valor por visita',
      'Lista de espera: reoferta automática de huecos cancelados',
      'Alerta cuando un paciente se retrasa en su plan de tratamiento',
      'Campaña automática de agradecimiento a pacientes que refieren',
      'Solicitud automática de reseña de Google tras la visita',
      'Recepcionista con IA que contesta y reserva citas',
      'Análisis postural a partir de fotos',
      'Biblioteca de ejercicios con vídeo para el paciente',
      'Precio de entrada publicado en su propia web',
    ],
    footnote: 'Comparativa elaborada a partir de la información publicada en las webs oficiales de cada proveedor, o confirmada por el propio proveedor (octubre de 2026). Un "—" indica que el proveedor no lo muestra públicamente, no que no exista — confirma directamente con cada uno antes de decidir.',
  },

  pricing: {
    badge: 'Precios',
    title: 'Precio por profesional, no por paciente',
    description: 'Pacientes ilimitados en todos los planes. Solo pagas por los profesionales que pasan consulta — recepción y administración son gratis e ilimitados.',
    monthly: 'Mensual',
    annual: 'Anual',
    annualSave: 'Ahorra un 10%',
    perMonth: '/mes',
    billedAnnually: 'facturado anualmente',
    // Was "Más elegido", which asserts a fact about customer distribution we
    // cannot yet back. "Recomendado" carries the same signal honestly.
    mostChosen: 'Recomendado',
    extraPro: 'Profesional adicional: 19 €/mes',
    growthAddOn: 'Growth (captación, recepcionista con IA y reputación): +39 €/mes',
    receptionistAddOn: 'Solo la recepcionista con IA: +19 €/mes',
    // The trial button now opens the real sign-up at app.quiroflow.com, and
    // the call has its own separate button. Before, both promises were on one
    // button that only ever led to a calendar.
    cta: 'Empezar prueba de 15 días',
    ctaSecondary: 'Hablar con el equipo',
    exVat: 'sin IVA',
    vatNote: 'Precios sin IVA. Se añade un 21% en la factura.',
    // What the app bills (addons.verifactu, 750 cents per active location),
    // and only from the day a clinic goes live -- test mode is free.
    verifactuNote: 'VeriFactu: 7,50 €/mes por sede, solo desde el día en que empiezas a enviar a la AEAT.',
    receptionistNote: 'Recepcionista con IA: 19 €/mes (17 €/mes en anual) por sí sola, o incluida en Growth y en los planes Practice y Clinic. 1.000 respuestas al mes incluidas; cada 1.000 más, 15 €.',
    ctaNote: '15 días de prueba. Sin tarjeta. Migración incluida.',
    anchor: {
      title: 'Con lo que cuesta un hueco perdido a la semana',
      body: 'Una cancelación que no se vuelve a llenar, a 45 € la sesión, son unos 180 € al mes. El plan Practice cuesta 99 €. La reoferta automática del hueco y el aviso de paciente retrasado existen justamente para tapar ese agujero.',
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
          'App para tu equipo y tus pacientes',
        ],
      },
      practice: {
        name: 'Practice',
        for: 'Hasta 4 profesionales, 1 sede',
        features: [
          'Todo lo de Solo',
          'Roles y permisos personalizados',
          'Informes avanzados: PVA, retención y conversión',
          'Profesionales adicionales a 19 €/mes',
          'Growth incluido: captación, recepcionista con IA y reputación',
        ],
      },
      clinic: {
        name: 'Clinic',
        for: 'Profesionales ilimitados, sedes ilimitadas',
        features: [
          'Todo lo de Practice',
          'Multi-sede',
          'API y webhooks',
          'Migración asistida y soporte prioritario',
          'Growth incluido: captación, recepcionista con IA y reputación',
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
        q: '¿Qué hace la recepcionista con IA y cuánto cuesta?',
        a: 'Contesta los WhatsApp de tus pacientes y de quien te escribe por primera vez, con la información que tú le das de la clínica y los huecos reales de tu agenda, y reserva o mueve la cita cuando el paciente elige una hora. Tú eliges si contesta sola (fuera de horario, o también en horario) o si deja borradores para que los apruebes, y lo que no le corresponde lo pasa a una persona. Cuesta 19 €/mes (17 €/mes en anual) e incluye 1.000 respuestas al mes; cada 1.000 más son 15 €, y puedes ponerle un límite mensual. Está incluida en Growth y en los planes Practice y Clinic.',
      },
      {
        q: '¿QuiroFlow está preparado para VeriFactu?',
        a: 'Sí. Cada factura lleva su QR, se encadena con la anterior y se envía a la AEAT automáticamente. Puedes enviar con el certificado de tu clínica o autorizar a QuiroFlow para que envíe por ti. Hasta el 1 de enero de 2027 funciona en modo de pruebas, sin coste; a partir de ese día, el envío real cuesta 7,50 € al mes por sede.',
      },
      {
        q: '¿Hay app para el móvil?',
        a: 'Sí, para iPhone, iPad y Android. Tu equipo tiene la agenda, las fichas, los cobros y la bandeja en el móvil, y tus pacientes usan la misma app para confirmar sus citas, pagar y hacer sus ejercicios. Está incluida en todos los planes.',
      },
      {
        q: '¿Sirve si no soy quiropráctico?',
        a: 'Sí. QuiroFlow se usa en clínicas de quiropráctica, fisioterapia, osteopatía y podología. Los tipos de sesión, las salas, los formularios y los planes de tratamiento los defines tú, así que la herramienta se adapta a cómo trabajas en lugar de imponerte un flujo.',
      },
      {
        q: '¿Qué incluye la prueba de 15 días?',
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
    description: 'Abre una prueba de 15 días sin tarjeta, o cuéntanos cómo trabajáis y te enseñamos cómo encaja QuiroFlow.',
    cta: 'Empezar prueba de 15 días',
    ctaSecondary: 'Reservar una demo',
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
    ctaPrimary: 'Empezar prueba de 15 días',
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
        description: 'Un plan de cuidado quiropráctico se sostiene en la cadencia: dos por semana, luego una, luego mantenimiento. QuiroFlow conoce la cadencia de cada paciente, reserva el plan entero de una vez, te enseña semana a semana si va al día y te avisa cuando alguien se retrasa, mientras todavía estás a tiempo de recuperarlo — en vez de descubrirlo revisando la agenda dos meses después.',
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
        description: 'Historial clínico digital con la valoración inicial, notas S/O/A/P de cada ajuste y los listados vertebrales al lado, marcados por segmento a izquierda o derecha, con un toque para repetir los de la última visita. Los formularios de primera visita y el consentimiento informado los rellena el paciente desde el móvil antes de llegar.',
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
          a: 'Sí. Cada plan se define como N visitas cada M semanas (por ejemplo, dos por semana durante un mes y luego una cada dos semanas), se reserva entero de una vez y QuiroFlow lo sigue paciente a paciente, avisándote cuando alguien se retrasa respecto a su cadencia.',
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
      description: 'Abre una prueba de 15 días sin tarjeta, o cuéntanos cómo trabajáis y te enseñamos cómo encaja en tu clínica quiropráctica.',
      button: 'Empezar prueba de 15 días',
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
    ctaPrimary: 'Empezar prueba de 15 días',
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
        description: 'Historia clínica digital con la valoración inicial, la evolución sesión a sesión en notas S/O/A/P y las pruebas que quieras adjuntar. Los formularios de anamnesis y el consentimiento informado los rellena el paciente desde el móvil antes de llegar, y puede marcar sobre un diagrama corporal dónde le duele.',
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
      description: 'La fisioterapia rara vez se juega en una sola sesión. Se juega en si el paciente completa el plan y en lo que hace entre sesión y sesión.',
      items: [
        {
          title: 'Te avisa antes de que un paciente deje de venir',
          body: 'Un tratamiento se pierde en el hueco entre sesiones, no en la consulta. Si un paciente con un plan activo se retrasa respecto a su propia cadencia, QuiroFlow te avisa mientras todavía estás a tiempo de recuperarlo, en vez de que lo descubras al revisar la agenda dos meses después.',
        },
        {
          title: 'Ejercicios en casa, y aviso si los deja',
          body: 'Asigna un programa de ejercicios con vídeo o foto desde la ficha. El paciente lo sigue en la app con un recordatorio diario, y si deja de hacerlos aparece junto a los planes con retraso, mientras todavía puedes corregirlo.',
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
          q: '¿Puedo mandar ejercicios para casa?',
          a: 'Sí. Desde la ficha asignas ejercicios sueltos o un programa entero, con tu propio vídeo o foto. El paciente los ve en la app con un recordatorio diario, marca los que hace, y QuiroFlow te avisa cuando deja de hacerlos.',
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
      description: 'Abre una prueba de 15 días sin tarjeta, o cuéntanos cómo trabajáis y te enseñamos cómo encaja en tu centro de fisioterapia.',
      button: 'Empezar prueba de 15 días',
      buttonSecondary: 'Reservar una demo',
    },
    mockups: {
      invoiceItem: 'Sesión de fisioterapia x1',
      calendarType: 'Sesión',
    },
  },

  // Built only from what the app does for every clinic: there is nothing
  // osteopathy-specific in QuiroFlow, so this page says how the shared tools
  // fit an osteopath's week rather than inventing features for it.
  osteopatia: {
    badge: 'Osteopatía',
    title: 'Software de gestión para centros de osteopatía',
    description: 'Agenda con sala asignada automáticamente, anamnesis y diagrama corporal que el paciente rellena desde el móvil antes de la primera visita, notas de cada sesión con sus pruebas adjuntas y revisiones que no se olvidan. Para el osteópata que trabaja solo y para centros de varias sedes.',
    ctaPrimary: 'Empezar prueba de 15 días',
    ctaSecondary: 'Reservar una demo',
    seeFeatures: 'Ver cómo funciona',
    features: {
      agenda: {
        eyebrow: 'Agenda',
        title: 'Primeras visitas y revisiones, cada una con su sala',
        description: 'Una primera visita de osteopatía no dura lo mismo que una revisión. Defines cada tipo de sesión con su duración y QuiroFlow asigna la sala libre al crear la cita, así que nunca acabas con dos pacientes en la misma camilla. Vista por día o por semana, y varias sedes desde la misma cuenta.',
      },
      historia: {
        eyebrow: 'Anamnesis y diagrama corporal',
        title: 'La anamnesis, hecha antes de que entre por la puerta',
        description: 'El formulario de primera visita y el consentimiento informado los rellena el paciente desde el móvil antes de venir, y marca con el dedo sobre un diagrama corporal dónde le duele. El diagrama lo eliges tú: subes la imagen que ya usas en consulta. En cada sesión escribes tus notas en la ficha, junto a los informes y las pruebas de imagen que adjuntes en PDF o en foto.',
      },
      revisiones: {
        eyebrow: 'Revisiones y WhatsApp',
        title: 'El paciente que tenía que volver, vuelve',
        description: 'Mucha osteopatía vive de la revisión al cabo de unos meses. QuiroFlow lista los pacientes que llevan tiempo sin cita para que recepción los contacte, y los recordatorios por WhatsApp con botón para confirmar o cambiar la cita reducen las ausencias. Si alguien cancela, el hueco se ofrece solo al primero de la lista de espera.',
      },
      bonos: {
        eyebrow: 'Bonos y facturación',
        title: 'Bonos, cobros y facturas desde la misma ficha',
        description: 'Vende bonos de sesiones que se descuentan solos en cada visita, cobra con tarjeta o en caja y emite la factura desde la ficha del paciente. Preparado para VeriFactu: QR y envío a la AEAT desde el día en que pases a producción.',
      },
      informes: {
        eyebrow: 'Informes',
        title: 'Ocupación, ingresos y pacientes que repiten',
        description: 'Ocupación por profesional y por sala, ingresos, precio medio por visita y retención, al minuto y comparados con el periodo anterior, sin exportar nada a una hoja de cálculo.',
      },
    },
    edge: {
      title: 'Dos cosas que una consulta de osteopatía agradece',
      description: 'Documentar la evolución sin perder tiempo, y que el paciente no se quede a medias.',
      items: [
        {
          title: 'Análisis postural a partir de fotos',
          body: 'Haz fotos de frente, de lado y de espaldas con el móvil o el iPad. QuiroFlow coloca los puntos de referencia, tú los ajustas y guarda las mediciones para compararlas en la revaloración. Son estimaciones para documentar la evolución, no un diagnóstico.',
        },
        {
          title: 'Planes de tratamiento con aviso de retraso',
          body: 'Si propones varias sesiones, reservas el plan entero de una vez y QuiroFlow te avisa cuando un paciente se sale de su cadencia, mientras todavía estás a tiempo de llamarle.',
        },
      ],
    },
    faq: {
      title: 'Preguntas frecuentes',
      items: [
        {
          q: '¿Sirve QuiroFlow si soy un osteópata que trabaja solo?',
          a: 'Sí. Funciona igual para una consulta individual que para un centro con varias salas y profesionales. El plan Solo es para un profesional y una sede, y solo pagas por los profesionales que pasan consulta: recepción y administración son gratis.',
        },
        {
          q: '¿Puedo usar mi propio diagrama corporal?',
          a: 'Sí. En el editor de formularios añades un bloque de imagen para dibujar y subes el diagrama que quieras. El paciente marca encima con el dedo desde el móvil, y lo que marca queda guardado en su ficha.',
        },
        {
          q: '¿Cómo hago el seguimiento de los pacientes que vuelven cada pocos meses?',
          a: 'La lista de recordatorios muestra los pacientes que llevan tiempo sin cita, contando desde la última visita a la que vinieron. Recepción los contacta desde ahí, los pospone hasta una fecha o los descarta, y el paciente vuelve a aparecer solo si deja de venir otra vez.',
        },
        {
          q: '¿Está preparado para VeriFactu?',
          a: 'Sí. Cada factura lleva su QR, se encadena con la anterior y se envía a la AEAT automáticamente desde el día en que pasas a producción. Hasta entonces funciona en modo de pruebas, sin coste; desde ese día cuesta 7,50 € al mes por sede.',
        },
        {
          q: '¿Puedo migrar desde el programa que uso ahora?',
          a: 'Sí. Importamos pacientes y citas desde el export de tu programa actual, y desde cualquier otro sistema puedes importar por CSV mapeando tus propias columnas. La migración está incluida.',
        },
        {
          q: '¿Cómo se tratan los datos de los pacientes?',
          a: 'Conforme al RGPD y a la LOPDGDD, con los datos alojados en servidores de la Unión Europea. QuiroFlow actúa como encargado del tratamiento y firma el contrato correspondiente con cada clínica, que sigue siendo la responsable de los datos de sus pacientes.',
        },
      ],
    },
    cta: {
      title: 'Ve QuiroFlow con los datos de tu consulta',
      description: 'Abre una prueba de 15 días sin tarjeta, o cuéntanos cómo trabajáis y te enseñamos cómo encaja en tu centro de osteopatía.',
      button: 'Empezar prueba de 15 días',
      buttonSecondary: 'Reservar una demo',
    },
    mockups: {
      invoiceItem: 'Sesión de osteopatía x1',
      calendarType: 'Osteopatía',
    },
  },

  // Same rule as osteopatia: only what the app already does. Products with
  // stock is the one tool here a podologist uses more than anyone else.
  podologia: {
    badge: 'Podología',
    title: 'Software de gestión para clínicas de podología',
    description: 'Agenda por gabinete con quiropodias cortas y estudios largos en el mismo día, fotos e informes en la ficha del paciente, venta de productos con su stock y revisiones periódicas que no se olvidan. Para la consulta de un podólogo y para clínicas de varias sedes.',
    ctaPrimary: 'Empezar prueba de 15 días',
    ctaSecondary: 'Reservar una demo',
    seeFeatures: 'Ver cómo funciona',
    features: {
      agenda: {
        eyebrow: 'Agenda por gabinete',
        title: 'Quiropodias cortas y estudios largos, en el mismo gabinete',
        description: 'Cada tipo de visita con su duración: una quiropodia de veinte minutos, un estudio biomecánico de una hora. QuiroFlow asigna el gabinete libre al crear la cita, así que nunca acabas con dos pacientes citados en el mismo sillón. Vista por día o por semana, y varias sedes desde la misma cuenta.',
      },
      historia: {
        eyebrow: 'Historia clínica, fotos e informes',
        title: 'La evolución de cada lesión, con sus fotos',
        description: 'Antecedentes, anamnesis y consentimiento los rellena el paciente desde el móvil antes de venir, y puede marcar sobre un diagrama del pie que subes tú. En cada visita escribes tus notas y adjuntas fotos o informes en PDF, que se ven en la propia ficha sin tener que descargarlos.',
      },
      productos: {
        eyebrow: 'Productos y stock',
        title: 'Lo que vendes en el mostrador, con su stock',
        description: 'Cremas, calzado o plantillas prefabricadas: cada producto con su IVA, su stock y su mínimo. La venta se hace desde la ficha del paciente junto a la sesión, y el stock solo se mueve con una entrada, un ajuste con motivo o una venta, así que la estantería cuadra con la lista.',
      },
      revisiones: {
        eyebrow: 'Revisiones y WhatsApp',
        title: 'La revisión de cada pocas semanas, sin depender de la memoria',
        description: 'QuiroFlow lista los pacientes que llevan tiempo sin cita para que recepción los contacte antes de que se vayan a otra consulta, y los recordatorios por WhatsApp con botón para confirmar o cambiar la cita reducen las ausencias. Si alguien cancela, el hueco se ofrece solo al primero de la lista de espera.',
      },
      reserva: {
        eyebrow: 'Reserva online',
        title: 'Una página de reservas con tu marca',
        description: 'Tu clínica tiene su propia página pública de reservas, con tus horarios reales y la disponibilidad de cada podólogo. El paciente reserva sin llamar y la cita entra directa en la agenda.',
      },
    },
    edge: {
      title: 'Dos cosas que una clínica de podología agradece',
      description: 'Que el paciente vuelva cuando le toca, y que lo cuente.',
      items: [
        {
          title: 'Bonos y facturas preparadas para VeriFactu',
          body: 'Vende bonos de sesiones que se descuentan solos en cada visita y emite la factura desde la misma ficha, con la sesión y los productos juntos. Con el QR y el envío a la AEAT desde el día en que pases a producción.',
        },
        {
          title: 'La reseña de Google se pide sola',
          body: 'Tras la visita, QuiroFlow puede pedir la valoración automáticamente: las notas bajas te llegan a ti, y a las altas se les invita a dejar la reseña en Google. Para una clínica que compite en búsquedas locales, esa constancia pesa.',
        },
      ],
    },
    faq: {
      title: 'Preguntas frecuentes',
      items: [
        {
          q: '¿Sirve QuiroFlow si soy un podólogo que trabaja solo?',
          a: 'Sí. Funciona igual para una consulta individual que para una clínica con varios gabinetes y profesionales. El plan Solo es para un profesional y una sede, y solo pagas por los profesionales que pasan consulta: recepción y administración son gratis.',
        },
        {
          q: '¿Puedo vender productos y llevar el stock?',
          a: 'Sí. Cada producto tiene su IVA, su stock con un mínimo y el coste de la última entrada para ver el margen. Lo vendes desde la ficha del paciente y el stock se descuenta solo.',
        },
        {
          q: '¿Puedo guardar fotos de la evolución de una lesión?',
          a: 'Sí. Adjuntas fotos e informes en PDF a la ficha del paciente y se ven en la propia ficha, sin descargarlos, con la fecha y quién los subió.',
        },
        {
          q: '¿Puedo usar un diagrama del pie en mis formularios?',
          a: 'Sí. En el editor de formularios añades un bloque de imagen para dibujar y subes el diagrama que quieras. El paciente marca encima con el dedo desde el móvil, y lo que marca queda guardado en su ficha.',
        },
        {
          q: '¿Los pacientes pueden reservar cita online?',
          a: 'Sí. Cada clínica tiene su propia página de reservas con la disponibilidad real de cada podólogo. La cita entra directamente en tu agenda, sin llamadas ni confirmaciones manuales.',
        },
        {
          q: '¿Puedo migrar desde el programa que uso ahora?',
          a: 'Sí. Importamos pacientes y citas desde el export de tu programa actual, y desde cualquier otro sistema puedes importar por CSV mapeando tus propias columnas. La migración está incluida.',
        },
        {
          q: '¿Cómo se tratan los datos de los pacientes?',
          a: 'Conforme al RGPD y a la LOPDGDD, con los datos alojados en servidores de la Unión Europea. QuiroFlow actúa como encargado del tratamiento y firma el contrato correspondiente con cada clínica, que sigue siendo la responsable de los datos de sus pacientes.',
        },
      ],
    },
    cta: {
      title: 'Ve QuiroFlow con los datos de tu clínica',
      description: 'Abre una prueba de 15 días sin tarjeta, o cuéntanos cómo trabajáis y te enseñamos cómo encaja en tu clínica de podología.',
      button: 'Empezar prueba de 15 días',
      buttonSecondary: 'Reservar una demo',
    },
    mockups: {
      invoiceItem: 'Quiropodia x1',
      calendarType: 'Quiropodia',
    },
  },

  // Landing de campaña para el ángulo de automatizaciones. Las secciones de
  // producto reutilizan receptionist/whatsapp/waitlist/booking en vez de
  // duplicar texto: si cambia la funcionalidad, cambia en un sitio.
  automatizaciones: {
    badge: 'Automatizaciones',
    title: 'Tu clínica contesta, recuerda y recupera pacientes sola',
    description: 'La recepcionista con IA responde tu WhatsApp y reserva la cita, los recordatorios se confirman en un toque, el hueco que se cancela se reofrece solo y te avisa cuando un paciente se retrasa en su plan. Tú estás en la camilla, no en el móvil.',
    ctaPrimary: 'Empezar prueba de 15 días',
    ctaSecondary: 'Reservar una demo',
    seeFeatures: 'Ver cómo funciona',
    sectionTitle: 'Las cuatro cosas que dejas de hacer a mano',
    edge: {
      title: 'Qué cambia en la semana de una clínica',
      description: 'No es "ahorrar tiempo" en abstracto. Son cuatro agujeros concretos que se tapan solos.',
      items: [
        {
          title: 'El WhatsApp de las 23:00',
          body: 'Quien te escribe fuera de horario recibe respuesta, huecos reales de tu agenda y la cita reservada. No espera a mañana — y mañana no se ha ido a otra clínica.',
        },
        {
          title: 'La cancelación de última hora',
          body: 'Una sesión que no se vuelve a llenar, a 45 € la sesión, son unos 180 € al mes. El hueco se ofrece solo al primero de la lista de espera, con enlace para reservarlo al momento.',
        },
        {
          title: 'El paciente que deja de venir',
          body: 'Si alguien con un plan activo se retrasa respecto a su propia cadencia, te avisa antes de que desaparezca. No dos meses después, cuando ya no vuelve.',
        },
        {
          title: 'Las llamadas para confirmar',
          body: 'Los recordatorios llevan botón para confirmar o cambiar la cita. Lo que el paciente responde entra en la agenda sin que nadie lo teclee.',
        },
      ],
    },
    faq: {
      title: 'Preguntas sobre las automatizaciones',
      items: [
        {
          q: '¿La recepcionista con IA puede cancelar una cita?',
          a: 'No. Reserva y mueve citas, pero nunca cancela. Lo que no le toca lo pasa a una persona, con una nota en la conversación para que sepa por dónde iba.',
        },
        {
          q: '¿Contesta siempre o solo fuera de horario?',
          a: 'Lo decides tú. Puede contestar sola siempre, solo fuera de horario, o limitarse a dejar un borrador para que lo apruebes antes de que salga.',
        },
        {
          q: '¿Qué sabe decir de mi clínica?',
          a: 'Lo que tú le cuentes: precios, horarios, qué tratáis y qué no. Los huecos que ofrece son los reales de tu agenda, no inventados.',
        },
        {
          q: '¿Está todo incluido en el precio?',
          a: 'Los recordatorios por WhatsApp, la lista de espera y los avisos de plan de tratamiento están en todos los planes. La recepcionista con IA forma parte del add-on Growth, 39 €/mes + IVA, y va incluida en los planes Practice y Clinic.',
        },
      ],
    },
    cta: {
      title: 'Pruébalo con tu propia agenda',
      description: '15 días, sin tarjeta y con la migración incluida. Si no te encaja, no has perdido nada.',
      button: 'Empezar prueba de 15 días',
      buttonSecondary: 'Reservar una demo',
    },
  },

  footer: {
    productTitle: 'Producto',
    sectorsTitle: 'Por especialidad',
    companyTitle: 'Empresa',
    features: 'Funcionalidades',
    automations: 'Automatizaciones',
    pricing: 'Precios',
    comparison: 'Comparar',
    migrate: 'Cambiar de programa',
    chiro: 'Quiropráctica',
    physio: 'Fisioterapia',
    osteo: 'Osteopatía',
    podo: 'Podología',
    resources: 'Recursos',
    copyright: '© 2026 QuiroFlow. Todos los derechos reservados.',
    privacy: 'Política de privacidad',
    terms: 'Aviso legal',
    verifactu: 'Declaración responsable VERI*FACTU',
    verifactuGuide: 'VERI*FACTU para clínicas',
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

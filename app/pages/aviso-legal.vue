<script setup lang="ts">
const { locale } = useLocale()

interface Section {
  heading: string
  parts: ({ type: 'p'; text: string } | { type: 'h3'; text: string } | { type: 'list'; items: string[] })[]
}

// Adapted from columnaquiro.com's own Aviso Legal — same legal entity
// (COLUMNAQUIRO S.L.) operates both sites, so the LSSI-CE identity block is
// the same; only the brand framing and contact email change for QuiroFlow.
const content: Record<'es' | 'en', { title: string; sections: Section[]; seoDescription: string }> = {
  es: {
    title: 'Aviso Legal y Condiciones Generales de Uso',
    sections: [
      {
        heading: '1. INFORMACIÓN GENERAL',
        parts: [
          {
            type: 'p',
            text: 'En cumplimiento con el deber de información dispuesto en la Ley 34/2002 de Servicios de la Sociedad de la Información y el Comercio Electrónico (LSSI-CE) de 11 de julio, se facilitan a continuación los siguientes datos de información general de este sitio web:',
          },
          {
            type: 'list',
            items: [
              'Identidad: COLUMNAQUIRO S.L. con NIF B16365504, titular de QuiroFlow, en adelante "el Titular"',
              'Dirección: Calle dels vivons, 29 - 0 iz, 46006, Valencia',
              'Teléfono: 744735363',
              'Email de contacto: hola@quiroflow.com',
              'La empresa se encuentra inscrita en el Registro Mercantil de Valencia: Tomo 11548, Libro 8826, Folio 61, Sección 8, Hoja V-217556.',
            ],
          },
        ],
      },
      {
        heading: '2. TÉRMINOS Y CONDICIONES GENERALES DE USO',
        parts: [
          { type: 'h3', text: 'El objeto de las condiciones: el Sitio Web y el Servicio' },
          {
            type: 'p',
            text: 'El objeto de las presentes Condiciones Generales de Uso (en adelante, Condiciones) es regular el acceso y la utilización de este sitio web y del software QuiroFlow (en adelante, el Servicio). A los efectos de las presentes Condiciones se entenderá como Sitio Web: la apariencia externa de los interfaces de pantalla, tanto de forma estática como de forma dinámica, es decir, el árbol de navegación; y todos los elementos integrados tanto en los interfaces de pantalla como en el árbol de navegación (en adelante, Contenidos) y todos aquellos servicios o recursos en línea que en su caso ofrezca a los Usuarios (en adelante, Servicios).',
          },
          {
            type: 'p',
            text: 'El Titular se reserva la facultad de modificar, en cualquier momento, y sin aviso previo, la presentación y configuración del Sitio Web y de los Contenidos y Servicios que en él pudieran estar incorporados. El Usuario reconoce y acepta que en cualquier momento el Titular pueda interrumpir, desactivar y/o cancelar cualquiera de estos elementos que se integran en el Sitio Web o el acceso a los mismos.',
          },
          {
            type: 'p',
            text: 'El acceso al Sitio Web por el Usuario tiene carácter libre y, por regla general, es gratuito sin que el Usuario tenga que proporcionar una contraprestación para poder disfrutar de ello, salvo en lo relativo al coste de conexión a través de la red de telecomunicaciones suministrada por el proveedor de acceso que hubiere contratado el Usuario. El acceso y uso del Servicio (la aplicación QuiroFlow) por parte de una clínica está sujeto, además, a las condiciones comerciales acordadas en el contrato de suscripción correspondiente.',
          },
          {
            type: 'p',
            text: 'La utilización de alguno de los Contenidos o Servicios del Sitio Web podrá hacerse mediante la suscripción o registro previo del Usuario.',
          },
          { type: 'h3', text: 'El Usuario' },
          {
            type: 'p',
            text: 'El acceso, la navegación y uso del Sitio Web confiere la condición de Usuario, por lo que se aceptan, desde que se inicia la navegación por el Sitio Web, todas las Condiciones aquí establecidas, así como sus ulteriores modificaciones, sin perjuicio de la aplicación de la correspondiente normativa legal de obligado cumplimiento según el caso. Dada la relevancia de lo anterior, se recomienda al Usuario leerlas cada vez que visite el Sitio Web.',
          },
          {
            type: 'p',
            text: 'El Usuario asume su responsabilidad para realizar un uso correcto del Sitio Web. Esta responsabilidad se extenderá a:',
          },
          {
            type: 'list',
            items: [
              'Un uso de la información, Contenidos y/o Servicios y datos ofrecidos por el Titular sin que sea contrario a lo dispuesto por las presentes Condiciones, la Ley, la moral o el orden público, o que de cualquier otro modo puedan suponer lesión de los derechos de terceros o del mismo funcionamiento del Sitio Web.',
              'La veracidad y licitud de las informaciones aportadas por el Usuario en los formularios extendidos por el Titular para el acceso a ciertos Contenidos o Servicios ofrecidos por el Sitio Web.',
            ],
          },
        ],
      },
      {
        heading: '3. ACCESO Y NAVEGACIÓN EN EL SITIO WEB: EXCLUSIÓN DE GARANTÍAS Y RESPONSABILIDAD',
        parts: [
          {
            type: 'p',
            text: 'El Titular no garantiza la continuidad, disponibilidad y utilidad del Sitio Web, ni de los Contenidos o Servicios. El Titular hará todo lo posible por el buen funcionamiento del Sitio Web, sin embargo, no se responsabiliza ni garantiza que el acceso a este Sitio Web no vaya a ser ininterrumpido o que esté libre de error.',
          },
          {
            type: 'p',
            text: 'Tampoco se responsabiliza o garantiza que el contenido o software al que pueda accederse a través de este Sitio Web esté libre de error o cause un daño al sistema informático (software y hardware) del Usuario.',
          },
        ],
      },
      {
        heading: '4. POLÍTICA DE ENLACES',
        parts: [
          {
            type: 'p',
            text: 'Se informa que el Sitio Web del Titular pone o puede poner a disposición de los Usuarios medios de enlace (como, entre otros, links, banners, botones), directorios y motores de búsqueda que permiten a los Usuarios acceder a sitios web pertenecientes y/o gestionados por terceros.',
          },
        ],
      },
      {
        heading: '5. COMUNICACIONES COMERCIALES POR VÍA ELECTRÓNICA',
        parts: [
          {
            type: 'p',
            text: 'Al dejarnos sus datos de contacto, previo consentimiento otorgado por el Usuario, remitiremos información sobre nuestros servicios. El envío de dichas comunicaciones comerciales sobre actividades, servicios, ofertas, promociones especiales, etc. podrá efectuarse por cualquier medio, incluyendo correo electrónico.',
          },
        ],
      },
      {
        heading: '6. PROPIEDAD INTELECTUAL E INDUSTRIAL',
        parts: [
          {
            type: 'p',
            text: 'El Titular por sí o como parte cesionaria, es titular de todos los derechos de propiedad intelectual e industrial del Sitio Web y del software QuiroFlow, así como de los elementos contenidos en el mismo.',
          },
        ],
      },
      {
        heading: '7. ACCIONES LEGALES, LEGISLACIÓN APLICABLE Y JURISDICCIÓN',
        parts: [
          {
            type: 'p',
            text: 'El Titular se reserva la facultad de presentar las acciones civiles o penales que considere necesarias por la utilización indebida del Sitio Web y Contenidos, o por el incumplimiento de las presentes Condiciones.',
          },
        ],
      },
    ],
    seoDescription: 'Aviso legal y condiciones generales de uso de QuiroFlow, software de gestión para clínicas quiroprácticas.',
  },
  en: {
    title: 'Legal Notice and General Conditions of Use',
    sections: [
      {
        heading: '1. GENERAL INFORMATION',
        parts: [
          {
            type: 'p',
            text: 'In compliance with the duty of information provided for in Law 34/2002 on Information Society Services and Electronic Commerce (LSSI-CE) of July 11, the following general information is provided below on this website:',
          },
          {
            type: 'list',
            items: [
              'Identity: COLUMNAQUIRO S.L. with NIF B16365504, owner of QuiroFlow, hereinafter "the Owner"',
              'Address: Calle dels vivons, 29 - 0 iz, 46006, Valencia',
              'Telephone: 744735363',
              'Contact email: hola@quiroflow.com',
              'The company is registered in the Commercial Register of Valencia: Volume 11548, Book 8826, Folio 61, Section 8, Sheet V-217556.',
            ],
          },
        ],
      },
      {
        heading: '2. GENERAL TERMS AND CONDITIONS OF USE',
        parts: [
          { type: 'h3', text: 'The object of the conditions: the Website and the Service' },
          {
            type: 'p',
            text: 'The purpose of these General Conditions of Use (hereinafter, Conditions) is to regulate access and use of this website and of the QuiroFlow software (hereinafter, the Service). For the purposes of these Conditions, a Website shall be understood as: the external appearance of the screen interfaces, both statically and dynamically, that is, the navigation tree; and all the elements integrated both in the screen interfaces and in the navigation tree (hereinafter, Contents) and all those online services or resources that it may offer to Users (hereinafter, Services).',
          },
          {
            type: 'p',
            text: 'The Owner reserves the right to modify, at any time, and without prior notice, the presentation and configuration of the Website and the Contents and Services that may be incorporated therein. The User acknowledges and accepts that at any time the Owner may interrupt, deactivate and/or cancel any of these elements that are integrated into the Website or access to them.',
          },
          {
            type: 'p',
            text: "Access to the Website by the User is free and, as a general rule, is free of charge without the User having to provide consideration to be able to enjoy it, except for the cost of connecting through the telecommunications network provided by the access provider that the User has contracted. Access to and use of the Service (the QuiroFlow application) by a clinic is additionally subject to the commercial terms agreed in the corresponding subscription agreement.",
          },
          {
            type: 'p',
            text: "The use of any of the Contents or Services of the Website may be done with the User's prior subscription or registration.",
          },
          { type: 'h3', text: 'The User' },
          {
            type: 'p',
            text: 'Access, navigation and use of the Website confers the status of User, and therefore, from the beginning of browsing the Website, all the Conditions established here, as well as their subsequent modifications, are accepted, without prejudice to the application of the corresponding mandatory legal regulations as appropriate. Given the relevance of the above, the User is recommended to read them each time they visit the Website.',
          },
          {
            type: 'p',
            text: 'The User assumes their responsibility to make proper use of the Website. This responsibility will extend to:',
          },
          {
            type: 'list',
            items: [
              'Use of the information, Contents and/or Services and data offered by the Owner that is not contrary to the provisions of these Conditions, the Law, morals or public order, or that in any other way may violate the rights of third parties or the operation of the Website.',
              "The veracity and legality of the information provided by the User in the forms issued by the Owner for access to certain Content or Services offered by the Website.",
            ],
          },
        ],
      },
      {
        heading: '3. ACCESS AND NAVIGATION ON THE WEBSITE: EXCLUSION OF GUARANTEES AND LIABILITY',
        parts: [
          {
            type: 'p',
            text: 'The Owner does not guarantee the continuity, availability and usefulness of the Website, nor of the Contents or Services. The Owner will do everything possible for the proper functioning of the Website, however, it is not responsible for nor does it guarantee that access to this Website will be uninterrupted or error-free.',
          },
          {
            type: 'p',
            text: "Nor is it responsible for or does it guarantee that the content or software accessible through this Website is error-free or that it will not cause damage to the User's computer system (software and hardware).",
          },
        ],
      },
      {
        heading: '4. LINK POLICY',
        parts: [
          {
            type: 'p',
            text: "It is reported that the Owner's Website makes or may make available to Users linking means (such as, among others, links, banners, buttons), directories and search engines that allow Users to access websites owned and/or managed by third parties.",
          },
        ],
      },
      {
        heading: '5. ELECTRONIC COMMERCIAL COMMUNICATIONS',
        parts: [
          {
            type: 'p',
            text: 'By leaving us your contact details, with the prior consent granted by the User, we will send information about our services. Such commercial communications about activities, services, offers, special promotions, etc. may be sent by any means, including email.',
          },
        ],
      },
      {
        heading: '6. INTELLECTUAL AND INDUSTRIAL PROPERTY',
        parts: [
          {
            type: 'p',
            text: 'The Owner, by itself or as an assignee, is the owner of all the intellectual and industrial property rights of the Website and of the QuiroFlow software, as well as the elements contained therein.',
          },
        ],
      },
      {
        heading: '7. LEGAL ACTIONS, APPLICABLE LEGISLATION AND JURISDICTION',
        parts: [
          {
            type: 'p',
            text: 'The Owner reserves the right to bring any civil or criminal actions it deems necessary for the misuse of the Website and Contents, or for breach of these Conditions.',
          },
        ],
      },
    ],
    seoDescription: 'Legal notice and general terms of use for QuiroFlow, practice management software for chiropractic clinics.',
  },
}

const c = computed(() => content[locale.value])

useHead(() => ({
  htmlAttrs: { lang: locale.value },
  title: `${c.value.title} | QuiroFlow`,
  meta: [
    { name: 'description', content: c.value.seoDescription },
    { property: 'og:title', content: `${c.value.title} | QuiroFlow` },
    { property: 'og:description', content: c.value.seoDescription },
    { property: 'og:url', content: 'https://quiroflow.com/aviso-legal' },
    // Legal boilerplate has no value ranking in search results and would
    // only ever compete with the homepage for the same queries -- excluded
    // from the index rather than left to rank on thin/duplicate-feeling content.
    { name: 'robots', content: 'noindex, follow' },
  ],
  link: [{ rel: 'canonical', href: 'https://quiroflow.com/aviso-legal' }],
}))
</script>

<template>
  <section class="mx-auto max-w-3xl space-y-10 px-8 py-24">
    <h1 class="text-[32px] tracking-tightTitle text-ink-900">{{ c.title }}</h1>
    <div v-for="section in c.sections" :key="section.heading" class="space-y-3">
      <h2 class="text-[18px] font-semibold tracking-tightTitle text-ink-900">{{ section.heading }}</h2>
      <template v-for="(part, i) in section.parts" :key="i">
        <h3 v-if="part.type === 'h3'" class="text-[15px] font-semibold text-ink-800">{{ part.text }}</h3>
        <p v-else-if="part.type === 'p'" class="text-[14.5px] leading-[1.7] text-ink-muted">{{ part.text }}</p>
        <ul v-else class="list-disc space-y-1.5 pl-5 text-[14.5px] leading-[1.7] text-ink-muted">
          <li v-for="(item, j) in part.items" :key="j">{{ item }}</li>
        </ul>
      </template>
    </div>
  </section>
</template>

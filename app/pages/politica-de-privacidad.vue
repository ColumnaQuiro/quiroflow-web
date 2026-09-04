<script setup lang="ts">
// English lives at /en/privacy-policy rather than /en/politica-de-privacidad
// -- same reasoning as aviso-legal.vue, and matches columnaquiro.com's own
// /en/privacy-policy route for the equivalent page.
definePageMeta({ i18n: { paths: { en: '/privacy-policy', fr: '/politique-de-confidentialite' } } })

const { locale } = useLocale()
const route = useRoute()

interface Section {
  heading: string
  parts: ({ type: 'p'; text: string } | { type: 'list'; items: string[] })[]
}

// Adapted from columnaquiro.com's own Política de Privacidad — same legal
// entity (COLUMNAQUIRO S.L.) operates both sites, so the RGPD/LOPDGDD
// identity block is the same; only the brand framing and contact email
// change for QuiroFlow, plus a note about clinic/patient data specific to
// software that stores health-adjacent records on behalf of clinics.
const content: Record<'es' | 'en' | 'fr', { title: string; intro: string; sections: Section[]; seoDescription: string }> = {
  es: {
    title: 'Política de Privacidad',
    intro:
      'En cumplimiento de lo dispuesto en el Reglamento General de Protección de Datos 2016/679 (RGPD) y la Ley Orgánica 3/2018 de Protección de Datos y Garantía de los Derechos Digitales (LOPDGDD) de 5 de diciembre de 2018, informamos:',
    sections: [
      {
        heading: '1. RESPONSABLE DEL TRATAMIENTO',
        parts: [
          {
            type: 'list',
            items: [
              'Identidad: COLUMNAQUIRO S.L. con NIF B16365504, titular de QuiroFlow, en adelante "el Titular"',
              'Dirección: Calle dels vivons, 29 - 0 iz, 46006, Valencia',
              'Teléfono: 744735363',
              'Email de contacto: hola@quiroflow.com',
            ],
          },
        ],
      },
      {
        heading: '2. FINALIDAD DEL TRATAMIENTO DE LOS DATOS',
        parts: [
          { type: 'p', text: 'Le informamos que los datos que nos facilite a través de este sitio web se tratarán con la finalidad:' },
          {
            type: 'list',
            items: [
              'Gestionar los servicios proporcionados a través del presente Portal Internet.',
              'Mantenerle informado sobre las actividades, funcionalidades y novedades de QuiroFlow.',
              'Desarrollo, cumplimiento y ejecución del contrato de suscripción al software y consultas relacionadas con el servicio solicitado a través de la WEB.',
              'Atención al cliente.',
            ],
          },
          {
            type: 'p',
            text: 'Asimismo, de conformidad con lo previsto en el RGPD se mantiene un registro de actividades de tratamiento que especifica, según sus finalidades, las actividades de tratamiento llevadas a cabo y las demás circunstancias establecidas en el RGPD.',
          },
          {
            type: 'p',
            text: 'La información personal no podrá ser utilizada para otros fines que los relacionados con los servicios contratados. No se tomarán decisiones automatizadas en base a dicho perfil.',
          },
          {
            type: 'p',
            text: 'Esta política cubre los datos recogidos a través de este sitio web (formularios de contacto, reserva de demo, navegación). El tratamiento de los datos de pacientes que las clínicas clientes introducen dentro de la aplicación QuiroFlow se rige por el contrato de encargado de tratamiento suscrito con cada clínica, en su condición de responsable de esos datos.',
          },
        ],
      },
      {
        heading: '3. LEGITIMACIÓN PARA EL TRATAMIENTO DE DATOS',
        parts: [
          { type: 'p', text: 'La legitimación para el tratamiento de sus datos se basa en:' },
          {
            type: 'list',
            items: [
              'El consentimiento otorgado por el Usuario mediante la aceptación de la presente Política y la casilla correspondiente.',
              'Interés legítimo para atender las solicitudes o consultas que se planteen a través de los distintos medios de contacto.',
              'El Usuario ha aportado sus datos personales en el marco de una relación contractual o precontractual para la atención de su solicitud y/o consulta y, por tanto, su tratamiento es necesario para el mantenimiento de dicha relación.',
              'Las obligaciones legales aplicables al Titular que requieren del tratamiento de los datos personales de acuerdo con los servicios prestados o aquellas relacionadas con cuestiones tributarias.',
            ],
          },
          {
            type: 'p',
            text: 'El Usuario podrá, en cualquier momento, revocar su consentimiento para el tratamiento de sus datos personales. En ningún caso la retirada de estos consentimientos condiciona la prestación del servicio y/o la ejecución de contratos con el Titular.',
          },
        ],
      },
      {
        heading: '4. DATOS PERSONALES QUE SE TRATAN Y PROCEDENCIA',
        parts: [
          {
            type: 'p',
            text: 'Los datos personales que tratamos a través de este sitio web son de carácter identificativo y han sido facilitados por el propio Usuario mediante la cumplimentación del formulario de contacto, la reserva de una demo, el envío de correos electrónicos o el uso de las funcionalidades ofrecidas en el sitio web.',
          },
          {
            type: 'p',
            text: 'El uso de los apartados de contacto, cumplimentación de formularios y/o funcionalidades ofrecidas en el Portal es voluntario. No obstante, la cumplimentación de determinados campos del formulario o su facilitación mediante el uso de otras funcionalidades resultan necesarios para atender y gestionar correctamente su solicitud, por lo que la negativa del Usuario a facilitar la información requerida impedirá al Titular atenderla y gestionarla correctamente.',
          },
          {
            type: 'p',
            text: 'El Usuario garantiza que los datos que nos facilita son veraces, exactos y completos. Se cancelarán, borrarán o bloquearán los datos cuando resulten inexactos, incompletos o hayan dejado de ser necesarios o pertinentes para su finalidad conforme a la legislación vigente.',
          },
        ],
      },
      {
        heading: '5. PROTECCIÓN DE DATOS DE MENORES',
        parts: [
          {
            type: 'p',
            text: 'Según lo establecido en el RGPD y en la LOPDGDD, sólo los mayores de 14 años podrán otorgar su consentimiento para el tratamiento de sus datos personales de forma lícita. Sólo podrán aportar datos personales en este sitio web las personas mayores de 14 años. En caso de menores de 14 años, será condición obligatoria el consentimiento de sus padres o tutores para poder tratar sus datos personales.',
          },
        ],
      },
      {
        heading: '6. PLAZOS DE CONSERVACIÓN DE LOS DATOS PERSONALES',
        parts: [
          {
            type: 'p',
            text: 'Los datos personales proporcionados por el Usuario se conservarán mientras se mantenga la relación con QuiroFlow, mientras el Usuario no solicite su supresión, o durante el plazo legal establecido. Asimismo, podrán conservarse cuando sean necesarios para el cumplimiento de una obligación legal o para la formulación, el ejercicio y la defensa de reclamaciones.',
          },
          {
            type: 'p',
            text: 'Si el Usuario retira su consentimiento o ejercita los derechos de oposición o supresión, sus datos se conservarán bloqueados a disposición de la Administración de Justicia durante los plazos establecidos legalmente para atender a las posibles responsabilidades nacidas del tratamiento de los datos personales.',
          },
        ],
      },
      {
        heading: '7. SECRETO Y SEGURIDAD DE LOS DATOS PERSONALES',
        parts: [
          {
            type: 'p',
            text: 'El Titular se compromete a adoptar las medidas técnicas y organizativas necesarias, según el nivel de seguridad adecuado al riesgo de los datos recogidos, de forma que se garantice la seguridad de los datos de carácter personal y se evite la destrucción, pérdida o alteración accidental o ilícita de datos personales transmitidos, conservados o tratados de otra forma, o la comunicación o acceso no autorizados a dichos datos.',
          },
          {
            type: 'p',
            text: 'Los datos personales serán tratados como confidenciales por el Titular, quien se compromete a informar y a garantizar, por medio de una obligación legal o contractual, que dicha confidencialidad sea respetada por sus empleados, colaboradores y toda persona a la cual haga accesible la información.',
          },
        ],
      },
      {
        heading: '8. CESIONES Y DESTINATARIOS DE LOS DATOS PERSONALES',
        parts: [
          {
            type: 'p',
            text: 'Sus datos personales serán comunicados en los casos legalmente previstos, por ejemplo, a Administraciones Públicas para el cumplimiento de obligaciones directamente exigibles al Titular, o cuando resulte necesario para cumplir con las finalidades del tratamiento indicadas anteriormente o para prestar servicios estrictamente necesarios para el desarrollo de la actividad (por ejemplo, proveedores de alojamiento, envío de WhatsApp/email o procesamiento de pagos).',
          },
        ],
      },
      {
        heading: '9. DERECHOS DE LOS USUARIOS',
        parts: [
          { type: 'p', text: '¿Cuáles son sus derechos cuando nos facilita sus datos?' },
          {
            type: 'list',
            items: [
              'El Usuario tiene derecho a obtener confirmación sobre si estamos tratando datos personales que le conciernan, o no.',
              'El Usuario tiene derecho a acceder a sus datos personales, así como a solicitar la rectificación de los datos inexactos o, en su caso, solicitar su supresión cuando, entre otros motivos, los datos ya no sean necesarios para los fines que fueron recogidos.',
              'En determinadas circunstancias, el Usuario podrá solicitar la limitación del tratamiento de sus datos, en cuyo caso únicamente los conservaremos para el ejercicio o la defensa de reclamaciones.',
              'En determinadas circunstancias y por motivos relacionados con su situación particular, el Usuario podrá oponerse al tratamiento de sus datos, por lo que el responsable del tratamiento dejará de tratar los datos, salvo por motivos legítimos imperiosos, o el ejercicio o la defensa de posibles reclamaciones.',
              'En aquellos supuestos en los que legalmente proceda, tendrá el derecho a la portabilidad de los datos, lo que implica que tiene derecho a recibir los datos personales relativos a su persona que estemos tratando y almacenarlos en un dispositivo propio.',
            ],
          },
          {
            type: 'p',
            text: 'Puede ejercitar ante el Titular, en caso de que resulten de aplicación, los derechos de acceso, rectificación, oposición, supresión, limitación del tratamiento, portabilidad y a oponerse a ser objeto de decisiones individuales automatizadas mediante comunicación escrita acompañada de fotocopia del D.N.I. para acreditar su identidad, con la referencia "Derechos RGPD" dirigida a la dirección: Calle dels vivons, 29 - 0 iz, 46006, Valencia o a la dirección de correo electrónico: hola@quiroflow.com.',
          },
          {
            type: 'p',
            text: 'Igualmente, le informamos de que puede dirigir cualquier tipo de reclamación en materia de protección de datos personales a la Agencia Española de Protección de Datos (www.aepd.es), Autoridad de Control de España.',
          },
        ],
      },
    ],
    seoDescription: 'Política de privacidad de QuiroFlow, software de gestión para clínicas quiroprácticas.',
  },
  en: {
    title: 'Privacy Policy',
    intro:
      'In compliance with the provisions of the General Data Protection Regulation 2016/679 (GDPR) and Organic Law 3/2018 on Data Protection and Guarantee of Digital Rights (LOPDGDD) of December 5, 2018, we inform you:',
    sections: [
      {
        heading: '1. DATA CONTROLLER',
        parts: [
          {
            type: 'list',
            items: [
              'Identity: COLUMNAQUIRO S.L. with NIF B16365504, owner of QuiroFlow, hereinafter "the Owner"',
              'Address: Calle dels vivons, 29 - 0 iz, 46006, Valencia',
              'Telephone: 744735363',
              'Contact email: hola@quiroflow.com',
            ],
          },
        ],
      },
      {
        heading: '2. PURPOSE OF DATA PROCESSING',
        parts: [
          { type: 'p', text: 'We inform you that the data you provide us through this website will be processed for the purpose of:' },
          {
            type: 'list',
            items: [
              'Managing the services provided through this website.',
              "Keeping you informed about QuiroFlow's activities, features and updates.",
              'Development, compliance and execution of the software subscription agreement and inquiries related to the service requested through the website.',
              'Customer support.',
            ],
          },
          {
            type: 'p',
            text: 'In addition, in accordance with the GDPR, a record of processing activities is kept that specifies, according to their purposes, the processing activities carried out and the other circumstances established in the GDPR.',
          },
          {
            type: 'p',
            text: 'Personal information may not be used for purposes other than those related to the contracted services. No automated decisions will be made based on that profile.',
          },
          {
            type: 'p',
            text: "This policy covers data collected through this website (contact forms, demo bookings, browsing). The processing of patient data that customer clinics enter within the QuiroFlow application is governed by the data processing agreement signed with each clinic, in its capacity as controller of that data.",
          },
        ],
      },
      {
        heading: '3. LEGAL BASIS FOR DATA PROCESSING',
        parts: [
          { type: 'p', text: 'The legal basis for the processing of your data is:' },
          {
            type: 'list',
            items: [
              'The consent granted by the User through acceptance of this Policy and the corresponding checkbox.',
              'Legitimate interest to respond to requests or queries raised through the different means of contact.',
              'The User has provided their personal data within the framework of a contractual or pre-contractual relationship to respond to their request and/or query, and therefore its processing is necessary for the maintenance of that relationship.',
              'Legal obligations applicable to the Owner that require the processing of personal data in accordance with the services provided or those related to tax matters.',
            ],
          },
          {
            type: 'p',
            text: 'The User may, at any time, revoke their consent to the processing of their personal data. Under no circumstances does the withdrawal of this consent condition the provision of the service and/or the execution of contracts with the Owner.',
          },
        ],
      },
      {
        heading: '4. PERSONAL DATA PROCESSED AND ITS SOURCE',
        parts: [
          {
            type: 'p',
            text: 'The personal data we process through this website is identifying in nature and has been provided by the User themselves by filling out the contact form, booking a demo, sending emails, or using the features offered on the website.',
          },
          {
            type: 'p',
            text: "The use of the contact sections, filling out forms and/or the features offered on the Portal is voluntary. However, filling in certain fields of the form or providing them through the use of other features is necessary to properly respond to and manage your request, so the User's refusal to provide the required information will prevent the Owner from responding to and managing it correctly.",
          },
          {
            type: 'p',
            text: 'The User guarantees that the data provided to us is truthful, accurate and complete. Data will be cancelled, deleted or blocked when it is inaccurate, incomplete, or is no longer necessary or relevant to its purpose in accordance with current legislation.',
          },
        ],
      },
      {
        heading: "5. PROTECTION OF MINORS' DATA",
        parts: [
          {
            type: 'p',
            text: 'As established in the GDPR and the LOPDGDD, only those over 14 years of age may lawfully grant their consent for the processing of their personal data. Only people over 14 years of age may provide personal data on this website. For children under 14, the consent of their parents or guardians is mandatory in order to process their personal data.',
          },
        ],
      },
      {
        heading: '6. DATA RETENTION PERIODS',
        parts: [
          {
            type: 'p',
            text: 'The personal data provided by the User will be kept for as long as the relationship with QuiroFlow is maintained, as long as the User does not request its deletion, or for the legally established period. It may also be kept when necessary for compliance with a legal obligation or for the formulation, exercise and defence of claims.',
          },
          {
            type: 'p',
            text: 'If the User withdraws their consent or exercises their rights of objection or deletion, their data will be kept blocked and available to the Administration of Justice for the periods legally established to address any liabilities arising from the processing of personal data.',
          },
        ],
      },
      {
        heading: '7. SECRECY AND SECURITY OF PERSONAL DATA',
        parts: [
          {
            type: 'p',
            text: 'The Owner undertakes to adopt the necessary technical and organizational measures, appropriate to the level of risk of the data collected, so as to guarantee the security of personal data and avoid its accidental or unlawful destruction, loss or alteration, or unauthorized communication or access.',
          },
          {
            type: 'p',
            text: 'Personal data will be treated as confidential by the Owner, who undertakes to inform and guarantee, by way of a legal or contractual obligation, that such confidentiality is respected by its employees, collaborators and anyone to whom the information is made accessible.',
          },
        ],
      },
      {
        heading: '8. DATA TRANSFERS AND RECIPIENTS',
        parts: [
          {
            type: 'p',
            text: 'Your personal data will be disclosed in legally established cases, for example to Public Administrations for compliance with obligations directly required of the Owner, or when necessary to fulfil the purposes indicated above, or to provide services strictly necessary for the operation of the business (for example, hosting providers, WhatsApp/email delivery, or payment processing).',
          },
        ],
      },
      {
        heading: '9. USER RIGHTS',
        parts: [
          { type: 'p', text: 'What are your rights when you provide us with your data?' },
          {
            type: 'list',
            items: [
              'You have the right to obtain confirmation as to whether we are processing personal data concerning you, or not.',
              'You have the right to access your personal data, as well as to request the rectification of inaccurate data or, where appropriate, request its deletion when, among other reasons, the data is no longer necessary for the purposes for which it was collected.',
              'Under certain circumstances, you may request the restriction of the processing of your data, in which case we will only keep it for the exercise or defence of claims.',
              'Under certain circumstances and for reasons related to your particular situation, you may object to the processing of your data, in which case the Owner will stop processing it, except for compelling legitimate reasons, or the exercise or defence of possible claims.',
              'Where legally applicable, you have the right to data portability, which means you have the right to receive the personal data concerning you that we are processing and store it on your own device.',
            ],
          },
          {
            type: 'p',
            text: 'You may exercise, where applicable, your rights of access, rectification, objection, deletion, restriction of processing, portability and objection to automated individual decisions before the Owner, by written communication accompanied by a photocopy of your ID to prove your identity, with the reference "GDPR Rights" addressed to: Calle dels vivons, 29 - 0 iz, 46006, Valencia, or to the email address: hola@quiroflow.com.',
          },
          {
            type: 'p',
            text: 'We also inform you that you can file any type of complaint regarding the protection of personal data with the Spanish Data Protection Agency (www.aepd.es), the Spanish Supervisory Authority.',
          },
        ],
      },
    ],
    seoDescription: 'Privacy policy for QuiroFlow, practice management software for chiropractic clinics.',
  },
  fr: {
    title: 'Politique de confidentialité',
    intro:
      "Conformément aux dispositions du Règlement Général sur la Protection des Données 2016/679 (RGPD) et de la Loi organique 3/2018 relative à la protection des données et à la garantie des droits numériques (LOPDGDD) du 5 décembre 2018, nous vous informons :",
    sections: [
      {
        heading: '1. RESPONSABLE DU TRAITEMENT',
        parts: [
          {
            type: 'list',
            items: [
              'Identité : COLUMNAQUIRO S.L., NIF B16365504, titulaire de QuiroFlow, ci-après « le Titulaire »',
              'Adresse : Calle dels vivons, 29 - 0 iz, 46006, Valence',
              'Téléphone : 744735363',
              'E-mail de contact : hola@quiroflow.com',
            ],
          },
        ],
      },
      {
        heading: '2. FINALITÉ DU TRAITEMENT DES DONNÉES',
        parts: [
          { type: 'p', text: 'Nous vous informons que les données que vous nous fournissez via ce site web seront traitées dans le but de :' },
          {
            type: 'list',
            items: [
              'Gérer les services fournis par le biais de ce Portail Internet.',
              'Vous tenir informé des activités, fonctionnalités et nouveautés de QuiroFlow.',
              "Développement, exécution et suivi du contrat d'abonnement au logiciel, ainsi que des demandes liées au service sollicité via le site web.",
              'Service client.',
            ],
          },
          {
            type: 'p',
            text: 'De même, conformément au RGPD, un registre des activités de traitement est tenu, précisant, selon leurs finalités, les activités de traitement réalisées ainsi que les autres circonstances établies par le RGPD.',
          },
          {
            type: 'p',
            text: 'Les informations personnelles ne pourront être utilisées à des fins autres que celles liées aux services contractés. Aucune décision automatisée ne sera prise sur la base de ce profil.',
          },
          {
            type: 'p',
            text: "Cette politique couvre les données recueillies via ce site web (formulaires de contact, réservation de démo, navigation). Le traitement des données des patients que les cabinets clients saisissent au sein de l'application QuiroFlow est régi par le contrat de sous-traitance signé avec chaque cabinet, en sa qualité de responsable de ces données.",
          },
        ],
      },
      {
        heading: '3. BASE LÉGALE DU TRAITEMENT',
        parts: [
          { type: 'p', text: 'La base légale du traitement de vos données repose sur :' },
          {
            type: 'list',
            items: [
              'Le consentement donné par l\'Utilisateur par l\'acceptation de la présente Politique et de la case correspondante.',
              "L'intérêt légitime à répondre aux demandes ou questions posées par les différents moyens de contact.",
              "L'Utilisateur a fourni ses données personnelles dans le cadre d'une relation contractuelle ou précontractuelle pour le traitement de sa demande et/ou question, et leur traitement est donc nécessaire au maintien de cette relation.",
              'Les obligations légales applicables au Titulaire, qui exigent le traitement des données personnelles conformément aux services fournis ou à des questions fiscales.',
            ],
          },
          {
            type: 'p',
            text: "L'Utilisateur pourra, à tout moment, révoquer son consentement au traitement de ses données personnelles. En aucun cas le retrait de ce consentement ne conditionne la fourniture du service et/ou l'exécution des contrats avec le Titulaire.",
          },
        ],
      },
      {
        heading: '4. DONNÉES PERSONNELLES TRAITÉES ET LEUR ORIGINE',
        parts: [
          {
            type: 'p',
            text: "Les données personnelles que nous traitons via ce site web sont de nature identificative et ont été fournies par l'Utilisateur lui-même en remplissant le formulaire de contact, en réservant une démo, en envoyant des e-mails ou en utilisant les fonctionnalités proposées sur le site web.",
          },
          {
            type: 'p',
            text: "L'utilisation des rubriques de contact, le remplissage de formulaires et/ou les fonctionnalités proposées sur le Portail sont facultatifs. Toutefois, le remplissage de certains champs du formulaire ou leur fourniture par le biais d'autres fonctionnalités est nécessaire pour traiter et gérer correctement votre demande ; le refus de l'Utilisateur de fournir les informations requises empêchera donc le Titulaire de la traiter et de la gérer correctement.",
          },
          {
            type: 'p',
            text: "L'Utilisateur garantit que les données qu'il nous fournit sont véridiques, exactes et complètes. Les données seront annulées, supprimées ou bloquées lorsqu'elles s'avèrent inexactes, incomplètes ou ne sont plus nécessaires ou pertinentes à leur finalité conformément à la législation en vigueur.",
          },
        ],
      },
      {
        heading: '5. PROTECTION DES DONNÉES DES MINEURS',
        parts: [
          {
            type: 'p',
            text: "Conformément au RGPD et à la LOPDGDD, seules les personnes de plus de 14 ans peuvent donner valablement leur consentement au traitement de leurs données personnelles. Seules les personnes de plus de 14 ans peuvent fournir des données personnelles sur ce site web. Pour les mineurs de moins de 14 ans, le consentement de leurs parents ou tuteurs est obligatoire pour pouvoir traiter leurs données personnelles.",
          },
        ],
      },
      {
        heading: '6. DURÉE DE CONSERVATION DES DONNÉES PERSONNELLES',
        parts: [
          {
            type: 'p',
            text: "Les données personnelles fournies par l'Utilisateur seront conservées tant que la relation avec QuiroFlow est maintenue, tant que l'Utilisateur n'en demande pas la suppression, ou pendant le délai légalement établi. Elles pourront également être conservées lorsque cela est nécessaire pour se conformer à une obligation légale ou pour la formulation, l'exercice ou la défense de réclamations.",
          },
          {
            type: 'p',
            text: "Si l'Utilisateur retire son consentement ou exerce ses droits d'opposition ou de suppression, ses données seront conservées bloquées à la disposition de l'Administration de la Justice pendant les délais légalement établis pour répondre aux éventuelles responsabilités découlant du traitement des données personnelles.",
          },
        ],
      },
      {
        heading: '7. SECRET ET SÉCURITÉ DES DONNÉES PERSONNELLES',
        parts: [
          {
            type: 'p',
            text: "Le Titulaire s'engage à adopter les mesures techniques et organisationnelles nécessaires, selon le niveau de sécurité adapté au risque des données recueillies, de manière à garantir la sécurité des données à caractère personnel et à éviter leur destruction, perte ou altération accidentelle ou illicite, ou leur communication ou accès non autorisé.",
          },
          {
            type: 'p',
            text: "Les données personnelles seront traitées comme confidentielles par le Titulaire, qui s'engage à informer et à garantir, par le biais d'une obligation légale ou contractuelle, que cette confidentialité soit respectée par ses employés, collaborateurs et toute personne à qui les informations sont rendues accessibles.",
          },
        ],
      },
      {
        heading: '8. CESSIONS ET DESTINATAIRES DES DONNÉES PERSONNELLES',
        parts: [
          {
            type: 'p',
            text: "Vos données personnelles seront communiquées dans les cas légalement prévus, par exemple aux Administrations Publiques pour le respect des obligations directement exigibles du Titulaire, ou lorsque cela est nécessaire pour répondre aux finalités du traitement indiquées ci-dessus ou pour fournir des services strictement nécessaires au développement de l'activité (par exemple, prestataires d'hébergement, envoi de WhatsApp/e-mail ou traitement des paiements).",
          },
        ],
      },
      {
        heading: '9. DROITS DES UTILISATEURS',
        parts: [
          { type: 'p', text: 'Quels sont vos droits lorsque vous nous fournissez vos données ?' },
          {
            type: 'list',
            items: [
              'L\'Utilisateur a le droit d\'obtenir la confirmation que nous traitons ou non des données personnelles le concernant.',
              "L'Utilisateur a le droit d'accéder à ses données personnelles, ainsi que de demander la rectification des données inexactes ou, le cas échéant, d'en demander la suppression lorsque, entre autres motifs, les données ne sont plus nécessaires aux fins pour lesquelles elles ont été recueillies.",
              "Dans certaines circonstances, l'Utilisateur pourra demander la limitation du traitement de ses données, auquel cas nous ne les conserverons que pour l'exercice ou la défense de réclamations.",
              "Dans certaines circonstances et pour des raisons liées à sa situation particulière, l'Utilisateur pourra s'opposer au traitement de ses données ; le responsable du traitement cessera alors de traiter les données, sauf motifs légitimes impérieux, ou pour l'exercice ou la défense d'éventuelles réclamations.",
              "Dans les cas où cela est légalement applicable, l'Utilisateur aura droit à la portabilité des données, ce qui implique le droit de recevoir les données personnelles le concernant que nous traitons et de les stocker sur son propre appareil.",
            ],
          },
          {
            type: 'p',
            text: 'Vous pouvez exercer auprès du Titulaire, le cas échéant, les droits d\'accès, de rectification, d\'opposition, de suppression, de limitation du traitement, de portabilité et d\'opposition à faire l\'objet de décisions individuelles automatisées, par communication écrite accompagnée d\'une photocopie de votre pièce d\'identité pour justifier de votre identité, avec la référence « Droits RGPD », adressée à : Calle dels vivons, 29 - 0 iz, 46006, Valence, ou à l\'adresse e-mail : hola@quiroflow.com.',
          },
          {
            type: 'p',
            text: "Nous vous informons également que vous pouvez adresser toute réclamation en matière de protection des données personnelles à l'Agence espagnole de protection des données (www.aepd.es), autorité de contrôle espagnole.",
          },
        ],
      },
    ],
    seoDescription: 'Politique de confidentialité de QuiroFlow, logiciel de gestion pour cabinets de chiropraxie.',
  },
}

const c = computed(() => content[locale.value])
const i18nHead = useLocaleHead({ seo: true })
const pageUrl = computed(() => `https://quiroflow.com${route.path}`)

useHead(() => ({
  htmlAttrs: { lang: i18nHead.value.htmlAttrs?.lang },
  title: `${c.value.title} | QuiroFlow`,
  link: [...(i18nHead.value.link ?? [])],
  meta: [
    ...(i18nHead.value.meta ?? []),
    { name: 'description', content: c.value.seoDescription },
    { property: 'og:title', content: `${c.value.title} | QuiroFlow` },
    { property: 'og:description', content: c.value.seoDescription },
    { property: 'og:url', content: pageUrl.value },
    // Same reasoning as aviso-legal.vue -- legal boilerplate adds no search
    // value and would only compete with the homepage for the same queries.
    { name: 'robots', content: 'noindex, follow' },
  ],
}))
</script>

<template>
  <section class="mx-auto max-w-3xl space-y-10 px-8 py-24">
    <div>
      <h1 class="text-[32px] tracking-tightTitle text-ink-900">{{ c.title }}</h1>
      <p class="mt-4 text-[14.5px] leading-[1.7] text-ink-muted">{{ c.intro }}</p>
    </div>
    <div v-for="section in c.sections" :key="section.heading" class="space-y-3">
      <h2 class="text-[18px] font-semibold tracking-tightTitle text-ink-900">{{ section.heading }}</h2>
      <template v-for="(part, i) in section.parts" :key="i">
        <p v-if="part.type === 'p'" class="text-[14.5px] leading-[1.7] text-ink-muted">{{ part.text }}</p>
        <ul v-else class="list-disc space-y-1.5 pl-5 text-[14.5px] leading-[1.7] text-ink-muted">
          <li v-for="(item, j) in part.items" :key="j">{{ item }}</li>
        </ul>
      </template>
    </div>
  </section>
</template>

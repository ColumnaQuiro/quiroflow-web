import type { Messages } from './es'

export const fr: Messages = {
  nav: {
    features: 'Fonctionnalités',
    pricing: 'Tarifs',
    comparison: 'Comparer',
    migrate: 'Changer de logiciel',
    chiro: 'Chiropraxie',
    physio: 'Kinésithérapie',
    resources: 'Ressources',
    contact: 'Contact',
    bookDemo: 'Réserver une démo',
    bookDemoShort: 'Démo',
    startTrial: 'Essai gratuit',
    startTrialShort: 'Essayer',
  },

  hero: {
    badge: 'Logiciel de gestion pour cabinets',
    titleLine1: "Moins de temps sur l'agenda.",
    titleLine2: 'Plus de temps sur la table.',
    description: "Un agenda qui attribue tout seul la salle ou la table libre, des forfaits de séances qui se décomptent seuls, des rappels WhatsApp, une facturation prête pour VeriFactu et une alerte quand un patient prend du retard sur son plan de traitement. Sur ordinateur et dans l'app pour iPhone, iPad et Android, pour les cabinets de chiropraxie, kinésithérapie, ostéopathie et podologie.",
    ctaPrimary: "Démarrer l'essai de 30 jours",
    ctaSecondary: 'Réserver une démo',
    seeFeatures: 'Voir les fonctionnalités',
    proof: ['30 jours d\'essai', 'Sans carte bancaire', 'Migration incluse'],
  },

  video: {
    eyebrow: 'Voir le produit',
    title: 'QuiroFlow en fonctionnement, en 90 secondes',
    description: "Un tour de l'agenda, des forfaits et des rappels avec de vraies données de cabinet — sans diapositives.",
  },

  sectors: {
    badge: 'Pour qui',
    title: 'Le même travail, dans quatre cabinets différents',
    description: "Changez le nom de la séance, et c'est à peu près tout. L'agenda avec espace attribué, les forfaits, les rappels WhatsApp et le suivi du plan de traitement fonctionnent de la même façon, que cela s'appelle ajustement, séance ou traitement.",
    chiro: {
      title: 'Chiropraxie',
      body: "Flux de cabinet à fort volume, plans de soins longs et alerte quand un patient s'écarte de sa cadence.",
      link: 'Voir le logiciel pour cabinets de chiropraxie',
    },
    physio: {
      title: 'Kinésithérapie',
      body: 'Table ou box attribué sur chaque créneau, forfaits de séances qui se décomptent seuls et suivi de la fin de traitement.',
      link: 'Voir le logiciel pour cabinets de kinésithérapie',
    },
    others: {
      title: 'Ostéopathie, podologie et autres thérapies manuelles',
      body: "Ces spécialités n'ont pas encore leur page, mais QuiroFlow s'utilise de la même manière : les types de séance, les salles et les formulaires, c'est vous qui les définissez. Écrivez-nous et nous vous montrons comment cela s'intègre à votre cabinet.",
    },
  },

  funcionalidades: {
    badge: 'Fonctionnalités',
    title: "Ce qu'aucun autre logiciel de votre liste ne fait",
    sectorTitle: 'Tout ce dont votre cabinet a besoin, au même endroit',
    subtitle: "Agenda, facturation et formulaires, tout le monde les a. Ces trois-là sont la raison pour laquelle un cabinet change vraiment.",
    essentialsTitle: 'Ce que le fisc et vos patients attendent de vous',
    moreTitle: "Et tout le reste que vous attendez d'un logiciel de gestion",
  },

  verifactu: {
    eyebrow: 'VeriFactu',
    title: 'Des factures prêtes pour VeriFactu, sans changer de logiciel en 2027',
    description: "VeriFactu est la nouvelle règle de facturation en Espagne. Chaque facture porte son QR code, est chaînée à la précédente et part toute seule vers l'administration fiscale espagnole (AEAT) dans la minute qui suit son émission. Rembourser un paiement émet la facture rectificative, et chaque site a sa propre série. Envoyez avec le certificat de votre cabinet, ou laissez QuiroFlow envoyer pour vous grâce à une procuration. Essayez-le dès aujourd'hui en mode test ; l'envoi réel démarre tout seul le 1er janvier 2027.",
    short: "Un QR sur chaque facture, des enregistrements chaînés et l'envoi automatique à l'AEAT, avec votre certificat ou le nôtre.",
    visual: {
      header: 'FACTURE F2027-0142',
      item: 'Séance de traitement x1',
      itemPrice: '45,00 €',
      total: 'Total',
      totalPrice: '45,00 €',
      qrLabel: 'QR fiscal · VERI*FACTU',
      chained: 'Chaînée à la F2027-0141',
      sent: "Acceptée par l'AEAT",
    },
  },

  app: {
    eyebrow: 'App pour iPhone, iPad et Android',
    title: 'Le cabinet dans la poche, pour votre équipe et vos patients',
    description: "Votre équipe a l'agenda, les dossiers, les notes de séance, les encaissements et la messagerie sur son téléphone, se connecte avec Face ID et reçoit une notification à chaque réservation en ligne ou nouveau message. Sur l'iPad de l'accueil, le patient signe ses formulaires en arrivant. Et vos patients utilisent la même app pour confirmer ou déplacer leur rendez-vous, régler une facture en attente par carte, s'inscrire sur la liste d'attente et faire les exercices que vous leur donnez.",
    short: "Agenda, dossiers, encaissements et messagerie sur le téléphone de l'équipe ; confirmer, payer et faire ses exercices sur celui des patients.",
    visual: {
      staffHeader: 'VOTRE ÉQUIPE',
      staff: ['Agenda jour, 3 jours ou semaine', 'Dossier, notes S/O/A/P et encaissements', 'Caisse du jour et chiffres du cabinet', "Mode accueil : signature sur l'iPad"],
      patientHeader: 'VOS PATIENTS',
      patient: ['Confirmer ou déplacer le rendez-vous', 'Payer une facture par carte', 'Exercices à domicile, en vidéo', "S'inscrire sur la liste d'attente"],
    },
  },

  platform: {
    eyebrow: 'Messagerie unique',
    title: 'WhatsApp et Instagram dans une seule messagerie',
    description: "Les messages WhatsApp et Instagram arrivent dans la même messagerie, et un numéro inconnu qui vous écrit devient un prospect. Attribuez chaque conversation à quelqu'un, laissez des notes internes en mentionnant un collègue, reportez-la à plus tard et, sans quitter la conversation, réservez le rendez-vous ou envoyez un lien de paiement.",
    short: "WhatsApp et Instagram ensemble : attribuez, laissez des notes internes à l'équipe, reportez une conversation, et réservez ou encaissez depuis le chat.",
  },

  automations: {
    eyebrow: 'Automatisations',
    title: 'Des scénarios construits par glisser-déposer',
    short: 'Un éditeur visuel pour enchaîner messages, délais et conditions : attendre que le patient remplisse un formulaire, suivre un chemin ou un autre selon ses réponses, et lui écrire dans sa langue.',
  },

  exercises: {
    eyebrow: 'Exercices à domicile',
    title: 'Ce qui se passe entre deux séances',
    short: "Attribuez un programme d'exercices avec vidéo ou photo depuis le dossier. Le patient le suit dans l'app avec un rappel quotidien, et vous êtes prévenu s'il arrête.",
  },

  payments: {
    eyebrow: 'Encaissements',
    title: 'Encaissez en ligne et bouclez la caisse',
    short: "Des liens de paiement depuis le chat, des factures en attente que le patient règle par carte dans l'app, et la caisse du jour avec chaque encaissement et ce qu'il réglait.",
  },

  growth: {
    eyebrow: 'Growth',
    title: 'Attirer de nouveaux patients',
    short: "Les prospects de vos publicités arrivent tout seuls sur un tableau par étapes, la réceptionniste IA leur répond sur WhatsApp et réserve le rendez-vous, et l'avis Google est demandé après la séance.",
  },

  agenda: {
    eyebrow: 'Agenda',
    title: 'Vous savez toujours où en est chaque patient',
    description: "QuiroFlow gère le flux de votre cabinet de bout en bout : vous savez à tout moment qui est arrivé, qui est en séance et qui est à la caisse, avec attribution automatique de la salle ou de la table en arrière-plan, pour ne jamais avoir à vérifier à la main. Vue par jour, semaine de travail ou semaine complète — et prise en charge de plusieurs sites depuis le même compte si votre cabinet en compte plus d'un.",
    short: "Qui est arrivé, qui est en séance et qui est à la caisse, avec la salle attribuée toute seule. Vue jour, semaine de travail ou semaine complète, et plusieurs sites depuis le même compte.",
    visual: {
      header: 'FLUX DU CABINET',
      rows: [
        { label: '09:00 Ana · Salle 1', status: 'En séance' },
        { label: '09:15 Elena · Salle 2', status: 'Arrivée' },
        { label: '10:30 Diego · Salle 1', status: 'À la caisse' },
      ],
    },
  },

  whatsapp: {
    eyebrow: 'WhatsApp intégré',
    title: 'Des rappels confirmés en un geste',
    description: "Des rappels automatiques avec des boutons pour confirmer ou déplacer le rendez-vous en un geste, des réactivations pour les patients inactifs, et les messages que vos patients vous envoient arrivent directement dans votre boîte QuiroFlow — sans changer d'application ni compter sur l'ouverture d'un e-mail.",
    short: "Des rappels WhatsApp avec bouton pour confirmer ou déplacer le rendez-vous, et des relances automatiques pour les patients que vous n'avez pas vus depuis longtemps.",
  },

  booking: {
    eyebrow: 'Réservation en ligne',
    title: 'Un module de réservation sur votre propre sous-domaine',
    description: "Chaque cabinet reçoit sa propre page publique de réservation, à votre marque et avec vos horaires réels. Les patients réservent sans appeler, et le rendez-vous arrive directement dans votre agenda.",
    short: 'Votre propre page de réservation, à votre marque et avec vos horaires réels. Le rendez-vous arrive directement dans l\'agenda.',
  },

  receptionist: {
    eyebrow: 'Nouveau · Réceptionniste IA',
    title: 'Elle répond à votre WhatsApp et réserve le rendez-vous, même à vingt-trois heures',
    description: "La réceptionniste IA répond sur WhatsApp à vos patients et aux personnes qui vous écrivent pour la première fois, avec ce que vous lui dites de la clinique : tarifs, horaires, ce que vous traitez. Elle propose de vrais créneaux libres de votre agenda et, dès que le patient en choisit un, réserve ou déplace le rendez-vous elle-même. Vous décidez quand elle répond seule — en dehors des horaires, ou aussi pendant — et quand elle laisse seulement un brouillon à valider. Ce qui ne la concerne pas passe à une personne avec une note dans la conversation, et elle n'annule jamais un rendez-vous.",
    visual: {
      header: 'WHATSAPP · 22:47',
      patient1: 'Bonjour, vous avez de la place cette semaine pour une première visite ? Mon dos me fait souffrir',
      ai1: 'Bonjour Laura. La première visite coûte 50 € et comprend le bilan et la première séance. J\'ai jeudi à 10:00 ou vendredi à 17:30. L\'un des deux vous convient ?',
      patient2: 'Jeudi à 10h',
      ai2: 'C\'est fait : votre première visite est jeudi à 10:00 avec Marta. Vous recevrez la confirmation ici.',
      booked: 'Réservé par la réceptionniste IA',
      footer: 'Réponse seule, en dehors des horaires',
    },
  },

  waitlist: {
    eyebrow: "Liste d'attente et continuité",
    title: 'Aucun créneau vide, aucun patient perdu en cours de traitement',
    description: "Quand un rendez-vous est annulé, QuiroFlow propose automatiquement ce créneau au premier patient de la liste d'attente, avec un lien pour le réserver immédiatement. Et si un patient suivant un plan de traitement actif prend du retard sur sa propre cadence, vous êtes prévenu avant qu'il ne cesse de venir. Les plans se définissent en N séances toutes les M semaines, se réservent en entier d'un coup et montrent semaine après semaine si le patient est à jour.",
    short: "Le créneau annulé se repropose tout seul, et vous êtes prévenu quand un patient prend du retard sur son plan.",
    visual: {
      canceledHeader: 'RENDEZ-VOUS ANNULÉ → REPROPOSÉ',
      slot: 'Jeu 10:00 · Salle 2',
      canceledBadge: 'Annulé',
      offeredTo: 'Proposé à María G.',
      bookedBadge: 'Réservé',
      delayedHeader: 'PLAN DE TRAITEMENT EN RETARD',
      patient: 'Carlos R. · toutes les 1 semaine',
      delayBadge: '12 jours de retard',
    },
  },

  billing: {
    eyebrow: 'Facturation et forfaits',
    title: 'Forfaits et abonnements avec prélèvement automatique',
    description: 'Factures immédiates, forfaits de séances utilisables par toute la famille et abonnements à prélèvement récurrent automatisé via Stripe. Chaque plan de traitement indique comment il se règle — à la séance, par forfait ou par abonnement — et la facturation légale de vos abonnements peut tourner en automatique, sans relancer les paiements chaque mois.',
    short: 'Des forfaits qui se décomptent seuls, un prélèvement récurrent via Stripe et une facture légale automatique.',
    visual: {
      header: 'FACTURE #0142',
      item1: 'Séance de traitement x1',
      item1Price: '45,00 €',
      item2: 'Forfait 10 séances',
      item2Price: '380,00 €',
      total: 'Total',
      totalPrice: '425,00 €',
      recurring: 'Paiement récurrent actif · Stripe',
      legal: 'Facture légale automatique',
    },
  },

  forms: {
    eyebrow: 'Documents',
    title: 'Des formulaires sans papier',
    description: "Créez vos propres formulaires d'anamnèse et de consentement avec un éditeur simple par glisser-déposer, avec signature et schémas corporels sur lesquels le patient indique où il a mal. Il les remplit dans sa langue depuis son téléphone avant le rendez-vous, ou sur l'iPad de l'accueil en arrivant.",
    short: "Anamnèse et consentement avec signature et schéma corporel. Le patient les remplit depuis son téléphone avant de venir, ou sur l'iPad de l'accueil.",
    visual: {
      header: 'FORMULAIRE DE PREMIÈRE VISITE',
      fields: [
        { label: 'Nom complet', type: 'Texte' },
        { label: 'Allergies connues', type: 'Texte long' },
        { label: 'Consentement éclairé', type: 'Signature' },
      ],
    },
  },

  reports: {
    eyebrow: 'Rapports',
    title: 'Votre cabinet, en chiffres clairs',
    description: "Remplissage, chiffre d'affaires, valeur moyenne par visite, fidélisation, conversion, nombre de premières visites et statistiques par praticien, à la minute et comparés à la période précédente — pas seulement combien de visites vous avez eues, mais comment votre activité évolue au jour le jour. En plus : combien de temps attendent vos patients et combien durent les séances, chaque message envoyé sur n'importe quel canal, et vos propres tableaux de bord à télécharger en PDF.",
    short: "Remplissage, valeur par visite, fidélisation et conversion comparés à la période précédente, temps d'attente et vos propres tableaux de bord à télécharger en PDF.",
    visual: {
      header: 'STATISTIQUES',
      compareLabel: 'vs. mois précédent',
      stats: [
        { label: 'Remplissage', value: '82%', delta: '+4%', up: true },
        { label: 'CA du mois', value: '12 480 €', delta: '+9%', up: true },
        { label: 'Valeur / visite', value: '42 €', delta: '+2%', up: true },
        { label: 'Fidélisation', value: '68%', delta: '-3%', up: false },
        { label: 'Conversion', value: '34%', delta: '+6%', up: true },
        { label: '1res visites (mois)', value: '24', delta: '+1', up: true },
      ],
    },
  },

  migration: {
    badge: 'Changer de logiciel',
    titleLine1: 'Et si je perdais les dossiers en changeant ?',
    titleLine2: 'Vous ne perdez rien, et vous changez en un week-end.',
    description: "C'est la peur qui freine presque tous les cabinets, et elle est légitime : changer de logiciel, cela ressemble à des semaines d'exports, de vérifications et de réimports. QuiroFlow propose un outil d'import pour que ce n'en soit pas.",
    bullets: [
      "Les patients et les rendez-vous sont importés depuis l'export de votre logiciel actuel.",
      "Quand votre système le permet (PracticeHub, par exemple), paiements, notes cliniques, plans de traitement et formulaires se synchronisent directement via API — sans toucher à un CSV.",
      "Relancez l'import quand vous le souhaitez : ce qui a déjà été migré n'est jamais dupliqué.",
      "Vous venez d'un tableur ou d'un logiciel sans export standard ? Importez vos patients via CSV en mappant vos propres colonnes, aucun format fixe requis.",
    ],
    fromLabel: 'Votre logiciel actuel',
    toLabel: 'QuiroFlow',
    items: ['Patients', 'Rendez-vous', 'Paiements', 'Notes cliniques', 'Plans de traitement', 'Formulaires'],
  },

  data: {
    badge: 'Vos données, et la sortie',
    title: 'Vos données restent les vôtres, y compris le jour où vous partez',
    description: "Nous vous demandons de nous confier le dossier clinique de vos patients. Le minimum est de vous dire où il est hébergé, qui en répond, et comment vous le récupérez si vous décidez un jour de partir.",
    items: [
      {
        title: "Hébergées dans l'Union européenne",
        body: "Les données de votre cabinet et de vos patients sont hébergées sur des serveurs situés dans l'UE, sans transfert international pour le traitement ordinaire.",
      },
      {
        title: 'Sauvegardes quotidiennes',
        body: "Une sauvegarde quotidienne avec rétention, et une restauration à un instant antérieur si quelque chose est supprimé par erreur depuis votre propre compte.",
      },
      {
        title: 'Export complet, quand vous voulez',
        body: "Patients, rendez-vous, notes cliniques, formulaires et facturation s'exportent dans des formats ouverts (CSV et PDF) depuis votre compte, sans le demander par e-mail et sans frais. Il n'y a pas de porte de sortie fermée.",
      },
      {
        title: 'Sous-traitant, par contrat',
        body: "Votre cabinet reste responsable des données de ses patients. QuiroFlow agit en tant que sous-traitant et signe le contrat correspondant, conformément au RGPD et à la LOPDGDD espagnole.",
      },
      {
        title: 'Double authentification',
        body: "Chaque personne peut protéger son accès avec un code d'une app d'authentification, et votre cabinet peut l'imposer à toute l'équipe. Un mot de passe volé, à lui seul, n'ouvre aucun dossier.",
      },
      {
        title: "Journal d'activité",
        body: "Qui a ouvert ou modifié chaque dossier, et qui s'est connecté et quand, est enregistré et consultable depuis les Réglages. Et si vous envoyez un compte rendu par WhatsApp, il part dans un PDF qui ne s'ouvre qu'avec le numéro d'identité du patient.",
      },
    ],
    note: "Vous avez besoin du détail technique ou du contrat de sous-traitance avant de décider ? Écrivez-nous et nous vous l'envoyons sans passer par une démo.",
  },

  testimonial: {
    quote: "Nous avons migré depuis PracticeHub en un week-end. Les confirmations de rendez-vous arrivent maintenant toutes seules par WhatsApp et nous avons arrêté de courir après les paiements à la main — l'agenda et la caisse s'accordent enfin sans que personne ait à les vérifier.",
    name: 'Léa · Columna Quiro',
    location: 'Valence, Espagne',
  },

  comparison: {
    badge: 'Comparer',
    title: 'Comment QuiroFlow se compare',
    subtitle: "Sans exagérer : voici ce que chaque plateforme affiche publiquement sur son propre site.",
    featureHeader: 'Fonctionnalité',
    rows: [
      'Export complet de vos données depuis votre compte',
      'Attribue automatiquement une salle ou une table libre',
      'Rappels et confirmation de rendez-vous par WhatsApp',
      'Le patient choisit combien de rappels il reçoit',
      'Réservation en ligne 24h/24 pour vos patients',
      "Formulaires numériques d'admission et de consentement",
      'Factures légales automatiques pour forfaits et abonnements',
      'Statistiques de fidélisation, conversion et valeur par visite',
      "Liste d'attente : nouvelle proposition automatique des créneaux annulés",
      'Alerte quand un patient prend du retard sur son plan de traitement',
      'Campagne automatique de remerciement aux patients qui recommandent',
      'Demande automatique d\'avis Google après la visite',
      'Réceptionniste IA qui répond et prend les rendez-vous',
      'Analyse posturale à partir de photos',
      "Bibliothèque d'exercices en vidéo pour le patient",
      "Tarif d'entrée publié sur son propre site",
    ],
    footnote: "Comparatif établi à partir des informations publiées sur les sites officiels de chaque fournisseur, ou confirmées par le fournisseur lui-même (octobre 2026). Un « — » indique que le fournisseur ne l'affiche pas publiquement, pas que cela n'existe pas — vérifiez directement auprès de chacun avant de décider.",
  },

  pricing: {
    badge: 'Tarifs',
    title: 'Un tarif par praticien, pas par patient',
    description: "Patients illimités sur tous les forfaits. Vous ne payez que pour les praticiens qui consultent — accueil et administration sont gratuits et illimités.",
    monthly: 'Mensuel',
    annual: 'Annuel',
    annualSave: 'Économisez 10 %',
    perMonth: '/mois',
    billedAnnually: 'facturé annuellement',
    mostChosen: 'Recommandé',
    extraPro: 'Praticien supplémentaire : 19 €/mois',
    growthAddOn: 'Growth (acquisition, réceptionniste IA et réputation) : +39 €/mois',
    receptionistAddOn: 'Seulement la réceptionniste IA : +19 €/mois',
    cta: "Démarrer l'essai de 30 jours",
    ctaSecondary: "Parler à l'équipe",
    exVat: 'HT',
    vatNote: "Prix hors taxes. 21 % de TVA s'ajoutent sur la facture.",
    verifactuNote: "VeriFactu : 7,50 €/mois par site, uniquement à partir du jour où vous commencez à envoyer à l'AEAT.",
    receptionistNote: 'Réceptionniste IA : 19 €/mois (17 €/mois en annuel) seule, ou incluse dans Growth et dans les formules Practice et Clinic. 1 000 réponses par mois incluses ; chaque 1 000 de plus, 15 €.',
    ctaNote: "30 jours d'essai. Sans carte bancaire. Migration incluse.",
    anchor: {
      title: "Le prix d'un créneau perdu par semaine",
      body: "Une annulation qui n'est jamais recomblée, à 45 € la séance, représente environ 180 € par mois. Le forfait Practice coûte 99 €. La nouvelle proposition automatique du créneau et l'alerte de retard existent précisément pour combler ce trou.",
    },
    tiers: {
      solo: {
        name: 'Solo',
        for: '1 praticien, 1 site',
        features: [
          'Patients illimités',
          "Utilisateurs d'administration gratuits et illimités",
          'Agenda avec attribution automatique des salles',
          'Réservation en ligne sur votre propre page',
          'WhatsApp : boîte de réception, rappels et modèles',
          'Rappels de contrôle et campagnes automatiques',
          "Liste d'attente et alertes de continuité",
          'Facturation, paiements et forfaits',
          'App pour votre équipe et vos patients',
        ],
      },
      practice: {
        name: 'Practice',
        for: "Jusqu'à 4 praticiens, 1 site",
        features: [
          'Tout ce que contient Solo',
          'Rôles et permissions personnalisés',
          'Rapports avancés : valeur par visite, fidélisation, conversion',
          'Praticiens supplémentaires à 19 €/mois',
          'Growth inclus : acquisition, réceptionniste IA et réputation',
        ],
      },
      clinic: {
        name: 'Clinic',
        for: "Praticiens illimités, sites illimités",
        features: [
          'Tout ce que contient Practice',
          'Multi-sites',
          'API et webhooks',
          'Migration assistée et support prioritaire',
          'Growth inclus : acquisition, réceptionniste IA et réputation',
        ],
      },
    },
  },

  faq: {
    title: 'Questions fréquentes',
    description: "Les deux plus coûteuses — protection des données et migration — en premier.",
    items: [
      {
        q: 'Comment les données de mes patients sont-elles traitées ?',
        a: "Conformément au RGPD et à la LOPDGDD espagnole. Votre cabinet reste responsable des données de ses patients et QuiroFlow agit en tant que sous-traitant, en signant le contrat correspondant avec chaque cabinet. Les données sont hébergées sur des serveurs situés dans l'Union européenne.",
      },
      {
        q: 'Puis-je migrer depuis le logiciel que j\'utilise aujourd\'hui ?',
        a: "Oui, et cela se fait généralement en un week-end. Patients et rendez-vous sont importés depuis l'export de votre logiciel actuel ; quand le système d'origine le permet, notes cliniques, plans de traitement, paiements et formulaires se synchronisent via API. Si vous venez d'un tableur ou d'un logiciel sans export standard, vous importez par CSV en mappant vos propres colonnes. La migration est incluse, elle n'est pas facturée à part.",
      },
      {
        q: 'Et si un jour je veux partir ? Puis-je emporter mes données ?',
        a: "Oui, et sans demander la permission. Patients, rendez-vous, notes cliniques, formulaires et facturation s'exportent en CSV et PDF depuis votre propre compte, quand vous le souhaitez et sans frais. Nous préférons le dire avant que vous ne posiez la question.",
      },
      {
        q: 'Que fait la réceptionniste IA et combien coûte-t-elle ?',
        a: "Elle répond sur WhatsApp à vos patients et aux personnes qui écrivent pour la première fois, avec les informations que vous lui donnez sur la clinique et les vrais créneaux libres de votre agenda, et réserve ou déplace le rendez-vous quand le patient choisit une heure. Vous choisissez si elle répond seule (en dehors des horaires, ou aussi pendant) ou si elle laisse des brouillons à valider, et ce qui ne la concerne pas passe à une personne. Elle coûte 19 €/mois (17 €/mois en annuel) et inclut 1 000 réponses par mois ; chaque 1 000 de plus coûte 15 €, et vous pouvez fixer une limite mensuelle. Elle est incluse dans Growth et dans les formules Practice et Clinic.",
      },
      {
        q: 'QuiroFlow est-il prêt pour VeriFactu ?',
        a: "Oui. Chaque facture porte son QR code, est chaînée à la précédente et est envoyée automatiquement à l'AEAT. Vous pouvez envoyer avec le certificat de votre cabinet ou autoriser QuiroFlow à envoyer pour vous. Jusqu'au 1er janvier 2027, cela fonctionne en mode test, sans frais ; à partir de ce jour, l'envoi réel coûte 7,50 € par mois et par site.",
      },
      {
        q: 'Y a-t-il une app mobile ?',
        a: "Oui, pour iPhone, iPad et Android. Votre équipe a l'agenda, les dossiers, les encaissements et la messagerie sur son téléphone, et vos patients utilisent la même app pour confirmer leurs rendez-vous, payer et faire leurs exercices. Elle est incluse dans toutes les formules.",
      },
      {
        q: 'Est-ce utile si je ne suis pas chiropracteur ?',
        a: "Oui. QuiroFlow est utilisé dans des cabinets de chiropraxie, kinésithérapie, ostéopathie et podologie. Les types de séance, les salles, les formulaires et les plans de traitement, c'est vous qui les définissez : l'outil s'adapte à votre façon de travailler au lieu de vous imposer un flux.",
      },
      {
        q: "Que comprend l'essai de 30 jours ?",
        a: "Le produit entier, sans restriction et sans carte bancaire. Si vous décidez de rester pendant l'essai, nous migrons vos données avant que vous ne commenciez à payer.",
      },
      {
        q: 'Comment les praticiens sont-ils comptés dans le tarif ?',
        a: "Seuls les praticiens qui consultent sont comptés. Accueil, administration et direction sont des utilisateurs gratuits et illimités sur tous les forfaits, et les patients ne sont jamais comptés.",
      },
    ],
  },

  capture: {
    title: 'Pas encore prêt pour une démo ?',
    description: "Nous vous envoyons les tarifs et un résumé des fonctionnalités par e-mail, à consulter tranquillement. Sans appel et sans engagement.",
    emailLabel: 'Votre e-mail',
    clinicLabel: 'Nom de votre cabinet (facultatif)',
    consentBefore: "J'ai lu et j'accepte la",
    consentLink: 'politique de confidentialité',
    button: 'Envoyer',
    sending: 'Envoi...',
    success: 'Bien reçu. Nous vous répondons sous 24 heures.',
    error: "L'envoi a échoué. Réessayez, ou écrivez-nous directement.",
  },

  finalCta: {
    title: 'Changez votre façon de gérer votre cabinet',
    description: "Ouvrez un essai de 30 jours sans carte bancaire, ou dites-nous comment vous travaillez et nous vous montrons comment QuiroFlow s'intègre.",
    cta: "Démarrer l'essai de 30 jours",
    ctaSecondary: 'Réserver une démo',
  },


  resources: {
    badge: 'Ressources',
    title: 'Ressources pour gérer un cabinet',
    description: "Des guides pratiques sur l'agenda, la fidélisation, les forfaits et la protection des données dans les cabinets de thérapie manuelle. Sans remplissage.",
    empty: {
      title: "Rien n'est encore publié",
      body: "Nous écrivons les premiers guides. Laissez-nous votre e-mail et nous vous prévenons dès que le premier sort — c'est le même formulaire que celui des tarifs.",
    },
    readMore: 'Lire',
    backToList: 'Retour aux Ressources',
    publishedOn: 'Publié le',
    readingTime: 'min de lecture',
  },

  quiropractica: {
    badge: 'Chiropraxie',
    title: 'Logiciel de gestion pour cabinets de chiropraxie',
    description: "Un agenda avec flux de cabinet et attribution automatique des salles, des plans de soins qui vous alertent quand un patient prend du retard, des forfaits avec prélèvement récurrent, un dossier clinique numérique et des rappels WhatsApp. Pour les chiropracteurs seuls comme pour les centres multi-sites.",
    ctaPrimary: "Démarrer l'essai de 30 jours",
    ctaSecondary: 'Réserver une démo',
    seeFeatures: 'Voir comment ça marche',
    features: {
      flujo: {
        eyebrow: 'Flux du cabinet',
        title: 'Un fort volume sans perdre personne de vue',
        description: "Un cabinet de chiropraxie enchaîne beaucoup de visites courtes dans la journée, et c'est là que le contrôle se perd. QuiroFlow vous dit à tout moment qui est arrivé, qui est en salle, qui attend et qui est à la caisse, et attribue la salle libre automatiquement à la création du rendez-vous. Vue jour, semaine de travail ou semaine complète, et plusieurs sites depuis le même compte.",
      },
      planes: {
        eyebrow: 'Plans de soins',
        title: "Le patient qui décroche, avant qu'il ne décroche",
        description: "Un plan de soins chiropratique tient à la cadence : deux fois par semaine, puis une, puis en entretien. QuiroFlow connaît la cadence de chaque patient, réserve le plan entier d'un coup, vous montre semaine après semaine s'il est à jour et vous prévient quand quelqu'un prend du retard, tant que vous pouvez encore le rattraper — au lieu de le découvrir deux mois plus tard en relisant l'agenda.",
      },
      bonos: {
        eyebrow: 'Forfaits et abonnements',
        title: 'Des forfaits et des abonnements qui se prélèvent seuls',
        description: "Vendez des forfaits d'ajustements ou des abonnements d'entretien et laissez QuiroFlow décompter la séance à chaque visite. Prélèvement récurrent automatisé avec Stripe et facturation légale automatique, pour que la caisse du mois ne dépende pas de quelqu'un qui court après les paiements.",
      },
      whatsapp: {
        eyebrow: "WhatsApp et liste d'attente",
        title: 'Le créneau annulé se recomble tout seul',
        description: "Des rappels automatiques avec des boutons pour confirmer ou déplacer le rendez-vous en un geste. Et quand quelqu'un annule, le créneau est proposé automatiquement au premier patient de la liste d'attente, avec un lien pour le réserver immédiatement. Les messages que vos patients envoient arrivent dans votre boîte, dans QuiroFlow.",
      },
      historia: {
        eyebrow: 'Dossier clinique et consentements',
        title: 'Bilan, ajustements et consentement sans papier',
        description: 'Dossier clinique numérique avec le bilan initial, des notes S/O/A/P pour chaque ajustement et, juste à côté, les listings vertébraux marqués par segment à gauche ou à droite, avec un geste pour reprendre ceux de la dernière séance. Le patient remplit les formulaires de première visite et le consentement éclairé depuis son téléphone avant de venir.',
      },
      informes: {
        eyebrow: 'Rapports',
        title: 'Valeur par visite, fidélisation et conversion des premières visites',
        description: "Remplissage par praticien et par salle, chiffre d'affaires, valeur moyenne par visite, fidélisation, et combien de premières visites se transforment en plan de soins complet. À la minute et comparé à la période précédente, sans rien exporter vers un tableur.",
      },
    },
    edge: {
      title: "Deux choses qui décident l'année d'un cabinet de chiropraxie",
      description: "La chiropraxie ne se joue pas sur l'ajustement. Elle se joue sur le fait que le patient termine son plan, et que l'agenda ne laisse pas de trous en chemin.",
      items: [
        {
          title: "Vous êtes prévenu avant qu'un patient abandonne le plan",
          body: "Le soin se perd entre les visites, pas en salle. Si un patient suivant un plan actif s'écarte de sa propre cadence, QuiroFlow vous le dit tant que vous pouvez encore l'appeler, au lieu que vous le voyiez à la clôture du mois.",
        },
        {
          title: "L'avis Google se demande tout seul",
          body: "Après la visite, QuiroFlow peut demander l'avis automatiquement. Pour un cabinet qui se bat sur les recherches locales, cette régularité finit par peser plus que n'importe quelle campagne ponctuelle.",
        },
      ],
    },
    faq: {
      title: 'Questions fréquentes',
      items: [
        {
          q: 'QuiroFlow convient-il si je suis chiropracteur seul ?',
          a: "Oui. Cela fonctionne de la même façon pour un cabinet individuel que pour un centre avec plusieurs salles et praticiens. Le tarif suit le nombre de sites et de praticiens qui consultent : un petit cabinet ne paie pas ce qu'il n'utilise pas.",
        },
        {
          q: 'Puis-je gérer des plans de soins avec des cadences différentes ?',
          a: "Oui. Chaque plan se définit en N séances toutes les M semaines (par exemple deux par semaine pendant un mois, puis une toutes les deux semaines), se réserve en entier d'un coup, et QuiroFlow le suit patient par patient en vous prévenant quand quelqu'un prend du retard sur sa cadence.",
        },
        {
          q: 'Comment les salles sont-elles attribuées ?',
          a: "QuiroFlow attribue la salle libre automatiquement à la création du rendez-vous, selon sa durée et le type de visite. Vous pouvez toujours la changer à la main.",
        },
        {
          q: "Puis-je vendre des forfaits d'ajustements et des abonnements mensuels ?",
          a: "Oui. Les forfaits décomptent une séance à chaque visite sans comptage manuel, et les abonnements mensuels se prélèvent seuls via Stripe, avec facture légale automatique si vous l'activez.",
        },
        {
          q: 'Puis-je migrer depuis PracticeHub ?',
          a: "Oui, et c'est le cas que nous couvrons le mieux : patients et rendez-vous sont importés depuis votre export, et paiements, notes cliniques, plans de traitement et formulaires se synchronisent via API. Depuis tout autre système, vous pouvez importer par CSV en mappant vos colonnes.",
        },
        {
          q: 'Comment les données des patients sont-elles traitées ?',
          a: "Conformément au RGPD et à la LOPDGDD espagnole, avec des données hébergées sur des serveurs situés dans l'Union européenne. QuiroFlow agit en tant que sous-traitant et signe le contrat correspondant avec chaque cabinet, qui reste responsable des données de ses patients.",
        },
      ],
    },
    cta: {
      title: 'Voyez QuiroFlow avec les données de votre cabinet',
      description: "Ouvrez un essai de 30 jours sans carte bancaire, ou dites-nous comment vous travaillez et nous vous montrons comment cela s'intègre à votre cabinet de chiropraxie.",
      button: "Démarrer l'essai de 30 jours",
      buttonSecondary: 'Réserver une démo',
    },
    mockups: {
      invoiceItem: 'Ajustement chiropratique x1',
      calendarType: 'Ajustement',
    },
  },

  fisioterapia: {
    badge: 'Kinésithérapie',
    title: 'Logiciel de gestion pour cabinets de kinésithérapie',
    description: "Un agenda qui attribue automatiquement la table ou le box libre, des forfaits de séances qui se décomptent seuls, un dossier clinique numérique et des rappels WhatsApp. Une seule plateforme, que vous exerciez seul ou sur plusieurs sites.",
    ctaPrimary: "Démarrer l'essai de 30 jours",
    ctaSecondary: 'Réserver une démo',
    seeFeatures: 'Voir comment ça marche',
    features: {
      agenda: {
        eyebrow: 'Agenda et remplissage',
        title: 'Chaque séance, avec son box et sa table attribués',
        description: "QuiroFlow attribue automatiquement le box ou la table libre sur chaque créneau, pour ne jamais vous retrouver avec deux patients placés au même endroit. Vue jour, semaine de travail ou semaine complète, et plusieurs sites depuis le même compte.",
      },
      bonos: {
        eyebrow: 'Forfaits et facturation',
        title: 'Des forfaits de séances qui se décomptent seuls',
        description: "Vendez des forfaits de 5, 10 ou 20 séances et laissez QuiroFlow en décompter une à chaque venue du patient. Prélèvement récurrent automatisé avec Stripe pour les formules au forfait, et facturation légale automatique — sans courir après les paiements en fin de mois.",
      },
      whatsapp: {
        eyebrow: 'Rappels WhatsApp',
        title: 'Moins de créneaux perdus pour un oubli',
        description: "Des rappels automatiques avec des boutons pour confirmer ou déplacer le rendez-vous en un geste. Et si quelqu'un annule, le créneau est proposé directement au premier patient de la liste d'attente, avec un lien pour le réserver immédiatement.",
      },
      historia: {
        eyebrow: 'Dossier clinique et consentements',
        title: 'Bilan, évolution et consentement sans papier',
        description: "Dossier clinique numérique avec le bilan initial, l'évolution séance après séance en notes S/O/A/P et les examens que vous souhaitez joindre. Le patient remplit l'anamnèse et le consentement éclairé depuis son téléphone avant de venir, et peut indiquer sur un schéma corporel où il a mal.",
      },
      reserva: {
        eyebrow: 'Réservation en ligne',
        title: 'Une page de réservation à votre marque',
        description: "Votre cabinet reçoit sa propre page publique de réservation sur votre sous-domaine, avec vos horaires réels et la disponibilité de chaque kinésithérapeute. Le patient réserve sans appeler et le rendez-vous arrive directement dans l'agenda.",
      },
      informes: {
        eyebrow: 'Rapports',
        title: 'Remplissage, fidélisation et valeur par séance',
        description: "Remplissage par kinésithérapeute et par salle, chiffre d'affaires, valeur moyenne par visite, fidélisation, et combien de premières visites se transforment en traitement complet. À la minute et comparé à la période précédente.",
      },
    },
    edge: {
      title: 'Deux détails qui comptent sur les traitements longs',
      description: "La kinésithérapie se joue rarement en une seule séance. Elle se joue sur le fait que le patient termine son plan, et sur ce qu'il fait entre deux séances.",
      items: [
        {
          title: "Vous êtes prévenu avant qu'un patient cesse de venir",
          body: "Un traitement se perd dans l'intervalle entre les séances, pas en cabinet. Si un patient suivant un plan actif prend du retard sur sa propre cadence, QuiroFlow vous prévient tant que vous pouvez encore le rattraper, au lieu que vous le découvriez deux mois plus tard.",
        },
        {
          title: "Exercices à domicile, et une alerte s'il arrête",
          body: "Attribuez un programme d'exercices avec vidéo ou photo depuis le dossier. Le patient le suit dans l'app avec un rappel quotidien, et s'il arrête, il apparaît à côté des plans en retard, tant que vous pouvez encore agir.",
        },
      ],
    },
    faq: {
      title: 'Questions fréquentes',
      items: [
        {
          q: 'QuiroFlow convient-il si je suis kinésithérapeute seul ?',
          a: "Oui. Cela fonctionne de la même façon pour un cabinet individuel que pour un centre avec plusieurs salles et praticiens. Le tarif suit le nombre de sites et de kinésithérapeutes : un petit cabinet ne paie pas ce qu'il n'utilise pas.",
        },
        {
          q: 'Puis-je gérer des forfaits de séances ?',
          a: "Oui. Créez des forfaits du nombre de séances que vous voulez : chaque visite en décompte une automatiquement, sans comptage manuel. Vous pouvez aussi activer le prélèvement récurrent pour les formules au forfait ou les abonnements mensuels.",
        },
        {
          q: 'Puis-je donner des exercices à faire à domicile ?',
          a: "Oui. Depuis le dossier, vous attribuez des exercices isolés ou un programme complet, avec votre propre vidéo ou photo. Le patient les voit dans l'app avec un rappel quotidien, coche ceux qu'il fait, et QuiroFlow vous prévient quand il arrête.",
        },
        {
          q: 'Comment les tables et les box sont-ils attribués ?',
          a: "QuiroFlow attribue l'espace libre automatiquement à la création du rendez-vous, selon sa durée et le type de séance. Vous pouvez toujours le changer à la main.",
        },
        {
          q: 'Les patients peuvent-ils réserver en ligne ?',
          a: "Oui. Chaque cabinet a sa propre page de réservation sur son sous-domaine, avec la disponibilité réelle de chaque kinésithérapeute. Le rendez-vous arrive directement dans votre agenda, sans appel ni confirmation manuelle.",
        },
        {
          q: "Puis-je migrer depuis le logiciel que j'utilise aujourd'hui ?",
          a: "Oui. Nous importons patients et rendez-vous depuis votre propre export, et depuis tout autre système vous pouvez importer par CSV en mappant vos colonnes, sans format fixe imposé.",
        },
        {
          q: 'Comment les données des patients sont-elles traitées ?',
          a: "Conformément au RGPD et à la LOPDGDD espagnole, avec des données hébergées sur des serveurs situés dans l'Union européenne. QuiroFlow agit en tant que sous-traitant et signe le contrat correspondant avec chaque cabinet, qui reste responsable des données de ses patients.",
        },
      ],
    },
    cta: {
      title: 'Voyez QuiroFlow avec les données de votre cabinet',
      description: "Ouvrez un essai de 30 jours sans carte bancaire, ou dites-nous comment vous travaillez et nous vous montrons comment cela s'intègre à votre cabinet de kinésithérapie.",
      button: "Démarrer l'essai de 30 jours",
      buttonSecondary: 'Réserver une démo',
    },
    mockups: {
      invoiceItem: 'Séance de kinésithérapie x1',
      calendarType: 'Séance',
    },
  },

  // Landing de campagne pour l'angle automatisations. Les sections produit
  // reutilisent receptionist/whatsapp/waitlist/booking au lieu de dupliquer.
  automatizaciones: {
    badge: 'Automatisations',
    title: "Votre cabinet repond, rappelle et recupere les patients tout seul",
    description: "La receptionniste IA repond a votre WhatsApp et reserve le rendez-vous, les rappels se confirment en un geste, un creneau annule est repropose tout seul, et vous etes prevenu quand un patient prend du retard sur son plan. Vous etes a la table, pas sur votre telephone.",
    ctaPrimary: "Essai de 30 jours",
    ctaSecondary: "Reserver une demo",
    seeFeatures: "Voir comment ca marche",
    sectionTitle: "Les quatre choses que vous cessez de faire a la main",
    edge: {
      title: "Ce qui change dans une semaine de cabinet",
      description: "Pas du \"gain de temps\" en general. Quatre trous precis qui se bouchent tout seuls.",
      items: [
        {
          title: "Le WhatsApp de 23 h",
          body: "Celui qui ecrit hors horaires recoit une reponse, de vrais creneaux de votre agenda et un rendez-vous reserve. Il n'attend pas demain — et demain, il n'est pas parti ailleurs.",
        },
        {
          title: "L'annulation de derniere minute",
          body: "Une seance jamais remplacee, a 45 € la seance, represente environ 180 € par mois. Le creneau est propose directement au premier de la liste d'attente, avec un lien pour le prendre tout de suite.",
        },
        {
          title: "Le patient qui ne revient plus",
          body: "Si quelqu'un avec un plan de traitement actif prend du retard sur sa propre cadence, vous etes prevenu avant qu'il ne disparaisse. Pas deux mois plus tard, quand il est parti.",
        },
        {
          title: "Les appels de confirmation",
          body: "Les rappels comportent un bouton pour confirmer ou deplacer le rendez-vous. Ce que le patient repond arrive dans l'agenda sans que personne ne le saisisse.",
        },
      ],
    },
    faq: {
      title: "Questions sur les automatisations",
      items: [
        {
          q: "La receptionniste IA peut-elle annuler un rendez-vous ?",
          a: "Non. Elle reserve et deplace des rendez-vous, mais n'annule jamais. Ce qui sort de son perimetre passe a une personne, avec une note dans la conversation.",
        },
        {
          q: "Repond-elle toujours, ou seulement hors horaires ?",
          a: "C'est vous qui decidez. Elle peut repondre seule tout le temps, uniquement hors horaires, ou se contenter de preparer un brouillon que vous validez.",
        },
        {
          q: "Que sait-elle de mon cabinet ?",
          a: "Ce que vous lui dites : tarifs, horaires, ce que vous traitez et ce que vous ne traitez pas. Les creneaux proposes sont les vrais creneaux de votre agenda.",
        },
        {
          q: "Est-ce que tout est compris dans le prix ?",
          a: "Les rappels WhatsApp, la liste d'attente et les alertes de plan de traitement sont dans toutes les formules. La receptionniste IA fait partie de l'option Growth, 39 €/mois hors taxes, et est incluse dans les formules Practice et Clinic.",
        },
      ],
    },
    cta: {
      title: "Essayez-le sur votre propre agenda",
      description: "30 jours, sans carte, migration comprise. Si cela ne convient pas, vous n'avez rien perdu.",
      button: "Essai de 30 jours",
      buttonSecondary: "Reserver une demo",
    },
  },

  footer: {
    productTitle: 'Produit',
    sectorsTitle: 'Par spécialité',
    companyTitle: 'Entreprise',
    features: 'Fonctionnalités',
    automations: 'Automatisations',
    pricing: 'Tarifs',
    comparison: 'Comparer',
    migrate: 'Changer de logiciel',
    chiro: 'Chiropraxie',
    physio: 'Kinésithérapie',
    resources: 'Ressources',
    copyright: '© 2026 QuiroFlow. Tous droits réservés.',
    privacy: 'Politique de confidentialité',
    terms: 'Mentions légales',
    verifactu: 'Déclaration responsable VERI*FACTU',
    cookies: 'Préférences de cookies',
  },

  consent: {
    title: 'Cookies',
    body: "Nous utilisons des cookies nécessaires au fonctionnement du site et, uniquement avec votre accord, des cookies Google pour mesurer si nos annonces débouchent sur une démo. Refuser ne limite rien sur le site.",
    accept: 'Accepter',
    reject: 'Refuser',
    settings: 'Personnaliser',
    save: 'Enregistrer mes préférences',
    always: 'Toujours actifs',
    necessaryTitle: 'Nécessaires',
    necessaryBody: 'Indispensables au fonctionnement du site et à la mémorisation de vos choix de langue et de cookies.',
    adsTitle: 'Publicité',
    adsBody: "Google Ads. Nous permet de savoir quelles annonces aboutissent à une démo ou à une demande de tarifs.",
    analyticsTitle: "Mesure d'audience",
    analyticsBody: "Mesure agrégée de l'utilisation du site, pour savoir quelles pages fonctionnent.",
  },

  mockups: {
    calendar: {
      weekLabel: 'Semaine de travail',
      dateRange: '1 – 5 sept.',
      days: ['LUN', 'MAR', 'MER'],
      types: {
        ajuste: 'Séance',
        primeraVisita: '1re visite',
        revision: 'Contrôle',
        cancelada: 'Annulé',
      },
    },
    whatsapp: {
      reminderHeader: 'RAPPEL AUTOMATIQUE',
      reminderMessage: 'Bonjour Ana 👋 Petit rappel de votre rendez-vous demain à 10h00 avec Marta.',
      confirmBtn: '✅ Confirmer ma présence',
      rescheduleBtn: '🔁 Reporter',
      confirmedReply: 'Confirmé ✅',
      inboundHeader: 'MESSAGE REÇU → BOÎTE QUIROFLOW',
      inboundMessage: 'Puis-je amener mon fils au même rendez-vous ?',
    },
    booking: {
      label: 'RÉSERVATION EN LIGNE · votrecabinet.quiroflow.com',
      practitioners: [
        { initials: 'AT', name: 'Ana Torres', avail: 'Disponible du lundi au vendredi' },
        { initials: 'MR', name: 'Marco Ruiz', avail: 'Disponible mardi et jeudi' },
      ],
    },
  },
}

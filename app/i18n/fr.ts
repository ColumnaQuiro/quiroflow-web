import type { Messages } from './es'

export const fr: Messages = {
  nav: {
    features: 'Fonctionnalités',
    pricing: 'Tarifs',
    comparison: 'Comparer',
    migrate: 'Changer de logiciel',
    about: 'Qui sommes-nous',
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
    description: "Un agenda qui attribue tout seul la salle ou la table libre, des forfaits de séances qui se décomptent seuls, des rappels WhatsApp et une alerte quand un patient prend du retard sur son plan de traitement. Une seule plateforme pour les cabinets de chiropraxie, kinésithérapie, ostéopathie et podologie.",
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
    moreTitle: "Et tout le reste que vous attendez d'un logiciel de gestion",
  },

  platform: {
    eyebrow: 'Tout au même endroit',
    title: 'Une seule plateforme pour gérer votre cabinet',
    description: "Les messages de vos patients arrivent ici, vous pouvez convertir de nouveaux leads en patients grâce à des modèles de messages automatiques (bienvenue, relance, rappel de réservation), lancer des campagnes de réactivation et consulter des statistiques claires sur votre cabinet — sans jongler entre plusieurs applications.",
    short: "Une seule boîte de réception, des modèles automatiques pour les nouveaux leads et des campagnes de réactivation, sans changer d'application.",
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
    title: 'Tout votre WhatsApp, dans QuiroFlow',
    description: "Des rappels automatiques avec des boutons pour confirmer ou déplacer le rendez-vous en un geste, des réactivations pour les patients inactifs, et les messages que vos patients vous envoient arrivent directement dans votre boîte QuiroFlow — sans changer d'application ni compter sur l'ouverture d'un e-mail.",
    short: "Des rappels avec bouton pour confirmer ou déplacer le rendez-vous, et les messages de vos patients dans votre boîte, sans changer d'application.",
  },

  booking: {
    eyebrow: 'Réservation en ligne',
    title: 'Un module de réservation sur votre propre sous-domaine',
    description: "Chaque cabinet reçoit sa propre page publique de réservation, à votre marque et avec vos horaires réels. Les patients réservent sans appeler, et le rendez-vous arrive directement dans votre agenda.",
    short: 'Votre propre page de réservation, à votre marque et avec vos horaires réels. Le rendez-vous arrive directement dans l\'agenda.',
  },

  waitlist: {
    eyebrow: "Liste d'attente et continuité",
    title: 'Aucun créneau vide, aucun patient perdu en cours de traitement',
    description: "Quand un rendez-vous est annulé, QuiroFlow propose automatiquement ce créneau au premier patient de la liste d'attente, avec un lien pour le réserver immédiatement. Et si un patient suivant un plan de traitement actif prend du retard sur sa propre cadence, vous êtes prévenu avant qu'il ne cesse de venir.",
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
    description: "Factures immédiates, forfaits de séances et abonnements avec prélèvement récurrent automatisé via Stripe. Si vous le souhaitez, activez la facturation légale automatique de vos abonnements — sans courir après les paiements chaque mois.",
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
    description: "Créez vos propres formulaires d'admission et de consentement avec un générateur simple en glisser-déposer. Le patient les remplit avant le rendez-vous, depuis son téléphone.",
    short: "Admission et consentement avec un générateur en glisser-déposer. Le patient les remplit depuis son téléphone avant d'arriver.",
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
    description: "Remplissage, chiffre d'affaires, valeur moyenne par visite, fidélisation, conversion, nombre de premières visites et statistiques par praticien, à la minute et comparés à la période précédente — pas seulement combien de visites vous avez eues, mais comment votre activité évolue au jour le jour. Sans rien exporter vers un tableur.",
    short: "Remplissage, valeur par visite, fidélisation, conversion et premières visites, à la minute et comparés à la période précédente.",
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
      'Page de réservation en ligne sur votre propre sous-domaine',
      "Formulaires numériques d'admission et de consentement",
      'Factures légales automatiques pour forfaits et abonnements',
      'Statistiques de fidélisation, conversion et valeur par visite',
      "Liste d'attente : nouvelle proposition automatique des créneaux annulés",
      'Alerte quand un patient prend du retard sur son plan de traitement',
      'Campagne automatique de remerciement aux patients qui recommandent',
      'Demande automatique d\'avis Google après la visite',
      "Tarif d'entrée publié sur son propre site",
    ],
    footnote: "Comparatif établi à partir des informations publiées sur les sites officiels de chaque fournisseur (septembre 2026). Un « — » indique que le fournisseur ne l'affiche pas publiquement, pas que cela n'existe pas — vérifiez directement auprès de chacun avant de décider.",
  },

  pricing: {
    badge: 'Tarifs',
    title: 'Un tarif par praticien, pas par patient',
    description: "Patients illimités sur tous les forfaits. Vous ne payez que pour les praticiens qui consultent — accueil et administration sont gratuits et illimités.",
    monthly: 'Mensuel',
    annual: 'Annuel',
    annualSave: 'Économisez ~15 %',
    perMonth: '/mois',
    billedAnnually: 'facturé annuellement',
    mostChosen: 'Recommandé',
    extraPro: 'Praticien supplémentaire : 29 €/mois',
    cta: "Démarrer l'essai de 30 jours",
    ctaSecondary: "Parler à l'équipe",
    exVat: 'HT',
    vatNote: "Prix hors taxes. 21 % de TVA s'ajoutent sur la facture.",
    ctaNote: "30 jours d'essai. Sans carte bancaire. Migration incluse.",
    anchor: {
      title: "Le prix d'un créneau perdu par semaine",
      body: "Une annulation qui n'est jamais recomblée, à 45 € la séance, représente environ 180 € par mois. Le forfait Practice coûte 119 €. La nouvelle proposition automatique du créneau et l'alerte de retard existent précisément pour combler ce trou.",
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
        ],
      },
      practice: {
        name: 'Practice',
        for: "Jusqu'à 3 praticiens, 1 site",
        features: [
          'Tout ce que contient Solo',
          'Rôles et permissions personnalisés',
          'Rapports avancés : valeur par visite, fidélisation, conversion',
          'Praticiens supplémentaires à 29 €/mois',
        ],
      },
      clinic: {
        name: 'Clinic',
        for: "Jusqu'à 6 praticiens, sites illimités",
        features: [
          'Tout ce que contient Practice',
          'Multi-sites',
          'API et webhooks',
          'Migration assistée et support prioritaire',
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

  about: {
    badge: 'Qui sommes-nous',
    title: "QuiroFlow est maintenu par le cabinet qui en avait besoin",
    description: "Nous ne sommes pas une agence qui a décidé de faire du logiciel de santé. Nous sommes COLUMNAQUIRO S.L., la société qui gère Columna Quiro, un cabinet de chiropraxie à Valence — et QuiroFlow est né à l'intérieur, parce qu'aucun logiciel du marché ne faisait ce dont nous avions besoin.",
    story: {
      title: 'Pourquoi il existe',
      paragraphs: [
        "Columna Quiro tournait avec un logiciel qui coûtait plus qu'il ne résolvait. L'agenda ne savait pas quelle salle était libre, les forfaits se comptaient à la main, les rappels partaient d'un téléphone personnel, et personne ne s'apercevait qu'un patient avait cessé de venir avant deux mois.",
        "Nous avons construit QuiroFlow pour le cabinet lui-même, avec l'agenda et la caisse d'un vrai centre dessus. Chaque fonctionnalité de ce site vient d'un problème rencontré en consultation, pas d'une liste de concurrents.",
        "Quand d'autres cabinets ont commencé à nous demander ce que nous utilisions, nous avons décidé de l'ouvrir. Cela veut dire que nous restons les premiers utilisateurs du produit : si quelque chose casse, cela casse dans notre propre agenda avant le vôtre.",
      ],
    },
    people: {
      title: 'À qui vous parlez',
      description: "Nous sommes une petite équipe. Quand vous réservez une démo ou écrivez au support, il n'y a pas de centre d'appels au milieu.",
      items: [
        {
          name: 'Raúl',
          role: 'Produit et développement',
          body: "Construit et maintient QuiroFlow, et c'est lui qui se trouve de l'autre côté du lien de démo. Si vous avez une question technique sur la migration ou l'export des données, c'est lui qui y répond.",
        },
        {
          name: 'Léa',
          role: 'Columna Quiro · usage quotidien en cabinet',
          body: "Consulte à Columna Quiro et utilise QuiroFlow tous les jours. Une bonne partie de la feuille de route vient de ce qui la gêne en premier.",
        },
      ],
    },
    facts: {
      title: 'Les faits, sans fioritures',
      contactLabel: 'Contact direct',
      items: [
        { label: 'Société', value: 'COLUMNAQUIRO S.L. · NIF B16365504' },
        { label: 'Où nous sommes', value: 'Valence, Espagne' },
        { label: "D'où vient le support", value: 'Valence, en espagnol, anglais et français' },
        { label: 'Où vivent vos données', value: "Serveurs dans l'Union européenne" },
      ],
    },
    cta: {
      title: "Vous préférez poser des questions avant d'essayer ?",
      description: "Écrivez-nous et vous obtenez une réponse de quelqu'un qui consulte ou qui a écrit le code. En général le jour même.",
      button: 'Réserver une démo',
      emailButton: 'Envoyer un e-mail',
    },
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
        description: "Un plan de soins chiropratique tient à la cadence : deux fois par semaine, puis une, puis en entretien. QuiroFlow connaît la cadence de chaque patient et vous prévient quand quelqu'un prend du retard sur la sienne, tant que vous pouvez encore le rattraper — au lieu de le découvrir deux mois plus tard en relisant l'agenda.",
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
        description: "Dossier clinique numérique avec le bilan initial, le suivi de chaque ajustement et les examens que vous souhaitez joindre. Les formulaires de première visite et le consentement éclairé sont remplis par le patient depuis son téléphone avant d'arriver.",
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
          a: "Oui. Vous définissez la cadence de chaque plan (par exemple deux visites par semaine pendant un mois, puis une) et QuiroFlow la suit patient par patient, en vous alertant quand quelqu'un prend du retard sur la sienne.",
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
        description: "Dossier clinique numérique avec le bilan initial, l'évolution séance après séance et les examens que vous souhaitez joindre. Les formulaires d'anamnèse et le consentement éclairé sont remplis par le patient depuis son téléphone avant d'arriver.",
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
      description: "La kinésithérapie se joue rarement sur une seule séance. Elle se joue sur le fait que le patient termine son plan, et qu'il revienne l'année suivante.",
      items: [
        {
          title: "Vous êtes prévenu avant qu'un patient cesse de venir",
          body: "Un traitement se perd dans l'intervalle entre les séances, pas en cabinet. Si un patient suivant un plan actif prend du retard sur sa propre cadence, QuiroFlow vous prévient tant que vous pouvez encore le rattraper, au lieu que vous le découvriez deux mois plus tard.",
        },
        {
          title: "Les avis Google se demandent tout seuls",
          body: "Après la visite, QuiroFlow peut demander l'avis automatiquement. Pour un cabinet qui se bat sur les recherches locales, cette régularité finit par valoir plus que n'importe quelle campagne ponctuelle.",
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

  footer: {
    productTitle: 'Produit',
    sectorsTitle: 'Par spécialité',
    companyTitle: 'Entreprise',
    features: 'Fonctionnalités',
    pricing: 'Tarifs',
    comparison: 'Comparer',
    migrate: 'Changer de logiciel',
    chiro: 'Chiropraxie',
    physio: 'Kinésithérapie',
    about: 'Qui sommes-nous',
    resources: 'Ressources',
    copyright: '© 2026 QuiroFlow. Tous droits réservés.',
    privacy: 'Politique de confidentialité',
    terms: 'Mentions légales',
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

import type { Messages } from './es'

export const fr: Messages = {
  nav: {
    features: 'Fonctionnalités',
    pricing: 'Tarifs',
    comparison: 'Comparatif',
    migrate: 'Migrer depuis PracticeHub',
    contact: 'Contact',
    bookDemo: 'Réserver une démo',
  },

  hero: {
    badge: 'Logiciel pour chiropracteurs',
    titleLine1: "Moins de temps sur l'administratif.",
    titleLine2: 'Plus de temps pour ajuster.',
    description: "Un agenda qui suit le flux de votre cabinet, les dossiers cliniques, la facturation, les forfaits et les rappels WhatsApp — le tout sur une seule plateforme conçue pour les cabinets de chiropraxie, mono ou multi-sites.",
    ctaPrimary: 'Réserver une démo',
    ctaSecondary: 'Voir les fonctionnalités',
  },

  practicehub: {
    badge: 'Migration',
    titleLine1: "Vous venez d'un autre système ?",
    titleLine2: 'Changez en un week-end.',
    description: "Fini les exports, vérifications et réimportations pendant des semaines. QuiroFlow propose un outil d'import conçu spécifiquement pour les cabinets qui migrent depuis leur ancien logiciel (par exemple, PracticeHub).",
    bullets: [
      'Les patients et les rendez-vous sont importés directement depuis votre propre export PracticeHub.',
      "Paiements, notes cliniques, plans de traitement et formulaires se synchronisent directement via API — sans toucher à un CSV.",
      "Relancez l'import quand vous le souhaitez : ce qui a déjà été migré n'est jamais dupliqué.",
      "Vous venez d'un autre système (Cliniko, MyClinic, un tableur...) ? Importez vos patients via CSV en mappant vos propres colonnes — aucun format fixe requis.",
    ],
    fromLabel: 'PracticeHub',
    toLabel: 'QuiroFlow',
    items: ['Patients', 'Rendez-vous', 'Paiements', 'Notes cliniques', 'Plans de traitement', 'Formulaires'],
  },

  funcionalidades: {
    badge: 'Fonctionnalités',
    title: 'Tout ce dont votre cabinet a besoin, au même endroit',
  },

  platform: {
    eyebrow: 'Tout au même endroit',
    title: 'Une seule plateforme pour gérer votre cabinet',
    description: "Les messages de vos patients arrivent ici, vous pouvez convertir de nouveaux leads en patients grâce à des modèles de messages automatiques (bienvenue, relance, rappel de réservation), lancer des campagnes de réactivation et consulter des statistiques claires sur votre cabinet — sans jongler entre plusieurs applications.",
    visual: {
      inboxLabel: 'Boîte de réception',
      inboxBadge: '3 nouveaux',
      templateLabel: 'Modèle : nouveau lead → relance',
      active: 'Active',
      campaignLabel: 'Campagne : réactivation patients inactifs',
      occupancyLabel: "Taux d'occupation du cabinet",
    },
  },

  agenda: {
    eyebrow: 'Agenda',
    title: 'Sachez toujours où en est chaque patient',
    description: "QuiroFlow gère le flux de votre cabinet de bout en bout : vous savez à tout moment qui est arrivé, qui est en séance et qui est à la caisse, avec une attribution automatique de salle ou de table en arrière-plan pour ne jamais avoir à vérifier manuellement. Vue par jour, semaine de travail ou semaine complète — avec la prise en charge de plusieurs sites depuis le même compte si votre cabinet compte plusieurs adresses.",
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
    description: "Rappels automatiques avec des boutons pour confirmer ou reporter un rendez-vous en un geste, relances pour les patients inactifs, et les messages que vos patients vous envoient arrivent directement dans votre boîte de réception QuiroFlow — sans changer d'application, sans dépendre de l'ouverture d'un e-mail.",
  },

  booking: {
    eyebrow: 'Réservation en ligne',
    title: 'Un widget de réservation sur votre propre sous-domaine',
    description: 'Chaque cabinet dispose de sa propre page publique de réservation, à vos couleurs et avec vos disponibilités réelles. Les patients réservent sans appeler, et le rendez-vous arrive directement dans votre agenda.',
  },

  waitlist: {
    eyebrow: "Liste d'attente et continuité",
    title: 'Aucun créneau vide, aucun patient perdu en cours de traitement',
    description: "Lorsqu'un rendez-vous est annulé, QuiroFlow propose automatiquement ce créneau au premier patient de la liste d'attente, avec un lien pour le réserver instantanément. Et si un patient sous plan de traitement actif prend du retard sur son propre rythme, vous êtes alerté avant qu'il n'arrête de venir.",
    visual: {
      canceledHeader: 'RENDEZ-VOUS ANNULÉ → RE-PROPOSÉ',
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
    description: 'Factures instantanées, forfaits de séances et abonnements avec prélèvement récurrent automatisé via Stripe. Si besoin, activez la facturation légale automatique pour vos abonnements — sans relancer les paiements à la main chaque mois.',
    visual: {
      header: 'FACTURE Nº0142',
      item1: 'Ajustement chiropratique x1',
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
    title: 'Formulaires sans papier',
    description: "Créez vos propres formulaires d'admission et de consentement avec un générateur simple par glisser-déposer. Les patients les remplissent avant leur rendez-vous, depuis leur téléphone.",
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
    description: "Taux d'occupation, chiffre d'affaires, PVA (valeur moyenne par visite), rétention, conversion, nombre de premières visites et statistiques par praticien, mises à jour à la minute et comparées à la période précédente — pas seulement le nombre de visites, mais l'évolution de votre activité au jour le jour. Rien à exporter vers un tableur.",
    visual: {
      header: 'STATISTIQUES',
      compareLabel: 'vs. mois dernier',
      stats: [
        { label: "Taux d'occupation", value: '82 %', delta: '+4 %', up: true },
        { label: "Chiffre d'affaires mensuel", value: '12 480 €', delta: '+9 %', up: true },
        { label: 'PVA', value: '42 €', delta: '+2 %', up: true },
        { label: 'Rétention', value: '68 %', delta: '-3 %', up: false },
        { label: 'Conversion', value: '34 %', delta: '+6 %', up: true },
        { label: '1res visites (mois)', value: '24', delta: '+1', up: true },
      ],
    },
  },

  testimonial: {
    quote: "Nous avons migré depuis PracticeHub en un week-end. Maintenant, les confirmations de rendez-vous arrivent seules par WhatsApp et nous avons arrêté de relancer les paiements à la main — l'agenda et la caisse correspondent enfin sans que personne ait à les vérifier.",
    name: 'Léa · Columna Quiro',
    location: 'Valence, Espagne',
  },

  comparison: {
    badge: 'Comparatif',
    title: 'Comment QuiroFlow se compare',
    subtitle: 'Sans exagération : voici ce que chaque plateforme affiche publiquement sur son propre site.',
    featureHeader: 'Fonctionnalité',
    rows: [
      'Attribue automatiquement une salle ou une table libre',
      'Rappels et confirmation de rendez-vous par WhatsApp',
      "Le patient choisit le nombre de rappels qu'il reçoit",
      'Page de réservation en ligne sur votre propre sous-domaine',
      "Formulaires numériques d'admission et de consentement",
      'Factures légales automatiques pour forfaits et abonnements',
      'Statistiques de rétention, conversion et valeur par visite',
      "Liste d'attente : re-proposition automatique des créneaux annulés",
      "Alerte lorsqu'un patient prend du retard sur son plan de traitement",
      'Campagne automatique de remerciement aux patients qui parrainent',
      "Demande automatique d'avis Google après la visite",
    ],
    footnote: 'Comparatif établi à partir des informations publiées sur le site officiel de chaque fournisseur (septembre 2026). Un « — » signifie que le fournisseur ne l\'affiche pas publiquement, pas que la fonctionnalité n\'existe pas — vérifiez directement auprès de chacun avant de décider.',
  },

  pricing: {
    badge: 'Tarifs',
    title: 'Une offre adaptée à votre cabinet',
    description: 'Le tarif dépend du nombre de sites et de praticiens. Parlez-nous de votre cabinet et nous vous préparons une proposition — migration depuis votre système actuel incluse.',
    cta: 'Nous contacter',
  },

  finalCta: {
    title: 'Commencez à changer la gestion de votre cabinet',
    description: "Parlez-nous de votre cabinet et nous vous montrons comment QuiroFlow s'adapte — sans engagement.",
    cta: 'Réserver une démo',
  },

  fisioterapia: {
    badge: 'Kinésithérapie',
    title: 'Logiciel de gestion pour cabinets de kinésithérapie',
    description: "Un agenda qui attribue seul la table ou le box disponible, des forfaits de séances qui se décomptent automatiquement, un dossier patient numérique et des rappels WhatsApp. Une seule plateforme, que vous exerciez seul ou sur plusieurs sites.",
    ctaPrimary: 'Réserver une démo',
    ctaSecondary: 'Voir comment ça marche',
    features: {
      agenda: {
        eyebrow: 'Agenda et occupation',
        title: 'Chaque séance avec sa table et son box déjà attribués',
        description: "QuiroFlow attribue automatiquement le box ou la table libre sur chaque créneau : vous ne vous retrouvez jamais avec deux patients placés au même endroit. Vue par jour, semaine de travail ou semaine complète, et plusieurs sites depuis un même compte.",
      },
      bonos: {
        eyebrow: 'Forfaits et facturation',
        title: 'Des forfaits de séances qui se décomptent seuls',
        description: "Vendez des forfaits de 5, 10 ou 20 séances et laissez QuiroFlow en déduire une à chaque venue du patient. Prélèvement récurrent automatisé via Stripe pour les formules illimitées, et facturation légale automatique — sans relancer les paiements en fin de mois.",
      },
      whatsapp: {
        eyebrow: 'Rappels WhatsApp',
        title: 'Moins de créneaux perdus pour un oubli',
        description: "Rappels automatiques avec des boutons pour confirmer ou reporter en un geste. Et lorsqu'un patient annule, le créneau est proposé directement au premier de la liste d'attente, avec un lien pour le réserver immédiatement.",
      },
      historia: {
        eyebrow: 'Dossier patient et consentement',
        title: 'Bilan, évolution et consentement sans papier',
        description: "Dossier patient numérique regroupant le bilan initial, l'évolution séance après séance et les examens que vous y joignez. Les questionnaires d'anamnèse et le consentement éclairé sont remplis par le patient depuis son téléphone avant d'arriver.",
      },
      reserva: {
        eyebrow: 'Réservation en ligne',
        title: 'Une page de réservation à vos couleurs',
        description: "Votre cabinet dispose de sa propre page publique de réservation sur votre sous-domaine, avec vos horaires réels et les disponibilités de chaque kinésithérapeute. Le patient réserve sans appeler et le rendez-vous arrive directement dans votre agenda.",
      },
      informes: {
        eyebrow: 'Rapports',
        title: 'Occupation, rétention et valeur par séance',
        description: "Occupation par kinésithérapeute et par salle, chiffre d'affaires, valeur moyenne par visite, rétention et nombre de premières consultations qui débouchent sur un traitement complet. Mis à jour à la minute et comparé à la période précédente.",
      },
    },
    faq: {
      title: 'Questions fréquentes',
      items: [
        {
          q: 'QuiroFlow convient-il si je suis seul kinésithérapeute ?',
          a: "Oui. Le fonctionnement est le même pour un cabinet individuel que pour un centre avec plusieurs salles et praticiens. Le tarif suit le nombre de sites et de kinésithérapeutes : un petit cabinet ne paie pas pour ce qu'il n'utilise pas.",
        },
        {
          q: 'Puis-je gérer des forfaits de séances ?',
          a: "Oui. Créez des forfaits du nombre de séances que vous voulez : chaque venue en décompte une automatiquement, sans comptage manuel. Vous pouvez aussi activer le prélèvement récurrent pour des formules mensuelles.",
        },
        {
          q: 'Comment les tables et les box sont-ils attribués ?',
          a: "QuiroFlow attribue automatiquement l'espace libre à la création du rendez-vous, selon sa durée et le type de séance. Vous pouvez toujours le modifier manuellement.",
        },
        {
          q: 'Les patients peuvent-ils réserver en ligne ?',
          a: "Oui. Chaque cabinet dispose de sa page de réservation sur son sous-domaine, avec les disponibilités réelles de chaque kinésithérapeute. Le rendez-vous arrive directement dans votre agenda, sans appel ni confirmation manuelle.",
        },
        {
          q: 'Puis-je migrer depuis mon logiciel actuel ?',
          a: "Oui. Nous importons patients et rendez-vous depuis votre propre export, et depuis tout autre système vous pouvez importer par CSV en mappant vos colonnes, sans format imposé.",
        },
        {
          q: 'Comment les données des patients sont-elles traitées ?',
          a: "Conformément au RGPD et à la LOPDGDD espagnole. QuiroFlow agit en tant que sous-traitant et signe le contrat correspondant avec chaque cabinet, qui reste responsable des données de ses patients.",
        },
      ],
    },
    cta: {
      title: 'Voyez QuiroFlow avec les données de votre cabinet',
      description: "Dites-nous comment vous travaillez et nous vous montrons comment cela s'intègre à votre cabinet de kinésithérapie — sans engagement.",
      button: 'Réserver une démo',
    },
  },

  footer: {
    features: 'Fonctionnalités',
    pricing: 'Tarifs',
    migrate: 'Migrer depuis PracticeHub',
    physio: 'Kinésithérapie',
    copyright: '© 2026 QuiroFlow. Tous droits réservés.',
    privacy: 'Politique de confidentialité',
    terms: 'Mentions légales',
  },

  mockups: {
    calendar: {
      weekLabel: 'Semaine de travail',
      dateRange: '1 – 5 sept.',
      days: ['LUN', 'MAR', 'MER'],
      types: {
        ajuste: 'Ajustement',
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

import type { Messages } from './es'

export const en: Messages = {
  nav: {
    features: 'Features',
    pricing: 'Pricing',
    comparison: 'Comparison',
    migrate: 'Switch from PracticeHub',
    contact: 'Contact',
    bookDemo: 'Book a demo',
  },

  hero: {
    badge: 'Practice management software for chiropractic clinics',
    titleLine1: 'Less time on admin.',
    titleLine2: 'More time adjusting.',
    description: 'A calendar that tracks your practice flow, clinical records, billing, packages, and WhatsApp reminders — all in one platform built for chiropractic clinics with one location or several.',
    ctaPrimary: 'Book a demo',
    ctaSecondary: 'See features',
  },

  practicehub: {
    badge: 'Migration',
    titleLine1: 'Coming from another system?',
    titleLine2: 'Switch over in a weekend.',
    description: 'No exporting, reviewing, and re-uploading for weeks. QuiroFlow ships an importer built specifically for clinics migrating from their previous software (for example, PracticeHub).',
    bullets: [
      'Patients and appointments are imported straight from your own PracticeHub export.',
      'Payments, clinical notes, treatment plans, and forms sync directly via API — no touching a CSV.',
      'Re-run the import whenever you like: anything already migrated is never duplicated.',
      'Coming from another system (Cliniko, MyClinic, a spreadsheet...)? Import your patients via CSV, mapping your own columns — no fixed format required.',
    ],
    fromLabel: 'PracticeHub',
    toLabel: 'QuiroFlow',
    items: ['Patients', 'Appointments', 'Payments', 'Clinical notes', 'Treatment plans', 'Forms'],
  },

  funcionalidades: {
    badge: 'Features',
    title: 'Everything your clinic needs, in one place',
  },

  platform: {
    eyebrow: 'All in one place',
    title: 'A single platform to run your practice',
    description: 'Your patients\' messages land here, you can turn new leads into patients with automated message templates (welcome, follow-up, booking reminder), launch recall campaigns, and see clear stats for your practice — without jumping between different apps.',
    visual: {
      inboxLabel: 'Message inbox',
      inboxBadge: '3 new',
      templateLabel: 'Template: new lead → follow-up',
      active: 'Active',
      campaignLabel: 'Campaign: inactive patient recall',
      occupancyLabel: 'Practice occupancy',
    },
  },

  agenda: {
    eyebrow: 'Calendar',
    title: 'Always know where every patient is',
    description: 'QuiroFlow manages your practice flow end to end: you always know who has arrived, who\'s in session, and who\'s at checkout, with automatic room or table assignment running in the background so you never have to check by hand. Day, working-week, or full-week view — with support for several locations from the same account if your clinic has more than one site.',
    visual: {
      header: 'PRACTICE FLOW',
      rows: [
        { label: '09:00 Ana · Room 1', status: 'In session' },
        { label: '09:15 Elena · Room 2', status: 'Arrived' },
        { label: '10:30 Diego · Room 1', status: 'At checkout' },
      ],
    },
  },

  whatsapp: {
    eyebrow: 'WhatsApp built in',
    title: 'All your WhatsApp, inside QuiroFlow',
    description: 'Automatic reminders with buttons to confirm or reschedule an appointment in one tap, recalls for inactive patients, and the messages your patients send you land directly in your QuiroFlow inbox — no switching apps, no relying on them opening an email.',
  },

  booking: {
    eyebrow: 'Online booking',
    title: 'A booking widget on your own subdomain',
    description: 'Every clinic gets its own public booking page, with your branding and real availability. Patients book without calling, and the appointment lands straight in your calendar.',
  },

  waitlist: {
    eyebrow: 'Waitlist & continuity',
    title: 'No empty slots, no patients lost mid-treatment',
    description: 'When an appointment is cancelled, QuiroFlow automatically offers that slot to the first patient on the waitlist, with a link to book it instantly. And if a patient on an active treatment plan falls behind their own cadence, you\'re alerted before they stop coming in.',
    visual: {
      canceledHeader: 'CANCELLED APPOINTMENT → RE-OFFERED',
      slot: 'Thu 10:00 · Room 2',
      canceledBadge: 'Cancelled',
      offeredTo: 'Offered to María G.',
      bookedBadge: 'Booked',
      delayedHeader: 'TREATMENT PLAN BEHIND SCHEDULE',
      patient: 'Carlos R. · every 1 week',
      delayBadge: '12 days behind',
    },
  },

  billing: {
    eyebrow: 'Billing & packages',
    title: 'Packages and memberships with automatic charging',
    description: 'Instant invoices, session packages, and memberships with automated recurring billing via Stripe. If you need it, turn on automatic legal invoicing for your memberships — no chasing payments by hand every month.',
    visual: {
      header: 'INVOICE #0142',
      item1: 'Chiropractic adjustment x1',
      item1Price: '€45.00',
      item2: '10-session package',
      item2Price: '€380.00',
      total: 'Total',
      totalPrice: '€425.00',
      recurring: 'Recurring payment active · Stripe',
      legal: 'Automatic legal invoice',
    },
  },

  forms: {
    eyebrow: 'Docs',
    title: 'Paperless forms',
    description: 'Build your own intake and consent forms with a simple drag-and-drop builder. Patients fill them out before their appointment, from their phone.',
    visual: {
      header: 'FIRST-VISIT FORM',
      fields: [
        { label: 'Full name', type: 'Text' },
        { label: 'Known allergies', type: 'Long text' },
        { label: 'Informed consent', type: 'Signature' },
      ],
    },
  },

  reports: {
    eyebrow: 'Reports',
    title: 'Your clinic, in clear numbers',
    description: 'Occupancy, revenue, PVA (average value per visit), retention, conversion, number of first visits, and per-practitioner stats, updated by the minute and compared against the previous period — not just how many visits you had, but how your business is trending day to day. No exporting anything to a spreadsheet.',
    visual: {
      header: 'STATS',
      compareLabel: 'vs. last month',
      stats: [
        { label: 'Occupancy', value: '82%', delta: '+4%', up: true },
        { label: 'Monthly revenue', value: '€12,480', delta: '+9%', up: true },
        { label: 'PVA', value: '€42', delta: '+2%', up: true },
        { label: 'Retention', value: '68%', delta: '-3%', up: false },
        { label: 'Conversion', value: '34%', delta: '+6%', up: true },
        { label: 'First visits (month)', value: '24', delta: '+1', up: true },
      ],
    },
  },

  testimonial: {
    quote: 'We migrated from PracticeHub in a weekend. Now appointment confirmations arrive on their own over WhatsApp and we\'ve stopped chasing payments by hand — the calendar and the cash register finally match up without anyone having to check them.',
    name: 'Léa · Columna Quiro',
    location: 'Valencia, Spain',
  },

  comparison: {
    badge: 'Comparison',
    title: 'How QuiroFlow compares',
    subtitle: 'No exaggeration: this is what each platform shows publicly on its own website.',
    featureHeader: 'Feature',
    rows: [
      'Assigns a free room or table automatically',
      'WhatsApp appointment reminders and confirmation',
      'Patients choose how many reminders they get',
      'Online booking page on your own subdomain',
      'Digital intake and consent forms',
      'Automatic legal invoices for packages and memberships',
      'Retention, conversion, and value-per-visit stats',
      'Waitlist: automatic re-offer of cancelled slots',
      'Alert when a patient falls behind on their treatment plan',
      'Automatic thank-you campaign for referring patients',
      'Automatic Google review request after the visit',
    ],
    footnote: 'Comparison built from information published on each provider\'s own website (September 2026). A "—" means the provider doesn\'t show it publicly, not that it doesn\'t exist — confirm directly with each one before deciding.',
  },

  pricing: {
    badge: 'Pricing',
    title: 'A plan sized to your clinic',
    description: 'Pricing depends on the number of locations and practitioners. Tell us about your clinic and we\'ll put together a proposal — migration from your current system included.',
    cta: 'Talk to us',
  },

  finalCta: {
    title: 'Start changing how you run your clinic',
    description: 'Tell us about your clinic and we\'ll show you how QuiroFlow fits — no strings attached.',
    cta: 'Book a demo',
  },

  footer: {
    features: 'Features',
    pricing: 'Pricing',
    migrate: 'Switch from PracticeHub',
    contactEmail: 'hola@quiroflow.com',
    copyright: '© 2026 QuiroFlow. All rights reserved.',
    privacy: 'Privacy policy',
    terms: 'Legal notice',
  },

  mockups: {
    calendar: {
      weekLabel: 'Working week',
      dateRange: 'Sep 1 – 5',
      days: ['MON', 'TUE', 'WED'],
      types: {
        ajuste: 'Adjustment',
        primeraVisita: '1st visit',
        revision: 'Check-up',
        cancelada: 'Cancelled',
      },
    },
    whatsapp: {
      reminderHeader: 'AUTOMATIC REMINDER',
      reminderMessage: 'Hi Ana 👋 Just a reminder of your appointment tomorrow at 10:00 with Marta.',
      confirmBtn: '✅ Confirm attendance',
      rescheduleBtn: '🔁 Reschedule',
      confirmedReply: 'Confirmed ✅',
      inboundHeader: 'INCOMING MESSAGE → QUIROFLOW INBOX',
      inboundMessage: 'Can I bring my son to the same appointment?',
    },
    booking: {
      label: 'ONLINE BOOKING · yourclinic.quiroflow.com',
      practitioners: [
        { initials: 'AT', name: 'Ana Torres', avail: 'Available Monday to Friday' },
        { initials: 'MR', name: 'Marco Ruiz', avail: 'Available Tuesday and Thursday' },
      ],
    },
  },
}

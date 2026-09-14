import type { Messages } from './es'

export const en: Messages = {
  nav: {
    features: 'Features',
    pricing: 'Pricing',
    comparison: 'Compare',
    migrate: 'Switch systems',
    about: 'About us',
    chiro: 'Chiropractic',
    physio: 'Physiotherapy',
    resources: 'Resources',
    contact: 'Contact',
    bookDemo: 'Book a demo',
    bookDemoShort: 'Demo',
    startTrial: 'Start free trial',
    startTrialShort: 'Try it',
  },

  hero: {
    badge: 'Practice management software for clinics',
    titleLine1: 'Less time on the calendar.',
    titleLine2: 'More time on the table.',
    description: 'A calendar that assigns the free room or table on its own, session packages that count themselves down, WhatsApp reminders, and an alert when a patient falls behind their treatment plan. One platform for chiropractic, physiotherapy, osteopathy and podiatry clinics.',
    ctaPrimary: 'Start 30-day trial',
    ctaSecondary: 'Book a demo',
    seeFeatures: 'See features',
    proof: ['30-day trial', 'No card required', 'Migration included'],
  },

  video: {
    eyebrow: 'See the product',
    title: 'QuiroFlow running, in 90 seconds',
    description: 'A walk through the calendar, the packages and the reminders with real clinic data — no slides.',
  },

  sectors: {
    badge: 'Who it is for',
    title: 'The same job, in four different practices',
    description: 'Change the name of the session and little else. The calendar with assigned space, the packages, the WhatsApp reminders and the treatment-plan tracking work the same whether you call it an adjustment, a session or a treatment.',
    chiro: {
      title: 'Chiropractic',
      body: 'High-volume practice flow, long care plans, and an alert when a patient drifts off their cadence.',
      link: 'See the software for chiropractic clinics',
    },
    physio: {
      title: 'Physiotherapy',
      body: 'A table or room assigned for every slot, session packages that count themselves down, and discharge tracking.',
      link: 'See the software for physiotherapy clinics',
    },
    others: {
      title: 'Osteopathy, podiatry and other manual therapies',
      body: 'They do not have a page of their own yet, but QuiroFlow is used the same way: you define the session types, the rooms and the forms. Write to us and we will show you how it fits your practice.',
    },
  },

  funcionalidades: {
    badge: 'Features',
    title: 'What no other system on your shortlist does',
    sectorTitle: 'Everything your clinic needs, in one place',
    subtitle: 'Everyone has a calendar, invoicing and forms. These three are the reason a clinic actually switches.',
    moreTitle: 'And everything else you expect from a practice management system',
  },

  platform: {
    eyebrow: 'All in one place',
    title: 'A single platform to run your practice',
    description: 'Your patients\' messages land here, you can turn new leads into patients with automated message templates (welcome, follow-up, booking reminder), launch recall campaigns, and see clear stats for your practice — without jumping between different apps.',
    short: 'One inbox, automated templates for new leads and recall campaigns, without jumping between apps.',
  },

  agenda: {
    eyebrow: 'Calendar',
    title: 'Always know where every patient is',
    description: 'QuiroFlow manages your practice flow end to end: you always know who has arrived, who\'s in session, and who\'s at checkout, with automatic room or table assignment running in the background so you never have to check by hand. Day, working-week, or full-week view — with support for several locations from the same account if your clinic has more than one site.',
    short: 'Who has arrived, who is in session and who is at checkout, with the room assigned on its own. Day, working-week or full-week view, and several sites from one account.',
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
    short: 'Reminders with a button to confirm or reschedule, and your patients\' messages in your inbox, without switching apps.',
  },

  booking: {
    eyebrow: 'Online booking',
    title: 'A booking widget on your own subdomain',
    description: 'Every clinic gets its own public booking page, with your branding and real availability. Patients book without calling, and the appointment lands straight in your calendar.',
    short: 'Your own booking page, with your branding and real opening hours. The appointment lands straight in the calendar.',
  },

  waitlist: {
    eyebrow: 'Waitlist & continuity',
    title: 'No empty slots, no patients lost mid-treatment',
    description: 'When an appointment is cancelled, QuiroFlow automatically offers that slot to the first patient on the waitlist, with a link to book it instantly. And if a patient on an active treatment plan falls behind their own cadence, you\'re alerted before they stop coming in.',
    short: 'The cancelled slot re-offers itself, and you get told when a patient falls behind their plan.',
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
    short: 'Packages that count themselves down, recurring billing through Stripe, and automatic legal invoicing.',
    visual: {
      header: 'INVOICE #0142',
      item1: 'Treatment session x1',
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
    short: 'Intake and consent with a drag-and-drop builder. Patients fill them in from their phone before they arrive.',
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
    short: 'Occupancy, value per visit, retention, conversion and first visits, by the minute and compared with the previous period.',
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

  migration: {
    badge: 'Switch systems',
    titleLine1: 'What if I lose the records when I switch?',
    titleLine2: 'You lose nothing, and you switch over a weekend.',
    description: 'It is the fear that stops almost every clinic, and it is a fair one: changing systems sounds like weeks of exporting, checking and re-uploading. QuiroFlow ships an importer so that it is not.',
    bullets: [
      'Patients and appointments import straight from your current system\'s export.',
      'Where your system allows it (PracticeHub, for example), payments, clinical notes, treatment plans and forms sync directly via API — without touching a CSV.',
      'Re-run the import whenever you like: anything already migrated is never duplicated.',
      'Coming from a spreadsheet, or software with no standard export? Import your patients via CSV, mapping your own columns, with no fixed format required.',
    ],
    fromLabel: 'Your current system',
    toLabel: 'QuiroFlow',
    items: ['Patients', 'Appointments', 'Payments', 'Clinical notes', 'Treatment plans', 'Forms'],
  },

  data: {
    badge: 'Your data, and the way out',
    title: 'Your data stays yours, including the day you leave',
    description: 'We are asking you to keep your patients\' clinical records with us. The least we can do is tell you where they live, who answers for them, and how you take them with you if you ever decide to go.',
    items: [
      {
        title: 'Hosted in the European Union',
        body: 'Your clinic\'s and your patients\' data is hosted on servers inside the EU, with no international transfers for ordinary processing.',
      },
      {
        title: 'Daily backups',
        body: 'A daily backup with retention, and point-in-time restore if something is deleted by mistake from your own account.',
      },
      {
        title: 'Full export, whenever you want',
        body: 'Patients, appointments, clinical notes, forms and billing export in open formats (CSV and PDF) from your account — no emailing to ask, no charge. There is no locked exit.',
      },
      {
        title: 'Data processor, in writing',
        body: 'Your clinic remains the controller of its patients\' data. QuiroFlow acts as data processor and signs the corresponding agreement, in line with the GDPR and the Spanish LOPDGDD.',
      },
    ],
    note: 'Need the technical detail or the processor agreement before you decide? Write to us and we will send it without putting you through a demo.',
  },

  testimonial: {
    quote: 'We migrated from PracticeHub in a weekend. Now appointment confirmations arrive on their own over WhatsApp and we\'ve stopped chasing payments by hand — the calendar and the cash register finally match up without anyone having to check them.',
    name: 'Léa · Columna Quiro',
    location: 'Valencia, Spain',
  },

  comparison: {
    badge: 'Compare',
    title: 'How QuiroFlow compares',
    subtitle: 'No exaggeration: this is what each platform shows publicly on its own website.',
    featureHeader: 'Feature',
    rows: [
      'Full export of your data from your own account',
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
      'Entry price published on its own website',
    ],
    footnote: 'Comparison built from information published on each provider\'s own website (September 2026). A "—" means the provider doesn\'t show it publicly, not that it doesn\'t exist — confirm directly with each one before deciding.',
  },

  pricing: {
    badge: 'Pricing',
    title: 'Priced per practitioner, not per patient',
    description: 'Unlimited patients on every plan. You only pay for the practitioners seeing patients — front desk and admin users are free and unlimited.',
    monthly: 'Monthly',
    annual: 'Annual',
    annualSave: 'Save ~15%',
    perMonth: '/mo',
    billedAnnually: 'billed annually',
    mostChosen: 'Recommended',
    extraPro: 'Extra practitioner: €29/mo',
    cta: 'Start 30-day trial',
    ctaSecondary: 'Talk to the team',
    exVat: 'ex. VAT',
    vatNote: 'Prices exclude VAT. 21% is added on the invoice.',
    ctaNote: '30-day trial. No card required. Migration included.',
    anchor: {
      title: 'About what one lost slot a week costs you',
      body: 'A cancellation that never gets refilled, at €45 a session, is roughly €180 a month. The Practice plan is €119. The automatic slot re-offer and the behind-schedule alert exist precisely to close that gap.',
    },
    tiers: {
      solo: {
        name: 'Solo',
        for: '1 practitioner, 1 site',
        features: [
          'Unlimited patients',
          'Free, unlimited admin users',
          'Calendar with automatic room assignment',
          'Online booking on your own page',
          'WhatsApp inbox, reminders and templates',
          'Recalls and automated campaigns',
          'Waitlist and care-plan continuity alerts',
          'Invoicing, payments and packages',
        ],
      },
      practice: {
        name: 'Practice',
        for: 'Up to 3 practitioners, 1 site',
        features: [
          'Everything in Solo',
          'Custom roles and permissions',
          'Advanced reporting: PVA, retention, conversion',
          'Extra practitioners at €29/mo',
        ],
      },
      clinic: {
        name: 'Clinic',
        for: 'Up to 6 practitioners, unlimited sites',
        features: [
          'Everything in Practice',
          'Multi-site',
          'API access and webhooks',
          'Assisted migration and priority support',
        ],
      },
    },
  },

  faq: {
    title: 'Frequently asked questions',
    description: 'The two most expensive ones — data protection and migration — first.',
    items: [
      {
        q: 'How is my patients\' data handled?',
        a: 'In line with the GDPR and the Spanish LOPDGDD. Your clinic remains the controller of its patients\' data and QuiroFlow acts as data processor, signing the corresponding agreement with each clinic. Data is hosted on servers inside the European Union.',
      },
      {
        q: 'Can I migrate from the system I use now?',
        a: 'Yes, and it usually happens over a weekend. Patients and appointments import from your current system\'s export; where the source system allows it, clinical notes, treatment plans, payments and forms sync via API. Coming from a spreadsheet or software with no standard export, you import by CSV mapping your own columns. Migration is included, not billed separately.',
      },
      {
        q: 'And if I want to leave one day — can I take my data with me?',
        a: 'Yes, and without asking permission. Patients, appointments, clinical notes, forms and billing export as CSV and PDF from your own account, whenever you want, at no charge. We would rather say it before you ask.',
      },
      {
        q: 'Does it work if I am not a chiropractor?',
        a: 'Yes. QuiroFlow is used in chiropractic, physiotherapy, osteopathy and podiatry clinics. You define the session types, the rooms, the forms and the treatment plans, so the tool adapts to how you work instead of imposing a flow on you.',
      },
      {
        q: 'What does the 30-day trial include?',
        a: 'The whole product, nothing held back and no card required. If you decide to stay during the trial, we migrate your data before you start paying.',
      },
      {
        q: 'How are practitioners counted for pricing?',
        a: 'Only practitioners seeing patients count. Front desk, admin and management are free, unlimited users on every plan, and patients are never counted.',
      },
    ],
  },

  capture: {
    title: 'Not ready for a demo yet?',
    description: 'We will email you pricing and a summary of what QuiroFlow does, so you can look at it in your own time. No calls, no strings attached.',
    emailLabel: 'Your email',
    clinicLabel: 'Your clinic name (optional)',
    consentBefore: 'I have read and accept the',
    consentLink: 'privacy policy',
    button: 'Send',
    sending: 'Sending...',
    success: 'Got it. We will be in touch within 24 hours.',
    error: 'That did not go through. Try again, or email us directly.',
  },

  finalCta: {
    title: 'Start changing how you run your clinic',
    description: 'Open a 30-day trial with no card, or tell us how you work and we will show you how QuiroFlow fits.',
    cta: 'Start 30-day trial',
    ctaSecondary: 'Book a demo',
  },

  about: {
    badge: 'About us',
    title: 'QuiroFlow is maintained by the clinic that needed it',
    description: 'We are not an agency that decided to build healthcare software. We are COLUMNAQUIRO S.L., the company behind Columna Quiro, a chiropractic clinic in Valencia — and QuiroFlow was built inside it because nothing on the market did what we needed.',
    story: {
      title: 'Why it exists',
      paragraphs: [
        'Columna Quiro ran on software that cost more than it solved. The calendar did not know which room was free, packages were tallied by hand, reminders went out from a personal phone, and nobody noticed a patient had stopped coming until two months later.',
        'We built QuiroFlow for the clinic itself, with a real practice\'s calendar and till riding on it. Every feature on this site came out of a problem we had in the treatment room, not off a competitor\'s list.',
        'When other clinics started asking what we were using, we decided to open it up. That means we are still the product\'s first users: if something breaks, it breaks in our own calendar before it breaks in yours.',
      ],
    },
    people: {
      title: 'Who you talk to',
      description: 'We are a small team. When you book a demo or write to support, there is no call centre in between.',
      items: [
        {
          name: 'Raúl',
          role: 'Product and engineering',
          body: 'Builds and maintains QuiroFlow, and is the person on the other side of the demo link. If you have a technical question about migration or data export, he is the one answering it.',
        },
        {
          name: 'Léa',
          role: 'Columna Quiro · daily use in clinic',
          body: 'Sees patients at Columna Quiro and uses QuiroFlow every day. A good share of what is on the roadmap comes from what gets in her way first.',
        },
      ],
    },
    facts: {
      title: 'The facts, unvarnished',
      contactLabel: 'Direct contact',
      items: [
        { label: 'Company', value: 'COLUMNAQUIRO S.L. · VAT no. B16365504' },
        { label: 'Where we are', value: 'Valencia, Spain' },
        { label: 'Where support comes from', value: 'Valencia, in Spanish, English and French' },
        { label: 'Where your data lives', value: 'Servers in the European Union' },
      ],
    },
    cta: {
      title: 'Rather ask before you try it?',
      description: 'Write to us and you get an answer from someone who either sees patients or wrote the code. Usually the same day.',
      button: 'Book a demo',
      emailButton: 'Send an email',
    },
  },

  resources: {
    badge: 'Resources',
    title: 'Resources for running a clinic',
    description: 'Practical guides on scheduling, retention, packages and data protection in manual therapy clinics. No filler.',
    empty: {
      title: 'Nothing published yet',
      body: 'We are writing the first guides. Leave us your email and we will tell you when the first one lands — same form we use to send you pricing.',
    },
    readMore: 'Read',
    backToList: 'Back to Resources',
    publishedOn: 'Published on',
    readingTime: 'min read',
  },

  quiropractica: {
    badge: 'Chiropractic',
    title: 'Practice management software for chiropractic clinics',
    description: 'A calendar with practice flow and automatic room assignment, care plans that alert you when a patient falls behind, packages with recurring billing, digital clinical records and WhatsApp reminders. For solo chiropractors and for multi-site practices.',
    ctaPrimary: 'Start 30-day trial',
    ctaSecondary: 'Book a demo',
    seeFeatures: 'See how it works',
    features: {
      flujo: {
        eyebrow: 'Practice flow',
        title: 'High volume without losing sight of anyone',
        description: 'A chiropractic practice moves a lot of short visits in a day, and that is where control slips. QuiroFlow tells you at any moment who has arrived, who is in the room, who is waiting and who is at checkout, and assigns the free room automatically when the appointment is created. Day, working-week or full-week view, and several sites from one account.',
      },
      planes: {
        eyebrow: 'Care plans',
        title: 'The patient falling off the plan, before they fall off',
        description: 'A chiropractic care plan lives on cadence: twice a week, then once, then maintenance. QuiroFlow knows each patient\'s cadence and tells you when someone drifts behind theirs, while you can still get them back — instead of you finding out two months later going through the calendar.',
      },
      bonos: {
        eyebrow: 'Packages and memberships',
        title: 'Packages and memberships that charge themselves',
        description: 'Sell adjustment packages or maintenance memberships and let QuiroFlow deduct the session at each visit. Automated recurring billing with Stripe and automatic legal invoicing, so the month\'s takings do not depend on somebody chasing payments.',
      },
      whatsapp: {
        eyebrow: 'WhatsApp and waitlist',
        title: 'The cancelled slot refills itself',
        description: 'Automatic reminders with buttons to confirm or reschedule in one tap. And when someone cancels, the slot is offered automatically to the first patient on the waitlist, with a link to book it on the spot. Messages your patients send land in your inbox inside QuiroFlow.',
      },
      historia: {
        eyebrow: 'Clinical records and consent',
        title: 'Assessment, adjustments and consent without paper',
        description: 'Digital clinical records holding the initial assessment, a log of every adjustment, and any scans or reports you attach. Patients fill in first-visit forms and informed consent from their phone before they arrive.',
      },
      informes: {
        eyebrow: 'Reports',
        title: 'Value per visit, retention and first-visit conversion',
        description: 'Occupancy per practitioner and per room, revenue, average value per visit, retention, and how many first visits turn into a full care plan. Updated by the minute and compared against the previous period, without exporting anything to a spreadsheet.',
      },
    },
    edge: {
      title: 'Two things that decide a chiropractic practice\'s year',
      description: 'Chiropractic is not decided in the adjustment. It is decided by whether the patient finishes the plan, and whether the calendar leaves holes along the way.',
      items: [
        {
          title: 'It warns you before a patient abandons the plan',
          body: 'Care is lost between visits, not in the room. If a patient on an active plan drifts off their own cadence, QuiroFlow tells you while you can still call them, rather than you spotting it when you close the month.',
        },
        {
          title: 'The Google review asks for itself',
          body: 'After the visit, QuiroFlow can request the review automatically. For a practice competing in local search, that consistency ends up worth more than any one-off campaign.',
        },
      ],
    },
    faq: {
      title: 'Frequently asked questions',
      items: [
        {
          q: 'Does QuiroFlow work if I am a solo chiropractor?',
          a: 'Yes. It works the same for a solo practice as for a centre with several rooms and practitioners. Pricing follows the number of sites and practitioners seeing patients, so a small practice does not pay for what it does not use.',
        },
        {
          q: 'Can I manage care plans with different cadences?',
          a: 'Yes. You define each plan\'s cadence (say two visits a week for a month, then one) and QuiroFlow follows it patient by patient, alerting you when someone falls behind their own.',
        },
        {
          q: 'How are rooms assigned?',
          a: 'QuiroFlow assigns the free room automatically when the appointment is created, based on its length and visit type. You can always override it by hand.',
        },
        {
          q: 'Can I sell adjustment packages and monthly memberships?',
          a: 'Yes. Packages deduct a session at each visit with no manual tally, and monthly memberships charge themselves through Stripe, with automatic legal invoicing if you turn it on.',
        },
        {
          q: 'Can I migrate from PracticeHub?',
          a: 'Yes, and it is the case we cover best: patients and appointments import from your export, and payments, clinical notes, treatment plans and forms sync via API. From any other system you can import by CSV mapping your own columns.',
        },
        {
          q: 'How is patient data handled?',
          a: 'In line with the GDPR and the Spanish LOPDGDD, with data hosted on servers in the European Union. QuiroFlow acts as data processor and signs the corresponding agreement with each clinic, which remains the controller of its own patients\' data.',
        },
      ],
    },
    cta: {
      title: 'See QuiroFlow with your own practice\'s data',
      description: 'Open a 30-day trial with no card, or tell us how you work and we will show you how it fits your chiropractic clinic.',
      button: 'Start 30-day trial',
      buttonSecondary: 'Book a demo',
    },
    mockups: {
      invoiceItem: 'Chiropractic adjustment x1',
      calendarType: 'Adjustment',
    },
  },

  fisioterapia: {
    badge: 'Physiotherapy',
    title: 'Practice management software for physiotherapy clinics',
    description: 'A calendar that assigns the free treatment room or table on its own, session packages that count themselves down, digital clinical records, and WhatsApp reminders. One platform, whether you practise alone or run several locations.',
    ctaPrimary: 'Start 30-day trial',
    ctaSecondary: 'Book a demo',
    seeFeatures: 'See how it works',
    features: {
      agenda: {
        eyebrow: 'Calendar and occupancy',
        title: 'Every session with its room and table already assigned',
        description: 'QuiroFlow assigns the free room or treatment table for each slot automatically, so you never end up with two patients booked into the same space. Day, working-week or full-week view, and several locations from one account.',
      },
      bonos: {
        eyebrow: 'Packages and billing',
        title: 'Session packages that count themselves down',
        description: 'Sell packages of 5, 10 or 20 sessions and let QuiroFlow deduct one every time the patient attends. Automated recurring billing through Stripe for flat-rate plans, plus automatic legal invoicing — no chasing payments at month end.',
      },
      whatsapp: {
        eyebrow: 'WhatsApp reminders',
        title: 'Fewer slots lost to a forgotten appointment',
        description: 'Automatic reminders with buttons to confirm or reschedule in one tap. And when someone cancels, the slot is offered straight to the first patient on the waitlist, with a link to book it on the spot.',
      },
      historia: {
        eyebrow: 'Clinical records and consent',
        title: 'Assessment, progress and consent without paper',
        description: 'Digital clinical records holding the initial assessment, session-by-session progress, and any scans or reports you attach. Patients fill in intake forms and informed consent from their phone before they arrive.',
      },
      reserva: {
        eyebrow: 'Online booking',
        title: 'A booking page with your own branding',
        description: 'Your clinic gets its own public booking page on your subdomain, with your real opening hours and each physiotherapist\'s availability. Patients book without calling and the appointment lands straight in your calendar.',
      },
      informes: {
        eyebrow: 'Reports',
        title: 'Occupancy, retention and value per session',
        description: 'Occupancy per physiotherapist and per room, revenue, average value per visit, retention, and how many first visits turn into a full course of treatment. Updated by the minute and compared against the previous period.',
      },
    },
    edge: {
      title: 'Two things that matter over a long course of treatment',
      description: 'Physiotherapy is rarely decided in a single session. It is decided by whether the patient finishes the plan, and whether they come back next year.',
      items: [
        {
          title: 'It warns you before a patient quietly stops coming',
          body: 'A course of treatment is lost in the gap between sessions, not in the treatment room. If a patient on an active plan falls behind their own cadence, QuiroFlow tells you while you can still get them back, instead of you noticing two months later.',
        },
        {
          title: 'Google reviews ask for themselves',
          body: 'After the visit, QuiroFlow can request the review automatically. For a clinic competing in local search, that consistency ends up worth more than any one-off campaign.',
        },
      ],
    },
    faq: {
      title: 'Frequently asked questions',
      items: [
        {
          q: 'Does QuiroFlow work if I am a single physiotherapist?',
          a: 'Yes. It works the same for a solo practice as for a centre with several rooms and practitioners. Pricing follows the number of locations and physiotherapists, so a small practice does not pay for what it does not use.',
        },
        {
          q: 'Can I manage session packages?',
          a: 'Yes. Create packages with any number of sessions and each visit deducts one automatically, with no manual tally. You can also switch on recurring billing for flat-rate plans or monthly memberships.',
        },
        {
          q: 'How are treatment rooms and tables assigned?',
          a: 'QuiroFlow assigns the free space automatically when the appointment is created, based on its length and session type. You can always override it by hand.',
        },
        {
          q: 'Can patients book online?',
          a: 'Yes. Every clinic gets its own booking page on its subdomain, showing real availability per physiotherapist. The appointment goes straight into your calendar, with no calls or manual confirmation.',
        },
        {
          q: 'Can I migrate from the software I use now?',
          a: 'Yes. We import patients and appointments from your own export, and from any other system you can import by CSV mapping your own columns, with no fixed format required.',
        },
        {
          q: 'How is patient data handled?',
          a: 'In line with the GDPR and the Spanish LOPDGDD, with data hosted on servers in the European Union. QuiroFlow acts as data processor and signs the corresponding agreement with each clinic, which remains the controller of its own patients\' data.',
        },
      ],
    },
    cta: {
      title: 'See QuiroFlow with your own clinic\'s data',
      description: 'Open a 30-day trial with no card, or tell us how you work and we will show you how it fits your physiotherapy practice.',
      button: 'Start 30-day trial',
      buttonSecondary: 'Book a demo',
    },
    mockups: {
      invoiceItem: 'Physiotherapy session x1',
      calendarType: 'Session',
    },
  },

  footer: {
    productTitle: 'Product',
    sectorsTitle: 'By speciality',
    companyTitle: 'Company',
    features: 'Features',
    pricing: 'Pricing',
    comparison: 'Compare',
    migrate: 'Switch systems',
    chiro: 'Chiropractic',
    physio: 'Physiotherapy',
    about: 'About us',
    resources: 'Resources',
    copyright: '© 2026 QuiroFlow. All rights reserved.',
    privacy: 'Privacy policy',
    terms: 'Legal notice',
    cookies: 'Cookie preferences',
  },

  consent: {
    title: 'Cookies',
    body: 'We use cookies that are necessary for the site to work and, only if you allow it, Google cookies to measure whether our ads lead to a demo. Declining limits nothing on the site.',
    accept: 'Accept',
    reject: 'Decline',
    settings: 'Customise',
    save: 'Save preferences',
    always: 'Always on',
    necessaryTitle: 'Necessary',
    necessaryBody: 'Required for the site to work and to remember your language and cookie choices.',
    adsTitle: 'Advertising',
    adsBody: 'Google Ads. Lets us see which ads end in a demo or a pricing request.',
    analyticsTitle: 'Analytics',
    analyticsBody: 'Aggregate measurement of site usage, so we know which pages work and which do not.',
  },

  mockups: {
    calendar: {
      weekLabel: 'Working week',
      dateRange: 'Sep 1 – 5',
      days: ['MON', 'TUE', 'WED'],
      types: {
        ajuste: 'Session',
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

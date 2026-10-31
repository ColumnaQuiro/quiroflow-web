import type { Messages } from './es'

export const en: Messages = {
  nav: {
    features: 'Features',
    pricing: 'Pricing',
    comparison: 'Compare',
    migrate: 'Switch systems',
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
    titleLine1: 'Your whole clinic in one app.',
    titleLine2: 'From the first message to the re-exam.',
    description: "The leads from your ads, the AI receptionist that answers and books, the calendar, posture analysis, care plans, packages, VeriFactu invoices and your patients' app. It all shares one patient record, so nothing needs syncing and nothing gets lost on the way. For chiropractic, physiotherapy, osteopathy and podiatry clinics.",
    ctaPrimary: 'Start 15-day trial',
    ctaSecondary: 'Book a demo',
    seeFeatures: 'See features',
    proof: ['15-day trial', 'No card required', 'Migration included'],
    // The five steps of a patient's journey, which name the One app section below.
    verbs: ['Attract', 'Respond', 'Treat', 'Get paid', 'Retain'],
  },

  // Everything the product does, grouped by the step of the patient's
  // journey it serves. Only what is live in the app: web chat, Messenger and
  // replying to Google reviews join once they are in production.
  oneApp: {
    badge: 'One app',
    title: 'Five things a clinic does, in one place',
    description: "A clinic doesn't buy a CRM, a receptionist and a practice management system: it wants new patients to arrive and existing ones to stay. Everything QuiroFlow does sits in one of these five steps, and all of them read the same patient record.",
    pillars: [
      { verb: 'Attract', what: 'New patients find you.', items: ['Leads from your Meta ads', 'A leads board by stage', 'Cost per lead and per patient', 'Online booking with your brand'] },
      { verb: 'Respond', what: 'Nobody is left waiting.', items: ['An AI receptionist, at night too', 'WhatsApp and Instagram in one inbox', 'Booked into the real calendar', 'Reminders confirmed in one tap'] },
      { verb: 'Treat', what: 'The visit, paper-free.', items: ['A calendar with rooms assigned', 'Posture analysis', 'Care plans and re-exams', 'Home exercises'] },
      { verb: 'Get paid', what: 'The till balances itself.', items: ['Packages and memberships', 'VeriFactu invoices', 'Online payment', 'Gift cards'] },
      { verb: 'Retain', what: 'They come back, and say so.', items: ['Recall reminders', 'A Google review asked for after the visit', 'Patient app with Wallet', 'Referrals'] },
    ],
  },

  // The hero's illustration (JourneyIllustration.vue). Invented patient, invented numbers.
  journey: {
    aria: "A patient's journey inside QuiroFlow: attract, respond, treat, get paid and retain, around one app.",
    center: 'one app · one record',
    lead: 'Laura G. · new lead',
    leadFrom: 'Meta Ads → WhatsApp',
    ask: 'Any time free on Tuesday?',
    reply: 'Tuesday 17:30, booked ✓',
    replyBy: 'AI receptionist · 23:12',
    shoulders: 'Shoulders',
    shouldersValue: '4.2° right',
    pelvis: 'Pelvis',
    pelvisValue: '1.8° left',
    plan: '12-visit plan',
    invoiceItem: '10-session package',
    amount: '€380.00',
    accepted: 'Accepted by the AEAT',
    review: 'Review asked for after the visit',
    recall: 'Re-exam in 6 weeks',
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
    osteo: {
      title: 'Osteopathy',
      body: 'A case history and body chart filled in on the phone before the first visit, notes with scans attached, and recalls that do not slip.',
      link: 'See the software for osteopaths',
    },
    podo: {
      title: 'Podiatry',
      body: 'A room assigned for every appointment, progress photos on the record, and product sales with stock.',
      link: 'See the software for podiatrists',
    },
    others: {
      title: 'Other manual therapies',
      body: 'QuiroFlow works the same way in any manual therapy practice: you define the session types, the rooms and the forms. Write to us and we will show you how it fits yours.',
    },
  },

  funcionalidades: {
    badge: 'Features',
    title: 'What gives you hours back every week',
    sectorTitle: 'Everything your clinic needs, in one place',
    subtitle: 'Everyone has a calendar, invoicing and forms. These three are the reason a clinic actually switches.',
    essentialsTitle: 'What the tax office and your patients ask of you',
    moreTitle: 'And everything else you expect from a practice management system',
  },

  verifactu: {
    eyebrow: 'VeriFactu',
    title: 'Invoices ready for VeriFactu, with no change of software in 2027',
    description: "VeriFactu is Spain's new invoicing rule. Every invoice carries its QR code, is chained to the one before, and is sent to the Spanish tax agency (AEAT) by itself within a minute of being issued. Refunding a payment issues the corrective invoice, and each location keeps its own series. Send with your clinic's own certificate, or let QuiroFlow send on your behalf under a power of representation. Try it in test mode today; real sending starts by itself on 1 January 2027.",
    short: 'A QR on every invoice, chained records and automatic sending to the AEAT, with your certificate or ours.',
    visual: {
      header: 'INVOICE F2027-0142',
      item: 'Treatment session x1',
      itemPrice: '€45.00',
      total: 'Total',
      totalPrice: '€45.00',
      qrLabel: 'Tax QR · VERI*FACTU',
      chained: 'Chained to F2027-0141',
      sent: 'Accepted by the AEAT',
    },
  },

  app: {
    eyebrow: 'App for iPhone, iPad and Android',
    title: 'The clinic in your pocket, for your team and your patients',
    description: 'Your team carries the calendar, patient records, visit notes, payments and the inbox on their phone, signs in with Face ID, and gets a notification when an online booking or a message comes in. On the front-desk iPad, patients sign their forms as they arrive. And your patients use the same app to confirm or change their appointment, pay an outstanding invoice by card, join the waitlist and do the exercises you set them.',
    short: "Calendar, records, payments and inbox on your team's phones; confirming, paying and exercises on your patients'.",
    visual: {
      staffHeader: 'YOUR TEAM',
      staff: ['Day, 3-day or week calendar', 'Record, S/O/A/P notes and payments', "Today's till and the clinic's figures", 'Front-desk mode: sign on the iPad'],
      patientHeader: 'YOUR PATIENTS',
      patient: ['Confirm or change the appointment', 'Pay an invoice by card', 'Home exercises, with video', 'Join the waitlist'],
    },
  },

  platform: {
    eyebrow: 'One inbox',
    title: 'WhatsApp and Instagram in one inbox',
    description: 'WhatsApp and Instagram messages land in the same inbox, and an unknown number that writes to you becomes a lead. Assign each conversation to someone, leave internal notes that mention a colleague, snooze it until later and, without leaving the chat, book the appointment or send a payment link.',
    short: 'WhatsApp and Instagram together: assign, leave internal notes for the team, snooze a conversation, and book or charge from the chat.',
  },

  automations: {
    eyebrow: 'Automations',
    title: 'Flows you build by dragging',
    short: 'A visual editor for chaining messages, waits and conditions: wait for the patient to fill in a form, take one path or another depending on their answers, and write to them in their language.',
  },

  exercises: {
    eyebrow: 'Home exercises',
    title: 'What happens between sessions',
    short: 'Assign an exercise programme with a video or photo from the patient record. The patient follows it in the app with a daily reminder, and you are told if they stop.',
  },

  payments: {
    eyebrow: 'Payments',
    title: 'Take payments online and balance the till',
    short: "Payment links from the chat, outstanding invoices patients pay by card in the app, and today's till with every payment and what it was for.",
  },

  growth: {
    eyebrow: 'Growth',
    title: 'Bringing in new patients',
    short: 'Leads from your ads land on a board by stage on their own, the AI receptionist answers them on WhatsApp and books the visit, and the Google review is requested after the visit.',
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
    title: 'Reminders confirmed in one tap',
    description: 'Automatic reminders with buttons to confirm or reschedule an appointment in one tap, recalls for inactive patients, and the messages your patients send you land directly in your QuiroFlow inbox — no switching apps, no relying on them opening an email.',
    short: 'WhatsApp reminders with a button to confirm or reschedule, and automatic recalls for patients you have not seen in a while.',
  },

  booking: {
    eyebrow: 'Online booking',
    title: 'A booking widget on your own subdomain',
    description: 'Every clinic gets its own public booking page, with your branding and real availability. Patients book without calling, and the appointment lands straight in your calendar.',
    short: 'Your own booking page, with your branding and real opening hours. The appointment lands straight in the calendar.',
  },

  receptionist: {
    eyebrow: 'New · AI receptionist',
    title: 'Answers your WhatsApp and books the visit, even at eleven at night',
    description: 'The AI receptionist replies on WhatsApp to your patients and to people writing for the first time, using what you tell it about the clinic: prices, hours, what you treat. It offers real free times from your calendar and, once the patient picks one, books or moves the visit itself. You decide when it answers on its own — outside clinic hours, or during them too — and when it only leaves a draft for you to approve. Anything that is not its to answer goes to a person with a note in the conversation, and it never cancels a visit.',
    visual: {
      header: 'WHATSAPP · 22:47',
      patient1: 'Hi, any space this week for a first visit? My back is killing me',
      ai1: 'Hi Laura. The first visit is €50 and includes the assessment and the first session. I have Thursday at 10:00 or Friday at 17:30. Does either suit you?',
      patient2: 'Thursday at 10',
      ai2: 'Done: your first visit is on Thursday at 10:00 with Marta. You will get the confirmation here.',
      booked: 'Booked by the AI receptionist',
      footer: 'Answered on its own, outside clinic hours',
    },
  },

  waitlist: {
    eyebrow: 'Waitlist & continuity',
    title: 'No empty slots, no patients lost mid-treatment',
    description: "When an appointment is cancelled, QuiroFlow automatically offers that slot to the first patient on the waitlist, with a link to book it instantly. And if a patient on an active treatment plan falls behind their own cadence, you're alerted before they stop coming in. Plans are set as N visits every M weeks, booked in full in one go, and show week by week whether the patient is on track.",
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
    description: 'Instant invoices, session packages the whole family can use, and memberships with automated recurring billing via Stripe. Each treatment plan says how it is paid — per visit, with a package or with a membership — and legal invoicing for your memberships can run automatically, with no chasing payments every month.',
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
    description: 'Build your own intake and consent forms with a simple drag-and-drop builder, with signatures and body diagrams where the patient marks where it hurts. Patients fill them in, in their own language, from their phone before the appointment, or on the front-desk iPad when they arrive.',
    short: 'Intake and consent with signature and body diagram. Patients fill them in from their phone before they arrive, or on the front-desk iPad.',
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
    description: 'Occupancy, revenue, PVA (average value per visit), retention, conversion, number of first visits, and per-practitioner stats, updated by the minute and compared against the previous period — not just how many visits you had, but how your business is trending day to day. Plus how long patients wait and how long sessions run, every message sent on any channel, and your own dashboards you can download as a PDF.',
    short: 'Occupancy, value per visit, retention and conversion against the previous period, waiting times, and your own dashboards you can download as a PDF.',
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
      {
        title: 'Two-factor sign-in',
        body: 'Each person can protect their access with a code from an authenticator app, and your clinic can require it for the whole team. A stolen password on its own opens no patient record.',
      },
      {
        title: 'Activity log',
        body: "Who opened or changed each record, and who signed in and when, is logged and you can check it from Settings. And if you send a report over WhatsApp, it goes as a PDF that only opens with the patient's ID number.",
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
    yes: 'Yes',
    notShown: 'Not shown publicly',
    rows: [
      'Full export of your data from your own account',
      'Assigns a free room or table automatically',
      'WhatsApp appointment reminders and confirmation',
      'Patients choose how many reminders they get',
      '24/7 online booking for your patients',
      'Digital intake and consent forms',
      'Automatic legal invoices for packages and memberships',
      'Retention, conversion, and value-per-visit stats',
      'Waitlist: automatic re-offer of cancelled slots',
      'Alert when a patient falls behind on their treatment plan',
      'Automatic thank-you campaign for referring patients',
      'Automatic Google review request after the visit',
      'AI receptionist that answers and books appointments',
      'Posture analysis from photos',
      'Exercise library with video for patients',
      'Entry price published on its own website',
    ],
    footnote: 'Comparison built from information published on each provider\'s own website, or confirmed by the provider itself (October 2026). A "—" means the provider doesn\'t show it publicly, not that it doesn\'t exist — confirm directly with each one before deciding.',
  },

  plansStrip: {
    title: 'What it costs, without asking for a quote',
    price: {
      title: 'From €{price}/mo per practitioner',
      body: 'Excluding VAT, with unlimited patients. Front desk and admin users do not count as practitioners.',
      link: 'See the three plans',
    },
    trial: {
      title: '15-day trial, no card',
      body: 'With your own patients and calendar, and migration included if you are coming from another system.',
      link: 'Start the trial',
    },
    verifactu: {
      title: 'VeriFactu invoicing',
      body: 'QR code, chaining and sending to the AEAT from the same system. €7.50/mo per location, only once you start sending.',
      link: 'How VeriFactu works',
    },
    automations: {
      text: 'The AI receptionist, WhatsApp reminders and the waiting list are under',
      link: 'automation',
    },
  },

  pricing: {
    badge: 'Pricing',
    title: 'Priced per practitioner, not per patient',
    description: 'Unlimited patients on every plan. You only pay for the practitioners seeing patients — front desk and admin users are free and unlimited.',
    monthly: 'Monthly',
    annual: 'Annual',
    annualSave: 'Save 10%',
    perMonth: '/mo',
    billedAnnually: 'billed annually',
    mostChosen: 'Recommended',
    extraPro: 'Extra practitioner: €19/mo',
    growthAddOn: 'Growth (lead capture, AI receptionist and reputation): +€39/mo',
    receptionistAddOn: 'Just the AI receptionist: +€19/mo',
    cta: 'Start 15-day trial',
    ctaSecondary: 'Talk to the team',
    exVat: 'ex. VAT',
    vatNote: 'Prices exclude VAT. 21% is added on the invoice.',
    verifactuNote: 'VeriFactu: €7.50/mo per location, only from the day you start sending to the AEAT.',
    receptionistNote: 'AI receptionist: €19/mo (€17/mo billed annually) on its own, or included in Growth and in the Practice and Clinic plans. 1,000 replies a month included; each further 1,000 is €15.',
    ctaNote: '15-day trial. No card required. Migration included.',
    anchor: {
      title: 'About what one lost slot a week costs you',
      body: 'A cancellation that never gets refilled, at €45 a session, is roughly €180 a month. The Practice plan is €99. The automatic slot re-offer and the behind-schedule alert exist precisely to close that gap.',
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
          'App for your team and your patients',
        ],
      },
      practice: {
        name: 'Practice',
        for: 'Up to 4 practitioners, 1 site',
        features: [
          'Everything in Solo',
          'Custom roles and permissions',
          'Advanced reporting: PVA, retention, conversion',
          'Extra practitioners at €19/mo',
          'Growth included: lead capture, AI receptionist and reputation',
        ],
      },
      clinic: {
        name: 'Clinic',
        for: 'Unlimited practitioners, unlimited sites',
        features: [
          'Everything in Practice',
          'Multi-site',
          'API access and webhooks',
          'Assisted migration and priority support',
          'Growth included: lead capture, AI receptionist and reputation',
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
        q: 'What does the AI receptionist do, and what does it cost?',
        a: 'It answers WhatsApp from your patients and from people writing for the first time, using what you tell it about the clinic and the real free times in your calendar, and books or moves the visit once the patient picks a time. You choose whether it answers on its own (outside clinic hours, or during them too) or leaves drafts for you to approve, and it hands anything that is not its to answer to a person. It costs €19/mo (€17/mo billed annually) and includes 1,000 replies a month; each further 1,000 is €15, and you can set a monthly limit. It is included in Growth and in the Practice and Clinic plans.',
      },
      {
        q: 'Is QuiroFlow ready for VeriFactu?',
        a: "Yes. Every invoice carries its QR code, is chained to the previous one and is sent to the AEAT automatically. You can send with your clinic's own certificate or authorise QuiroFlow to send on your behalf. Until 1 January 2027 it runs in test mode at no charge; from that day, real sending costs €7.50 a month per location.",
      },
      {
        q: 'Is there a mobile app?',
        a: 'Yes, for iPhone, iPad and Android. Your team has the calendar, records, payments and inbox on their phone, and your patients use the same app to confirm their appointments, pay and do their exercises. It is included in every plan.',
      },
      {
        q: 'Does it work if I am not a chiropractor?',
        a: 'Yes. QuiroFlow is used in chiropractic, physiotherapy, osteopathy and podiatry clinics. You define the session types, the rooms, the forms and the treatment plans, so the tool adapts to how you work instead of imposing a flow on you.',
      },
      {
        q: 'What does the 15-day trial include?',
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
    description: 'Open a 15-day trial with no card, or tell us how you work and we will show you how QuiroFlow fits.',
    cta: 'Start 15-day trial',
    ctaSecondary: 'Book a demo',
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
    ctaPrimary: 'Start 15-day trial',
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
        description: "A chiropractic care plan lives on cadence: twice a week, then once, then maintenance. QuiroFlow knows each patient's cadence, books the whole plan in one go, shows you week by week whether they are on track, and tells you when someone drifts behind, while you can still get them back — instead of you finding out two months later going through the calendar.",
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
        description: "Digital clinical records holding the initial assessment, S/O/A/P notes for every adjustment and the spinal listings beside them, marked per segment left or right, with one tap to repeat the last visit's. Patients fill in first-visit forms and informed consent from their phone before they arrive.",
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
          a: 'Yes. Each plan is set as N visits every M weeks (say two a week for a month, then one every two weeks), is booked in full in one go, and QuiroFlow follows it patient by patient, alerting you when someone falls behind their cadence.',
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
      description: 'Open a 15-day trial with no card, or tell us how you work and we will show you how it fits your chiropractic clinic.',
      button: 'Start 15-day trial',
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
    ctaPrimary: 'Start 15-day trial',
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
        description: 'Digital clinical records holding the initial assessment, session-by-session progress in S/O/A/P notes, and any scans or reports you attach. Patients fill in intake forms and informed consent from their phone before they arrive, and can mark on a body diagram where it hurts.',
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
      description: 'Physiotherapy is rarely decided in a single session. It is decided by whether the patient finishes the plan, and by what they do between sessions.',
      items: [
        {
          title: 'It warns you before a patient quietly stops coming',
          body: 'A course of treatment is lost in the gap between sessions, not in the treatment room. If a patient on an active plan falls behind their own cadence, QuiroFlow tells you while you can still get them back, instead of you noticing two months later.',
        },
        {
          title: 'Home exercises, and a warning if they stop',
          body: 'Assign an exercise programme with a video or photo from the patient record. The patient follows it in the app with a daily reminder, and if they stop it shows up beside the plans falling behind, while you can still do something about it.',
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
          q: 'Can I set exercises for home?',
          a: 'Yes. From the patient record you assign single exercises or a whole programme, with your own video or photo. The patient sees them in the app with a daily reminder, ticks off the ones they do, and QuiroFlow tells you when they stop.',
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
      description: 'Open a 15-day trial with no card, or tell us how you work and we will show you how it fits your physiotherapy practice.',
      button: 'Start 15-day trial',
      buttonSecondary: 'Book a demo',
    },
    mockups: {
      invoiceItem: 'Physiotherapy session x1',
      calendarType: 'Session',
    },
  },

  // VeriFactu is left out of the osteopathy and podiatry copy in English and
  // French on purpose: it is a Spanish tax rule, and means nothing to a
  // clinic reading this page outside Spain.
  osteopatia: {
    badge: 'Osteopathy',
    title: 'Practice management software for osteopathy clinics',
    description: 'A calendar that assigns the free treatment room on its own, a case history and body chart the patient fills in on their phone before the first visit, notes for every session with their scans attached, and recalls that do not slip. For the osteopath who works alone and for clinics with several locations.',
    ctaPrimary: 'Start 15-day trial',
    ctaSecondary: 'Book a demo',
    seeFeatures: 'See how it works',
    features: {
      agenda: {
        eyebrow: 'Calendar',
        title: 'First visits and follow-ups, each with its own room',
        description: 'A first osteopathy visit does not last as long as a follow-up. You set each session type with its length and QuiroFlow assigns the free room when the appointment is booked, so you never end up with two patients on the same table. Day or week view, and several locations from one account.',
      },
      historia: {
        eyebrow: 'Case history and body chart',
        title: 'The case history, done before they walk in',
        description: 'The patient fills in the first-visit form and the consent form on their phone before they come, and marks on a body chart with their finger where it hurts. You choose the chart: upload the image you already use in clinic. At every session you write your notes on the patient record, next to the reports and scans you attach as PDFs or photos.',
      },
      revisiones: {
        eyebrow: 'Recalls and WhatsApp',
        title: 'The patient who was due back comes back',
        description: 'A lot of osteopathy lives on the follow-up a few months later. QuiroFlow lists the patients who have gone a while without an appointment so the front desk can get in touch, and WhatsApp reminders with a button to confirm or move the appointment cut no-shows. When someone cancels, the slot is offered to the first person on the waiting list.',
      },
      bonos: {
        eyebrow: 'Packages and invoicing',
        title: 'Packages, payments and invoices from the same record',
        description: 'Sell session packages that count down on their own at every visit, take payment by card or at the desk, and issue the invoice from the patient record.',
      },
      informes: {
        eyebrow: 'Reports',
        title: 'Occupancy, revenue and returning patients',
        description: 'Occupancy by practitioner and by room, revenue, average visit value and retention, live and compared with the previous period, without exporting anything to a spreadsheet.',
      },
    },
    edge: {
      title: 'Two things an osteopathy clinic will appreciate',
      description: 'Recording progress without losing time, and patients who do not stop halfway.',
      items: [
        {
          title: 'Posture analysis from photos',
          body: 'Take front, side and back photos with a phone or iPad. QuiroFlow places the reference points, you adjust them, and it saves the measurements to compare at the re-assessment. They are estimates for recording progress, not a diagnosis.',
        },
        {
          title: 'Treatment plans with behind-schedule alerts',
          body: 'When you propose several sessions, you book the whole plan at once and QuiroFlow tells you when a patient falls behind their own cadence, while there is still time to call them.',
        },
      ],
    },
    faq: {
      title: 'Frequently asked questions',
      items: [
        {
          q: 'Does QuiroFlow work if I am an osteopath working alone?',
          a: 'Yes. It works the same for a solo practice as for a clinic with several rooms and practitioners. The Solo plan is for one practitioner and one location, and you only pay for the practitioners who see patients: front desk and admin users are free.',
        },
        {
          q: 'Can I use my own body chart?',
          a: 'Yes. In the form builder you add a drawable image block and upload whatever chart you want. The patient marks on it with their finger on their phone, and what they mark is saved to their record.',
        },
        {
          q: 'How do I keep track of patients who come back every few months?',
          a: 'The recalls list shows the patients who have gone a while without an appointment, counting from the last visit they attended. The front desk contacts them from there, snoozes them until a date or dismisses them, and a patient only comes back onto the list if they lapse again.',
        },
        {
          q: 'Can I move over from the software I use now?',
          a: 'Yes. We import patients and appointments from your current software\'s export, and from any other system you can import a CSV by mapping your own columns. Migration is included.',
        },
        {
          q: 'How is patient data handled?',
          a: 'In line with the GDPR, with the data hosted on servers in the European Union. QuiroFlow acts as data processor and signs the corresponding agreement with each clinic, which remains the controller of its patients\' data.',
        },
      ],
    },
    cta: {
      title: 'See QuiroFlow with your own clinic\'s data',
      description: 'Start a 15-day trial with no card, or tell us how you work and we will show you how it fits your osteopathy clinic.',
      button: 'Start 15-day trial',
      buttonSecondary: 'Book a demo',
    },
    mockups: {
      invoiceItem: 'Osteopathy session x1',
      calendarType: 'Osteopathy',
    },
  },

  podologia: {
    badge: 'Podiatry',
    title: 'Practice management software for podiatry clinics',
    description: 'A calendar by treatment room with short routine visits and long assessments on the same day, photos and reports on the patient record, product sales with stock, and regular check-ups that do not slip. For the podiatrist who works alone and for clinics with several locations.',
    ctaPrimary: 'Start 15-day trial',
    ctaSecondary: 'Book a demo',
    seeFeatures: 'See how it works',
    features: {
      agenda: {
        eyebrow: 'Calendar by room',
        title: 'Short routine visits and long assessments, in the same room',
        description: 'Each visit type has its own length: a twenty-minute routine treatment, an hour-long biomechanical assessment. QuiroFlow assigns the free room when the appointment is booked, so you never end up with two patients booked into the same chair. Day or week view, and several locations from one account.',
      },
      historia: {
        eyebrow: 'Clinical record, photos and reports',
        title: 'How each lesion is healing, with its photos',
        description: 'The patient fills in their history, case notes and consent on their phone before they come, and can mark on a foot diagram that you upload. At every visit you write your notes and attach photos or PDF reports, which open right on the record without downloading them.',
      },
      productos: {
        eyebrow: 'Products and stock',
        title: 'What you sell at the desk, with its stock',
        description: 'Creams, footwear or off-the-shelf insoles: each product with its own tax rate, stock and minimum. You sell from the patient record alongside the session, and stock only moves with a delivery, an adjustment with a reason or a sale, so the shelf matches the list.',
      },
      revisiones: {
        eyebrow: 'Recalls and WhatsApp',
        title: 'The check-up every few weeks, without relying on memory',
        description: 'QuiroFlow lists the patients who have gone a while without an appointment so the front desk can contact them before they go elsewhere, and WhatsApp reminders with a button to confirm or move the appointment cut no-shows. When someone cancels, the slot is offered to the first person on the waiting list.',
      },
      reserva: {
        eyebrow: 'Online booking',
        title: 'A booking page with your brand',
        description: 'Your clinic gets its own public booking page, with your real opening hours and each podiatrist\'s availability. The patient books without calling and the appointment goes straight into the calendar.',
      },
    },
    edge: {
      title: 'Two things a podiatry clinic will appreciate',
      description: 'Patients who come back when they are due, and who tell others.',
      items: [
        {
          title: 'Packages and invoices from the same record',
          body: 'Sell session packages that count down on their own at every visit, and issue the invoice from the same record, with the session and the products together.',
        },
        {
          title: 'The Google review asks for itself',
          body: 'After the visit, QuiroFlow can ask for a rating automatically: low scores come to you, and high ones are invited to leave a Google review. For a clinic competing in local search, that consistency adds up.',
        },
      ],
    },
    faq: {
      title: 'Frequently asked questions',
      items: [
        {
          q: 'Does QuiroFlow work if I am a podiatrist working alone?',
          a: 'Yes. It works the same for a solo practice as for a clinic with several rooms and practitioners. The Solo plan is for one practitioner and one location, and you only pay for the practitioners who see patients: front desk and admin users are free.',
        },
        {
          q: 'Can I sell products and keep track of stock?',
          a: 'Yes. Each product has its own tax rate, stock with a minimum, and the unit cost of the last delivery so you can see the margin. You sell it from the patient record and the stock comes down on its own.',
        },
        {
          q: 'Can I keep photos of how a lesion is healing?',
          a: 'Yes. You attach photos and PDF reports to the patient record and they open right there, without downloading, with the date and who uploaded them.',
        },
        {
          q: 'Can I use a foot diagram in my forms?',
          a: 'Yes. In the form builder you add a drawable image block and upload whatever diagram you want. The patient marks on it with their finger on their phone, and what they mark is saved to their record.',
        },
        {
          q: 'Can patients book online?',
          a: 'Yes. Each clinic has its own booking page with each podiatrist\'s real availability. The appointment goes straight into your calendar, with no calls or manual confirmations.',
        },
        {
          q: 'Can I move over from the software I use now?',
          a: 'Yes. We import patients and appointments from your current software\'s export, and from any other system you can import a CSV by mapping your own columns. Migration is included.',
        },
        {
          q: 'How is patient data handled?',
          a: 'In line with the GDPR, with the data hosted on servers in the European Union. QuiroFlow acts as data processor and signs the corresponding agreement with each clinic, which remains the controller of its patients\' data.',
        },
      ],
    },
    cta: {
      title: 'See QuiroFlow with your own clinic\'s data',
      description: 'Start a 15-day trial with no card, or tell us how you work and we will show you how it fits your podiatry clinic.',
      button: 'Start 15-day trial',
      buttonSecondary: 'Book a demo',
    },
    mockups: {
      invoiceItem: 'Podiatry treatment x1',
      calendarType: 'Podiatry',
    },
  },

  // Campaign landing for the automation angle. The product sections reuse
  // receptionist/whatsapp/waitlist/booking instead of duplicating copy.
  automatizaciones: {
    badge: 'Automation',
    title: 'Your clinic answers, reminds and wins patients back on its own',
    description: 'The AI receptionist answers your WhatsApp and books the appointment, reminders are confirmed with one tap, a cancelled slot is re-offered by itself, and you get told when a patient falls behind their plan. You are at the table, not on your phone.',
    ctaPrimary: 'Start a 15-day trial',
    ctaSecondary: 'Book a demo',
    seeFeatures: 'See how it works',
    sectionTitle: 'The four things you stop doing by hand',
    edge: {
      title: 'What changes in a clinic week',
      description: 'Not "saving time" in the abstract. Four specific holes that close themselves.',
      items: [
        {
          title: 'The 11pm WhatsApp',
          body: 'Someone who writes after hours gets an answer, real slots from your calendar and a booked appointment. They do not wait until morning — and by morning they have not gone elsewhere.',
        },
        {
          title: 'The last-minute cancellation',
          body: 'One session that never gets refilled, at 45 € a session, is about 180 € a month. The slot is offered straight to the first person on the waiting list, with a link to take it there and then.',
        },
        {
          title: 'The patient who stops coming',
          body: 'If someone on an active treatment plan falls behind their own cadence, you hear about it before they disappear. Not two months later, when they are gone.',
        },
        {
          title: 'The confirmation calls',
          body: 'Reminders carry a button to confirm or move the appointment. Whatever the patient answers lands in the calendar without anyone typing it in.',
        },
      ],
    },
    faq: {
      title: 'Questions about the automations',
      items: [
        {
          q: 'Can the AI receptionist cancel an appointment?',
          a: 'No. It books and moves appointments, but it never cancels. Anything outside its remit goes to a person, with a note in the conversation so they can pick it up.',
        },
        {
          q: 'Does it always answer, or only after hours?',
          a: 'You decide. It can answer on its own all the time, only outside opening hours, or just leave a draft for you to approve before it goes out.',
        },
        {
          q: 'What does it know about my clinic?',
          a: 'Whatever you tell it: prices, hours, what you treat and what you do not. The slots it offers are the real ones in your calendar, not invented.',
        },
        {
          q: 'Is all of it included in the price?',
          a: 'WhatsApp reminders, the waiting list and treatment-plan alerts are in every plan. The AI receptionist is part of the Growth add-on, 39 €/month plus VAT, and is included in the Practice and Clinic plans.',
        },
      ],
    },
    cta: {
      title: 'Try it against your own calendar',
      description: '15 days, no card, migration included. If it does not fit, you have lost nothing.',
      button: 'Start a 15-day trial',
      buttonSecondary: 'Book a demo',
    },
  },

  footer: {
    productTitle: 'Product',
    sectorsTitle: 'By speciality',
    companyTitle: 'Company',
    features: 'Features',
    automations: 'Automation',
    pricing: 'Pricing',
    comparison: 'Compare',
    migrate: 'Switch systems',
    chiro: 'Chiropractic',
    physio: 'Physiotherapy',
    osteo: 'Osteopathy',
    podo: 'Podiatry',
    resources: 'Resources',
    copyright: '© 2026 QuiroFlow. All rights reserved.',
    privacy: 'Privacy policy',
    terms: 'Legal notice',
    verifactu: 'VERI*FACTU responsible declaration',
    // Only rendered on Spanish pages -- the guide it links to is Spanish only.
    verifactuGuide: 'VERI*FACTU for clinics',
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

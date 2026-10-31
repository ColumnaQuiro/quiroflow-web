// The comparison table's data: which competitors it covers and, row by row,
// what each one shows publicly. Shared by ComparisonSection (the homepage
// table) and the /alternativa-a-* pages, so a correction lands in both.
// Row order matches the comparison.rows labels in the i18n dictionaries.
type Cell = boolean

export interface RowFlags {
  quiroflow: Cell
  practicehub: Cell
  quirohiro: Cell
  cliniccloud: Cell
  doctoralia: Cell
  quirocitas: Cell
}

export const COMPETITORS = [
  { key: 'practicehub', name: 'PracticeHub' },
  { key: 'quirohiro', name: 'QuiroHiro' },
  { key: 'cliniccloud', name: 'Clinic Cloud' },
  { key: 'doctoralia', name: 'Doctoralia' },
  { key: 'quirocitas', name: 'Quirocitas' },
] as const

// Every flag below was re-checked against each vendor's own website in
// October 2026, after QuiroHiro told us the table undersold them. A tick means
// the vendor states it on its own site (home, feature, pricing or product
// pages) or confirmed it to us directly; "—" means not shown publicly, per the footnote, not proven absent.
// Where a public claim is close enough to the row, it gets the tick -- erring
// generous on competitors is the safe side of a comparison table.
//
// What changed in that pass:
// - QuiroHiro: AI receptionist ticked from its site (CAi books, confirms and
//   reschedules 24/7 over WhatsApp and voice, quirohiro.io/cai). QuiroHiro
//   then sent us, in October 2026, a marked-up copy of this table claiming
//   data export, automatic room/table assignment, online booking, forms,
//   retention stats, waitlist, treatment-plan alerts and referral campaigns.
//   Those are ticked on their word -- the footnote covers vendor-confirmed
//   cells. They did not claim patient-chosen reminders or legal invoicing for
//   bonos, and the posture and exercise rows came after their markup.
// - PracticeHub: data export ("Export your records to Excel"), online booking,
//   invoicing for prepaid packages and memberships, and exercise programs in
//   its Patient App, all on practicehub.io/features-overview and /patient-app.
//   No WhatsApp or review requests of its own: those come via integrations.
// - Clinic Cloud: online booking (through its Doctoralia integration),
//   Verifactu invoicing with bonos, and Noa Reception, its AI phone
//   receptionist (early access at the time of checking).
// - Doctoralia: WhatsApp reminders and confirmation, and online booking
//   (pro.doctoralia.es). Its stats tick predates this pass; its page only
//   says "informes operativos", kept generously.
// - Quirocitas lives at quirocitas.es now (the .com no longer resolves). It
//   advertises facturas and bonos and table management ("gestión de
//   camillas", not automatic assignment), and shows no prices.
// Nobody but QuiroFlow advertises posture analysis.
export const ROW_FLAGS: RowFlags[] = [
  // Full data export
  { quiroflow: true, practicehub: true, quirohiro: true, cliniccloud: false, doctoralia: false, quirocitas: false },
  // Automatic room/table assignment
  { quiroflow: true, practicehub: false, quirohiro: true, cliniccloud: false, doctoralia: false, quirocitas: false },
  // WhatsApp reminders and confirmation
  { quiroflow: true, practicehub: false, quirohiro: true, cliniccloud: true, doctoralia: true, quirocitas: false },
  // Patient chooses how many reminders
  { quiroflow: true, practicehub: false, quirohiro: false, cliniccloud: false, doctoralia: false, quirocitas: false },
  // 24/7 online booking
  { quiroflow: true, practicehub: true, quirohiro: true, cliniccloud: true, doctoralia: true, quirocitas: false },
  // Digital intake and consent forms
  { quiroflow: true, practicehub: true, quirohiro: true, cliniccloud: true, doctoralia: false, quirocitas: false },
  // Invoices for packages and memberships
  { quiroflow: true, practicehub: true, quirohiro: false, cliniccloud: true, doctoralia: true, quirocitas: true },
  // Retention, conversion and value-per-visit stats
  { quiroflow: true, practicehub: true, quirohiro: true, cliniccloud: false, doctoralia: true, quirocitas: false },
  // Waitlist re-offering cancelled slots
  { quiroflow: true, practicehub: false, quirohiro: true, cliniccloud: false, doctoralia: true, quirocitas: false },
  // Treatment plan adherence alert
  { quiroflow: true, practicehub: false, quirohiro: true, cliniccloud: false, doctoralia: false, quirocitas: false },
  // Referral thank-you campaign
  { quiroflow: true, practicehub: false, quirohiro: true, cliniccloud: false, doctoralia: false, quirocitas: false },
  // Automatic Google review request
  { quiroflow: true, practicehub: false, quirohiro: true, cliniccloud: false, doctoralia: true, quirocitas: false },
  // AI receptionist
  { quiroflow: true, practicehub: false, quirohiro: true, cliniccloud: true, doctoralia: false, quirocitas: false },
  // Posture analysis
  { quiroflow: true, practicehub: false, quirohiro: false, cliniccloud: false, doctoralia: false, quirocitas: false },
  // Home exercise library for patients
  { quiroflow: true, practicehub: true, quirohiro: false, cliniccloud: false, doctoralia: false, quirocitas: false },
  // Published entry price, last row. Not a differentiator: practicehub.io,
  // quirohiro.io, clinic-cloud.com and pro.doctoralia.es all publish prices;
  // quirocitas.es does not. Kept because a buyer does want to know -- drop
  // this row and its label in the three dictionaries if the table should only
  // carry things QuiroFlow wins.
  { quiroflow: true, practicehub: true, quirohiro: true, cliniccloud: true, doctoralia: true, quirocitas: false },
]

export type CompetitorKey = (typeof COMPETITORS)[number]['key']

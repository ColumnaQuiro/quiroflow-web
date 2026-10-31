// The plan prices. Shared by PricingSection (what visitors see) and the
// site-wide SoftwareApplication schema in usePageSeo (what search engines
// read), so a reprice cannot update one and leave the other advertising the
// old number.
//
// Amounts live here rather than in the translations: they are identical in
// every language, and duplicating them across es/en/fr is how they drift.
// Repriced 2026-09-17 against the vertical these clinics actually shop in --
// PracticeHub ~115 EUR for one practitioner, QuiroHiro 67, Doctoralia 89 per
// professional -- not against the generalist tools at 29-45 that do not know
// what a chiropractor is. Annual is the per-month figure, 10% off.
// Repriced again 2026-10-28: Solo 49 -> 45 (40 annual), and Practice now
// includes Growth as Clinic already did, at the same 99.
//
// These must match `plans` in the app's database, which is what Stripe
// actually charges from. A number changed here and not there advertises a
// price nobody is billed.
export const PRICING_TIERS = [
  { key: 'solo', name: 'Solo', monthly: 45, annual: 40, featured: false },
  { key: 'practice', name: 'Practice', monthly: 99, annual: 89, featured: true },
  { key: 'clinic', name: 'Clinic', monthly: 149, annual: 134, featured: false },
] as const

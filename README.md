# QuiroFlow — commercial site

The marketing site for QuiroFlow, meant to be deployed at the bare
`quiroflow.com` domain (separate from `app.quiroflow.com`, the actual
product — see that repo's README).

Built with Nuxt 4 + Tailwind, using the same brand tokens (indigo `#4F46E5`,
Instrument Sans, card/control radii) as the main app, kept as a static
site (no server, no database) since it's a single landing page today.

## Run it

```bash
npm install --legacy-peer-deps
npm run dev
```

`--legacy-peer-deps` works around a known npm/arborist crash
(`Cannot read properties of null (reading 'edgesOut')`) triggered by
Nuxt 4's newer peer-dependency graph — not specific to this project.

## Structure

The root URL is deliberately **neutral** -- it sells the job the product does
(assigned room, packages, WhatsApp, treatment-plan continuity) without
claiming a speciality, so a physio or osteopath arriving from an ad is not
told on line one that the page is not for them. Each vertical gets its own
page, which is where the speciality keyword and wording live:

| Route | Purpose |
| --- | --- |
| `/` | Neutral category page; carries the FAQ, the data/exit section and the email capture |
| `/software-quiropractica` | Chiropractic vertical (holds the "software para quiroprácticos" term the homepage used to) |
| `/software-fisioterapia` | Physiotherapy vertical |
| `/quienes-somos` | Who is behind the product |
| `/recursos` | Blog/resources -- scaffolding only, see below |
| `/aviso-legal`, `/politica-de-privacidad` | Legal, `noindex` |

Each has localised slugs for `/en/*` and `/fr/*` via `definePageMeta`.

Two CTA destinations, never mixed: anything that promises a trial goes to
`SIGNUP_URL` (app.quiroflow.com/signup), anything that promises a
conversation goes to `BOOKING_URL` (the demo calendar). Both are in
`app/utils/links.ts`.

## Content still needed before launch

A few spots are left as clearly-marked placeholders rather than invented
content:

- **Product video.** `VideoSection.vue` reserves the slot right under the
  hero and renders nothing in a production build until `PRODUCT_VIDEO_URL`
  is set in `app/utils/links.ts` (in `nuxt dev` it shows a marked
  placeholder instead). A 60-90s walkthrough is the strongest proof this
  page can carry.
- **First resources post.** `app/content/posts.ts` is an empty typed array.
  Appending one entry lights up `/recursos`; also drop the three `/recursos`
  lines from the sitemap `exclude` list and the matching `noindex` in
  `app/pages/recursos/index.vue`.
- **Two infrastructure claims to confirm.** The `data.items` entries in the
  three dictionaries state EU hosting and daily backups with point-in-time
  restore, and the same claims appear in the FAQs and on `/quienes-somos`.
  They match how the product is meant to run, but nothing in this repo
  proves them -- confirm against the actual infrastructure before this goes
  live, since they are exactly the claims a prospective clinic will hold you
  to.
- **Google Ads sign-up conversion.** `GOOGLE_ADS.signupLabel` in
  `app/utils/analytics.ts` is empty, which disables that conversion. Create
  the "Clic empezar prueba" action in Google Ads and paste its label in, or
  trial click-outs go unattributed.

## Social cards

`public/og-*.png` are generated, not drawn -- see `tools/og/README.md`.

## Deploying (Netlify)

`netlify.toml` runs `npm run generate` (static export) and publishes
`.output/public`. Point the `quiroflow.com` domain at a new Netlify site
built from this repo.

## Deployment status

Continuous deployment from `main` is connected — every push to `main` auto-deploys to production.

Continuous deployment verified end-to-end: push to `main` -> Netlify build -> live on quiroflow.com.

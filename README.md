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

### If `nuxt build` dies in Nitro with `ENOENT ... unstorage/drivers/fs-lite.mjs`

Not a problem with this repo — check `~/.nuxtrc`. Nuxt merges that file into
every project's config, and the old `nuxi devtools enable` (DevTools 0.x,
2023) wrote a line into it pointing at a globally installed module:

```
modules.0=/usr/local/lib/node_modules/@nuxt/devtools/module.cjs
```

That module is injected into *every* Nuxt project on the machine, and its
bundled `unstorage` predates the `fs-lite` driver that current Nitro
requires, so the build fails while writing the server bundle. The client and
server bundles compile fine first, which makes it look like a code error
when it is not. Deleting that line (and the `devtoolsGlobal.*` line beside
it) from `~/.nuxtrc` fixes it; the `telemetry.*` lines are unrelated and
should stay. The stale global package itself can then be removed with
`npm uninstall -g @nuxt/devtools`.

Netlify never hits this — it builds from a clean checkout with no
`~/.nuxtrc`.

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

Continuous deployment from `main` is connected: Netlify builds every push and
publishes to quiroflow.com. Deploy previews are built for pull requests too.

There is no GitHub Actions workflow and there should not be one -- an earlier
workflow deployed via the Netlify CLI, which duplicated what the git
integration already does. It was removed in `be5c474`.

### The publish directory is `dist`, not `.output/public`

`nuxt generate` writes to different places depending on the environment, and
this has already broken production once. See the comment at the top of
`netlify.toml` before changing it: locally Nitro uses the `static` preset and
writes `.output/public`, but inside a Netlify build it detects Netlify,
switches to `netlify-static`, and writes `dist`. Checking where a local build
puts its files tells you nothing about the right value here -- run
`netlify build` instead, which runs the same orchestrator Netlify does.

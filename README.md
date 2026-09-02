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

## Content still needed before launch

A few spots are left as clearly-marked placeholders rather than invented
content — search the components for `[texto pendiente]`-style brackets
and italic placeholder text:

- A real testimonial quote from Columna Quiro (`TestimonialSection.vue`)
- A real contact email (`TheFooter.vue`)
- Privacy policy / terms pages, or at least links to them (`TheFooter.vue`)

## Deploying (Netlify)

`netlify.toml` runs `npm run generate` (static export) and publishes
`.output/public`. Point the `quiroflow.com` domain at a new Netlify site
built from this repo.

## Deployment status

Continuous deployment from `main` is connected — every push to `main` auto-deploys to production.

Continuous deployment verified end-to-end: push to `main` -> Netlify build -> live on quiroflow.com.

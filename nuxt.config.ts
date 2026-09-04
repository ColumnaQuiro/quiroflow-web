import { fileURLToPath } from 'node:url'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  // Was enabled: true. @nuxtjs/sitemap ships a devtools integration
  // (nuxtseo-shared) that calls extendServerRpc against this project's
  // Nuxt 4.5 devtools-kit -- two different devtools-kit majors end up in
  // the tree (4.0.0-alpha.7 pulled by Nuxt itself, 3.4.2 by the sitemap
  // module), and `nuxt dev` crashes on boot with "Failed to get devtools
  // context" the moment both are present. Disabled here rather than
  // pinning/deduping the alpha dependency, since the panel itself isn't
  // load-bearing for this project. Safe to flip back once sitemap (or
  // Nuxt's own devtools-kit) ships a compatible version.
  devtools: { enabled: false },
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/i18n', '@nuxtjs/sitemap'],
  css: ['~/assets/css/main.css'],
  // Canonical production origin -- backs the sitemap's <loc> entries and
  // every page's canonical/og:url tag (each page builds its own absolute
  // URL from this in useHead). Matches README.md: deployed at the bare
  // quiroflow.com domain, separate from app.quiroflow.com.
  site: {
    url: 'https://quiroflow.com',
  },
  // Real per-locale routes for proper bilingual SEO -- the ES/EN toggle
  // used to just flip client state at the same URL, which meant Google
  // could only ever index the Spanish version of every page. Spanish stays
  // unprefixed (the actual market, and matches every URL already indexed);
  // English lives under /en/*. detectBrowserLanguage is off on purpose --
  // auto-redirecting by Accept-Language serves different content at the
  // same URL depending on who's asking, which is exactly what search
  // engines flag as cloaking-adjacent. Messages come from the existing
  // es.ts/en.ts dictionaries via app/i18n/i18n.config.ts. Both a relative
  // path here and relying on auto-discovery silently resolved to zero
  // messages (every t()/tm() call logged "not found", which then crashed
  // rendering wherever a tm() result got iterated) -- an absolute path
  // sidesteps whatever directory the module was resolving against.
  i18n: {
    locales: [
      { code: 'es', language: 'es-ES', name: 'Español' },
      { code: 'en', language: 'en-US', name: 'English' },
    ],
    defaultLocale: 'es',
    strategy: 'prefix_except_default',
    baseUrl: 'https://quiroflow.com',
    detectBrowserLanguage: false,
    vueI18n: fileURLToPath(new URL('./app/i18n/i18n.config.ts', import.meta.url)),
  },
  // Keeps the two noindex'd legal pages (see their own robots meta) out of
  // the generated sitemap too, in both locales -- a URL that's both listed
  // and noindexed is a common inconsistency flagged by SEO audits.
  sitemap: {
    exclude: ['/aviso-legal', '/politica-de-privacidad', '/en/legal-notice', '/en/privacy-policy'],
  },
  app: {
    head: {
      htmlAttrs: { lang: 'es' },
      title: 'QuiroFlow — Software de gestión para clínicas quiroprácticas',
      meta: [
        { name: 'description', content: 'Agenda con asignación automática de salas, historiales clínicos, facturación, bonos y recordatorios por WhatsApp — todo en una sola plataforma. Migra desde PracticeHub en un fin de semana.' },
        // Site-wide OG/Twitter defaults -- constant across every page, so
        // they live here rather than being repeated in each page's useHead.
        // Per-page og:title/og:description/og:url still override these
        // where a page sets its own (Nuxt's useHead merges by tag key).
        // og:locale/og:locale:alternate are NOT set here -- @nuxtjs/i18n's
        // useLocaleHead({ seo: true }) generates those per-page based on
        // the actual route locale, and a static pair here would just be
        // wrong on every /en/* page.
        { property: 'og:site_name', content: 'QuiroFlow' },
        { property: 'og:type', content: 'website' },
        { property: 'og:image', content: 'https://quiroflow.com/og-image.png' },
        { property: 'og:image:width', content: '1200' },
        { property: 'og:image:height', content: '630' },
        { property: 'og:image:alt', content: 'QuiroFlow — software de gestión para clínicas quiroprácticas' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:image', content: 'https://quiroflow.com/og-image.png' },
        { name: 'theme-color', content: '#4F46E5' },
        { name: 'robots', content: 'index, follow' },
      ],
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Instrument+Sans:wght@400;500;600;700&display=swap' },
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
        { rel: 'manifest', href: '/site.webmanifest' },
      ],
    },
  },
})

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  css: ['~/assets/css/main.css'],
  app: {
    head: {
      htmlAttrs: { lang: 'es' },
      title: 'QuiroFlow — Software de gestión para clínicas quiroprácticas',
      meta: [
        { name: 'description', content: 'Agenda con asignación automática de salas, historiales clínicos, facturación, bonos y recordatorios por WhatsApp — todo en una sola plataforma. Migra desde PracticeHub en un fin de semana.' },
      ],
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Instrument+Sans:wght@400;500;600;700&display=swap' },
      ],
    },
  },
})

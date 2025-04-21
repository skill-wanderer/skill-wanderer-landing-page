// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],

  app: {
    head: {
      title: 'Skill Wanderer',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: 'The central navigation hub for the Skill Wanderer ecosystem' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    }
  },

  postcss: {
    plugins: {
      '@tailwindcss/postcss': require('./tailwind.config.js'),
      autoprefixer: {},
    },
  },

  compatibilityDate: '2025-04-19',
})
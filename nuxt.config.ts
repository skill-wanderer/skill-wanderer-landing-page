// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: true, // Enable server-side rendering
  css: ['~/assets/css/main.css'],
    modules: [
    '@nuxtjs/sitemap'
  ],
  site: {
    url: 'https://skill-wanderer.com',
  },
  sitemap: {
    // Exclude empty directory routes and dynamic catch-all
    exclude: [
      '/learning-path',
      '/learning-path/**',
      '/partners',
      '/partners/**',
    ],
    urls: async () => {
      // Static principle pages with proper metadata
      const principles = [
        'accessible',
        'community',
        'creativity',
        'engaging',
        'individualized',
        'integrity',
        'mission-centric-reinvestment',
        'pathways',
        'relevant',
        'respect-ip',
        'social-enterprise',
        'tech-services',
        'technology-partnership',
      ]
      return principles.map((slug) => ({
        loc: `/principles/${slug}`,
        changefreq: 'monthly',
        priority: 0.8,
      }))
    },
    defaults: {
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date().toISOString(),
    },
  },


  // TypeScript configuration
  typescript: {
    typeCheck: true
  },
  app: {
    head: {
      htmlAttrs: {
        lang: 'en'
      },
      title: 'Skill-Wanderer - Free Tech Education for Everyone',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Free, practical tech education that celebrates learning through failure. Quality education shapes brighter futures with no ads or affiliate bias.' },
        { name: 'author', content: 'Quan Nguyen' },
        { name: 'robots', content: 'index,follow' },
        { name: 'language', content: 'en' },
        // Open Graph / social media meta tags for the logo
        { property: 'og:site_name', content: 'Skill-Wanderer' },
        { property: 'og:type', content: 'website' },
        { property: 'og:image', content: '/cropped-skill-wanderer-logo-768x256.webp' },
        { property: 'og:image:width', content: '768' },
        { property: 'og:image:height', content: '256' },
        { property: 'og:image:alt', content: 'Skill-Wanderer Logo' },
        // Twitter meta tags
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:image', content: '/cropped-skill-wanderer-logo-768x256.webp' },
        { name: 'twitter:image:alt', content: 'Skill-Wanderer Logo' }
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/skill-wanderer-favicon.svg' }
      ]
    }
  },

  postcss: {
    plugins: {
      '@tailwindcss/postcss': {},
      autoprefixer: {},
    },
  },

  runtimeConfig: {
    public: {
      firebase: {
        apiKey: process.env.NUXT_PUBLIC_FIREBASE_API_KEY,
        authDomain: process.env.NUXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
        projectId: process.env.NUXT_PUBLIC_FIREBASE_PROJECT_ID,
        storageBucket: process.env.NUXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
        messagingSenderId: process.env.NUXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
        appId: process.env.NUXT_PUBLIC_FIREBASE_APP_ID,
      },
      pathfinder: {
        apiUrl: process.env.NUXT_PUBLIC_PATHFINDER_API_URL || '',
        domains: process.env.NUXT_PUBLIC_PATHFINDER_DOMAINS || 'skill-wanderer.com,wanderings.skill-wanderer.com,dojo.skill-wanderer.com',
        sessionExpiryMinutes: Number(process.env.NUXT_PUBLIC_PATHFINDER_SESSION_EXPIRY_MINUTES) || 30,
        sessionStorage: process.env.NUXT_PUBLIC_PATHFINDER_SESSION_STORAGE || 'browser',
      },
    }
  },

  nitro: {
    preset: 'cloudflare-pages',
    prerender: {
      crawlLinks: true,
      routes: [
        '/',
        '/about',
        '/mission',
        '/contact',
        '/roadmap',
        '/principles',
        '/learners',
        '/team',
        '/learning-path',
      ],
    },
  },

  routeRules: {
    '/**': { prerender: true },
    '/': { sitemap: { changefreq: 'weekly', priority: 1.0 } },
    '/about': { sitemap: { changefreq: 'monthly', priority: 0.8 } },
    '/mission': { sitemap: { changefreq: 'monthly', priority: 0.8 } },
    '/contact': { sitemap: { changefreq: 'monthly', priority: 0.6 } },
    '/roadmap': { sitemap: { changefreq: 'weekly', priority: 0.7 } },
    '/principles': { sitemap: { changefreq: 'monthly', priority: 0.9 } },
    '/principles/**': { sitemap: { changefreq: 'monthly', priority: 0.8 } },
    '/learners': { sitemap: { changefreq: 'monthly', priority: 0.7 } },
    '/learners/**': { sitemap: { changefreq: 'monthly', priority: 0.6 } },
    '/expertise-impact': { sitemap: { changefreq: 'monthly', priority: 0.7 } },
    '/expertise-impact/**': { sitemap: { changefreq: 'monthly', priority: 0.6 } },
    '/technology-partner': { sitemap: { changefreq: 'monthly', priority: 0.6 } },
    '/privacy-policy': { sitemap: { changefreq: 'yearly', priority: 0.3 } },
    '/terms-of-service': { sitemap: { changefreq: 'yearly', priority: 0.3 } },
  },

  compatibilityDate: '2025-04-19',
})
const defaultDatabase = {
  connector: 'sqlite' as const,
  options: {
    path: './data/krisnavolgy.sqlite3',
  },
}

export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/style.css'],
  modules: [
    '@pinia/nuxt',
    '@formkit/nuxt',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxtjs/device',
    'nuxt-token-authentication',
    //'vue-mess-detector-nuxt-devtools',
    'vue3-carousel-nuxt',
    '@vueuse/nuxt',
    '@nuxt/scripts',
    '@nuxtjs/algolia',
    '@nuxt/eslint',
    '@nuxt/test-utils/module',
    'nuxt-tiptap-editor',
  ],
  algolia: {
    apiKey: process.env.ALGOLIA_SEARCH_API_KEY,
    applicationId: process.env.ALGOLIA_APPLICATION_ID,
    /*instantSearch: {
      theme: 'algolia'
    }*/
  },
  formkit: {
    autoImport: true,
  },
  nitro: {
    experimental: {
      database: true,
    },
    database: {
      default: defaultDatabase,
    },
  },
  nuxtTokenAuthentication: {
    noAuthRoutes: [
      'POST:/api/auth/getToken',
      'GET:/api/festival',
      'GET:/api/festivals',
      'POST:/api/subscribe',
      'POST:/api/simplepay/order',
      'POST:/api/simplepay/result',
      'POST:/api/simplepay/ipn'],
    connector: {
      name: defaultDatabase.connector,
      options: defaultDatabase.options,
    },
  },
  compatibilityDate: '2024-04-03',
})
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
    '@vueuse/nuxt',
    'vue3-carousel-nuxt',
    '@nuxtjs/device',
    'vue-mess-detector-nuxt-devtools',
    '@nuxt/icon',
    '@nuxt/image', 
    'nuxt-token-authentication', 
    '@formkit/nuxt'
  ],
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
    noAuthRoutes: ['GET:/api/events', 'POST:/api/auth/getToken'],
    connector: {
      name: defaultDatabase.connector,
      options: defaultDatabase.options,
    },
  },
  compatibilityDate: '2024-10-24'
})
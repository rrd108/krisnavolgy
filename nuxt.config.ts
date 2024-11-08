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
    '@formkit/nuxt',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxtjs/device',
    'nuxt-token-authentication',
    '@pinia/nuxt',
    'vue-mess-detector-nuxt-devtools',
    'vue3-carousel-nuxt',
    '@vueuse/nuxt',
    '@nuxt/scripts'
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
    noAuthRoutes: ['GET:/api/festivals', 'POST:/api/auth/getToken'],
    connector: {
      name: defaultDatabase.connector,
      options: defaultDatabase.options,
    },
  },
  compatibilityDate: '2024-10-24'
})
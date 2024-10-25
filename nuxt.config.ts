// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/style.css'],
  modules: [
    '@vueuse/nuxt',
    'vue3-carousel-nuxt',
    '@nuxtjs/device',
    'vue-mess-detector-nuxt-devtools',
    '@nuxt/icon',
    '@nuxt/image'
  ],
  compatibilityDate: '2024-10-24'
})
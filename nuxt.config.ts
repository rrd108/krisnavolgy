// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/style.css'],
  modules: ['@vesp/nuxt-fontawesome', '@vueuse/nuxt', 'vue3-carousel-nuxt', '@nuxtjs/device', 'vue-mess-detector-nuxt-devtools'],
  fontawesome: {
    icons: {
      solid: ['arrow-right', 'bars', 'bed', 'child-reaching', 'people-group', 'utensils', 'xmark'],
      brands: ['facebook', 'instagram', 'tiktok', 'youtube'],
    },
  },
})

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/style.css'],
  modules: ['@vesp/nuxt-fontawesome', '@vueuse/nuxt', 'vue3-carousel-nuxt', '@nuxtjs/device'],
  fontawesome: {
    icons: {
      solid: ['arrow-right', 'bed', 'child-reaching', 'ellipsis-vertical', 'people-group', 'utensils'],
      brands: ['facebook', 'instagram', 'tiktok', 'youtube'],
    },
  },
})

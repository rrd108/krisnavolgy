// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/style.css'],
  modules: ['@vesp/nuxt-fontawesome', '@vueuse/nuxt', "vue3-carousel-nuxt"],
  fontawesome: {
    icons: {
      solid: ['ellipsis-vertical'],
    },
  },
})
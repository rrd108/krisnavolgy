// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/style.css'],
  modules: ['@vesp/nuxt-fontawesome'],
  fontawesome: {
    icons: {
      solid: ['cog'],
    },
  },
})

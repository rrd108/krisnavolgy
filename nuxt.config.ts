// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/strapi', '@vueuse/nuxt'],
  strapi: {
    url: process.env.STRAPI_URL || 'http://localhost:1337',
  },
  css: ['@fortawesome/fontawesome-svg-core/styles.css'],
})

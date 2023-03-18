// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [/*'@nuxt/devtools',*/ '@nuxtjs/strapi', '@vueuse/nuxt'],
  strapi: {
    url: process.env.STRAPI_URL || 'http://127.0.0.1:1337',
  },
  css: ['@fortawesome/fontawesome-svg-core/styles.css'],
})

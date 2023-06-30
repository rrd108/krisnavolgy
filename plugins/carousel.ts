import { Carousel, Slide } from '@jambonn/vue-concise-carousel'
import '@jambonn/vue-concise-carousel/lib/vue-concise-carousel.css'

export default defineNuxtPlugin(nuxtApp => {
  nuxtApp.vueApp.component('Carousel', Carousel)
  nuxtApp.vueApp.component('Slide', Slide)
})

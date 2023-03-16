import { library, config } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {
  fas,
  faBars,
  faMagnifyingGlass,
  faXmark,
} from '@fortawesome/free-solid-svg-icons'
import {
  // if we add a new social media icon, we need to add it here also
  faFacebookF,
  faInstagram,
  faMailchimp,
  faTiktok,
} from '@fortawesome/free-brands-svg-icons'

// This is important, we are going to let Nuxt worry about the CSS
config.autoAddCss = false

// You can add your icons directly in this plugin. See other examples for how you
// can add other styles or just individual icons.
library.add(
  fas,
  faBars,
  faFacebookF,
  faInstagram,
  faMagnifyingGlass,
  faMailchimp,
  faTiktok,
  faXmark
)

export default defineNuxtPlugin(nuxtApp => {
  nuxtApp.vueApp.component('font-awesome-icon', FontAwesomeIcon, {})
})

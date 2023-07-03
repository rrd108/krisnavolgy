import HeroSection from './HeroSection'
import ServiceSection from './Service'
import Counter from './Counter'
import Happening from './Happening'
import Review from './Review'
import { SubscribeForm } from './SubscribeForm'

export default interface HomePage {
  slug: string
  review_section_title: string
  hero_section: HeroSection
  subscribe: { data: { attributes: SubscribeForm } }
  counter_section: Counter[]
  services_section: ServiceSection[]
  reviews: Review[]
  video: unknown // TODO
  event_section: {
    title: string
    happenings: { data: Happening[] }
  }
}

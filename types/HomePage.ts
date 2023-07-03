import HeroSection from './HeroSection'
import ServiceSection from './Service'
import Counter from './Counter'
import Happening from './Happening'
import Review from './Review'

export default interface HomePage {
  slug: string
  review_section_title: string
  hero_section: HeroSection
  subscribe: unknown // TODO
  counter_section: Counter[]
  services_section: ServiceSection[]
  reviews: Review[]
  video: unknown // TODO
  happenings: Happening[]
}

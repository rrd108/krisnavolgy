import HeroSection from './HeroSection'
import ServiceSection from './Service'
import Counter from './Counter'
import Happening from './Happening'

export default interface HomePage {
  slug: string
  review_section_title: string
  hero_section: HeroSection
  services_section: ServiceSection[]
  counter_section: Counter[]
  events: Happening[]
}

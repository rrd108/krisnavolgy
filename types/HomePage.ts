import HeroSection from './HeroSection'
import ServiceSection from './ServiceSection'
import Counter from './Counter'

export default interface HomePage {
  slug: string
  review_section_title: string
  hero_section: HeroSection
  services_section: ServiceSection[]
  counter_section: Counter[]
}

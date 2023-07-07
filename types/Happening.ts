import StrapiButton from './StrapiButton'
import StrapiResponse from './StrapiResponse'

export interface HappeningsSection {
  id: number
  title: string
  happenings: {
    data: HappeningBlock[]
  }
}

export interface HappeningBlock {
  id: number
  attributes: { happening: Happening }
}

export interface Happening {
  id: number
  title: string
  short_name: string
  description: string
  start_date: string
  end_date: string
  button: StrapiButton
  image: StrapiResponse<StrapiImage>
}

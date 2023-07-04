import StrapiButton from './StrapiButton'
import StrapiSingleResponse from './StrapiSingleResponse'

export interface HappeningsSection {
  id: number
  title: string
  happenings: {
    data: Happening[]
  }
}

export interface Happening {
  id: number
  attributes: {
    happening: HappeningData
  }
}

export interface HappeningData {
  id: number
  title: string
  short_name: string
  start_date: string
  end_date: string
  description: string
  button: StrapiButton
  image: StrapiSingleResponse<StrapiImage>
}

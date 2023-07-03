import StrapiButton from './StrapiButton'

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
    event_text_box: {
      id: number
      title: string
      short_name: string
      date: string
      event_description: string
      button: StrapiButton
      image: { data: { attributes: StrapiImage } }
    }
  }
}

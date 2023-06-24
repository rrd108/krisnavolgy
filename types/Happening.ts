import StrapiButton from './StrapiButton'

type Happening = {
  id: number
  title: string
  short_name: string
  date: string
  event_description: string
  button: StrapiButton
  image: StrapiImage
}

export default Happening

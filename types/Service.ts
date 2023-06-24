import StrapiButton from './StrapiButton'

export default interface Service {
  id: number
  title: string
  sub_title: string
  content: string
  price: string
  image: StrapiImage
  button: StrapiButton
}

export default interface Hero {
  hero_text: {
    id: number
    title: string
    content: string
  }
  hero_button: {
    id: number
    button_text: string
    url: string
    icon: string
  }
  cover_image: StrapiImage
}

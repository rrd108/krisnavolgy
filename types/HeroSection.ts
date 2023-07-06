export default interface Hero {
  text: {
    id: number
    title: string
    content: string
  }
  button: {
    id: number
   text: string
    url: string
    icon: string
  }
  cover_image: StrapiImage
}

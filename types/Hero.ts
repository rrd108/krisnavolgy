type Hero = {
  data: {
    id: number
    attributes: {
      Hero_text: { id: number; Title: string; Content: string }
      Hero_button: { id: number; Title: string; Link: string }
      Hero_image?: { data: { url: string } }
    }
  }
}
export default Hero

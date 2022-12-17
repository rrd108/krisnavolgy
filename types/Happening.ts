type Happening = {
  id: number
  date: string
  shortName: string
  name: string
  description: string
  image: {
    data: {
      attributes: {
        formats: {
          thumbnail: { url: string }
          small: { url: string }
          medium: { url: string }
        }
      }
    }
  }
}

export default Happening

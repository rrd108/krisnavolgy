interface StrapiImage {
  id: string
  name: string
  alternativeText: string
  caption: string
  width: number
  height: number
  formats: {
    thumbnail: {
      url: string
      width: number
      height: number
    }
    small: {
      url: string
      width: number
      height: number
    }
    medium: {
      url: string
      width: number
      height: number
    }
    large: {
      url: string
      width: number
      height: number
    }
  }
  url: string
}

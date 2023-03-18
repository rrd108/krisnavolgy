interface img {
  name: string
  hash: string
  ext: string
  mime: string
  path: any
  width: number
  height: number
  size: number
  url: string
}

export default interface EventSection {
  title: string
  Event_display: {
    id: number
    Event_name: string
    Event_short_description: string
    short_name: string
    event_beginning_date: string
    event_end_date: string
    Event_button: {
      id: number
      Title: string
      Link: string
    }
    Event_image: {
      data: {
        id: number
        attributes: {
          name: string
          url: string
          formats: {
            thumbnail: img
            small: img
            medium: img
          }
        }
      }
    }
  }[]
}

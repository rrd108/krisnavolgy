export default interface Footer {
  Blog_titles: string
  Social_media_bar_title: string
  Subscribe: {
    id: number
    Title: string
    Text: string
  }
  Subscribe_button: {
    id: number
    Subscribe_field: string
  }
  Opening_hours: {
    id: number
    Title: string
    Opening_hours: string
  }
  Availability: {
    id: number
    Title: string
    Address: string
    Number: string
    Email: string
  }
  Social_media_bar: {
    id: number
    Link: string
    Fontawesome_icon: string
  }[]
  Search_button: {
    id: number
    Title: string
    Link: string
    Fontawesome_icon: string
  }
  Footer_menu: {
    id: number
  }
}

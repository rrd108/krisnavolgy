export default interface Menu {
  search_field: string
  Menu_group: {
    id: number
    Menu_name: string
    Link: string
    Menu_item?: {
      id: number
      Menu_item_name: string
      Link: string
    }[]
  }[]
  Social_media_bar: {
    id: number
    Link: string
    fontawsome_icon: string
  }[]
}

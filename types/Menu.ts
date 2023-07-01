export default interface Menu {
  id: number
  menu_item: string
  link: string
  sub_menu?: Menu[]
}

export interface Menu {
  id: number
  menu_item: string
  link: string
  sub_menu?: Menu[]
}

export interface MainMenu {
  menu: Menu[]
}

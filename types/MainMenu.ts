export interface Menu {
  id: number
  item: string
  link: string
  sub_menu?: Menu[]
}

export interface MainMenu {
  menu: Menu[]
}

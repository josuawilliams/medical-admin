import { DivisiEnum } from '.'

export type SidebarMenu = {
  title?: string
  menu: MenuItem[]
  uniqeKey?: string
  kapabilitasMenu: DivisiEnum[]
}

export type MenuItem = {
  label: string
  icon: any
  path?: string
  collapsed?: boolean
  itemCollapsed?: MenuItemCollapsed[]
  uniqeKey?: string
  kapabilitasSubMenu: DivisiEnum[]
}

export type MenuItemCollapsed = {
  label: string
  path: string
  uniqeKey?: string | string[]
  kapabilitasSubMenuCollapsed: DivisiEnum[]
}

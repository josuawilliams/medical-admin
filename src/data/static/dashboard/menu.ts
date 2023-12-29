import { SidebarMenu } from '@/data/interface/menu'
import { Routes, RoutesAdministrator } from '@/routes'

export const menu: SidebarMenu[] = [
  {
    title: 'Dashboard',
    uniqeKey: 'dashboard',
    menu: [
      {
        label: 'Dashboard',
        icon: '/svg/dashboard.svg',
        path: Routes.DASHBOARD,
        kapabilitasSubMenu: []
      }
    ],
    kapabilitasMenu: []
  },
  {
    title: 'Administrator',
    uniqeKey: 'administrator',
    menu: [
      {
        label: 'Admin',
        icon: '/svg/admin.svg',
        path: RoutesAdministrator.ADMIN,
        kapabilitasSubMenu: []
      },
      {
        label: 'Log',
        icon: '/svg/log.svg',
        path: RoutesAdministrator.LOG,
        kapabilitasSubMenu: []
      }
    ],
    kapabilitasMenu: []
  }
]

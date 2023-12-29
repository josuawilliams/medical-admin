class Routes {
  static DASHBOARD: string = '/dashboard'
}
class RoutesAdministrator {
  static base: string = '/administrator'
  static ADMIN: string = `${this.base}/admin`
  static LOG: string = '/log'
}

export { Routes, RoutesAdministrator }

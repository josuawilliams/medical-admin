export enum DivisiEnum {
  ADMIN = 'Admin'
}

export interface ResponseData<T> {
  data: T
  message: string
  status: number
}

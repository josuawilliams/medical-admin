import axios, { AxiosRequestConfig, AxiosResponse, ResponseType } from 'axios'
import Cookies from 'js-cookie'

export interface APIResponse<T> {
  code: string
  status: string
  message: string
  data: T
}

export type APIMethod = 'GET' | 'PATCH' | 'POST' | 'DELETE' | 'PUT'

export const BASE_URL = process.env.NEXT_PUBLIC_BASSE_API

export default function API<T>(
  path: string,
  method: APIMethod,
  body: any = {},
  header: any = {},
  responseType?: ResponseType
): Promise<T> {
  const config: AxiosRequestConfig = {
    method,
    url: `${BASE_URL}${path}`,
    headers: {
      ...header
    },
    data: method !== 'GET' ? body : {},
    params: method === 'GET' ? body : {},
    ...(responseType && { responseType })
  }

  return new Promise((resolve, reject) => {
    axios(config)
      .then((response: AxiosResponse<T>) => {
        // console.log(response, "RESPONSE")
        const json_res: T = response.data
        resolve(json_res)
      })
      .catch((error: any) => {
        console.log(error, 'ERRR')
        const json_res: APIResponse<T> = error?.response?.data

        if (
          (error.response &&
            error.response?.status === 500 &&
            error.response?.data?.message === 'jwt expired') ||
          (error.response?.status === 401 &&
            error.response?.data?.message === 'Access denied')
        ) {
          Cookies.remove('token', undefined)
          Cookies.remove('divisi', undefined)
          window.location.replace('/login')
          reject(json_res)
        } else if (error.response) {
          reject(json_res)
        } else {
          reject(error)
        }
      })
  })
}

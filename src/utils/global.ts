import Cookies from 'js-cookie'

type Headers = { 'Authentication-token': string }

type AuthTokenFunction = () => {
  headers: Headers
}

export const getHeadersToken: AuthTokenFunction = () => {
  const header: Headers = {
    'Authentication-token': Cookies.get('token') as string
  }

  return {
    headers: header
  }
}

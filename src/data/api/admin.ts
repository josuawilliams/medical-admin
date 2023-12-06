import { getHeadersToken } from '@/utils/global'
import API from '.'
import { ROUTESUrl } from './routes'
import { LoginPages } from '../interface/login'

export async function fetchAdminMe(adminId?: string): Promise<string> {
  try {
    const res: string = await API<string>(
      `${ROUTESUrl.ADMIN_DETAIL}`,
      'GET',
      {},
      getHeadersToken().headers
    )
    console.log(res)

    return res
  } catch (err) {
    throw err
  }
}

export async function postLoginAdmin(data: LoginPages): Promise<LoginPages> {
  try {
    console.log(data)
    // const res: string = await API<string>(
    //   `${ROUTESUrl.ADMIN_DETAIL}`,
    //   'GET',
    //   {},
    //   getHeadersToken().headers
    // )
  } catch (err) {
    throw err
  }
}

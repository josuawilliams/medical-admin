import { getHeadersToken } from '@/utils/global'
import API from '.'
import { ROUTESUrl } from './routes'
import { LoginData, LoginPages } from '../interface/login'
import { ResponseData } from '../interface'
import { AdminDataDetail } from '../interface/admin'

export async function fetchAdminMe(
  adminId?: string
): Promise<ResponseData<AdminDataDetail>> {
  try {
    const res: ResponseData<AdminDataDetail> = await API<
      ResponseData<AdminDataDetail>
    >(`${ROUTESUrl.ADMIN_DETAIL}`, 'GET', {}, getHeadersToken().headers)
    return res
  } catch (err) {
    throw err
  }
}

export async function postLoginAdmin(
  data: LoginPages
): Promise<ResponseData<LoginData>> {
  try {
    const res: ResponseData<LoginData> = await API<ResponseData<LoginData>>(
      ROUTESUrl.LOGIN,
      'POST',
      data
    )
    return res
  } catch (err) {
    throw err
  }
}

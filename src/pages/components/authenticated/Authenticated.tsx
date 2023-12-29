import { useRouter } from 'next/router'
import Loader from '../loader/loader'
import Wrapper from '../section/Wrapper'
import Sidebar from '../sidebar/Sidebar'
import React, { Suspense, useEffect, useState } from 'react'
import { fetchAdminMe } from '@/data/api/admin'
import { ToastError } from '@/data/atom/toast/Toast'
import { AdminDataDetail } from '@/data/interface/admin'

interface propsLayput {
  children: React.ReactNode
  title?: string
}

export default function AuthenticatedLayout({ children, title }: propsLayput) {
  const router = useRouter()
  const { asPath } = router
  const [loading, setLoading] = useState<boolean>(false)
  const [data, setData] = useState<AdminDataDetail>()
  const checkingAdmin = async () => {
    try {
      setLoading(true)
      const res_check = await fetchAdminMe()
      setData(res_check.data)
    } catch (error: any) {
      ToastError(error.Message)
      if (
        error.Message === 'jwt expired' ||
        error.Message === 'Access Denied'
      ) {
        router.push('/login')
      }
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    checkingAdmin()
  }, [asPath])

  return (
    <>
      {/* {loading && data ? (
        <Loader />
      ) : ( */}
      {/* <Suspense fallback={<Loader />}> */}
      <main className='relative flex'>
        <Sidebar />
        {loading && data ? (
          <div className='absolute flex h-[100vh] ml-[58vw] justify-center'>
            <Loader />
          </div>
        ) : (
          <Wrapper data={data} titleNav={title}>
            {children}
          </Wrapper>
        )}
      </main>
      {/* </Suspense> */}
      {/* )} */}
    </>
  )
}

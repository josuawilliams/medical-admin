import { fetchAdminMe } from '@/data/api/admin'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import Loader from './components/loader/loader'

export default function Home() {
  const router = useRouter()

  const checkAdmin = async () => {
    try {
      const res_check = await fetchAdminMe()
      setTimeout(() => {
        router.replace('/dashboard')
      }, 1000)
    } catch (error: any) {
      if (
        error.Message === 'invalid signature' ||
        error.Message === 'jwt expired' ||
        error.status === 401
      ) {
        router.push('/login')
      }
    }
  }

  useEffect(() => {
    checkAdmin()
  })

  return (
    <>
      <main className='flex h-[500px] items-center justify-center overflow-hidden'>
        <div className=''>
          <Loader />
        </div>
      </main>
    </>
  )
}

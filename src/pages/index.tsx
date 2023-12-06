import { fetchAdminMe } from '@/data/api/admin'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function Home() {
  const router = useRouter()
  const checkAdmin = async () => {
    try {
      const res_check = await fetchAdminMe()
    } catch (error: any) {
      if (
        error.Message === 'invalid signature' ||
        error.Message === 'jwt expired'
      ) {
        router.replace('/login')
      }
    }
  }
  useEffect(() => {
    checkAdmin()
  })

  return <></>
}

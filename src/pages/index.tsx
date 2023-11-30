import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function Home() {
  const router = useRouter()
  const getAdmin = () => {
    router.replace('/login')
  }
  useEffect(() => {
    getAdmin()
  })

  return <></>
}

import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function Home() {
  const router = useRouter()
  const checkAdmin = async () => {
    try {
      
    } catch (error) {
      console.log(error)
    }
    // router.replace('/login')
  }
  useEffect(() => {
    checkAdmin()
  })

  return <></>
}

import Loader from '../loader/loader'
import Wrapper from '../section/Wrapper'
import Sidebar from '../sidebar/Sidebar'
import React, { Suspense, useEffect, useState } from 'react'

interface propsLayput {
  children: React.ReactNode
}

export default function AuthenticatedLayout({ children }: propsLayput) {
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }, [loading])

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <Suspense fallback={<Loader />}>
          <main className='relative flex'>
            <Sidebar />
            <Wrapper>{children}</Wrapper>
          </main>
        </Suspense>
      )}
    </>
  )
}

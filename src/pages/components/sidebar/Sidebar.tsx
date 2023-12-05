import Image from 'next/image'
import MenuSidebar from './MenuSidebar'

export default function Sidebar() {
  return (
    <>
      <div className='lg:block fixed w-64 h-full p-6 bg-blue-800'>
        <div className='flex justify-center'>
          <Image
            src={'/logo.svg'}
            width={90}
            height={90}
            alt='Medical logo'
            priority
          />
        </div>
        <MenuSidebar />
      </div>
    </>
  )
}

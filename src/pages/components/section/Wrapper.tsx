import { AdminDataDetail } from '@/data/interface/admin'
import Navbar from '../navbar/Navbar'

interface PropsSectionMain {
  children: React.ReactNode
  className?: string
  titleNav?: string
  data?: AdminDataDetail
}

export default function Wrapper({
  children,
  className,
  titleNav,
  data
}: PropsSectionMain) {
  return (
    <div className={`${className} lg:ml-64 box-border lg:w-full bg-black01`}>
      <Navbar data={data} titleNav={titleNav} />
      <section>{children}</section>
    </div>
  )
}

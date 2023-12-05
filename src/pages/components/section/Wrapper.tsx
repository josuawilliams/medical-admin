import Navbar from '../navbar/Navbar'

interface PropsSectionMain {
  children: React.ReactNode
  className?: string
  titleNav?: string
  wideScreen?: boolean
}

export default function Wrapper({
  children,
  className,
  wideScreen
}: PropsSectionMain) {
  const screenStyles = [
    wideScreen
      ? 'xl:max-w-screen-2xl lg:max-w-screen-2xl'
      : 'xl:max-w-screen-xl lg:max-w-screen-lg'
  ].join(' ')
  return (
    <div className={`${className} lg:ml-64 box-border lg:w-full bg-black01`}>
      <div className={`lg:px-8 mx-auto px-4 ${screenStyles}`}>
        <Navbar />
        <section>{children}</section>
      </div>
    </div>
  )
}

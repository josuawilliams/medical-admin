import { menu } from '@/data/static/dashboard/menu'
import Loader from '../loader/loader'
import { MenuItem, SidebarMenu } from '@/data/interface/menu'
import { useRouter } from 'next/router'
import { DivisiEnum } from '@/data/interface'
import Cookies from 'js-cookie'
import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/24/solid'
import MenuItemLink from './MenuItem'

export default function MenuSidebar() {
  const { asPath } = useRouter()
  const divisi = Cookies.get('divisi')
  return (
    <>
      <div className='flex flex-col justify-center py-4 mt-4 '>
        {menu.map((item: SidebarMenu, i: number) => {
          const activeCollapsed = asPath
            .split('/')
            .includes(item.uniqeKey ?? '')

          // jika diisi dengan array kosong maka akses terbuka untuk semua divisi
          const have_access = !item.kapabilitasMenu.length
            ? true
            : item.kapabilitasMenu.includes(divisi as DivisiEnum)

          return (
            <div key={i}>
              {have_access ? (
                <div className='w-full mt-5'>
                  <div className='mx-auto w-full max-w-md rounded-2xl'>
                    <Disclosure defaultOpen={activeCollapsed}>
                      {({ open }) => (
                        <>
                          <Disclosure.Button className='flex w-full justify-between rounded-lg py-1 text-left text-sm font-bold text-black01'>
                            <span>{item.title}</span>
                            <ChevronUpIcon
                              className={`${
                                open ? 'rotate-180 transform' : ''
                              } h-5 w-5 text-black01`}
                            />
                          </Disclosure.Button>
                          <Disclosure.Panel
                            className='bg-white rounded-xl p-3'
                            as='ul'>
                            {item.menu.map((menuItem: MenuItem, index) => {
                              return (
                                <MenuItemLink key={index} item={menuItem} />
                              )
                            })}
                          </Disclosure.Panel>
                        </>
                      )}
                    </Disclosure>
                  </div>
                </div>
              ) : (
                <div />
              )}
            </div>
          )
        })}
      </div>
    </>
  )
}

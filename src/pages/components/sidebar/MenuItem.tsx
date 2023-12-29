import { MenuItem } from '@/data/interface/menu'
// import MenuCollapsed from './MenuCollapsed'
import Cookies from 'js-cookie'
import { DivisiEnum } from '@/data/interface'
import LinkMenu, { IconMenu } from '@/data/atom/menu/LinkMenu'
import { Disclosure } from '@headlessui/react'
import { ChevronRightIcon } from '@heroicons/react/24/solid'
import { useRouter } from 'next/router'

interface PropsMenuItemLink {
  item: MenuItem
}
export default function MenuItemLink({ item }: PropsMenuItemLink) {
  const { asPath } = useRouter()
  const divisi = Cookies.get('divisi')
  const have_acess: boolean = !item.kapabilitasSubMenu.length
    ? true
    : item.kapabilitasSubMenu.includes(divisi as DivisiEnum)

  const activeCollapsed = asPath.split('/').includes(item.uniqeKey ?? '')

  return (
    <li className='mt-1 cursor-pointer hover:bg-blue-50 rounded-lg'>
      {have_acess && item.path && (
        <LinkMenu label={item.label} path={item.path} icon={item.icon} />
      )}

      {have_acess && item.collapsed && (
        // <MenuCollapsed menu={item} />
        <div className='w-full py-2'>
          <div className='mx-auto w-full max-w-md rounded-2xl'>
            <Disclosure defaultOpen={activeCollapsed}>
              {({ open }) => (
                <>
                  <Disclosure.Button className='flex w-full px-4 justify-between rounded-lg text-left text-sm text-black01'>
                    <div className='flex gap-2'>
                      <IconMenu src={item.icon} />
                      <span>{item.label ?? ''}</span>
                    </div>
                    <ChevronRightIcon
                      className={`${
                        open ? 'rotate-90 transform' : ''
                      } h-5 w-5 text-black01`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel as='ul' className='mt-2'>
                    {item.itemCollapsed?.map((item, i) => {
                      const have_access = !item.kapabilitasSubMenuCollapsed
                        .length
                        ? true
                        : item.kapabilitasSubMenuCollapsed.includes(
                            divisi as DivisiEnum
                          )
                      return (
                        <>
                          {have_access && (
                            <div key={i} className='mt-2'>
                              <LinkMenu
                                label={item.label}
                                path={item.path}
                                uniqeKey={item.uniqeKey}
                                itemCollapsed
                              />
                            </div>
                          )}
                        </>
                      )
                    })}
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </div>
        </div>
      )}
    </li>
  )
}

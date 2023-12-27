import Paragraf from '../typogrphy/Paragraf'
import { Menu, Transition } from '@headlessui/react'
import { Fragment, useEffect, useRef, useState } from 'react'
import { ArrowLeftCircleIcon } from '@heroicons/react/24/solid'
import { AdminDataDetail } from '@/data/interface/admin'
import { extractInitials } from '@/utils/convert'

interface PropsNavbar {
  titleNav?: string
  data?: AdminDataDetail
}

export default function Navbar({ titleNav, data }: PropsNavbar) {
  const logOut = () => {}

  return (
    <>
      <div className='lg:h-20 lg:py-2 py-1 bg-white lg:bg-black01 shadow-xl'>
        <div className='flex justify-between p-2 mr-4'>
          <div>
            <Paragraf variant='h3' className='ml-4 text-grayTitle font-medium'>
              {titleNav}
            </Paragraf>
          </div>
          <Menu as='div' className='relative inline-block text-left'>
            <div>
              <Menu.Button>
                <div className='flex flex-row'>
                  <div>
                    <Paragraf className='text-black font-bold'>
                      {data?.nama_admin}
                    </Paragraf>
                    <Paragraf className='text-gray60 text-end' variant='small'>
                      {data?.divisi}
                    </Paragraf>
                  </div>
                  <div className='flex rounded-full w-12 h-12 items-center justify-center bg-primary ml-2 mr-4'>
                    {extractInitials(data?.nama_admin)}
                  </div>
                </div>
              </Menu.Button>
            </div>
            <Transition
              as={Fragment}
              enter='transition ease-out duration-100'
              enterFrom='transform opacity-0 scale-95'
              enterTo='transform opacity-100 scale-100'
              leave='transition ease-in duration-75'
              leaveFrom='transform opacity-100 scale-100'
              leaveTo='transform opacity-0 scale-95'>
              <Menu.Items className='absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none'>
                <div className='px-1 py-1 '>
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        // onClick={logOut()}
                        className={`${
                          active ? 'bg-blue-300 text-gray-900' : 'text-gray-900'
                        } group flex w-full items-center rounded-md px-2 py-2 text-sm`}>
                        {active ? (
                          <ArrowLeftCircleIcon
                            className='mr-2 h-5 w-5'
                            aria-hidden='true'
                          />
                        ) : (
                          <ArrowLeftCircleIcon
                            className='mr-2 h-5 w-5'
                            aria-hidden='true'
                          />
                        )}
                        Logout
                      </button>
                    )}
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
      </div>
    </>
  )
}

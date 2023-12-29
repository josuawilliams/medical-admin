import Link from 'next/link'
import React from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import Paragraf from '@/pages/components/typogrphy/Paragraf'

interface PropsLinkMenu {
  path?: string
  icon?: string
  label: string
  itemCollapsed?: boolean
  uniqeKey?: string | string[] | undefined
}

export default function LinkMenu({
  path = '',
  icon,
  label,
  itemCollapsed,
  uniqeKey
}: PropsLinkMenu) {
  const { asPath } = useRouter()
  const isActive =
    asPath.startsWith(path) ||
    asPath
      .split('/')
      .filter((item) => item !== '')
      .some((item) =>
        Array.isArray(uniqeKey) ? uniqeKey.includes(item) : item === uniqeKey
      )
  return (
    <Link
      href={path ?? '/#'}
      className={`flex gap-2 px-4 py-2 rounded-lg text-black ${
        isActive ? 'text-blue-900' : ''
      }`}>
      {icon && <IconMenu src={icon} />}
      <Paragraf
        className={`${itemCollapsed ? 'pl-6' : ''} 
            ${isActive ? '' : 'hover:text-primary'}
             text-base font-thin`}>
        {label}
      </Paragraf>
    </Link>
  )
}

interface PropsIconMenu {
  src: string
}

export function IconMenu({ src }: PropsIconMenu) {
  return <Image src={src} alt='icon-menu' width={16} height={16} />
}

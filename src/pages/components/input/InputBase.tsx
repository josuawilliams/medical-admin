import React, { useState } from 'react'
import { Input } from '@material-tailwind/react'
import {
  MagnifyingGlassCircleIcon,
  ExclamationCircleIcon,
  EyeIcon
} from '@heroicons/react/24/solid'
import { UseFormRegisterReturn } from 'react-hook-form'
import { variant } from '@/data/interface/input'
import { EyeSlashIcon } from '@heroicons/react/20/solid'
import Paragraf from '../typogrphy/Paragraf'

interface PropsInput {
  variant?: variant
  className?: string
  label?: string
  type?: string
  containerProps?: containerProps
  error?: boolean
  search?: boolean
  placeholder?: string
  register?: UseFormRegisterReturn
  onChange?(value: any): void
  errorMessage?: string
  defaultValue?: string | number
  styleInput?: string
  value?: string | number
  disabled?: boolean
  readonly?: boolean
  step?: number
}

export type containerProps = {
  [key: string]: any
}

export default function InputBase({
  variant = 'primary',
  className,
  label,
  type,
  containerProps,
  error,
  search,
  placeholder,
  register,
  onChange,
  errorMessage,
  defaultValue,
  styleInput,
  value,
  disabled,
  readonly,
  step,
  ...rest
}: PropsInput) {
  const [visible, setVisible] = useState<boolean>(false)
  const primary = variant === 'primary'
  const default_variant = primary ? 'static' : 'outlined'

  const style_error = error
    ? 'focus:border-red-500 !border-red-500 focus:ring-red-200/20'
    : 'focus:!border-blue-700 !border-blue-gray-200 focus:ring-primary/20'

  const styles = primary
    ? `${style_error} !p-4 rounded-xl ${
        search ? '!pl-10 rounded-xl !p-0 border-none !shadow-card !h-11' : ''
      }
        ring-4 ring-transparent !border bg-white shadow-lg 
        shadow-blue-gray-900/5 placeholder:text-blue-gray-200 text-blue-gray-500`
    : ''
  const icon_styles = primary ? 'right-5 top-10' : 'right-2 top-3'

  const typeState = type !== 'password' ? type : !visible ? 'password' : 'text'

  return (
    <div className={`relative my-6 ${className}`}>
      {primary && (
        <Paragraf className='font-bold text-sm mb-2 text-black100'>
          {label ?? ''}
        </Paragraf>
      )}
      <Input
        crossOrigin={undefined}
        variant={default_variant}
        className={`${styles} ${styleInput}`}
        color={'blue'}
        label={label}
        step={step}
        type={typeState}
        labelProps={{
          className: `${primary ? 'hidden' : ''}`
        }}
        defaultValue={defaultValue}
        onChange={onChange}
        containerProps={containerProps}
        error={error}
        placeholder={search ? 'Search' : placeholder}
        value={value}
        readOnly={readonly}
        disabled={disabled}
        {...register}
        {...rest}
      />
      {search && (
        <div className='w-7 h-7 !absolute top-2 left-1 text-red-100'>
          <MagnifyingGlassCircleIcon className='text-neutral-60/50' />
        </div>
      )}
      {error && type !== 'password' && type !== 'date' && (
        <div className={`w-5 h-5 !absolute rounded ${icon_styles}`}>
          <ExclamationCircleIcon color='red' className='' />
        </div>
      )}

      {type === 'password' && (
        <div
          onClick={() => setVisible(!visible)}
          className={`w-5 h-5 cursor-pointer !absolute ${icon_styles}`}>
          {visible ? <EyeIcon /> : <EyeSlashIcon />}
        </div>
      )}
      {error && errorMessage && (
        <Paragraf className='text-xs text-red-500 font-semibold mt-2'>
          {errorMessage ?? ''}
        </Paragraf>
      )}
    </div>
  )
}

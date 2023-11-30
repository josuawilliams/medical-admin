/* eslint-disable react/display-name */

import { Button as ButtonComponent } from '@material-tailwind/react'
import { Spinner } from '@material-tailwind/react'
import { forwardRef } from 'react'

interface PropsButton {
  children: React.ReactNode
  className?: string
  variant?: 'filled' | 'outlined' | 'gradient' | 'text'
  fullWidth?: boolean
  rounded?: boolean
  size?: 'sm' | 'md' | 'lg'
  isLoading?: boolean
  isDisabled?: boolean
  onClick?(): void
  type?: 'submit' | 'reset' | 'button' | undefined
}

const ButtonBase: React.ForwardRefExoticComponent<PropsButton> = forwardRef(
  (
    {
      children,
      className,
      variant,
      fullWidth,
      rounded,
      size,
      isLoading,
      isDisabled,
      onClick,
      type
    }: PropsButton,
    ref: React.ForwardedRef<HTMLButtonElement>
  ): React.ReactElement => {
    return (
      <ButtonComponent
        ref={ref}
        onClick={onClick}
        type={type}
        size={size}
        color={'light-blue'}
        className={`relative font-sans capitalize
                ${isLoading ? 'flex items-center justify-center gap-2' : ''} 
                ${rounded ? 'rounded-full' : ''} ${className}`}
        variant={variant}
        disabled={isDisabled || isLoading}
        fullWidth={fullWidth}>
        {isLoading && <Spinner color='light-blue' className='w-4 h-4' />}{' '}
        {children}
      </ButtonComponent>
    )
  }
)
export default ButtonBase

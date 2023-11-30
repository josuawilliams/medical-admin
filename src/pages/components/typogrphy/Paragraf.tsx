import React, { ReactNode, forwardRef, ForwardedRef } from 'react'
import { Typography as TypographyBase } from '@material-tailwind/react'

interface PropsParagraf {
  children: ReactNode
  className?: string
  variant?:
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'lead'
    | 'paragraph'
    | 'small'
}

const Paragraf: React.ForwardRefExoticComponent<PropsParagraf> = forwardRef(
  (
    { children, className, variant = 'paragraph' }: PropsParagraf,
    ref: ForwardedRef<HTMLDivElement>
  ) => {
    return (
      <TypographyBase
        ref={ref}
        variant={variant}
        className={`font-sans font-normal text-black60 ${className}`}>
        {children ?? ''}
      </TypographyBase>
    )
  }
)

Paragraf.displayName = 'Typography'

export default Paragraf

import React, { MouseEventHandler } from 'react'

import { useTheme } from '@theme'

import './style.scss'

interface StyledPadProps {
  children: React.ReactNode
  classNameProps?: string
  onDoubleClick?: MouseEventHandler<HTMLDivElement>
}

export const StyledPad: React.FC<StyledPadProps> = ({
  children,
  classNameProps = '',
  ...props
}) => {
  const { theme } = useTheme()

  return (
    <div className={`padWrapper ${classNameProps} ${theme}Pad`} {...props}>
      {children}
    </div>
  )
}

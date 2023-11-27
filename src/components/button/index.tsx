import React from 'react'

import { useTheme } from '@theme'

import './style.scss'

interface ButtonProps {
  disabled?: boolean
  onClick?: () => void
  title: string
  children?: React.ReactNode
  type?: 'button' | 'submit' | 'reset' | undefined
}

export const Button = ({ title, children, ...props }: ButtonProps) => {
  const { theme } = useTheme()

  return (
    <button {...props} className={`buttonComponent ${theme}Btn`}>
      {title}
      {children}
    </button>
  )
}

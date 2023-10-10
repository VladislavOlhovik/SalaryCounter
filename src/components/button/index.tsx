import React from "react";

import { useTheme } from "@theme";

import './style.scss'

interface ButtonPropsInterface {
    disabled?: boolean
    onClick?: () => void
    title: string
    children?: React.ReactNode
    type?: "button" | "submit" | "reset" | undefined
}

export const Button = ({ title, children, ...props }: ButtonPropsInterface) => {

    const {theme} = useTheme()

    return (
        <button {...props} className={`buttonComponent ${theme}BTN`}>
            {title}
            {children}
        </button>
    )
}
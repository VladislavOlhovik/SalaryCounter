import React from "react";
import './stylePad.css'

interface ButtonProps {
    children: React.ReactNode;
    style?: string;
}

export const StylePad: React.FC<ButtonProps> = ({children, style}) => {
    return(
        <div className={`podWrapper ${style}`}>
           {children}
        </div>
    )
}
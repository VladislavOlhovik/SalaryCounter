import React from "react";
import './stylePad.css'

interface ButtonProps {
    children: React.ReactNode;
    styleProp?: string;
}

export const StylePad: React.FC<ButtonProps> = ({children, styleProp=''}) => {
    return(
        <div className={`podWrapper ${styleProp}`}>
           {children}
        </div>
    )
}
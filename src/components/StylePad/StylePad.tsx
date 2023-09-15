import React, { MouseEventHandler } from "react";
import './stylePad.css'

interface ButtonProps {
    children: React.ReactNode;
    styleProp?: string;
    onChangeEvent?:MouseEventHandler<HTMLDivElement>;
}
// to-do: maybe styled?
export const StylePad: React.FC<ButtonProps> = ({children, styleProp='', onChangeEvent}) => {
    return(
        <div className={`podWrapper ${styleProp}`} onDoubleClick={onChangeEvent}>
           {children}
        </div>
    )
}

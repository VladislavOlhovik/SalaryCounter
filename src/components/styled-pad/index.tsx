import React, { MouseEventHandler } from "react";

import { useTheme } from "@theme";

import './style.scss'

interface StyledPadProps {
    children: React.ReactNode;
    styleProp?: string;
    onChangeEvent?:MouseEventHandler<HTMLDivElement>;
}

export const StyledPad: React.FC<StyledPadProps> = (
    {children, styleProp='', onChangeEvent}
    ) => {

    const {theme} = useTheme()

    return(
        <div className={`padWrapper ${styleProp} ${theme}Pad`} onDoubleClick={onChangeEvent}>
           {children}
        </div>
    )
}
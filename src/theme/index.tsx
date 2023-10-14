import React, { createContext, useContext, useState } from "react";


// to-do: unify interface/props postfix
interface ThemeProviderInterface {
    children: React.ReactNode
}

type ThemeType = 'dark' | 'light';

interface ContextProps {
    toggleTheme: () => void
    theme: ThemeType
}


const ThemeContext = createContext<ContextProps | undefined>(undefined)


export const ThemeProvider = ({ children }: ThemeProviderInterface) => {

    const [theme, setTheme] = useState<ThemeType>('dark')

    const toggleTheme = () => {
        setTheme(prevValue => prevValue === 'light' ? 'dark' : 'light')
    }

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }} >
            {children}
        </ThemeContext.Provider>
    )
}

// handle undefined theme
export const useTheme = () => {
    const theme = useContext(ThemeContext);
    return theme;
};

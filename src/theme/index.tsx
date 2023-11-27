import React, { createContext, useContext, useState } from 'react'

interface ThemeProviderProps {
  children: React.ReactNode
}

type ThemeType = 'dark' | 'light'

interface ContextProps {
  toggleTheme: () => void
  theme: ThemeType
}

const ThemeContext = createContext<ContextProps | undefined>(undefined)

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [theme, setTheme] = useState<ThemeType>('dark')

  const toggleTheme = () => {
    setTheme((prevValue) => (prevValue === 'light' ? 'dark' : 'light'))
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}

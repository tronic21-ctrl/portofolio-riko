import { createContext, useContext, useState, useEffect } from 'react'

const ThemeContext = createContext()

// Riko Tronic Improved Theme
const THEMES = {
  dark: {
    name: 'dark',
    '--blue-primary': '#38bdf8',
    '--blue-dark': '#0ea5e9',
    '--blue-glow': '#38bdf825',
    '--bg-dark': '#0a0f1e',
    '--bg-card': '#0f172a',
    '--bg-card2': '#1e293b',
    '--text-primary': '#f1f5f9',
    '--text-secondary': '#94a3b8',
    '--text-heading': '#e2e8f0',
    '--navbar-bg': '#0f172a99',
    '--border': '#334155',
    '--gradient-1': '#1e3a5f30',
  },
  light: {
    name: 'light',
    '--blue-primary': '#0284c7',
    '--blue-dark': '#0369a1',
    '--blue-glow': '#0284c725',
    '--bg-dark': '#f8fafc',           // Background halaman lebih soft
    '--bg-card': '#ffffff',           // Card putih bersih
    '--bg-card2': '#f1f5f9',          // Tech tags
    '--text-primary': '#0f172a',
    '--text-secondary': '#475569',
    '--text-heading': '#0f172a',
    '--navbar-bg': '#ffffffee',
    '--border': '#e2e8f0',            // Border lembut
    '--gradient-1': '#bae6fd30',
  },
}

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') || 'dark'
    }
    return 'dark'
  })

  useEffect(() => {
    const root = document.documentElement
    const themeColors = THEMES[theme]

    Object.entries(themeColors).forEach(([key, value]) => {
      root.style.setProperty(key, value)
    })

    localStorage.setItem('theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark')
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  return useContext(ThemeContext)
}
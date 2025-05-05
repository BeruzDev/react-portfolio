import { useState, useEffect } from 'react'

export default function useTheme() {
  const [theme, setTheme] = useState('dark')

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark'
    setTheme(newTheme)
  }

  useEffect(() => {
    const root = document.documentElement
    root.classList.remove('light', 'dark')
    root.classList.add(theme)
  }, [theme])

	useEffect(() => {
		localStorage.setItem('theme', theme)
	}, [theme]);

  return { theme, toggleTheme, isDark: theme === 'dark' }
}

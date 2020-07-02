import { createContext, useState } from 'react'

export const ThemeCtx = createContext({
  isDark: false,
  toggle: () => {},
})

/**
 * Custom hook for theme state
 * @param {boolean} defaultIsDarkVal Sets default value for isDark
 * @return {Object} Object with shape compatible for ThemeCtx
 */
export const useThemeState = (defaultIsDarkVal = false) => {
  const [isDark, setIsDark] = useState(defaultIsDarkVal)

  return {
    isDark,
    toggle: () => {
      setIsDark(!isDark)
    },
  }
}
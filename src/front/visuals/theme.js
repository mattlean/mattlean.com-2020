import { createContext, useState } from 'react'

export const ThemeCtx = createContext({
  isDark: false,
  manualToggle: () => {},
  setIsDark: () => {},
})

/**
 * Custom hook for theme state
 * @param {boolean} defaultIsDarkVal Sets default value for isDark
 * @return {Object} Object with shape compatible for ThemeCtx
 */
export const useThemeCtxState = (defaultIsDarkVal = false) => {
  const [isDark, setIsDark] = useState(defaultIsDarkVal)

  return {
    isDark,
    manualToggle: () => {
      localStorage.setItem('manualIsDark', !isDark)
      localStorage.setItem('manualThemeExpire', Date.now() + 86400000)
      setIsDark(!isDark)
    },
    setIsDark,
  }
}

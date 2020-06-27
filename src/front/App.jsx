import React, { useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'
import { Route, Switch, useLocation } from 'react-router-dom'
import { ThemeCtx, useThemeState } from './visuals/theme'
import About from './pages/About'
import Landing from './pages/Landing'
import MainNav from './components/MainNav'
import RouteChange from './components/RouteChange'

const App = () => {
  const location = useLocation()
  const themeState = useThemeState()

  useEffect(() => {
    if (themeState.isDark) {
      document.body.classList.add('dark')
    } else {
      document.body.classList.remove('dark')
    }
  })

  return (
    <ThemeCtx.Provider value={themeState}>
      <MainNav />
      <RouteChange pathname={location.pathname} />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route exact path="/" component={Landing} />
          <Route path="/about" component={About} />
        </Switch>
      </AnimatePresence>
    </ThemeCtx.Provider>
  )
}

export default App

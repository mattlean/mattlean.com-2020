import React, { useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'
import { Route, Switch, useLocation } from 'react-router-dom'
import { ThemeCtx, useThemeState } from './visuals/theme'
import About from './pages/About'
import Blog from './pages/Blog'
import Contact from './pages/Contact'
import Landing from './pages/Landing'
import MainNav from './components/MainNav'
import getRoute from '../common/getRoute'

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

  useEffect(() => {
    document.title = getRoute(location.pathname)
  }, [location.pathname])

  return (
    <ThemeCtx.Provider value={themeState}>
      <MainNav />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route exact path="/" component={Landing} />
          <Route path="/about" component={About} />
          <Route path="/blog" component={Blog} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </AnimatePresence>
    </ThemeCtx.Provider>
  )
}

export default App

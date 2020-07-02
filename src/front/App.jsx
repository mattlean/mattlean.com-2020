import React, { useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'
import { Route, Switch, useLocation } from 'react-router-dom'
import { ThemeCtx, useThemeState } from './visuals/theme'
import About from './pages/About'
import Blog from './pages/Blog'
import Contact from './pages/Contact'
import Landing from './pages/Landing'
import MainNav from './components/MainNav'
import Projects from './pages/Projects'
import { getRouteData } from '../common/routeData'
import { updateMeta } from './util'

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

  // Update document head
  useEffect(() => {
    const { desc, keywords, title } = getRouteData(location.pathname)
    document.title = title
    updateMeta('description', desc)
    updateMeta('keywords', keywords)
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
          <Route path="/projects" component={Projects} />
        </Switch>
      </AnimatePresence>
    </ThemeCtx.Provider>
  )
}

export default App

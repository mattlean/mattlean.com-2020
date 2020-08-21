import React, { useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'
import { Route, Switch, useLocation } from 'react-router-dom'
import { ThemeCtx, useThemeCtxState } from '../visuals/theme'
import About from '../pages/About'
import Blog from '../pages/Blog'
import Contact from '../pages/Contact'
import Landing from '../pages/Landing'
import MainNav from './MainNav'
import NoMatch from '../pages/NoMatch'
import Post from '../pages/Blog/posts'
import ProjectPage from '../pages/Projects/pages'
import Projects from '../pages/Projects'

let isInitLoad = true

const App = () => {
  const location = useLocation()
  const themeCtxState = useThemeCtxState()

  if (!__isServer__ && isInitLoad) {
    let manualThemeExpire = localStorage.getItem('manualThemeExpire')
    if (manualThemeExpire) manualThemeExpire = parseInt(manualThemeExpire)

    if (manualThemeExpire && Date.now() < manualThemeExpire) {
      // Set saved theme if it has been set within the past day
      themeCtxState.setIsDark(localStorage.getItem('manualIsDark') === 'true')
    } else {
      // Set dark theme if user's computer time is between 6PM & 6AM
      const currHour = new Date().getHours()

      if (currHour <= 6 || currHour >= 18) {
        themeCtxState.setIsDark(true)
      }
    }

    isInitLoad = false
  }

  // Handle theme change
  useEffect(() => {
    if (themeCtxState.isDark) {
      document.body.classList.add('dark')
    } else {
      document.body.classList.remove('dark')
    }
  })

  return (
    <ThemeCtx.Provider value={themeCtxState}>
      <MainNav />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route exact path="/" component={Landing} />
          <Route path="/about" component={About} />
          <Route exact path="/blog" component={Blog} />
          <Route path="/blog/:id" component={Post} />
          <Route path="/contact" component={Contact} />
          <Route exact path="/projects" component={Projects} />
          <Route path="/projects/:id" component={ProjectPage} />
          <Route path="*" component={NoMatch} />
        </Switch>
      </AnimatePresence>
    </ThemeCtx.Provider>
  )
}

export default App

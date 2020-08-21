import React, { useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'
import { Route, Switch, useLocation } from 'react-router-dom'
import { ThemeCtx, useThemeState } from '../visuals/theme'
import About from '../pages/About'
import Blog from '../pages/Blog'
import Contact from '../pages/Contact'
import Landing from '../pages/Landing'
import MainNav from './MainNav'
import NoMatch from '../pages/NoMatch'
import Post from '../pages/Blog/posts'
import ProjectPage from '../pages/Projects/pages'
import Projects from '../pages/Projects'

const App = () => {
  const location = useLocation()
  const themeState = useThemeState()

  if (!__isServer__ && !window.initLoad) {
    let manualThemeExpire = localStorage.getItem('manualThemeExpire')
    if (manualThemeExpire) manualThemeExpire = parseInt(manualThemeExpire)

    if (manualThemeExpire && Date.now() < manualThemeExpire) {
      // Set saved theme if it has been set within the past day
      themeState.setIsDark(localStorage.getItem('manualIsDark') === 'true')
    } else {
      // Set dark theme if user's computer time is between 6PM & 6AM
      const currHour = new Date().getHours()

      if (currHour <= 6 || currHour >= 18) {
        themeState.setIsDark(true)
      }
    }

    window.initLoad = true
  }

  // Handle theme change
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

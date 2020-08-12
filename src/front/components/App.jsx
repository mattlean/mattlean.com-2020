import React, { useEffect, useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import { Route, Switch, useLocation } from 'react-router-dom'
import { ThemeCtx, useThemeState } from '../visuals/theme'
import About from '../pages/About'
import Blog from '../pages/Blog'
import Contact from '../pages/Contact'
import Landing from '../pages/Landing'
import MainNav from './MainNav'
import Project from '../pages/Projects/Project'
import Projects from '../pages/Projects'
import { genFormattedPath } from '../../common/util'
import { getRouteData, TITLE_SUFFIX } from '../../common/routeData'
import { updateMeta } from '../util'

const App = () => {
  const [initLoad, setInitLoad] = useState(false)
  const location = useLocation()
  const themeState = useThemeState()

  // Set dark theme if user's computer time is between 6PM & 6AM
  if (!__isServer__ && !initLoad) {
    const currHour = new Date().getHours()

    if (currHour <= 6 || currHour >= 18) {
      themeState.setDark()
    }

    setInitLoad(true)
  }

  // Handle theme change
  useEffect(() => {
    if (themeState.isDark) {
      document.body.classList.add('dark')
    } else {
      document.body.classList.remove('dark')
    }
  })

  // Update document head
  useEffect(() => {
    const path = genFormattedPath(location.pathname)
    const { desc, keywords, title } = getRouteData(path)
    const fullTitle = path !== '/' ? `${title}${TITLE_SUFFIX}` : title
    document.title = fullTitle
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
          <Route exact path="/projects" component={Projects} />
          <Route path="/projects/:id" component={Project} />
        </Switch>
      </AnimatePresence>
    </ThemeCtx.Provider>
  )
}

export default App

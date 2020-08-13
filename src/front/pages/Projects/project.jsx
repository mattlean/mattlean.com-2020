import React from 'react'
import { motion } from 'framer-motion'
import { Route, Switch, useLocation, useParams } from 'react-router-dom'
import FFUH from './ffuh'
import SOT from './sot'
import MainFooter from '../../components/MainFooter'
import NoMatchContent from '../../pages/NoMatch/NoMatchContent'
import variants from '../variants'
import { genFormattedPath } from '../../../common/util'
import { getRouteData } from '../../../common/routeData'

const PREFIX_PROJECT = '/projects/'

/**
 * Project Page
 */
const Project = () => {
  const { pathname } = useLocation()
  const { id } = useParams()

  let cn = 'grid '
  const path = genFormattedPath(pathname)
  if (getRouteData(path)) {
    cn += 'grid-project'
    if (id) cn += ` grid-project-${id}`
  } else {
    cn += 'grid-no-match'
  }

  return (
    <motion.div
      animate="initial"
      exit="out"
      initial="initial"
      variants={variants}
      onAnimationComplete={() => window.scroll(0, 0)}
      className="container"
    >
      <main className={cn}>
        <Switch>
          <Route path={`${PREFIX_PROJECT}sot`} component={SOT} />
          <Route path={`${PREFIX_PROJECT}ffuh`} component={FFUH} />
          <Route path="*" component={NoMatchContent} />
        </Switch>
      </main>
      <MainFooter />
    </motion.div>
  )
}

export default Project

import React from 'react'
import { motion } from 'framer-motion'
import { Route, Switch, useLocation, useParams } from 'react-router-dom'
import Adam from './Adam'
import ALWP from './ALWP'
import Checkpoint from './Checkpoint'
import Crush from './Crush'
import FFUH from './FFUH'
import Lantern from './Lantern'
import LeanSpace from './LeanSpace'
import LJAS from './LJAS'
import SOT from './SOT'
import MainFooter from '../../../components/MainFooter'
import NoMatchContent from '../../NoMatch/NoMatchContent'
import ThemeBoot from './ThemeBoot'
import variants from '../../variants'
import { genFormattedPath } from '../../../../common/util'
import { getRouteData } from '../../../../common/data/route'
import { ROUTE_PREFIX } from '../../../../common/data/project'

/**
 * Project Page
 */
const ProjectPage = () => {
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
          <Route path={`${ROUTE_PREFIX}adam`} component={Adam} />
          <Route path={`${ROUTE_PREFIX}alwp`} component={ALWP} />
          <Route path={`${ROUTE_PREFIX}crush`} component={Crush} />
          <Route path={`${ROUTE_PREFIX}checkpoint`} component={Checkpoint} />
          <Route path={`${ROUTE_PREFIX}ffuh`} component={FFUH} />
          <Route path={`${ROUTE_PREFIX}lantern`} component={Lantern} />
          <Route path={`${ROUTE_PREFIX}lean-space`} component={LeanSpace} />
          <Route path={`${ROUTE_PREFIX}ljas`} component={LJAS} />
          <Route path={`${ROUTE_PREFIX}sot`} component={SOT} />
          <Route path={`${ROUTE_PREFIX}themeboot`} component={ThemeBoot} />
          <Route path="*" component={NoMatchContent} />
        </Switch>
      </main>
      <MainFooter />
    </motion.div>
  )
}

export default ProjectPage

import React from 'react'
import { motion } from 'framer-motion'
import { Route, Switch, useLocation, useParams } from 'react-router-dom'
import CSLeanSpace from './CSLeanSpace'
import CSSOT from './CSSOT'
import HelloWorld from './HelloWorld'
import MainFooter from '../../../components/MainFooter'
import NoMatchContent from '../../NoMatch/NoMatchContent'
import VARIANTS from '../../page_variants'
import { genFormattedPath } from '../../../../common/util'
import { getRouteData } from '../../../../common/data/route'
import { isCaseStudy, isGeneral } from './layout'
import { ROUTE_PREFIX } from '../../../../common/data/route/blog'

/**
 * Post Page
 */
const Post = () => {
  const { pathname } = useLocation()
  const { id } = useParams()

  let cn = 'grid '
  const path = genFormattedPath(pathname)
  if (getRouteData(path)) {
    cn += 'grid-blog'
    if (id) {
      if (isGeneral(id)) {
        cn += ' grid-blog-general'
      } else {
        cn += ` grid-blog-${id}`
      }

      if (isCaseStudy(id)) {
        cn += ' grid-cs'
      }
    }
  } else {
    cn += 'grid-no-match'
  }

  return (
    <motion.div
      animate="initial"
      exit="out"
      initial="initial"
      variants={VARIANTS}
      onAnimationComplete={() => window.scroll(0, 0)}
      className="container"
    >
      <main aria-label="Content" className={cn}>
        <Switch>
          <Route
            path={`${ROUTE_PREFIX}cs-lean-space`}
            component={CSLeanSpace}
          />
          <Route path={`${ROUTE_PREFIX}cs-sot`} component={CSSOT} />
          <Route path={`${ROUTE_PREFIX}hello-world`} component={HelloWorld} />
          <Route path="*" component={NoMatchContent} />
        </Switch>
      </main>
      <MainFooter />
    </motion.div>
  )
}

export default Post

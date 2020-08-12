import React from 'react'
import { motion } from 'framer-motion'
import { Route, Switch, useParams } from 'react-router-dom'
import FFUH from './ffuh'
import SOT from './sot'
import MainFooter from '../../components/MainFooter'
import variants from '../variants'

const PREFIX_PROJECT = '/projects/'

const Project = () => {
  const { id } = useParams()
  let cn = 'grid-project grid'
  if (id) cn += ` grid-project-${id}`

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
        </Switch>
      </main>
      <MainFooter />
    </motion.div>
  )
}

export default Project

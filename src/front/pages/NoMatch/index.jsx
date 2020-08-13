import React from 'react'
import { motion } from 'framer-motion'
import MainFooter from '../../components/MainFooter'
import NoMatchContent from './NoMatchContent'
import variants from '../variants'

/**
 * No Match Page
 */
const NoMatch = () => (
  <motion.div
    animate="initial"
    exit="out"
    initial="initial"
    variants={variants}
    onAnimationComplete={() => window.scroll(0, 0)}
    className="container"
  >
    <main className="grid-no-match grid">
      <NoMatchContent />
    </main>
    <MainFooter />
  </motion.div>
)

export default NoMatch

import React from 'react'
import { motion } from 'framer-motion'
import { pageTransition, pageVariants } from '../visuals/animation'

const About = () => {
  const initAnimState = __isServer__ || window.isInitLoad ? 'in' : 'out'

  return (
    <motion.main
      initial={initAnimState}
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      <h1>I am the about page</h1>
    </motion.main>
  )
}

export default About

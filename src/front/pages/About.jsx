import React from 'react'
import { motion } from 'framer-motion'
import { pageVariants } from '../visuals/animation'

const About = () => {
  // const initAnimState = __isServer__ || window.isInitLoad ? 'in' : 'out'

  return (
    <motion.main
      animate="initial"
      exit="out"
      initial="initial"
      variants={pageVariants}
      className="container"
    >
      <h1>I am the about page</h1>
    </motion.main>
  )
}

export default About

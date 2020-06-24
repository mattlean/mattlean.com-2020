import React from 'react'
import { motion } from 'framer-motion'
import { pageTransition, pageVariants } from '../animations'

const Landing = () => {
  const initAnimState = __isServer__ || window.isInitLoad ? 'in' : 'out'

  return (
    <motion.main
      initial={initAnimState}
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      className="container"
    >
      <h1 className="headline">Hi, I&apos;m Matt Lean!</h1>
      <p className="large-text">
        I’m a developer who works at the intersection of engineering and design.
        I’ve been building web-based products for Silicon Valley since 2015 and
        am currently looking for new opportunities.
      </p>
    </motion.main>
  )
}

export default Landing

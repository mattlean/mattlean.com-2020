import React from 'react'
import { motion } from 'framer-motion'

const Landing = () => (
  <main className="container">
    <h1 className="headline">Hi, I&apos;m Matt Lean!</h1>
    <p className="large-text">
      I’m a developer who works at the intersection of engineering and design.
      I’ve been building web-based products for Silicon Valley since 2015 and am
      currently looking for new opportunities.
    </p>
    <motion.div
      animate={{ scale: 2 }}
      transition={{ duration: 0.5 }}
      className="test"
    />
  </main>
)

export default Landing

import React from 'react'
import { motion } from 'framer-motion'
import BlindFrame from '../../components/Blind/BlindFrame'
import variants from '../variants'

const Blog = () => (
  <motion.main
    animate="initial"
    exit="out"
    initial="initial"
    variants={variants}
    onAnimationComplete={() => window.scroll(0, 0)}
    className="container grid-blog grid"
  >
    <BlindFrame nodeType="header">
      <h1 className="header-lg">Blog</h1>
    </BlindFrame>
    <ul className="content">
      <li>
        <h2 className="header-md">Case Study: MattLean.com (2020)</h2>
        <p>Creating a new personal brand and website in 2020.</p>
        <p className="txt-xs">January 11, 2020 &middot; 5 min read</p>
      </li>
      <li>
        <h2 className="header-md">Case Study: Spectral Overlay Tool</h2>
        <p>Building a biotech data visualization tool.</p>
        <p className="txt-xs">January 11, 2020 &middot; 5 min read</p>
      </li>
      <li>
        <h2 className="header-md">Case Study: Lean Space</h2>
        <p>Learnings from building my personal website in 2015.</p>
        <p className="txt-xs">January 11, 2020 &middot; 5 min read</p>
      </li>
      <li>
        <h2 className="header-md">Hello world!</h2>
        <p>Another few years, another blog...</p>
        <p className="txt-xs">January 11, 2020 &middot; 5 min read</p>
      </li>
    </ul>
  </motion.main>
)

export default Blog

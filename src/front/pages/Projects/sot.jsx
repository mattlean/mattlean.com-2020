import React from 'react'
import { motion } from 'framer-motion'
import BlindFrame from '../../components/Blind/BlindFrame'
import variants from '../variants'

const SOT = () => (
  <motion.div
    animate="initial"
    exit="out"
    initial="initial"
    variants={variants}
    onAnimationComplete={() => window.scroll(0, 0)}
    className="container"
  >
    <main className="grid-project grid">
      <header>
        <BlindFrame nodeType="header">
          <h1 className="header-lg">Spectral Overlay Tool</h1>
        </BlindFrame>
      </header>
    </main>
  </motion.div>
)

export default SOT

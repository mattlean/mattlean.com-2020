import React from 'react'
import { motion } from 'framer-motion'
import BlindFrame from '../../components/Blind/BlindFrame'
import variants from '../variants'

const About = () => (
  <motion.main
    animate="initial"
    exit="out"
    initial="initial"
    variants={variants}
    className="container grid-about grid"
  >
    <section className="cover">
      <BlindFrame>
        <h1 className="header-lg">Hello, world!</h1>
      </BlindFrame>
    </section>
  </motion.main>
)

export default About

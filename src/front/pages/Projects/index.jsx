import React from 'react'
import { motion } from 'framer-motion'
import Badge from '../../components/Badge'
import BlindFrame from '../../components/Blind/BlindFrame'
import variants from '../variants'
import MainFooter from '../../components/MainFooter'

/**
 * Projects
 */
const Projects = () => (
  <motion.main
    animate="initial"
    exit="out"
    initial="initial"
    variants={variants}
    onAnimationComplete={() => window.scroll(0, 0)}
    className="container grid-projects grid"
  >
    <BlindFrame nodeType="header">
      <h1 className="header-lg">Projects</h1>
    </BlindFrame>
    <ul className="content">
      <BlindFrame nodeType="li" className="project">
        <h2 className="header-md">Case Study: MattLean.com (2020)</h2>
        <p className="txt-grey-a">
          Creating a new personal brand and website in 2020.
        </p>
        <ul className="badge-list">
          <Badge nodeType="li">Case Study</Badge>
          <Badge nodeType="li">Backend</Badge>
          <Badge nodeType="li">Design</Badge>
          <Badge nodeType="li">Frontend</Badge>
        </ul>
      </BlindFrame>
      <BlindFrame nodeType="li" className="project">
        <h2 className="header-md">Case Study: Spectral Overlay Tool</h2>
        <p className="txt-grey-a">
          Building a biotech data visualization tool.
        </p>
        <ul className="badge-list">
          <Badge nodeType="li">Case Study</Badge>
          <Badge nodeType="li">Design</Badge>
          <Badge nodeType="li">Frontend</Badge>
          <Badge nodeType="li">Tooling</Badge>
        </ul>
      </BlindFrame>
      <BlindFrame nodeType="li" className="project">
        <h2 className="header-md">Case Study: Lean Space</h2>
        <p className="txt-grey-a">
          Learnings from building my personal website in 2015.
        </p>
        <ul className="badge-list">
          <Badge nodeType="li">Case Study</Badge>
          <Badge nodeType="li">Design</Badge>
          <Badge nodeType="li">Frontend</Badge>
        </ul>
      </BlindFrame>
      <BlindFrame nodeType="li" className="project">
        <h2 className="header-md">Hello world!</h2>
        <p className="txt-grey-a">Another few years, another blog...</p>
        <p className="txt-xs txt-grey-a">August 31, 2015 &middot; 5 min read</p>
        <ul className="badge-list">
          <Badge nodeType="li">Miscellaneous</Badge>
        </ul>
      </BlindFrame>
    </ul>
    <MainFooter />
  </motion.main>
)

export default Projects

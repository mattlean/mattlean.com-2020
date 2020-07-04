import React from 'react'
import { motion } from 'framer-motion'
import Badge from '../../components/Badge'
import BlindFrame from '../../components/Blind/BlindFrame'
import variants from '../variants'
import MainFooter from '../../components/MainFooter'
import { getAllProjectData } from '../../../common/projectData'

const allProjectData = getAllProjectData()
const projects = []
for (const i in allProjectData) {
  const currProjectData = allProjectData[i]
  projects.push(
    <BlindFrame
      key={currProjectData.id}
      delay={0.5}
      nodeType="li"
      className="project"
    >
      <a href="#">
        <h2 className="header-md">{currProjectData.name}</h2>
        <p className="txt-grey-a">{currProjectData.long}</p>
        <ul className="badge-list">
          <Badge nodeType="li">Case Study</Badge>
          <Badge nodeType="li">Backend</Badge>
          <Badge nodeType="li">Design</Badge>
          <Badge nodeType="li">Frontend</Badge>
        </ul>
      </a>
    </BlindFrame>
  )
}

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
    className="container"
  >
    <main className="grid-projects grid">
      <BlindFrame nodeType="header">
        <h1 className="header-lg">Projects</h1>
      </BlindFrame>
      <ul className="content">{projects}</ul>
    </main>
    <MainFooter />
  </motion.main>
)

export default Projects

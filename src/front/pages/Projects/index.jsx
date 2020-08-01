import React from 'react'
import { Badge } from 'eswiss'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import BlindFrame from '../../components/Blind/BlindFrame'
import variants from '../variants'
import MainFooter from '../../components/MainFooter'
import { getAllProjectData } from '../../../common/projectData'

const allProjectData = getAllProjectData()
const projects = []
for (const p of allProjectData) {
  projects.push(
    <BlindFrame key={p.id} delay={0.5} nodeType="li" className="item">
      <Link to={`/projects/${p.id}`}>
        <h2 className="header-md link-primary">{p.name}</h2>
        <p className="txt-grey-1">{p.long}</p>
        <ul>
          {p.tags.map((t) => (
            <Badge key={t.id} nodeType="li" wide={true}>
              {t.name}
            </Badge>
          ))}
        </ul>
      </Link>
    </BlindFrame>
  )
}

/**
 * Projects
 */
const ProjectFeed = () => (
  <motion.div
    animate="initial"
    exit="out"
    initial="initial"
    variants={variants}
    onAnimationComplete={() => window.scroll(0, 0)}
    className="container"
  >
    <main className="grid-feed grid">
      <header>
        <BlindFrame nodeType="header">
          <h1 className="header-lg">Projects</h1>
        </BlindFrame>
      </header>
      <ul className="content">{projects}</ul>
    </main>
    <MainFooter />
  </motion.div>
)

export default ProjectFeed

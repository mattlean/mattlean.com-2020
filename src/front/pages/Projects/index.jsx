import React from 'react'
import { Badge } from 'eswiss'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import BlindFrame from '../../components/Blind/BlindFrame'
import variants from '../variants'
import MainFooter from '../../components/MainFooter'
import { getAllProjectData } from '../../../common/projectData'
import { useHeadDataEffect } from '../../util'

const allProjectData = getAllProjectData()
const projects = []
for (const p of allProjectData) {
  projects.push(
    <BlindFrame nodeType="li" key={p.id} delay={0.5} className="item">
      <Link to={`/projects/${p.id}`}>
        <h2 className="h-4 sm:h-6 a-primary">{p.name}</h2>
        <p className="c-grey-1">{p.long}</p>
        <ul className="badge-list">
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
 * Project Feed Page
 */
const ProjectFeed = () => {
  useHeadDataEffect()

  return (
    <motion.div
      animate="initial"
      exit="out"
      initial="initial"
      variants={variants}
      onAnimationComplete={() => window.scroll(0, 0)}
      className="container"
    >
      <main className="grid-feed grid">
        <BlindFrame nodeType="h1" className="h-2 sm:h-3">
          Projects
        </BlindFrame>
        <ul className="content">{projects}</ul>
      </main>
      <MainFooter />
    </motion.div>
  )
}

export default ProjectFeed

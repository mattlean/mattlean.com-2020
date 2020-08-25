import React, { useEffect, useRef } from 'react'
import { Badge } from 'eswiss'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import BlindFrame from '../../components/Blind/BlindFrame'
import VARIANTS from '../page_variants'
import MainFooter from '../../components/MainFooter'
import { getAllProjectData } from '../../../common/data/project'
import { ROUTE_PREFIX } from '../../../common/data/route/project'
import { useHeadDataEffect } from '../../util'

const allProjectData = getAllProjectData()
const projects = []
for (const p of allProjectData) {
  projects.push(
    <BlindFrame nodeType="li" key={p.id} delay={0.5} className="item">
      <Link to={`${ROUTE_PREFIX}${p.id}`}>
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

  // Focus starting element on page load
  const srStart = useRef(null)
  useEffect(() => {
    if (srStart.current) srStart.current.focus()
  }, [])

  return (
    <motion.div
      animate="initial"
      exit="out"
      initial="initial"
      variants={VARIANTS}
      onAnimationComplete={() => window.scroll(0, 0)}
      className="container"
    >
      <main aria-label="Content" className="grid-feed grid">
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

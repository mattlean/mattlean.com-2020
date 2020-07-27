import React from 'react'
import { motion } from 'framer-motion'
import { useParams } from 'react-router-dom'
import Badge from '../../components/Badge'
import BlindFrame from '../../components/Blind/BlindFrame'
import variants from '../variants'
import { getProjectData } from '../../../common/projectData'

const Projects = ({ projectData }) => {
  const { id } = useParams()
  const { company, name } = projectData || getProjectData(id)

  return (
    <motion.div
      animate="initial"
      exit="out"
      initial="initial"
      variants={variants}
      onAnimationComplete={() => window.scroll(0, 0)}
      className="container"
    >
      <main className="grid-project grid">
        <section className="cover">
          <BlindFrame>
            <h1 className="header-lg">{name}</h1>
            {company && <h2 className="subtitle txt-grey-b">{company}</h2>}
          </BlindFrame>
        </section>
      </main>
    </motion.div>
  )
}

export default Projects

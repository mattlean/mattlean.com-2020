import React from 'react'
import { motion } from 'framer-motion'
import { useParams } from 'react-router-dom'
import BlindFrame from '../../components/Blind/BlindFrame'
import variants from '../variants'
import { getProjectData } from '../../../common/projectData'

const Projects = ({ projectData }) => {
  const { id } = useParams()
  const { name } = projectData || getProjectData(id)

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
        <BlindFrame>
          <h1 className="header-lg">{name}</h1>
        </BlindFrame>
      </main>
    </motion.div>
  )
}

export default Projects

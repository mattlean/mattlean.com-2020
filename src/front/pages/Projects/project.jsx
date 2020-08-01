import React from 'react'
import { Badge, Btn } from 'eswiss'
import { BookIcon, PlayIcon } from '@primer/octicons-react'
import { motion } from 'framer-motion'
import { useParams } from 'react-router-dom'
import BlindFrame from '../../components/Blind/BlindFrame'
import variants from '../variants'
import { getProjectData } from '../../../common/projectData'

const Project = ({ projectData }) => {
  const { id } = useParams()
  const { company, name, tags } = projectData || getProjectData(id)

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
        <section className="project-content grid">
          <section className="cover">
            <BlindFrame>
              <h1 className="headline">{name}</h1>
              {company && <h2 className="subtitle txt-grey-2">{company}</h2>}
              <ul className="badge-list">
                {tags.map((t) => {
                  return (
                    <Badge nodeType="li" wide={true} key={t.id}>
                      {t.name}
                    </Badge>
                  )
                })}
              </ul>
            </BlindFrame>
          </section>
          <section className="project-overview">
            <BlindFrame>
              <h2 className="header-lg">Project Overview</h2>
            </BlindFrame>
          </section>
          <section className="project-desc">
            <BlindFrame>
              <p className="txt-grey-1">
                <a
                  href="https://www.biosearchtech.com"
                  rel="noreferrer"
                  target="_blank"
                  className="link-grey-1"
                >
                  LGC Biosearch Technologies
                </a>{' '}
                is a biotechnology company that provides products and services
                for genomic analysis in healthcare and agricultural genomics.
              </p>
              <p className="txt-grey-1">
                I worked with them to build the spectral overlay tool, a web
                application that visualizes the absorption & emission spectra
                for common fluorescent dyes and quenchers, allowing users to
                overlay them as multiplexed sets according to recommended
                combinations for each qPCR device.
              </p>
            </BlindFrame>
          </section>
          <BlindFrame nodeType="div" className="btn-view-live">
            <Btn>
              <PlayIcon className="btn-icon" /> View Live
            </Btn>
          </BlindFrame>
          <BlindFrame nodeType="div" className="btn-case-study">
            <Btn className="div" outline={true}>
              <BookIcon className="btn-icon" /> Case Study
            </Btn>
          </BlindFrame>
        </section>
      </main>
    </motion.div>
  )
}

export default Project

import React from 'react'
import { Badge, Btn } from 'eswiss'
import { BookIcon, PlayIcon } from '@primer/octicons-react'
import { motion } from 'framer-motion'
import { useParams } from 'react-router-dom'
import BlindFrame from '../../components/Blind/BlindFrame'
import CTA from '../../components/CTA'
import MainFooter from '../../components/MainFooter'
import variants from '../variants'
import { getProjectData } from '../../../common/projectData'
import SSCharts from '../../assets/ss/charts.jpg'
import SSFullscreen from '../../assets/ss/fullscreen.jpg'
import SSInstrumentSelection from '../../assets/ss/instrument-selection.jpg'

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
        <BlindFrame nodeType="section" className="cover">
          <h1 className="h-1 md:h-2 sm:h-3">{name}</h1>
          {company && (
            <h2 className="h-4 sm:h-6 c-grey-2 dispw-roman">{company}</h2>
          )}
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
        <BlindFrame nodeType="h2" className="project-overview h-2 md:h-4">
          Project Overview
        </BlindFrame>
        <BlindFrame className="subgrid-project-desc grid">
          <section>
            <p className="c-grey-1">
              <a
                href="https://www.biosearchtech.com"
                rel="noreferrer"
                target="_blank"
                className="a-grey-1"
              >
                LGC Biosearch Technologies
              </a>{' '}
              is a biotechnology company that provides products and services for
              genomic analysis in healthcare and agricultural genomics.
            </p>
            <p className="c-grey-1">
              I worked with them to build the spectral overlay tool, a web
              application that visualizes the absorption & emission spectra for
              common fluorescent dyes and quenchers, allowing users to overlay
              them as multiplexed sets according to recommended combinations for
              each qPCR device.
            </p>
          </section>
          <Btn className="btn-view-live">
            <PlayIcon className="btn-icon" /> View Live
          </Btn>
          <Btn outline={true} className="btn-case-study">
            <BookIcon className="btn-icon" /> Case Study
          </Btn>
        </BlindFrame>
        <BlindFrame nodeType="figure" className="ss ss-lg">
          <img src={`/${SSCharts}`} alt="" />
          <figcaption className="c-grey-2">
            Main screen for spectral overlay tool
          </figcaption>
        </BlindFrame>
        <BlindFrame nodeType="section" className="subgrid-mid-desc grid">
          <h3 className="h-5">Iterative Product Development&nbsp;Lifecycle</h3>
          <p className="txt-7 sm:txt-6 c-grey-1">
            In 2014 I was brought on to port the app from Flash to native
            browser technologies alongside new features. In 2015, Biosearch
            Technologies was acquired by LGC, and the app’s styling was updated
            to match the company’s new branding guidelines. In 2020, the app’s
            UI was completely redesigned alongside new features and performance
            optimizations.
          </p>
          <CTA to="/" type="sm" className="a-primary svg-primary">
            Learn more about the project
          </CTA>
        </BlindFrame>
        <BlindFrame nodeType="figure" className="ss ss-sm">
          <img src={`/${SSInstrumentSelection}`} alt="" />
          <figcaption className="c-grey-2">
            Instrument selection that supports filtering of instruments and
            sorting of dyes
          </figcaption>
        </BlindFrame>
        <BlindFrame nodeType="figure" className="ss ss-sm">
          <img src={`/${SSFullscreen}`} alt="" />
          <figcaption className="c-grey-2">
            Fullscreen mode for a larger view of the charts
          </figcaption>
        </BlindFrame>
        <BlindFrame nodeType="h3" className="project-details-header">
          Project Details
        </BlindFrame>
        <BlindFrame
          nodeType="section"
          className="subgrid-project-details grid c-grey-1"
        >
          <section>
            <section>
              <h4>Last Updated</h4>
              <p>2020</p>
            </section>
            <section>
              <h4>Collaborators</h4>
              <ul>
                <li>Column Five</li>
                <li>TheSpider</li>
              </ul>
            </section>
            <section>
              <h4>Languages</h4>
              <ul>
                <li>JavaScript</li>
                <li>Python</li>
                <li>HTML</li>
                <li>Sass</li>
                <li>CSS</li>
              </ul>
            </section>
            <section>
              <h4>DevDependencies</h4>
              <ul>
                <li>webpack</li>
                <li>Grunt</li>
                <li>Node.js</li>
              </ul>
            </section>
          </section>
          <section>
            <section>
              <h4>Released</h4>
              <ul>
                <li>October 23, 2014</li>
              </ul>
            </section>
            <section>
              <h4>Responsibilities</h4>
              <ul>
                <li>Programming</li>
                <li>UI & UX Design</li>
              </ul>
            </section>
            <section>
              <h4>Dependencies</h4>
              <ul>
                <li>Google Charts</li>
                <li>Bootstrap</li>
                <li>jQuery</li>
                <li>Lodash</li>
                <li>Popper.js</li>
              </ul>
            </section>
          </section>
        </BlindFrame>
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
      </main>
      <MainFooter />
    </motion.div>
  )
}

export default Project

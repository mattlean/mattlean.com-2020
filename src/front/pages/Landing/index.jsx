import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import BlindFrame from '../../components/Blind/BlindFrame'
import CTA from '../../components/CTA'
import MainFooter from '../../components/MainFooter'
import VARIANTS from '../page_variants'
import { getPostData } from '../../../common/data/post'
import { getProjectData } from '../../../common/data/project'
import { useHeadDataEffect } from '../../util'

const eswissData = getProjectData('eswiss')
const gridnikData = getProjectData('gridnik')
const csSOTData = getPostData('cs-sot')
const csLeanSpace = getPostData('cs-lean-space')

/**
 * Landing Page
 */
const Landing = () => {
  useHeadDataEffect()

  // Focus starting element on page load
  const srStart = useRef(null)
  useEffect(() => {
    if (srStart.current) srStart.current.focus()
  })

  return (
    <motion.div
      animate="initial"
      exit="out"
      initial="initial"
      variants={VARIANTS}
      onAnimationComplete={() => window.scroll(0, 0)}
      className="container"
    >
      <main aria-label="Content" className="grid-landing grid">
        <section className="subgrid-cover grid">
          <BlindFrame
            ref={srStart}
            nodeType="h1"
            delay={0.2}
            tabIndex="-1"
            threshold={0.5}
            className="h-1 md:h-2 sm:h-3 lh-1"
          >
            Hi, I’m <br className="title-br" aria-hidden="true" />
            Matt&nbsp;Lean!
          </BlindFrame>
          <BlindFrame
            nodeType="p"
            delay={0.4}
            threshold={0.5}
            className="txt-8 sm:txt-6 c-grey-1"
          >
            I’m a developer who works at the intersection of engineering and
            design. I’ve been building web-based products for Silicon Valley
            since 2015 and am currently looking for new&nbsp;opportunities.
          </BlindFrame>
          <CTA
            blind={{ delay: 0.8, threshold: 0.5 }}
            to="/about"
            type="lg"
            className="svg-primary a-primary"
          >
            Learn more about me
          </CTA>
        </section>
        <BlindFrame
          nodeType="h2"
          className="featured-header featured-header-projects h-4 sm:h-6 dispw-bold tracked"
        >
          Featured Projects
        </BlindFrame>
        <section className="subgrid-featured featured-projects grid">
          <Link
            to="/projects/gridnik"
            className="subgrid-featured-item grid tdl-none"
          >
            <figure className="subgrid-featured-item-content grid">
              <BlindFrame nodeType="section" threshold={0.5}>
                <img
                  src={gridnikData.featured.img}
                  alt={gridnikData.featured.alt}
                />
              </BlindFrame>
              <BlindFrame nodeType="figcaption">
                <h3 className="h-4 sm:h-6 c-primary">{gridnikData.name}</h3>
                <p className="c-grey-1">{gridnikData.short}</p>
              </BlindFrame>
            </figure>
          </Link>
          <Link
            to="/projects/eswiss"
            className="subgrid-featured-item grid tdl-none"
          >
            <figure className="subgrid-featured-item-content grid">
              <BlindFrame nodeType="section" threshold={0.5}>
                <img
                  src={eswissData.featured.img}
                  alt={eswissData.featured.alt}
                />
              </BlindFrame>
              <BlindFrame nodeType="figcaption">
                <h3 className="h-4 sm:h-6 c-primary">{eswissData.name}</h3>
                <p className="c-grey-1">{eswissData.short}</p>
              </BlindFrame>
            </figure>
          </Link>
        </section>
        <BlindFrame nodeType="section" className="view-more view-more-projects">
          <CTA to="/projects" type="sm" className="svg-grey-3 a-grey-3">
            View all projects
          </CTA>
        </BlindFrame>
        <BlindFrame
          nodeType="h2"
          className="featured-header featured-header-case-studies h-4 sm:h-6 dispw-bold tracked"
        >
          Featured Case&nbsp;Studies
        </BlindFrame>
        <section className="subgrid-featured featured-case-studies grid">
          <Link
            to="/projects/sot"
            className="subgrid-featured-item grid tdl-none"
          >
            <figure className="subgrid-featured-item-content grid">
              <BlindFrame nodeType="section" threshold={0.5}>
                <img
                  src={csSOTData.featured.img}
                  alt={csSOTData.featured.alt}
                />
              </BlindFrame>
              <BlindFrame nodeType="figcaption">
                <h3 className="h-4 sm:h-6 c-primary">{csSOTData.title}</h3>
                <p className="c-grey-1">{csSOTData.subtitle}</p>
              </BlindFrame>
            </figure>
          </Link>
          <Link
            to="/projects/lean-space"
            className="subgrid-featured-item grid tdl-none"
          >
            <figure className="subgrid-featured-item-content grid">
              <BlindFrame nodeType="section" threshold={0.5}>
                <img
                  src={csLeanSpace.featured.img}
                  alt={csLeanSpace.featured.alt}
                />
              </BlindFrame>
              <BlindFrame nodeType="figcaption">
                <h3 className="h-4 sm:h-6 c-primary">{csLeanSpace.title}</h3>
                <p className="c-grey-1">{csLeanSpace.subtitle}</p>
              </BlindFrame>
            </figure>
          </Link>
        </section>
        <BlindFrame
          nodeType="section"
          className="view-more view-more-case-studies"
        >
          <CTA to="/blog" type="sm" className="a-grey-3 svg-grey-3">
            View all case studies
          </CTA>
        </BlindFrame>
      </main>
      <MainFooter />
    </motion.div>
  )
}

export default Landing

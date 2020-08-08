import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import BlindFrame from '../../components/Blind/BlindFrame'
import CTA from '../../components/CTA'
import MainFooter from '../../components/MainFooter'
import variants from '../variants'
import { getPostData } from '../../../common/postData'
import { getProjectData } from '../../../common/projectData'

const eswissData = getProjectData('eswiss')
const gridnikData = getProjectData('gridnik')
const csSOTData = getPostData('cs-sot')
const csLeanSpace = getPostData('cs-lean-space')

/**
 * Landing Page
 */
const Landing = () => (
  <motion.div
    animate="initial"
    exit="out"
    initial="initial"
    variants={variants}
    onAnimationComplete={() => window.scroll(0, 0)}
    className="container"
  >
    <main className="grid-landing grid">
      <section className="subgrid-cover grid">
        <BlindFrame
          nodeType="h1"
          delay={0.2}
          threshold={0.5}
          className="h-1 md:h-2 sm:h-3"
        >
          Hi, I’m Matt&nbsp;Lean!
        </BlindFrame>
        <BlindFrame
          nodeType="p"
          delay={0.4}
          threshold={0.5}
          className="txt-7 sm:txt-6 c-grey-1"
        >
          I’m a developer who works at the intersection of engineering and
          design. I’ve been building web-based products for Silicon Valley since
          2015 and am currently looking for new opportunities.
        </BlindFrame>
        <BlindFrame delay={0.8} threshold={0.5}>
          <CTA to="/about" type="lg" className="svg-primary link-primary">
            Learn more about me
          </CTA>
        </BlindFrame>
      </section>
      <BlindFrame
        nodeType="h2"
        className="featured-header featured-header-projects h-4 sm:h-6 dispw-bold tracked"
      >
        Featured Projects
      </BlindFrame>
      <section className="subgrid-featured featured-projects grid">
        <Link to="/projects/gridnik" className="subgrid-featured-item grid">
          <figure className="subgrid-featured-item-content grid">
            <BlindFrame threshold={0.5}>
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
        <Link to="/projects/eswiss" className="subgrid-featured-item grid">
          <figure className="subgrid-featured-item-content grid">
            <BlindFrame threshold={0.5}>
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
      <BlindFrame className="view-more view-more-projects">
        <CTA to="/projects" type="sm" className="svg-grey-3 link-grey-3">
          View all projects
        </CTA>
      </BlindFrame>
      {/* <BlindFrame className="featured-header featured-header-case-studies">
        <h2 className="h-4 sm:h-6 dispw-bold tracked">
          Featured Case&nbsp;Studies
        </h2>
      </BlindFrame>
      <section className="subgrid-featured featured-case-studies grid">
        <figure className="subgrid-featured-a">
          <BlindFrame threshold={0.5}>
            <img src={csSOTData.featured.img} alt={csSOTData.featured.alt} />
          </BlindFrame>
          <figcaption>
            <BlindFrame>
              <h3 className="h-4 sm:h-6">{csSOTData.title}</h3>
              <p className="c-grey-1">{csSOTData.subtitle}</p>
            </BlindFrame>
          </figcaption>
        </figure>
        <figure className="subgrid-featured-b">
          <BlindFrame threshold={0.5}>
            <img
              src={csLeanSpace.featured.img}
              alt={csLeanSpace.featured.alt}
            />
          </BlindFrame>
          <figcaption>
            <BlindFrame>
              <h3 className="h-4 sm:h-6">{csLeanSpace.title}</h3>
              <p className="c-grey-1">{csLeanSpace.subtitle}</p>
            </BlindFrame>
          </figcaption>
        </figure>
      </section>
      <BlindFrame className="view-more-case-studies">
        <CTA to="/blog" type="sm" className="link-grey-3 svg-grey-3">
          View all case studies
        </CTA>
      </BlindFrame> */}
    </main>
    <MainFooter />
  </motion.div>
)

export default Landing

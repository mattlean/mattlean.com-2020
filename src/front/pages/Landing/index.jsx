import React from 'react'
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
      <section className="cover">
        <BlindFrame delay={0.2} threshold={0.5}>
          <h1 className="headline">Hi, I&apos;m Matt Lean!</h1>
        </BlindFrame>
        <BlindFrame delay={0.4} threshold={0.5}>
          <p className="txt-lg txt-grey-a">
            I’m a developer who works at the intersection of engineering and
            design. I’ve been building web-based products for Silicon Valley
            since 2015 and am currently looking for new opportunities.
          </p>
        </BlindFrame>
        <BlindFrame delay={0.8} threshold={0.5}>
          <CTA to="/about" type="lg" className="svg-primary link-primary">
            Learn more about me
          </CTA>
        </BlindFrame>
      </section>
      <BlindFrame className="featured-projects-header">
        <h2 className="tracked-header">Featured Projects</h2>
      </BlindFrame>
      <section className="subgrid-featured featured-projects grid">
        <figure className="subgrid-featured-a">
          <BlindFrame threshold={0.5}>
            <img
              src={gridnikData.featured.img}
              alt={gridnikData.featured.alt}
            />
          </BlindFrame>
          <figcaption>
            <BlindFrame>
              <h3 className="header-md">{gridnikData.name}</h3>
            </BlindFrame>
            <BlindFrame>
              <p className="txt-grey-a">{gridnikData.short}</p>
            </BlindFrame>
          </figcaption>
        </figure>
        <figure className="subgrid-featured-b">
          <BlindFrame threshold={0.5}>
            <img src={eswissData.featured.img} alt={eswissData.featured.alt} />
          </BlindFrame>
          <figcaption>
            <BlindFrame>
              <h3 className="header-md">{eswissData.name}</h3>
            </BlindFrame>
            <BlindFrame>
              <p className="txt-grey-a">{eswissData.short}</p>
            </BlindFrame>
          </figcaption>
        </figure>
      </section>
      <BlindFrame className="view-more-projects">
        <CTA to="/projects" type="sm" className=" svg-grey-c link-grey-c">
          View all projects
        </CTA>
      </BlindFrame>
      <BlindFrame className="featured-case-studies-header">
        <h2 className="tracked-header">Featured Case Studies</h2>
      </BlindFrame>
      <section className="subgrid-featured featured-case-studies grid">
        <figure className="subgrid-featured-a">
          <BlindFrame threshold={0.5}>
            <img src={csSOTData.featured.img} alt={csSOTData.featured.alt} />
          </BlindFrame>
          <figcaption>
            <BlindFrame>
              <h3 className="header-md">{csSOTData.title}</h3>
            </BlindFrame>
            <BlindFrame>
              <p className="txt-grey-a">{csSOTData.subtitle}</p>
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
              <h3 className="header-md">{csLeanSpace.title}</h3>
            </BlindFrame>
            <BlindFrame>
              <p className="txt-grey-a">{csLeanSpace.subtitle}</p>
            </BlindFrame>
          </figcaption>
        </figure>
      </section>
      <BlindFrame className="view-more-case-studies">
        <CTA to="/blog" type="sm" className="link-grey-c svg-grey-c">
          View all case studies
        </CTA>
      </BlindFrame>
      <BlindFrame className="featured-posts-header">
        <h2 className="tracked-header">Featured Posts</h2>
      </BlindFrame>
      <BlindFrame
        nodeType="section"
        threshold={0.25}
        className="featured-posts"
      >
        <ol>
          <li>
            <h4 className="header-md">
              Cat Proofing Your Computer Work Station
            </h4>
            <p className="time txt-grey-a">January 11, 2020 • 5 min read</p>
            <p className="txt-grey-a">
              How to cat proof your computer work station.
            </p>
          </li>
          <li>
            <h4 className="header-md">Exploring China: Sichuan</h4>
            <p className="time txt-grey-a">January 11, 2020 • 5 min read</p>
            <p className="txt-grey-a">
              My visual journey through the Sichuan province.
            </p>
          </li>
          <li>
            <h4 className="header-md">
              Neopets: Strange Origins of a New Generation of Designers &
              Developers
            </h4>
            <p className="time txt-grey-a">January 11, 2020 • 5 min read</p>
            <p className="txt-grey-a">
              How a kids game spawned a new generation of designers and
              developers.
            </p>
          </li>
          <li>
            <h4 className="header-md">Falling in Love with Zelda Again</h4>
            <p className="time txt-grey-a">January 11, 2020 • 5 min read</p>
            <p className="txt-grey-a">
              How Breath of the Wild revitalized my love for Zelda games again.
            </p>
          </li>
          <li>
            <h4 className="header-md">Amerikajin Ramen</h4>
            <p className="time txt-grey-a">January 11, 2020 • 5 min read</p>
            <p className="txt-grey-a">
              How to make filthily American ramen using only stuff from Costco.
            </p>
          </li>
        </ol>
        <CTA
          to="/about"
          type="sm"
          className="view-latest-blog-posts link-grey-c svg-grey-c"
        >
          View latest blog posts
        </CTA>
      </BlindFrame>
    </main>
    <MainFooter />
  </motion.div>
)

export default Landing

import CTA from '../../components/CTA'
import React from 'react'
import { motion } from 'framer-motion'
import { pageTransition, pageVariants } from '../../visuals/animations'

const Landing = () => {
  const initAnimState = __isServer__ || window.isInitLoad ? 'in' : 'out'

  return (
    <motion.main
      initial={initAnimState}
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      className="container grid-landing"
    >
      <section className="cover">
        <h1 className="headline">Hi, I&apos;m Matt Lean!</h1>
        <p className="txt-lg">
          I’m a developer who works at the intersection of engineering and
          design. I’ve been building web-based products for Silicon Valley since
          2015 and am currently looking for new opportunities.
        </p>
        <CTA to="/about" type="lg">
          Learn more about me
        </CTA>
      </section>
      <h2 className="tracked-header featured-projects-header">
        Featured Projects
      </h2>
      <section className="featured featured-projects">
        <figure className="featured-a">
          <div className="img-placeholder"></div>
          <figcaption>
            <h3>Gridnik</h3>
            <p>Extend Adobe XD&apos;s grid generation capabilities.</p>
          </figcaption>
        </figure>
        <figure className="featured-b">
          <div className="img-placeholder"></div>
          <figcaption>
            <h3>eswiss</h3>
            <p>
              A design system built on Swiss/International style design
              principles.
            </p>
          </figcaption>
        </figure>
      </section>
      <CTA to="/about" type="sm" className="view-more-projects">
        View all projects
      </CTA>
      <h2 className="tracked-header featured-case-studies-header">
        Featured Case Studies
      </h2>
      <section className="featured featured-case-studies">
        <figure className="featured-a">
          <div className="img-placeholder"></div>
          <figcaption>
            <h3>Spectral Overlay Tool</h3>
            <p>Building a biotech data visualization tool.</p>
          </figcaption>
        </figure>
        <figure className="featured-b">
          <div className="img-placeholder"></div>
          <figcaption>
            <h3>Lean Space</h3>
            <p>Learnings from building my personal website in 2015.</p>
          </figcaption>
        </figure>
      </section>
      <CTA to="/about" type="sm" className="view-more-case-studies">
        View all case studies
      </CTA>
    </motion.main>
  )
}

export default Landing

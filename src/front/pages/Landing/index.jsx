import React from 'react'
import { motion } from 'framer-motion'
import CTA from '../../components/CTA'
import MainFooter from '../../components/MainFooter'
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
            <h3 className="header-md">Gridnik</h3>
            <p>Extend Adobe XD&apos;s grid generation capabilities.</p>
          </figcaption>
        </figure>
        <figure className="featured-b">
          <div className="img-placeholder"></div>
          <figcaption>
            <h3 className="header-md">eswiss</h3>
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
            <h3 className="header-md">Spectral Overlay Tool</h3>
            <p>Building a biotech data visualization tool.</p>
          </figcaption>
        </figure>
        <figure className="featured-b">
          <div className="img-placeholder"></div>
          <figcaption>
            <h3 className="header-md">Lean Space</h3>
            <p>Learnings from building my personal website in 2015.</p>
          </figcaption>
        </figure>
      </section>
      <CTA to="/about" type="sm" className="view-more-case-studies">
        View all case studies
      </CTA>
      <h2 className="tracked-header featured-posts-header">Featured Posts</h2>
      <section className="featured-posts">
        <ol>
          <li>
            <h4 className="header-md">
              Cat Proofing Your Computer Work Station
            </h4>
            <p className="time">January 11, 2020 • 5 min read</p>
            <p>How to cat proof your computer work station.</p>
          </li>
          <li>
            <h4 className="header-md">Exploring China: Sichuan</h4>
            <p className="time">January 11, 2020 • 5 min read</p>
            <p>My visual journey through the Sichuan province.</p>
          </li>
          <li>
            <h4 className="header-md">
              Neopets: Strange Origins of a New Generation of Designers &
              Developers
            </h4>
            <p className="time">January 11, 2020 • 5 min read</p>
            <p>
              How a kids game spawned a new generation of designers and
              developers.
            </p>
          </li>
          <li>
            <h4 className="header-md">Falling in Love with Zelda Again</h4>
            <p className="time">January 11, 2020 • 5 min read</p>
            <p>
              How Breath of the Wild revitalized my love for Zelda games again.
            </p>
          </li>
          <li>
            <h4 className="header-md">Amerikajin Ramen</h4>
            <p className="time">January 11, 2020 • 5 min read</p>
            <p>
              How to make filthily American ramen using only stuff from Costco.
            </p>
          </li>
        </ol>
        <CTA to="/about" type="sm" className="view-latest-blog-posts">
          View latest blog posts
        </CTA>
      </section>
      <MainFooter />
    </motion.main>
  )
}

export default Landing

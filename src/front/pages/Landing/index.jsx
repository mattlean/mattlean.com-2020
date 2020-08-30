import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import BlindFrame from '../../components/Blind/BlindFrame'
import CTA from '../../components/CTA'
import MainFooter from '../../components/MainFooter'
import VARIANTS from '../page_variants'
import { getPostData } from '../../../common/data/post'
import { getProjectData } from '../../../common/data/project'
import {
  setupBlindObservers,
  useInitAnim,
} from '../../components/Blind/initAnimUtil'
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

  const {
    blindVisibleStates,
    blindStates,
    initAnimComplete,
    observerData,
    runInitAnim,
  } = useInitAnim(15)

  // Setup effect which is only run once
  useEffect(() => {
    // Focus starting element on page load
    if (observerData[0].ref.current) observerData[0].ref.current.focus()

    const observers = setupBlindObservers(
      [
        0.5,
        0.1,
        0.1,
        0.1,
        0.1,
        0.1,
        0.1,
        0.1,
        0.1,
        0.1,
        0.1,
        0.1,
        0.1,
        0.1,
        0.1,
      ],
      observerData,
      blindVisibleStates
    )

    window.setTimeout(runInitAnim, 100)

    // Disconnect all observers on unmount
    return () => observers.forEach((observer) => observer.disconnect())
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

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
        <BlindFrame
          ref={observerData[0].ref}
          nodeType="h1"
          delay={blindStates[0].delay}
          observer={observerData[0].observer}
          play={
            initAnimComplete
              ? blindVisibleStates[0].isVisible
              : blindStates[0].play
          }
          tabIndex="-1"
          className="h-1 md:h-2 sm:h-3 lh-1"
        >
          Hi, I’m <br className="title-br" aria-hidden="true" />
          Matt&nbsp;Lean!
        </BlindFrame>
        <BlindFrame
          ref={observerData[1].ref}
          nodeType="p"
          delay={blindStates[1].delay}
          observer={observerData[1].observer}
          play={
            initAnimComplete
              ? blindVisibleStates[1].isVisible
              : blindStates[1].play
          }
          className="txt-8 sm:txt-6 c-grey-1"
        >
          I’m a developer who works at the intersection of engineering and
          design. I’ve been building web-based products for Silicon Valley since
          2015 and am currently looking for new&nbsp;opportunities.
        </BlindFrame>
        <CTA
          blind={{
            ref: observerData[2].ref,
            delay: blindStates[2].delay,
            observer: observerData[2].observer,
            play: initAnimComplete
              ? blindVisibleStates[2].isVisible
              : blindStates[2].play,
          }}
          to="/about"
          type="lg"
          className="svg-primary a-primary"
        >
          Learn more about me
        </CTA>
        <BlindFrame
          ref={observerData[3].ref}
          nodeType="h2"
          delay={blindStates[3].delay}
          observer={observerData[3].observer}
          play={
            initAnimComplete
              ? blindVisibleStates[3].isVisible
              : blindStates[3].play
          }
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
              <BlindFrame
                ref={observerData[4].ref}
                nodeType="section"
                delay={blindStates[4].delay}
                observer={observerData[4].observer}
                play={
                  initAnimComplete
                    ? blindVisibleStates[4].isVisible
                    : blindStates[4].play
                }
              >
                <img
                  src={gridnikData.featured.img}
                  alt={gridnikData.featured.alt}
                />
              </BlindFrame>
              <BlindFrame
                ref={observerData[5].ref}
                nodeType="figcaption"
                delay={blindStates[5].delay}
                observer={observerData[5].observer}
                play={
                  initAnimComplete
                    ? blindVisibleStates[5].isVisible
                    : blindStates[5].play
                }
              >
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
              <BlindFrame
                ref={observerData[6].ref}
                nodeType="section"
                delay={blindStates[6].delay}
                observer={observerData[6].observer}
                play={
                  initAnimComplete
                    ? blindVisibleStates[6].isVisible
                    : blindStates[6].play
                }
              >
                <img
                  src={eswissData.featured.img}
                  alt={eswissData.featured.alt}
                />
              </BlindFrame>
              <BlindFrame
                ref={observerData[7].ref}
                nodeType="figcaption"
                delay={blindStates[7].delay}
                observer={observerData[7].observer}
                play={
                  initAnimComplete
                    ? blindVisibleStates[7].isVisible
                    : blindStates[7].play
                }
              >
                <h3 className="h-4 sm:h-6 c-primary">{eswissData.name}</h3>
                <p className="c-grey-1">{eswissData.short}</p>
              </BlindFrame>
            </figure>
          </Link>
        </section>
        <CTA
          blind={{
            ref: observerData[8].ref,
            delay: blindStates[8].delay,
            observer: observerData[8].observer,
            play: initAnimComplete
              ? blindVisibleStates[8].isVisible
              : blindStates[8].play,
          }}
          to="/projects"
          type="sm"
          className="view-more view-more-projects svg-grey-3 a-grey-3"
        >
          View all projects
        </CTA>
        <BlindFrame
          ref={observerData[9].ref}
          nodeType="h2"
          delay={blindStates[9].delay}
          observer={observerData[9].observer}
          play={
            initAnimComplete
              ? blindVisibleStates[9].isVisible
              : blindStates[9].play
          }
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
              <BlindFrame
                ref={observerData[10].ref}
                nodeType="section"
                delay={blindStates[10].delay}
                observer={observerData[10].observer}
                play={
                  initAnimComplete
                    ? blindVisibleStates[10].isVisible
                    : blindStates[10].play
                }
              >
                <img
                  src={csSOTData.featured.img}
                  alt={csSOTData.featured.alt}
                />
              </BlindFrame>
              <BlindFrame
                ref={observerData[11].ref}
                nodeType="figcaption"
                delay={blindStates[11].delay}
                observer={observerData[11].observer}
                play={
                  initAnimComplete
                    ? blindVisibleStates[11].isVisible
                    : blindStates[11].play
                }
              >
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
              <BlindFrame
                ref={observerData[12].ref}
                nodeType="section"
                delay={blindStates[12].delay}
                observer={observerData[12].observer}
                play={
                  initAnimComplete
                    ? blindVisibleStates[12].isVisible
                    : blindStates[12].play
                }
              >
                <img
                  src={csLeanSpace.featured.img}
                  alt={csLeanSpace.featured.alt}
                />
              </BlindFrame>
              <BlindFrame
                ref={observerData[13].ref}
                nodeType="figcaption"
                delay={blindStates[13].delay}
                observer={observerData[13].observer}
                play={
                  initAnimComplete
                    ? blindVisibleStates[13].isVisible
                    : blindStates[13].play
                }
              >
                <h3 className="h-4 sm:h-6 c-primary">{csLeanSpace.title}</h3>
                <p className="c-grey-1">{csLeanSpace.subtitle}</p>
              </BlindFrame>
            </figure>
          </Link>
        </section>
        <CTA
          blind={{
            ref: observerData[14].ref,
            delay: blindStates[14].delay,
            observer: observerData[14].observer,
            play: initAnimComplete
              ? blindVisibleStates[14].isVisible
              : blindStates[14].play,
          }}
          to="/blog"
          type="sm"
          className="view-more view-more-case-studies a-grey-3 svg-grey-3"
        >
          View all case studies
        </CTA>
      </main>
      <MainFooter />
    </motion.div>
  )
}

export default Landing

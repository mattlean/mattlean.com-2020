import React, { useEffect } from 'react'
import { Badge } from 'eswiss'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import BlindFrame from '../../components/Blind/BlindFrame'
import VARIANTS from '../page_variants'
import MainFooter from '../../components/MainFooter'
import { getAllProjectData } from '../../../common/data/project'
import { ROUTE_PREFIX } from '../../../common/data/route/project'
import {
  setupBlindObservers,
  useInitAnim,
} from '../../components/Blind/initAnimUtil'
import { usePageLoadEffect } from '../../util'

const allProjectData = getAllProjectData()

/**
 * Project Feed Page
 */
const ProjectFeed = () => {
  usePageLoadEffect()

  const {
    blindVisibleStates,
    blindStates,
    initAnimComplete,
    observerData,
    runInitAnim,
  } = useInitAnim(16)

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
        0.1,
      ],
      observerData,
      blindVisibleStates
    )

    window.setTimeout(runInitAnim, 100)

    // Disconnect all observers on unmount
    return () => observers.forEach((observer) => observer.disconnect())
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  const projects = []
  for (let i = 0; i < allProjectData.length; i += 1) {
    const p = allProjectData[i]
    projects.push(
      <BlindFrame
        ref={observerData[i + 1].ref}
        key={p.id}
        nodeType="li"
        delay={blindStates[i + 1].delay}
        observer={observerData[i + 1].observer}
        play={
          initAnimComplete
            ? blindVisibleStates[i + 1].isVisible
            : blindStates[i + 1].play
        }
        className="item"
      >
        <Link to={`${ROUTE_PREFIX}${p.id}`}>
          <h2 className="h-4 sm:h-6 a-primary">{p.name}</h2>
          <p className="c-grey-1">{p.long}</p>
          <ul aria-label="Categories" className="badge-list">
            {p.tags.map((t) => (
              <Badge key={t.id} nodeType="li" wide={true}>
                {t.name}
              </Badge>
            ))}
          </ul>
        </Link>
      </BlindFrame>
    )
  }

  return (
    <motion.div
      animate="initial"
      exit="out"
      initial="initial"
      variants={VARIANTS}
      onAnimationComplete={() => window.scroll(0, 0)}
      className="container"
    >
      <main aria-label="Content" className="grid-feed grid">
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
          className="h-2 sm:h-3"
        >
          Projects
        </BlindFrame>
        <ul aria-label="Project Feed" role="feed" className="content">
          {projects}
        </ul>
      </main>
      <MainFooter />
    </motion.div>
  )
}

export default ProjectFeed

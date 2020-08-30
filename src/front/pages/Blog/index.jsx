import React, { useEffect } from 'react'
import { Badge } from 'eswiss'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import BlindFrame from '../../components/Blind/BlindFrame'
import NewBlindFrame from '../../components/Blind/NewBlindFrame'
import MainFooter from '../../components/MainFooter'
import VARIANTS from '../page_variants'
import { getAllPostData } from '../../../common/data/post'
import { ROUTE_PREFIX } from '../../../common/data/route/blog'
import {
  setupBlindObservers,
  useInitAnim,
} from '../../components/Blind/initAnimUtil'
import { useHeadDataEffect } from '../../util'

const allPostData = getAllPostData()

/**
 * Blog Feed Page
 */
const Blog = () => {
  useHeadDataEffect()

  const {
    blindVisibleStates,
    blindStates,
    initAnimComplete,
    observerData,
    runInitAnim,
  } = useInitAnim(5)

  // Setup effect which is only run once
  useEffect(() => {
    // Focus starting element on page load
    if (observerData[0].ref.current) observerData[0].ref.current.focus()

    const observers = setupBlindObservers(
      [0.5, 0.1, 0.1, 0.1, 0.1],
      observerData,
      blindVisibleStates
    )

    window.setTimeout(runInitAnim, 100)

    // Disconnect all observers on unmount
    return () => observers.forEach((observer) => observer.disconnect())
  }, [])

  const posts = []
  for (let i = 0; i < allPostData.length; i += 1) {
    const p = allPostData[i]
    posts.push(
      <NewBlindFrame
        ref={observerData[i + 1].ref}
        key={p.id}
        nodeType="article"
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
          <h2 className="h-4 sm:h-6 a-primary">{p.title}</h2>
          <p className="c-grey-1">{p.subtitle}</p>
          <p className="txt-2 c-grey-1">
            {p.published} &middot; {p.readtime} min read
          </p>
          <ul aria-label="Categories" className="badge-list">
            {p.tags.map((t) => (
              <Badge key={t.id} nodeType="li" wide={true}>
                {t.name}
              </Badge>
            ))}
          </ul>
        </Link>
      </NewBlindFrame>
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
        <NewBlindFrame
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
          Blog
        </NewBlindFrame>
        <section aria-label="Blog Feed" role="feed" className="content">
          {posts}
        </section>
      </main>
      <MainFooter />
    </motion.div>
  )
}

export default Blog

import React, { useEffect, useRef } from 'react'
import { Badge } from 'eswiss'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import BlindFrame from '../../components/Blind/BlindFrame'
import MainFooter from '../../components/MainFooter'
import VARIANTS from '../page_variants'
import { getAllPostData } from '../../../common/data/post'
import { ROUTE_PREFIX } from '../../../common/data/route/blog'
import { useHeadDataEffect } from '../../util'

const allPostData = getAllPostData()
const posts = []
for (const p of allPostData) {
  posts.push(
    <BlindFrame key={p.id} nodeType="article" delay={0.5} className="item">
      <Link to={`${ROUTE_PREFIX}${p.id}`}>
        <h2 className="h-4 sm:h-6 a-primary">{p.title}</h2>
        <p className="c-grey-1">{p.subtitle}</p>
        <p className="txt-2 c-grey-1">
          {p.published} &middot; {p.readtime} min read
        </p>
        <ul className="badge-list">
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

/**
 * Blog Page
 */
const Blog = () => {
  useHeadDataEffect()

  // Focus starting element on page load
  const srStart = useRef(null)
  useEffect(() => {
    if (srStart.current) srStart.current.focus()
  }, [])

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
        <BlindFrame ref={srStart} nodeType="h1" className="h-2 sm:h-3">
          Blog
        </BlindFrame>
        <section className="content">{posts}</section>
      </main>
      <MainFooter />
    </motion.div>
  )
}

export default Blog

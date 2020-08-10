import React from 'react'
import { Badge } from 'eswiss'
import { motion } from 'framer-motion'
import BlindFrame from '../components/Blind/BlindFrame'
import MainFooter from '../components/MainFooter'
import variants from './variants'
import { getAllPostData } from '../../common/postData'
import { getTagName } from '../../common/tagData'

const allPostData = getAllPostData()
const posts = []
for (const i in allPostData) {
  const currPostData = allPostData[i]

  const tags = []
  for (const i in currPostData.tags) {
    const currTagID = currPostData.tags[i]

    if (currTagID) {
      tags.push(
        <Badge key={currTagID} nodeType="li" wide={true}>
          {getTagName(currTagID)}
        </Badge>
      )
    }
  }

  posts.push(
    <BlindFrame
      key={currPostData.id}
      delay={0.5}
      nodeType="article"
      className="item"
    >
      <a href="/">
        <h2 className="h-4 sm:h-6 a-primary">{currPostData.title}</h2>
        <p className="c-grey-1">{currPostData.subtitle}</p>
        <p className="txt-2 c-grey-1">January 11, 2020 &middot; 5 min read</p>
        <ul className="badge-list">{tags}</ul>
      </a>
    </BlindFrame>
  )
}

/**
 * Blog Page
 */
const Blog = () => (
  <motion.div
    animate="initial"
    exit="out"
    initial="initial"
    variants={variants}
    onAnimationComplete={() => window.scroll(0, 0)}
    className="container"
  >
    <main className="grid-feed grid">
      <BlindFrame nodeType="h1" className="h-2 sm:h-3">
        Blog
      </BlindFrame>
      <section className="content">{posts}</section>
    </main>
    <MainFooter />
  </motion.div>
)

export default Blog

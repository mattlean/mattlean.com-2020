import React from 'react'
import { motion } from 'framer-motion'
import Badge from '../../components/Badge'
import BlindFrame from '../../components/Blind/BlindFrame'
import MainFooter from '../../components/MainFooter'
import variants from '../variants'
import { getAllPostData } from '../../../common/postData'
import { getTagName } from '../../../common/tagData'

const allPostData = getAllPostData()
const posts = []
for (const i in allPostData) {
  const currPostData = allPostData[i]

  const tags = []
  for (const i in currPostData.tags) {
    const currTagID = currPostData.tags[i]

    if (currTagID) {
      tags.push(
        <Badge key={currTagID} nodeType="li">
          {getTagName(currTagID)}
        </Badge>
      )
    }
  }

  posts.push(
    <BlindFrame
      key={currPostData.id}
      delay={0.5}
      nodeType="li"
      className="post"
    >
      <a href="#">
        <h2 className="header-md">{currPostData.title}</h2>
        <p className="txt-grey-a">{currPostData.subtitle}</p>
        <p className="txt-xs txt-grey-a">
          January 11, 2020 &middot; 5 min read
        </p>
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
    <main className="grid-blog grid">
      <header>
        <BlindFrame>
          <h1 className="header-lg">Blog</h1>
        </BlindFrame>
      </header>
      <ul className="content">{posts}</ul>
    </main>
    <MainFooter />
  </motion.div>
)

export default Blog

import { genTagIDNameArray } from './tag'
import FeaturedCSLeanSpace from '../../front/assets/lean-space-featured-project.jpg'
import FeaturedCSSOT from '../../front/assets/spectral-overlay-tool-featured-project.jpg'

const ORDER = ['cs-ml2020', 'cs-sot', 'cs-lean-space', 'hello-world']
const POSTS = {
  'cs-lean-space': {
    id: 'cs-lean-space',
    title: 'Case Study: Lean Space',
    subtitle: 'Learnings from building my personal website in 2015.',
    published: 'June 30, 2020',
    readtime: 5,
    featured: {
      img: FeaturedCSLeanSpace,
      alt: "Featured image for Lean Space case study: the project's logo",
    },
    tags: ['cs', 'design', 'frontend'],
  },
  'cs-ml2020': {
    id: 'cs-ml2020',
    title: 'Case Study: MattLean.com',
    subtitle: 'How I designed my 2020 personal brand and developed my website.',
    published: 'June 30, 2020',
    readtime: 5,
    tags: ['cs', 'backend', 'design', 'frontend'],
  },
  'cs-sot': {
    id: 'cs-sot',
    title: 'Case Study: Spectral Overlay Tool',
    subtitle: 'Building a biotech data visualization tool.',
    published: 'June 30, 2020',
    readtime: 5,
    featured: {
      img: FeaturedCSSOT,
      alt:
        "Featured image for Spectral Overlay Tool case study: a screenshot of one of the tool's charts",
    },
    tags: ['cs', 'design', 'frontend', 'tooling'],
  },
  'hello-world': {
    id: 'hello-world',
    title: 'Hello world!',
    subtitle: 'Another few years, another blog...',
    published: 'August 31, 2015',
    readtime: 2,
    tags: ['misc'],
  },
}

// Format tag data
for (const key in POSTS) {
  POSTS[key].tags = genTagIDNameArray(POSTS[key].tags)
}

/**
 * Get all post data
 * @return {Array} Array of all post data in order
 */
export const getAllPostData = () => {
  const data = []
  for (const i in ORDER) {
    data.push(getPostData(ORDER[i]))
  }
  return data
}

/**
 * Get post data associated with given ID
 * @param {string} id Post ID
 * @return {Object} Post data
 */
export const getPostData = (id) => {
  return POSTS[id]
}

/**
 * Get post data associated with
 * @param {string} id Propject ID
 * @param {string} prop Post data property name
 * @return {Array|string} Value stored at post data property
 */
export const getPostProp = (id, prop) => {
  if (POSTS[id]) {
    return POSTS[id][prop]
  }
}

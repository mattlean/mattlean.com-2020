import { CANON_ROOT } from './const'
import { POSTS } from '../post'

export const ROUTE_PREFIX = '/blog/'

const CS_PREFIX = 'Case Study: '
const BLOG_SUFFIX = ' — Blog'

const ROUTES = {}

ROUTES[`${ROUTE_PREFIX}cs-lean-space`] = {
  title: `${CS_PREFIX}Lean Space${BLOG_SUFFIX}`,
  desc: POSTS['cs-lean-space'].subtitle,
  path: `${ROUTE_PREFIX}cs-lean-space`,
  canon: `${CANON_ROOT}${ROUTE_PREFIX}cs-lean-space`,
  og_img: 'http://mattlean.com/media/lean-space-social.png',
  og_img_secure: 'https://mattlean.com/media/lean-space-social.png',
  og_img_alt: 'Logo for Lean Space',
  og_img_width: '1200',
  og_img_height: '1200',
  og_type: 'article',
  twitter_card: 'summary',
  twitter_img: 'http://mattlean.com/media/lean-space-social.png',
  twitter_img_alt: 'Logo for Lean Space',
  keywords: [
    'matt lean',
    'matthew lean',
    'matt',
    'lean',
    'lean space',
    'space',
    'case study: lean space',
    'case study',
    'blog',
    'post',
    'blog post',
    'full-stack developer',
    'full-stack',
    'fullstack developer',
    'fullstack',
    'full stack developer',
    'full stack',
    'backend developer',
    'backend',
    'frontend developer',
    'frontend',
    'web developer',
    'developer',
    'web dev',
    'dev',
    'web engineer',
    'software engineer',
    'engineer',
    'development',
    'programmer',
    'programming',
    'user interface designer',
    'ui designer',
    'user experience designer',
    'ux designer',
    'ui/ux designer',
    'ui & ux designer',
    'interface designer',
    'designer',
    'ui',
    'user interface',
    'ux',
    'user experience',
    'web design',
    'design',
    'silicon valley',
    'san francisco bay area',
    'san francisco bay',
    'sf bay area',
    'sf bay',
    'bay area',
    'south bay',
    'northern california',
    'norcal',
    'california',
    'us',
    'usa',
    'united states',
    'united states of america',
    'website',
    'personal',
    'blog',
    'freelance',
    'software',
    'web application',
    'application',
    'web app',
    'webapp',
    'web apps',
    'webapps',
    'websites',
    'web',
    'computer science',
    'graphic design',
    'interactive design',
    'computer',
    'science',
  ],
}

ROUTES[`${ROUTE_PREFIX}cs-ml2020`] = {
  title: `${CS_PREFIX}MattLean.com${BLOG_SUFFIX}`,
  desc: POSTS['cs-ml2020'].subtitle,
  path: `${ROUTE_PREFIX}cs-ml2020`,
  canon: `${CANON_ROOT}${ROUTE_PREFIX}cs-ml2020`,
  og_img: 'http://mattlean.com/media/social.png',
  og_img_secure: 'https://mattlean.com/media/social.png',
  og_img_alt: 'Logo for MattLean.com',
  og_img_width: '1200',
  og_img_height: '1200',
  og_type: 'article',
  twitter_card: 'summary',
  twitter_img: 'http://mattlean.com/media/social.png',
  twitter_img_alt: 'Logo for MattLean.com',
  keywords: [
    'matt lean',
    'matthew lean',
    'matt',
    'lean',
    'mattlean.com',
    'case study: mattlean.com',
    'mattlean.com (2020)',
    'case study: mattlean.com (2020)',
    'case study',
    'blog',
    'post',
    'blog post',
    'full-stack developer',
    'full-stack',
    'fullstack developer',
    'fullstack',
    'full stack developer',
    'full stack',
    'backend developer',
    'backend',
    'frontend developer',
    'frontend',
    'web developer',
    'developer',
    'web dev',
    'dev',
    'web engineer',
    'software engineer',
    'engineer',
    'development',
    'programmer',
    'programming',
    'user interface designer',
    'ui designer',
    'user experience designer',
    'ux designer',
    'ui/ux designer',
    'ui & ux designer',
    'interface designer',
    'designer',
    'ui',
    'user interface',
    'ux',
    'user experience',
    'web design',
    'design',
    'silicon valley',
    'san francisco bay area',
    'san francisco bay',
    'sf bay area',
    'sf bay',
    'bay area',
    'south bay',
    'northern california',
    'norcal',
    'california',
    'us',
    'usa',
    'united states',
    'united states of america',
    'website',
    'personal',
    'blog',
    'freelance',
    'software',
    'web application',
    'application',
    'web app',
    'webapp',
    'web apps',
    'webapps',
    'websites',
    'web',
    'computer science',
    'graphic design',
    'interactive design',
    'computer',
    'science',
  ],
}

ROUTES[`${ROUTE_PREFIX}cs-sot`] = {
  title: `${CS_PREFIX}Spectral Overlay Tool${BLOG_SUFFIX}`,
  desc: POSTS['cs-sot'].subtitle,
  path: `${ROUTE_PREFIX}cs-sot`,
  canon: `${CANON_ROOT}${ROUTE_PREFIX}cs-sot`,
  og_img: 'http://mattlean.com/media/sot-social.png',
  og_img_secure: 'https://mattlean.com/media/sot-social.png',
  og_img_alt: 'Chart from spectral overlay tool',
  og_img_width: '1200',
  og_img_height: '1200',
  og_type: 'article',
  twitter_card: 'summary',
  twitter_img: 'http://mattlean.com/media/sot-social.png',
  twitter_img_alt: 'Chart from spectral overlay tool',
  keywords: [
    'matt lean',
    'matthew lean',
    'matt',
    'spectral overlay tool',
    'spectral overlay charts',
    'case study: spectral overlay tool',
    'lgc biosearch technologies',
    'biosearch technologies',
    'lgc',
    'case study',
    'blog',
    'post',
    'blog post',
    'full-stack developer',
    'full-stack',
    'fullstack developer',
    'fullstack',
    'full stack developer',
    'full stack',
    'backend developer',
    'backend',
    'frontend developer',
    'frontend',
    'web developer',
    'developer',
    'web dev',
    'dev',
    'web engineer',
    'software engineer',
    'engineer',
    'development',
    'programmer',
    'programming',
    'user interface designer',
    'ui designer',
    'user experience designer',
    'ux designer',
    'ui/ux designer',
    'ui & ux designer',
    'interface designer',
    'designer',
    'ui',
    'user interface',
    'ux',
    'user experience',
    'web design',
    'design',
    'silicon valley',
    'san francisco bay area',
    'san francisco bay',
    'sf bay area',
    'sf bay',
    'bay area',
    'south bay',
    'northern california',
    'norcal',
    'california',
    'us',
    'usa',
    'united states',
    'united states of america',
    'website',
    'personal',
    'blog',
    'freelance',
    'software',
    'web application',
    'application',
    'web app',
    'webapp',
    'web apps',
    'webapps',
    'websites',
    'web',
    'computer science',
    'graphic design',
    'interactive design',
    'computer',
    'science',
  ],
}

ROUTES[`${ROUTE_PREFIX}hello-world`] = {
  title: `Hello world!${BLOG_SUFFIX}`,
  desc: POSTS['hello-world'].subtitle,
  path: `${ROUTE_PREFIX}hello-world`,
  canon: `${CANON_ROOT}${ROUTE_PREFIX}hello-world`,
  og_img: 'http://mattlean.com/media/social.png',
  og_img_secure: 'https://mattlean.com/media/social.png',
  og_img_alt: 'Logo for MattLean.com',
  og_img_width: '1200',
  og_img_height: '1200',
  og_type: 'article',
  twitter_card: 'summary',
  twitter_img: 'http://mattlean.com/media/social.png',
  twitter_img_alt: 'Logo for MattLean.com',
  keywords: [
    'matt lean',
    'matthew lean',
    'matt',
    'lean',
    'hello world',
    'blog',
    'post',
    'blog post',
    'full-stack developer',
    'full-stack',
    'fullstack developer',
    'fullstack',
    'full stack developer',
    'full stack',
    'backend developer',
    'backend',
    'frontend developer',
    'frontend',
    'web developer',
    'developer',
    'web dev',
    'dev',
    'web engineer',
    'software engineer',
    'engineer',
    'development',
    'programmer',
    'programming',
    'user interface designer',
    'ui designer',
    'user experience designer',
    'ux designer',
    'ui/ux designer',
    'ui & ux designer',
    'interface designer',
    'designer',
    'ui',
    'user interface',
    'ux',
    'user experience',
    'web design',
    'design',
    'silicon valley',
    'san francisco bay area',
    'san francisco bay',
    'sf bay area',
    'sf bay',
    'bay area',
    'south bay',
    'northern california',
    'norcal',
    'california',
    'us',
    'usa',
    'united states',
    'united states of america',
    'website',
    'personal',
    'blog',
    'freelance',
    'software',
    'web application',
    'application',
    'web app',
    'webapp',
    'web apps',
    'webapps',
    'websites',
    'web',
    'computer science',
    'graphic design',
    'interactive design',
    'computer',
    'science',
  ],
}

export default ROUTES

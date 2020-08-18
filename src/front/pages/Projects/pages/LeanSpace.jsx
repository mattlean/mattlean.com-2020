import React from 'react'
import { Badge, Btn } from 'eswiss'
import { Link } from 'react-router-dom'
import BlindFrame from '../../../components/Blind/BlindFrame'
import CTA from '../../../components/CTA'
import { getProjectData } from '../../../../common/data/project'
import { useHeadDataEffect } from '../../../util'
import SSBlogPost from '../../../assets/projects/lean-space/blog-post.jpg'
import SSBlogPostMobile from '../../../assets/projects/lean-space/blog-post-mobile.jpg'
import SSWork from '../../../assets/projects/lean-space/work.jpg'
import SSWorkMobile from '../../../assets/projects/lean-space/work-mobile.jpg'
import { MarkGithubIcon, PlayIcon } from '@primer/octicons-react'

/**
 * Lean Space Project Page
 */
const LeanSpace = () => {
  useHeadDataEffect()
  const { company, name, tags } = getProjectData('lean-space')

  return (
    <>
      <BlindFrame nodeType="header" className="cover">
        <h1 className="h-1 md:h-2 sm:h-3">{name}</h1>
        {company && (
          <h2 className="h-4 sm:h-6 c-grey-2 dispw-roman">{company}</h2>
        )}
        <ul className="badge-list">
          {tags.map((t) => (
            <Badge nodeType="li" wide={true} key={t.id}>
              {t.name}
            </Badge>
          ))}
        </ul>
      </BlindFrame>
      <BlindFrame nodeType="h2" className="project-overview h-2 md:h-4">
        Project Overview
      </BlindFrame>
      <BlindFrame nodeType="section" className="subgrid-project-desc grid">
        <section className="c-grey-1">
          <p>
            <strong>Lean Space</strong> was Matt Lean’s personal website from
            2015 &ndash; 2020. It was made as a portfolio and&nbsp;blog.
          </p>
        </section>
        <a href="https://google.com" rel="noreferrer" target="_blank">
          <Btn className="btn-view-live">
            <PlayIcon className="btn-icon" /> View Live
          </Btn>
        </a>
        <a
          href="https://github.com/mattlean/lean-space"
          rel="noreferrer"
          target="_blank"
        >
          <Btn outline={true} className="btn-gh">
            <MarkGithubIcon className="btn-icon" /> GitHub
          </Btn>
        </a>
      </BlindFrame>
      <BlindFrame
        nodeType="figure"
        duration={0.1}
        threshold={0.2}
        className="ss ss-lg"
      >
        <img src={`/${SSWork}`} alt="" />
        <figcaption className="c-grey-2">
          Work page showcasing&nbsp;projects
        </figcaption>
      </BlindFrame>
      <BlindFrame
        nodeType="figure"
        duration={0.1}
        threshold={0.2}
        className="ss ss-lg"
      >
        <img src={`/${SSBlogPost}`} alt="" />
        <figcaption className="c-grey-2">
          First post written on the&nbsp;blog
        </figcaption>
      </BlindFrame>
      <BlindFrame nodeType="section" className="subgrid-mid-desc grid">
        <h3 className="h-5">My 2015 Online Identity</h3>
        <p className="txt-7 sm:txt-6 c-grey-1">
          Lean Space was created in 2015 to demonstrate my abilities as new
          graduate. The majority of the code was written using vanilla
          JavaScript and Sass with an emphasis on utilizing native browser APIs
          rather than 3rd party libraries.
        </p>
        <CTA to="/" type="sm" className="a-primary svg-primary">
          Learn more about the&nbsp;project
        </CTA>
      </BlindFrame>
      <BlindFrame nodeType="figure" className="ss ss-sm">
        <img src={`/${SSWorkMobile}`} alt="" />
        <figcaption className="c-grey-2">
          Work page showcasing projects being viewed on a mobile&nbsp;device
        </figcaption>
      </BlindFrame>
      <BlindFrame nodeType="figure" className="ss ss-sm project-details-gap">
        <img src={`/${SSBlogPostMobile}`} alt="" />
        <figcaption className="c-grey-2">
          First post written on the blog being viewed on a mobile&nbsp;device
        </figcaption>
      </BlindFrame>
      <BlindFrame nodeType="h3" className="project-details-header">
        Project Details
      </BlindFrame>
      <BlindFrame
        nodeType="section"
        className="subgrid-project-details grid c-grey-1"
      >
        <section>
          <section>
            <h4>Released</h4>
            <ul>
              <li>August 31, 2015</li>
            </ul>
          </section>
          <section>
            <h4>Languages</h4>
            <ul>
              <li>JavaScript</li>
              <li>
                <a
                  href="https://sass-lang.com"
                  rel="noreferrer"
                  target="_blank"
                  className="a-grey-1 txtw-roman"
                >
                  Sass
                </a>
              </li>
              <li>CSS</li>
              <li>HTML</li>
              <li>
                <a
                  href="https://www.ruby-lang.org/en"
                  rel="noreferrer"
                  target="_blank"
                  className="a-grey-1 txtw-roman"
                >
                  Ruby
                </a>
              </li>
            </ul>
          </section>
        </section>
        <section>
          <section>
            <h4>Updated</h4>
            <ul>
              <li>September 14, 2015</li>
            </ul>
          </section>
          <section>
            <h4>Dependencies</h4>
            <ul>
              <li>
                <a
                  href="https://masonry.desandro.com"
                  rel="noreferrer"
                  target="_blank"
                  className="a-grey-1 txtw-roman"
                >
                  Masonry
                </a>
              </li>
              <li>
                <a
                  href="https://developer.mozilla.org/en-US/docs/Web/API/History"
                  rel="noreferrer"
                  target="_blank"
                  className="a-grey-1 txtw-roman"
                >
                  History
                </a>
              </li>
              <li>
                <a
                  href="https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest"
                  rel="noreferrer"
                  target="_blank"
                  className="a-grey-1 txtw-roman"
                >
                  XMLHttpRequest
                </a>
              </li>
              <li>
                <Link to="/projects/lantern" className="a-grey-1 txtw-roman">
                  Lantern.js
                </Link>
              </li>
              <li>
                <a
                  href="https://modernizr.com"
                  rel="noreferrer"
                  target="_blank"
                  className="a-grey-1 txtw-roman"
                >
                  Modernizr
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/mattlean/xuehuacms"
                  rel="noreferrer"
                  target="_blank"
                  className="a-grey-1 txtw-roman"
                >
                  Xuehua CMS
                </a>
              </li>
            </ul>
          </section>
          <section>
            <h4>Design</h4>
            <ul>
              <li>
                <a
                  href="https://adobe.com/products/photoshop.html"
                  rel="noreferrer"
                  target="_blank"
                  className="a-grey-1 txtw-roman"
                >
                  Photoshop
                </a>
              </li>
            </ul>
          </section>
        </section>
      </BlindFrame>
      <BlindFrame
        nodeType="a"
        href="http://google.com"
        rel="noreferrer"
        target="_blank"
        className="btn-project-a"
      >
        <Btn className="btn-view-live">
          <PlayIcon className="btn-icon" /> View Live
        </Btn>
      </BlindFrame>
      <BlindFrame
        nodeType="a"
        href="https://github.com/mattlean/lean-space"
        rel="noreferrer"
        target="_blank"
        className="btn-project-b"
      >
        <Btn outline={true} className="btn-gh">
          <MarkGithubIcon className="btn-icon" /> GitHub
        </Btn>
      </BlindFrame>
    </>
  )
}

export default LeanSpace

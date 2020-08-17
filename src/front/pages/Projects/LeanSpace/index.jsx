import React from 'react'
import { Badge, Btn } from 'eswiss'
import BlindFrame from '../../../components/Blind/BlindFrame'
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
        <a
          href="https://biosearchtech.com/qpcr-multiplex-spectral-overlay-tool"
          rel="noreferrer"
          target="_blank"
          className="btn-view-live"
        >
          <Btn>
            <PlayIcon className="btn-icon" /> View Live
          </Btn>
        </a>
        <a
          href="https://github.com/mattlean/lean-space"
          rel="noreferrer"
          target="_blank"
          className="btn-gh txtw-roman"
        >
          <Btn outline={true}>
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
            <h4>Last Updated</h4>
            <p>May 22, 2016</p>
          </section>
          <section>
            <h4>Languages</h4>
            <ul>
              <li>
                <a
                  href="https://php.net"
                  rel="noreferrer"
                  target="_blank"
                  className="a-grey-1 txtw-roman"
                >
                  PHP
                </a>
              </li>
              <li>JavaScript</li>
              <li>CSS</li>
              <li>HTML</li>
            </ul>
          </section>
        </section>
        <section>
          <section>
            <h4>Released</h4>
            <ul>
              <li>October 29, 2014</li>
            </ul>
          </section>
          <section>
            <h4>Dependencies</h4>
            <ul>
              <li>
                <a
                  href="https://getbootstrap.com"
                  rel="noreferrer"
                  target="_blank"
                  className="a-grey-1 txtw-roman"
                >
                  Bootstrap
                </a>
              </li>
              <li>
                <a
                  href="https://mysql.com"
                  rel="noreferrer"
                  target="_blank"
                  className="a-grey-1 txtw-roman"
                >
                  MySQL
                </a>
              </li>
              <li>
                <a
                  href="https://wordpress.org"
                  rel="noreferrer"
                  target="_blank"
                  className="a-grey-1 txtw-roman"
                >
                  WordPress
                </a>
              </li>
            </ul>
          </section>
        </section>
      </BlindFrame>
      <BlindFrame
        nodeType="a"
        href="https://github.com/mattlean/lean-space"
        rel="noreferrer"
        target="_blank"
        className="btn-gh"
      >
        <Btn>
          <MarkGithubIcon className="btn-icon" /> GitHub
        </Btn>
      </BlindFrame>
    </>
  )
}

export default LeanSpace

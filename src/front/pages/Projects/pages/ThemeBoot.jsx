import React from 'react'
import { Badge, Btn } from 'eswiss'
import BlindFrame from '../../../components/Blind/BlindFrame'
import { getProjectData } from '../../../../common/data/project'
import { useHeadDataEffect } from '../../../util'
import SSFAQ from '../../../assets/projects/themeboot/faq-mobile.jpg'
import SSLocation from '../../../assets/projects/themeboot/location.jpg'
import SSFront from '../../../assets/projects/themeboot/front.jpg'
import SSFrontMobile from '../../../assets/projects/themeboot/front-mobile.jpg'
import { MarkGithubIcon } from '@primer/octicons-react'

/**
 * ThemeBoot Project Page
 */
const ThemeBoot = () => {
  useHeadDataEffect()
  const { company, name, tags } = getProjectData('themeboot')

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
            <strong>ThemeBoot</strong> is a{' '}
            <a
              href="https://getbootstrap.com"
              rel="noreferrer"
              target="_blank"
              className="a-grey-1 txtw-roman"
            >
              Bootstrap
            </a>
            -powered website layout built for use as a{' '}
            <a
              href="https://wordpress.org"
              rel="noreferrer"
              target="_blank"
              className="a-grey-1 txtw-roman"
            >
              WordPress
            </a>{' '}
            theme or a static HTML and CSS&nbsp;template.
          </p>
        </section>
        <a
          href="https://github.com/mattlean/themeboot"
          rel="noreferrer"
          target="_blank"
        >
          <Btn className="btn-github">
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
        <img src={`/${SSFront}`} alt="" />
        <figcaption className="c-grey-2">Frontpage example</figcaption>
      </BlindFrame>
      <BlindFrame
        nodeType="figure"
        duration={0.1}
        threshold={0.2}
        className="ss ss-lg"
      >
        <img src={`/${SSLocation}`} alt="" />
        <figcaption className="c-grey-2">Regular page&nbsp;example</figcaption>
      </BlindFrame>
      <section className="subgrid-ss-sm">
        <BlindFrame nodeType="figure" className="ss ss-sm">
          <img src={`/${SSFrontMobile}`} alt="" />
          <figcaption className="c-grey-2">
            Frontpage example being viewed on a mobile&nbsp;device
          </figcaption>
        </BlindFrame>
        <BlindFrame nodeType="figure" className="ss ss-sm project-details-gap">
          <img src={`/${SSFAQ}`} alt="" />
          <figcaption className="c-grey-2">
            Regular page example being viewed on a mobile&nbsp;device
          </figcaption>
        </BlindFrame>
      </section>
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
        href="https://github.com/mattlean/themeboot"
        rel="noreferrer"
        target="_blank"
        className="btn-project-a"
      >
        <Btn className="btn-github">
          <MarkGithubIcon className="btn-icon" /> GitHub
        </Btn>
      </BlindFrame>
    </>
  )
}

export default ThemeBoot

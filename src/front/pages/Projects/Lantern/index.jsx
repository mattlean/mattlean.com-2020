import React from 'react'
import { Badge, Btn } from 'eswiss'
import BlindFrame from '../../../components/Blind/BlindFrame'
import { getProjectData } from '../../../../common/data/project'
import { useHeadDataEffect } from '../../../util'
import NPMIcon from '../../../assets/npm.svg'
import SSLantern from '../../../assets/projects/lantern.jpg'
import { MarkGithubIcon } from '@primer/octicons-react'

/**
 * Lantern.js Project Page
 */
const Lantern = () => {
  useHeadDataEffect()
  const { company, name, tags } = getProjectData('lantern')

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
            <strong>Lantern.js</strong> is a{' '}
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
          href="https://github.com/mattlean/lanternjs"
          rel="noreferrer"
          target="_blank"
          className="btn-gh txtw-roman"
        >
          <Btn>
            <MarkGithubIcon className="btn-icon" /> GitHub
          </Btn>
        </a>
        <a
          href="https://npmjs.com/package/lanternjs"
          rel="noreferrer"
          target="_blank"
          className="btn-npm"
        >
          <Btn outline={true}>
            <NPMIcon className="btn-icon" /> npm
          </Btn>
        </a>
      </BlindFrame>
      <BlindFrame
        nodeType="figure"
        duration={0.1}
        threshold={0.2}
        className="ss ss-lg project-details-gap"
      >
        <img src={`/${SSLantern}`} alt="" />
        <figcaption className="c-grey-2">
          Example of open lightbox using&nbsp;Lantern.js
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
            <p>September 11, 2015</p>
          </section>
          <section>
            <h4>Languages</h4>
            <ul>
              <li>JavaScript</li>
              <li>CSS</li>
            </ul>
          </section>
        </section>
        <section>
          <section>
            <h4>Released</h4>
            <ul>
              <li>August 25, 2015</li>
            </ul>
          </section>
          <section>
            <h4>Dev Dependencies</h4>
            <ul>
              <li>
                <a
                  href="https://gruntjs.com"
                  rel="noreferrer"
                  target="_blank"
                  className="a-grey-1 txtw-roman"
                >
                  Grunt
                </a>
              </li>
            </ul>
          </section>
        </section>
      </BlindFrame>
      <BlindFrame
        nodeType="a"
        href="https://github.com/mattlean/lanternjs"
        rel="noreferrer"
        target="_blank"
        className="btn-gh"
      >
        <Btn>
          <MarkGithubIcon className="btn-icon" /> GitHub
        </Btn>
      </BlindFrame>
      <BlindFrame
        nodeType="a"
        href="https://npmjs.com/package/lanternjs"
        rel="noreferrer"
        target="_blank"
        className="btn-npm"
      >
        <Btn outline={true}>
          <NPMIcon className="btn-icon" /> npm
        </Btn>
      </BlindFrame>
    </>
  )
}

export default Lantern

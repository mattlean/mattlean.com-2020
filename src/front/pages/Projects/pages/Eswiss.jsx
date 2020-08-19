import React from 'react'
import { Badge, Btn } from 'eswiss'
import BlindFrame from '../../../components/Blind/BlindFrame'
import { getProjectData } from '../../../../common/data/project'
import { useHeadDataEffect } from '../../../util'
import NPMIcon from '../../../assets/npm.svg'
import { MarkGithubIcon, PlayIcon } from '@primer/octicons-react'

/**
 * eswiss Project Page
 */
const Eswiss = () => {
  useHeadDataEffect()
  const { name, tags } = getProjectData('eswiss')

  return (
    <>
      <BlindFrame nodeType="header" className="cover">
        <h1 className="h-1 md:h-2 sm:h-3">{name}</h1>
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
            <strong>eswiss</strong> is a design system that uses principles
            popularized by the{' '}
            <a
              href="https://en.wikipedia.org/wiki/International_Typographic_Style"
              rel="noreferrer"
              target="_blank"
              className="a-grey-1 txtw-roman"
            >
              Swiss and International Typographic Styles
            </a>{' '}
            and adapts them to modern user interface
            development&nbsp;methodologies.
          </p>
          <p>
            While the project is still in alpha, the website you’re looking at
            right now is using eswiss as a proof-of-concept.
          </p>
        </section>
        <a
          href="http://mattlean.github.io/eswiss"
          rel="noreferrer"
          target="_blank"
        >
          <Btn className="btn-view-live">
            <PlayIcon className="btn-icon" /> View Live
          </Btn>
        </a>
        <a
          href="https://github.com/mattlean/eswiss"
          rel="noreferrer"
          target="_blank"
        >
          <Btn outline={true} className="btn-gh">
            <MarkGithubIcon className="btn-icon" /> GitHub
          </Btn>
        </a>
        <a
          href="https://npmjs.com/package/eswiss"
          rel="noreferrer"
          target="_blank"
        >
          <Btn outline={true} className="btn-npm">
            <NPMIcon className="btn-icon" /> npm
          </Btn>
        </a>
      </BlindFrame>
      <BlindFrame nodeType="h3" className="project-details-header">
        Project Details
      </BlindFrame>
      <BlindFrame
        nodeType="section"
        className="subgrid-project-details grid mb-0 c-grey-1"
      >
        <section>
          <section>
            <h4>Languages</h4>
            <ul>
              <li>
                <a
                  href="https://www.typescriptlang.org"
                  rel="noreferrer"
                  target="_blank"
                  className="a-grey-1 txtw-roman"
                >
                  TypeScript
                </a>
              </li>
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
            </ul>
          </section>
          <section>
            <h4>Dev Dependencies</h4>
            <ul>
              <li>
                <a
                  href="https://storybook.js.org"
                  rel="noreferrer"
                  target="_blank"
                  className="a-grey-1 txtw-roman"
                >
                  Storybook
                </a>
              </li>
              <li>
                <a
                  href="https://jestjs.io"
                  rel="noreferrer"
                  target="_blank"
                  className="a-grey-1 txtw-roman"
                >
                  Jest
                </a>
              </li>
              <li>
                <a
                  href="https://reactjs.org/docs/test-renderer.html"
                  rel="noreferrer"
                  target="_blank"
                  className="a-grey-1 txtw-roman"
                >
                  React Test&nbsp;Renderer
                </a>
              </li>
              <li>
                <a
                  href="https://gulpjs.com"
                  rel="noreferrer"
                  target="_blank"
                  className="a-grey-1 txtw-roman"
                >
                  Gulp
                </a>
              </li>
            </ul>
          </section>
        </section>
        <section>
          <section>
            <h4>Peer Dependencies</h4>
            <ul>
              <li>
                <a
                  href="https://reactjs.org"
                  rel="noreferrer"
                  target="_blank"
                  className="a-grey-1 txtw-roman"
                >
                  React
                </a>
              </li>
              <li>
                <a
                  href="https://reactrouter.com"
                  rel="noreferrer"
                  target="_blank"
                  className="a-grey-1 txtw-roman"
                >
                  React Router
                </a>
              </li>
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
            </ul>
          </section>
          <section>
            <h4>License</h4>
            <ul>
              <li>
                <a
                  href="https://github.com/mattlean/eswiss/blob/master/LICENSE"
                  rel="noreferrer"
                  target="_blank"
                  className="a-grey-1 txtw-roman"
                >
                  MIT
                </a>
              </li>
            </ul>
          </section>
        </section>
      </BlindFrame>
    </>
  )
}

export default Eswiss

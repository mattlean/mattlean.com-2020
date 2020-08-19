import React from 'react'
import { Badge, Btn } from 'eswiss'
import { Link } from 'react-router-dom'
import BlindFrame from '../../../components/Blind/BlindFrame'
import { getProjectData } from '../../../../common/data/project'
import { useHeadDataEffect } from '../../../util'
import SSBackend from '../../../assets/projects/ljas/starchan-backend.png'
import SSDesktop from '../../../assets/projects/ljas/todolist-desktop.png'
import SSFrontend from '../../../assets/projects/ljas/starchan-frontend.png'
import { MarkGithubIcon } from '@primer/octicons-react'

/**
 * Lean JavaScript Application Starter Project Page
 */
const LJAS = () => {
  useHeadDataEffect()
  const { company, tags } = getProjectData('ljas')

  return (
    <>
      <BlindFrame nodeType="header" className="cover">
        <h1 className="h-1 md:h-2 sm:h-3">
          Lean JavaScript Application Starter
        </h1>
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
            <strong>Lean JavaScript Application Starter</strong> allows
            developers to skip boilerplate configuration to kick-start their
            next JavaScript&nbsp;project.
          </p>
          <p>
            The starter handles three different target environments:{' '}
            <a
              href="https://nodejs.org"
              rel="noreferrer"
              target="_blank"
              className="a-grey-1 txtw-roman"
            >
              Node.js
            </a>{' '}
            which is usually used for server applications, native desktop which
            is built with{' '}
            <a
              href="https://electronjs.org"
              rel="noreferrer"
              target="_blank"
              className="a-grey-1 txtw-roman"
            >
              Electron
            </a>
            , and browsers. The build process is all handled through&nbsp;
            <a
              href="https://webpack.js.org/"
              rel="noreferrer"
              target="_blank"
              className="a-grey-1 txtw-roman"
            >
              webpack
            </a>
            .
          </p>
          <p>
            The codebases are designed to be as consistent as possible across
            different target environments, making swapping between
            projects&nbsp;easier.
          </p>
        </section>
        <a
          href="https://github.com/mattlean/lean-js-app-starter"
          rel="noreferrer"
          target="_blank"
        >
          <Btn className="btn-github">
            <MarkGithubIcon className="btn-icon" /> GitHub
          </Btn>
        </a>
      </BlindFrame>
      <BlindFrame nodeType="figure" className="ss ss-lg">
        <img src={`/${SSDesktop}`} alt="" />
        <figcaption className="c-grey-2">
          Native desktop todo list app built with Lean JS App Starter running
          on&nbsp;macOS
        </figcaption>
      </BlindFrame>
      <BlindFrame nodeType="figure" className="ss ss-sm">
        <img src={`/${SSFrontend}`} alt="" />
        <figcaption className="c-grey-2">
          Browser frontend for a bulletin board system built with
          Lean&nbsp;JS&nbsp;App&nbsp;Starter
        </figcaption>
      </BlindFrame>
      <BlindFrame nodeType="figure" className="ss ss-sm project-details-gap">
        <img src={`/${SSBackend}`} alt="" />
        <figcaption className="c-grey-2">
          Node.js REST server API built with Lean&nbsp;JS&nbsp;App&nbsp;Starter
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
              <li>January 13, 2019</li>
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
            </ul>
          </section>
          <section>
            <h4>Frontend</h4>
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
                  href="https://redux.js.org"
                  rel="noreferrer"
                  target="_blank"
                  className="a-grey-1 txtw-roman"
                >
                  Redux
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
                  href="https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API"
                  rel="noreferrer"
                  target="_blank"
                  className="a-grey-1 txtw-roman"
                >
                  Fetch
                </a>
              </li>
            </ul>
          </section>
          <section>
            <h4>Tooling</h4>
            <ul>
              <li>
                <a
                  href="https://electronjs.org"
                  rel="noreferrer"
                  target="_blank"
                  className="a-grey-1 txtw-roman"
                >
                  Electron
                </a>
              </li>
              <li>
                <a
                  href="https://webpack.js.org"
                  rel="noreferrer"
                  target="_blank"
                  className="a-grey-1 txtw-roman"
                >
                  webpack
                </a>
              </li>
              <li>
                <a
                  href="https://flow.org"
                  rel="noreferrer"
                  target="_blank"
                  className="a-grey-1 txtw-roman"
                >
                  Flow
                </a>
              </li>
              <li>
                <a
                  href="https://eslint.org"
                  rel="noreferrer"
                  target="_blank"
                  className="a-grey-1 txtw-roman"
                >
                  ESLint
                </a>
              </li>
              <li>
                <Link to="/projects/alwp" className="a-grey-1 txtw-roman">
                  Asset List Webpack&nbsp;Plugin
                </Link>
              </li>
            </ul>
          </section>
        </section>
        <section>
          <section>
            <h4>Updated</h4>
            <p>February 27, 2019</p>
          </section>
          <section>
            <h4>Backend</h4>
            <ul>
              <li>
                <a
                  href="https://nodejs.org"
                  rel="noreferrer"
                  target="_blank"
                  className="a-grey-1 txtw-roman"
                >
                  Node.js
                </a>
              </li>
              <li>
                <a
                  href="https://expressjs.com"
                  rel="noreferrer"
                  target="_blank"
                  className="a-grey-1 txtw-roman"
                >
                  Express
                </a>
              </li>
              <li>
                <a
                  href="https://mongodb.com"
                  rel="noreferrer"
                  target="_blank"
                  className="a-grey-1 txtw-roman"
                >
                  MongoDB
                </a>
              </li>
              <li>
                <a
                  href="https://mongoosejs.com"
                  rel="noreferrer"
                  target="_blank"
                  className="a-grey-1 txtw-roman"
                >
                  Mongoose
                </a>
              </li>
            </ul>
          </section>
          <section>
            <h4>Testing</h4>
            <ul>
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
                  href="https://enzymejs.github.io/enzyme"
                  rel="noreferrer"
                  target="_blank"
                  className="a-grey-1 txtw-roman"
                >
                  Enzyme
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
            </ul>
          </section>
          <section>
            <h4>License</h4>
            <ul>
              <li>
                <a
                  href="https://github.com/mattlean/lean-js-app-starter/blob/master/LICENSE"
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
      <BlindFrame
        nodeType="a"
        href="https://github.com/mattlean/lean-js-app-starter"
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

export default LJAS

import React from 'react'
import { Badge, Btn } from 'eswiss'
import { Link } from 'react-router-dom'
import BlindFrame from '../../../components/Blind/BlindFrame'
import { getProjectData } from '../../../../common/data/project'
import { useHeadDataEffect } from '../../../util'
import { MarkGithubIcon } from '@primer/octicons-react'

/**
 * Recha Project Page
 */
const Recha = () => {
  useHeadDataEffect()
  const { name, tags } = getProjectData('recha')

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
            <strong>Recha</strong> is a personal task and schedule management
            application that helps you achieve your goals. As you attempt plan
            and tasks, the app will keep track on how you’re doing and give you
            helpful feedback like whether you’re over or under planning your
            days, what tasks you to complete consistently, what tasks you
            struggle with, progress made toward your goal, and more.
          </p>
        </section>
        <a
          href="https://github.com/mattlean/recha"
          rel="noreferrer"
          target="_blank"
        >
          <Btn className="btn-gh">
            <MarkGithubIcon className="btn-icon" /> Desktop
          </Btn>
        </a>
        <a
          href="https://github.com/mattlean/recha-server"
          rel="noreferrer"
          target="_blank"
        >
          <Btn outline={true} className="btn-gh">
            <MarkGithubIcon className="btn-icon" /> Server
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
              <li>SQL</li>
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
                  href="https://material.io"
                  rel="noreferrer"
                  target="_blank"
                  className="a-grey-1 txtw-roman"
                >
                  Material Design
                </a>
              </li>
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
                  href="https://github.com/reduxjs/redux-thunk"
                  rel="noreferrer"
                  target="_blank"
                  className="a-grey-1 txtw-roman"
                >
                  Redux Thunk
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/reduxjs/reselect"
                  rel="noreferrer"
                  target="_blank"
                  className="a-grey-1 txtw-roman"
                >
                  Reselect
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
              <li>
                <a
                  href="https://github.com/atlassian/react-beautiful-dnd"
                  rel="noreferrer"
                  target="_blank"
                  className="a-grey-1 txtw-roman"
                >
                  react-beautiful-dnd
                </a>
              </li>
              <li>
                <a
                  href="https://momentjs.com"
                  rel="noreferrer"
                  target="_blank"
                  className="a-grey-1 txtw-roman"
                >
                  Moment
                </a>
              </li>
              <li>
                <a
                  href="https://lodash.com"
                  rel="noreferrer"
                  target="_blank"
                  className="a-grey-1 txtw-roman"
                >
                  Lodash
                </a>
              </li>
            </ul>
          </section>
        </section>
        <section>
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
                  href="https://postgresql.org/"
                  rel="noreferrer"
                  target="_blank"
                  className="a-grey-1 txtw-roman"
                >
                  PostgreSQL
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/vitaly-t/pg-promise"
                  rel="noreferrer"
                  target="_blank"
                  className="a-grey-1 txtw-roman"
                >
                  pg-promise
                </a>
              </li>
              <li>
                <Link to="/projects/checkpoint" className="a-grey-1 txtw-roman">
                  Checkpoint.js
                </Link>
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
              <li>
                <a
                  href="https://github.com/visionmedia/supertest"
                  rel="noreferrer"
                  target="_blank"
                  className="a-grey-1 txtw-roman"
                >
                  SuperTest
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
            </ul>
          </section>
          <section>
            <h4>License</h4>
            <ul>
              <li>
                <a
                  href="https://github.com/mattlean/recha/blob/master/LICENSE"
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

export default Recha

import React, { useEffect, useRef } from 'react'
import { Badge, Btn } from 'eswiss'
import { Link } from 'react-router-dom'
import BlindFrame from '../../../components/Blind/BlindFrame'
import { getProjectData } from '../../../../common/data/project'
import { ROUTE_PREFIX } from '../../../../common/data/route/project'
import {
  setupBlindObservers,
  useInitAnim,
} from '../../../components/Blind/initAnimUtil'
import { useHeadDataEffect } from '../../../util'
import { MarkGithubIcon } from '@primer/octicons-react'

const { name, tags } = getProjectData('recha')

/**
 * Recha Project Page
 */
const Recha = () => {
  useHeadDataEffect()

  const srStartRef = useRef(null)
  const {
    blindVisibleStates,
    blindStates,
    initAnimComplete,
    observerData,
    runInitAnim,
  } = useInitAnim(5)

  // Setup effect which is only run once
  useEffect(() => {
    // Focus starting element on page load
    if (srStartRef.current) srStartRef.current.focus()

    const observers = setupBlindObservers(
      [0.5, 0.1, 0.1, 0.1, 0.1],
      observerData,
      blindVisibleStates
    )

    window.setTimeout(runInitAnim, 100)

    // Disconnect all observers on unmount
    return () => observers.forEach((observer) => observer.disconnect())
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      <BlindFrame
        ref={observerData[0].ref}
        nodeType="header"
        delay={blindStates[0].delay}
        observer={observerData[0].observer}
        play={
          initAnimComplete
            ? blindVisibleStates[0].isVisible
            : blindStates[0].play
        }
        className="cover"
      >
        <h1 ref={srStartRef} tabIndex="-1" className="h-1 md:h-2 sm:h-3">
          {name}
        </h1>
        <ul aria-label="Categories" className="badge-list">
          {tags.map((t) => (
            <Badge nodeType="li" wide={true} key={t.id}>
              {t.name}
            </Badge>
          ))}
        </ul>
      </BlindFrame>
      <BlindFrame
        ref={observerData[1].ref}
        nodeType="h2"
        delay={blindStates[1].delay}
        observer={observerData[1].observer}
        play={
          initAnimComplete
            ? blindVisibleStates[1].isVisible
            : blindStates[1].play
        }
        className="project-overview h-2 md:h-4"
      >
        Project Overview
      </BlindFrame>
      <BlindFrame
        ref={observerData[2].ref}
        nodeType="section"
        delay={blindStates[2].delay}
        observer={observerData[2].observer}
        play={
          initAnimComplete
            ? blindVisibleStates[2].isVisible
            : blindStates[2].play
        }
        className="subgrid-project-desc grid"
      >
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
      <BlindFrame
        ref={observerData[3].ref}
        nodeType="h3"
        delay={blindStates[3].delay}
        observer={observerData[3].observer}
        play={
          initAnimComplete
            ? blindVisibleStates[3].isVisible
            : blindStates[3].play
        }
        className="project-details-header"
      >
        Project Details
      </BlindFrame>
      <BlindFrame
        ref={observerData[4].ref}
        nodeType="section"
        className="subgrid-project-details grid mb-0 c-grey-1"
        delay={blindStates[4].delay}
        observer={observerData[4].observer}
        play={
          initAnimComplete
            ? blindVisibleStates[4].isVisible
            : blindStates[4].play
        }
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
                  className="a-grey-1"
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
                  className="a-grey-1"
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
                  className="a-grey-1"
                >
                  Material Design
                </a>
              </li>
              <li>
                <a
                  href="https://reactjs.org"
                  rel="noreferrer"
                  target="_blank"
                  className="a-grey-1"
                >
                  React
                </a>
              </li>
              <li>
                <a
                  href="https://redux.js.org"
                  rel="noreferrer"
                  target="_blank"
                  className="a-grey-1"
                >
                  Redux
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/reduxjs/redux-thunk"
                  rel="noreferrer"
                  target="_blank"
                  className="a-grey-1"
                >
                  Redux Thunk
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/reduxjs/reselect"
                  rel="noreferrer"
                  target="_blank"
                  className="a-grey-1"
                >
                  Reselect
                </a>
              </li>
              <li>
                <a
                  href="https://reactrouter.com"
                  rel="noreferrer"
                  target="_blank"
                  className="a-grey-1"
                >
                  React Router
                </a>
              </li>
              <li>
                <a
                  href="https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API"
                  rel="noreferrer"
                  target="_blank"
                  className="a-grey-1"
                >
                  Fetch
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/atlassian/react-beautiful-dnd"
                  rel="noreferrer"
                  target="_blank"
                  className="a-grey-1"
                >
                  react-beautiful-dnd
                </a>
              </li>
              <li>
                <a
                  href="https://momentjs.com"
                  rel="noreferrer"
                  target="_blank"
                  className="a-grey-1"
                >
                  Moment
                </a>
              </li>
              <li>
                <a
                  href="https://lodash.com"
                  rel="noreferrer"
                  target="_blank"
                  className="a-grey-1"
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
                  className="a-grey-1"
                >
                  Node.js
                </a>
              </li>
              <li>
                <a
                  href="https://expressjs.com"
                  rel="noreferrer"
                  target="_blank"
                  className="a-grey-1"
                >
                  Express
                </a>
              </li>
              <li>
                <a
                  href="https://postgresql.org/"
                  rel="noreferrer"
                  target="_blank"
                  className="a-grey-1"
                >
                  PostgreSQL
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/vitaly-t/pg-promise"
                  rel="noreferrer"
                  target="_blank"
                  className="a-grey-1"
                >
                  pg-promise
                </a>
              </li>
              <li>
                <Link to={`${ROUTE_PREFIX}checkpoint`} className="a-grey-1">
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
                  className="a-grey-1"
                >
                  Jest
                </a>
              </li>
              <li>
                <a
                  href="https://enzymejs.github.io/enzyme"
                  rel="noreferrer"
                  target="_blank"
                  className="a-grey-1"
                >
                  Enzyme
                </a>
              </li>
              <li>
                <a
                  href="https://reactjs.org/docs/test-renderer.html"
                  rel="noreferrer"
                  target="_blank"
                  className="a-grey-1"
                >
                  React Test&nbsp;Renderer
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/visionmedia/supertest"
                  rel="noreferrer"
                  target="_blank"
                  className="a-grey-1"
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
                  className="a-grey-1"
                >
                  Electron
                </a>
              </li>
              <li>
                <a
                  href="https://webpack.js.org"
                  rel="noreferrer"
                  target="_blank"
                  className="a-grey-1"
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
                  className="a-grey-1"
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

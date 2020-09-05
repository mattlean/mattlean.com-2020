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
import SSBackend from '../../../assets/projects/ljas/starchan-backend.png'
import SSDesktop from '../../../assets/projects/ljas/todolist-desktop.png'
import SSFrontend from '../../../assets/projects/ljas/starchan-frontend.png'
import { MarkGithubIcon } from '@primer/octicons-react'

const { company, tags } = getProjectData('ljas')

/**
 * Lean JavaScript Application Starter Project Page
 */
const LJAS = () => {
  useHeadDataEffect()

  const srStartRef = useRef(null)
  const {
    blindVisibleStates,
    blindStates,
    initAnimComplete,
    observerData,
    runInitAnim,
  } = useInitAnim(9)

  // Setup effect which is only run once
  useEffect(() => {
    // Focus starting element on page load
    if (srStartRef.current) srStartRef.current.focus()

    const observers = setupBlindObservers(
      [0.5, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1],
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
          Lean JavaScript Application Starter
        </h1>
        {company && (
          <h2 className="h-4 sm:h-6 c-grey-2 dispw-roman">{company}</h2>
        )}
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
              className="a-grey-1"
            >
              Node.js
            </a>{' '}
            which is usually used for server applications, native desktop which
            is built with{' '}
            <a
              href="https://electronjs.org"
              rel="noreferrer"
              target="_blank"
              className="a-grey-1"
            >
              Electron
            </a>
            , and browsers. The build process is all handled through&nbsp;
            <a
              href="https://webpack.js.org/"
              rel="noreferrer"
              target="_blank"
              className="a-grey-1"
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
      <BlindFrame
        ref={observerData[3].ref}
        nodeType="figure"
        delay={blindStates[3].delay}
        duration={0.2}
        observer={observerData[3].observer}
        play={
          initAnimComplete
            ? blindVisibleStates[3].isVisible
            : blindStates[3].play
        }
        className="ss ss-lg"
      >
        <img
          src={SSDesktop}
          alt="Screenshot of app built with Lean JS App Starter running natively on macOS"
        />
        <figcaption className="c-grey-2">
          Native desktop todo list app built with Lean JS App Starter running
          on&nbsp;macOS
        </figcaption>
      </BlindFrame>
      <BlindFrame
        ref={observerData[4].ref}
        nodeType="figure"
        delay={blindStates[4].delay}
        observer={observerData[4].observer}
        play={
          initAnimComplete
            ? blindVisibleStates[4].isVisible
            : blindStates[4].play
        }
        className="ss ss-sm"
      >
        <img
          src={SSFrontend}
          alt="Screenshot of frontend app built with Lean JS App Starter running in a browser"
        />
        <figcaption className="c-grey-2">
          Browser frontend for a bulletin board system built with
          Lean&nbsp;JS&nbsp;App&nbsp;Starter
        </figcaption>
      </BlindFrame>
      <BlindFrame
        ref={observerData[5].ref}
        nodeType="figure"
        delay={blindStates[5].delay}
        observer={observerData[5].observer}
        play={
          initAnimComplete
            ? blindVisibleStates[5].isVisible
            : blindStates[5].play
        }
        className="ss ss-sm project-details-gap"
      >
        <img
          src={SSBackend}
          alt="Screenshot of backend app built with Lean JS App Starter running in Node.js"
        />
        <figcaption className="c-grey-2">
          Node.js REST API built with Lean&nbsp;JS&nbsp;App&nbsp;Starter
        </figcaption>
      </BlindFrame>
      <BlindFrame
        ref={observerData[6].ref}
        nodeType="h3"
        delay={blindStates[6].delay}
        observer={observerData[6].observer}
        play={
          initAnimComplete
            ? blindVisibleStates[6].isVisible
            : blindStates[6].play
        }
        className="project-details-header"
      >
        Project Details
      </BlindFrame>
      <BlindFrame
        ref={observerData[7].ref}
        nodeType="section"
        delay={blindStates[7].delay}
        observer={observerData[7].observer}
        play={
          initAnimComplete
            ? blindVisibleStates[7].isVisible
            : blindStates[7].play
        }
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
              <li>
                <a
                  href="https://babeljs.io"
                  rel="noreferrer"
                  target="_blank"
                  className="a-grey-1"
                >
                  Babel
                </a>
              </li>
              <li>
                <a
                  href="https://flow.org"
                  rel="noreferrer"
                  target="_blank"
                  className="a-grey-1"
                >
                  Flow
                </a>
              </li>
              <li>
                <a
                  href="https://eslint.org"
                  rel="noreferrer"
                  target="_blank"
                  className="a-grey-1"
                >
                  ESLint
                </a>
              </li>
              <li>
                <a
                  href="https://stylelint.io"
                  rel="noreferrer"
                  target="_blank"
                  className="a-grey-1"
                >
                  stylelint
                </a>
              </li>
              <li>
                <Link to={`${ROUTE_PREFIX}alwp`} className="a-grey-1">
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
                  href="https://mongodb.com"
                  rel="noreferrer"
                  target="_blank"
                  className="a-grey-1"
                >
                  MongoDB
                </a>
              </li>
              <li>
                <a
                  href="https://mongoosejs.com"
                  rel="noreferrer"
                  target="_blank"
                  className="a-grey-1"
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
            <h4>License</h4>
            <ul>
              <li>
                <a
                  href="https://github.com/mattlean/lean-js-app-starter/blob/master/LICENSE"
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
      <BlindFrame
        ref={observerData[8].ref}
        nodeType="a"
        href="https://github.com/mattlean/lean-js-app-starter"
        rel="noreferrer"
        target="_blank"
        delay={blindStates[8].delay}
        observer={observerData[8].observer}
        play={
          initAnimComplete
            ? blindVisibleStates[8].isVisible
            : blindStates[8].play
        }
        className="btn-option-a"
      >
        <Btn className="btn-github">
          <MarkGithubIcon className="btn-icon" /> GitHub
        </Btn>
      </BlindFrame>
    </>
  )
}

export default LJAS

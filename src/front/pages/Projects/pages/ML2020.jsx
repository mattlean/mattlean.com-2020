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

const { company, tags } = getProjectData('ml2020')

/**
 * MattLean.com (2020) Project Page
 */
const ML2020 = () => {
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
          MattLean
          <br className="title-br" aria-hidden="true" />
          .com
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
            <strong>MattLean.com</strong> is the current iteration of my
            personal website. You’re looking at it right&nbsp;now!
          </p>
          <p>
            The project acts as a proof-of-concept for the{' '}
            <Link to={`${ROUTE_PREFIX}eswiss`} className="a-grey-1 txtw-bold">
              eswiss
            </Link>
            .
            {/* If you’re interested in the design and development process behind
            this website and its design system, read the{' '}
            <Link to="/" className="a-grey-1">
              case study
            </Link>
            . */}
          </p>
        </section>
        {/* <Link to="/">
          <Btn className="btn-case-study">
            <BookIcon className="btn-icon" /> Case Study
          </Btn>
        </Link> */}
        <a
          href="https://github.com/mattlean/mattlean.com-2020"
          rel="noreferrer"
          target="_blank"
        >
          <Btn outline={true} className="btn-gh">
            <MarkGithubIcon className="btn-icon" /> GitHub
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
            <h4>Released</h4>
            <ul>
              <li>August 19, 2020</li>
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
                  href="https://ejs.co"
                  rel="noreferrer"
                  target="_blank"
                  className="a-grey-1"
                >
                  EJS
                </a>
              </li>
            </ul>
          </section>
          <section>
            <h4>Tooling</h4>
            <ul>
              <li>
                <Link to={`${ROUTE_PREFIX}alwp`} className="a-grey-1">
                  Asset List Webpack&nbsp;Plugin
                </Link>
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
        </section>
        <section>
          <section>
            <h4>Updated</h4>
            <ul>
              <li>August 19, 2020</li>
            </ul>
          </section>
          <section>
            <h4>Frontend</h4>
            <ul>
              <li>
                <Link to={`${ROUTE_PREFIX}eswiss`} className="a-grey-1">
                  eswiss
                </Link>
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
                  href="https://framer.com/motion"
                  rel="noreferrer"
                  target="_blank"
                  className="a-grey-1"
                >
                  Framer Motion
                </a>
              </li>
            </ul>
          </section>
          <section>
            <h4>Design</h4>
            <ul>
              <li>
                <a
                  href="https://adobe.com/products/xd.html"
                  rel="noreferrer"
                  target="_blank"
                  className="a-grey-1"
                >
                  XD
                </a>
              </li>
              <li>
                <a
                  href="https://adobe.com/products/photoshop.html"
                  rel="noreferrer"
                  target="_blank"
                  className="a-grey-1"
                >
                  Photoshop
                </a>
              </li>
              <li>
                <a
                  href="https://adobe.com/products/illustrator.html"
                  rel="noreferrer"
                  target="_blank"
                  className="a-grey-1"
                >
                  Illustrator
                </a>
              </li>
            </ul>
          </section>
        </section>
      </BlindFrame>
    </>
  )
}

export default ML2020

import React, { useEffect, useRef } from 'react'
import { Badge, Btn } from 'eswiss'
import { Link } from 'react-router-dom'
import BlindFrame from '../../../components/Blind/BlindFrame'
import { getProjectData } from '../../../../common/data/project'
import { ROUTE_PREFIX as BLOG_PREFIX } from '../../../../common/data/route/blog'
import { ROUTE_PREFIX as PROJECT_PREFIX } from '../../../../common/data/route/project'
import {
  setupBlindObservers,
  useInitAnim,
} from '../../../components/Blind/initAnimUtil'
import { usePageLoadEffect } from '../../../util'
import { BookIcon, MarkGithubIcon } from '@primer/octicons-react'

const { company, name, tags } = getProjectData('ml2020')

/**
 * MattLean.com (2020) Project Page
 */
const ML2020 = () => {
  usePageLoadEffect()

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
        <h1 ref={srStartRef} tabIndex="-1" className="long-h h-1 md:h-2 sm:h-3">
          {name}
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
            The project acts as a proof-of-concept for my other project, a
            design system called&nbsp;
            <Link to={`${PROJECT_PREFIX}eswiss`} className="a-grey-1 txtw-bold">
              eswiss
            </Link>
            .
          </p>
        </section>
        <Link to={`${BLOG_PREFIX}cs-ml2020`}>
          <Btn className="btn-case-study">
            <BookIcon className="btn-icon" /> Case Study
          </Btn>
        </Link>
        <a
          href="https://github.com/mattlean/mattlean.com-2020"
          rel="noopener noreferrer"
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
              <li>Aug 31, 2020</li>
            </ul>
          </section>
          <section>
            <h4>Languages</h4>
            <ul>
              <li>JavaScript</li>
              <li>
                <a
                  href="https://sass-lang.com"
                  rel="noopener noreferrer"
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
                  rel="noopener noreferrer"
                  target="_blank"
                  className="a-grey-1"
                >
                  Node.js
                </a>
              </li>
              <li>
                <a
                  href="https://expressjs.com"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="a-grey-1"
                >
                  Express
                </a>
              </li>
              <li>
                <a
                  href="https://ejs.co"
                  rel="noopener noreferrer"
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
                <Link to={`${PROJECT_PREFIX}alwp`} className="a-grey-1">
                  Asset List Webpack&nbsp;Plugin
                </Link>
              </li>
              <li>
                <a
                  href="https://webpack.js.org"
                  rel="noopener noreferrer"
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
              <li>Sept 16, 2020</li>
            </ul>
          </section>
          <section>
            <h4>Frontend</h4>
            <ul>
              <li>
                <Link to={`${PROJECT_PREFIX}eswiss`} className="a-grey-1">
                  eswiss
                </Link>
              </li>
              <li>
                <a
                  href="https://reactjs.org"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="a-grey-1"
                >
                  React
                </a>
              </li>
              <li>
                <a
                  href="https://reactrouter.com"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="a-grey-1"
                >
                  React Router
                </a>
              </li>
              <li>
                <a
                  href="https://framer.com/motion"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="a-grey-1"
                >
                  Framer Motion
                </a>
              </li>
              <li>
                <a
                  href="https://prismjs.com"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="a-grey-1"
                >
                  Prism
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
                  rel="noopener noreferrer"
                  target="_blank"
                  className="a-grey-1"
                >
                  XD
                </a>
              </li>
              <li>
                <a
                  href="https://adobe.com/products/photoshop.html"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="a-grey-1"
                >
                  Photoshop
                </a>
              </li>
              <li>
                <a
                  href="https://adobe.com/products/illustrator.html"
                  rel="noopener noreferrer"
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

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
import { usePageLoadEffect } from '../../../util'
import NPMIcon from '../../../assets/icons/npm.svg'
import { MarkGithubIcon, PlayIcon } from '@primer/octicons-react'

const { live, name, tags } = getProjectData('eswiss')

/**
 * eswiss Project Page
 */
const Eswiss = () => {
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
            <strong>eswiss</strong> is a{' '}
            <a
              href="https://en.wikipedia.org/wiki/Design_system"
              rel="noreferrer"
              target="_blank"
              className="a-grey-1"
            >
              design system
            </a>{' '}
            that uses principles popularized by the{' '}
            <a
              href="https://en.wikipedia.org/wiki/International_Typographic_Style"
              rel="noreferrer"
              target="_blank"
              className="a-grey-1"
            >
              Swiss and International Typographic Styles
            </a>{' '}
            and adapts them to modern user interface development methodologies.
            The system emphasizes practicality, maintainability,
            and&nbsp;accessibility.
          </p>
          <p>
            While the project is still in alpha,{' '}
            <Link to={`${ROUTE_PREFIX}ml2020`} className="a-grey-1">
              the website you’re looking at right now
            </Link>{' '}
            is using eswiss as a proof-of-concept.
          </p>
        </section>
        <a
          href={live}
          rel="noreferrer"
          target="_blank"
          className="btn-option-a btn-triple-group"
        >
          <Btn className="btn-view-live">
            <PlayIcon className="btn-icon" /> View Live
          </Btn>
        </a>
        <a
          href="https://github.com/mattlean/eswiss"
          rel="noreferrer"
          target="_blank"
          className="btn-option-b btn-triple-group"
        >
          <Btn outline={true} className="btn-gh">
            <MarkGithubIcon className="btn-icon" /> GitHub
          </Btn>
        </a>
        <a
          href="https://npmjs.com/package/eswiss"
          rel="noreferrer"
          target="_blank"
          className="btn-option-c btn-triple-group"
        >
          <Btn outline={true} className="btn-npm">
            <NPMIcon className="btn-icon" /> npm
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
            </ul>
          </section>
          <section>
            <h4>Peer Dependencies</h4>
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
                  href="https://sass-lang.com"
                  rel="noreferrer"
                  target="_blank"
                  className="a-grey-1"
                >
                  Sass
                </a>
              </li>
            </ul>
          </section>
        </section>
        <section>
          <section>
            <h4>Tooling</h4>
            <ul>
              <li>
                <a
                  href="https://storybook.js.org"
                  rel="noreferrer"
                  target="_blank"
                  className="a-grey-1"
                >
                  Storybook
                </a>
              </li>
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
                  href="https://chromatic.com"
                  rel="noreferrer"
                  target="_blank"
                  className="a-grey-1"
                >
                  Chromatic
                </a>
              </li>
              <li>
                <a
                  href="https://gulpjs.com"
                  rel="noreferrer"
                  target="_blank"
                  className="a-grey-1"
                >
                  Gulp
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

export default Eswiss

import React, { useEffect, useRef } from 'react'
import { Badge, Btn } from 'eswiss'
import BlindFrame from '../../../components/Blind/BlindFrame'
import { getProjectData } from '../../../../common/data/project'
import {
  setupBlindObservers,
  useInitAnim,
} from '../../../components/Blind/initAnimUtil'
import { useHeadDataEffect } from '../../../util'
import NPMIcon from '../../../assets/icons/npm.svg'
import { MarkGithubIcon } from '@primer/octicons-react'

const { tags } = getProjectData('checkpoint')

/**
 * Checkpoint.js Project Page
 */
const Checkpoint = () => {
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
          Checkpoint
          <br className="title-br" aria-hidden="true" />
          .js
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
            <strong>Checkpoint.js</strong> is an open source data validation and
            transformation&nbsp;library.
          </p>
          <p>
            This project was originally created to validate and transform data
            during application&nbsp;runtime.
          </p>
        </section>
        <a
          href="https://github.com/mattlean/checkpointjs"
          rel="noreferrer"
          target="_blank"
        >
          <Btn className="btn-gh">
            <MarkGithubIcon className="btn-icon" /> GitHub
          </Btn>
        </a>
        <a
          href="https://npmjs.com/package/checkpointjs"
          rel="noreferrer"
          target="_blank"
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
            </ul>
          </section>
        </section>
        <section>
          <section>
            <h4>Peer Dependencies</h4>
            <ul>
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
              <li>
                <a
                  href="https://npmjs.com/package/validator"
                  rel="noreferrer"
                  target="_blank"
                  className="a-grey-1"
                >
                  Validator
                </a>
              </li>
            </ul>
          </section>
          <section>
            <h4>License</h4>
            <ul>
              <li>
                <a
                  href="https://github.com/mattlean/checkpointjs/blob/master/LICENSE"
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

export default Checkpoint

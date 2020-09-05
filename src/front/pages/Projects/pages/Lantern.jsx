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
import SSLantern from '../../../assets/projects/lantern.jpg'
import { MarkGithubIcon } from '@primer/octicons-react'

const { company, name, tags } = getProjectData('lantern')

/**
 * Lantern.js Project Page
 */
const Lantern = () => {
  useHeadDataEffect()

  const srStartRef = useRef(null)
  const {
    blindVisibleStates,
    blindStates,
    initAnimComplete,
    observerData,
    runInitAnim,
  } = useInitAnim(8)

  // Setup effect which is only run once
  useEffect(() => {
    // Focus starting element on page load
    if (srStartRef.current) srStartRef.current.focus()

    const observers = setupBlindObservers(
      [0.5, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1],
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
            <strong>Lantern.js</strong> is a simple-to-use, lightweight,
            customizable image lightbox that does not require any external
            dependencies by relying on only native browser APIs and&nbsp;CSS.
          </p>
        </section>
        <a
          href="https://github.com/mattlean/lanternjs"
          rel="noreferrer"
          target="_blank"
        >
          <Btn className="btn-gh">
            <MarkGithubIcon className="btn-icon" /> GitHub
          </Btn>
        </a>
        <a
          href="https://npmjs.com/package/lanternjs"
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
        nodeType="figure"
        delay={blindStates[3].delay}
        duration={0.2}
        observer={observerData[3].observer}
        play={
          initAnimComplete
            ? blindVisibleStates[3].isVisible
            : blindStates[3].play
        }
        className="ss ss-lg project-details-gap"
      >
        <img src={SSLantern} alt="Example of Lantern.js" />
        <figcaption className="c-grey-2">
          Example of open lightbox using&nbsp;Lantern.js
        </figcaption>
      </BlindFrame>
      <BlindFrame
        ref={observerData[4].ref}
        nodeType="h3"
        delay={blindStates[4].delay}
        observer={observerData[4].observer}
        play={
          initAnimComplete
            ? blindVisibleStates[4].isVisible
            : blindStates[4].play
        }
        className="project-details-header"
      >
        Project Details
      </BlindFrame>
      <BlindFrame
        ref={observerData[5].ref}
        nodeType="section"
        className="subgrid-project-details grid c-grey-1"
        delay={blindStates[5].delay}
        observer={observerData[5].observer}
        play={
          initAnimComplete
            ? blindVisibleStates[5].isVisible
            : blindStates[5].play
        }
      >
        <section>
          <section>
            <h4>Released</h4>
            <ul>
              <li>August 25, 2015</li>
            </ul>
          </section>
          <section>
            <h4>Languages</h4>
            <ul>
              <li>JavaScript</li>
              <li>CSS</li>
            </ul>
          </section>
          <section>
            <h4>Tooling</h4>
            <ul>
              <li>
                <a
                  href="https://gruntjs.com"
                  rel="noreferrer"
                  target="_blank"
                  className="a-grey-1"
                >
                  Grunt
                </a>
              </li>
            </ul>
          </section>
        </section>
        <section>
          <section>
            <h4>Updated</h4>
            <ul>
              <li>September 11, 2015</li>
            </ul>
          </section>
          <section>
            <h4>License</h4>
            <ul>
              <li>
                <a
                  href="https://github.com/mattlean/lanternjs/blob/master/LICENSE"
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
        ref={observerData[6].ref}
        nodeType="a"
        href="https://github.com/mattlean/lanternjs"
        rel="noreferrer"
        target="_blank"
        className="btn-option-a"
        delay={blindStates[6].delay}
        observer={observerData[6].observer}
        play={
          initAnimComplete
            ? blindVisibleStates[6].isVisible
            : blindStates[6].play
        }
      >
        <Btn className="btn-gh">
          <MarkGithubIcon className="btn-icon" /> GitHub
        </Btn>
      </BlindFrame>
      <BlindFrame
        ref={observerData[7].ref}
        nodeType="a"
        href="https://npmjs.com/package/lanternjs"
        rel="noreferrer"
        target="_blank"
        className="btn-option-b"
        delay={blindStates[7].delay}
        observer={observerData[7].observer}
        play={
          initAnimComplete
            ? blindVisibleStates[7].isVisible
            : blindStates[7].play
        }
      >
        <Btn outline={true} className="btn-npm">
          <NPMIcon className="btn-icon" /> npm
        </Btn>
      </BlindFrame>
    </>
  )
}

export default Lantern

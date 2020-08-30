import React, { useEffect, useRef } from 'react'
import { Badge, Btn } from 'eswiss'
import { Link } from 'react-router-dom'
import BlindFrame from '../../../../components/Blind/BlindFrame'
import { getProjectData } from '../../../../../common/data/project'
import {
  setupBlindObservers,
  useInitAnim,
} from '../../../../components/Blind/initAnimUtil'
import { useHeadDataEffect } from '../../../../util'
import VidSnake from '../../../../assets/projects/adam/snake.mp4'
import { MarkGithubIcon } from '@primer/octicons-react'

/**
 * Adam Engine Project Page
 */
const Adam = () => {
  useHeadDataEffect()
  const { name, tags } = getProjectData('adam')

  const srStartRef = useRef(null)
  const {
    blindVisibleStates,
    blindStates,
    initAnimComplete,
    observerData,
    runInitAnim,
  } = useInitAnim(7)

  // Setup effect which is only run once
  useEffect(() => {
    // Focus starting element on page load
    if (srStartRef.current) srStartRef.current.focus()

    const observers = setupBlindObservers(
      [0.5, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1],
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
            <strong>Adam Engine</strong> is an open source HTML5 2D game engine
            used to power games and graphical web applications. It supports
            interaction through both mouse and keyboard and&nbsp;touchscreens.
          </p>
          <p>
            The project was used to build{' '}
            <Link to="/projects/crush" className="a-grey-1">
              qPCR Crush
            </Link>
            , an{' '}
            <a
              href="https://biosearchtech.com"
              rel="noreferrer"
              target="_blank"
              className="a-grey-1 txtw-roman"
            >
              LGC Biosearch Technologies
            </a>
            -branded tile matching&nbsp;game.
          </p>
        </section>
        <a
          href="https://github.com/mattlean/adam-engine"
          rel="noreferrer"
          target="_blank"
        >
          <Btn className="btn-gh">
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
        className="vid project-details-gap"
      >
        <video autoPlay controls loop muted>
          <source src={VidSnake} />
        </video>
        <figcaption className="c-grey-2">
          Video of{' '}
          <a
            href="https://en.wikipedia.org/wiki/Snake_(video_game_genre)"
            rel="noreferrer"
            target="_blank"
            className="txtw-roman"
          >
            Snake
          </a>{' '}
          being run on Adam&nbsp;Engine
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
        className="subgrid-project-details grid mb-0 c-grey-1"
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
              <li>August 18, 2014</li>
            </ul>
          </section>
          <section>
            <h4>Languages</h4>
            <ul>
              <li>JavaScript</li>
            </ul>
          </section>
          <section>
            <h4>APIs</h4>
            <ul>
              <li>
                <a
                  href="https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API"
                  rel="noreferrer"
                  target="_blank"
                  className="a-grey-1 txtw-roman"
                >
                  Canvas
                </a>
              </li>
              <li>
                <a
                  href="https://developer.mozilla.org/en-US/docs/Web/API/Touch_events"
                  rel="noreferrer"
                  target="_blank"
                  className="a-grey-1 txtw-roman"
                >
                  Touch Events
                </a>
              </li>
              <li>
                <a
                  href="https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API"
                  rel="noreferrer"
                  target="_blank"
                  className="a-grey-1 txtw-roman"
                >
                  Web Audio
                </a>
              </li>
            </ul>
          </section>
        </section>
        <section>
          <section>
            <h4>Updated</h4>
            <ul>
              <li>January 9, 2016</li>
            </ul>
          </section>
          <section>
            <h4>License</h4>
            <ul>
              <li>
                <a
                  href="https://github.com/mattlean/adam-engine/blob/master/LICENSE"
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
        ref={observerData[6].ref}
        nodeType="a"
        href="https://github.com/mattlean/adam-engine"
        rel="noreferrer"
        target="_blank"
        delay={blindStates[6].delay}
        observer={observerData[6].observer}
        play={
          initAnimComplete
            ? blindVisibleStates[6].isVisible
            : blindStates[6].play
        }
        className="btn-option-a"
      >
        <Btn className="btn-gh">
          <MarkGithubIcon className="btn-icon" /> GitHub
        </Btn>
      </BlindFrame>
    </>
  )
}

export default Adam

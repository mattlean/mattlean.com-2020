import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { Badge } from 'eswiss'
import BlindFrame from '../../../components/Blind/BlindFrame'
import NewBlindFrame from '../../../components/Blind/NewBlindFrame'
import { getProjectData } from '../../../../common/data/project'
import {
  setupBlindObservers,
  useInitAnim,
} from '../../../components/Blind/initAnimUtil'
import { useHeadDataEffect } from '../../../util'
import SSBoard from '../../../assets/projects/crush/board.jpg'
import SSBrowser from '../../../assets/projects/crush/browser.jpg'
import SSStart from '../../../assets/projects/crush/start.jpg'

const { company, name, tags } = getProjectData('crush')

/**
 * qPCR Crush Project Page
 */
const Crush = () => {
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
  }, [])

  return (
    <>
      <NewBlindFrame
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
      </NewBlindFrame>
      <NewBlindFrame
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
      </NewBlindFrame>
      <NewBlindFrame
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
            <strong>qPCR Crush</strong> is a tile-matching game created to
            promote the{' '}
            <a
              href="https://biosearchtech.com"
              rel="noreferrer"
              target="_blank"
              className="a-grey-1 txtw-roman"
            >
              LGC Biosearch Technologies
            </a>{' '}
            brand. It supports play on desktops and mobile devices and includes
            an online, real-time leaderboard system. The game also has a
            specialized iPad version which is exclusively used at convention
            booth promotions. This version includes a raffle system that handles
            player rewards.
          </p>
          <p>
            The project was built with another personal project of mine, a
            browser-based 2D game engine called{' '}
            <Link to="/projects/adam" className="a-grey-1">
              Adam Engine
            </Link>
            .
          </p>
        </section>
      </NewBlindFrame>
      <section className="subgrid-ss-sm">
        <NewBlindFrame
          ref={observerData[3].ref}
          nodeType="figure"
          delay={blindStates[3].delay}
          observer={observerData[3].observer}
          play={
            initAnimComplete
              ? blindVisibleStates[3].isVisible
              : blindStates[3].play
          }
          className="ss ss-sm"
        >
          <img src={SSStart} alt="" />
          <figcaption className="c-grey-2">
            Screenshot of start&nbsp;screen
          </figcaption>
        </NewBlindFrame>
        <NewBlindFrame
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
          <img src={SSBoard} alt="" />
          <figcaption className="c-grey-2">
            Screenshot of tile-matching&nbsp;board
          </figcaption>
        </NewBlindFrame>
      </section>
      <NewBlindFrame
        ref={observerData[5].ref}
        nodeType="figure"
        delay={blindStates[5].delay}
        duration={0.2}
        observer={observerData[5].observer}
        play={
          initAnimComplete
            ? blindVisibleStates[5].isVisible
            : blindStates[5].play
        }
        className="ss ss-lg project-details-gap"
      >
        <img src={SSBrowser} alt="" />
        <figcaption className="c-grey-2">
          qPCR Crush game and leaderboards on the
          qPCR&nbsp;Design&nbsp;Lab&nbsp;microsite
        </figcaption>
      </NewBlindFrame>
      <NewBlindFrame
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
      </NewBlindFrame>
      <NewBlindFrame
        ref={observerData[7].ref}
        nodeType="section"
        className="subgrid-project-details grid mb-0 c-grey-1"
        delay={blindStates[7].delay}
        observer={observerData[7].observer}
        play={
          initAnimComplete
            ? blindVisibleStates[7].isVisible
            : blindStates[7].play
        }
      >
        <section>
          <section>
            <h4>Released</h4>
            <ul>
              <li>October 23, 2014</li>
            </ul>
          </section>
          <section>
            <h4>Collaborators</h4>
            <ul>
              <li>
                <a
                  href="https://thespider.com"
                  rel="noreferrer"
                  target="_blank"
                  className="a-grey-1 txtw-roman"
                >
                  TheSpider
                </a>
              </li>
            </ul>
          </section>
          <section>
            <h4>Languages</h4>
            <ul>
              <li>JavaScript</li>
              <li>
                <a
                  href="https://python.org"
                  rel="noreferrer"
                  target="_blank"
                  className="a-grey-1 txtw-roman"
                >
                  Python
                </a>
              </li>
              <li>CSS</li>
              <li>HTML</li>
            </ul>
          </section>
          <section>
            <h4>Game</h4>
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
              <li>
                <Link to="/projects/adam" className="a-grey-1 txtw-roman">
                  Adam Engine
                </Link>
              </li>
            </ul>
          </section>
        </section>
        <section>
          <section>
            <h4>Updated</h4>
            <p>February 6, 2017</p>
          </section>
          <section>
            <h4>Responsibilities</h4>
            <ul>
              <li>Frontend</li>
              <li>Game Design</li>
              <li>Backend</li>
            </ul>
          </section>
          <section>
            <h4>Backend</h4>
            <ul>
              <li>
                <a
                  href="https://github.com/GoogleCloudPlatform/webapp2"
                  rel="noreferrer"
                  target="_blank"
                  className="a-grey-1 txtw-roman"
                >
                  webapp2
                </a>
              </li>
              <li>
                <a
                  href="https://cloud.google.com/datastore"
                  rel="noreferrer"
                  target="_blank"
                  className="a-grey-1 txtw-roman"
                >
                  Datastore
                </a>
              </li>
              <li>
                <a
                  href="https://palletsprojects.com/p/jinja/"
                  rel="noreferrer"
                  target="_blank"
                  className="a-grey-1 txtw-roman"
                >
                  Jinja
                </a>
              </li>
            </ul>
          </section>
          <section>
            <h4>Frontend</h4>
            <ul>
              <li>
                <a
                  href="https://getbootstrap.com"
                  rel="noreferrer"
                  target="_blank"
                  className="a-grey-1 txtw-roman"
                >
                  Bootstrap
                </a>
              </li>
              <li>
                <a
                  href="https://jquery.com"
                  rel="noreferrer"
                  target="_blank"
                  className="a-grey-1 txtw-roman"
                >
                  jQuery
                </a>
              </li>
            </ul>
          </section>
          <section>
            <h4>Design</h4>
            <ul>
              <li>
                <a
                  href="https://adobe.com/products/photoshop.html"
                  rel="noreferrer"
                  target="_blank"
                  className="a-grey-1 txtw-roman"
                >
                  Photoshop
                </a>
              </li>
              <li>
                <a
                  href="https://adobe.com/products/illustrator.html"
                  rel="noreferrer"
                  target="_blank"
                  className="a-grey-1 txtw-roman"
                >
                  Illustrator
                </a>
              </li>
            </ul>
          </section>
        </section>
      </NewBlindFrame>
    </>
  )
}

export default Crush

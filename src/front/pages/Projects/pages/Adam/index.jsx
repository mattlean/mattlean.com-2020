import React from 'react'
import { Badge, Btn } from 'eswiss'
import { Link } from 'react-router-dom'
import BlindFrame from '../../../../components/Blind/BlindFrame'
import { getProjectData } from '../../../../../common/data/project'
import { useHeadDataEffect } from '../../../../util'
import VidSnake from '../../../../assets/projects/adam/snake.mp4'
import { MarkGithubIcon } from '@primer/octicons-react'

/**
 * Adam Engine Project Page
 */
const Adam = () => {
  useHeadDataEffect()
  const { name, tags } = getProjectData('adam')

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
      <BlindFrame nodeType="figure" className="vid project-details-gap">
        <video autoPlay controls loop muted>
          <source src={`/${VidSnake}`} />
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
      <BlindFrame nodeType="h3" className="project-details-header">
        Project Details
      </BlindFrame>
      <BlindFrame
        nodeType="section"
        className="subgrid-project-details grid c-grey-1"
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
        nodeType="a"
        href="https://github.com/mattlean/adam-engine"
        rel="noreferrer"
        target="_blank"
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

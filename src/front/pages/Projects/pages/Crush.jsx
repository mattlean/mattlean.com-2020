import React from 'react'
import { Link } from 'react-router-dom'
import { Badge } from 'eswiss'
import BlindFrame from '../../../components/Blind/BlindFrame'
import { getProjectData } from '../../../../common/data/project'
import { useHeadDataEffect } from '../../../util'
import SSBoard from '../../../assets/projects/crush/board.jpg'
import SSBrowser from '../../../assets/projects/crush/browser.jpg'
import SSStart from '../../../assets/projects/crush/start.jpg'

/**
 * qPCR Crush Project Page
 */
const Crush = () => {
  useHeadDataEffect()
  const { company, name, tags } = getProjectData('crush')

  return (
    <>
      <BlindFrame nodeType="header" className="cover">
        <h1 className="h-1 md:h-2 sm:h-3">{name}</h1>
        {company && (
          <h2 className="h-4 sm:h-6 c-grey-2 dispw-roman">{company}</h2>
        )}
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
      </BlindFrame>
      <section className="subgrid-ss-sm">
        <BlindFrame nodeType="figure" className="ss ss-sm">
          <img src={SSStart} alt="" />
          <figcaption className="c-grey-2">
            Screenshot of start&nbsp;screen
          </figcaption>
        </BlindFrame>
        <BlindFrame nodeType="figure" className="ss ss-sm">
          <img src={SSBoard} alt="" />
          <figcaption className="c-grey-2">
            Screenshot of tile-matching&nbsp;board
          </figcaption>
        </BlindFrame>
      </section>
      <BlindFrame
        nodeType="figure"
        duration={0.1}
        threshold={0.2}
        className="ss ss-lg project-details-gap"
      >
        <img src={SSBrowser} alt="" />
        <figcaption className="c-grey-2">
          qPCR Crush game and leaderboards on the
          qPCR&nbsp;Design&nbsp;Lab&nbsp;microsite
        </figcaption>
      </BlindFrame>
      <BlindFrame nodeType="h3" className="project-details-header">
        Project Details
      </BlindFrame>
      <BlindFrame
        nodeType="section"
        className="subgrid-project-details grid mb-0 c-grey-1"
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
      </BlindFrame>
    </>
  )
}

export default Crush

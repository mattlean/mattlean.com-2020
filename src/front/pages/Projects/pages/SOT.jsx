import React, { useEffect, useRef } from 'react'
import { Badge, Btn } from 'eswiss'
import { Link } from 'react-router-dom'
import CTA from '../../../components/CTA'
import BlindFrame from '../../../components/Blind/BlindFrame'
import { getProjectData } from '../../../../common/data/project'
import { ROUTE_PREFIX } from '../../../../common/data/route/blog'
import {
  setupBlindObservers,
  useInitAnim,
} from '../../../components/Blind/initAnimUtil'
import { useHeadDataEffect } from '../../../util'
import { BookIcon, PlayIcon } from '@primer/octicons-react'
import SSCharts from '../../../assets/projects/sot/charts.jpg'
import SSFullscreen from '../../../assets/projects/sot/fullscreen.jpg'
import SSInstrumentSelection from '../../../assets/projects/sot/instrument-selection.jpg'

const { company, live, tags } = getProjectData('sot')

/**
 * Spectral Overlay Tool Project Page
 */
const SOT = () => {
  useHeadDataEffect()

  const srStartRef = useRef(null)
  const {
    blindVisibleStates,
    blindStates,
    initAnimComplete,
    observerData,
    runInitAnim,
  } = useInitAnim(11)

  // Setup effect which is only run once
  useEffect(() => {
    // Focus starting element on page load
    if (srStartRef.current) srStartRef.current.focus()

    const observers = setupBlindObservers(
      [0.5, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1],
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
          Spectral Overlay&nbsp;Tool
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
            <a
              href="https://biosearchtech.com"
              rel="noreferrer"
              target="_blank"
              className="a-grey-1"
            >
              {company}
            </a>{' '}
            is a biotechnology company that provides products and services for
            genomic analysis in healthcare and agricultural&nbsp;genomics.
          </p>
          <p>
            I worked with them to build the{' '}
            <strong>spectral overlay tool</strong>, a web application that
            visualizes the absorption & emission spectra for common fluorescent
            dyes and quenchers, allowing users to overlay them as multiplexed
            sets according to recommended combinations for each
            qPCR&nbsp;device.
          </p>
        </section>
        <a href={live} rel="noreferrer" target="_blank">
          <Btn className="btn-view-live">
            <PlayIcon className="btn-icon" /> View Live
          </Btn>
        </a>
        <Link to={`${ROUTE_PREFIX}cs-sot`}>
          <Btn outline={true} className="btn-case-study">
            <BookIcon className="btn-icon" /> Case Study
          </Btn>
        </Link>
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
        <img src={SSCharts} alt="" />
        <figcaption className="c-grey-2">
          Main screen for spectral overlay&nbsp;tool
        </figcaption>
      </BlindFrame>
      <BlindFrame
        ref={observerData[4].ref}
        nodeType="section"
        delay={blindStates[4].delay}
        observer={observerData[4].observer}
        play={
          initAnimComplete
            ? blindVisibleStates[4].isVisible
            : blindStates[4].play
        }
        className="subgrid-mid-desc grid"
      >
        <h3 className="h-5">Long-Term Development&nbsp;Lifecycle</h3>
        <p className="txt-7 sm:txt-6 c-grey-1">
          In 2014 I was brought on to port the app from Flash to native browser
          technologies alongside new features. In 2015, Biosearch Technologies
          was acquired by LGC, and the app’s styling was updated to match the
          company’s new branding guidelines. In 2020, the app’s UI was
          completely redesigned alongside new features and
          performance&nbsp;optimizations.
        </p>
        <CTA to="/" type="sm" className="a-primary svg-primary">
          Learn more about the&nbsp;project
        </CTA>
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
        className="ss ss-sm"
      >
        <img src={SSInstrumentSelection} alt="" />
        <figcaption className="c-grey-2">
          Instrument selection that supports filtering of instruments and
          sorting of&nbsp;dyes
        </figcaption>
      </BlindFrame>
      <BlindFrame
        ref={observerData[6].ref}
        nodeType="figure"
        delay={blindStates[6].delay}
        observer={observerData[6].observer}
        play={
          initAnimComplete
            ? blindVisibleStates[6].isVisible
            : blindStates[6].play
        }
        className="ss ss-sm project-details-gap"
      >
        <img src={SSFullscreen} alt="" />
        <figcaption className="c-grey-2">
          Fullscreen mode for a larger view of the&nbsp;charts
        </figcaption>
      </BlindFrame>
      <BlindFrame
        ref={observerData[7].ref}
        nodeType="h3"
        delay={blindStates[7].delay}
        observer={observerData[7].observer}
        play={
          initAnimComplete
            ? blindVisibleStates[7].isVisible
            : blindStates[7].play
        }
        className="project-details-header"
      >
        Project Details
      </BlindFrame>
      <BlindFrame
        ref={observerData[8].ref}
        nodeType="section"
        delay={blindStates[8].delay}
        observer={observerData[8].observer}
        play={
          initAnimComplete
            ? blindVisibleStates[8].isVisible
            : blindStates[8].play
        }
        className="subgrid-project-details grid c-grey-1"
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
                  href="https://www.columnfivemedia.com"
                  rel="noreferrer"
                  target="_blank"
                  className="a-grey-1"
                >
                  Column Five
                </a>
              </li>
              <li>
                <a
                  href="https://thespider.com"
                  rel="noreferrer"
                  target="_blank"
                  className="a-grey-1"
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
                  className="a-grey-1"
                >
                  Python
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
              <li>CSS</li>
              <li>HTML</li>
            </ul>
          </section>
          <section>
            <h4>Dev Dependencies</h4>
            <ul>
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
                  href="https://gruntjs.com"
                  rel="noreferrer"
                  target="_blank"
                  className="a-grey-1"
                >
                  Grunt
                </a>
              </li>
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
            </ul>
          </section>
        </section>
        <section>
          <section>
            <h4>Updated</h4>
            <p>September 1, 2020</p>
          </section>
          <section>
            <h4>Responsibilities</h4>
            <ul>
              <li>Programming</li>
              <li>UI & UX Design</li>
            </ul>
          </section>
          <section>
            <h4>Dependencies</h4>
            <ul>
              <li>
                <a
                  href="https://developers.google.com/chart"
                  rel="noreferrer"
                  target="_blank"
                  className="a-grey-1"
                >
                  Google Charts
                </a>
              </li>
              <li>
                <a
                  href="https://getbootstrap.com"
                  rel="noreferrer"
                  target="_blank"
                  className="a-grey-1"
                >
                  Bootstrap
                </a>
              </li>
              <li>
                <a
                  href="https://jquery.com"
                  rel="noreferrer"
                  target="_blank"
                  className="a-grey-1"
                >
                  jQuery
                </a>
              </li>
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
                  href="https://popper.js.org"
                  rel="noreferrer"
                  target="_blank"
                  className="a-grey-1"
                >
                  Popper.js
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
      <BlindFrame
        ref={observerData[9].ref}
        nodeType="a"
        href={live}
        rel="noreferrer"
        target="_blank"
        delay={blindStates[9].delay}
        observer={observerData[9].observer}
        play={
          initAnimComplete
            ? blindVisibleStates[9].isVisible
            : blindStates[9].play
        }
        className="btn-option-a"
      >
        <Btn className="btn-view-live">
          <PlayIcon className="btn-icon" /> View Live
        </Btn>
      </BlindFrame>
      <BlindFrame
        ref={observerData[10].ref}
        nodeType="Link"
        to={`${ROUTE_PREFIX}cs-sot`}
        delay={blindStates[10].delay}
        observer={observerData[10].observer}
        play={
          initAnimComplete
            ? blindVisibleStates[10].isVisible
            : blindStates[10].play
        }
        className="btn-option-b"
      >
        <Btn outline={true} className="btn-case-study">
          <BookIcon className="btn-icon" /> Case Study
        </Btn>
      </BlindFrame>
    </>
  )
}

export default SOT

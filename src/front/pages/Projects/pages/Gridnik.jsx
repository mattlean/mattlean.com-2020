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
import DCExample from '../../../assets/projects/gridnik/example.jpg'
import LogoGridnik from '../../../assets/projects/gridnik/gridnik-logo.jpg'
import { MarkGithubIcon } from '@primer/octicons-react'

const { company, name, tags } = getProjectData('gridnik')

/**
 * Gridnik Project Page
 */
const Gridnik = () => {
  usePageLoadEffect()

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
            <strong>Gridnik</strong> is an{' '}
            <a
              href="https://adobe.com/products/xd.html"
              rel="noopener noreferrer"
              target="_blank"
              className="a-grey-1"
            >
              Adobe XD
            </a>{' '}
            plugin that extends the program’s grid generation capabilities. It
            enables grids to be subdivided into rows and columns, and allows
            them to be generated over any object: artboards, polygons, circles,
            text, etc. Auto-calculations make sure grids maintain a valid
            composition while parameters are&nbsp;input.
          </p>
          <p>
            The project is named after{' '}
            <a
              href="https://en.wikipedia.org/wiki/Wim_Crouwel"
              rel="noopener noreferrer"
              target="_blank"
              className="a-grey-1"
            >
              Wim Crouwel
            </a>
            , a Dutch graphic designer whose work is rooted in the{' '}
            <a
              href="https://en.wikipedia.org/wiki/International_Typographic_Style"
              rel="noopener noreferrer"
              target="_blank"
              className="a-grey-1"
            >
              Swiss and International Typographic Styles
            </a>
            . He was also known as Gridnik&mdash;a nickname his friends gave to
            him due to his obsession with&nbsp;grids.
          </p>
          <p>
            <em>
              The plugin will be available through the XD Plugin
              Manager&nbsp;soon!
            </em>
          </p>
        </section>
        <a
          href="https://github.com/mattlean/gridnik"
          rel="noopener noreferrer"
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
        className="ss ss-lg"
      >
        <img src={LogoGridnik} alt="Gridnik logo" />
        <figcaption className="c-grey-2">
          The Gridnik logo&mdash;created with a grid generated by the plugin.
          Inspired by{' '}
          <a
            href="https://sfmoma.org/artwork/2015.658"
            rel="noopener noreferrer"
            target="_blank"
            className="a-grey-2"
          >
            Wim Crouwel’s Vormgevers&nbsp;piece
          </a>
          .
        </figcaption>
      </BlindFrame>
      <BlindFrame
        ref={observerData[4].ref}
        nodeType="figure"
        delay={blindStates[4].delay}
        duration={0.2}
        observer={observerData[4].observer}
        play={
          initAnimComplete
            ? blindVisibleStates[4].isVisible
            : blindStates[4].play
        }
        className="ss ss-lg project-details-gap"
      >
        <img src={DCExample} alt="Grid example created with Gridnik" />
        <figcaption className="c-grey-2">
          A Gridnik-generated grid being used to compose the{' '}
          <Link to="/about" className="a-grey-2">
            “About” page
          </Link>{' '}
          on&nbsp;
          <Link to={`${ROUTE_PREFIX}ml2020`} className="a-grey-2">
            MattLean.com
          </Link>
        </figcaption>
      </BlindFrame>
      <BlindFrame
        ref={observerData[5].ref}
        nodeType="h3"
        delay={blindStates[5].delay}
        observer={observerData[5].observer}
        play={
          initAnimComplete
            ? blindVisibleStates[5].isVisible
            : blindStates[5].play
        }
        className="project-details-header"
      >
        Project Details
      </BlindFrame>
      <BlindFrame
        ref={observerData[6].ref}
        nodeType="section"
        className="subgrid-project-details grid c-grey-1"
        delay={blindStates[6].delay}
        observer={observerData[6].observer}
        play={
          initAnimComplete
            ? blindVisibleStates[6].isVisible
            : blindStates[6].play
        }
      >
        <section>
          <section>
            <h4>Languages</h4>
            <ul>
              <li>JavaScript</li>
              <li>CSS</li>
            </ul>
          </section>
          <section>
            <h4>Dependencies</h4>
            <ul>
              <a
                href="https://reactjs.org"
                rel="noopener noreferrer"
                target="_blank"
                className="a-grey-1"
              >
                React
              </a>
            </ul>
          </section>
        </section>
        <section>
          <section>
            <h4>Tooling</h4>
            <ul>
              <li>
                <a
                  href="https://jestjs.io"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="a-grey-1"
                >
                  Jest
                </a>
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
      </BlindFrame>
      <BlindFrame
        ref={observerData[7].ref}
        nodeType="a"
        href="https://github.com/mattlean/gridnik"
        rel="noopener noreferrer"
        target="_blank"
        className="btn-option-a"
        delay={blindStates[7].delay}
        observer={observerData[7].observer}
        play={
          initAnimComplete
            ? blindVisibleStates[7].isVisible
            : blindStates[7].play
        }
      >
        <Btn className="btn-gh">
          <MarkGithubIcon className="btn-icon" /> GitHub
        </Btn>
      </BlindFrame>
    </>
  )
}

export default Gridnik

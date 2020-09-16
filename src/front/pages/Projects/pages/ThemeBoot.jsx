import React, { useEffect, useRef } from 'react'
import { Badge, Btn } from 'eswiss'
import BlindFrame from '../../../components/Blind/BlindFrame'
import { getProjectData } from '../../../../common/data/project'
import {
  setupBlindObservers,
  useInitAnim,
} from '../../../components/Blind/initAnimUtil'
import { usePageLoadEffect } from '../../../util'
import SSFAQ from '../../../assets/projects/themeboot/faq-mobile.jpg'
import SSLocation from '../../../assets/projects/themeboot/location.jpg'
import SSFront from '../../../assets/projects/themeboot/front.jpg'
import SSFrontMobile from '../../../assets/projects/themeboot/front-mobile.jpg'
import { MarkGithubIcon } from '@primer/octicons-react'

const { company, name, tags } = getProjectData('themeboot')

/**
 * ThemeBoot Project Page
 */
const ThemeBoot = () => {
  usePageLoadEffect()

  const srStartRef = useRef(null)
  const {
    blindVisibleStates,
    blindStates,
    initAnimComplete,
    observerData,
    runInitAnim,
  } = useInitAnim(10)

  // Setup effect which is only run once
  useEffect(() => {
    // Focus starting element on page load
    if (srStartRef.current) srStartRef.current.focus()

    const observers = setupBlindObservers(
      [0.5, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1],
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
            <strong>ThemeBoot</strong> is a{' '}
            <a
              href="https://getbootstrap.com"
              rel="noreferrer"
              target="_blank"
              className="a-grey-1"
            >
              Bootstrap
            </a>
            -powered website layout built for use as a{' '}
            <a
              href="https://wordpress.org"
              rel="noreferrer"
              target="_blank"
              className="a-grey-1"
            >
              WordPress
            </a>{' '}
            theme or a static HTML and CSS&nbsp;template.
          </p>
        </section>
        <a
          href="https://github.com/mattlean/themeboot"
          rel="noreferrer"
          target="_blank"
        >
          <Btn className="btn-github">
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
        <img src={SSFront} alt="ThemeBoot frontpage" />
        <figcaption className="c-grey-2">Frontpage example</figcaption>
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
        className="ss ss-lg"
      >
        <img src={SSLocation} alt="ThemeBoot regular page" />
        <figcaption className="c-grey-2">Regular page&nbsp;example</figcaption>
      </BlindFrame>
      <section className="multicol-ss project-details-gap">
        <BlindFrame
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
          className="ss ss-sm"
        >
          <img
            src={SSFrontMobile}
            alt="ThemeBoot frontpage being viewed on mobile"
          />
          <figcaption className="c-grey-2">
            Frontpage example being viewed on a mobile&nbsp;device
          </figcaption>
        </BlindFrame>
        <BlindFrame
          ref={observerData[6].ref}
          nodeType="figure"
          delay={blindStates[6].delay}
          duration={0.2}
          observer={observerData[6].observer}
          play={
            initAnimComplete
              ? blindVisibleStates[6].isVisible
              : blindStates[6].play
          }
          className="ss ss-sm"
        >
          <img
            src={SSFAQ}
            alt="ThemeBoot regular page being viewed on mobile"
          />
          <figcaption className="c-grey-2">
            Regular page example being viewed on a mobile&nbsp;device
          </figcaption>
        </BlindFrame>
      </section>
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
        className="subgrid-project-details grid c-grey-1"
        delay={blindStates[8].delay}
        observer={observerData[8].observer}
        play={
          initAnimComplete
            ? blindVisibleStates[8].isVisible
            : blindStates[8].play
        }
      >
        <section>
          <section>
            <h4>Released</h4>
            <ul>
              <li>Oct 29, 2014</li>
            </ul>
          </section>
          <section>
            <h4>Languages</h4>
            <ul>
              <li>
                <a
                  href="https://php.net"
                  rel="noreferrer"
                  target="_blank"
                  className="a-grey-1"
                >
                  PHP
                </a>
              </li>
              <li>JavaScript</li>
              <li>CSS</li>
              <li>HTML</li>
            </ul>
          </section>
        </section>
        <section>
          <section>
            <h4>Updated</h4>
            <p>May 22, 2016</p>
          </section>
          <section>
            <h4>Dependencies</h4>
            <ul>
              <li>
                <a
                  href="https://wordpress.org"
                  rel="noreferrer"
                  target="_blank"
                  className="a-grey-1"
                >
                  WordPress
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
                  href="https://mysql.com"
                  rel="noreferrer"
                  target="_blank"
                  className="a-grey-1"
                >
                  MySQL
                </a>
              </li>
            </ul>
          </section>
          <section>
            <h4>License</h4>
            <ul>
              <li>
                <a
                  href="https://github.com/mattlean/themeboot/blob/master/LICENSE"
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
        ref={observerData[9].ref}
        nodeType="a"
        href="https://github.com/mattlean/themeboot"
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
        <Btn className="btn-github">
          <MarkGithubIcon className="btn-icon" /> GitHub
        </Btn>
      </BlindFrame>
    </>
  )
}

export default ThemeBoot

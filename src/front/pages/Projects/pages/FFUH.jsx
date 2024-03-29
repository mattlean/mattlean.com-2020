import React, { useEffect, useRef } from 'react'
import { Badge, Btn } from 'eswiss'
import BlindFrame from '../../../components/Blind/BlindFrame'
import { getProjectData } from '../../../../common/data/project'
import {
  setupBlindObservers,
  useInitAnim,
} from '../../../components/Blind/initAnimUtil'
import { usePageLoadEffect } from '../../../util'
import { MarkGithubIcon } from '@primer/octicons-react'

const { name, tags } = getProjectData('ffuh')

/**
 * express-ffuh Project Page
 */
const FFUH = () => {
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
            <strong>express-ffuh</strong> is an{' '}
            <a
              href="https://expressjs.com"
              rel="noopener noreferrer"
              target="_blank"
              className="a-grey-1"
            >
              Express
            </a>{' '}
            middleware that handles file uploading to{' '}
            <a
              href="https://aws.amazon.com/s3"
              rel="noopener noreferrer"
              target="_blank"
              className="a-grey-1"
            >
              Amazon Simple Storage Service (S3)
            </a>{' '}
            and to the server’s local file system. <em>FFUH</em> stands for{' '}
            <em>flexible file upload handler</em>. It’s pronounced like{' '}
            <a
              href="https://en.wikipedia.org/wiki/Pho"
              rel="noopener noreferrer"
              target="_blank"
              className="a-grey-1"
            >
              pho
            </a>{' '}
            which is a bowl of Vietnamese noodle soup. (This is probably not the
            best phonetic analogy since people mispronounce
            pho&nbsp;a&nbsp;lot.)
          </p>
          <p>
            This middleware is useful if you need to support uploading to both
            S3 and the local file system for your project. The most common
            scenario is when you want to upload to the local file system when
            the server is running in a development environment and then upload
            to S3 when a server is running in the production environment. This
            helps keep uploads working when developing offline while saving some
            costs from hosting on an extra development S3&nbsp;bucket.
          </p>
        </section>
        <a
          href="https://github.com/mattlean/express-ffuh"
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
                  rel="noopener noreferrer"
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
            <h4>Peer Dependencies</h4>
            <ul>
              <li>
                <a
                  href="https://aws.amazon.com/tools"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="a-grey-1"
                >
                  AWS SDK
                </a>
              </li>
              <li>
                <a
                  href="https://expressjs.com"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="a-grey-1"
                >
                  Express
                </a>
              </li>
              <li>
                <a
                  href="https://npmjs.com/package/formidable"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="a-grey-1"
                >
                  formidable
                </a>
              </li>
              <li>
                <a
                  href="https://npmjs.com/package/uuid"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="a-grey-1"
                >
                  UUID
                </a>
              </li>
            </ul>
          </section>
        </section>
        <section>
          <section>
            <h4>Testing</h4>
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
            </ul>
          </section>
          <section>
            <h4>License</h4>
            <ul>
              <li>
                <a
                  href="https://github.com/mattlean/express-ffuh/blob/master/LICENSE"
                  rel="noopener noreferrer"
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

export default FFUH

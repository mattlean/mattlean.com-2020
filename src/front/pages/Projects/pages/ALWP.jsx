import React, { useEffect } from 'react'
import { Badge, Btn } from 'eswiss'
import BlindFrame from '../../../components/Blind/BlindFrame'
import NewBlindFrame from '../../../components/Blind/NewBlindFrame'
import { getProjectData } from '../../../../common/data/project'
import {
  setupBlindObservers,
  useInitAnim,
} from '../../../components/Blind/initAnimUtil'
import { useHeadDataEffect } from '../../../util'
import NPMIcon from '../../../assets/icons/npm.svg'
import { MarkGithubIcon } from '@primer/octicons-react'

/**
 * Asset List Webpack Plugin Project Page
 */
const ALWP = () => {
  useHeadDataEffect()
  const { name, tags } = getProjectData('alwp')

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
    if (observerData[0].ref.current) observerData[0].ref.current.focus()

    const observers = setupBlindObservers(
      [0.5, 0.1, 0.1, 0.1, 0.1],
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
        <h1 className="h-1 md:h-2 sm:h-3">{name}</h1>
        <ul className="badge-list">
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
            <strong>Asset List Webpack Plugin</strong> is an open source{' '}
            <a
              href="https://expressjs.com"
              rel="noreferrer"
              target="_blank"
              className="a-grey-1 txtw-roman"
            >
              webpack
            </a>{' '}
            plugin outputs a simple list of generated assets with your webpack
            bundle. The format of the list can be changed with various
            different&nbsp;options.
          </p>
          <p>
            This plugin was originally created for dynamically handling frontend
            bundles on the backend, but it can be useful for other purposes such
            as bundle&nbsp;debugging.
          </p>
        </section>
        <a
          href="https://github.com/mattlean/asset-list-webpack-plugin"
          rel="noreferrer"
          target="_blank"
        >
          <Btn className="btn-gh">
            <MarkGithubIcon className="btn-icon" /> GitHub
          </Btn>
        </a>
        <a
          href="https://npmjs.com/package/asset-list-webpack-plugin"
          rel="noreferrer"
          target="_blank"
        >
          <Btn outline={true} className="btn-npm">
            <NPMIcon className="btn-icon" /> npm
          </Btn>
        </a>
      </NewBlindFrame>
      <NewBlindFrame
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
      </NewBlindFrame>
      <NewBlindFrame
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
            <h4>Released</h4>
            <ul>
              <li>October 16, 2018</li>
            </ul>
          </section>
          <section>
            <h4>Languages</h4>
            <ul>
              <li>JavaScript</li>
            </ul>
          </section>
          <section>
            <h4>Peer Dependencies</h4>
            <ul>
              <li>
                <a
                  href="https://webpack.js.org"
                  rel="noreferrer"
                  target="_blank"
                  className="a-grey-1 txtw-roman"
                >
                  webpack
                </a>
              </li>
            </ul>
          </section>
        </section>
        <section>
          <section>
            <h4>Updated</h4>
            <ul>
              <li>January 14, 2019</li>
            </ul>
          </section>
          <section>
            <h4>License</h4>
            <ul>
              <li>
                <a
                  href="https://github.com/mattlean/asset-list-webpack-plugin/blob/master/LICENSE"
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
      </NewBlindFrame>
    </>
  )
}

export default ALWP

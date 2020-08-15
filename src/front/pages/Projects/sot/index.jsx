import React from 'react'
import { Badge, Btn } from 'eswiss'
import CTA from '../../../components/CTA'
import BlindFrame from '../../../components/Blind/BlindFrame'
import { getProjectData } from '../../../../common/data/project'
import { useHeadDataEffect } from '../../../util'
import { BookIcon, PlayIcon } from '@primer/octicons-react'
import SSCharts from '../../../assets/ss/charts.jpg'
import SSFullscreen from '../../../assets/ss/fullscreen.jpg'
import SSInstrumentSelection from '../../../assets/ss/instrument-selection.jpg'

/**
 * Spectral Overlay Tool Project Page
 */
const SOT = () => {
  useHeadDataEffect()
  const { company, tags } = getProjectData('sot')

  return (
    <>
      <BlindFrame nodeType="header" className="cover">
        <h1 className="h-1 md:h-2 sm:h-3">Spectral Overlay&nbsp;Tool</h1>
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
            I worked with them to build the spectral overlay tool, a web
            application that visualizes the absorption & emission spectra for
            common fluorescent dyes and quenchers, allowing users to overlay
            them as multiplexed sets according to recommended combinations for
            each qPCR&nbsp;device.
          </p>
        </section>
        <a
          href="https://biosearchtech.com/qpcr-multiplex-spectral-overlay-tool"
          rel="noreferrer"
          target="_blank"
          className="btn-view-live"
        >
          <Btn>
            <PlayIcon className="btn-icon" /> View Live
          </Btn>
        </a>
        <Btn outline={true} className="btn-case-study">
          <BookIcon className="btn-icon" /> Case Study
        </Btn>
      </BlindFrame>
      <BlindFrame nodeType="figure" className="ss ss-lg">
        <img src={`/${SSCharts}`} alt="" />
        <figcaption className="c-grey-2">
          Main screen for spectral overlay tool
        </figcaption>
      </BlindFrame>
      <BlindFrame nodeType="section" className="subgrid-mid-desc grid">
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
          Learn more about the project
        </CTA>
      </BlindFrame>
      <BlindFrame nodeType="figure" className="ss ss-sm">
        <img src={`/${SSInstrumentSelection}`} alt="" />
        <figcaption className="c-grey-2">
          Instrument selection that supports filtering of instruments and
          sorting of&nbsp;dyes
        </figcaption>
      </BlindFrame>
      <BlindFrame nodeType="figure" className="ss ss-sm">
        <img src={`/${SSFullscreen}`} alt="" />
        <figcaption className="c-grey-2">
          Fullscreen mode for a larger view of the&nbsp;charts
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
            <h4>Last Updated</h4>
            <p>2020</p>
          </section>
          <section>
            <h4>Collaborators</h4>
            <ul>
              <li>
                <a
                  href="https://www.columnfivemedia.com"
                  rel="noreferrer"
                  target="_blank"
                  className="a-grey-1 txtw-roman"
                >
                  Column Five
                </a>
              </li>
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
              <li>HTML</li>
              <li>
                <a
                  href="https://sass-lang.com"
                  rel="noreferrer"
                  target="_blank"
                  className="a-grey-1 txtw-roman"
                >
                  Sass
                </a>
              </li>
              <li>CSS</li>
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
                  className="a-grey-1 txtw-roman"
                >
                  webpack
                </a>
              </li>
              <li>
                <a
                  href="https://gruntjs.com"
                  rel="noreferrer"
                  target="_blank"
                  className="a-grey-1 txtw-roman"
                >
                  Grunt
                </a>
              </li>
              <li>
                <a
                  href="https://nodejs.org"
                  rel="noreferrer"
                  target="_blank"
                  className="a-grey-1 txtw-roman"
                >
                  Node.js
                </a>
              </li>
            </ul>
          </section>
        </section>
        <section>
          <section>
            <h4>Released</h4>
            <ul>
              <li>October 23, 2014</li>
            </ul>
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
                  className="a-grey-1 txtw-roman"
                >
                  Google Charts
                </a>
              </li>
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
              <li>
                <a
                  href="https://lodash.com"
                  rel="noreferrer"
                  target="_blank"
                  className="a-grey-1 txtw-roman"
                >
                  Lodash
                </a>
              </li>
              <li>
                <a
                  href="https://popper.js.org"
                  rel="noreferrer"
                  target="_blank"
                  className="a-grey-1 txtw-roman"
                >
                  Popper.js
                </a>
              </li>
            </ul>
          </section>
        </section>
      </BlindFrame>
      <BlindFrame nodeType="section" className="btn-view-live">
        <Btn>
          <PlayIcon className="btn-icon" /> View Live
        </Btn>
      </BlindFrame>
      <BlindFrame nodeType="section" className="btn-case-study">
        <Btn className="div" outline={true}>
          <BookIcon className="btn-icon" /> Case Study
        </Btn>
      </BlindFrame>
    </>
  )
}

export default SOT

import React from 'react'
import { Badge, Btn } from 'eswiss'
import { Link } from 'react-router-dom'
import BlindFrame from '../../../components/Blind/BlindFrame'
import { getProjectData } from '../../../../common/data/project'
import { useHeadDataEffect } from '../../../util'
import { MarkGithubIcon } from '@primer/octicons-react'

/**
 * Project Owl Project Page
 */
const Owl = () => {
  useHeadDataEffect()
  const { name, tags } = getProjectData('owl')

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
            <strong>Project Owl</strong> is a personal scheduling and finance
            management application. It has an{' '}
            <a
              href="https://android.com"
              rel="noreferrer"
              target="_blank"
              className="a-grey-1 txtw-roman"
            >
              Android
            </a>{' '}
            mobile app and web app that connects to a server in the{' '}
            <a
              href="https://cloud.google.com"
              rel="noreferrer"
              target="_blank"
              className="a-grey-1 txtw-roman"
            >
              Google Cloud
            </a>
            .
          </p>
          <p>
            This project originally released as a school assignment, but was
            eventually discontinued. The overall concept continues on as{' '}
            <Link to="/projects/recha" className="a-grey-1">
              Recha
            </Link>
            .
          </p>
        </section>
        <a
          href="https://github.com/mattlean/project-owl"
          rel="noreferrer"
          target="_blank"
        >
          <Btn className="btn-gh">
            <MarkGithubIcon className="btn-icon" /> Server
          </Btn>
        </a>
        <a
          href="https://github.com/mattlean/project-owl_android"
          rel="noreferrer"
          target="_blank"
        >
          <Btn outline={true} className="btn-gh">
            <MarkGithubIcon className="btn-icon" /> Mobile
          </Btn>
        </a>
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
              <li>June 9, 2014</li>
            </ul>
          </section>
          <section>
            <h4>Languages</h4>
            <ul>
              <li>
                <a
                  href="https://java.com"
                  rel="noreferrer"
                  target="_blank"
                  className="a-grey-1 txtw-roman"
                >
                  Java
                </a>
              </li>
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
              <li>JavaScript</li>
              <li>SQL</li>
              <li>CSS</li>
              <li>HTML</li>
            </ul>
          </section>
          <section>
            <h4>Mobile</h4>
            <ul>
              <li>
                <a
                  href="https://android.com"
                  rel="noreferrer"
                  target="_blank"
                  className="a-grey-1 txtw-roman"
                >
                  Android
                </a>
              </li>
            </ul>
          </section>
          <section>
            <h4>Tooling</h4>
            <ul>
              <li>
                <a
                  href="http://browserify.org"
                  rel="noreferrer"
                  target="_blank"
                  className="a-grey-1 txtw-roman"
                >
                  Browserify
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/andreypopp/reactify"
                  rel="noreferrer"
                  target="_blank"
                  className="a-grey-1 txtw-roman"
                >
                  reactify
                </a>
              </li>
              <li>
                <a
                  href="https://gulpjs.com"
                  rel="noreferrer"
                  target="_blank"
                  className="a-grey-1 txtw-roman"
                >
                  Gulp
                </a>
              </li>
            </ul>
          </section>
        </section>
        <section>
          <section>
            <h4>Updated</h4>
            <ul>
              <li>October 3, 2015</li>
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
            <h4>Web Frontend</h4>
            <ul>
              <li>
                <a
                  href="https://reactjs.org"
                  rel="noreferrer"
                  target="_blank"
                  className="a-grey-1 txtw-roman"
                >
                  React
                </a>
              </li>
              <li>
                <a
                  href="https://facebook.github.io/flux"
                  rel="noreferrer"
                  target="_blank"
                  className="a-grey-1 txtw-roman"
                >
                  Flux
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/strml/react-router-component"
                  rel="noreferrer"
                  target="_blank"
                  className="a-grey-1 txtw-roman"
                >
                  React Router Component
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/async-library/react-async"
                  rel="noreferrer"
                  target="_blank"
                  className="a-grey-1 txtw-roman"
                >
                  React Async
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
            </ul>
          </section>
          <section>
            <h4>License</h4>
            <ul>
              <li>
                <a
                  href="https://github.com/mattlean/project-owl/blob/master/LICENSE"
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
    </>
  )
}

export default Owl

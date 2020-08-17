import React from 'react'
import { Badge, Btn } from 'eswiss'
import BlindFrame from '../../../components/Blind/BlindFrame'
import { getProjectData } from '../../../../common/data/project'
import { useHeadDataEffect } from '../../../util'
import NPMIcon from '../../../assets/npm.svg'
import { MarkGithubIcon } from '@primer/octicons-react'

/**
 * Checkpoint.js Project Page
 */
const Checkpoint = () => {
  useHeadDataEffect()
  const { name, tags } = getProjectData('checkpoint')

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
            <strong>Checkpoint.js</strong> is an open source data validation and
            transformation library. It works .
          </p>
          <p>
            This project was originally created to validate and transform data
            during application runtime.
          </p>
        </section>
        <a
          href="https://github.com/mattlean/checkpointjs"
          rel="noreferrer"
          target="_blank"
          className="btn-view-gh"
        >
          <Btn>
            <MarkGithubIcon className="btn-icon" /> GitHub
          </Btn>
        </a>
        <a
          href="https://npmjs.com/package/checkpointjs"
          rel="noreferrer"
          target="_blank"
          className="btn-view-npm"
        >
          <Btn outline={true}>
            <NPMIcon className="btn-icon" /> npm
          </Btn>
        </a>
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
            <h4>Languages</h4>
            <ul>
              <li>
                <a
                  href="https://www.typescriptlang.org"
                  rel="noreferrer"
                  target="_blank"
                  className="a-grey-1 txtw-roman"
                >
                  TypeScript
                </a>
              </li>
              <li>JavaScript</li>
            </ul>
          </section>
          <section>
            <h4>Dev Dependencies</h4>
            <ul>
              <li>
                <a
                  href="https://jestjs.io"
                  rel="noreferrer"
                  target="_blank"
                  className="a-grey-1 txtw-roman"
                >
                  Jest
                </a>
              </li>
            </ul>
          </section>
        </section>
        <section>
          <section>
            <h4>Peer Dependencies</h4>
            <ul>
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
                  href="https://npmjs.com/package/validator"
                  rel="noreferrer"
                  target="_blank"
                  className="a-grey-1 txtw-roman"
                >
                  Validator
                </a>
              </li>
            </ul>
          </section>
          <section>
            <h4>License</h4>
            <ul>
              <li>
                <a
                  href="https://github.com/mattlean/checkpointjs/blob/master/LICENSE"
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

export default Checkpoint

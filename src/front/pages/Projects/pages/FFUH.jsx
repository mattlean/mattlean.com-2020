import React from 'react'
import { Badge, Btn } from 'eswiss'
import BlindFrame from '../../../components/Blind/BlindFrame'
import { getProjectData } from '../../../../common/data/project'
import { useHeadDataEffect } from '../../../util'
import { MarkGithubIcon } from '@primer/octicons-react'

/**
 * express-ffuh Project Page
 */
const FFUH = () => {
  useHeadDataEffect()
  const { name, tags } = getProjectData('ffuh')

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
            <strong>express-ffuh</strong> is an open source{' '}
            <a
              href="https://expressjs.com"
              rel="noreferrer"
              target="_blank"
              className="a-grey-1"
            >
              Express
            </a>{' '}
            middleware that handles file uploading to{' '}
            <a
              href="https://aws.amazon.com/s3"
              rel="noreferrer"
              target="_blank"
              className="a-grey-1"
            >
              Amazon Simple Storage Service (S3)
            </a>{' '}
            and to the server’s local file system. <em>FFUH</em> stands for{' '}
            <em>flexible file upload handler</em>. It’s pronounced like{' '}
            <a
              href="https://wikipedia.org/wiki/Pho"
              rel="noreferrer"
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
          rel="noreferrer"
          target="_blank"
        >
          <Btn className="btn-gh">
            <MarkGithubIcon className="btn-icon" /> GitHub
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
            <h4>Peer Dependencies</h4>
            <ul>
              <li>
                <a
                  href="https://aws.amazon.com/tools"
                  rel="noreferrer"
                  target="_blank"
                  className="a-grey-1 txtw-roman"
                >
                  AWS SDK
                </a>
              </li>
              <li>
                <a
                  href="https://npmjs.com/package/formidable"
                  rel="noreferrer"
                  target="_blank"
                  className="a-grey-1 txtw-roman"
                >
                  formidable
                </a>
              </li>
              <li>
                <a
                  href="https://npmjs.com/package/uuid"
                  rel="noreferrer"
                  target="_blank"
                  className="a-grey-1 txtw-roman"
                >
                  UUID
                </a>
              </li>
            </ul>
          </section>
        </section>
        <section>
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
          <section>
            <h4>License</h4>
            <ul>
              <li>
                <a
                  href="https://github.com/mattlean/express-ffuh/blob/master/LICENSE"
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

export default FFUH

import React, { useEffect, useRef } from 'react'
import { Badge, Btn } from 'eswiss'
import { Link } from 'react-router-dom'
import BlindFrame from '../../../components/Blind/BlindFrame'
import CTA from '../../../components/CTA'
import { getProjectData } from '../../../../common/data/project'
import { ROUTE_PREFIX as BLOG_PREFIX } from '../../../../common/data/route/blog'
import { ROUTE_PREFIX as PROJECT_PREFIX } from '../../../../common/data/route/project'
import {
  setupBlindObservers,
  useInitAnim,
} from '../../../components/Blind/initAnimUtil'
import { usePageLoadEffect } from '../../../util'
import SSBlogPost from '../../../assets/projects/lean-space/blog-post.jpg'
import SSBlogPostMobile from '../../../assets/projects/lean-space/blog-post-mobile.jpg'
import SSWork from '../../../assets/projects/lean-space/work.jpg'
import SSWorkMobile from '../../../assets/projects/lean-space/work-mobile.jpg'
import { BookIcon, MarkGithubIcon, PlayIcon } from '@primer/octicons-react'

const { company, live, name, tags } = getProjectData('lean-space')

/**
 * Lean Space Project Page
 */
const LeanSpace = () => {
  usePageLoadEffect()

  const srStartRef = useRef(null)
  const {
    blindVisibleStates,
    blindStates,
    initAnimComplete,
    observerData,
    runInitAnim,
  } = useInitAnim(13)

  // Setup effect which is only run once
  useEffect(() => {
    // Focus starting element on page load
    if (srStartRef.current) srStartRef.current.focus()

    const observers = setupBlindObservers(
      [0.5, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1],
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
            <strong>Lean Space</strong> was my personal website from
            2015&ndash;2020. It was made as a portfolio to showcase my work and
            a blog to share my&nbsp;thoughts.
          </p>
        </section>
        <Link
          to={`${BLOG_PREFIX}cs-lean-space`}
          className="btn-option-a btn-triple-group"
        >
          <Btn className="btn-case-study">
            <BookIcon className="btn-icon" /> Case Study
          </Btn>
        </Link>
        <a
          href={live}
          rel="noreferrer"
          target="_blank"
          className="btn-option-b btn-triple-group"
        >
          <Btn outline={true} className="btn-view-live">
            <PlayIcon className="btn-icon" /> View Live
          </Btn>
        </a>
        <a
          href="https://github.com/mattlean/lean-space"
          rel="noreferrer"
          target="_blank"
          className="btn-option-c btn-triple-group"
        >
          <Btn outline={true} className="btn-gh">
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
        <img src={SSWork} alt="Lean Space work page" />
        <figcaption className="c-grey-2">
          Work page showcasing&nbsp;projects
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
        className="ss ss-lg"
      >
        <img src={SSBlogPost} alt="Lean Space blog post" />
        <figcaption className="c-grey-2">
          First post written on the&nbsp;blog
        </figcaption>
      </BlindFrame>
      <BlindFrame
        ref={observerData[5].ref}
        nodeType="section"
        delay={blindStates[5].delay}
        observer={observerData[5].observer}
        play={
          initAnimComplete
            ? blindVisibleStates[5].isVisible
            : blindStates[5].play
        }
        className="subgrid-mid-desc grid"
      >
        <h3 className="h-5">My Personal Brand in 2015</h3>
        <p className="txt-7 sm:txt-6 c-grey-1">
          Lean Space was created in 2015 to demonstrate my abilities as new
          graduate. All of the code was written using vanilla JavaScript and
          Sass with an emphasis on usage of native browser APIs rather than 3rd
          party&nbsp;libraries.
        </p>
        <CTA
          to={`${BLOG_PREFIX}cs-lean-space`}
          type="sm"
          className="a-primary svg-primary"
        >
          Learn more about the&nbsp;project
        </CTA>
      </BlindFrame>
      <section className="multicol-ss project-details-gap">
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
          <img src={SSWorkMobile} alt="Lean Space work page on mobile" />
          <figcaption className="c-grey-2">
            Work page showcasing projects being viewed on a mobile&nbsp;device
          </figcaption>
        </BlindFrame>
        <BlindFrame
          ref={observerData[7].ref}
          nodeType="figure"
          delay={blindStates[7].delay}
          duration={0.2}
          observer={observerData[7].observer}
          play={
            initAnimComplete
              ? blindVisibleStates[7].isVisible
              : blindStates[7].play
          }
          className="ss ss-sm"
        >
          <img src={SSBlogPostMobile} alt="Lean Space blog post on mobile" />
          <figcaption className="c-grey-2">
            First post written on the blog being viewed on a mobile&nbsp;device
          </figcaption>
        </BlindFrame>
      </section>
      <BlindFrame
        ref={observerData[8].ref}
        nodeType="h3"
        delay={blindStates[8].delay}
        observer={observerData[8].observer}
        play={
          initAnimComplete
            ? blindVisibleStates[8].isVisible
            : blindStates[8].play
        }
        className="project-details-header"
      >
        Project Details
      </BlindFrame>
      <BlindFrame
        ref={observerData[9].ref}
        nodeType="section"
        delay={blindStates[9].delay}
        observer={observerData[9].observer}
        play={
          initAnimComplete
            ? blindVisibleStates[9].isVisible
            : blindStates[9].play
        }
        className="subgrid-project-details grid c-grey-1"
      >
        <section>
          <section>
            <h4>Released</h4>
            <ul>
              <li>Aug 31, 2015</li>
            </ul>
          </section>
          <section>
            <h4>Languages</h4>
            <ul>
              <li>JavaScript</li>
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
              <li>
                <a
                  href="https://www.ruby-lang.org/en"
                  rel="noreferrer"
                  target="_blank"
                  className="a-grey-1"
                >
                  Ruby
                </a>
              </li>
            </ul>
          </section>
          <section>
            <h4>Tooling</h4>
            <ul>
              <a
                href="https://gruntjs.com"
                rel="noreferrer"
                target="_blank"
                className="a-grey-1"
              >
                Grunt
              </a>
            </ul>
          </section>
        </section>
        <section>
          <section>
            <h4>Updated</h4>
            <ul>
              <li>Sept 14, 2015</li>
            </ul>
          </section>
          <section>
            <h4>Dependencies</h4>
            <ul>
              <li>
                <a
                  href="https://masonry.desandro.com"
                  rel="noreferrer"
                  target="_blank"
                  className="a-grey-1"
                >
                  Masonry
                </a>
              </li>
              <li>
                <a
                  href="https://developer.mozilla.org/en-US/docs/Web/API/History"
                  rel="noreferrer"
                  target="_blank"
                  className="a-grey-1"
                >
                  History
                </a>
              </li>
              <li>
                <a
                  href="https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest"
                  rel="noreferrer"
                  target="_blank"
                  className="a-grey-1"
                >
                  XMLHttpRequest
                </a>
              </li>
              <li>
                <Link to={`${PROJECT_PREFIX}lantern`} className="a-grey-1">
                  Lantern.js
                </Link>
              </li>
              <li>
                <a
                  href="https://modernizr.com"
                  rel="noreferrer"
                  target="_blank"
                  className="a-grey-1"
                >
                  Modernizr
                </a>
              </li>
              <li>
                <a
                  href="https://necolas.github.io/normalize.css"
                  rel="noreferrer"
                  target="_blank"
                  className="a-grey-1"
                >
                  Normalize.css
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/mattlean/xuehuacms"
                  rel="noreferrer"
                  target="_blank"
                  className="a-grey-1"
                >
                  Xuehua CMS
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
                  className="a-grey-1"
                >
                  Photoshop
                </a>
              </li>
            </ul>
          </section>
        </section>
      </BlindFrame>
      <BlindFrame
        ref={observerData[10].ref}
        nodeType="Link"
        to={`${BLOG_PREFIX}cs-lean-space`}
        delay={blindStates[10].delay}
        observer={observerData[10].observer}
        play={
          initAnimComplete
            ? blindVisibleStates[10].isVisible
            : blindStates[10].play
        }
        className="btn-option-a btn-triple-group"
      >
        <Btn className="btn-view-live">
          <BookIcon className="btn-icon" /> Case Study
        </Btn>
      </BlindFrame>
      <BlindFrame
        ref={observerData[11].ref}
        nodeType="a"
        href={live}
        rel="noreferrer"
        target="_blank"
        delay={blindStates[11].delay}
        observer={observerData[11].observer}
        play={
          initAnimComplete
            ? blindVisibleStates[11].isVisible
            : blindStates[11].play
        }
        className="btn-option-b btn-triple-group"
      >
        <Btn outline={true} className="btn-view-live">
          <PlayIcon className="btn-icon" /> View Live
        </Btn>
      </BlindFrame>
      <BlindFrame
        ref={observerData[12].ref}
        nodeType="a"
        href="https://github.com/mattlean/lean-space"
        rel="noreferrer"
        target="_blank"
        delay={blindStates[12].delay}
        observer={observerData[12].observer}
        play={
          initAnimComplete
            ? blindVisibleStates[12].isVisible
            : blindStates[12].play
        }
        className="btn-option-c btn-triple-group"
      >
        <Btn outline={true} className="btn-gh">
          <MarkGithubIcon className="btn-icon" /> GitHub
        </Btn>
      </BlindFrame>
    </>
  )
}

export default LeanSpace

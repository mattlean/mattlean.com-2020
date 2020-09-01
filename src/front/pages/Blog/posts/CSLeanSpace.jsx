import React, { useEffect, useRef } from 'react'
import { Badge } from 'eswiss'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import BlindFrame from '../../../components/Blind/BlindFrame'
import { getPostData } from '../../../../common/data/post'
import {
  setupBlindObservers,
  useInitAnim,
} from '../../../components/Blind/initAnimUtil'
import { useHeadDataEffect } from '../../../util'
import SSLeanTheme from '../../../assets/posts/cs-lean-space/lean-theme.jpg'
import SSLightbox from '../../../assets/posts/cs-lean-space/lightbox.png'
import SSMobileHorizontal from '../../../assets/posts/cs-lean-space/blog-pixel2-horizontal.png'
import SSMobileVertical from '../../../assets/posts/cs-lean-space/blog-pixel2-vertical.png'
import SSTablet from '../../../assets/posts/cs-lean-space/blog-ipad.png'
import SSType from '../../../assets/posts/cs-lean-space/type.jpg'
import VidLanding from '../../../assets/posts/cs-lean-space/landing.mp4'
import VidPageTransitions from '../../../assets/posts/cs-lean-space/page-transitions.mp4'
import VidWork from '../../../assets/posts/cs-lean-space/work.mp4'

const { tags, published, readtime, subtitle } = getPostData('cs-lean-space')

/**
 * "Case Study: Lean Space" Blog Post
 */
const CSSOT = () => {
  useHeadDataEffect()

  const srStartRef = useRef(null)
  const {
    blindVisibleStates,
    blindStates,
    initAnimComplete,
    observerData,
    runInitAnim,
  } = useInitAnim(1)

  // Setup effect which is only run once
  useEffect(() => {
    // Focus starting element on page load
    if (srStartRef.current) srStartRef.current.focus()

    const observers = setupBlindObservers(
      [0.5],
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
        <h1 ref={srStartRef} tabIndex="-1">
          <span className="title-prefix h-4 sm:h-6 c-grey-4">
            Case Study<span>:</span>
          </span>
          <span className="title h-1 md:h-2 sm:h-3">Lean Space</span>
        </h1>
        <p className="subtitle txt-8 sm:txt-6 c-grey-1">{subtitle}</p>
        <p className="time c-grey-2">
          <time dateTime={published.dateStr}>{published.txt}</time> &middot;{' '}
          {readtime} min read
        </p>
        <ul aria-label="Categories" className="badge-list">
          {tags.map((t) => (
            <Badge nodeType="li" wide={true} key={t.id}>
              {t.name}
            </Badge>
          ))}
        </ul>
      </BlindFrame>
      <motion.section
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 0.2, duration: 0.4, ease: 'easeOut' },
        }}
        className="subgrid-content grid"
      >
        <h2 className="h-2 md:h-4 mb-1rem">My Brand as a College Grad</h2>
        <section className="c-grey-1 mb-3">
          <p>
            I created <strong>Lean Space</strong> right after I graduated from
            college in 2015. The goal of the project was to create a personal
            brand that would help me land my first full-time engineering job in
            Silicon Valley. This brand would be applied on my website, resume,
            and cover&nbsp;letters.
          </p>
          <p>The two key factors directing my project were the following:</p>
          <ol>
            <li>
              Demonstrate that I’m a self-motivated software engineer that is
              not solely dependent on 3rd party packages and is capable of
              developing my own&nbsp;solutions.
            </li>
            <li>
              Showcase a unique visual style to distinguish myself from
              engineers who don’t consider design practices, blindly rip
              templates, or design resumes in{' '}
              <a
                href="https://latex-project.org"
                rel="noreferrer"
                target="_blank"
                className="a-grey-1"
              >
                LaTeX
              </a>
              .
            </li>
          </ol>
        </section>
        <h2 className="h-2 md:h-4 mb-1rem">Development</h2>
        <section className="subgrid-subcontent grid mb-3">
          <section className="left-half-priority c-grey-1">
            <p>
              My previous website before this one ran off of{' '}
              <a
                href="https://wordpress.org"
                rel="noreferrer"
                target="_blank"
                className="a-grey-1"
              >
                WordPress
              </a>{' '}
              and{' '}
              <a
                href="https://mysql.com"
                rel="noreferrer"
                target="_blank"
                className="a-grey-1"
              >
                MySQL
              </a>{' '}
              with a custom theme I wrote in{' '}
              <a
                href="https://php.net"
                rel="noreferrer"
                target="_blank"
                className="a-grey-1"
              >
                PHP
              </a>
              , HTML, and CSS. This tech stack was used because it was the most
              popular with my clients back when I was freelancing from
              2008&nbsp;to&nbsp;2014.
            </p>
            <p>
              Originally I was developing Lean Space as a theme for another
              project I was working on,{' '}
              <a
                href="https://github.com/mattlean/xuehuacms"
                rel="noreferrer"
                target="_blank"
                className="a-grey-1"
              >
                Xuehua CMS
              </a>
              , a custom content management system built with{' '}
              <a
                href="https://rubyonrails.org"
                rel="noreferrer"
                target="_blank"
                className="a-grey-1"
              >
                Ruby on Rails
              </a>{' '}
              since I wanted to learn the framework due to its popularity at the
              time. As the projects progressed, my interest in Xuehua CMS waned
              as I felt that it was unlikely I would ever use it anywhere
              besides my own site due to my focus on full-time opportunities
              rather than freelance. If I was only going to use it for my own
              site, the trouble of maintaining it wouldn’t be worth it, so after
              I felt I had some good exposure to{' '}
              <a
                href="https://www.ruby-lang.org/en"
                rel="noreferrer"
                target="_blank"
                className="a-grey-1"
              >
                Ruby
              </a>
              , I discontinued the project and focused on Lean Space.
            </p>
            <p>
              Instead of dealing with the hassle of a content management system,
              I decided to just deploy a backendless static site since it was
              unlikely that my website would update often. This was before the
              popularity of static site generators like{' '}
              <a
                href="https://jekyllrb.com"
                rel="noreferrer"
                target="_blank"
                className="a-grey-1"
              >
                Jekyll
              </a>
              , but given the small scope of the site, I think I would’ve
              implemented it in the same way, regardless of any trends.
            </p>
            <p>
              Most of my previous web-related work involved popular frameworks
              and libraries, as most of them were used when I was the sole
              developer under deadlines. Since this was a personal project, I
              wanted to avoid using 3rd party dependencies as much as I could in
              favor of vanilla JavaScript, CSS, and native browser APIs, just to
              show that I was comfortable with handling&nbsp;both.
            </p>
          </section>
          <figure className="ss right-half sticky-media">
            <img src={SSLeanTheme} alt="" className="right-half" />
            <figcaption className="c-grey-2">
              My old website I created in 2011 that was in dire need of
              a&nbsp;redesign
            </figcaption>
          </figure>
        </section>
        <h3 className="h-7">
          Backendless with SEO-Friendly Seamless Page Transitions
        </h3>
        <section className="multicol-txt mb-3">
          <p className="c-grey-1">
            I wanted the site to utilize seamless page transitions without
            triggering a page reload, an inherent feature of{' '}
            <a
              href="https://en.wikipedia.org/wiki/Single-page_application"
              rel="noreferrer"
              target="_blank"
              className="a-grey-1"
            >
              single-page applications
            </a>
            . However, a common trade-off with this approach at the time was
            that it could make it difficult for search engine spiders to parse
            your page, negatively impacting{' '}
            <a
              href="https://en.wikipedia.org/wiki/Search_engine_optimization"
              rel="noreferrer"
              target="_blank"
              className="a-grey-1"
            >
              search engine optimization
            </a>
            . To address this issue, I structured the server with a standard
            setup: every page would have a corresponding HTML document that
            would be distributed by the server. Once a page is downloaded by a
            user, JavaScript is executed and adds an event handler on all
            internal links that performs an XMLHttpRequest when they are
            clicked, downloading the requested page and using it to dynamically
            update the DOM of the current page to transform it into the new one,
            thus allowing navigation without page&nbsp;reloads.
          </p>
          <p className="c-grey-1">
            This also allows the website to still be fully functional when
            JavaScript is disabled, avoiding the JavaScript requirement problem
            for most single-page applications. When browsing the site without
            JavaScript, the page is still completely rendered, but the event
            handlers will never be applied, letting the navigation experience
            fallback to the standard link behavior. This ensures the
            SEO-friendliness of the website, as search engine spiders will be
            able to easily read an identical page that humans see without
            needing to execute any&nbsp;JavaScript.
          </p>
          <p className="c-grey-1">
            This solution also does not require any backend code, hence the
            “backendless” aspect. It just lets the{' '}
            <a
              href="https://httpd.apache.org"
              rel="noreferrer"
              target="_blank"
              className="a-grey-1"
            >
              Apache server
            </a>{' '}
            perform its standard&nbsp;behavior.
          </p>
        </section>
        <figure className="vid">
          <video autoPlay controls loop muted>
            <source src={VidPageTransitions} />
          </video>
          <figcaption className="a-grey-2">
            Example of persistent, refreshless experience with seamless
            page&nbsp;transitions
          </figcaption>
        </figure>
        <h3 className="h-7 left-half">Custom Lightbox Library</h3>
        <p className="right-half-priority mb-3 c-grey-1">
          A significant part of the website experience involves looking at
          screenshots of my portfolio work, so I wrote a{' '}
          <a
            href="https://en.wikipedia.org/wiki/Lightbox_(JavaScript)"
            rel="noreferrer"
            target="_blank"
            className="a-grey-1"
          >
            lightbox
          </a>{' '}
          library called{' '}
          <Link to="/projects/lantern" className="a-grey-1">
            Lantern.js
          </Link>
          . It uses lightweight vanilla JavaScript and CSS, is open source, and
          can be found on{' '}
          <a
            href="https://github.com/mattlean/lanternjs"
            rel="noreferrer"
            target="_blank"
            className="a-grey-1"
          >
            GitHub
          </a>{' '}
          and&nbsp;
          <a
            href="https://npmjs.com/package/lanternjs"
            rel="noreferrer"
            target="_blank"
            className="a-grey-1"
          >
            npm
          </a>
          .
        </p>
        <figure className="ss ss-lg mb-3">
          <img src={SSLightbox} alt="" />
          <figcaption className="a-grey-2">
            Lantern.js being used to display a screenshot of one of my
            portfolio&nbsp;pieces
          </figcaption>
        </figure>
        <h3 className="h-7 left-half">Work Filtering</h3>
        <p className="right-half-priority mb-3 c-grey-1">
          This was where the main exception to the “no 3rd party dependency
          rule” was made: the work page. As this would likely be one of the main
          pages prospective employers would investigate first, I wanted the
          experience here to be a little more sophisticated by creating a filter
          feature that faded each work piece in and out. I ended up using{' '}
          <a
            href="https://masonry.desandro.com"
            rel="noreferrer"
            target="_blank"
            className="a-grey-1"
          >
            Masonry
          </a>{' '}
          for&nbsp;this.
        </p>
        <figure className="vid mb-3">
          <video autoPlay controls loop muted>
            <source src={VidWork} />
          </video>
          <figcaption className="a-grey-2">
            A demonstration of the work page’s filter&nbsp;feature
          </figcaption>
        </figure>
        <h2 className="design-header h-2 left-half">Design</h2>
        <p className="right-half-priority mb-3 c-grey-1">
          I wanted the style to feel like one fitting for a software engineer.
          Nothing too extravagant, but still unique enough to show that I have
          some experience with&nbsp;design.
        </p>
        <h3 className="h-7 left-half">Colors</h3>
        <p className="right-half-priority c-grey-1">
          I decided on a blueish-green as my primary color because it was a
          fairly bright, calming, and inoffensive color. Grey became my
          secondary color because it was a very neutral color and didn’t compete
          with the primary&nbsp;colors.
        </p>
        <ul className="subgrid-colors mb-3">
          <li>#3DBBC2</li>
          <li>#54E1E6</li>
          <li>#EEEEEE</li>
          <li>#BABBBD</li>
          <li>#333333</li>
          <li>#292C31</li>
        </ul>
        <h3 className="h-7 left-half">Typography</h3>
        <section className="subgrid-subcontent grid mb-3">
          <section className="left-half-priority c-grey-1">
            <p>
              I chose{' '}
              <a
                href="https://fonts.google.com/specimen/Open+Sans"
                rel="noreferrer"
                target="_blank"
                className="a-grey-1"
              >
                Open Sans
              </a>{' '}
              for the body and header text because I wanted to use a modern
              looking sans serif typeface that wasn’t a web-safe standard, just
              to give a subtly different look to the&nbsp;text.
            </p>
            <p>
              For monospaced text I chose{' '}
              <a
                href="https://fonts.google.com/specimen/Inconsolata"
                rel="noreferrer"
                target="_blank"
                className="a-grey-1"
              >
                Inconsolata
              </a>
              . This would be used for body and heading text that would benefit
              from monospacing or would need to be distinguished from text in
              Open&nbsp;Sans.
            </p>
            <p>
              For the logo, I settled with{' '}
              <a
                href="https://fonts.google.com/specimen/Exo"
                rel="noreferrer"
                target="_blank"
                className="a-grey-1"
              >
                Exo
              </a>{' '}
              since it was a font that contrasted with Open Sans very well while
              expressing a very technological feel. I specifically used it in
              italics to make the logo look like it was “leaning” over to a
              side, a play on my last name&nbsp;(Lean).
            </p>
            <p>
              To make the typefaces still viewable for users who didn’t have
              them already installed, I imported them as web fonts through{' '}
              <a
                href="https://fonts.google.com"
                rel="noreferrer"
                target="_blank"
                className="a-grey-1"
              >
                Google&nbsp;Fonts
              </a>
              .
            </p>
          </section>
          <img src={SSType} alt="" className="right-half sticky-media" />
        </section>
        <h3 className="h-7 left-half">Animations & Transitions</h3>
        <p className="right-half-priority c-grey-1">
          I used animations and transitions wherever I could throughout the site
          to have it give off a sleek and polished experience. This contributed
          particularly to the navigation experience, making the changing of
          pages feel smooth and seamless. By only CSS, the animations can be
          experienced by users even when they have JavaScript&nbsp;disabled.
        </p>
        <figure className="vid mb-3">
          <video autoPlay controls loop muted>
            <source src={VidLanding} />
          </video>
          <figcaption className="a-grey-2">
            Initial load animation shown on the landing&nbsp;page
          </figcaption>
        </figure>
        <h3 className="h-7 left-half">Custom Responsive Layout</h3>
        <p className="right-half-priority c-grey-1">
          Without the luxury of a framework like{' '}
          <a
            href="https://getbootstrap.com"
            rel="noreferrer"
            target="_blank"
            className="a-grey-1"
          >
            Bootstrap
          </a>
          , I would need to create my own custom layout code that would support
          both desktop and mobile devices. I ended up implementing the layout
          with{' '}
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/CSS/float"
            rel="noreferrer"
            target="_blank"
            className="a-grey-1"
          >
            floats,
          </a>{' '}
          and the{' '}
          <a
            href="https://en.wikipedia.org/wiki/Responsive_web_design"
            rel="noreferrer"
            target="_blank"
            className="a-grey-1"
          >
            responsive design
          </a>{' '}
          with{' '}
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries"
            rel="noreferrer"
            target="_blank"
            className="a-grey-1"
          >
            media&nbsp;queries
          </a>
          .
        </p>
        <figure className="subgrid-ss">
          <div className="ss ss-sm">
            <img
              src={SSMobileVertical}
              alt="Lean Space viewed vertically on a phone"
              className="mobile phone-vertical"
            />
          </div>
          <div className="ss ss-sm">
            <img
              src={SSMobileHorizontal}
              alt="Lean Space viewed horizontally on a phone"
              className="mobile phone-horizontal"
            />
          </div>
          <div className="ss ss-lg">
            <img
              src={SSTablet}
              alt="Lean Space viewed on a tablet"
              className="mobile tablet-vertical"
            />
          </div>
          <figcaption className="c-grey-2">
            Lean Space’s layout adapting to different mobile devices with
            different screen&nbsp;dimensions
          </figcaption>
        </figure>
      </motion.section>
    </>
  )
}

export default CSSOT

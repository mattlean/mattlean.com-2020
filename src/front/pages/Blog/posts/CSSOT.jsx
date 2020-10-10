import React, { useEffect, useRef } from 'react'
import { Badge, Btn } from 'eswiss'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import BlindFrame from '../../../components/Blind/BlindFrame'
import { createDangerousHTML, usePageLoadEffect } from '../../../util'
import { getPostData } from '../../../../common/data/post'
import { getProjectData } from '../../../../common/data/project'
import { ROUTE_PREFIX } from '../../../../common/data/route/project'
import {
  setupBlindObservers,
  useInitAnim,
} from '../../../components/Blind/initAnimUtil'
import { FileIcon, PlayIcon } from '@primer/octicons-react'
import SSCharts from '../../../assets/projects/sot/charts.jpg'
import SSDrawn from '../../../assets/posts/cs-sot/2015-drawn.jpg'
import SSFullscreen from '../../../assets/projects/sot/fullscreen.jpg'
import SSInstrumentSelection from '../../../assets/projects/sot/instrument-selection.jpg'
import SSPhone from '../../../assets/posts/cs-sot/2015-phone.jpg'
import SSPrototype from '../../../assets/posts/cs-sot/prototype.jpg'
import SSTablet from '../../../assets/posts/cs-sot/2015-tablet.jpg'
import SSWireframe from '../../../assets/posts/cs-sot/wireframe-a.jpg'

const { live, name } = getProjectData('sot')
const { published, readtime, subtitle, tags } = getPostData('cs-sot')

/**
 * "Case Study: Lean Space" Blog Post
 */
const CSSOT = () => {
  usePageLoadEffect()

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
          <span className="title h-1 md:h-2 sm:h-3">{name}</span>
        </h1>
        <p
          dangerouslySetInnerHTML={createDangerousHTML(subtitle)}
          className="subtitle txt-8 sm:txt-6 c-grey-1"
        />
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
        <h2 className="h-2 md:h-4 mb-1.5rem">
          Modernizing a Visualization&nbsp;Tool
        </h2>
        <section className="intro mb-6 c-grey-1">
          <p>
            In 2014,{' '}
            <a
              href="https://biosearchtech.com"
              rel="noopener noreferrer"
              target="_blank"
              className="a-grey-1"
            >
              Biosearch Technologies
            </a>{' '}
            approached me to redesign and develop their interactive selection
            tool called <strong>spectral overlay tool</strong>. This application
            helped scientists select the right parameters needed to design an
            assay for a common molecular biology method known as{' '}
            <a
              href="https://en.wikipedia.org/wiki/Real-time_polymerase_chain_reaction"
              rel="noopener noreferrer"
              target="_blank"
              className="a-grey-1"
            >
              quantitative Polymerase Chain Reaction (qPCR)
            </a>
            . For the company, this was a critical buyer enablement tool used to
            streamline conversions into&nbsp;sales.
          </p>
          <p>
            The original tool needed a user experience overhaul and used{' '}
            <a
              href="https://en.wikipedia.org/wiki/Adobe_Flash"
              rel="noopener noreferrer"
              target="_blank"
              className="a-grey-1"
            >
              Flash
            </a>
            , so to improve its usability and longevity, Biosearch Technologies
            recognized that they would need the tool updated and ported to work
            natively in the&nbsp;browser.
          </p>
          <p>
            They also had plans to launch the{' '}
            <a
              href="http://blog.biosearchtech.com/check-out-our-new-website-qpcr-design-lab"
              rel="noopener noreferrer"
              target="_blank"
              className="a-grey-1"
            >
              qPCR Design Lab
            </a>
            , a microsite that offered various resources and tools about qPCR
            targeted to both new and experienced users. The spectral overlay
            tool would be one of the primary tools to be featured on
            the&nbsp;site.
          </p>
          <p>
            The tool has received periodic updates after its initial release.
            Unfortunately, the microsite it was originally found on is no longer
            online, but the tool can still be found on the{' '}
            <a
              href={live}
              rel="noopener noreferrer"
              target="_blank"
              className="a-grey-1"
            >
              LGC Biosearch&nbsp;Technologies&nbsp;website
            </a>
            .
          </p>
        </section>
        <h2 className="h-2 md:h-4 mb-1rem">Initial 2014&nbsp;Version</h2>
        <section className="early-work subgrid-subcontent grid mb-4">
          <section className="left-half-priority">
            <h3 className="h-7 sm:h-8 mb-1.5">Early Design Progression</h3>
            <p className="c-grey-1">
              Biosearch Technology’s marketing team and I designed the initial
              wireframes and wireflows together. This design supported both
              desktop and mobile devices. We then quickly iterated through
              several prototypes of the application until we settled on the
              finalized&nbsp;layout.
            </p>
            <p className="c-grey-1 mb-4">
              In 2015, Biosearch Technologies was acquired by{' '}
              <a
                href="https://lgcgroup.com"
                rel="noopener noreferrer"
                target="_blank"
                className="a-grey-1"
              >
                LGC
              </a>
              . Because of this, they reapproached me to perform some visual
              design updates that incorporated their new
              branding&nbsp;guidelines.
            </p>
            <h3 className="h-7 sm:h-8 mb-1.5">
              Settling on a Technology Stack
            </h3>
            <p className="mb-4 c-grey-1">
              I chose to use{' '}
              <a
                href="https://getbootstrap.com"
                rel="noopener noreferrer"
                target="_blank"
                className="a-grey-1"
              >
                Bootstrap
              </a>{' '}
              for its excellent cross-browser compatibility, modal component,
              and great reliability. Because the framework was already dependent
              on{' '}
              <a
                href="https://jquery.com"
                rel="noopener noreferrer"
                target="_blank"
                className="a-grey-1"
              >
                jQuery
              </a>
              , I decided to use that for the rest of the application too. I
              also used{' '}
              <a
                href="https://sass-lang.com"
                rel="noopener noreferrer"
                target="_blank"
                className="a-grey-1"
              >
                Sass
              </a>{' '}
              to utilize its powerful features to improve the maintainability of
              the style codebase. For the charts, I ended up choosing{' '}
              <a
                href="https://developers.google.com/chart"
                rel="noopener noreferrer"
                target="_blank"
                className="a-grey-1"
              >
                Google Charts
              </a>{' '}
              because it supported area charts and had clear&nbsp;documentation.
            </p>
            <h3 className="h-7 sm:h-8 mb-1.5">
              Custom Layout vs. Bootstrap Grid
            </h3>
            <p className="c-grey-1 mb-4">
              At first, I built the layout with Bootstrap’s grid system to
              quickly iterate through the first few prototypes, but we realized
              that it was important to maximize the amount of space the data
              visualizations took, especially on mobile devices. This wouldn’t
              work well with the default dimensions defined by Bootstrap’s
              grids, so I implemented a custom{' '}
              <a
                href="https://developer.mozilla.org/en-US/docs/Web/CSS/float"
                rel="noopener noreferrer"
                target="_blank"
                className="a-grey-1"
              >
                float
              </a>{' '}
              layout built with custom{' '}
              <a
                href="https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries"
                rel="noopener noreferrer"
                target="_blank"
                className="a-grey-1"
              >
                media queries
              </a>{' '}
              to have complete&nbsp;control.
            </p>
            <h3 className="h-7 sm:h-8 mb-1.5">Project Tooling</h3>
            <p className="c-grey-1">
              As I wanted to try out some new things in my workflow, I took the
              opportunity to use{' '}
              <a
                href="https://yeoman.io"
                rel="noopener noreferrer"
                target="_blank"
                className="a-grey-1"
              >
                Yeoman
              </a>{' '}
              for the first time. This introduced me to{' '}
              <a
                href="https://gruntjs.com"
                rel="noopener noreferrer"
                target="_blank"
                className="a-grey-1"
              >
                Grunt
              </a>{' '}
              which increased my productivity significantly by automatically
              handling auto-refreshes in response to codebase updates, compiling
              Sass to CSS, and linting JavaScript with{' '}
              <a
                href="https://jshint.com"
                rel="noopener noreferrer"
                target="_blank"
                className="a-grey-1"
              >
                JSHint
              </a>
              . It also generated optimized production builds by reducing file
              sizes through minification with{' '}
              <a
                href="http://lisperator.net/uglifyjs"
                rel="noopener noreferrer"
                target="_blank"
                className="a-grey-1"
              >
                UglifyJS
              </a>
              ,{' '}
              <a
                href="https://github.com/jakubpawlowicz/clean-css"
                rel="noopener noreferrer"
                target="_blank"
                className="a-grey-1"
              >
                clean-css
              </a>
              ,{' '}
              <a
                href="https://github.com/kangax/html-minifier"
                rel="noopener noreferrer"
                target="_blank"
                className="a-grey-1"
              >
                HTMLMinifier
              </a>
              , and&nbsp;
              <a
                href="https://github.com/imagemin/imagemin"
                rel="noopener noreferrer"
                target="_blank"
                className="a-grey-1"
              >
                imagemin
              </a>
              .
            </p>
            <p className="c-grey-1">
              Because I received all of the visualizations’ data points in an{' '}
              <a
                href="https://microsoft.com/en-us/microsoft-365/excel"
                rel="noopener noreferrer"
                target="_blank"
                className="a-grey-1"
              >
                Excel
              </a>{' '}
              spreadsheet, I wrote a custom{' '}
              <a
                href="https://en.wikipedia.org/wiki/Command-line_interface"
                rel="noopener noreferrer"
                target="_blank"
                className="a-grey-1"
              >
                command-line interface (CLI)
              </a>{' '}
              tool in{' '}
              <a
                href="https://python.org"
                rel="noopener noreferrer"
                target="_blank"
                className="a-grey-1"
              >
                Python
              </a>{' '}
              to convert them into a JSON format that could be imported into
              the&nbsp;application.
            </p>
          </section>
          <section className="right-half sticky-media">
            <figure className="ss mb-1.5">
              <img
                src={SSWireframe}
                alt="Spectral overlay tool wireframe"
                className="ss ss-sm"
              />
              <figcaption className="c-grey-2">
                An early low-fidelity wireframe of spectral overlay&nbsp;tool
              </figcaption>
            </figure>
            <figure className="ss">
              <img src={SSPrototype} alt="Spectral overlay tool prototype" />
              <figcaption className="c-grey-2">
                An early prototype of spectral overlay&nbsp;tool
              </figcaption>
            </figure>
          </section>
        </section>
        <figure className="subgrid-ss mb-6">
          <div className="ss ss-sm">
            <img
              src={SSPhone}
              alt="2015 build of spectral overlay tool on a phone"
              className="mobile phone-vertical"
            />
          </div>
          <div className="ss ss-sm">
            <img
              src={SSTablet}
              alt="2015 build of spectral overlay tool on a phone"
              className="mobile tablet"
            />
          </div>
          <img
            src={SSDrawn}
            alt="2015 build of spectral overlay tool viewed on desktop"
            className="ss ss-lg"
          />
          <figcaption className="c-grey-2">
            2015 layout for spectral overlay tool adapting to different devices
            of varying screen&nbsp;dimensions
          </figcaption>
        </figure>
        <h2 className="sbs-header left-half h-2 md:h-4 mb-1.5rem">
          2020 Redesign
        </h2>
        <p className="right-half-priority mb-4 c-grey-1">
          In 2019, the company asked me to perform a complete visual redesign
          alongside a few new features. During this design iteration, we
          collaborated with{' '}
          <a
            href="https://www.columnfivemedia.com"
            rel="noopener noreferrer"
            target="_blank"
            className="a-grey-1"
          >
            Column Five
          </a>{' '}
          and built the mockups in&nbsp;
          <a
            href="https://www.adobe.com/products/xd.html"
            rel="noopener noreferrer"
            target="_blank"
            className="a-grey-1"
          >
            XD
          </a>
          .
        </p>
        <figure className="ss ss-lg mb-4">
          <img
            src={SSCharts}
            alt="Main screen for the 2020 version of the spectral overlay tool"
          />
          <figcaption className="c-grey-2">
            Main screen for the latest version of spectral overlay&nbsp;tool
          </figcaption>
        </figure>
        <h3 className="h-7 sm:h-8 left-half">Application Updates</h3>
        <section className="right-half-priority mb-4 c-grey-1">
          <p>
            I considered porting the whole application over to a new library
            like{' '}
            <a
              href="https://reactjs.org/docs/test-renderer.html"
              rel="noopener noreferrer"
              target="_blank"
              className="a-grey-1"
            >
              React
            </a>{' '}
            or{' '}
            <a
              href="https://vuejs.org"
              rel="noopener noreferrer"
              target="_blank"
              className="a-grey-1"
            >
              Vue
            </a>
            , but in the end, the application had been holding up well over the
            years, so I decided to try to maintain the technology stack and just
            upgrade and migrate most dependencies to their latest versions.
            Besides upgrades for dependencies, there were a few new features
            implemented, the most notable ones being fluorophore dye sorting and
            instrument filtering. The JavaScript codebase was also updated to
            use the{' '}
            <a
              href="http://www.ecma-international.org/ecma-262/6.0/index.html"
              rel="noopener noreferrer"
              target="_blank"
              className="a-grey-1"
            >
              ECMAScript 2015&nbsp;specification
            </a>
            .
          </p>
          <p>
            Performance improvements in chart drawing and data handling were
            also implemented during this time. The most significant one improved
            the load times for the charts. While the previous versions utilized
            JSON that was converted with my custom spreadsheet conversion tool,
            the format of the JSON still required additional transformations
            before it could be used to render data points with Google Charts.
            This meant that every time the application started up, it would
            perform identical transformations to get the data into a readable
            state. To remove this unnecessary work, the data conversion tool was
            updated to perform these transformations ahead of time, and this
            properly formatted data is now statically included within the
            bundle. That way, whenever the application starts up, it no longer
            needs to perform any transformations during runtime and it simply
            feeds the data directly into the Google Charts&nbsp;API.
          </p>
          <p>
            The styles were also completely rewritten to adopt the{' '}
            <a
              href="http://getbem.com"
              rel="noopener noreferrer"
              target="_blank"
              className="a-grey-1"
            >
              Block Element Modifier (BEM)
            </a>{' '}
            methodology to improve the readability and maintainability of the
            Sass codebase. Due to a requirement to continue support for{' '}
            <a
              href="https://en.wikipedia.org/wiki/Internet_Explorer_11"
              rel="noopener noreferrer"
              target="_blank"
              className="a-grey-1"
            >
              Internet Explorer 11
            </a>
            , a float-based layout solution was still used over a{' '}
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout"
              rel="noopener noreferrer"
              target="_blank"
              className="a-grey-1"
            >
              grid
            </a>
            -based&nbsp;one.
          </p>
        </section>
        <h3 className="h-7 sm:h-8 left-half">Project Tooling Updates</h3>
        <section className="right-half-priority mb-4 c-grey-1">
          <p>
            I replaced the old project tooling setup in favor of my own custom{' '}
            <a
              href="https://webpack.js.org"
              rel="noopener noreferrer"
              target="_blank"
              className="a-grey-1"
            >
              webpack
            </a>{' '}
            configuration based on{' '}
            <Link to={`${ROUTE_PREFIX}ljas`} className="a-grey-1">
              Lean JavaScript Application Starter
            </Link>
            . It handles the same responsibilities the previous Grunt-based one
            had, except it does it all&nbsp;better.
          </p>
          <p>
            To handle the new ES2015 syntax, webpack now compiles JavaScript
            with{' '}
            <a
              href="https://babeljs.io/"
              rel="noopener noreferrer"
              target="_blank"
              className="a-grey-1"
            >
              Babel
            </a>
            . The code is now linted with{' '}
            <a
              href="https://eslint.org"
              rel="noopener noreferrer"
              target="_blank"
              className="a-grey-1"
            >
              ESLint
            </a>{' '}
            and{' '}
            <a
              href="https://stylelint.io"
              rel="noopener noreferrer"
              target="_blank"
              className="a-grey-1"
            >
              stylelint
            </a>
            .{' '}
            <a
              href="https://prettier.io/"
              rel="noopener noreferrer"
              target="_blank"
              className="a-grey-1"
            >
              Prettier
            </a>{' '}
            now handles all formatting to keep the coding style&nbsp;consistent.
          </p>
          <p>
            The most impactful aspect of the new tooling setup is how it handles
            the production build process. webpack bundles all related source
            files together, improving the initial page load performance by
            reducing the required amount of network requests necessary for
            downloading the application. It also significantly reduces the
            overall file size of the JavaScript and CSS by removing unused code
            through{' '}
            <a
              href="https://webpack.js.org/guides/tree-shaking"
              rel="noopener noreferrer"
              target="_blank"
              className="a-grey-1"
            >
              tree shaking
            </a>{' '}
            and{' '}
            <a
              href="https://purgecss.com"
              rel="noopener noreferrer"
              target="_blank"
              className="a-grey-1"
            >
              PurgeCSS
            </a>{' '}
            and minifying with{' '}
            <a
              href="https://terser.org"
              rel="noopener noreferrer"
              target="_blank"
              className="a-grey-1"
            >
              Terser
            </a>{' '}
            and{' '}
            <a
              href="https://cssnano.co"
              rel="noopener noreferrer"
              target="_blank"
              className="a-grey-1"
            >
              cssnano
            </a>
            . The result of this reduces the overall application file size to
            the point where it is actually smaller than the older Grunt builds,
            even though the application has more features than it has ever had.
            To prevent stale browser cache hits, unique hashes were introduced
            to the build’s file names to ensure cache invalidation when new
            versions are&nbsp;deployed.
          </p>
          <p>
            The custom spreadsheet conversion CLI tool was also rewritten in
            JavaScript and{' '}
            <a
              href="https://nodejs.org"
              rel="noopener noreferrer"
              target="_blank"
              className="a-grey-1"
            >
              Node.js
            </a>
            , just to keep the entire codebase consistent in one&nbsp;language.
          </p>
        </section>
        <figure className="ss ss-sm">
          <img
            src={SSInstrumentSelection}
            alt="Spectral overlay tool sort and filtering features"
          />
          <figcaption className="c-grey-2">
            Instrument selection that supports filtering of instruments and
            sorting of&nbsp;dyes
          </figcaption>
        </figure>
        <figure className="ss ss-sm mb-6">
          <img src={SSFullscreen} alt="Spectral overlay tool fullscreen mode" />
          <figcaption className="c-grey-2">
            Fullscreen mode for a larger view of the&nbsp;charts
          </figcaption>
        </figure>
        <h2 className="sbs-header left-half h-2 md:h-4 mb-1.5rem">Reception</h2>
        <section className="right-half-priority mb-6 c-grey-1">
          <p>
            The spectral overlay tool first went live alongside the qPCR Design
            Lab on October 23, 2014.{' '}
            <a
              href="http://genengnews.com"
              rel="noopener noreferrer"
              target="_blank"
              className="a-grey-1"
            >
              Genetic Engineering & Biotechnology News (GEN)
            </a>{' '}
            awarded the project{' '}
            <a
              href="https://genengnews.com/resources/best-of-the-web/qpcr-design-lab/2933"
              rel="noopener noreferrer"
              target="_blank"
              className="a-grey-1"
            >
              Best of Web in vol.&nbsp;35,&nbsp;no.&nbsp;4
            </a>
            .
          </p>
          <p>
            The 2020 version of the tool went live on the{' '}
            <a
              href={live}
              rel="noopener noreferrer"
              target="_blank"
              className="a-grey-1"
            >
              LGC Biosearch Technologies website
            </a>{' '}
            on September&nbsp;1,&nbsp;2020.
          </p>
        </section>
        <section className="btn-area">
          <section className="btn-double-group">
            <a href={live} rel="noopener noreferrer" target="_blank">
              <Btn className="btn-view-live">
                <PlayIcon className="btn-icon" /> View Live
              </Btn>
            </a>
            <Link to={`${ROUTE_PREFIX}sot`}>
              <Btn outline={true} className="btn-details">
                <FileIcon className="btn-icon" /> Details
              </Btn>
            </Link>
          </section>
        </section>
      </motion.section>
    </>
  )
}

export default CSSOT

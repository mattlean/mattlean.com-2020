import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import BlindFrame from '../../components/Blind/BlindFrame'
import NewBlindFrame from '../../components/Blind/NewBlindFrame'
import CTA from '../../components/CTA'
import MainFooter from '../../components/MainFooter'
import VARIANTS from '../page_variants'
import { useHeadDataEffect } from '../../util'

/**
 * About Page
 */
const About = () => {
  useHeadDataEffect()

  const blind0 = useRef(null)
  const blind1 = useRef(null)

  const [initAnimComplete, setInitAnimComplete] = useState(false)

  const blindVisibleStates = []
  for (let i = 0; i < 2; i += 1) {
    const [isVisible, setIsVisible] = useState(false)
    blindVisibleStates.push({ isVisible, setIsVisible })
  }
  const blindVisibleStatesRef = useRef(blindVisibleStates)

  const blindStates = []
  for (let i = 0; i < 2; i += 1) {
    const [play, setPlay] = useState(false)
    const [delay, setDelay] = useState(undefined)
    blindStates.push({ delay, play, setDelay, setPlay })
  }

  const observers = []
  for (let i = 0; i < 2; i += 1) {
    const [observer, setObserver] = useState(undefined)
    observers.push({ observer, setObserver })
  }

  const timeoutHandler = () => {
    console.log('timeoutHandler called')
    if (blindVisibleStatesRef.current) {
      let startViewport = false
      let delay = 0
      for (let i = 0; i < blindVisibleStatesRef.current.length; i += 1) {
        const visibleState = blindVisibleStatesRef.current[i]
        console.log('visibleState', visibleState, i)
        if (visibleState.isVisible) {
          if (!startViewport) startViewport = true
          const blindState = blindStates[i]
          console.log('blindState set', blindState)
          blindState.setDelay(delay)
          blindState.setPlay(true)
          delay += 0.5
        } else if (startViewport) {
          // End of viewport has been reached
          setInitAnimComplete(true)
          break
        }
      }
    }
  }

  // Set blindVisibleStates ref
  useEffect(() => {
    blindVisibleStatesRef.current = blindVisibleStates
  })

  // Setup effect which is only run once
  useEffect(() => {
    console.log(1)
    // Focus starting element on page load
    if (blind0.current) blind0.current.focus()

    // Blind conductor setup
    const constructBlindObserver = (threshold, index) => {
      return new IntersectionObserver(
        () => {
          console.log('intersect occurred')
          blindVisibleStates[index].setIsVisible(true)
        },
        {
          threshold,
        }
      )
    }

    const observer0 = constructBlindObserver(0.1, 0)
    observers[0].setObserver(observer0)
    if (blind0.current) {
      observer0.observe(blind0.current)
    } else {
      console.warn('Reference to blind not found. Observer was not set.')
    }

    const observer1 = constructBlindObserver(0.1, 1)
    observers[1].setObserver(observer1)
    if (blind1.current) {
      observer1.observe(blind1.current)
    } else {
      console.warn('Reference to blind not found. Observer was not set.')
    }

    window.setTimeout(timeoutHandler, 100)

    return () => {
      // Disconnect all observers on unmount
      observers.forEach(({ observer }) => observer.disconnect())
    }
  }, [])

  // TODO: How do I know when all of the visible blinds are found after page load?

  // // Conductor
  // const blinds = []
  // const [isDone, setIsDone] = useState(false) // Controls when conductor's job is complete and can free blinds
  // for (let i = 0; i < 2; i += 1) {
  //   const [isHidden, setIsHidden] = useState(undefined) // Allows blinds to communicate to conductor on whether or not they are visible
  //   let play // Allows conductor to control when blind animation plays
  //   blinds.push({
  //     isHidden,
  //     play,
  //     setIsHidden,
  //   })
  // }

  // let startFound = false
  // for (let i = 0; i < blinds.length; i += 1) {
  //   const currBlind = blinds[i]

  //   if (!startFound) {
  //     // Look for first blind in view.
  //     // Covers case when user starts page somewhere below the top of the page.
  //     if (currBlind.isHidden) startFound = true
  //   } else {
  //     if (currBlind.isHidden === undefined) {
  //       break // Blind isHidden states haven't been calculated yet
  //     } else if (!currBlind.isHidden) {
  //       // Blind is hidden, end of visible blinds have been reached.
  //       // Complete the conductor's work.
  //       setIsDone(true)
  //       break
  //     } else {
  //       // Blind is not hidden. Play the animation.
  //       currBlind.setPlay(true)
  //     }
  //   }
  // }

  // console.log(blinds)

  return (
    <motion.div
      animate="initial"
      exit="out"
      initial="initial"
      variants={VARIANTS}
      onAnimationComplete={() => window.scroll(0, 0)}
      className="container"
    >
      <main aria-label="Content" className="grid-about grid">
        <section className="cover">
          <NewBlindFrame
            ref={blind0}
            nodeType="h1"
            delay={blindStates[0].delay}
            observer={observers[0].observer}
            play={
              initAnimComplete
                ? blindVisibleStates[0].isVisible
                : blindStates[0].play
            }
            tabIndex="-1"
            className="h-2 sm:h-3"
          >
            Hello, world!
          </NewBlindFrame>
          <NewBlindFrame
            ref={blind1}
            nodeType="p"
            delay={blindStates[1].delay}
            observer={observers[1].observer}
            play={
              initAnimComplete
                ? blindVisibleStates[1].isVisible
                : blindStates[1].play
            }
            className="txt-8 sm:txt-7 c-grey-1"
          >
            My name is Matt&nbsp;Lean and I’m a full-stack web&nbsp;developer &
            UI/UX&nbsp;designer. I was born in NY and raised in SoCal. Now I
            live in the SF Bay Area and am looking for new
            work&nbsp;opportunities!
          </NewBlindFrame>
        </section>
        <BlindFrame
          nodeType="section"
          threshold={0.1}
          className="content c-grey-1"
        >
          <p>
            In elementary school, my sister introduced me to a browser game
            called Neopets. The main objective of the game was to take care of
            your virtual pets, but the most impactful feature was that it
            allowed users to personalize and share webpages in-game with HTML,
            CSS, and JavaScript. I ended up building sinful pages with lots of
            blue Comic Sans, absurdly loud autoplaying MIDI music, flashing
            background GIFs that probably triggered epileptic seizures, and
            seemingly endless stacks of alert dialog boxes that would “freeze”
            your computer and make your mom think you got a virus. (I apologize
            if you ever fell victim to my heinous crimes!) Despite the fact I
            was creating stupid webpages about my Neopets, I didn’t realize how
            important it was that the game had introduced the very fabric of the
            web to&nbsp;me.
          </p>
          <p>
            After countless scoldings for me to stop gaming, I quit and
            continued to learn web development through free online tutorials and
            books I couldn’t buy during visits to bookstores. These learnings
            would then be published on free web hosting platforms like GeoCities
            and Freewebs in the form of fan websites about games that intrigued
            me. In high school, I decided to try something “entrepreneurial”
            since my sister started her own neighborhood business as a dog
            walker. Instead of mowing lawns or watering plants, I decided to
            start freelance web designing and built websites for small, local
            businesses with PHP, MySQL, WordPress, Magento, phpBB, jQuery,
            Photoshop, Illustrator, and&nbsp;Flash.
          </p>
          <p>
            For college I moved to northern California to study computer science
            at the University of California, Santa Cruz. Because I had been
            self-taught up until this point, it was here that I began to truly
            realize the scope and diversity in opportunities the field offered.
            I had been completely oblivious to the importance of computer
            science fundamentals, and I began to study topics that online
            tutorials never directed me to like data structure and algorithm
            analysis, assembly, computer architecture, and more. I also tried to
            step away from web programming to explore other specializations like
            graphics programming, network programming, game programming, virtual
            reality, and more. At the end of my studies I realized that it made
            the most sense to come full circle and combine my formal computer
            science education with my previous “street” web coding experiences
            to find a job in Silicon Valley as a specialist in
            web&nbsp;technologies.
          </p>
          <p>
            Since graduating and receiving my Bachelor of Science degree in
            Computer Science in 2015, I’ve been professionally building web
            applications for Silicon Valley. My education hasn’t stopped here
            though. Outside of work I continue to learn and play with new
            technologies. As I currently live in South Bay, occasionally when I
            have extra time I take an online or night class at De Anza College
            where I am sluggishly working towards an associate degree in Graphic
            & Interactive&nbsp;Design.
          </p>
        </BlindFrame>
        <section className="closing">
          <BlindFrame nodeType="p" className="txt-8 sm:txt-6 c-grey-1">
            Thanks for reading my story.
            <br />
            I&apos;d love to hear yours!
            <br />
            <CTA to="/contact" type="lg" className="a-primary svg-primary">
              Let&apos;s start talking
            </CTA>
          </BlindFrame>
        </section>
        <BlindFrame
          nodeType="aside"
          delay={1}
          threshold={0.1}
          className="subgrid-resume txt-3 c-grey-2"
        >
          <section className="work">
            <h2 className="h-9 dispw-bold tt-uppercase">Work</h2>
            <dl>
              <dt>Medable</dt>
              <dd>
                Frontend Web Developer
                <br />
                2016 &ndash; 2018
              </dd>
              <dt>LGC Biosearch Technologies</dt>
              <dd>
                Web Developer Consultant
                <br />
                2014 &ndash; Present
              </dd>
              <dt>Miles & Company</dt>
              <dd>
                Frontend Engineer
                <br />
                2015 &ndash; 2016
              </dd>
              <dt>Food Lovers United Company</dt>
              <dd>
                Frontend Developer
                <br />
                2015 &ndash; 2015
              </dd>
              <dt>MattLean.com</dt>
              <dd>
                Freelance Web Designer/Developer
                <br />
                2008 &ndash; 2014
              </dd>
            </dl>
          </section>
          <section className="edu">
            <h2 className="h-9 dispw-bold tt-uppercase">Education</h2>
            <dl>
              <dt>University of California, Santa Cruz</dt>
              <dd>
                B.S. in Computer Science
                <br />
                2015
              </dd>
              <dt>De Anza College</dt>
              <dd>
                Certificate in Graphic & Interactive Design
                <br />
                2020
              </dd>
            </dl>
          </section>
          <section className="subgrid-skills">
            <section>
              <h2 className="h-9 dispw-bold tt-uppercase">Languages</h2>
              <ul>
                <li>JavaScript</li>
                <li>Python</li>
                <li>TypeScript</li>
                <li>Java</li>
                <li>CSS</li>
                <li>Sass</li>
                <li>HTML</li>
                <li>PHP</li>
                <li>C, C++</li>
              </ul>
            </section>
            <section>
              <h2 className="h-9 dispw-bold tt-uppercase">Testing</h2>
              <ul>
                <li>Jest</li>
                <li>SuperTest</li>
                <li>Cypress</li>
                <li>Chromatic</li>
                <li>Enzyme, React Test Renderer</li>
                <li>Mocha, Chai</li>
              </ul>
            </section>
            <section className="frontend">
              <h2 className="h-9 dispw-bold tt-uppercase">Frontend</h2>
              <ul>
                <li>React</li>
                <li>React Router</li>
                <li>Redux</li>
                <li>Fetch, Axios, XMLHttpRequest</li>
                <li>CSS Grid, Flexbox, Float</li>
                <li>Media Queries</li>
                <li>Framer Motion</li>
                <li>Anime.js</li>
                <li>CSS Animations & Transitions</li>
                <li>Storybook</li>
                <li>Google Charts</li>
                <li>Canvas</li>
                <li>Web Storage</li>
                <li>Sass</li>
                <li>Material Design</li>
                <li>Bootstrap</li>
                <li>jQuery</li>
                <li>react-intl</li>
                <li>A11y</li>
                <li>Design Systems</li>
                <li>SEO</li>
                <li>BEM</li>
                <li>Backbone.js</li>
                <li>Knockout</li>
              </ul>
            </section>
            <section>
              <h2 className="h-9 dispw-bold tt-uppercase">Backend</h2>
              <ul>
                <li>Express</li>
                <li>webapp2</li>
                <li>Memcached</li>
                <li>bcrypt</li>
                <li>web2py</li>
                <li>REST</li>
                <li>Cookies</li>
                <li>HTTP</li>
                <li>WordPress</li>
              </ul>
            </section>
            <section>
              <h2 className="h-9 dispw-bold tt-uppercase">Databases</h2>
              <ul>
                <li>PostgreSQL</li>
                <li>MongoDB</li>
                <li>Google Cloud Datastore</li>
                <li>MySQL</li>
              </ul>
            </section>
            <section>
              <h2 className="h-9 dispw-bold tt-uppercase">Servers</h2>
              <ul>
                <li>AWS Elastic Beanstalk</li>
                <li>Amazon S3</li>
                <li>Heroku</li>
                <li>Google App Engine</li>
                <li>Apache</li>
              </ul>
            </section>
            <section>
              <h2 className="h-9 dispw-bold tt-uppercase">Tooling</h2>
              <ul>
                <li>webpack</li>
                <li>GitHub</li>
                <li>Gulp</li>
                <li>Git</li>
                <li>CircleCI</li>
                <li>Grunt</li>
                <li>Subversion</li>
              </ul>
            </section>
            <section>
              <h2 className="h-9 dispw-bold tt-uppercase">Design</h2>
              <ul>
                <li>XD</li>
                <li>Photoshop</li>
                <li>Illustrator</li>
                <li>Premiere</li>
                <li>After Effects</li>
                <li>Audition</li>
                <li>Blender</li>
                <li>Flash</li>
              </ul>
            </section>
          </section>
        </BlindFrame>
      </main>
      <MainFooter />
    </motion.div>
  )
}

export default About

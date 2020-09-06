import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import BlindFrame from '../../components/Blind/BlindFrame'
import CTA from '../../components/CTA'
import MainFooter from '../../components/MainFooter'
import VARIANTS from '../page_variants'
import {
  setupBlindObservers,
  useInitAnim,
} from '../../components/Blind/initAnimUtil'
import { usePageLoadEffect } from '../../util'

/**
 * About Page
 */
const About = () => {
  usePageLoadEffect()

  const {
    blindVisibleStates,
    blindStates,
    initAnimComplete,
    observerData,
    runInitAnim,
  } = useInitAnim(3)

  // Setup effect which is only run once
  useEffect(() => {
    // Focus starting element on page load
    if (observerData[0].ref.current) observerData[0].ref.current.focus()

    const observers = setupBlindObservers(
      [0.5, 0.1, 0.1],
      observerData,
      blindVisibleStates
    )

    window.setTimeout(runInitAnim, 100)

    // Disconnect all observers on unmount
    return () => observers.forEach((observer) => observer.disconnect())
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

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
          <BlindFrame
            ref={observerData[0].ref}
            nodeType="h1"
            delay={blindStates[0].delay}
            observer={observerData[0].observer}
            play={
              initAnimComplete
                ? blindVisibleStates[0].isVisible
                : blindStates[0].play
            }
            tabIndex="-1"
            className="h-2 sm:h-3"
          >
            Hello, world!
          </BlindFrame>
          <BlindFrame
            ref={observerData[1].ref}
            nodeType="p"
            delay={blindStates[1].delay}
            observer={observerData[1].observer}
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
          </BlindFrame>
        </section>
        <motion.section
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 0.4, duration: 0.4, ease: 'easeOut' },
          }}
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
            if you ever fell victim to my heinous pranks!) Despite the fact I
            was creating stupid webpages about my Neopets, the reality was that
            the game was introducing me to the very fabric of the&nbsp;web.
          </p>
          <p>
            After I quit Neopets, I continued to learn web development through
            free online tutorials and books I couldn’t buy during visits to
            bookstores. These learnings would then manifest on free web hosting
            platforms like GeoCities and Freewebs in the form of fan websites
            about other video games that intrigued&nbsp;me.
          </p>
          <p>
            In high school, my sister started her own neighborhood business as a
            dog walker and inspired me to try to start my own business as a
            freelance web design and developer. I built websites for small,
            local businesses for several years.
          </p>
          <p>
            For college I moved to northern California to study computer science
            at the{' '}
            <a
              href="https://ucsc.edu"
              rel="noreferrer"
              target="_blank"
              className="a-grey-1"
            >
              University of California, Santa Cruz
            </a>
            . Because I had been self-taught up until this point, it was here
            that I began to truly realize the scope and diversity in
            opportunities the field offered. I had been completely oblivious to
            computer science fundamentals, and I began to study topics that
            online tutorials never directed me to like data structure and
            algorithm analysis, assembly, computer architecture, and more. I
            also tried to step away from web programming to explore other
            specializations like graphics programming, network programming, game
            programming, virtual reality, and more. At the end of my studies I
            realized that it made the most sense to come full circle and combine
            my formal computer science education with my previous “street” web
            coding experiences to find a job in Silicon Valley as a specialist
            in web&nbsp;technologies.
          </p>
          <p>
            Since graduating and receiving my Bachelor of Science degree in
            Computer Science in 2015, I’ve been professionally building web
            applications for Silicon Valley. My education hasn’t stopped here
            though. Outside of work I continue to learn and play with new
            technologies that often come up as{' '}
            <a
              href="https://github.com/mattlean"
              rel="noreferrer"
              target="_blank"
              className="a-grey-1"
            >
              open source experiments on my GitHub
            </a>
            . As I currently live in South Bay, occasionally when I have extra
            time, I take an online or night class at{' '}
            <a
              href="http://deanza.edu"
              rel="noreferrer"
              target="_blank"
              className="a-grey-1"
            >
              De Anza College
            </a>{' '}
            where I am sluggishly working towards an associate degree in Graphic
            & Interactive&nbsp;Design.
          </p>
        </motion.section>
        <section className="closing">
          <BlindFrame
            ref={observerData[2].ref}
            nodeType="p"
            delay={blindStates[2].delay}
            observer={observerData[2].observer}
            play={
              initAnimComplete
                ? blindVisibleStates[2].isVisible
                : blindStates[2].play
            }
            className="txt-8 sm:txt-6 c-grey-1"
          >
            Thanks for reading my story.
            <br />
            I&apos;d love to hear yours!
            <br />
            <CTA to="/contact" type="lg" className="a-primary svg-primary">
              Let&apos;s start talking
            </CTA>
          </BlindFrame>
        </section>
        <motion.section
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 0.4, duration: 0.4, ease: 'easeOut' },
          }}
          className="subgrid-resume txt-3 c-grey-2"
        >
          <section className="work">
            <h2 className="h-9 dispw-bold tt-uppercase">Work</h2>
            <dl>
              <dt>LGC Biosearch Technologies</dt>
              <dd>
                Web Developer Consultant
                <br />
                2014 &ndash; Present
              </dd>
              <dt>Medable</dt>
              <dd>
                Frontend Web Developer
                <br />
                2016 &ndash; 2018
              </dd>
              <dt>Miles & Company</dt>
              <dd>
                Frontend Engineer
                <br />
                2015 &ndash; 2016
              </dd>
              <dt>Food Lovers United&nbsp;Company</dt>
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
              <dt>University of California, Santa&nbsp;Cruz</dt>
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
                <li>Intersection Observer</li>
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
        </motion.section>
      </main>
      <MainFooter />
    </motion.div>
  )
}

export default About

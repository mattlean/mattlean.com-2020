import React from 'react'
import { motion } from 'framer-motion'
import BlindFrame from '../../components/Blind/BlindFrame'
import CTA from '../../components/CTA'
import MainFooter from '../../components/MainFooter'
import variants from '../variants'

/**
 * About Page
 */
const About = () => (
  <motion.div
    animate="initial"
    exit="out"
    initial="initial"
    variants={variants}
    onAnimationComplete={() => window.scroll(0, 0)}
    className="container"
  >
    <main className="grid-about grid">
      <section className="cover">
        <BlindFrame>
          <h1 className="header-lg">Hello, world!</h1>
        </BlindFrame>
        <BlindFrame delay={0.5} threshold={0.5}>
          <p className="txt-lg txt-grey-a">
            My name is Matt Lean and I’m a full-stack web developer & UI/UX
            designer. I was born in NY and raised in SoCal. Now I live in the SF
            Bay Area and am looking for new work opportunities!
          </p>
        </BlindFrame>
      </section>
      <BlindFrame
        delay={1}
        nodeType="section"
        threshold={0.1}
        className="content txt-grey-a"
      >
        <p>
          In elementary school, my sister introduced me to a browser game called
          Neopets. The main objective of the game was to take care of your
          virtual pets, but the most impactful feature was that it allowed users
          to personalize and share webpages in-game with HTML, CSS, and
          JavaScript. I ended up building sinful pages with lots of blue Comic
          Sans, absurdly loud autoplaying MIDI music, flashing background GIFs
          that probably triggered epileptic seizures, and seemingly endless
          stacks of alert dialog boxes that would “freeze” your computer and
          make your mom think you got a virus. (I apologize if you ever fell
          victim to my heinous crimes!) Despite the fact I was creating stupid
          webpages about my Neopets, I didn’t realize how important it was that
          the game had introduced the very fabric of the web to&nbsp;me.
        </p>
        <p>
          After countless scoldings for me to stop gaming, I quit and continued
          to learn web development through free online tutorials and books I
          couldn’t buy during visits to bookstores. These learnings would then
          be published on free web hosting platforms like GeoCities and Freewebs
          in the form of fan websites about games that intrigued me. In high
          school, I decided to try something “entrepreneurial” since my sister
          started her own neighborhood business as a dog walker. Instead of
          mowing lawns or watering plants, I decided to start freelance web
          designing and built websites for small, local businesses with PHP,
          MySQL, WordPress, Magento, phpBB, jQuery, Photoshop, Illustrator, and
          &nbsp;Flash.
        </p>
        <p>
          For college I moved to northern California to study computer science
          at the University of California, Santa Cruz. Because I had been
          self-taught up until this point, it was here that I began to truly
          realize the scope and diversity in opportunities the field offered. I
          had been completely oblivious to the importance of computer science
          fundamentals, and I began to study topics that online tutorials never
          directed me to like data structure and algorithm analysis, assembly,
          computer architecture, and more. I also tried to step away from web
          programming to explore other specializations like graphics
          programming, network programming, game programming, virtual reality,
          and more. At the end of my studies I realized that it made the most
          sense to come full circle and combine my formal computer science
          education with my previous “street” web coding experiences to find a
          job in Silicon Valley as a specialist in web&nbsp;technologies.
        </p>
        <p>
          Since graduating and receiving my Bachelor of Science degree in
          Computer Science in 2015, I’ve been professionally building web
          applications for Silicon Valley. My education hasn’t stopped here
          though. Outside of work I continue to learn and play with new
          technologies. As I currently live in South Bay, occasionally when I
          have extra time I take an online or night class at De Anza College
          where I am sluggishly working towards an associate degree in Graphic &
          Interactive&nbsp;Design.
        </p>
      </BlindFrame>
      <section className="closing">
        <BlindFrame>
          <p className="txt-lg txt-grey-a">
            Thanks for reading my story.
            <br />
            I&apos;d love to hear yours!
          </p>
        </BlindFrame>
        <BlindFrame>
          <CTA to="/contact" type="lg" className="link-primary svg-primary">
            Let&apos;s start a conversation
          </CTA>
        </BlindFrame>
      </section>
      <BlindFrame
        delay={1}
        nodeType="aside"
        threshold={0.1}
        className="resume txt-sm txt-grey-b"
      >
        <section className="work-edu">
          <h2 className="header-sm">Work</h2>
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
          <h2 className="header-sm">Education</h2>
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
            <h2 className="header-sm">Languages</h2>
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
            <h2 className="header-sm">Frontend</h2>
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
            <h2 className="header-sm">Servers</h2>
            <ul>
              <li>AWS Elastic Beanstalk</li>
              <li>Amazon S3</li>
              <li>Heroku</li>
              <li>Google App Engine</li>
              <li>Apache</li>
            </ul>
          </section>
          <section>
            <h2 className="header-sm">Backend</h2>
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
            <h2 className="header-sm">Databases</h2>
            <ul>
              <li>PostgreSQL</li>
              <li>MongoDB</li>
              <li>Google Cloud Datastore</li>
              <li>MySQL</li>
            </ul>
            <h2 className="header-sm">Testing</h2>
            <ul>
              <li>Jest</li>
              <li>Cypress</li>
              <li>Enzyme</li>
              <li>Mocha, Chai</li>
            </ul>
            <h2 className="header-sm">Tooling</h2>
            <ul>
              <li>webpack</li>
              <li>GitHub</li>
              <li>CircleCI</li>
              <li>Git</li>
              <li>Gulp</li>
              <li>Grunt</li>
              <li>Subversion</li>
            </ul>
            <h2 className="header-sm">Design</h2>
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

export default About

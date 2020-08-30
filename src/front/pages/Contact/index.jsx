import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import BlindFrame from '../../components/Blind/BlindFrame'
import MainFooter from '../../components/MainFooter'
import VARIANTS from '../page_variants'
import {
  setupBlindObservers,
  useInitAnim,
} from '../../components/Blind/initAnimUtil'
import { useHeadDataEffect } from '../../util'
import { MailIcon } from '@primer/octicons-react'
import LogoLinkedIn from '../../assets/icons/linkedin.png'

/**
 * Contact Page
 */
const Contact = () => {
  useHeadDataEffect()

  const {
    blindVisibleStates,
    blindStates,
    initAnimComplete,
    observerData,
    runInitAnim,
  } = useInitAnim(4)

  // Setup effect which is only run once
  useEffect(() => {
    // Focus starting element on page load
    if (observerData[0].ref.current) observerData[0].ref.current.focus()

    const observers = setupBlindObservers(
      [0.5, 0.1, 0.1, 0.1],
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
      <main aria-label="Content" className="grid-contact grid">
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
            className="h-2 sm:h-3 lh-1"
          >
            Let’s get in&nbsp;touch.
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
            className="txt-8 sm:txt-6 c-grey-1"
          >
            Have any questions? Got a project in mind for&nbsp;me?
            <br />
            Let’s connect and start&nbsp;talking.
          </BlindFrame>
        </section>
        <ul>
          <BlindFrame
            ref={observerData[2].ref}
            nodeType="li"
            delay={blindStates[2].delay}
            observer={observerData[2].observer}
            play={
              initAnimComplete
                ? blindVisibleStates[2].isVisible
                : blindStates[2].play
            }
          >
            <a href="mailto:matt@mattlean.com" className="a-primary">
              <MailIcon size={24} />
              matt@mattlean.com
            </a>
          </BlindFrame>
          <BlindFrame
            ref={observerData[3].ref}
            nodeType="li"
            delay={blindStates[3].delay}
            observer={observerData[3].observer}
            play={
              initAnimComplete
                ? blindVisibleStates[3].isVisible
                : blindStates[3].play
            }
          >
            <a
              href="https://linkedin.com/in/mattlean"
              rel="noreferrer"
              target="_blank"
              className="a-primary"
            >
              <img src={LogoLinkedIn} alt="LinkedIn Icon" />
              linkedin.com/in/mattlean
            </a>
          </BlindFrame>
        </ul>
      </main>
      <MainFooter />
    </motion.div>
  )
}

export default Contact

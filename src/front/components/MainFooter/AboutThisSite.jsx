import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import { Modal } from 'eswiss'
import { motion } from 'framer-motion'
import { ROUTE_PREFIX as BLOG_PREFIX } from '../../../common/data/route/blog'
import { ROUTE_PREFIX as PROJECT_PREFIX } from '../../../common/data/route/project'
import VARIANTS from '../modal_variants'
import X from '../../assets/icons/x.svg'

const AboutThisSite = ({ focusEleOnClose, isOpen, setIsOpen }) => {
  const animateModal = isOpen ? 'animate' : 'initial'
  const modalH = useRef(null)

  const modalOverlay = (
    <motion.div
      animate={animateModal}
      initial="initial"
      variants={VARIANTS}
      onAnimationComplete={() => {
        if (animateModal === 'animate' && modalH && modalH.current) {
          modalH.current.focus()
        }
      }}
    />
  )

  const closeContent = <X />

  return (
    <Modal
      __IS_SERVER__={__IS_SERVER__}
      autoCenterH={true}
      autoCenterV={true}
      closeContent={closeContent}
      closeOnOverlayClick={true}
      focusEleOnClose={focusEleOnClose}
      isOpen={isOpen}
      modalClassName="modal"
      onClose={() => setIsOpen(false)}
      onOpen={null}
      overlayClassName="ats"
      overlayOverride={modalOverlay}
      overrideClassName={true}
      useAriaHidden={true}
      useAriaModal={true}
    >
      <h1 ref={modalH} className="modal-h h-4 sm:h-6" tabIndex="-1">
        About MattLean.com
      </h1>
      <p>
        MattLean.com is designed to be responsive, meaning it works on all
        screen sizes, from large desktop monitors to small mobile
        device&nbsp;screens.
      </p>
      <p>
        This site is also built with accessibility in mind, so it supports
        keyboard and screen reader&nbsp;interactions.
      </p>
      <p>
        Light and dark modes can be controlled in the main navigation to
        accommodate for different viewing scenarios and preferences. Light mode
        will automatically activate at 6:00 AM and dark mode will automatically
        activate at 6:00 PM in the visitor’s time zone. When manually selecting
        a mode, your selection will be remembered for 24&nbsp;hours.
      </p>
      <p>
        If you’re interested in learning about some details behind this website,
        you can get an overview on the{' '}
        <Link to={`${PROJECT_PREFIX}ml2020`}>project page</Link> that goes over
        technology stack used, GitHub repository,&nbsp;etc.
      </p>
      <p>
        If would like to get a more in-depth look at the development process for
        this site, consider reading the{' '}
        <Link to={`${BLOG_PREFIX}cs-ml2020`}>case&nbsp;study</Link>.
      </p>
    </Modal>
  )
}

export default AboutThisSite

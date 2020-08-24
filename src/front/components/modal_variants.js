const MODAL_VARIANTS = {
  animate: {
    display: 'block',
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.2,
      ease: 'easeOut',
    },
  },
  initial: {
    opacity: 0,
    scale: 1.2,
    transition: {
      duration: 0.2,
      ease: 'easeIn',
    },
    transitionEnd: {
      display: 'none',
    },
  },
}

export default MODAL_VARIANTS

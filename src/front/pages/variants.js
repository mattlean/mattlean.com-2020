const variants = {
  initial: {
    opacity: 1,
    y: 0,
  },
  out: {
    opacity: 0,
    transition: {
      duration: 0.5,
      ease: 'easeIn',
    },
    y: '100px',
  },
}

export default variants

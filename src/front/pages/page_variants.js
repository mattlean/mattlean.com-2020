const PAGE_VARIANTS = {
  initial: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 1,
    },
  },
  out: {
    opacity: 0,
    transition: {
      duration: 0.4,
      ease: 'easeIn',
    },
    y: '100px',
  },
}

export default PAGE_VARIANTS

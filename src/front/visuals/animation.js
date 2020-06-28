export const blindVariants = {
  animate: (delay) => ({
    height: '0%',
    transition: {
      delay,
      duration: 0.4,
      ease: 'easeOut',
    },
  }),
  initial: { height: '100%' },
}

export const pageVariants = {
  initial: {
    opacity: 1,
    y: 0,
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

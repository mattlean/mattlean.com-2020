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
  in: {
    opacity: 1,
    y: 0,
  },
  out: {
    opacity: 0,
  },
}

export const pageTransition = {
  transition: 'tween',
  ease: 'easeIn',
}

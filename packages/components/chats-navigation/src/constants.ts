export const ANIMATION_CONFIG = {
  default: {
    initial: { scale: 0.8, opacity: 0 },
    animate: { scale: 1, opacity: 1, y: 0 },
    exit: { height: 0, scale: 0.8, y: -10, opacity: 0 },
  },

  mobile: {
    initial: { opacity: 0, y: 200 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 200 },
  },
};

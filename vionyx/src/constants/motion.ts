export const FADE_IN_VARIANTS = {
  hidden: { opacity: 0 },
  visible: (custom: { delay?: number; duration?: number } = {}) => ({
    opacity: 1,
    transition: {
      delay: custom.delay ?? 0,
      duration: custom.duration ?? 0.4,
      ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
    },
  }),
};

export const SLIDE_UP_VARIANTS = {
  hidden: (custom: { distance?: number } = {}) => ({
    opacity: 0,
    y: custom.distance ?? 24,
  }),
  visible: (custom: { delay?: number; duration?: number } = {}) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: custom.delay ?? 0,
      duration: custom.duration ?? 0.5,
      ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
    },
  }),
};

export const SCALE_IN_VARIANTS = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: (custom: { delay?: number; duration?: number } = {}) => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay: custom.delay ?? 0,
      duration: custom.duration ?? 0.4,
      ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
    },
  }),
};

export const STAGGER_CONTAINER_VARIANTS = {
  hidden: {},
  visible: (custom: { staggerDelay?: number } = {}) => ({
    transition: {
      staggerChildren: custom.staggerDelay ?? 0.1,
    },
  }),
};

export const VIEWPORT_ANIMATION_OPTIONS = {
  once: true,
  margin: "-60px",
  amount: 0.2,
} as const;

import { m, useReducedMotion } from "motion/react";

function ScrollReveal({ children, delay = 0 }) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <m.div
      initial={prefersReducedMotion ? false : { opacity: 0, y: 48 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{
        duration: 0.72,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </m.div>
  );
}

export default ScrollReveal;

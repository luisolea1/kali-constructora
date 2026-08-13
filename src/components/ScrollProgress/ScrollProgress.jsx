import { m, useScroll, useSpring } from "motion/react";

import "../../blocks/scroll-progress.css";

function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 28,
    restDelta: 0.001,
  });

  return (
    <m.div
      className="scroll-progress"
      style={{ scaleX: smoothProgress }}
      aria-hidden="true"
    />
  );
}

export default ScrollProgress;

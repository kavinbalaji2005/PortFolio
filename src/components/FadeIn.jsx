import { motion, useReducedMotion } from "framer-motion";

/**
 * FadeIn — a reusable scroll-triggered fade + slide animation wrapper.
 *
 * @param {string} direction - "up" | "down" | "left" | "right"
 * @param {number} delay - delay in seconds
 * @param {number} distance - px to translate from
 * @param {number} duration - animation duration in seconds
 * @param {string} className - additional classes
 * @param {boolean} blur - start with blur and sharpen on reveal
 * @param {number} startScale - starting scale (e.g. 0.95)
 * @param {React.ReactNode} children
 */
export default function FadeIn({
  children,
  direction = "up",
  delay = 0,
  distance = 0,
  duration = 0.8,
  className = "",
  once = false,
  blur = false,
  startScale = 1,
}) {
  const shouldReduceMotion = useReducedMotion();
  const actualDistance = shouldReduceMotion ? 0 : distance;

  const dirMap = {
    up: { y: actualDistance },
    down: { y: -actualDistance },
    left: { x: actualDistance },
    right: { x: -actualDistance },
  };

  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: shouldReduceMotion ? 1 : startScale,
        filter: blur && !shouldReduceMotion ? "blur(8px)" : "blur(0px)",
        ...dirMap[direction],
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
        scale: 1,
        filter: "blur(0px)",
      }}
      viewport={{ once, margin: "-100px" }}
      transition={{
        duration: shouldReduceMotion ? 0.3 : duration,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

import { motion } from "framer-motion";

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
  const dirMap = {
    up: { y: distance },
    down: { y: -distance },
    left: { x: distance },
    right: { x: -distance },
  };

  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: startScale,
        filter: blur ? "blur(8px)" : "blur(0px)",
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
        duration,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

/**
 * ScrollReveal — a scroll-linked animation wrapper.
 * Elements animate based on scroll position (scrubbing), not just triggering.
 *
 * @param {children} ReactNode - Elements to animate
 * @param {string} className - Additional classes
 * @param {number} yOffset - Distance to move on Y axis (default 50)
 * @param {number} startOpacity - Opacity start value (default 0)
 * @param {number} endOpacity - Opacity end value (default 1)
 * @param {number} duration - Scale factor for scroll timeframe (0-1 range of viewport)
 */
export default function ScrollReveal({
  children,
  className = "",
  yOffset = 50,
  startOpacity = 0,
  endOpacity = 1,
  scale = false,
}) {
  const ref = useRef(null);
  
  // Track scroll progress of this specific element within the viewport
  // "start end" = when element top hits viewport bottom
  // "end start" = when element bottom hits viewport top
  // We want the main animation to happen as it enters the screen
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [startOpacity, endOpacity]);
  const y = useTransform(scrollYProgress, [0, 1], [yOffset, 0]);
  const s = useTransform(scrollYProgress, [0, 1], [scale ? 0.9 : 1, 1]);

  return (
    <motion.div
      ref={ref}
      style={{ opacity, y, scale: s }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

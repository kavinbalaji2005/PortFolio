import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

/**
 * SectionDivider — animated gradient line that draws itself as it scrolls into view.
 */
export default function SectionDivider({ className = "" }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  });

  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 0.5, 1]);

  return (
    <div ref={ref} className={`py-4 ${className}`}>
      <motion.div
        style={{ scaleX, opacity }}
        className="h-[1px] max-w-[1200px] mx-auto origin-center bg-gradient-to-r from-transparent via-white/[0.08] to-transparent"
      />
    </div>
  );
}

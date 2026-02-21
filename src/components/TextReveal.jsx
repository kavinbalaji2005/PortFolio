import { motion, useInView } from "framer-motion";
import { useRef } from "react";

/**
 * TextReveal — cinematic word-by-word text reveal with mask animation.
 * Each word slides up from below a hidden overflow clip.
 *
 * @param {string} text - The text to animate
 * @param {string} className - Additional CSS classes for the outer wrapper
 * @param {string} as - HTML element to render ("h1", "h2", "p", etc.)
 * @param {number} delay - Base delay before animation starts (seconds)
 * @param {number} stagger - Delay between each word (seconds)
 * @param {boolean} gradient - Apply animated gradient shimmer to text
 * @param {boolean} blur - Start with blur and sharpen on reveal
 */
export default function TextReveal({
  text,
  className = "",
  as: Tag = "h2",
  delay = 0,
  stagger = 0.05,
  gradient = false,
  blur = false,
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  const words = text.split(" ");

  return (
    <Tag
      ref={ref}
      className={`flex flex-wrap ${gradient ? "text-gradient-shimmer" : ""} ${className}`}
    >
      {words.map((word, i) => (
        <span key={i} className="overflow-hidden inline-block mr-[0.3em] pb-[0.15em]">
          <motion.span
            className="inline-block"
            initial={{
              y: 0,
              opacity: gradient ? 1 : 0,
              filter: blur ? "blur(8px)" : "blur(0px)",
            }}
            animate={
              isInView
                ? { y: 0, opacity: 1, filter: "blur(0px)" }
                : { y: 0, opacity: gradient ? 1 : 0, filter: blur ? "blur(8px)" : "blur(0px)" }
            }
            transition={{
              duration: 0.6,
              delay: delay + i * stagger,
              ease: [0.33, 1, 0.68, 1],
            }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}

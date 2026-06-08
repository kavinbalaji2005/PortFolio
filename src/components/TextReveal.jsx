import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef } from "react";

/**
 * TextReveal — cinematic text reveal with multiple modes.
 *
 * Modes:
 * - "word" (default): Word-by-word slide-up reveal
 * - "char": Character-by-character reveal for dramatic effect
 * - "line": Full line mask-clip reveal
 *
 * @param {string} text - The text to animate
 * @param {string} className - Additional CSS classes for the outer wrapper
 * @param {string} as - HTML element to render ("h1", "h2", "p", etc.)
 * @param {number} delay - Base delay before animation starts (seconds)
 * @param {number} stagger - Delay between each unit (seconds)
 * @param {string} mode - "word" | "char" | "line"
 * @param {boolean} gradient - Apply animated gradient shimmer to text
 * @param {boolean} blur - Start with blur and sharpen on reveal
 */
export default function TextReveal({
  text,
  className = "",
  as: Tag = "h2",
  delay = 0,
  stagger = 0.05,
  mode = "word",
  gradient = false,
  blur = false,
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });
  const shouldReduceMotion = useReducedMotion();

  // Line mode — full text slides up from a clip mask
  if (mode === "line") {
    return (
      <Tag ref={ref} className={`overflow-hidden ${className}`}>
        <motion.span
          className="inline-block"
          initial={{
            y: shouldReduceMotion ? 0 : "110%",
            opacity: 0,
          }}
          animate={
            isInView
              ? { y: 0, opacity: 1 }
              : { y: shouldReduceMotion ? 0 : "110%", opacity: 0 }
          }
          transition={{
            duration: shouldReduceMotion ? 0.3 : 0.8,
            ease: [0.16, 1, 0.3, 1],
            delay,
          }}
        >
          {text}
        </motion.span>
      </Tag>
    );
  }

  // Character mode
  if (mode === "char") {
    const chars = text.split("");
    return (
      <Tag
        ref={ref}
        className={`flex flex-wrap ${gradient ? "text-gradient-shimmer" : ""} ${className}`}
      >
        {chars.map((char, i) => (
          <span
            key={i}
            className={`overflow-hidden inline-block ${char === " " ? "mr-[0.3em]" : ""}`}
            style={{ paddingBottom: "0.15em" }}
          >
            <motion.span
              className="inline-block"
              initial={{
                y: shouldReduceMotion ? 0 : "100%",
                opacity: 0,
                rotateX: shouldReduceMotion ? 0 : -90,
              }}
              animate={
                isInView
                  ? { y: 0, opacity: 1, rotateX: 0 }
                  : {
                      y: shouldReduceMotion ? 0 : "100%",
                      opacity: 0,
                      rotateX: shouldReduceMotion ? 0 : -90,
                    }
              }
              transition={{
                duration: shouldReduceMotion ? 0.3 : 0.5,
                ease: [0.16, 1, 0.3, 1],
                delay: shouldReduceMotion ? delay : delay + i * (stagger * 0.3),
              }}
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          </span>
        ))}
      </Tag>
    );
  }

  // Default word mode
  const words = text.split(" ");
  return (
    <Tag
      ref={ref}
      className={`flex flex-wrap ${gradient ? "text-gradient-shimmer" : ""} ${className}`}
    >
      {words.map((word, i) => (
        <span
          key={i}
          className="overflow-hidden inline-block mr-[0.3em] pb-[0.15em]"
        >
          <motion.span
            className="inline-block"
            initial={{
              y: shouldReduceMotion ? 0 : "100%",
              opacity: gradient && !shouldReduceMotion ? 1 : 0,
              filter: blur && !shouldReduceMotion ? "blur(8px)" : "blur(0px)",
            }}
            animate={
              isInView
                ? { y: 0, opacity: 1, filter: "blur(0px)" }
                : {
                    y: shouldReduceMotion ? 0 : "100%",
                    opacity: gradient && !shouldReduceMotion ? 1 : 0,
                    filter:
                      blur && !shouldReduceMotion ? "blur(8px)" : "blur(0px)",
                  }
            }
            transition={{
              duration: shouldReduceMotion ? 0.3 : 0.6,
              ease: [0.16, 1, 0.3, 1],
              delay: shouldReduceMotion ? delay : delay + i * stagger,
            }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}

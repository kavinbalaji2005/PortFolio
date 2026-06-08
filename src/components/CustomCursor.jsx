import { useEffect, useRef, useState, useCallback } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

/**
 * CustomCursor — a smooth, lerped circle cursor with contextual reactions.
 * Expands on interactive elements, shows labels, uses mix-blend-mode: difference.
 * Hidden on touch/mobile devices.
 */
export default function CustomCursor() {
  const cursorRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);
  const [cursorLabel, setCursorLabel] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 250, mass: 0.5 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Detect touch device
    const isTouch =
      "ontouchstart" in window || navigator.maxTouchPoints > 0;
    setIsTouchDevice(isTouch);
    if (isTouch) return;

    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [mouseX, mouseY, isVisible]);

  // Track interactive element hovers
  useEffect(() => {
    if (isTouchDevice) return;

    const handleElementEnter = (e) => {
      const target = e.target.closest(
        'a, button, [role="button"], [data-cursor]'
      );
      if (target) {
        setIsHovering(true);
        const label = target.getAttribute("data-cursor") || "";
        setCursorLabel(label);
      }
    };

    const handleElementLeave = (e) => {
      const target = e.target.closest(
        'a, button, [role="button"], [data-cursor]'
      );
      if (target) {
        setIsHovering(false);
        setCursorLabel("");
      }
    };

    document.addEventListener("mouseover", handleElementEnter);
    document.addEventListener("mouseout", handleElementLeave);

    return () => {
      document.removeEventListener("mouseover", handleElementEnter);
      document.removeEventListener("mouseout", handleElementLeave);
    };
  }, [isTouchDevice]);

  if (isTouchDevice) return null;

  const size = isHovering ? 60 : 20;

  return (
    <>
      {/* Main cursor */}
      <motion.div
        ref={cursorRef}
        className="fixed top-0 left-0 pointer-events-none z-[9998] flex items-center justify-center rounded-full mix-blend-difference"
        style={{
          x: cursorX,
          y: cursorY,
          width: size,
          height: size,
          translateX: "-50%",
          translateY: "-50%",
          backgroundColor: "white",
        }}
        animate={{
          width: size,
          height: size,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{
          width: { type: "spring", damping: 20, stiffness: 300 },
          height: { type: "spring", damping: 20, stiffness: 300 },
          opacity: { duration: 0.2 },
        }}
      >
        {cursorLabel && (
          <motion.span
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            className="text-[10px] font-bold text-black mix-blend-normal uppercase tracking-wider"
          >
            {cursorLabel}
          </motion.span>
        )}
      </motion.div>
    </>
  );
}

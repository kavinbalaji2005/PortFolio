import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

/**
 * Preloader — cinematic intro sequence on page load.
 * Shows on first visit (sessionStorage check), then reveals the page.
 */
export default function Preloader({ onComplete }) {
  const [phase, setPhase] = useState("enter"); // enter → hold → exit → done
  const [shouldShow, setShouldShow] = useState(true);

  useEffect(() => {
    // Skip on subsequent visits within the same session
    if (sessionStorage.getItem("preloader-shown")) {
      setShouldShow(false);
      onComplete?.();
      return;
    }

    sessionStorage.setItem("preloader-shown", "true");

    // Phase timing
    const holdTimer = setTimeout(() => setPhase("hold"), 800);
    const exitTimer = setTimeout(() => setPhase("exit"), 2000);
    const doneTimer = setTimeout(() => {
      setPhase("done");
      onComplete?.();
    }, 2800);

    return () => {
      clearTimeout(holdTimer);
      clearTimeout(exitTimer);
      clearTimeout(doneTimer);
    };
  }, [onComplete]);

  if (!shouldShow || phase === "done") return null;

  return (
    <AnimatePresence>
      {phase !== "done" && (
        <motion.div
          className="fixed inset-0 z-[10000] flex items-center justify-center bg-[#050505]"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Background curtain — slides up on exit */}
          <motion.div
            className="absolute inset-0 bg-[#050505]"
            animate={
              phase === "exit"
                ? { y: "-100%", transition: { duration: 0.8, ease: [0.77, 0, 0.175, 1] } }
                : {}
            }
          />

          {/* Name reveal */}
          <div className="relative z-10 overflow-hidden">
            <motion.div
              initial={{ y: "100%", opacity: 0 }}
              animate={
                phase === "exit"
                  ? { y: "-100%", opacity: 0, transition: { duration: 0.6, ease: [0.77, 0, 0.175, 1] } }
                  : { y: 0, opacity: 1, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 } }
              }
              className="flex flex-col items-center gap-3"
            >
              <span className="text-5xl md:text-7xl font-display font-bold tracking-tighter text-white">
                KB
              </span>
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.6, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="h-[1px] w-16 bg-white/30 origin-left"
              />
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.5 }}
                transition={{ duration: 0.4, delay: 1.2 }}
                className="text-xs tracking-[0.3em] uppercase text-white/50 font-sans"
              >
                Portfolio
              </motion.span>
            </motion.div>
          </div>

          {/* Corner counter animation */}
          <motion.div
            className="absolute bottom-8 right-8 text-sm font-mono text-white/20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <Counter />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + Math.floor(Math.random() * 15) + 5;
      });
    }, 150);

    return () => clearInterval(interval);
  }, []);

  return <span>{Math.min(count, 100)}%</span>;
}

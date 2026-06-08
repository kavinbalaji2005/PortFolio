import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { useScroll as useScrollCtx } from "./ScrollContext";

const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "certifications", label: "Certs" },
  { id: "contact", label: "Contact" },
];

export default function ScrollNavigator() {
  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  const { scrollToSection } = useScrollCtx();
  const [activeSection, setActiveSection] = useState("home");
  const [dotsPosition, setDotsPosition] = useState([]);

  // Detect active section via IntersectionObserver
  useEffect(() => {
    const observers = [];
    navItems.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(id);
            }
          });
        },
        {
          rootMargin: "-40% 0px -40% 0px",
          threshold: 0,
        }
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  // Calculate dots' relative positions based on section offsets
  useEffect(() => {
    const calculatePositions = () => {
      const scrollHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      if (scrollHeight <= 0) return;

      const positions = navItems.map((item) => {
        const el = document.getElementById(item.id);
        if (!el) return 0;
        const rect = el.getBoundingClientRect();
        const scrollTop = window.scrollY + rect.top;
        return Math.max(0, Math.min(100, (scrollTop / scrollHeight) * 100));
      });
      setDotsPosition(positions);
    };

    calculatePositions();

    // Use ResizeObserver to watch document body size changes (image loading, dynamic layouts)
    const observer = new ResizeObserver(() => {
      calculatePositions();
    });
    if (document.body) {
      observer.observe(document.body);
    }

    window.addEventListener("resize", calculatePositions);
    window.addEventListener("load", calculatePositions);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", calculatePositions);
      window.removeEventListener("load", calculatePositions);
    };
  }, []);

  return (
    <div className="fixed right-4 top-24 bottom-24 w-6 z-50 hidden md:flex flex-col items-center">
      {/* Full-Height Vertical Track */}
      <div className="absolute inset-y-0 w-[2px] bg-white/10 left-1/2 -translate-x-1/2">
        {/* Dynamic Progress Line */}
        <motion.div
          style={{ scaleY, originY: 0 }}
          className="absolute inset-y-0 left-0 right-0 bg-white/50"
        />
      </div>

      {/* Interactive Dots positioned dynamically */}
      <div className="absolute inset-y-0 left-0 right-0 z-10 pointer-events-none">
        {navItems.map((item, index) => {
          const isActive = activeSection === item.id;
          const pos =
            dotsPosition[index] !== undefined
              ? dotsPosition[index]
              : (index / (navItems.length - 1)) * 100;

          return (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              style={{ top: `${pos}%` }}
              className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 group flex items-center justify-center w-6 h-6 rounded-full focus:outline-none focus-visible:ring-1 focus-visible:ring-white pointer-events-auto"
              aria-label={`Scroll to ${item.label}`}
            >
              {/* Micro-Tooltip */}
              <span className="absolute right-8 text-[9px] font-mono uppercase tracking-[0.25em] text-white/50 opacity-0 group-hover:opacity-100 group-hover:-translate-x-1 transition-all duration-300 pointer-events-none select-none whitespace-nowrap">
                {item.label}
              </span>

              {/* Dot */}
              <motion.div
                animate={{
                  scale: isActive ? 1.25 : 1,
                  backgroundColor: isActive
                    ? "#ffffff"
                    : "rgba(255, 255, 255, 0.15)",
                  borderColor: isActive ? "#ffffff" : "rgba(255, 255, 255, 0.3)",
                  boxShadow: isActive
                    ? "0 0 10px rgba(255, 255, 255, 0.5)"
                    : "0 0 0px rgba(255, 255, 255, 0)",
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="w-1.5 h-1.5 rounded-full border border-transparent bg-[#050505] z-20"
              />
            </button>
          );
        })}
      </div>
    </div>
  );
}

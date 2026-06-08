import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useScroll } from "./ScrollContext";
import MagneticButton from "./MagneticButton";

const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "certifications", label: "Certifications" },
  { id: "contact", label: "Contact" },
];

const Navigation = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [visible, setVisible] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollToSection } = useScroll();

  // Detect active section via IntersectionObserver on the viewport
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

  // Track scroll position to trigger background glassmorphism
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Keyboard navigation (Up / Down arrow keys)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.target.tagName === "INPUT" || e.target.tagName === "TEXTAREA")
        return;

      const currentIndex = navItems.findIndex(
        (item) => item.id === activeSection
      );

      if (e.key === "ArrowDown" && currentIndex < navItems.length - 1) {
        e.preventDefault();
        const nextId = navItems[currentIndex + 1].id;
        setActiveSection(nextId);
        scrollToSection(nextId);
      } else if (e.key === "ArrowUp" && currentIndex > 0) {
        e.preventDefault();
        const prevId = navItems[currentIndex - 1].id;
        setActiveSection(prevId);
        scrollToSection(prevId);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeSection, scrollToSection]);

  const handleNavClick = useCallback(
    (id) => {
      setActiveSection(id);
      scrollToSection(id);
      setMobileMenuOpen(false);
    },
    [scrollToSection]
  );

  return (
    <>
      {/* Main Navigation */}
      <AnimatePresence>
        {visible && (
          <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            aria-label="Main navigation"
            className="fixed top-0 left-0 right-0 z-50 px-4 md:px-8 py-4"
          >
            <div className="max-w-5xl mx-auto">
              <motion.div
                animate={{
                  backgroundColor: scrolled
                    ? "rgba(10, 10, 12, 0.9)"
                    : "rgba(10, 10, 12, 0.65)",
                  borderColor: scrolled
                    ? "rgba(255, 255, 255, 0.18)"
                    : "rgba(255, 255, 255, 0.08)",
                  backdropFilter: "blur(24px)",
                }}
                transition={{ duration: 0.4 }}
                className="flex items-center justify-between rounded-2xl px-5 py-2.5 border shadow-2xl shadow-black/10"
              >
                {/* Logo / Name */}
                <MagneticButton strength={0.15}>
                  <button
                    onClick={() => handleNavClick("home")}
                    className="flex items-center hover:opacity-80 transition-opacity"
                    data-cursor="Home"
                  >
                    <img src="/logo.png" alt="Logo" className="h-7 w-auto" />
                  </button>
                </MagneticButton>

                {/* Desktop Nav Links — pill-style */}
                <div className="hidden md:flex items-center gap-0.5 bg-white/[0.03] rounded-xl p-1">
                  {navItems.map((item) => (
                    <MagneticButton key={item.id} strength={0.1} radius={50}>
                      <button
                        onClick={() => handleNavClick(item.id)}
                        aria-label={`Navigate to ${item.label} section`}
                        aria-current={
                          activeSection === item.id ? "true" : undefined
                        }
                        className={`relative px-3.5 py-1.5 text-xs font-medium transition-colors duration-300 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
                          activeSection === item.id
                            ? "text-white"
                            : "text-white/60 hover:text-white/90"
                        }`}
                      >
                        {activeSection === item.id && (
                          <motion.div
                            layoutId="nav-pill"
                            className="absolute inset-0 rounded-lg bg-white/[0.08]"
                            transition={{
                              type: "spring",
                              stiffness: 400,
                              damping: 30,
                            }}
                          />
                        )}
                        <span className="relative z-10">{item.label}</span>
                      </button>
                    </MagneticButton>
                  ))}
                </div>

                {/* Mobile Menu Toggle */}
                <button
                  className="md:hidden p-2 text-white/60 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-lg transition-colors"
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  aria-label="Toggle mobile menu"
                >
                  {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
                </button>
              </motion.div>

              {/* Mobile Nav Menu */}
              <AnimatePresence>
                {mobileMenuOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className="md:hidden mt-2 overflow-hidden bg-[#111113]/90 backdrop-blur-2xl border border-white/[0.06] rounded-2xl"
                  >
                    <div className="flex flex-col p-3 w-full gap-1">
                      {navItems.map((item, i) => (
                        <motion.button
                          key={item.id}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.05 }}
                          onClick={() => handleNavClick(item.id)}
                          className={`px-4 py-3 text-left rounded-xl font-medium text-sm transition-all ${
                            activeSection === item.id
                              ? "bg-white/[0.06] text-white"
                              : "text-white/60 hover:bg-white/[0.03] hover:text-white/90"
                          }`}
                        >
                          {item.label}
                        </motion.button>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>


    </>
  );
};

export default Navigation;

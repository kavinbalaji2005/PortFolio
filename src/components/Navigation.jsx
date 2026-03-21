import { useState, useEffect, useCallback, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useScroll } from "./ScrollContext";

const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "certifications", label: "Certs" },
  { id: "contact", label: "Contact" },
];

const Navigation = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [visible, setVisible] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
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
            if (entry.isIntersecting && entry.intersectionRatio >= 0.3) {
              setActiveSection(id);
            }
          });
        },
        { threshold: 0.3 }
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  // Hide nav on scroll down, show on scroll up
  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY < 100) {
        setVisible(true);
      } else if (currentScrollY > lastScrollY + 5) {
        setVisible(false);
      } else if (currentScrollY < lastScrollY - 5) {
        setVisible(true);
      }
      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Keyboard navigation (Up / Down arrow keys)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.target.tagName === "INPUT" || e.target.tagName === "TEXTAREA") return;

      const currentIndex = navItems.findIndex((item) => item.id === activeSection);

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
    },
    [scrollToSection]
  );

  return (
    <AnimatePresence>
      {visible && (
        <motion.nav
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          aria-label="Main navigation"
          className="fixed top-0 left-0 right-0 z-50 px-6 md:px-12 py-4"
        >
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center justify-between bg-surface/60 backdrop-blur-2xl border border-white/10 rounded-2xl px-6 py-3 shadow-2xl shadow-black/20 mx-6 md:mx-0">
              {/* Logo / Name */}
              <button
                onClick={() => handleNavClick("home")}
                className="flex items-center hover:opacity-80 transition-opacity"
              >
                <img src="/logo.png" alt="Logo" className="h-8 w-auto" />
              </button>

              {/* Desktop Nav Links */}
              <div className="hidden md:flex items-center gap-1 sm:gap-2">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    aria-label={`Navigate to ${item.label} section`}
                    aria-current={activeSection === item.id ? "true" : undefined}
                    className={`relative px-3 py-1.5 text-xs sm:text-sm font-medium transition-all duration-300 rounded-lg ${
                      activeSection === item.id
                        ? "text-white"
                        : "text-text-secondary hover:text-white"
                    }`}
                  >
                    {activeSection === item.id && (
                      <motion.div
                        layoutId="nav-active"
                        className="absolute inset-0 rounded-lg"
                        style={{
                          background: "rgba(255, 255, 255, 0.1)",
                        }}
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                    <span className="relative z-10">{item.label}</span>

                    {/* Active dot indicator */}
                    {activeSection === item.id && (
                      <motion.div
                        layoutId="nav-dot"
                        className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-white"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </button>
                ))}
              </div>

              {/* Mobile Menu Toggle */}
              <button
                className="md:hidden p-2 text-white/80 hover:text-white transition-colors"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>

            {/* Gradient underline (Desktop only) */}
            <div
              className="mx-6 h-[1px] opacity-20 hidden md:block bg-white"
            />

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
              {mobileMenuOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full left-0 right-0 p-4 md:hidden"
                >
                  <div className="bg-surface/90 backdrop-blur-3xl border border-white/10 rounded-2xl p-4 flex flex-col gap-2 shadow-2xl">
                    {navItems.map((item) => (
                      <button
                        key={item.id}
                        onClick={() => {
                          handleNavClick(item.id);
                          setMobileMenuOpen(false);
                        }}
                        className={`p-4 rounded-xl text-left font-medium transition-all ${
                          activeSection === item.id
                            ? "bg-white/10 text-white"
                            : "text-text-secondary hover:bg-white/5 hover:text-white"
                        }`}
                      >
                        {item.label}
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.nav>
      )}
    </AnimatePresence>
  );
};

export default Navigation;

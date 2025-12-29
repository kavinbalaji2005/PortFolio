import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-scroll";
import {
  HiMenu,
  HiX,
  HiHome,
  HiUser,
  HiCode,
  HiBriefcase,
  HiAcademicCap,
  HiMail,
} from "react-icons/hi";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const mobileMenuRef = useRef(null);

  const navItems = [
    { name: "Home", to: "hero", icon: HiHome },
    { name: "About", to: "about", icon: HiUser },
    { name: "Skills", to: "skills", icon: HiCode },
    { name: "Projects", to: "projects", icon: HiBriefcase },
    { name: "Certifications", to: "certifications", icon: HiAcademicCap },
    { name: "Contact", to: "contact", icon: HiMail },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Always show navbar at top of page
      if (currentScrollY < 50) {
        setIsVisible(true);
        setIsScrolled(false);
      } else {
        setIsScrolled(true);
        // Show navbar when scrolling up, hide when scrolling down
        if (currentScrollY < lastScrollY) {
          setIsVisible(true);
        } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
          setIsVisible(false);
          setIsMobileMenuOpen(false); // Close mobile menu when hiding
        }
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target)
      ) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  return (
    <div className="fixed top-4 left-0 right-0 z-50 flex justify-center">
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: isVisible ? 0 : -150 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="relative"
        ref={mobileMenuRef}
      >
        <div
          className={`transition-all duration-300 ${
            isScrolled
              ? "backdrop-blur-xl bg-gradient-to-r from-neutral-900/95 via-neutral-800/95 to-neutral-900/95 border border-white/30 shadow-2xl"
              : "backdrop-blur-md bg-neutral-900/80 border border-white/20 shadow-lg"
          } rounded-full px-4 py-3 md:px-6 md:py-3 lg:px-8`}
        >
          {/* Desktop Layout */}
          <div className="hidden xl:flex items-center space-x-8">
            {/* Logo */}
            <motion.div whileHover={{ scale: 1.05 }} className="flex-shrink-0">
              <img src="/logo.png" alt="KB Logo" className="h-10 w-auto" />
            </motion.div>

            {/* Navigation Links */}
            <div className="flex items-center space-x-2">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.name}
                    to={item.to}
                    spy={true}
                    smooth={true}
                    offset={-80}
                    duration={500}
                    onSetActive={() => setActiveSection(item.to)}
                    className="cursor-pointer text-gray-300 hover:text-white px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 hover:bg-white/10 backdrop-blur-sm group relative"
                    activeClass="text-white bg-white/15"
                  >
                    <motion.div
                      className="flex items-center gap-2"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Icon className="w-4 h-4 transition-transform group-hover:scale-110" />
                      {item.name}
                    </motion.div>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Mobile/Tablet Layout */}
          <div className="xl:hidden flex items-center justify-between space-x-4">
            {/* Logo */}
            <motion.div whileHover={{ scale: 1.05 }} className="flex-shrink-0">
              <img src="/logo.png" alt="KB Logo" className="h-10 w-auto" />
            </motion.div>

            {/* Right side buttons */}
            <div className="flex items-center space-x-2">
              {/* Mobile Menu Toggle */}
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 rounded-full backdrop-blur-sm bg-white/10 border border-white/20 text-gray-300 hover:bg-white/15 transition-all duration-200"
                aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
                aria-expanded={isMobileMenuOpen}
              >
                {isMobileMenuOpen ? (
                  <HiX className="w-5 h-5" />
                ) : (
                  <HiMenu className="w-5 h-5" />
                )}
              </motion.button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="xl:hidden absolute top-full left-2 right-2 mt-2 backdrop-blur-xl bg-gradient-to-br from-neutral-900/95 via-neutral-800/90 to-neutral-900/95 border border-white/20 rounded-2xl shadow-2xl overflow-hidden"
            >
              <div className="px-2 py-3 space-y-1">
                {navItems.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <Link
                        to={item.to}
                        spy={true}
                        smooth={true}
                        offset={-80}
                        duration={500}
                        onSetActive={() => setActiveSection(item.to)}
                        className="flex items-center gap-2 cursor-pointer text-gray-300 hover:text-white py-3 rounded-xl text-xs font-medium transition-all duration-200 hover:bg-white/10 backdrop-blur-sm border-b border-white/10 last:border-b-0 group"
                        activeClass="text-white bg-white/15"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        <Icon className="w-4 h-4 flex-shrink-0 transition-transform group-hover:scale-110" />
                        <span className="whitespace-nowrap">{item.name}</span>
                      </Link>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </div>
  );
};

export default Navbar;

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { HiSun, HiMoon, HiMenu, HiX } from 'react-icons/hi';
import { useTheme } from '../contexts/ThemeContext';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  const navItems = [
    { name: 'Home', to: 'hero' },
    { name: 'About', to: 'about' },
    { name: 'Skills', to: 'skills' },
    { name: 'Projects', to: 'projects' },
    { name: 'Contact', to: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-4 left-1/2 -translate-x-1/2 z-50 px-4 w-fit"
    >
      <div
        className={`transition-all duration-300 ${
          isScrolled
            ? 'backdrop-blur-xl bg-gray-200/95 dark:bg-white/20 border border-gray-300/70 dark:border-white/30 shadow-2xl'
            : 'backdrop-blur-md bg-gray-100/90 dark:bg-white/15 border border-gray-200/60 dark:border-white/20 shadow-lg'
        } rounded-full px-4 py-3 md:px-6`}
      >
        {/* Fix: separate layout row to center nav links, not whole flex */}
        <div className="flex items-center space-x-4">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex-shrink-0"
          >
            <img src="/logo.png" alt="KB Logo" className="h-10 w-auto" />
          </motion.div>

          {/* Nav Links */}
          <div className="hidden md:flex justify-center items-center space-x-2">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.to}
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                className="cursor-pointer text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 hover:bg-gray-300/60 dark:hover:bg-white/15 backdrop-blur-sm"
                activeClass="text-blue-600 dark:text-blue-400 bg-gray-300/70 dark:bg-white/20"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Theme Toggle */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={toggleTheme}
            className="p-2 rounded-full backdrop-blur-sm bg-gray-300/70 dark:bg-white/15 border border-gray-400/50 dark:border-white/20 text-gray-700 dark:text-gray-300 hover:bg-gray-400/70 dark:hover:bg-white/25 transition-all duration-200"
          >
            {isDark ? <HiSun className="w-5 h-5" /> : <HiMoon className="w-5 h-5" />}
          </motion.button>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-full backdrop-blur-sm bg-gray-300/70 dark:bg-white/15 border border-gray-400/50 dark:border-white/20 text-gray-700 dark:text-gray-300 hover:bg-gray-400/70 dark:hover:bg-white/25 transition-all duration-200"
            >
              {isMobileMenuOpen ? <HiX className="w-5 h-5" /> : <HiMenu className="w-5 h-5" />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Nav Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="md:hidden absolute top-full left-0 right-0 mt-2 backdrop-blur-xl bg-gray-200/95 dark:bg-black/40 border border-gray-300/70 dark:border-white/20 rounded-2xl shadow-2xl overflow-hidden"
            style={{
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
            }}
          >
            <div className="px-2 py-3 space-y-1 backdrop-blur-xl">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link
                    to={item.to}
                    spy={true}
                    smooth={true}
                    offset={-80}
                    duration={500}
                    className="block cursor-pointer text-gray-700 dark:text-gray-100 hover:text-blue-600 dark:hover:text-blue-400 px-4 py-3 rounded-xl text-base font-medium transition-all duration-200 hover:bg-gray-300/60 dark:hover:bg-white/10 backdrop-blur-sm border-b border-gray-300/30 dark:border-white/10 last:border-b-0"
                    activeClass="text-blue-600 dark:text-blue-400 bg-gray-300/70 dark:bg-white/15"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;

import React from 'react';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { ThemeProvider } from './contexts/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gradient-to-br dark:from-gray-900 dark:via-gray-800 dark:to-black transition-colors duration-300 relative overflow-hidden">
        {/* Global Animated Background Elements */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          {/* Primary floating element */}
          <motion.div
            animate={{
              x: [0, 100, 0],
              y: [0, -100, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="absolute top-20 left-10 w-32 h-32 bg-blue-300/30 dark:bg-blue-800/20 rounded-full blur-xl"
          />
          
          {/* Secondary floating element */}
          <motion.div
            animate={{
              x: [0, -100, 0],
              y: [0, 100, 0],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="absolute top-40 right-20 w-24 h-24 bg-teal-300/30 dark:bg-teal-800/20 rounded-full blur-xl"
          />
          
          {/* Third floating element */}
          <motion.div
            animate={{
              x: [0, 50, 0],
              y: [0, -50, 0],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="absolute bottom-40 left-20 w-40 h-40 bg-orange-300/30 dark:bg-orange-800/20 rounded-full blur-xl"
          />
          
          {/* Additional elements for better coverage */}
          <motion.div
            animate={{
              x: [0, -80, 0],
              y: [0, -80, 0],
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="absolute top-1/2 left-1/2 w-28 h-28 bg-purple-300/25 dark:bg-purple-800/15 rounded-full blur-xl"
          />
          
          <motion.div
            animate={{
              x: [0, 60, 0],
              y: [0, 60, 0],
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="absolute bottom-1/3 right-1/3 w-36 h-36 bg-pink-300/25 dark:bg-pink-800/15 rounded-full blur-xl"
          />
          
          <motion.div
            animate={{
              x: [0, -70, 0],
              y: [0, 70, 0],
            }}
            transition={{
              duration: 22,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="absolute top-2/3 left-2/3 w-20 h-20 bg-indigo-300/25 dark:bg-indigo-800/15 rounded-full blur-xl"
          />
          
          {/* Additional light mode specific elements */}
          <motion.div
            animate={{
              x: [0, 90, 0],
              y: [0, -60, 0],
            }}
            transition={{
              duration: 28,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="absolute top-3/4 left-1/4 w-32 h-32 bg-cyan-300/20 dark:bg-cyan-800/10 rounded-full blur-xl"
          />
          
          <motion.div
            animate={{
              x: [0, -40, 0],
              y: [0, 40, 0],
            }}
            transition={{
              duration: 35,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="absolute top-1/4 right-1/4 w-24 h-24 bg-emerald-300/20 dark:bg-emerald-800/10 rounded-full blur-xl"
          />
          
          <motion.div
            animate={{
              x: [0, 45, 0],
              y: [0, -45, 0],
            }}
            transition={{
              duration: 16,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="absolute bottom-1/4 left-3/4 w-28 h-28 bg-rose-300/20 dark:bg-rose-800/10 rounded-full blur-xl"
          />
        </div>

        <div className="relative z-10">
          <Navbar />
          <main>
            <Hero />
            <About />
            <Skills />
            <Projects />
            {/* <Certifications /> */}
            <Contact />
          </main>
          <Footer />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
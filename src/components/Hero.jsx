import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { HiChevronDown, HiDownload, HiEye } from 'react-icons/hi';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import TypingAnimation from './TypingAnimation';
import { useState } from 'react';

const Hero = () => {
  const [isHoveringResume, setIsHoveringResume] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative pt-20 md:pt-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center"
        >
          <motion.div variants={itemVariants} className="mb-8">
            <h1 className="text-5xl md:text-7xl font-semibold mb-4 tracking-tight mt-10">
              <span className="bg-gradient-to-r from-blue-600 via-teal-500 to-orange-500 bg-clip-text text-transparent ">
                Kavin Balaji S
              </span>
            </h1>
            <div className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-2 font-medium">
              B.Tech in Computer and Communication Engineering
            </div>
            <div className="text-lg md:text-xl text-gray-500 dark:text-gray-400 font-normal">
              Amrita Vishwa Vidyapeetham
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="mb-8">
            <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto font-normal">
              <TypingAnimation 
                texts={[
                  "Engineering Student",
                  "Full Stack Developer", 
                  "Cloud Enthusiast",
                  "IoT Engineer @ Intel IoT Club"
                ]}
                typingSpeed={100}
                deletingSpeed={50}
                pauseDuration={2000}
                className="text-xl md:text-2xl text-gray-700 dark:text-gray-300"
                cursorClassName="text-blue-600 dark:text-blue-400"
              />
            </p>
            <p className="text-lg text-blue-600 dark:text-blue-400 mt-2 font-medium">
              
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="flex justify-center space-x-6 mb-12">
            <motion.a
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
              href="https://github.com/kavinbalaji2005"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 backdrop-blur-md bg-gray-200/80 dark:bg-white/10 border border-gray-300/60 dark:border-white/20 rounded-full text-gray-700 dark:text-gray-300 hover:bg-gray-300/80 dark:hover:bg-white/15 hover:backdrop-blur-xl transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              <FaGithub className="w-6 h-6" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
              href="https://linkedin.com/in/kavinbalaji2005"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 backdrop-blur-md bg-gray-200/80 dark:bg-white/10 border border-gray-300/60 dark:border-white/20 rounded-full text-gray-700 dark:text-gray-300 hover:bg-gray-300/80 dark:hover:bg-white/15 hover:backdrop-blur-xl transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              <FaLinkedin className="w-6 h-6" />
            </motion.a>
          </motion.div>

          <motion.div variants={itemVariants} className="flex justify-center mb-16">
            <motion.a
              href="/Kavin_Balaji_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => setIsHoveringResume(true)}
              onMouseLeave={() => setIsHoveringResume(false)}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-teal-500 hover:from-blue-700 hover:to-teal-600 text-white rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-200 cursor-pointer flex items-center space-x-3"
            >
              <motion.div
                initial={{ rotate: 0 }}
                animate={{ rotate: isHoveringResume ? 360 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {isHoveringResume ? (
                  <HiDownload className="w-5 h-5" />
                ) : (
                  <HiEye className="w-5 h-5" />
                )}
              </motion.div>
              <span>
                {isHoveringResume ? "Download PDF" : "View Resume"}
              </span>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
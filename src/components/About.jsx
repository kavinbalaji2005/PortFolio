import { motion } from 'framer-motion';
import { HiCode} from 'react-icons/hi';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section id="about" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 dark:text-white mb-4">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-500 mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={itemVariants} className="relative">
              {/* Gradient border container */}
              <div className="relative mx-auto w-80 h-80 rounded-full p-1 bg-gradient-to-r from-blue-600 via-purple-600 to-teal-500 shadow-2xl">
                {/* Inner image container */}
                <div className="relative w-full h-full backdrop-blur-md bg-gray-200/80 dark:bg-white/10 rounded-full overflow-hidden">
                  <img
                    src="/ProfilePic.png"
                    alt="Kavin Balaji S"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent"></div>
                </div>
              </div>
              <motion.div
                animate={{
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: 'linear',
                }}
                className="absolute -top-4 -right-4 w-16 h-16 backdrop-blur-md bg-gradient-to-r from-blue-600/80 to-teal-500/80 border border-gray-400/50 dark:border-white/20 rounded-full flex items-center justify-center shadow-lg"
              >
                <HiCode className="w-8 h-8 text-white" />
              </motion.div>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-6">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  Engineering Student & Tech Enthusiast
                </h3>
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                  I'm a passionate Engineering student, with a strong focus on full-stack development and cloud technologies. My journey in technology 
                  is driven by curiosity and a desire to create innovative solutions that make a difference.
                </p>
              </div>

              <div>
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                  I enjoy exploring emerging technologies and contributing to open-source projects that push the boundaries of what's possible.
                </p>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-teal-50 dark:from-blue-900/20 dark:to-teal-900/20 p-6 rounded-lg border border-blue-200/30 dark:border-blue-800/30 shadow-lg">
                <h4 className="text-xl font-semibold text-blue-800 dark:text-blue-300 mb-3">
                  Education
                </h4>
                <div className="space-y-2">
                  <p className="text-lg font-medium text-gray-900 dark:text-white">
                    B.Tech in Computer and Communication Engineering
                  </p>
                  <p className="text-md text-blue-600 dark:text-blue-400 font-medium">
                    Amrita Vishwa Vidyapeetham, Coimbatore
                  </p>
                </div>
              </div>

            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
import { motion } from 'framer-motion';
import { HiSun, HiMoon } from 'react-icons/hi';

const SliderToggle = ({ isDark, onToggle }) => {
  return (
    <motion.button
      onClick={onToggle}
      className="relative flex items-center w-14 h-7 rounded-full backdrop-blur-md bg-gray-300/70 dark:bg-gray-700/70 border border-gray-400/50 dark:border-white/20 transition-all duration-300 hover:bg-gray-400/70 dark:hover:bg-gray-600/70 focus:outline-none focus:ring-2 focus:ring-blue-500/50 shadow-sm"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {/* Track Background with Gradient */}
      <motion.div 
        className="absolute inset-0 rounded-full"
        initial={false}
        animate={{
          background: isDark 
            ? 'linear-gradient(90deg, rgba(59, 130, 246, 0.3), rgba(139, 92, 246, 0.3))'
            : 'linear-gradient(90deg, rgba(251, 146, 60, 0.3), rgba(59, 130, 246, 0.3))'
        }}
        transition={{ duration: 0.3 }}
      />
      
      {/* Slider Circle */}
      <motion.div
        className="relative z-10 w-5 h-5 rounded-full backdrop-blur-sm bg-white dark:bg-gray-800 border border-gray-300/60 dark:border-white/30 shadow-lg flex items-center justify-center"
        initial={false}
        animate={{
          x: isDark ? 28 : 1,
          boxShadow: isDark 
            ? '0 2px 8px rgba(59, 130, 246, 0.3), 0 0 0 1px rgba(59, 130, 246, 0.1)'
            : '0 2px 8px rgba(251, 146, 60, 0.3), 0 0 0 1px rgba(251, 146, 60, 0.1)'
        }}
        transition={{
          type: 'spring',
          stiffness: 500,
          damping: 30,
        }}
      >
        <motion.div
          initial={false}
          animate={{
            rotate: isDark ? 180 : 0,
            scale: isDark ? 1.1 : 1,
          }}
          transition={{
            duration: 0.3,
            ease: 'easeInOut',
          }}
        >
          {isDark ? (
            <HiMoon className="w-3 h-3 text-blue-600 dark:text-blue-400" />
          ) : (
            <HiSun className="w-3 h-3 text-orange-500" />
          )}
        </motion.div>
      </motion.div>
      
      
      
      {/* Glow Effect */}
      <motion.div
        className="absolute inset-0 rounded-full"
        initial={false}
        animate={{
          boxShadow: isDark 
            ? '0 0 20px rgba(59, 130, 246, 0.2)'
            : '0 0 20px rgba(251, 146, 60, 0.2)'
        }}
        transition={{ duration: 0.3 }}
      />
    </motion.button>
  );
};

export default SliderToggle;

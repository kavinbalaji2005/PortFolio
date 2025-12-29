import { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';

const ScrollProgressBar = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  const handleScroll = useCallback(() => {
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    const currentProgress = Math.min(Math.max((window.scrollY / totalHeight) * 100, 0), 100);
    setScrollProgress(currentProgress);
  }, []);

  useEffect(() => {
    // Throttle scroll events for better performance
    let ticking = false;
    
    const throttledHandleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    // Add scroll event listener
    window.addEventListener('scroll', throttledHandleScroll, { passive: true });
    
    // Calculate initial progress
    handleScroll();

    // Cleanup
    return () => window.removeEventListener('scroll', throttledHandleScroll);
  }, [handleScroll]);

  return (
    <div className="fixed top-0 left-0 right-0 z-[100] h-1 bg-neutral-900/50 backdrop-blur-sm">
      <motion.div
        className="h-full relative overflow-hidden"
        style={{
          background: 'linear-gradient(90deg, #3b82f6 0%, #8b5cf6 35%, #ec4899 70%, #14b8a6 100%)',
          boxShadow: '0 0 20px rgba(59, 130, 246, 0.5), 0 0 40px rgba(139, 92, 246, 0.3)',
        }}
        initial={{ width: '0%' }}
        animate={{ width: `${scrollProgress}%` }}
        transition={{ duration: 0.1, ease: 'easeOut' }}
      >
        {/* Animated shimmer effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
          animate={{
            x: ['-100%', '100%'],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        
        {/* Enhanced glow effect */}
        <div 
          className="absolute inset-0 bg-gradient-to-r from-blue-400/60 via-purple-400/60 to-pink-400/60 blur-md" 
          style={{
            filter: 'blur(8px)',
          }}
        />
        
        {/* Additional outer glow */}
        <div 
          className="absolute inset-0 bg-gradient-to-r from-blue-300/40 via-purple-300/40 to-pink-300/40 blur-lg" 
          style={{
            filter: 'blur(12px)',
            transform: 'scale(1.2)',
          }}
        />
      </motion.div>
    </div>
  );
};

export default ScrollProgressBar;

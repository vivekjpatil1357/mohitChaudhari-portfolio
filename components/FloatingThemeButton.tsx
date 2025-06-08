'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ThemeSwitcher from './ThemeSwitcher';

const FloatingThemeButton = () => {
  const [showButton, setShowButton] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      // Show the button earlier on mobile devices
      const scrollThreshold = window.innerWidth < 768 ? 300 : 500;
      
      // Show the button when scrolled down more than threshold
      if (window.scrollY > scrollThreshold) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {showButton && (        <motion.div          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 50 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-20 sm:bottom-28 right-4 sm:right-6 z-50"
        >
          <div className="backdrop-blur-md p-1.5 rounded-full shadow-lg border border-gray-100 dark:border-gray-800 bg-white/80 dark:bg-gray-900/80 hover:shadow-xl transition-shadow">
            <ThemeSwitcher hideTooltip={true} />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FloatingThemeButton;

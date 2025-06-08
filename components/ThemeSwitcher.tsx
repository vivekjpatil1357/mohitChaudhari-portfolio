'use client';

import { useState, useEffect } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

interface ThemeSwitcherProps {
  hideTooltip?: boolean;
}

const ThemeSwitcher = ({ hideTooltip = false }: ThemeSwitcherProps) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
    // Check for user's preferred color scheme or saved preference
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    } else {
      setIsDarkMode(false);
      document.documentElement.classList.remove('dark');
    }

    // Add listener for system theme changes
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e: MediaQueryListEvent) => {
      if (!localStorage.getItem('theme')) {
        setIsDarkMode(e.matches);
        document.documentElement.classList.toggle('dark', e.matches);
      }
    };
    
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);  const toggleTheme = () => {
    // Apply a smooth transition for the theme change
    document.documentElement.classList.add('theme-transition');
    
    if (isDarkMode) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setIsDarkMode(true);
    }
    
    // Remove the transition class after the transition is complete
    setTimeout(() => {
      document.documentElement.classList.remove('theme-transition');
    }, 300);
  };

  return (
    <motion.button
      onClick={toggleTheme}
      className="p-3 rounded-full bg-gradient-to-r from-[#0055FF]/10 to-[#95F1D5]/10 dark:from-[#3d7eff]/10 dark:to-[#95F1D5]/10 text-gray-800 dark:text-gray-200 hover:shadow-md transition-all relative group"
      aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.2 }}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={isDarkMode ? 'dark' : 'light'}
          initial={{ rotate: -180, opacity: 0 }}
          animate={{ rotate: 0, opacity: 1 }}
          exit={{ rotate: 180, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="flex items-center justify-center"
        >
          {mounted && (
            isDarkMode ? 
              <FaSun className="text-yellow-500" size={18} /> : 
              <FaMoon className="text-[#0055FF] dark:text-[#3d7eff]" size={18} />
          )}
        </motion.div>      </AnimatePresence>
        {/* Theme label tooltip - only show if hideTooltip is false */}
      {!hideTooltip && (
        <div className="absolute invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-300 top-full mt-2 left-1/2 transform -translate-x-1/2 px-3 py-1.5 bg-white dark:bg-gray-800 text-xs font-medium text-gray-800 dark:text-gray-200 rounded-lg shadow-lg whitespace-nowrap z-10 pointer-events-none">
          {isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-white dark:bg-gray-800 rotate-45"></div>
        </div>
      )}
    </motion.button>
  );
};

export default ThemeSwitcher;

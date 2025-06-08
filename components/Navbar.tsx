'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';
import ThemeSwitcher from './ThemeSwitcher';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
      
      // Update active section based on scroll position
      const sections = ['about', 'experience', 'projects', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      } else if (window.scrollY < 100) {
        setActiveSection('');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  const navVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: [0.42, 0, 0.58, 1],
      }
    },
  };

  const mobileMenuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.2,
        ease: [0.42, 0, 0.58, 1],
      }
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.2,
        ease: [0.42, 0, 0.58, 1],
      }
    }
  };

  const navItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: [0.42, 0, 0.58, 1],
      }
    }),
    exit: { 
      opacity: 0, 
      y: 20,
      transition: {
        duration: 0.3,
        ease: [0.42, 0, 0.58, 1],
      }
    }
  };

  const navLinkHoverVariants = {
    initial: { width: 0 },
    hover: { 
      width: '100%', 
      transition: { 
        duration: 0.3, 
        ease: [0.42, 0, 0.58, 1] 
      } 
    }
  };

  const logoVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.2,
        duration: 0.5,
        ease: [0.42, 0, 0.58, 1],
      }
    }
  };

  return (
    <motion.header
      initial="hidden"
      animate="visible"
      variants={navVariants}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'py-4 bg-white/90 dark:bg-black/90 backdrop-blur-lg shadow-sm' 
          : 'py-6 bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <motion.div variants={logoVariants}>
          <Link href="/" className="text-2xl font-bold tracking-tight flex items-center text-[#0055FF] dark:text-[#3d7eff]">
            <span className="text-black dark:text-white">Mohit</span>Chaudhari
          </Link>
        </motion.div>
        
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item, i) => (
            <motion.div
              key={item.name}
              custom={i}
              variants={navItemVariants}
              className="relative"
            >
              <Link 
                href={item.href}
                className={`text-sm font-medium hover:text-[#0055FF] dark:hover:text-[#3d7eff] transition-colors ${
                  activeSection === item.href.substring(1)
                    ? 'text-[#0055FF] dark:text-[#3d7eff]'
                    : 'text-gray-800 dark:text-gray-200'
                }`}
                onClick={() => {
                  const section = document.getElementById(item.href.substring(1));
                  if (section) {
                    section.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                {item.name}
                <motion.div
                  initial="initial"
                  whileHover="hover"
                  animate={activeSection === item.href.substring(1) ? 'hover' : 'initial'}
                  className="absolute bottom-[-4px] left-0 h-[2px] bg-[#0055FF] dark:bg-[#3d7eff]"
                  variants={navLinkHoverVariants}
                />
              </Link>
            </motion.div>
          ))}
          
          <motion.div
            custom={navItems.length}
            variants={navItemVariants}
          >
            <ThemeSwitcher />
          </motion.div>
        </nav>
        
        <div className="md:hidden flex items-center">
          <ThemeSwitcher />
          
          <button
            onClick={toggleMobileMenu}
            className="ml-4 p-2 rounded-md text-gray-600 dark:text-gray-400 hover:text-[#0055FF] dark:hover:text-[#3d7eff] hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMobileMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>
        </div>
      </div>
      
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            key="mobile-menu"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={mobileMenuVariants}
            className="md:hidden absolute top-full left-0 w-full bg-white dark:bg-black border-t border-gray-100 dark:border-gray-800 shadow-lg"
          >
            <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col space-y-6">
              {navItems.map((item, i) => (
                <motion.div
                  key={item.name}
                  custom={i}
                  variants={navItemVariants}
                >
                  <Link
                    href={item.href}
                    className={`text-lg font-medium block hover:text-[#0055FF] dark:hover:text-[#3d7eff] transition-colors ${
                      activeSection === item.href.substring(1)
                        ? 'text-[#0055FF] dark:text-[#3d7eff]'
                        : 'text-gray-800 dark:text-gray-200'
                    }`}
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      const section = document.getElementById(item.href.substring(1));
                      if (section) {
                        section.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;

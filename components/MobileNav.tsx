'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaBars } from 'react-icons/fa';

interface MobileNavProps {
  isOpen: boolean;
  toggleMenu: () => void;
}

const MobileNav = ({ isOpen, toggleMenu }: MobileNavProps) => {
  const menuVariants = {
    hidden: {
      opacity: 0,
      x: '100%',
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 30,
      },
    },
    exit: {
      opacity: 0,
      x: '100%',
      transition: {
        ease: 'easeInOut',
        duration: 0.3,
      },
    },
  };

  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 md:hidden"
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={menuVariants}
        >
          <div className="flex flex-col h-full bg-white dark:bg-gray-900 shadow-lg">
            <div className="flex justify-between items-center p-6 border-b border-gray-200 dark:border-gray-800">
              <Link href="/" className="text-xl font-bold" onClick={toggleMenu}>
                Mohit Chaudhari
              </Link>
              <button
                onClick={toggleMenu}
                className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors p-2"
              >
                <FaTimes className="text-xl" />
              </button>
            </div>
            <div className="flex flex-col py-8 px-6 space-y-6">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-lg font-medium hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                  onClick={toggleMenu}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileNav;

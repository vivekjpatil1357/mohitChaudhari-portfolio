'use client';

import Link from 'next/link';
import { FaLinkedin, FaGithub, FaEnvelope, FaArrowUp } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Footer = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.42, 0, 0.58, 1],
      }
    },
  };

  const logoVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.42, 0, 0.58, 1],
      }
    },
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800 py-16 relative overflow-hidden">
      <div className="absolute -z-10 bottom-0 left-1/2 transform -translate-x-1/2 opacity-5">
        <div className="w-[600px] h-[600px] rounded-full bg-gradient-to-r from-[#0055FF] to-[#95F1D5] blur-[80px]" />
      </div>
      
      <div className="max-w-6xl mx-auto px-6">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="flex flex-col items-center"
        >
          <motion.button 
            onClick={scrollToTop}
            className="p-4 rounded-full bg-[#0055FF]/10 dark:bg-[#3d7eff]/20 text-[#0055FF] dark:text-[#3d7eff] mb-12 hover-lift"
            variants={logoVariants}
            whileHover={{ y: -5 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Scroll to top"
          >
            <FaArrowUp />
          </motion.button>
            <motion.div variants={itemVariants} className="mb-10 text-center">
            <h3 className="text-3xl font-bold text-[#0055FF] dark:text-[#3d7eff]">Mohit Chaudhari</h3>
            <p className="text-gray-600 dark:text-gray-400 mt-2">Marketing Analytics Professional at Outlier AI</p>
          </motion.div>
          
          <motion.div 
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-x-10 gap-y-4 mb-12"
          >
            <Link href="#about" className="text-gray-800 dark:text-gray-200 hover:text-[#0055FF] dark:hover:text-[#3d7eff] transition-colors animated-underline">
              About
            </Link>
            <Link href="#experience" className="text-gray-800 dark:text-gray-200 hover:text-[#0055FF] dark:hover:text-[#3d7eff] transition-colors animated-underline">
              Experience
            </Link>
            <Link href="#projects" className="text-gray-800 dark:text-gray-200 hover:text-[#0055FF] dark:hover:text-[#3d7eff] transition-colors animated-underline">
              Projects
            </Link>
            <Link href="#contact" className="text-gray-800 dark:text-gray-200 hover:text-[#0055FF] dark:hover:text-[#3d7eff] transition-colors animated-underline">
              Contact
            </Link>
          </motion.div>
          
          <motion.div variants={itemVariants} className="flex gap-6 mb-12">            <a 
              href="https://linkedin.com/in/mohit-chaudhari-marketing" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-3 rounded-full bg-[#0055FF]/10 dark:bg-[#3d7eff]/20 text-[#0055FF] dark:text-[#3d7eff] hover-lift"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={20} />
            </a>            <a 
              href="https://mohitchaudhari-portfolio.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-3 rounded-full bg-[#0055FF]/10 dark:bg-[#3d7eff]/20 text-[#0055FF] dark:text-[#3d7eff] hover-lift"
              aria-label="Portfolio"
            >
              <FaGithub size={20} />
            </a><a 
              href="mailto:mohit.chaudhari@marketinganalytics.com" 
              className="p-3 rounded-full bg-[#0055FF]/10 dark:bg-[#3d7eff]/20 text-[#0055FF] dark:text-[#3d7eff] hover-lift"
              aria-label="Email"
            >
              <FaEnvelope size={20} />
            </a>
          </motion.div>
          
          <motion.p variants={itemVariants} className="text-gray-600 dark:text-gray-400 text-center">
            © {new Date().getFullYear()} Mohit Chaudhari. All rights reserved.
          </motion.p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;

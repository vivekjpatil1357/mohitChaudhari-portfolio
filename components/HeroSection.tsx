'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Button } from './ui/Button';
import { FaArrowDown, FaGithub, FaLinkedin } from 'react-icons/fa';

const HeroSection = () => {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.42, 0, 0.58, 1],
      }
    },
  };

  const blurFadeIn = {
    hidden: { opacity: 0, filter: 'blur(10px)' },
    visible: { 
      opacity: 1, 
      filter: 'blur(0px)',
      transition: {
        duration: 0.8,
        ease: [0.42, 0, 0.58, 1],
      }
    },
  };

  return (
    <section className="min-h-screen pt-32 pb-16 md:pt-40 md:pb-32 overflow-hidden relative px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="flex flex-col items-center text-center"
          variants={container}
          initial="hidden"
          animate="visible"
        >          <motion.div variants={item} className="mb-6">
            <div className="inline-block px-3 py-1 rounded-full bg-[#0055FF]/10 dark:bg-[#3d7eff]/20 mb-2">
              <h5 className="text-sm md:text-base font-medium text-[#0055FF] dark:text-[#3d7eff] tracking-wide">
                MARKETING ANALYTICS PROFESSIONAL
              </h5>
            </div>
          </motion.div>
          
          <motion.div variants={item} className="mb-6">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight">
              Hi, I'm <span className="text-[#0055FF] dark:text-[#3d7eff]">Mohit</span>
            </h1>
          </motion.div>

          <motion.div variants={item} className="max-w-2xl mb-10">
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
              A skilled marketing analytics professional with experience in digital marketing, market research, and AI-driven analytics at TVS Motors and Outlier AI.
            </p>
          </motion.div>

          <motion.div variants={item} className="flex flex-col sm:flex-row gap-4 mb-16">
            <Button 
              className="px-8 py-3 text-lg bg-[#0055FF] hover:bg-[#0044CC] dark:bg-[#3d7eff] dark:hover:bg-[#2d6ef0] rounded-full hover-lift"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get in Touch
            </Button>
            
            <Button 
              variant="outline" 
              className="px-8 py-3 text-lg border-black dark:border-white hover:bg-black/5 dark:hover:bg-white/10 rounded-full hover-lift"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View Projects
            </Button>
          </motion.div>

          <motion.div variants={item} className="flex gap-6 text-2xl">
            <a 
              href="https://github.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-[#0055FF] dark:text-gray-400 dark:hover:text-[#3d7eff] transition-colors hover-lift"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a 
              href="https://linkedin.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-[#0055FF] dark:text-gray-400 dark:hover:text-[#3d7eff] transition-colors hover-lift"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
          </motion.div>
        </motion.div>

        <motion.div 
          className="flex justify-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.5 }}
        >
          <button 
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            className="p-3 rounded-full border border-gray-300 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:border-[#0055FF] hover:text-[#0055FF] dark:hover:border-[#3d7eff] dark:hover:text-[#3d7eff] transition-colors animate-bounce hover-lift"
            aria-label="Scroll down"
          >
            <FaArrowDown />
          </button>
        </motion.div>
      </div>

      <motion.div 
        className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-20 dark:opacity-30"
        variants={blurFadeIn}
        initial="hidden"
        animate="visible"
      >
        <div className="w-full h-full rounded-full bg-gradient-to-r from-[#0055FF] to-[#95F1D5] blur-[100px] gradient-bg" />
      </motion.div>    </section>
  );
};

export default HeroSection;
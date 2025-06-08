'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { FaChartBar, FaSearchDollar, FaGlobe, FaBullhorn } from 'react-icons/fa';
import Image from 'next/image';
import { useRef } from 'react';

const skills = [
  { name: "Marketing Analytics", icon: <FaChartBar className="text-3xl text-[#0055FF] dark:text-[#3d7eff]" />, description: "Analyzing campaign performance metrics, consumer behavior, and market trends to drive data-driven marketing decisions" },
  { name: "Market Research", icon: <FaSearchDollar className="text-3xl text-[#0055FF] dark:text-[#3d7eff]" />, description: "Conducting comprehensive market research and competitor analysis to inform product positioning strategies" },
  { name: "Digital Marketing", icon: <FaGlobe className="text-3xl text-[#0055FF] dark:text-[#3d7eff]" />, description: "Developing and executing digital marketing campaigns with expertise in SEO, social media marketing, and email marketing" },
  { name: "Marketing Automation", icon: <FaBullhorn className="text-3xl text-[#0055FF] dark:text-[#3d7eff]" />, description: "Utilizing marketing automation tools, A/B testing methodologies, and data analytics to optimize campaign performance" },
];

const AboutSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.42, 0, 0.58, 1],
      }
    },
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="order-2 md:order-1"
      >
        <motion.div variants={itemVariants}>
          <h3 className="text-2xl md:text-3xl font-bold mb-6 text-gradient inline-block">My Journey</h3>
        </motion.div>
          <motion.div variants={itemVariants} className="space-y-5 text-gray-700 dark:text-gray-300">
          <p>
            I'm Mohit Chaudhari, a passionate Marketing Analytics Professional with expertise in digital marketing and data-driven market research. 
            I've worked with <span className="font-semibold text-[#0055FF] dark:text-[#3d7eff]">Outlier AI</span> as a Marketing Analytics AI Trainer and interned at <span className="font-semibold text-[#0055FF] dark:text-[#3d7eff]">TVS Motors</span> in marketing.
          </p>
          <p>
            With an MBA in Marketing from MIT World Peace University, I enjoy analyzing consumer behavior and optimizing marketing campaigns. 
            My experience spans various domains including AI-driven analytics, digital marketing, and market research.
          </p>
          <p>
            When I'm not analyzing data, you can find me playing cricket, exploring new marketing technologies, 
            or applying my hospitality background from my time at ITC Fortune Exotica to create exceptional customer experiences.
          </p>
        </motion.div>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="order-1 md:order-2"
      >
        <motion.div variants={itemVariants}>
          <h3 className="text-2xl md:text-3xl font-bold mb-6 text-gradient inline-block">Skills</h3>
        </motion.div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="p-6 rounded-xl bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800 hover:border-[#0055FF] dark:hover:border-[#3d7eff] transition-colors card-hover"
            >
              <div className="mb-4 text-[#0055FF] dark:text-[#3d7eff]">{skill.icon}</div>
              <h4 className="text-xl font-semibold mb-2">{skill.name}</h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm">{skill.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default AboutSection;

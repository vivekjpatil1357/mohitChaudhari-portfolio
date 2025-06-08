'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

interface ExperienceItem {
  title: string;
  company: string;
  duration: string;
  description: string[];
  technologies: string[];
}

const experienceData: ExperienceItem[] = [
  {
    title: "Marketing Analytics AI Trainer",
    company: "Outlier AI",
    duration: "November 2023 - December 2024",
    description: [
      "Trained AI models to enhance their understanding of Marketing Analytics by crafting and evaluating AI-generated content.",
      "Assessed AI responses for accuracy, relevance, and engagement, ensuring high-quality marketing insights.",
      "Conducted fact-checking and research to improve the reliability of AI-generated marketing data.",
      "Provided structured feedback to refine AI performance in consumer behavior analysis, market trends, and data-driven decision-making.",
      "Developed compelling, data-driven content to align AI outputs with industry standards."
    ],
    technologies: ["AI Training", "Marketing Analytics", "Content Development", "Data Analysis", "Quality Assessment"]
  },
  {
    title: "Marketing Intern",
    company: "TVS Motors",
    duration: "May 2022 - August 2022",
    description: [
      "Assisted in the development and execution of digital marketing campaigns, contributing to a 15% increase in online engagement.",
      "Conducted market research and competitor analysis, providing insights that informed the company's product positioning strategy.",
      "Analyzed campaign performance metrics and prepared reports for the marketing team, helping optimize future campaigns for better ROI."
    ],
    technologies: ["Digital Marketing", "Market Research", "Competitor Analysis", "Performance Analytics", "Campaign Optimization"]
  },
  {
    title: "Intern",
    company: "ITC Fortune Exotica",
    duration: "June 2018 - October 2018",
    description: [
      "Assisted in daily operations across various departments, including front office, housekeeping, and food & beverage, ensuring seamless guest experiences.",
      "Supported the front desk in handling guest check-ins and check-outs, contributing to an efficient and welcoming environment.",
      "Coordinated with the housekeeping team to maintain high standards of cleanliness and room readiness, improving guest satisfaction scores by 10%."
    ],
    technologies: ["Hospitality Management", "Customer Service", "Operations", "Team Coordination"]
  }
];

const ExperienceSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.6, 1, 1, 0.6]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.98, 1, 1, 0.98]);
  
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
    <motion.div
      ref={ref}
      style={{ opacity, scale }}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="space-y-12 relative"
    >
      <div className="absolute -z-10 -top-20 right-[20%] opacity-20 dark:opacity-30">
        <div className="blur-gradient"></div>
      </div>
      
      {experienceData.map((experience, index) => (
        <motion.div 
          key={index}
          variants={itemVariants}
          className="bg-white dark:bg-gray-900 rounded-2xl p-8 border border-gray-100 dark:border-gray-800 hover:shadow-xl transition-all duration-300 card-hover"
        >
          <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6">
            <div>
              <h3 className="text-2xl font-bold text-[#0055FF] dark:text-[#3d7eff]">{experience.title}</h3>
              <p className="text-xl mt-1 font-medium">{experience.company}</p>
            </div>
            <div className="mt-2 md:mt-0">
              <span className="px-4 py-2 rounded-full bg-[#0055FF]/10 dark:bg-[#3d7eff]/20 text-[#0055FF] dark:text-[#3d7eff] font-medium">
                {experience.duration}
              </span>
            </div>
          </div>
          
          <ul className="space-y-4 mb-8">
            {experience.description.map((item, i) => (
              <li key={i} className="text-gray-700 dark:text-gray-300 pl-6 relative before:content-[''] before:absolute before:left-0 before:top-[10px] before:w-3 before:h-3 before:bg-[#0055FF]/20 dark:before:bg-[#3d7eff]/30 before:rounded-full before:backdrop-blur-sm before:ring-1 before:ring-[#0055FF] dark:before:ring-[#3d7eff]">
                {item}
              </li>
            ))}
          </ul>
          
          <div className="flex flex-wrap gap-2 mt-6">
            {experience.technologies.map((tech, i) => (
              <span 
                key={i} 
                className="bg-gray-50 dark:bg-gray-800 px-4 py-2 rounded-full text-sm font-medium border border-gray-200 dark:border-gray-700 hover-lift"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default ExperienceSection;

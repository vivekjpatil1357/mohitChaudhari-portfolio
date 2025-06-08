'use client';

import { motion, useScroll } from 'framer-motion';
import Image from 'next/image';
import { FaGithub, FaExternalLinkAlt, FaChartBar } from 'react-icons/fa';
import { useRef, useState } from 'react';
import Lottie from 'lottie-react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import marketAnalysisAnimation from '../public/lottie/market-analysis.json';
import TestDashboard from './TestDashboard';
interface Project {
  title: string;
  description: string;
  useLottie?: boolean;
  image: string;
  technologies: string[];
  demoLink?: string;
  codeLink?: string;
}

const projectsData: Project[] = [
  {
    title: "FMCG Industry Analysis",
    description: "Comprehensive analysis of the FMCG industry in India, including market trends, SWOT analysis, and financial performance of major companies like Hindustan Unilever and ITC.",
    image: "/projects/ev-dashboard.svg",
    useLottie: true,
    technologies: ["Market Research", "SWOT Analysis", "Financial Analysis", "Strategic Recommendations"],
    demoLink: "https://drive.google.com/drive/folders/1BkE4KiVMH3U-ctreLQ61ra78LsZpHb_P"
  },
  {
    title: "TVS Digital Marketing Campaign",
    description: "Development and execution of digital marketing campaigns for TVS Motors, resulting in a 15% increase in online engagement and improved product positioning.",    image: "/projects/connected-vehicle.svg",
    useLottie: true,
    technologies: ["Digital Marketing", "Campaign Analysis", "Market Research", "Performance Metrics"],
    demoLink: "https://drive.google.com/drive/folders/1BZEf55v8bOMPg0yHND3yvRM0-U13myRd"
  }
];

const ProjectsSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [showTVSDashboard] = useState(true); // Keep state name for now
  
  // We're not using scrollYProgress, so we don't need to destructure it
  useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
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
  const imageVariants = {
    rest: { 
      scale: 1,
      transition: { 
        duration: 0.4, 
        ease: [0.42, 0, 0.58, 1] 
      }
    },
    hover: { 
      scale: 1.05,
      transition: { 
        duration: 0.4, 
        ease: [0.42, 0, 0.58, 1] 
      }
    }
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
      className="relative"
    >
      <div className="absolute -z-10 bottom-40 left-0 opacity-20 dark:opacity-30">
        <div className="blur-gradient"></div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {projectsData.map((project, index) => (          <motion.div
            key={index}
            variants={itemVariants}
            custom={index}
            className="group bg-gradient-to-br from-white to-blue-50 dark:from-gray-900 dark:to-gray-800 rounded-2xl overflow-hidden border border-gray-100 dark:border-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 card-hover"
            whileHover="hover"
            initial="rest"
            animate="rest"
          >
            <div className="relative h-56 w-full overflow-hidden">
              {project.useLottie ? (
                <motion.div 
                  className="h-full w-full flex items-center justify-center bg-gradient-to-r from-[#0055FF]/5 to-[#95F1D5]/5"
                  variants={imageVariants}
                >                  <div className="h-full w-full max-w-xs mx-auto">
                    {project.title === "FMCG Industry Analysis" ? (
                      <DotLottieReact 
                        src="https://lottie.host/961d2918-e025-4630-8a84-105b933ae64d/K7J3YdoJqd.lottie"
                        loop
                        autoplay
                        className="w-full h-full"
                      />
                    ) : project.title === "TVS Digital Marketing Campaign" ? (
                      <DotLottieReact 
                        src="https://lottie.host/50d09ec1-1d1e-4fd6-b450-c84313586ff9/5bdgai7tVP.lottie"
                        loop
                        autoplay
                        className="w-full h-full"
                      />
                    ) : (
                      <Lottie 
                        animationData={marketAnalysisAnimation}
                        loop={true} 
                        className="w-full h-full"
                      />
                    )}
                  </div>
                </motion.div>
              ) : (
                <motion.div 
                  className="h-full w-full"
                  variants={imageVariants}
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </motion.div>
              )}              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-start p-6">
                <div className="flex gap-4">                  {project.title === "TVS Digital Marketing Campaign" && (
                    <a 
                      href="#tvs-analytics"
                      className="text-white bg-gradient-to-r from-[#0055FF] to-[#0044CC] hover:from-[#0044CC] hover:to-[#003BB3] p-3 rounded-full transition-colors shadow-lg"
                      aria-label="View Analytics Dashboard"
                    >
                      <FaChartBar />
                    </a>
                  )}                  {project.demoLink && (
                    <a
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer" 
                      className="text-white bg-gradient-to-r from-[#0055FF] to-[#0044CC] hover:from-[#0044CC] hover:to-[#003BB3] p-3 rounded-full transition-colors shadow-lg"
                      aria-label="View More Details"
                    >
                      <FaExternalLinkAlt />
                    </a>
                  )}
                  {project.codeLink && (
                    <a
                      href={project.codeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white bg-gradient-to-r from-[#0055FF] to-[#0044CC] hover:from-[#0044CC] hover:to-[#003BB3] p-3 rounded-full transition-colors shadow-lg"
                      aria-label="View Project"
                    >
                      <FaGithub />
                    </a>
                  )}
                </div>
              </div>
            </div>
              <div className="p-6">
              <h3 className="text-2xl font-bold mb-3 text-gradient bg-gradient-to-r from-[#0055FF] to-[#95F1D5] dark:from-[#3d7eff] dark:to-[#95F1D5] bg-clip-text text-transparent">{project.title}</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mt-4">
                {project.technologies.map((tech, i) => (
                  <span 
                    key={i} 
                    className="bg-[#0055FF]/10 dark:bg-[#3d7eff]/20 text-[#0055FF] dark:text-[#3d7eff] px-3 py-1 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              {project.demoLink && (
                <div className="mt-6">
                  <a 
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-[#0055FF] to-[#0044CC] hover:from-[#0044CC] hover:to-[#003BB3] text-white px-4 py-2 rounded-lg transition-colors shadow-md"
                  >
                    <FaExternalLinkAlt size={12} />
                    <span>More Details</span>
                  </a>
                </div>
              )}
            </div>
          </motion.div>        ))}
      </div>      {/* TVS Marketing Dashboard section */}
      {showTVSDashboard && (
        <div id="tvs-analytics" className="mt-16">
          <motion.h3 
            className="text-3xl text-center font-bold mb-8"
            variants={itemVariants}          >
            TVS Motors Campaign Analytics
          </motion.h3>
          <TestDashboard />
        </div>
      )}
    </motion.div>
  );
};

export default ProjectsSection;

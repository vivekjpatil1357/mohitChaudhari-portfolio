'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { Button } from './ui/Button';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { useRef } from 'react';
import Lottie from 'lottie-react';
import digitalMarketingAnimation from '../public/lottie/digital-marketing.json';

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
    demoLink: "#"
  },
  {
    title: "TVS Digital Marketing Campaign",
    description: "Development and execution of digital marketing campaigns for TVS Motors, resulting in a 15% increase in online engagement and improved product positioning.",
    image: "/projects/connected-vehicle.svg",
    useLottie: true,
    technologies: ["Digital Marketing", "Campaign Analysis", "Market Research", "Performance Metrics"],
    demoLink: "#"
  },
  {
    title: "AI-Driven Marketing Analytics",
    description: "Training AI models to enhance understanding of marketing analytics, improving accuracy, relevance, and engagement of AI-generated marketing insights.",
    image: "/projects/portfolio.svg",
    useLottie: true,
    technologies: ["AI Training", "Marketing Analytics", "Data Analysis", "Content Development"],
    codeLink: "#"
  }
];

const ProjectsSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);
  
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

  const hoverVariants = {
    rest: { 
      scale: 1, 
      y: 0,
      transition: { 
        duration: 0.4, 
        ease: [0.42, 0, 0.58, 1] 
      }
    },
    hover: { 
      scale: 1.03, 
      y: -10,
      transition: { 
        duration: 0.4, 
        ease: [0.42, 0, 0.58, 1] 
      }
    }
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
        {projectsData.map((project, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            custom={index}
            className="bg-gradient-to-br from-white to-blue-50 dark:from-gray-900 dark:to-gray-800 rounded-2xl overflow-hidden border border-gray-100 dark:border-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 card-hover"
            whileHover="hover"
            initial="rest"
            animate="rest"
          >
            <div className="relative h-56 w-full overflow-hidden">
              {project.useLottie ? (
                <motion.div 
                  className="h-full w-full flex items-center justify-center bg-gradient-to-r from-[#0055FF]/5 to-[#95F1D5]/5"
                  variants={imageVariants}
                >
                  <div className="h-full w-full max-w-xs mx-auto">
                    <Lottie 
                      animationData={digitalMarketingAnimation} 
                      loop={true} 
                      className="w-full h-full"
                    />
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
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-start p-6">
                <div className="flex gap-4">
                  {project.demoLink && (
                    <a
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white bg-gradient-to-r from-[#0055FF] to-[#0044CC] hover:from-[#0044CC] hover:to-[#003BB3] p-3 rounded-full transition-colors shadow-lg"
                      aria-label="View Demo"
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
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default ProjectsSection;

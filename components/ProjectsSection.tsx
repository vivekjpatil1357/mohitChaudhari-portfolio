'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { Button } from './ui/Button';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { useRef } from 'react';

interface Project {
  title: string;
  description: string;
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
    technologies: ["Market Research", "SWOT Analysis", "Financial Analysis", "Strategic Recommendations"],
    demoLink: "#"
  },
  {
    title: "TVS Digital Marketing Campaign",
    description: "Development and execution of digital marketing campaigns for TVS Motors, resulting in a 15% increase in online engagement and improved product positioning.",
    image: "/projects/connected-vehicle.svg",
    technologies: ["Digital Marketing", "Campaign Analysis", "Market Research", "Performance Metrics"],
    demoLink: "#"
  },
  {
    title: "AI-Driven Marketing Analytics",
    description: "Training AI models to enhance understanding of marketing analytics, improving accuracy, relevance, and engagement of AI-generated marketing insights.",
    image: "/projects/portfolio.svg",
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
        {projectsData.map((project, index) => (          <motion.div
            key={index}
            variants={itemVariants}
            custom={index}
            className="bg-white dark:bg-gray-900 rounded-2xl overflow-hidden border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-xl transition-all duration-300 card-hover"
          >
            <div className="relative h-56 w-full overflow-hidden">
              <motion.div 
                className="h-full w-full"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.4, ease: [0.42, 0, 0.58, 1] }}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </motion.div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end justify-start p-6">
                <div className="flex gap-4">
                  {project.demoLink && (
                    <a
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white bg-[#0055FF] hover:bg-[#0044CC] p-3 rounded-full transition-colors"
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
                      className="text-white bg-[#0055FF] hover:bg-[#0044CC] p-3 rounded-full transition-colors"
                      aria-label="View Code"
                    >
                      <FaGithub />
                    </a>
                  )}
                </div>
              </div>
            </div>
            
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-3 text-[#0055FF] dark:text-[#3d7eff]">{project.title}</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mt-4">
                {project.technologies.map((tech, i) => (
                  <span 
                    key={i} 
                    className="bg-gray-50 dark:bg-gray-800 px-3 py-1 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>    </motion.div>
  );
};

export default ProjectsSection;

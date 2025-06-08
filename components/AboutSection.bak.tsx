'use client';

import { motion } from 'framer-motion';
import { FaCode, FaServer, FaMobile, FaCloud } from 'react-icons/fa';
import Image from 'next/image';

const skills = [
  { name: "Frontend Development", icon: <FaCode className="text-3xl" />, description: "Building responsive web applications with React, Next.js, TypeScript, and Tailwind CSS" },
  { name: "Backend Development", icon: <FaServer className="text-3xl" />, description: "Creating robust server-side solutions with Node.js, Express, MongoDB, and PostgreSQL" },
  { name: "Mobile Development", icon: <FaMobile className="text-3xl" />, description: "Developing cross-platform mobile applications with React Native and Flutter" },
  { name: "Cloud & DevOps", icon: <FaCloud className="text-3xl" />, description: "Implementing cloud solutions with AWS, Docker, CI/CD pipelines, and Git workflows" },
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
            I'm Mohit Chaudhari, a passionate Software Engineer with expertise in developing modern web and mobile applications. 
            Currently working at <span className="font-semibold text-[#0055FF] dark:text-[#3d7eff]">TVS Motor Company</span>, I focus on creating innovative solutions for electric vehicles and connected mobility.
          </p>
          <p>
            With a strong foundation in full-stack development, I enjoy building scalable applications and solving complex problems. 
            My experience spans across various domains including IoT, data visualization, and cloud architecture.
          </p>
          <p>
            When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, 
            or sharing my knowledge through technical articles and community events.
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
        variants={containerVariants}
        className="grid grid-cols-1 gap-8"
      >
        <motion.div variants={itemVariants}>
          <h3 className="text-2xl md:text-3xl font-bold mb-6">My Skills</h3>
        </motion.div>
        
        <div className="grid grid-cols-1 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-gray-50 dark:bg-gray-800/50 p-6 rounded-2xl border border-gray-100 dark:border-gray-700 hover:shadow-md transition-shadow"
            >
              <div className="flex items-start">
                <div className="mr-4 text-[#0055FF] dark:text-[#3d7eff]">
                  {skill.icon}
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">{skill.name}</h4>
                  <p className="text-gray-600 dark:text-gray-400">{skill.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default AboutSection;

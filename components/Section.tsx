'use client';

import { ReactNode, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { cn } from '@/lib/utils';

interface SectionProps {
  id: string;
  title: string;
  children: ReactNode;
  className?: string;
  subtitle?: string;
}

const Section = ({ id, title, subtitle, children, className }: SectionProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.98, 1, 1, 0.98]);
  
  const titleVariants = {
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

  const subtitleVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.7,
        delay: 0.1,
        ease: [0.42, 0, 0.58, 1],
      }
    },
  };

  const dividerVariants = {
    hidden: { width: 0 },
    visible: { 
      width: '60px',
      transition: {
        duration: 0.7,
        delay: 0.2,
        ease: [0.42, 0, 0.58, 1],
      }
    },
  };

  return (
    <section 
      id={id} 
      className={cn('py-20 md:py-32 px-6 overflow-hidden relative', className)}
      ref={ref}
    >
      <motion.div 
        style={{ opacity, scale }}
        className="max-w-6xl mx-auto"
      >
        <div className="mb-16 md:mb-20">
          <motion.h2 
            className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={titleVariants}
          >
            {title}
          </motion.h2>
          
          {subtitle && (
            <motion.p 
              className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={subtitleVariants}
            >
              {subtitle}
            </motion.p>
          )}
          
          <motion.div 
            className="h-1 bg-[#0055FF] dark:bg-[#3d7eff] rounded-full mt-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={dividerVariants}
          />
        </div>
        
        {children}
      </motion.div>
    </section>
  );
};

export default Section;

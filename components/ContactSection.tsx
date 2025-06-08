'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { FaLinkedin, FaGithub, FaEnvelope, FaMapMarkerAlt, FaArrowRight, FaPhone } from 'react-icons/fa';
import { Button } from './ui/Button';
import { useState, useRef } from 'react';
import Lottie from 'lottie-react';
import contactAnimation from '../public/lottie/contact.json';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.6, 1, 1, 0.6]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.98, 1, 1, 0.98]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1500);
  };

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

  const formSuccessVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.42, 0, 0.58, 1],
      }
    }
  };

  const inputFocusVariants = {
    rest: { borderColor: 'rgba(209, 213, 219, 1)' },
    focus: { borderColor: '#0055FF', transition: { duration: 0.3 } }
  };

  return (
    <motion.div
      ref={ref}
      style={{ opacity, scale }}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="relative"
    >
      <div className="absolute -z-10 top-0 right-[30%] opacity-20 dark:opacity-30">
        <div className="blur-gradient"></div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
        <motion.div variants={itemVariants} className="order-2 md:order-1">
          <h3 className="text-2xl md:text-3xl font-bold mb-8 text-gradient inline-block">Get in Touch</h3>
          
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              <motion.div 
                className="space-y-2"
                initial="rest"
                whileHover="focus"
                whileFocus="focus"
              >
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Name
                </label>
                <motion.input
                  variants={inputFocusVariants}
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0055FF]/20 dark:focus:ring-[#3d7eff]/20 focus:border-[#0055FF] dark:focus:border-[#3d7eff] transition-all"
                  placeholder="Your name"
                />
              </motion.div>
              
              <motion.div 
                className="space-y-2"
                initial="rest"
                whileHover="focus"
                whileFocus="focus"
              >
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Email
                </label>
                <motion.input
                  variants={inputFocusVariants}
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0055FF]/20 dark:focus:ring-[#3d7eff]/20 focus:border-[#0055FF] dark:focus:border-[#3d7eff] transition-all"
                  placeholder="your.email@example.com"
                />
              </motion.div>
              
              <motion.div 
                className="space-y-2"
                initial="rest"
                whileHover="focus"
                whileFocus="focus"
              >
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Message
                </label>
                <motion.textarea
                  variants={inputFocusVariants}
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0055FF]/20 dark:focus:ring-[#3d7eff]/20 focus:border-[#0055FF] dark:focus:border-[#3d7eff] transition-all h-32 resize-none"
                  placeholder="Your message here..."
                />
              </motion.div>
              
              <Button 
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#0055FF] hover:bg-[#0044CC] dark:bg-[#3d7eff] dark:hover:bg-[#2d6ef0] text-white px-6 py-3 rounded-xl flex items-center justify-center gap-2 hover-lift button-pulse"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
                {!isSubmitting && <FaArrowRight className="text-sm" />}
              </Button>
            </form>
          ) : (
            <motion.div 
              variants={formSuccessVariants}
              initial="hidden"
              animate="visible"
              className="bg-green-50 dark:bg-green-900/20 border border-green-100 dark:border-green-800 rounded-xl p-6 text-center"
            >
              <div className="w-16 h-16 bg-green-100 dark:bg-green-800/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600 dark:text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-green-800 dark:text-green-400 mb-2">Message Sent!</h4>
              <p className="text-green-700 dark:text-green-500">Thank you for your message. I'll get back to you as soon as possible.</p>
            </motion.div>
          )}
        </motion.div>
        
        <motion.div variants={itemVariants} className="order-1 md:order-2">
          <h3 className="text-2xl md:text-3xl font-bold mb-8 text-gradient inline-block">Contact Information</h3>
          
          <div className="space-y-6 mb-8">
            <div className="flex items-start">
              <div className="mt-1 mr-4 p-3 rounded-full bg-[#0055FF]/10 dark:bg-[#3d7eff]/20 text-[#0055FF] dark:text-[#3d7eff]">
                <FaMapMarkerAlt className="text-xl" />
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-1">Location</h4>
                <p className="text-gray-700 dark:text-gray-300">Pune, Maharashtra, India</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="mt-1 mr-4 p-3 rounded-full bg-[#0055FF]/10 dark:bg-[#3d7eff]/20 text-[#0055FF] dark:text-[#3d7eff]">
                <FaPhone className="text-xl" />
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-1">Phone</h4>
                <a href="tel:+919028622726" className="text-gray-700 dark:text-gray-300 hover:text-[#0055FF] dark:hover:text-[#3d7eff] transition-colors animated-underline">
                  +91 9028622726
                </a>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="mt-1 mr-4 p-3 rounded-full bg-[#0055FF]/10 dark:bg-[#3d7eff]/20 text-[#0055FF] dark:text-[#3d7eff]">
                <FaEnvelope className="text-xl" />
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-1">Email</h4>
                <a href="mailto:mohitchaudhari666@gmail.com" className="text-gray-700 dark:text-gray-300 hover:text-[#0055FF] dark:hover:text-[#3d7eff] transition-colors animated-underline">
                  mohitchaudhari666@gmail.com
                </a>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="mt-1 mr-4 p-3 rounded-full bg-[#0055FF]/10 dark:bg-[#3d7eff]/20 text-[#0055FF] dark:text-[#3d7eff]">
                <FaLinkedin className="text-xl" />
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-1">LinkedIn</h4>
                <a href="https://linkedin.com/in/mohit-chaudhari-marketing" target="_blank" rel="noopener noreferrer" className="text-gray-700 dark:text-gray-300 hover:text-[#0055FF] dark:hover:text-[#3d7eff] transition-colors animated-underline">
                  linkedin.com/in/mohit-chaudhari-marketing
                </a>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="mt-1 mr-4 p-3 rounded-full bg-[#0055FF]/10 dark:bg-[#3d7eff]/20 text-[#0055FF] dark:text-[#3d7eff]">
                <FaGithub className="text-xl" />
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-1">Portfolio</h4>
                <a href="https://mohitchaudhari-portfolio.com" target="_blank" rel="noopener noreferrer" className="text-gray-700 dark:text-gray-300 hover:text-[#0055FF] dark:hover:text-[#3d7eff] transition-colors animated-underline">
                  mohitchaudhari-portfolio.com
                </a>
              </div>
            </div>
          </div>
          
          <div className="w-full h-64 relative rounded-xl overflow-hidden">
            <Lottie 
              animationData={contactAnimation} 
              loop={true} 
              className="w-full h-full"
            />
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ContactSection;

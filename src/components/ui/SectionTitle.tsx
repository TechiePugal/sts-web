import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  center?: boolean;
  light?: boolean;
}

const SectionTitle: React.FC<SectionTitleProps> = ({
  title,
  subtitle,
  center = false,
  light = false,
}) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' }
    },
  };

  const subtitleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, delay: 0.2, ease: 'easeOut' }
    },
  };

  const lineVariants = {
    hidden: { width: 0 },
    visible: { 
      width: '60px',
      transition: { duration: 0.8, delay: 0.4, ease: 'easeOut' }
    },
  };

  return (
    <div 
      ref={ref} 
      className={`mb-12 ${center ? 'text-center' : ''}`}
    >
      <motion.h2
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        variants={titleVariants}
        className={`text-3xl md:text-4xl font-bold mb-4 ${
          light ? 'text-white' : 'text-gray-900'
        }`}
      >
        {title}
      </motion.h2>
      
      <motion.div
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        variants={lineVariants}
        className={`h-1 bg-accent-600 rounded-full ${
          center ? 'mx-auto' : ''
        }`}
      />
      
      {subtitle && (
        <motion.p
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={subtitleVariants}
          className={`mt-4 text-lg ${
            light ? 'text-gray-200' : 'text-gray-600'
          }`}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
};

export default SectionTitle;
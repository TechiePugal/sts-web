import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Star, ArrowLeft, ArrowRight, Quote } from 'lucide-react';
import { testimonials } from '../../data/company';
import SectionTitle from '../ui/SectionTitle';

const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const goToPrevious = () => {
    setDirection(-1);
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  const goToNext = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
    }),
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <section className="py-20 bg-primary-900 text-white">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="What Our Clients Say"
          subtitle="Hear from textile manufacturers who rely on our precision components."
          center
          light
        />

        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={containerVariants}
          className="max-w-4xl mx-auto"
        >
          <div className="relative py-8">
            {/* Quote icon */}
            <div className="absolute top-0 left-0 opacity-10">
              <Quote size={80} />
            </div>

            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: 'spring', stiffness: 300, damping: 30 },
                  opacity: { duration: 0.4 },
                }}
                className="text-center px-8"
              >
                <div className="mb-8">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star
                      key={i}
                      size={24}
                      fill="#f59e0b"
                      className="inline-block text-yellow-500 mx-0.5"
                    />
                  ))}
                </div>

                <p className="text-xl md:text-2xl font-medium text-gray-200 mb-8 italic">
                  "{testimonials[currentIndex].quote}"
                </p>

                <div>
                  <p className="text-lg font-semibold mb-1">
                    {testimonials[currentIndex].name}
                  </p>
                  <p className="text-primary-300">
                    {testimonials[currentIndex].company}, {testimonials[currentIndex].country}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation buttons */}
            <div className="flex justify-center mt-12 space-x-4">
              <button
                onClick={goToPrevious}
                className="p-2 rounded-full bg-primary-800 hover:bg-primary-700 transition-colors"
                aria-label="Previous testimonial"
              >
                <ArrowLeft size={20} />
              </button>
              <button
                onClick={goToNext}
                className="p-2 rounded-full bg-primary-800 hover:bg-primary-700 transition-colors"
                aria-label="Next testimonial"
              >
                <ArrowRight size={20} />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
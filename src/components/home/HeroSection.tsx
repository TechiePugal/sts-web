import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Button from '../ui/Button';

const HeroSection: React.FC = () => {
  return (
    <div className="relative h-screen min-h-[600px] bg-gradient-to-r from-gray-600 to-gray-600 overflow-hidden">
      {/* Background image overlay */}
      <div 
        className="absolute inset-0 bg-black opacity-110 z-0"
        style={{
          backgroundImage: 'url(https://www.legrom.de/wp-content/uploads/2017/03/1280px-OE-Actionbild-Spulapparat.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          mixBlendMode: 'overlay'
        }}
      />
      
      {/* Content */}
      <div className="container mx-auto px-4 h-full flex items-center ml-20  relative z-10">
        <div className="max-w-3xl">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-orange-400 leading-tight mb-6"
          >Precision Spares for Textile Excellence
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className="text-xl md:text-xl text-gray-200 mb-8"
          >
            Precision-engineered components with over four decades of manufacturing excellence, serving clients in 50+ countries worldwide.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
            className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4"
          >
            <Link to="/products">
              <Button 
                size="lg" 
                variant="primary"
                icon={<ArrowRight size={20} />}
                iconPosition="right"
              >
                Explore Our Products
              </Button>
            </Link>
            <Link to="/contact">
              <Button 
                size="lg" 
                variant="outline"
                className="bg-transparent border border-white text-white hover:bg-white/60"
              >
                Contact Us
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
      
      {/* Wave bottom decoration */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" fill="white">
          <path d="M0,96L80,85.3C160,75,320,53,480,53.3C640,53,800,75,960,80C1120,85,1280,75,1360,69.3L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
        </svg>
      </div>
    </div>
  );
};

export default HeroSection;
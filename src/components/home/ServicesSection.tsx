import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  ShapesIcon, 
  CogIcon, 
  PackageIcon, 
  GlobeIcon, 
  KeyIcon, 
  ArrowRight 
} from 'lucide-react';
import { services } from '../../data/services';
import SectionTitle from '../ui/SectionTitle';
import Button from '../ui/Button';

const ServicesSection: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

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
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'shapes':
        return <ShapesIcon size={40} className="text-primary-500" />;
      case 'cog':
        return <CogIcon size={40} className="text-primary-500" />;
      case 'package':
        return <PackageIcon size={40} className="text-primary-500" />;
      case 'globe':
        return <GlobeIcon size={40} className="text-primary-500" />;
      case 'key':
        return <KeyIcon size={40} className="text-primary-500" />;
      default:
        return <CogIcon size={40} className="text-primary-500" />;
    }
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Our Comprehensive Services"
          subtitle="We offer a wide range of services to support the textile industry with high-quality solutions."
        />

        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="mb-6">{getIcon(service.icon)}</div>
              <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <Link to={`/services/${service.id}`} className="inline-flex items-center text-primary-600 font-medium hover:text-primary-700 transition-colors">
                Learn More <ArrowRight size={16} className="ml-2" />
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center">
          <Link to="/services">
            <Button
              variant="primary"
              size="lg"
              className="inline-flex items-center"
              icon={<ArrowRight size={20} />}
              iconPosition="right"
            >
              Explore Our Services
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
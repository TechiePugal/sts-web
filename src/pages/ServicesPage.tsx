import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SectionTitle from '../components/ui/SectionTitle';
import { services } from '../data/services';
import Button from '../components/ui/Button';
import {
  ShapesIcon,
  CogIcon,
  PackageIcon,
  GlobeIcon,
  KeyIcon,
  ArrowRight,
  Check,
} from 'lucide-react';

const ServicesPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Comprehensive Textile Machinery Services | Super Textile Services';

    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute(
      'content',
      'Explore our range of services, including pattern making, component machining, semi-assembly, global supply chain, and turnkey textile solutions.'
    );
  }, []);

  const getIcon = (iconName: string, size = 48) => {
    switch (iconName) {
      case 'shapes':
        return <ShapesIcon size={size} className="text-primary-500" />;
      case 'cog':
        return <CogIcon size={size} className="text-primary-500" />;
      case 'package':
        return <PackageIcon size={size} className="text-primary-500" />;
      case 'globe':
        return <GlobeIcon size={size} className="text-primary-500" />;
      case 'key':
        return <KeyIcon size={size} className="text-primary-500" />;
      default:
        return <CogIcon size={size} className="text-primary-500" />;
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
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

  return (
    <main className="min-h-screen flex flex-col">
      {/* Hero Section */}
      {/* <section className="relative py-24 bg-gray-900 text-white">
        <div
          className="absolute inset-0 bg-black opacity-90 z-0"
          style={{
            backgroundImage:
              'url(https://www.indiantextilemagazine.in/wp-content/uploads/2023/06/IMG_20200904_152047.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            mixBlendMode: 'overlay',
          }}
        />
        <div className="container mx-auto px-6 md:px-12 relative z-10 max-w-4xl text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Our Comprehensive Services
          </h1>
          <div className="w-20 h-1 bg-accent-600 rounded-full mx-auto md:mx-0 mb-6" />
          <p className="text-lg sm:text-xl text-gray-200 max-w-3xl mx-auto md:mx-0">
            We offer a wide range of services to support the textile industry with high-quality
            solutions that enhance productivity and reduce downtime.
          </p>
        </div>
      </section> */}

      <section className="relative py-24 bg-gray-800 text-white">
        <div
          className="absolute inset-0 bg-black opacity-110 z-100"
          style={{
            backgroundImage: 'url(https://www.indiantextilemagazine.in/wp-content/uploads/2023/06/IMG_20200904_152047.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            mixBlendMode: 'overlay',
          }}
        />
        <div className="container mx-auto px-4 relative z-10 ml-4 md:ml-20 mt-10">
          <div className="max-w-3xl pl-2 md:pl-0">
            <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
            Our Comprehensive Services
            </h1>
            <div className="w-20 h-1 bg-accent-600 rounded-full mb-6" />
            <p className="text-lg md:text-xl text-gray-200 max-w-xl">
                 We offer a wide range of services to support the textile industry with high-quality
            solutions that enhance productivity and reduce downtime.            </p>
          </div>
        </div>
      </section>



      {/* Services Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 md:px-12 max-w-6xl">
          <SectionTitle
            title="Our Service Offerings"
            subtitle="Comprehensive solutions to meet your textile machinery needs"
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mt-10">
            <div className="lg:col-span-2 space-y-6 text-gray-700 text-base sm:text-lg leading-relaxed">
              <p>
                At Super Textile Services, we go beyond simply manufacturing and supplying textile
                machinery components. We offer a comprehensive suite of services designed to
                support our clients throughout the entire lifecycle of their textile machinery needs.
              </p>
              <p>
                From initial concept and pattern making to component machining, assembly, and global
                distribution, our team of experts is committed to delivering high-quality solutions
                that enhance productivity, reduce downtime, and optimize performance.
              </p>
              <p>
                Our services are tailored to meet the specific requirements of each client, whether
                you need a single component machined to precise specifications or a complete turnkey
                solution for your textile mill setup or modernization project.
              </p>
            </div>
            <aside className="lg:col-span-1 bg-gray-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-5">Why Choose Our Services?</h3>
              <ul className="space-y-4 text-gray-700">
                {[
                  'Expert team with decades of experience',
                  'State-of-the-art equipment and facilities',
                  'Customized solutions for specific needs',
                  'Rigorous quality control processes',
                  'Global reach with local expertise',
                  'Comprehensive after-sales support',
                ].map((reason, idx) => (
                  <li key={idx} className="flex items-start">
                    <Check size={20} className="text-success-500 mr-3 mt-1 flex-shrink-0" />
                    <span>{reason}</span>
                  </li>
                ))}
              </ul>
            </aside>
          </div>
        </div>
      </section>

      {/* Detailed Services */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 md:px-12 max-w-6xl">
          {services.map((service, index) => {
            const [ref, inView] = useInView({
              triggerOnce: true,
              threshold: 0.15,
            });

            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={service.id}
                ref={ref}
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
                variants={containerVariants}
                className={`grid grid-cols-1 md:grid-cols-2 gap-10 items-center ${
                  index !== 0 ? 'mt-24' : ''
                }`}
              >
                {/* Text Content */}
                <div className={isEven ? 'order-1' : 'order-2 md:order-1'}>
                  <motion.div variants={itemVariants} className="mb-3">
                    {getIcon(service.icon)}
                  </motion.div>
                  <motion.h2
                    variants={itemVariants}
                    className="text-2xl sm:text-3xl font-bold mb-4 leading-tight"
                  >
                    {service.title}
                  </motion.h2>
                  <motion.p
                    variants={itemVariants}
                    className="text-base sm:text-lg text-gray-700 mb-6 leading-relaxed"
                  >
                    {service.description}
                  </motion.p>

                  {service.details && (
                    <motion.div variants={itemVariants} className="mb-6">
                      <h3 className="text-xl font-semibold mb-3">Service Details</h3>
                      <ul className="space-y-3 text-gray-700">
                        {service.details.map((detail, idx) => (
                          <li key={idx} className="flex items-start">
                            <Check size={18} className="text-primary-600 mr-3 mt-1 flex-shrink-0" />
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  )}

                  <motion.div variants={itemVariants}>
                    <Button variant="primary" icon={<ArrowRight size={18} />} iconPosition="right">
                      Request This Service
                    </Button>
                  </motion.div>
                </div>

                {/* Image */}
                <div className={isEven ? 'order-2' : 'order-1 md:order-2'}>
                  <motion.div
                    variants={itemVariants}
                    className="bg-white rounded-lg shadow-lg overflow-hidden"
                  >
                    <img
                      src={`https://images.pexels.com/photos/${
                        3846517 + index * 100
                      }/pexels-photo-${3846517 + index * 100}.jpeg?auto=compress&cs=tinysrgb&w=720&h=480&dpr=1`}
                      alt={service.title}
                      className="w-full h-auto object-cover rounded"
                      loading="lazy"
                      decoding="async"
                    />
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-900 text-white">
        <div className="container mx-auto px-6 md:px-12 max-w-4xl text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 leading-tight">
            Ready to Discuss Your Specific Requirements?
          </h2>
          <p className="text-base sm:text-lg text-gray-200 mb-10 leading-relaxed max-w-xl mx-auto">
            Contact our team of experts today to learn more about our services and how we can
            support your textile machinery needs.
          </p>
          <Button
            variant="outline"
            size="lg"
            className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary-700 transition-colors"
          >
            Contact Us
          </Button>
        </div>
      </section>
    </main>
  );
};

export default ServicesPage;

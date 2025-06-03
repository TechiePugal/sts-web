import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SectionTitle from '../components/ui/SectionTitle';
import { Factory, PenTool as Tool, Users, Shield, Award, Microscope } from 'lucide-react';
import FactoryTourPage from './FactoryTour';
const FacilitiesPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Our Manufacturing Facilities | Super Textile Services';
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', 
      'Explore our state-of-the-art manufacturing facilities equipped with advanced machinery and quality control systems.'
    );
  }, []);

  const facilities = [
    {
      icon: <Factory size={40} />,
      title: 'Manufacturing Unit',
      description: 'State-of-the-art manufacturing facility spanning 50,000 sq ft with advanced CNC machinery.',
      features: [
        'Advanced CNC Machines',
        'Automated Production Lines',
        'Climate Controlled Environment',
        'Efficient Material Handling'
      ]
    },
    {
      icon: <Tool size={40} />,
      title: 'Tool Room',
      description: 'Precision tool room equipped with the latest equipment for manufacturing and maintenance.',
      features: [
        'High-Precision Tools',
        'Custom Tool Development',
        'Tool Maintenance Center',
        'Calibration Facility'
      ]
    },
    {
      icon: <Microscope size={40} />,
      title: 'Quality Control Lab',
      description: 'Advanced quality control laboratory with modern testing and measurement equipment.',
      features: [
        '3D Measurement Systems',
        'Material Testing Lab',
        'Performance Testing',
        'Quality Documentation'
      ]
    }
  ];

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <main>
      {/* Hero Section */}
      <section className="relative py-24 bg-gray-800 text-white">
        <div 
        className="absolute inset-0 bg-black opacity-110 z-100"
        style={{
          backgroundImage: 'url(https://www.godfreyphillips.co.in/public/storage/images/cutting-edge.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          mixBlendMode: 'overlay'
        }}
      />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our World-Class Facilities</h1>
            <div className="w-20 h-1 bg-accent-600 rounded-full mb-6" />
            <p className="text-xl text-gray-200">
              Discover our state-of-the-art manufacturing facilities equipped with advanced machinery
              and stringent quality control systems.
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Manufacturing Excellence"
            subtitle="Our facilities are equipped with the latest technology to ensure premium quality products"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">ISO 9001:2015</h3>
              <p className="text-gray-600">Certified quality management system</p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Expert Team</h3>
              <p className="text-gray-600">Skilled engineers and technicians</p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Quality Assurance</h3>
              <p className="text-gray-600">Rigorous testing protocols</p>
            </div>
          </div>

          <motion.div
            ref={ref}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.2 }
              }
            }}
            className="grid grid-cols-1 lg:grid-cols-3 gap-8"
          >
            {facilities.map((facility, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.6 }
                  }
                }}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <div className="p-8">
                  <div className="w-16 h-16 bg-primary-50 rounded-full flex items-center justify-center mb-6">
                    <div className="text-primary-600">{facility.icon}</div>
                  </div>
                  <h3 className="text-2xl font-semibold mb-4">{facility.title}</h3>
                  <p className="text-gray-600 mb-6">{facility.description}</p>
                  <ul className="space-y-3">
                    {facility.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-700">
                        <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Virtual Tour Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Virtual Facility Tour"
            subtitle="Take a virtual walk through our manufacturing facilities"
          />

<FactoryTourPage />
        </div>
      </section>
    </main>
  );
};

export default FacilitiesPage;
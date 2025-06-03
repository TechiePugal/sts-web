import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SectionTitle from '../components/ui/SectionTitle';
import { timeline, team } from '../data/company';
import Card from '../components/ui/Card';

const AboutPage: React.FC = () => {
  useEffect(() => {
    // Update page title and meta description for SEO
    document.title = 'About Super Textile Services | Textile Machinery Experts Since 1984';
    
    // Create or update meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', 
      'Discover our journey as a leading textile machinery spare parts manufacturer, committed to quality, innovation, and customer satisfaction.'
    );
  }, []);

  const [timelineRef, timelineInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [teamRef, teamInView] = useInView({
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

  return (
    <main>
      {/* Hero Section */}
      <section className="relative py-24 bg-gray-800 text-white">
          <div 
        className="absolute inset-0 bg-black opacity-110 z-100"
        style={{
          backgroundImage: 'url(https://www.supergroupscbe.com/images/super-groups-about.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          mixBlendMode: 'overlay'
        }}
      />
        <div className="container mx-auto px-4 relative ml-20 mt-10 z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Legacy in Textile Machinery Manufacturing</h1>
            <div className="w-20 h-1 bg-accent-600 rounded-full mb-6" />
            <p className="text-xl text-gray-200">
              Founded in 1984 in Coimbatore, Tamil Nadu, Super Textile Services has grown from a small workshop to a global enterprise.
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionTitle
                title="Our Story"
                subtitle="From humble beginnings to global excellence"
              />
              <div className="space-y-4 text-gray-700">
                <p>
                  Super Textile Services was established in 1984 as a small workshop in Coimbatore, the textile hub of South India. What began as a modest operation focused on producing essential textile machinery components has now evolved into a global enterprise known for precision-engineered textile machinery spare parts.
                </p>
                <p>
                  Our journey has been marked by an unwavering commitment to quality, continuous innovation, and exceptional customer service. These core values have positioned us as a trusted partner in the textile industry, serving clients across more than 50 countries.
                </p>
                <p>
                  Today, we operate state-of-the-art manufacturing facilities equipped with advanced CNC machinery and employ a team of skilled engineers and technicians dedicated to delivering components that meet the highest standards of precision and durability.
                </p>
              </div>
              <div className="mt-8 space-y-4">
                <h3 className="text-xl font-semibold">Our Core Values</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="bg-primary-100 text-primary-700 rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5">✓</span>
                    <span><strong>Quality Assurance:</strong> ISO-certified manufacturing processes</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-primary-100 text-primary-700 rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5">✓</span>
                    <span><strong>Innovation:</strong> Cutting-edge technology and processes</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-primary-100 text-primary-700 rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5">✓</span>
                    <span><strong>Expert Team:</strong> Skilled engineers and technicians</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-primary-100 text-primary-700 rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5">✓</span>
                    <span><strong>Global Reach:</strong> Exports to over 50 countries</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3760809/pexels-photo-3760809.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Textile machinery manufacturing"
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-lg shadow-lg w-64">
                <p className="text-lg font-bold text-primary-700">40+ Years</p>
                <p className="text-gray-700">Of manufacturing excellence</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Our Journey"
            subtitle="Key milestones in our growth and evolution"
            center
          />

          <motion.div
            ref={timelineRef}
            initial="hidden"
            animate={timelineInView ? 'visible' : 'hidden'}
            variants={containerVariants}
            className="max-w-4xl mx-auto mt-12"
          >
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`flex ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                } mb-12 last:mb-0`}
              >
                <div className="w-1/2 px-4">
                  <div
                    className={`bg-white p-6 rounded-lg shadow-md ${
                      index % 2 === 0
                        ? 'rounded-tr-none'
                        : 'rounded-tl-none'
                    }`}
                  >
                    <span className="text-sm font-semibold text-primary-600">
                      {item.year}
                    </span>
                    <h3 className="text-xl font-bold mt-1 mb-3">
                      {item.title}
                    </h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
                <div className="flex flex-col items-center w-0">
                  <div className="w-4 h-4 rounded-full bg-primary-600 z-10" />
                  <div className="w-0.5 bg-primary-200 h-full" />
                </div>
                <div className="w-1/2" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Our Leadership Team"
            subtitle="Meet the experts behind our success"
            center
          />

          <motion.div
            ref={teamRef}
            initial="hidden"
            animate={teamInView ? 'visible' : 'hidden'}
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12"
          >
            {team.map((member) => (
              <motion.div key={member.id} variants={itemVariants}>
                <Card hover>
                  <div className="aspect-w-1 aspect-h-1 overflow-hidden">
                    <img
                      src={member.imageUrl}
                      alt={member.name}
                      className="w-full h-64 object-cover object-center"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold">{member.name}</h3>
                    <p className="text-primary-600 mb-4">{member.role}</p>
                    <p className="text-gray-600 text-sm">{member.bio}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;
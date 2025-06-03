import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { products } from '../../data/products';
import SectionTitle from '../ui/SectionTitle';
import Card from '../ui/Card';
import Button from '../ui/Button';
import { ArrowRight, Award, Shield, Clock } from 'lucide-react';

const ProductsShowcase: React.FC = () => {
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

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Specialized Components"
          subtitle="Discover our premium range of precision-engineered special components"
        />

        {/* Features */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
        >
          <motion.div variants={itemVariants} className="text-center p-6">
            <div className="w-16 h-16 bg-primary-50 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="w-8 h-8 text-primary-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Premium Quality</h3>
            <p className="text-gray-600">Engineered to the highest standards with premium materials</p>
          </motion.div>

          <motion.div variants={itemVariants} className="text-center p-6">
            <div className="w-16 h-16 bg-primary-50 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="w-8 h-8 text-primary-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Guaranteed Performance</h3>
            <p className="text-gray-600">Tested and certified for optimal operation</p>
          </motion.div>

          <motion.div variants={itemVariants} className="text-center p-6">
            <div className="w-16 h-16 bg-primary-50 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="w-8 h-8 text-primary-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Extended Lifespan</h3>
            <p className="text-gray-600">Designed for longevity and minimal maintenance</p>
          </motion.div>
        </motion.div>

        {/* Products Grid */}
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12"
        >
          {products.map((product) => (
            <motion.div key={product.id} variants={itemVariants}>
              <Card hover className="h-full bg-white">
                <div className="aspect-w-16 aspect-h-9 overflow-hidden">
                  <img
                    src={product.imageUrl}
                    alt={product.name}
                    className="w-full h-64 object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                      <span className="inline-block bg-primary-50 text-primary-700 text-sm font-medium px-3 py-1 rounded-full">
                        {product.category}
                      </span>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <div className="space-y-3 mb-6">
                    {product.features?.slice(0, 3).map((feature, index) => (
                      <div key={index} className="flex items-center text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-2" />
                        {feature}
                      </div>
                    ))}
                  </div>
                  <Link to={`/products/${product.id}`}>
                    <Button
                      variant="outline"
                      className="w-full"
                      icon={<ArrowRight size={16} />}
                      iconPosition="right"
                    >
                      View Specifications
                    </Button>
                  </Link>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center">
          <Link to="/products">
            <Button
              variant="primary"
              size="lg"
              className="inline-flex items-center"
              icon={<ArrowRight size={20} />}
              iconPosition="right"
            >
              Explore All Special Components
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProductsShowcase;
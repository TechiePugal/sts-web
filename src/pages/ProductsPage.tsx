import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionTitle from '../components/ui/SectionTitle';
import { products, productCategories } from '../data/products';
import Card from '../components/ui/Card';
import { Link } from 'react-router-dom';
import { Search, Filter } from 'lucide-react';

const ProductsPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredProducts, setFilteredProducts] = useState(products);

  useEffect(() => {
    // Update page title and meta description for SEO
    document.title = 'Textile Machinery Spare Parts | High-Quality Components';
    
    // Create or update meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', 
      'Browse our extensive range of textile machinery spare parts, including housings, gears, pulleys, and more, designed for optimal performance and durability.'
    );
  }, []);

  useEffect(() => {
    filterProducts();
  }, [selectedCategory, searchQuery]);

  const filterProducts = () => {
    let filtered = products;
    
    // Filter by category
    if (selectedCategory !== 'All Categories') {
      filtered = filtered.filter(product => product.category === selectedCategory);
    }
    
    // Filter by search query
    if (searchQuery.trim() !== '') {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        product =>
          product.name.toLowerCase().includes(query) ||
          product.description.toLowerCase().includes(query) ||
          product.category.toLowerCase().includes(query)
      );
    }
    
    setFilteredProducts(filtered);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: 'easeOut' },
    },
  };

  return (
    <main>
      {/* Hero Section */}
      <section className="relative py-24 bg-gray-800 text-white">
        <div 
        className="absolute inset-0 bg-black opacity-110 z-100"
        style={{
          backgroundImage: 'url(https://kohantextilejournal.com/wp-content/uploads/2021/06/itmf-Report-textile-machinery.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          mixBlendMode: 'overlay'
        }}
      />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Premium Textile Machinery Components</h1>
            <div className="w-20 h-1 bg-accent-600 rounded-full mb-6" />
            <p className="text-xl text-gray-200">
              Browse our extensive range of high-quality textile machinery spare parts designed for optimal performance and durability.
            </p>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar Filters */}
            <div className="lg:w-1/4">
              <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
                <h3 className="text-lg font-semibold mb-4 flex items-center">
                  <Filter size={20} className="mr-2" /> Filter Products
                </h3>
                
                {/* Search */}
                <div className="mb-6">
                  <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-2">
                    Search
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      id="search"
                      className="w-full px-4 py-2 pr-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                      placeholder="Search products..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <Search size={18} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  </div>
                </div>
                
                {/* Categories */}
                <div>
                  <h4 className="text-sm font-medium text-gray-700 mb-2">Categories</h4>
                  <div className="space-y-2">
                    {productCategories.map((category) => (
                      <button
                        key={category}
                        className={`block w-full text-left px-3 py-2 text-sm rounded-md transition-colors ${
                          selectedCategory === category
                            ? 'bg-primary-100 text-primary-700 font-medium'
                            : 'text-gray-600 hover:bg-gray-100'
                        }`}
                        onClick={() => setSelectedCategory(category)}
                      >
                        {category}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            {/* Products Grid */}
            <div className="lg:w-3/4">
              <div className="mb-8 flex justify-between items-center">
                <h2 className="text-2xl font-bold text-gray-900">
                  {selectedCategory === 'All Categories' ? 'All Products' : selectedCategory}
                </h2>
                <p className="text-gray-600">
                  Showing {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''}
                </p>
              </div>
              
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedCategory + searchQuery}
                  initial="hidden"
                  animate="visible"
                  variants={containerVariants}
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                  {filteredProducts.length > 0 ? (
                    filteredProducts.map((product) => (
                      <motion.div key={product.id} variants={itemVariants}>
                        <Card hover className="h-full">
                          <div className="aspect-w-16 aspect-h-9">
                            <img
                              src={product.imageUrl}
                              alt={product.name}
                              className="w-full h-48 object-cover"
                            />
                          </div>
                          <div className="p-6">
                            <span className="text-sm text-primary-600 font-medium">
                              {product.category}
                            </span>
                            <h3 className="text-lg font-semibold mt-1 mb-2">{product.name}</h3>
                            <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                              {product.description}
                            </p>
                            <Link
                              to={`/products/${product.id}`}
                              className="inline-block text-primary-600 font-medium hover:text-primary-700 transition-colors"
                            >
                              View Details
                            </Link>
                          </div>
                        </Card>
                      </motion.div>
                    ))
                  ) : (
                    <div className="col-span-full py-16 text-center">
                      <p className="text-xl text-gray-500">
                        No products found matching your criteria.
                      </p>
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ProductsPage;
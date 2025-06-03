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
    document.title = 'Textile Machinery Spare Parts | High-Quality Components';
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute(
      'content',
      'Browse our extensive range of textile machinery spare parts, including housings, gears, pulleys, and more, designed for optimal performance and durability.'
    );
  }, []);

  useEffect(() => {
    filterProducts();
  }, [selectedCategory, searchQuery]);

  const filterProducts = () => {
    let filtered = products;

    if (selectedCategory !== 'All Categories') {
      filtered = filtered.filter((p) => p.category === selectedCategory);
    }
    if (searchQuery.trim() !== '') {
      const q = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q)
      );
    }
    setFilteredProducts(filtered);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
  };

  return (
    <main className="min-h-screen bg-gray-50">

      {/* Hero Section */}
      <section className="relative py-24 bg-gray-800 text-white">
        <div
          className="absolute inset-0 bg-black opacity-110 z-100"
          style={{
            backgroundImage: 'url(https://kohantextilejournal.com/wp-content/uploads/2021/06/itmf-Report-textile-machinery.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            mixBlendMode: 'overlay',
          }}
        />
        <div className="container mx-auto px-4 relative z-10 ml-4 md:ml-20 mt-10">
          <div className="max-w-3xl pl-2 md:pl-0">
            <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
            Our Premium Textile Machinery Components
            </h1>
            <div className="w-20 h-1 bg-accent-600 rounded-full mb-6" />
            <p className="text-lg md:text-xl text-gray-200 max-w-xl">
             Browse our extensive range of high-quality textile machinery spare parts designed for optimal performance and durability.
            </p>
          </div>
        </div>
      </section>

      {/* Hero Section */}

      {/* Products Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar Filters */}
            <aside className="lg:w-1/4">
              <div className="bg-white rounded-lg shadow-md p-6 lg:sticky lg:top-24">
                <h3 className="flex items-center text-lg font-semibold mb-6 text-gray-800">
                  <Filter size={20} className="mr-2" />
                  Filter Products
                </h3>

                {/* Search */}
                <div className="mb-8">
                  <label
                    htmlFor="search"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Search
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      id="search"
                      className="w-full rounded-md border border-gray-300 py-2 pl-4 pr-10 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      placeholder="Search products..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <Search
                      size={18}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
                    />
                  </div>
                </div>

                {/* Categories */}
                <div>
                  <h4 className="text-sm font-medium text-gray-700 mb-3">
                    Categories
                  </h4>
                  <div className="space-y-2">
                    {productCategories.map((category) => (
                      <button
                        key={category}
                        onClick={() => setSelectedCategory(category)}
                        className={`w-full text-left rounded-md px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                          selectedCategory === category
                            ? 'bg-primary-100 text-primary-700'
                            : 'text-gray-600 hover:bg-gray-100'
                        }`}
                        aria-pressed={selectedCategory === category}
                      >
                        {category}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </aside>

            {/* Products Grid */}
            <section className="lg:w-3/4">
              <div className="mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <h2 className="text-2xl font-bold text-gray-900 truncate">
                  {selectedCategory === 'All Categories'
                    ? 'All Products'
                    : selectedCategory}
                </h2>
                <p className="text-gray-600 whitespace-nowrap">
                  Showing {filteredProducts.length} product
                  {filteredProducts.length !== 1 ? 's' : ''}
                </p>
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedCategory + searchQuery}
                  initial="hidden"
                  animate="visible"
                  variants={containerVariants}
                  className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
                >
                  {filteredProducts.length > 0 ? (
                    filteredProducts.map((product) => (
                      <motion.div key={product.id} variants={itemVariants}>
                        <Card hover className="h-full flex flex-col">
                          <div className="aspect-w-16 aspect-h-9 overflow-hidden rounded-t-md">
                            <img
                              src={product.imageUrl}
                              alt={product.name}
                              className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
                            />
                          </div>
                          <div className="p-5 flex flex-col flex-grow">
                            <span className="text-sm font-medium text-primary-600">
                              {product.category}
                            </span>
                            <h3 className="text-lg font-semibold mt-1 mb-2 truncate">
                              {product.name}
                            </h3>
                            <p className="text-gray-600 text-sm mb-4 line-clamp-2 flex-grow">
                              {product.description}
                            </p>
                            <Link
                              to={`/products/${product.id}`}
                              className="mt-auto inline-block text-primary-600 font-medium hover:text-primary-700 transition-colors"
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
            </section>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ProductsPage;

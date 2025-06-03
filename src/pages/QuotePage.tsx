import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import SectionTitle from '../components/ui/SectionTitle';
import Button from '../components/ui/Button';
import { products } from '../data/products';
import { ShoppingCart, Trash2, Send, Plus, Minus } from 'lucide-react';

interface QuoteItem {
  productId: string;
  quantity: number;
}

interface QuoteForm {
  name: string;
  email: string;
  company: string;
  phone: string;
  requirements: string;
}

const QuotePage: React.FC = () => {
  const [quoteItems, setQuoteItems] = useState<QuoteItem[]>([]);
  const { register, handleSubmit, formState: { errors } } = useForm<QuoteForm>();

  useEffect(() => {
    document.title = 'Get a Quote | Super Textile Services';
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', 
      'Request a customized quote for our premium textile machinery components. Quick and easy quotation process.'
    );
  }, []);

  const addToQuote = (productId: string) => {
    const existingItem = quoteItems.find(item => item.productId === productId);
    if (existingItem) {
      setQuoteItems(quoteItems.map(item =>
        item.productId === productId
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ));
    } else {
      setQuoteItems([...quoteItems, { productId, quantity: 1 }]);
    }
  };

  const removeFromQuote = (productId: string) => {
    setQuoteItems(quoteItems.filter(item => item.productId !== productId));
  };

  const updateQuantity = (productId: string, change: number) => {
    setQuoteItems(quoteItems.map(item => {
      if (item.productId === productId) {
        const newQuantity = Math.max(1, item.quantity + change);
        return { ...item, quantity: newQuantity };
      }
      return item;
    }));
  };

  const onSubmit = (data: QuoteForm) => {
    const quoteData = {
      ...data,
      items: quoteItems.map(item => ({
        product: products.find(p => p.id === item.productId),
        quantity: item.quantity
      }))
    };
    console.log('Quote Request:', quoteData);
    // Here you would typically send this to your backend
  };

  return (
    <main>
          <section className="relative py-24 bg-gray-800 text-white">
        <div
          className="absolute inset-0 bg-black opacity-110 z-100"
          style={{
            backgroundImage: 'url(https://www.srdiecasting.in/wp-content/uploads/2019/07/sliderpic6.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            mixBlendMode: 'overlay',
          }}
        />
        <div className="container mx-auto px-4 relative z-10 ml-4 md:ml-20 mt-10">
          <div className="max-w-3xl pl-2 md:pl-0">
            <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
        Request a Quote
            </h1>
            <div className="w-20 h-1 bg-accent-600 rounded-full mb-6" />
            <p className="text-lg md:text-xl text-gray-200 max-w-xl">
      
              Select your required components and get a customized quote tailored to your needs.            </p>
          </div>
        </div>
      </section>


      {/* Hero Section */}
      {/* <section className="relative py-24 bg-gray-800 text-white">
<div 
        className="absolute inset-0 bg-black/50 z-100"
        style={{
          backgroundImage: 'url(https://www.srdiecasting.in/wp-content/uploads/2019/07/sliderpic6.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          mixBlendMode: 'overlay'
        }}
      />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Request a Quote</h1>
            <div className="w-20 h-1 bg-accent-600 rounded-full mb-6" />
            <p className="text-xl text-gray-200">
              Select your required components and get a customized quote tailored to your needs.
            </p>
          </div>
        </div>
      </section> */}

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Products Selection */}
            <div className="lg:col-span-2">
              <SectionTitle
                title="Select Products"
                subtitle="Choose the components you need for your quote"
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {products.map((product) => (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-white rounded-lg shadow-md overflow-hidden"
                  >
                    <img
                      src={product.imageUrl}
                      alt={product.name}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-6">
                      <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
                      <p className="text-gray-600 text-sm mb-4">{product.description}</p>
                      
                      {quoteItems.find(item => item.productId === product.id) ? (
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <button
                              onClick={() => updateQuantity(product.id, -1)}
                              className="p-1 rounded-full hover:bg-gray-100"
                            >
                              <Minus size={20} className="text-gray-600" />
                            </button>
                            <span className="font-medium">
                              {quoteItems.find(item => item.productId === product.id)?.quantity}
                            </span>
                            <button
                              onClick={() => updateQuantity(product.id, 1)}
                              className="p-1 rounded-full hover:bg-gray-100"
                            >
                              <Plus size={20} className="text-gray-600" />
                            </button>
                          </div>
                          <button
                            onClick={() => removeFromQuote(product.id)}
                            className="text-error-600 hover:text-error-700"
                          >
                            <Trash2 size={20} />
                          </button>
                        </div>
                      ) : (
                        <Button
                          variant="outline"
                          onClick={() => addToQuote(product.id)}
                          icon={<ShoppingCart size={18} />}
                          fullWidth
                        >
                          Add to Quote
                        </Button>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Quote Form */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
                <h3 className="text-xl font-semibold mb-6">Your Quote Request</h3>
                
                {quoteItems.length > 0 ? (
                  <div className="mb-6">
                    <h4 className="font-medium mb-4">Selected Items:</h4>
                    <div className="space-y-3">
                      {quoteItems.map((item) => {
                        const product = products.find(p => p.id === item.productId);
                        return (
                          <div key={item.productId} className="flex justify-between items-center">
                            <span className="text-sm">{product?.name}</span>
                            <span className="text-sm font-medium">Qty: {item.quantity}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                ) : (
                  <p className="text-gray-500 mb-6">No items selected yet</p>
                )}

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name*
                    </label>
                    <input
                      type="text"
                      className={`w-full px-3 py-2 border ${
                        errors.name ? 'border-error-500' : 'border-gray-300'
                      } rounded-md`}
                      {...register('name', { required: 'Name is required' })}
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-error-600">{errors.name.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address*
                    </label>
                    <input
                      type="email"
                      className={`w-full px-3 py-2 border ${
                        errors.email ? 'border-error-500' : 'border-gray-300'
                      } rounded-md`}
                      {...register('email', { 
                        required: 'Email is required',
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: 'Invalid email address'
                        }
                      })}
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-error-600">{errors.email.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Company Name*
                    </label>
                    <input
                      type="text"
                      className={`w-full px-3 py-2 border ${
                        errors.company ? 'border-error-500' : 'border-gray-300'
                      } rounded-md`}
                      {...register('company', { required: 'Company name is required' })}
                    />
                    {errors.company && (
                      <p className="mt-1 text-sm text-error-600">{errors.company.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number*
                    </label>
                    <input
                      type="tel"
                      className={`w-full px-3 py-2 border ${
                        errors.phone ? 'border-error-500' : 'border-gray-300'
                      } rounded-md`}
                      {...register('phone', { required: 'Phone number is required' })}
                    />
                    {errors.phone && (
                      <p className="mt-1 text-sm text-error-600">{errors.phone.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Additional Requirements
                    </label>
                    <textarea
                      className="w-full px-3 py-2 border border-gray-300 rounded-md"
                      rows={4}
                      {...register('requirements')}
                      placeholder="Any specific requirements or questions?"
                    ></textarea>
                  </div>

                  <Button
                    type="submit"
                    variant="primary"
                    fullWidth
                    icon={<Send size={18} />}
                    disabled={quoteItems.length === 0}
                  >
                    Request Quote
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default QuotePage;
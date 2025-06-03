import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SectionTitle from '../components/ui/SectionTitle';
import Button from '../components/ui/Button';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send,
  Globe,
  User,
  MessageSquare,
  Building,
  CheckCircle,
  AlertCircle
} from 'lucide-react';
import { contactInfo, internationalContact } from '../data/company';
import { useForm } from 'react-hook-form';

type FormData = {
  name: string;
  email: string;
  phone: string;
  company?: string;
  inquiryType: string;
  message: string;
};

const ContactPage: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isError, setIsError] = useState(false);

  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>();

  useEffect(() => {
    // Update page title and meta description for SEO
    document.title = 'Contact Super Textile Services | Get in Touch';
    
    // Create or update meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', 
      'Reach out to us for inquiries, support, or custom requirements. Our team is here to assist you with all your textile machinery needs.'
    );
  }, []);

  const [mapRef, mapInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const onSubmit = (data: FormData) => {
    console.log(data);
    // Simulate form submission
    try {
      // Here you would normally send the data to a server
      setIsSubmitted(true);
      setIsError(false);
      reset();
      // Reset form after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    } catch (error) {
      setIsError(true);
      setIsSubmitted(false);
    }
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
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  return (
    <main>
      {/* Hero Section */}
          <section className="relative py-24 bg-gray-800 text-white">
        <div
          className="absolute inset-0 bg-black opacity-110 z-100"
          style={{
            backgroundImage: 'url(https://came-italy.com/wp-content/uploads/2018/11/Came-still-life.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            mixBlendMode: 'overlay',
          }}
        />
        <div className="container mx-auto px-4 relative z-10 ml-4 md:ml-20 mt-10">
          <div className="max-w-3xl pl-2 md:pl-0">
            <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
            Get In Touch
            </h1>
            <div className="w-20 h-1 bg-accent-600 rounded-full mb-6" />
            <p className="text-lg md:text-xl text-gray-200 max-w-xl">
         Have questions about our products or services? Need technical support? Our team of experts is ready to assist you with any inquiries you may have.
            </p>
          </div>
        </div>
      </section>
      {/* <section className="relative py-24 bg-gray-800 text-white">
        <div 
        className="absolute inset-0 bg-black opacity-110 z-100"
        style={{
          backgroundImage: 'url(https://came-italy.com/wp-content/uploads/2018/11/Came-still-life.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          mixBlendMode: 'overlay'
        }}
      />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Get In Touch</h1>
            <div className="w-20 h-1 bg-accent-600 rounded-full mb-6" />
            <p className="text-xl text-gray-200">
              Have questions about our products or services? Need technical support? Our team of experts is ready to assist you with any inquiries you may have.
            </p>
          </div>
        </div>
      </section> */}

      {/* Contact Information */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <SectionTitle
                title="Send Us a Message"
                subtitle="Fill out the form below and our team will get back to you shortly."
              />

              <motion.div
                initial="hidden"
                animate="visible"
                variants={containerVariants}
                className="bg-white rounded-lg shadow-md p-8"
              >
                {isSubmitted && (
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-6 p-4 bg-success-50 border border-success-200 rounded-md flex items-start"
                  >
                    <CheckCircle className="text-success-500 mr-3 flex-shrink-0 mt-1" size={20} />
                    <div>
                      <h3 className="font-semibold text-success-700">Message Sent Successfully!</h3>
                      <p className="text-success-600">Thank you for contacting us. We'll respond to your inquiry as soon as possible.</p>
                    </div>
                  </motion.div>
                )}

                {isError && (
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-6 p-4 bg-error-50 border border-error-200 rounded-md flex items-start"
                  >
                    <AlertCircle className="text-error-500 mr-3 flex-shrink-0 mt-1" size={20} />
                    <div>
                      <h3 className="font-semibold text-error-700">Error Sending Message</h3>
                      <p className="text-error-600">There was a problem sending your message. Please try again later.</p>
                    </div>
                  </motion.div>
                )}

                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <motion.div variants={itemVariants}>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Full Name*
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <User size={18} className="text-gray-400" />
                        </div>
                        <input
                          type="text"
                          id="name"
                          className={`block w-full pl-10 pr-3 py-2 border ${
                            errors.name ? 'border-error-500' : 'border-gray-300'
                          } rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500`}
                          placeholder="Your full name"
                          {...register('name', { required: 'Name is required' })}
                        />
                      </div>
                      {errors.name && (
                        <p className="mt-1 text-sm text-error-600">{errors.name.message}</p>
                      )}
                    </motion.div>

                    <motion.div variants={itemVariants}>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address*
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <Mail size={18} className="text-gray-400" />
                        </div>
                        <input
                          type="email"
                          id="email"
                          className={`block w-full pl-10 pr-3 py-2 border ${
                            errors.email ? 'border-error-500' : 'border-gray-300'
                          } rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500`}
                          placeholder="Your email address"
                          {...register('email', { 
                            required: 'Email is required',
                            pattern: {
                              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                              message: 'Invalid email address'
                            }
                          })}
                        />
                      </div>
                      {errors.email && (
                        <p className="mt-1 text-sm text-error-600">{errors.email.message}</p>
                      )}
                    </motion.div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <motion.div variants={itemVariants}>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                        Phone Number*
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <Phone size={18} className="text-gray-400" />
                        </div>
                        <input
                          type="tel"
                          id="phone"
                          className={`block w-full pl-10 pr-3 py-2 border ${
                            errors.phone ? 'border-error-500' : 'border-gray-300'
                          } rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500`}
                          placeholder="Your phone number"
                          {...register('phone', { required: 'Phone number is required' })}
                        />
                      </div>
                      {errors.phone && (
                        <p className="mt-1 text-sm text-error-600">{errors.phone.message}</p>
                      )}
                    </motion.div>

                    <motion.div variants={itemVariants}>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                        Company Name (Optional)
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <Building size={18} className="text-gray-400" />
                        </div>
                        <input
                          type="text"
                          id="company"
                          className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                          placeholder="Your company name"
                          {...register('company')}
                        />
                      </div>
                    </motion.div>
                  </div>

                  <motion.div variants={itemVariants} className="mb-6">
                    <label htmlFor="inquiryType" className="block text-sm font-medium text-gray-700 mb-1">
                      Inquiry Type*
                    </label>
                    <select
                      id="inquiryType"
                      className={`block w-full px-3 py-2 border ${
                        errors.inquiryType ? 'border-error-500' : 'border-gray-300'
                      } rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500`}
                      {...register('inquiryType', { required: 'Please select an inquiry type' })}
                    >
                      <option value="">Select an option</option>
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Product Information">Product Information</option>
                      <option value="Service Request">Service Request</option>
                      <option value="Quote Request">Quote Request</option>
                      <option value="Technical Support">Technical Support</option>
                      <option value="Other">Other</option>
                    </select>
                    {errors.inquiryType && (
                      <p className="mt-1 text-sm text-error-600">{errors.inquiryType.message}</p>
                    )}
                  </motion.div>

                  <motion.div variants={itemVariants} className="mb-6">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Message*
                    </label>
                    <div className="relative">
                      <div className="absolute top-3 left-3 pointer-events-none">
                        <MessageSquare size={18} className="text-gray-400" />
                      </div>
                      <textarea
                        id="message"
                        rows={6}
                        className={`block w-full pl-10 pr-3 py-2 border ${
                          errors.message ? 'border-error-500' : 'border-gray-300'
                        } rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500`}
                        placeholder="Tell us about your requirements or questions"
                        {...register('message', { required: 'Message is required' })}
                      ></textarea>
                    </div>
                    {errors.message && (
                      <p className="mt-1 text-sm text-error-600">{errors.message.message}</p>
                    )}
                  </motion.div>

                  <motion.div variants={itemVariants}>
                    <Button
                      type="submit"
                      variant="primary"
                      size="lg"
                      fullWidth
                      icon={<Send size={18} />}
                    >
                      Send Message
                    </Button>
                  </motion.div>
                </form>
              </motion.div>
            </div>

            {/* Contact Information */}
            <div>
              <SectionTitle
                title="Contact Information"
                subtitle="Get in touch with our team"
              />

              <motion.div
                initial="hidden"
                animate="visible"
                variants={containerVariants}
                className="bg-white rounded-lg shadow-md p-8"
              >
                <motion.div variants={itemVariants} className="mb-8">
                  <div className="flex items-start">
                    <Phone size={24} className="text-primary-600 mr-4 mt-1" />
                    <div>
                      <h3 className="text-lg font-semibold mb-1">Phone</h3>
                      <p className="text-gray-700">{contactInfo.phone}</p>
                    </div>
                  </div>
                </motion.div>

                <motion.div variants={itemVariants} className="mb-8">
                  <div className="flex items-start">
                    <Mail size={24} className="text-primary-600 mr-4 mt-1" />
                    <div>
                      <h3 className="text-lg font-semibold mb-1">Email</h3>
                      <p className="text-gray-700">{contactInfo.email}</p>
                    </div>
                  </div>
                </motion.div>

                <motion.div variants={itemVariants} className="mb-8">
                  <div className="flex items-start">
                    <MapPin size={24} className="text-primary-600 mr-4 mt-1" />
                    <div>
                      <h3 className="text-lg font-semibold mb-1">Address</h3>
                      <p className="text-gray-700">
                        {contactInfo.address.street}, {contactInfo.address.city}, <br />
                        {contactInfo.address.state}, {contactInfo.address.country} - {contactInfo.address.zip}
                      </p>
                    </div>
                  </div>
                </motion.div>

                <motion.div variants={itemVariants} className="mb-8">
                  <div className="flex items-start">
                    <Clock size={24} className="text-primary-600 mr-4 mt-1" />
                    <div>
                      <h3 className="text-lg font-semibold mb-1">Business Hours</h3>
                      {contactInfo.hours.map((item, index) => (
                        <p key={index} className="text-gray-700">
                          <span className="font-medium">{item.days}:</span> {item.hours}
                        </p>
                      ))}
                    </div>
                  </div>
                </motion.div>

                <motion.div variants={itemVariants}>
                  <div className="flex items-start">
                    <Globe size={24} className="text-primary-600 mr-4 mt-1" />
                    <div>
                      <h3 className="text-lg font-semibold mb-1">International Inquiries</h3>
                      <p className="text-gray-700 mb-1">
                        <span className="font-medium">Email:</span> {internationalContact.email}
                      </p>
                      <p className="text-gray-700">
                        <span className="font-medium">Phone:</span> {internationalContact.phone}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <motion.section
        ref={mapRef}
        initial={{ opacity: 0 }}
        animate={mapInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8 }}
        className="py-16 bg-gray-50"
      >
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="aspect-w-16 aspect-h-9 h-96">
              {/* Embed a map here */}
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125323.40217939422!2d76.90266845!3d11.011789849999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba859af2f971cb5%3A0x2fc1c81e183ed282!2sCoimbatore%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1659538976381!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Super Textile Services Location"
              ></iframe>
            </div>
          </div>
        </div>
      </motion.section>
    </main>
  );
};

export default ContactPage;
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram,
  ArrowRight
} from 'lucide-react';
import { contactInfo } from '../../data/company';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold mb-4">Super Textile Services</h3>
            <p className="text-gray-300 max-w-xs">
              India's premier exporter of precision-engineered textile machinery spare parts with over four decades of manufacturing excellence.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white flex items-center group">
                  <ArrowRight size={16} className="mr-2 transition-transform group-hover:translate-x-1" />
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white flex items-center group">
                  <ArrowRight size={16} className="mr-2 transition-transform group-hover:translate-x-1" />
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-300 hover:text-white flex items-center group">
                  <ArrowRight size={16} className="mr-2 transition-transform group-hover:translate-x-1" />
                  Products
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-white flex items-center group">
                  <ArrowRight size={16} className="mr-2 transition-transform group-hover:translate-x-1" />
                  Services
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white flex items-center group">
                  <ArrowRight size={16} className="mr-2 transition-transform group-hover:translate-x-1" />
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Information</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Phone size={18} className="mr-3 mt-1 text-primary-400 flex-shrink-0" />
                <span className="text-gray-300">{contactInfo.phone}</span>
              </li>
              <li className="flex items-start">
                <Mail size={18} className="mr-3 mt-1 text-primary-400 flex-shrink-0" />
                <span className="text-gray-300">{contactInfo.email}</span>
              </li>
              <li className="flex items-start">
                <MapPin size={18} className="mr-3 mt-1 text-primary-400 flex-shrink-0" />
                <span className="text-gray-300">
                  {contactInfo.address.street}, {contactInfo.address.city}, {contactInfo.address.state}, {contactInfo.address.country} - {contactInfo.address.zip}
                </span>
              </li>
              <li className="flex items-start">
                <Clock size={18} className="mr-3 mt-1 text-primary-400 flex-shrink-0" />
                <div className="text-gray-300">
                  {contactInfo.hours.map((item, index) => (
                    <div key={index}>
                      <span className="font-medium">{item.days}:</span> {item.hours}
                    </div>
                  ))}
                </div>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-bold mb-4">Subscribe to Newsletter</h3>
            <p className="text-gray-300 mb-4">
              Stay updated with our latest products and industry news.
            </p>
            <form className="space-y-3">
              <div>
                <input
                  type="email"
                  placeholder="Your Email Address"
                  className="w-full px-4 py-2 rounded-md bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-primary-600 hover:bg-primary-700 text-white font-medium py-2 px-4 rounded-md transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} Super Textile Services. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy-policy" className="text-gray-400 hover:text-white text-sm">
                Privacy Policy
              </Link>
              <Link to="/terms-of-service" className="text-gray-400 hover:text-white text-sm">
                Terms of Service
              </Link>
              <Link to="/sitemap" className="text-gray-400 hover:text-white text-sm">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
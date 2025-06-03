import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Scroll Effect
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Products', path: '/products' },
    { name: 'Services', path: '/services' },
    { name: 'Facilities', path: '/facilities' },
    { name: 'Contact', path: '/contact' },
  ];

  const headerClasses = `fixed w-full z-50 transition-all duration-300 ${
    isScrolled ? 'bg-white py-2 shadow-md' : 'bg-transparent py-5'
  }`;

  const linkColor = isScrolled ? 'text-gray-800' : 'text-white';

  return (
    <header className={headerClasses}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex flex-col items-start">
            <div className="text-3xl font-extrabold leading-tight tracking-wide">
              <span className="text-green-500">Super</span>{' '}
              <span className="text-red-500">Textile</span>{' '}
              <span className="text-green-500">Service</span>
            </div>
            <span className="text-sm text-gray-500 font-bold mt-0.5 tracking-wide">
              (A Unit of Super Group of Companies)
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative text-base font-medium pb-1 transition-colors duration-300 ${linkColor} ${
                  location.pathname === link.path ? 'font-bold' : ''
                } hover:text-primary-600`}
              >
                {link.name}
                <span
                  className={`absolute bottom-0 left-0 h-0.5 bg-primary-600 w-full transition-transform duration-300 origin-left ${
                    location.pathname === link.path
                      ? 'scale-x-100'
                      : 'scale-x-0 hover:scale-x-100'
                  }`}
                />
              </Link>
            ))}
            <Link
              to="/quote"
              className={`ml-4 px-5 py-2 rounded-md font-semibold shadow-md transition-all duration-300 ${
                isScrolled
                  ? 'bg-gradient-to-r from-primary-600 to-primary-700 text-white hover:brightness-110'
                  : 'bg-white text-primary-700 hover:bg-gray-100'
              }`}
            >
              Get a Quote
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md transition-transform active:scale-95"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X size={24} className={linkColor} />
            ) : (
              <Menu size={24} className={linkColor} />
            )}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        <div
          className={`md:hidden transition-all duration-300 overflow-hidden ${
            isMenuOpen ? 'max-h-96 mt-4' : 'max-h-0'
          }`}
        >
          <nav className="flex flex-col space-y-4 py-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-base font-medium px-3 py-2 rounded-md ${
                  location.pathname === link.path
                    ? 'bg-primary-50 text-primary-700 font-semibold'
                    : 'text-gray-800 hover:bg-gray-100'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/quote"
              className="px-4 py-2 bg-gradient-to-r from-primary-600 to-primary-700 text-white text-center rounded-md font-medium hover:brightness-110"
            >
              Get a Quote
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;

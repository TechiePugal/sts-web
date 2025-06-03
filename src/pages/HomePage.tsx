import React, { useEffect } from 'react';
import HeroSection from '../components/home/HeroSection';
import StatsSection from '../components/home/StatsSection';
import ProductsShowcase from '../components/home/ProductsShowcase';
import ServicesSection from '../components/home/ServicesSection';
import TestimonialsSection from '../components/home/TestimonialsSection';
import CtaSection from '../components/home/CtaSection';

const HomePage: React.FC = () => {
  useEffect(() => {
    // Update page title and meta description for SEO
    document.title = 'Premium Textile Machinery Spare Parts Manufacturer in Coimbatore, India';
    
    // Create or update meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', 
      'Explore high-quality textile machinery components and spares from Super Textile Services. Over 40 years of excellence, exporting to 50+ countries.'
    );
  }, []);

  return (
    <main>
      <HeroSection />
      <StatsSection />
      <ProductsShowcase />
      <ServicesSection />
      <TestimonialsSection />
      <CtaSection />
    </main>
  );
};

export default HomePage;
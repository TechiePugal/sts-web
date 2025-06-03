import { Product } from '../types';

export const products: Product[] = [
  {
    id: 'special-gear-1',
    name: 'Premium Precision Gear Assembly',
    category: 'Special Components',
    description: 'Ultra-precision gear assembly with advanced tooth profile design, specifically engineered for high-speed textile machinery. Features our patented wear-resistant coating.',
    imageUrl: 'https://images.pexels.com/photos/2547413/pexels-photo-2547413.jpeg',
    features: [
      'Patented tooth profile design',
      'Precision-ground to DIN Class 6 standards',
      'Special wear-resistant coating',
      'Optimized for high-speed operations',
      'Extended service life guarantee'
    ],
    specifications: {
      material: 'High-grade alloy steel',
      hardness: '58-62 HRC',
      accuracy: '±0.01mm',
      coating: 'Proprietary ceramic composite'
    }
  },
  {
    id: 'special-bearing-1',
    name: 'Advanced Ceramic Hybrid Bearing',
    category: 'Special Components',
    description: 'Revolutionary ceramic hybrid bearing designed for extreme conditions in modern textile machinery. Combines ceramic balls with steel races for superior performance.',
    imageUrl: 'https://images.pexels.com/photos/162553/keys-workshop-mechanic-tools-162553.jpeg',
    features: [
      'Ceramic hybrid construction',
      'Self-aligning capability',
      'Enhanced load capacity',
      'Reduced friction coefficient',
      'Temperature resistant up to 200°C'
    ],
    specifications: {
      material: 'Silicon nitride balls, steel races',
      speed: 'Up to 30,000 RPM',
      lubrication: 'Minimal requirement',
      lifespan: '3x standard bearings'
    }
  },
  {
    id: 'special-spindle-1',
    name: 'High-Performance Spindle Assembly',
    category: 'Special Components',
    description: 'State-of-the-art spindle assembly featuring advanced balancing technology and precision-engineered components for optimal textile processing.',
    imageUrl: 'https://images.pexels.com/photos/3846517/pexels-photo-3846517.jpeg',
    features: [
      'Dynamic balancing technology',
      'Integrated temperature monitoring',
      'Precision-matched components',
      'Advanced sealing system',
      'Quick-change design'
    ],
    specifications: {
      speed: '50,000 RPM maximum',
      runout: 'Less than 0.002mm',
      balance: 'G1 grade',
      monitoring: 'Built-in sensors'
    }
  },
  {
    id: 'special-cam-1',
    name: 'Precision Cam Mechanism',
    category: 'Special Components',
    description: 'Custom-designed cam mechanism with innovative profile for improved textile machinery performance and reduced maintenance requirements.',
    imageUrl: 'https://images.pexels.com/photos/50691/drill-milling-milling-machine-drilling-50691.jpeg',
    features: [
      'Optimized cam profile',
      'Surface-hardened lobes',
      'Balanced design',
      'Low-friction coating',
      'Extended wear resistance'
    ],
    specifications: {
      material: 'Case-hardened alloy steel',
      surface: 'Mirror finish Ra 0.4',
      hardness: '60-64 HRC',
      profile: 'Computer-optimized'
    }
  }
];

export const productCategories = ['All Categories', 'Special Components', 'Custom Solutions'];
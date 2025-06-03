import { ContactInfo, Stat, TestimonialType, TimelineItem, TeamMember } from '../types';

export const stats: Stat[] = [
  { value: 40, label: 'Years of Experience', suffix: '+' },
  { value: 500, label: 'Product Range', suffix: '+' },
  { value: 50, label: 'Countries Served', suffix: '+' },
  { value: 1000, label: 'Happy Clients', suffix: '+' }
];

export const testimonials: TestimonialType[] = [
  {
    id: 'testimonial1',
    name: 'James Wilson',
    company: 'Textile Innovations Ltd',
    country: 'United Kingdom',
    quote: 'Super Textile Services has been our trusted supplier for over a decade. Their precision-engineered components have significantly reduced our downtime and maintenance costs.',
    rating: 5
  },
  {
    id: 'testimonial2',
    name: 'Maria Rodriguez',
    company: 'Global Fabrics',
    country: 'Spain',
    quote: 'The quality and consistency of parts from Super Textile Services is unmatched. Their global supply chain ensures we get what we need, when we need it.',
    rating: 5
  },
  {
    id: 'testimonial3',
    name: 'Ahmed Hassan',
    company: 'Modern Textiles',
    country: 'Egypt',
    quote: 'Working with Super Textile Services transformed our production efficiency. Their turnkey solutions simplified our modernization project significantly.',
    rating: 4
  }
];

export const timeline: TimelineItem[] = [
  {
    year: '1984',
    title: 'Company Founded',
    description: 'Super Textile Services was established in Coimbatore as a small workshop producing essential textile machinery components.'
  },
  {
    year: '1990',
    title: 'First International Export',
    description: 'Expanded operations to include international exports, reaching textile manufacturers in neighboring countries.'
  },
  {
    year: '1998',
    title: 'ISO Certification',
    description: 'Achieved ISO 9001 certification, establishing standardized quality management systems across all operations.'
  },
  {
    year: '2005',
    title: 'Manufacturing Expansion',
    description: 'Opened a state-of-the-art manufacturing facility with advanced CNC machinery and expanded product range.'
  },
  {
    year: '2012',
    title: 'Global Reach Milestone',
    description: 'Reached the milestone of exporting to over 30 countries worldwide, becoming a global leader in textile machinery components.'
  },
  {
    year: '2018',
    title: 'Innovation Center Launch',
    description: 'Established a dedicated R&D and innovation center focused on developing next-generation textile machinery components.'
  },
  {
    year: '2023',
    title: 'Sustainable Manufacturing',
    description: 'Implemented eco-friendly manufacturing processes and achieved carbon footprint reduction certification.'
  }
];

export const team: TeamMember[] = [
  {
    id: 'team1',
    name: 'Rajesh Kumar',
    role: 'Managing Director',
    imageUrl: 'https://images.pexels.com/photos/5668770/pexels-photo-5668770.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    bio: 'With over 30 years in the textile industry, Rajesh has led Super Textile Services to become a global leader in textile machinery components.'
  },
  {
    id: 'team2',
    name: 'Priya Sharma',
    role: 'Technical Director',
    imageUrl: 'https://images.pexels.com/photos/5668895/pexels-photo-5668895.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    bio: 'An engineering expert with a passion for innovation, Priya oversees all technical operations and R&D initiatives.'
  },
  {
    id: 'team3',
    name: 'Vikram Singh',
    role: 'Export Manager',
    imageUrl: 'https://images.pexels.com/photos/5669619/pexels-photo-5669619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    bio: 'Specializing in international business, Vikram has been instrumental in expanding our global footprint to over 50 countries.'
  },
  {
    id: 'team4',
    name: 'Ananya Patel',
    role: 'Quality Assurance Head',
    imageUrl: 'https://images.pexels.com/photos/8101622/pexels-photo-8101622.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    bio: 'With a meticulous eye for detail, Ananya ensures that every component leaving our facility meets the highest quality standards.'
  }
];

export const contactInfo: ContactInfo = {
  phone: '+91 98765 43210',
  email: 'info@supertextileservices.com',
  address: {
    street: '123 Industrial Area',
    city: 'Coimbatore',
    state: 'Tamil Nadu',
    country: 'India',
    zip: '641008'
  },
  hours: [
    { days: 'Monday - Saturday', hours: '9:00 AM - 6:00 PM' },
    { days: 'Sunday', hours: 'Closed' }
  ]
};

export const internationalContact = {
  email: 'exports@supertextileservices.com',
  phone: '+91 98765 43211'
};
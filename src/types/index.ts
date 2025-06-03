export interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
  imageUrl: string;
  features?: string[];
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  details?: string[];
}

export interface Stat {
  value: number;
  label: string;
  suffix?: string;
}

export interface TestimonialType {
  id: string;
  name: string;
  company: string;
  country: string;
  quote: string;
  rating: number;
}

export interface TimelineItem {
  year: string;
  title: string;
  description: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  imageUrl: string;
  bio?: string;
}

export interface ContactInfo {
  phone: string;
  email: string;
  address: {
    street: string;
    city: string;
    state: string;
    country: string;
    zip: string;
  };
  hours: {
    days: string;
    hours: string;
  }[];
}
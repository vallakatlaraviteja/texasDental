import { LucideIcon } from 'lucide-react';

export interface Service {
  id: string;
  title: string;
  description: string;
  fullDescription?: string;
  benefits?: string[];
  suitability?: string[];
  icon: LucideIcon;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  rating: number;
}

export interface Doctor {
  name: string;
  role: string;
  bio: string;
  credentials: string[];
  imageUrl: string;
}

export interface BeforeAfter {
  id: string;
  title: string;
  beforeImg: string;
  afterImg: string;
  description: string;
}
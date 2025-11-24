import { 
  Smile,
  ShieldCheck,
  Zap,
  Clock,
  Baby,
} from 'lucide-react';
import { Service, Testimonial, Doctor, BeforeAfter } from './types';

export const APP_NAME = "Texas Dental";
export const PHONE_NUMBER = "972-299-0117";
export const EMAIL_ADDRESS = "info@texasdentalpa.com";

export const ADDRESS = "5132 Village Creek Drive, Plano, TX 75093";

export const OFFICE_HOURS = [
  { day: "Monday", hours: "8 AM - 2 PM" },
  { day: "Tuesday", hours: "8 AM - 5 PM" },
  { day: "Wednesday", hours: "8 AM - 4 PM" },
  { day: "Thursday", hours: "9 AM - 6 PM" },
  { day: "Friday", hours: "8 AM - 2 PM" },
  { day: "Saturday", hours: "8 AM - 2 PM" },
  { day: "Sunday", hours: "Closed" },
];

export const SERVICES: Service[] = [
  {
    id: 'preventive',
    title: 'Preventive Care',
    description: 'Comprehensive dental checkups, teeth cleaning, oral cancer screening, and personalized hygiene plans to keep your smile healthy.',
    benefits: ["Routine dental checkups", "Professional teeth cleaning", "Oral cancer screening", "Personalized oral hygiene plans"],
    suitability: ["All patients", "Regular maintenance", "Fresh breath", "Healthy gums"],
    icon: ShieldCheck,
  },
  {
    id: 'invisalign',
    title: 'Invisalign®',
    description: 'Invisible teeth straightening with custom clear aligners for improved aesthetics and dental health.',
    benefits: ["Virtually invisible treatment", "Removable for eating and cleaning", "No metal brackets or wires", "See virtual results before starting"],
    suitability: ["Crowded teeth", "Overbite or underbite", "Gap teeth", "Adults and teens seeking discreet correction"],
    icon: Smile,
  },
  {
    id: 'implants',
    title: 'Dental Implants',
    description: 'Permanent tooth replacement solutions restoring oral health and a confident smile.',
    benefits: ["Secure and durable tooth replacement", "Prevents bone loss", "Restores chewing ability", "Natural look and feel"],
    suitability: ["Missing one or more teeth", "Good bone density", "Healthy gums", "Desire for permanent solution"],
    icon: Zap,
  },
  {
    id: 'sedation',
    title: 'Sedation Dentistry',
    description: 'Compassionate care with sedation options to help patients relax and stay comfortable during treatments.',
    benefits: ["Reduces dental anxiety", "Safe and effective sedation options", "Comfortable treatment experience", "Suitable for multiple procedures"],
    suitability: ["Dental anxiety", "Long or complex procedures", "Sensitive gag reflex", "Multiple treatments in one visit"],
    icon: Clock,
  },
  {
    id: 'pediatric',
    title: 'Pediatric Dentistry',
    description: 'Gentle, educational dental care tailored specifically for children and adolescents.',
    benefits: ["Child-friendly environment", "Preventive sealants and fluoride treatments", "Growth and development monitoring", "Anxiety-free care"],
    suitability: ["Infants to adolescents", "First dental visits", "Routine checkups", "Fear-free dental experience"],
    icon: Baby,
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah M.',
    role: 'Patient',
    content: "Texas Dental gave me a comfortable and thorough dental experience. The staff was friendly and professional.",
    rating: 5
  },
  {
    id: '2',
    name: 'James L.',
    role: 'Patient',
    content: "I love my new smile thanks to their dental implant services. Highly recommend Texas Dental!",
    rating: 5
  },
  {
    id: '3',
    name: 'Emily R.',
    role: 'Patient',
    content: "The sedation dentistry helped me get through a procedure with ease. Great care and support!",
    rating: 5
  }
];

export const DOCTOR: Doctor = {
  name: "Wilson Lo, DDS, FAGD & Matthew Pepper, DDS",
  role: "Plano Dental Care Team",
  bio: "Our team of friendly dentists, hygienists, and specialists provide exceptional, comprehensive dental care for patients of all ages, utilizing advanced technology and compassionate approaches.",
  credentials: ["Experienced Dentists", "Sedation Dentistry Experts", "Pediatric Dental Specialists"],
  imageUrl: "https://via.placeholder.com/800x1000?text=Texas+Dental+Doctors"
};

export const BEFORE_AFTER: BeforeAfter[] = [
  {
    id: '1',
    title: 'Smile Makeover',
    description: 'Restoring confidence with cosmetic dental treatments and smile makeovers.',
    beforeImg: 'https://via.placeholder.com/600x400?text=Before+Texas+Dental',
    afterImg: 'https://via.placeholder.com/600x400?text=After+Texas+Dental'
  },
  {
    id: '2',
    title: 'Dental Implants',
    description: 'Replacing missing teeth with secure, functional dental implants.',
    beforeImg: 'https://via.placeholder.com/600x400?text=Before+Implants',
    afterImg: 'https://via.placeholder.com/600x400?text=After+Implants'
  }
];

export const WHY_US = [
  { title: "Comprehensive Care", desc: "Multiple dental specialties under one roof in Plano." },
  { title: "Exceptional Service", desc: "Comfortable, patient-focused care with a friendly team." },
  { title: "Advanced Technology", desc: "State-of-the-art dental equipment for accurate diagnoses." },
  { title: "Flexible Scheduling", desc: "Open availability 7 days a week and in-house financing plans." }
];

export const GALLERY_IMAGES = [
  "https://via.placeholder.com/600x400?text=Texas+Dental+Gallery+1",
  "https://via.placeholder.com/600x400?text=Texas+Dental+Gallery+2",
  "https://via.placeholder.com/600x400?text=Texas+Dental+Gallery+3",
  "https://via.placeholder.com/600x400?text=Texas+Dental+Gallery+4"
];

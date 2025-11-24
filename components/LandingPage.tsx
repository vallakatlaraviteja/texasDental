import React, { useState } from 'react';
import Button from './Button';
import BookingForm from './BookingForm';
import { 
  SERVICES, 
  TESTIMONIALS, 
  DOCTOR, 
  BEFORE_AFTER, 
  WHY_US, 
  PHONE_NUMBER,
  GALLERY_IMAGES,
  APP_NAME
} from '../constants';
import { 
  Star, 
  MapPin, 
  Clock, 
  Shield, 
  ArrowRight,
  Instagram,
  Facebook,
  Twitter,
  Phone,
  PlayCircle,
  ChevronLeft,
  ChevronRight,
  Quote,
  HeartPulse
} from 'lucide-react';
import { Service } from '../types';

interface LandingPageProps {
  onNavigate: (page: string, section?: string) => void;
  onServiceClick: (service: Service) => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onNavigate, onServiceClick }) => {
  const [activeTab, setActiveTab] = useState(0);
  const [testimonialIndex, setTestimonialIndex] = useState(0);

  const nextTestimonial = () => {
    setTestimonialIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prevTestimonial = () => {
    setTestimonialIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  return (
    <>
      {/* CINEMATIC HERO SECTION */}
      <section className="relative h-screen min-h-[800px] overflow-hidden flex items-center justify-center">
        {/* Animated Background */}
        <div className="absolute inset-0 z-0">
           <div className="absolute inset-0 bg-slate-900/30 z-10"></div>
           <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent z-10"></div>
<img 
  src="https://images.unsplash.com/photo-1486308510493-cb941f6a3999?q=80&w=2000&auto=format&fit=crop" 
  alt="Smiling dental patient" 
  className="w-full h-full object-cover animate-slow-zoom"
/>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 text-center text-white w-full pt-20">
          <div className="animate-fade-up opacity-0" style={{animationDelay: '0.2s'}}>
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md border border-white/20 px-5 py-2 mb-8">
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-gold-400">Cosmetic & Family Dentistry</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-medium leading-[1.1] mb-6 tracking-tight">
              Transforming Smiles.<br/>
              <span className="text-gold-400 italic">Transforming Lives.</span>
            </h1>
            
            <p className="text-lg md:text-xl text-white/90 mb-10 leading-relaxed max-w-2xl mx-auto font-light">
              Experience modern, painless dentistry in an atmosphere of unwavering trust and luxury. Your journey to confidence begins here.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
              <a href="#booking">
                <Button variant="gold" className="min-w-[200px]">Book Appointment</Button>
              </a>
              <button onClick={() => onNavigate('virtual-consultation')}>
                <Button variant="white" className="min-w-[200px]">Free Consultation</Button>
              </button>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 animate-bounce text-white/50">
          <div className="w-[1px] h-16 bg-gradient-to-b from-white to-transparent mx-auto"></div>
        </div>
      </section>

      {/* TRUST & CREDIBILITY BAR */}
      <section className="bg-white py-12 border-b border-slate-100 relative z-20 -mt-4 rounded-t-3xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center text-center">
             {[
               { icon: Star, text: "4.9/5 Rating on Google", sub: "Based on 700+ Reviews" },
               { icon: Shield, text: "Certified Specialists", sub: "Board Certified Doctors" },
               { icon: Clock, text: "Open Saturdays", sub: "Convenient Weekend Hours" },
               { icon: HeartPulse, text: "0% Financing", sub: "Flexible Payment Plans" }
             ].map((badge, idx) => (
               <div key={idx} className="flex flex-col items-center group">
                 <badge.icon className="w-8 h-8 text-gold-500 mb-3 group-hover:scale-110 transition-transform" />
                 <span className="font-bold text-slate-900 text-sm md:text-base">{badge.text}</span>
                 <span className="text-slate-500 text-xs uppercase tracking-wide mt-1">{badge.sub}</span>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* EMOTIONAL STORYTELLING */}
      <section className="py-24 bg-slate-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <span className="text-gold-600 font-bold tracking-wider uppercase text-xs mb-2 block">Our Philosophy</span>
              <h2 className="text-4xl md:text-5xl font-serif text-slate-900 mb-6 leading-tight">
                We believe a smile is the <span className="italic text-slate-600">universal language</span> of confidence.
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-6">
                At {APP_NAME}, we don't just treat teeth. We treat people. We understand that dental visits can be a source of anxiety for many. That's why we've reimagined the dental experience to be calm, comforting, and empowering.
              </p>
              <p className="text-slate-600 text-lg leading-relaxed mb-8">
                From our noise-cancelling headphones to our sedation options, every detail is designed for your peace of mind.
              </p>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full bg-slate-200 overflow-hidden">
                  <img src={DOCTOR.imageUrl} alt="Doctor" className="w-full h-full object-cover" />
                </div>
                <div>
                  <p className="font-serif font-bold text-slate-900 text-lg">{DOCTOR.name}</p>
                  <p className="text-slate-500 text-sm uppercase tracking-wide">Lead Dentist & Founder</p>
                </div>
              </div>
            </div>
            
            <div className="lg:w-1/2 relative">
               <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <img 
                    src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=2000&auto=format&fit=crop" 
                    alt="Happy patient smiling" 
                    className="w-full object-cover hover:scale-105 transition-transform duration-1000"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80 to-transparent text-white">
                    <p className="font-serif italic text-2xl">"I never thought I could love my smile this much. It's truly changed my life."</p>
                  </div>
               </div>
               {/* Decor */}
               <div className="absolute -top-6 -right-6 w-24 h-24 bg-gold-100 rounded-full -z-10"></div>
               <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-blue-50 rounded-full -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED SERVICES */}
      <section id="services" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <span className="text-gold-600 font-bold tracking-wider uppercase text-xs">World-Class Care</span>
            <h2 className="text-4xl md:text-5xl font-serif text-slate-900 mt-3 mb-6">Curated Dental Services</h2>
            <div className="w-24 h-1 bg-gold-500 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {SERVICES.slice(0, 8).map((service) => (
              <div 
                key={service.id} 
                onClick={() => onServiceClick(service)}
                className="group relative p-8 bg-slate-50 hover:bg-slate-900 transition-all duration-500 cursor-pointer overflow-hidden"
              >
                <div className="relative z-10">
                  <service.icon className="w-10 h-10 text-slate-400 group-hover:text-gold-500 mb-6 transition-colors duration-300" />
                  <h3 className="text-xl font-serif text-slate-900 group-hover:text-white mb-3 transition-colors duration-300">{service.title}</h3>
                  <p className="text-slate-500 group-hover:text-slate-300 text-sm leading-relaxed mb-6 transition-colors duration-300">
                    {service.description}
                  </p>
                  <div className="flex items-center text-gold-600 group-hover:text-gold-400 text-sm font-bold uppercase tracking-wide">
                    Learn More <ArrowRight size={14} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
                {/* Background Hover Effect */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-3xl -mr-16 -mt-16 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TRANSFORMATION GALLERY (SLIDER) */}
      <section id="transformations" className="py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
            <div>
              <span className="text-gold-500 font-bold tracking-wider uppercase text-xs">Real Results</span>
              <h2 className="text-4xl md:text-5xl font-serif mt-3">The Art of Transformation</h2>
            </div>
            <div className="mt-6 md:mt-0">
               <a href="#booking">
                 <Button variant="gold">Start Your Transformation</Button>
               </a>
            </div>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* List */}
            <div className="lg:col-span-4 space-y-4">
               {BEFORE_AFTER.map((item, index) => (
                  <button 
                    key={item.id}
                    onClick={() => setActiveTab(index)}
                    className={`w-full text-left p-6 transition-all border-l-2 ${
                      activeTab === index 
                      ? 'border-gold-500 bg-white/5 pl-8' 
                      : 'border-white/10 hover:bg-white/5 pl-6 opacity-60 hover:opacity-100'
                    }`}
                  >
                    <h4 className={`font-serif text-xl mb-1 ${activeTab === index ? 'text-white' : 'text-slate-300'}`}>
                      {item.title}
                    </h4>
                    <p className="text-sm text-slate-400 font-light">{item.description}</p>
                  </button>
                ))}
            </div>

            {/* Slider Display */}
            <div className="lg:col-span-8">
              <div className="relative aspect-[16/9] rounded-sm overflow-hidden bg-black shadow-2xl border border-white/10 group">
                {/* Before Image */}
                <div className="absolute inset-0 w-full h-full">
                   <img 
                      src={BEFORE_AFTER[activeTab].beforeImg} 
                      alt="Before" 
                      className="w-full h-full object-cover opacity-50 grayscale group-hover:grayscale-0 transition-all duration-700" 
                   />
                   <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md text-white px-3 py-1 text-xs font-bold uppercase tracking-wider">Before</div>
                </div>
                
                {/* After Image (Clipped) - Simulating a slider revealing effect */}
                <div className="absolute inset-0 w-full h-full clip-diagonal animate-fade-in">
                   <img 
                      src={BEFORE_AFTER[activeTab].afterImg} 
                      alt="After" 
                      className="w-full h-full object-cover" 
                   />
                   <div className="absolute bottom-4 right-4 bg-gold-500 text-white px-3 py-1 text-xs font-bold uppercase tracking-wider shadow-lg">After</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS CAROUSEL */}
      <section id="reviews" className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Quote className="w-12 h-12 text-gold-300 mx-auto mb-8" />
          
          <div className="min-h-[300px] flex flex-col justify-center relative">
            {TESTIMONIALS.map((t, i) => (
              <div 
                key={t.id} 
                className={`transition-all duration-700 absolute inset-0 flex flex-col items-center justify-center ${
                  i === testimonialIndex ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12 pointer-events-none'
                }`}
              >
                <h3 className="text-2xl md:text-4xl font-serif text-slate-800 leading-tight italic mb-8">
                  "{t.content}"
                </h3>
                <div className="flex items-center justify-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} size={16} className="text-gold-500 fill-current" />)}
                </div>
                <p className="font-bold text-slate-900 uppercase tracking-widest text-sm">{t.name}</p>
                <p className="text-slate-500 text-xs mt-1">{t.role}</p>
              </div>
            ))}
          </div>

          <div className="flex justify-center gap-4 mt-8">
            <button onClick={prevTestimonial} className="p-2 rounded-full border border-slate-200 hover:bg-gold-50 hover:border-gold-200 transition-colors">
              <ChevronLeft className="text-slate-600" />
            </button>
            <button onClick={nextTestimonial} className="p-2 rounded-full border border-slate-200 hover:bg-gold-50 hover:border-gold-200 transition-colors">
              <ChevronRight className="text-slate-600" />
            </button>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US & CLINIC TOUR */}
      <section id="why-us" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="text-4xl font-serif text-slate-900 mb-4">The Lumina Experience</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">Designed for comfort. Built for excellence.</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
             <div className="grid grid-cols-2 gap-4">
               {GALLERY_IMAGES.map((img, i) => (
                 <img 
                   key={i} 
                   src={img} 
                   alt="Clinic Interior" 
                   className={`w-full h-48 object-cover rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 ${i % 2 === 1 ? 'mt-8' : ''}`}
                 />
               ))}
             </div>
             <div>
               <h3 className="text-3xl font-serif text-slate-900 mb-6">A Sanctuary for Your Smile</h3>
               <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                 We've discarded the sterile, clinical feel of traditional dentistry. Our studio is designed to feel like a high-end lounge, featuring warm lighting, aromatherapy, and private suites.
               </p>
               <div className="space-y-6">
                 {WHY_US.map((item, idx) => (
                   <div key={idx} className="flex">
                     <div className="mr-4 mt-1">
                       <div className="w-6 h-6 rounded-full bg-gold-100 flex items-center justify-center">
                         <div className="w-2 h-2 rounded-full bg-gold-500"></div>
                       </div>
                     </div>
                     <div>
                       <h4 className="font-bold text-slate-900">{item.title}</h4>
                       <p className="text-sm text-slate-600">{item.desc}</p>
                     </div>
                   </div>
                 ))}
               </div>
             </div>
          </div>
        </div>
      </section>

      {/* APPOINTMENT / FOOTER CTA */}
      <section id="booking" className="py-24 bg-white relative border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            
            <div>
               <h2 className="text-5xl md:text-6xl font-serif text-slate-900 mb-6">Ready to smile with confidence?</h2>
               <p className="text-xl text-slate-600 mb-12 font-light">
                 Your journey to a healthier, more radiant smile is just one appointment away.
               </p>
               
               <div className="grid sm:grid-cols-2 gap-8 mb-12">
                 <div className="bg-slate-50 p-6">
                    <Phone className="w-6 h-6 text-gold-500 mb-4" />
                    <p className="text-sm text-slate-500 uppercase tracking-wider mb-1">Call Us Directly</p>
                    <p className="text-xl font-bold text-slate-900">{PHONE_NUMBER}</p>
                 </div>
                 <div className="bg-slate-50 p-6">
                    <MapPin className="w-6 h-6 text-gold-500 mb-4" />
                    <p className="text-sm text-slate-500 uppercase tracking-wider mb-1">Visit Us</p>
                    <p className="text-xl font-bold text-slate-900">Beverly Hills, CA</p>
                 </div>
               </div>

               {/* Map Embed */}
               <div className="w-full h-64 bg-slate-200 grayscale hover:grayscale-0 transition-all duration-500">
                  <iframe 
                     src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26456.1422736468!2d-118.40638546197374!3d34.07362788079044!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2bc04d6d147ab%3A0xd6c7c379fd081ed1!2sBeverly%20Hills%2C%20CA!5e0!3m2!1sen!2sus!4v1709400000000!5m2!1sen!2sus" 
                     width="100%" 
                     height="100%" 
                     style={{border:0}} 
                     allowFullScreen={true} 
                     loading="lazy" 
                     referrerPolicy="no-referrer-when-downgrade"
                   ></iframe>
               </div>
            </div>

            <div className="relative">
               {/* Decorative Circle */}
               <div className="absolute -top-20 -right-20 w-64 h-64 bg-gold-50 rounded-full mix-blend-multiply filter blur-3xl opacity-50 pointer-events-none"></div>
               <BookingForm />
            </div>

          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-slate-950 text-white pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-12 mb-16">
             <div className="col-span-1 lg:col-span-1">
               <h3 className="text-2xl font-serif font-bold text-white mb-6">{APP_NAME}</h3>
               <p className="text-slate-400 text-sm leading-relaxed mb-6">
                 Elevating dentistry to an art form. We provide a luxury dental experience focused on health, aesthetics, and your comfort.
               </p>
               <div className="flex space-x-4">
                 {[Instagram, Facebook, Twitter].map((Icon, i) => (
                   <a key={i} href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold-500 transition-colors text-white">
                     <Icon size={18} />
                   </a>
                 ))}
               </div>
             </div>
             
             <div>
               <h4 className="text-xs font-bold uppercase tracking-widest text-gold-500 mb-8">Quick Links</h4>
               <ul className="space-y-4 text-sm text-slate-300">
                 <li><a href="#services" className="hover:text-white transition-colors">Our Services</a></li>
                 <li><a href="#transformations" className="hover:text-white transition-colors">Smile Gallery</a></li>
                 <li><a href="#why-us" className="hover:text-white transition-colors">The Experience</a></li>
                 <li><a href="#" onClick={() => onNavigate('virtual-consultation')} className="hover:text-white transition-colors">Virtual Consult</a></li>
               </ul>
             </div>

             <div>
               <h4 className="text-xs font-bold uppercase tracking-widest text-gold-500 mb-8">Treatments</h4>
               <ul className="space-y-4 text-sm text-slate-300">
                 <li><a href="#" className="hover:text-white transition-colors">Porcelain Veneers</a></li>
                 <li><a href="#" className="hover:text-white transition-colors">Dental Implants</a></li>
                 <li><a href="#" className="hover:text-white transition-colors">Invisalign®</a></li>
                 <li><a href="#" className="hover:text-white transition-colors">Full Mouth Reconstruction</a></li>
               </ul>
             </div>

             <div>
               <h4 className="text-xs font-bold uppercase tracking-widest text-gold-500 mb-8">Visit Us</h4>
               <ul className="space-y-4 text-sm text-slate-300">
                 <li className="flex items-start">
                   <MapPin className="w-5 h-5 mr-3 text-gold-500 shrink-0" />
                   <span>123 Wellness Blvd, Ste 400<br/>Beverly Hills, CA 90210</span>
                 </li>
                 <li className="flex items-center">
                   <Phone className="w-5 h-5 mr-3 text-gold-500 shrink-0" />
                   <span>{PHONE_NUMBER}</span>
                 </li>
                 <li className="flex items-center">
                   <Clock className="w-5 h-5 mr-3 text-gold-500 shrink-0" />
                   <span>Mon-Fri: 8am - 6pm</span>
                 </li>
               </ul>
             </div>
          </div>
          
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
            <p>&copy; {new Date().getFullYear()} {APP_NAME}. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-slate-300">Privacy Policy</a>
              <a href="#" className="hover:text-slate-300">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default LandingPage;
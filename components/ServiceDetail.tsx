import React from 'react';
import { ArrowLeft, CheckCircle2, Calendar, ArrowRight } from 'lucide-react';
import { Service } from '../types';
import Button from './Button';

interface ServiceDetailProps {
  service: Service;
  onBack: () => void;
  onBook: () => void;
}

const ServiceDetail: React.FC<ServiceDetailProps> = ({ service, onBack, onBook }) => {
  return (
    <div className="pt-24 pb-20 animate-fade-in">
      {/* Hero Section */}
      <div className="bg-slate-50 py-12 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <button 
            onClick={onBack} 
            className="flex items-center text-slate-500 hover:text-primary-600 transition-colors mb-8 font-medium"
          >
            <ArrowLeft size={20} className="mr-2" /> Back to Services
          </button>
          
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
            <div className="p-4 bg-white rounded-2xl shadow-md text-primary-600">
              <service.icon size={48} />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-3">{service.title}</h1>
              <p className="text-xl text-slate-600 max-w-2xl">{service.description}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-3 gap-16">
          
          {/* Left Column: Details */}
          <div className="lg:col-span-2 space-y-12">
            
            {/* Overview */}
            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Overview</h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                {service.fullDescription}
              </p>
            </section>

            {/* Benefits */}
            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Key Benefits</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {service.benefits?.map((benefit, idx) => (
                  <div key={idx} className="flex items-start bg-primary-50 p-4 rounded-xl">
                    <CheckCircle2 className="w-5 h-5 text-primary-600 mt-0.5 mr-3 shrink-0" />
                    <span className="text-slate-700 font-medium">{benefit}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Suitability */}
            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Is this right for you?</h2>
              <p className="text-slate-600 mb-4">This treatment is often recommended for patients experiencing:</p>
              <ul className="space-y-3">
                {service.suitability?.map((item, idx) => (
                  <li key={idx} className="flex items-center text-slate-700">
                    <div className="w-2 h-2 bg-primary-400 rounded-full mr-3"></div>
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            {/* Generic Before/After Placeholder */}
            <section className="bg-slate-900 rounded-3xl p-8 md:p-12 text-center relative overflow-hidden group cursor-pointer">
               <div className="absolute inset-0 opacity-20 bg-[url('https://picsum.photos/1200/400?random=99')] bg-cover bg-center group-hover:scale-105 transition-transform duration-700"></div>
               <div className="relative z-10">
                 <h3 className="text-2xl md:text-3xl font-serif font-bold text-white mb-4">See Real Transformations</h3>
                 <p className="text-slate-300 mb-8 max-w-lg mx-auto">Browse our gallery to see how we've helped patients achieve their dream smiles with {service.title}.</p>
                 <Button variant="white">View Before & After Gallery</Button>
               </div>
            </section>

          </div>

          {/* Right Column: Sticky CTA */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-8 sticky top-32">
              <h3 className="text-xl font-bold text-slate-900 mb-2">Ready to start?</h3>
              <p className="text-slate-500 mb-6 text-sm">Schedule a consultation with Dr. Vance to discuss if {service.title} is right for you.</p>
              
              <Button fullWidth onClick={onBook} className="mb-4 group">
                Book Consultation
                <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <div className="flex items-center justify-center text-slate-500 text-sm">
                <Calendar size={16} className="mr-2" />
                <span>Next available: Today</span>
              </div>

              <hr className="my-6 border-slate-100" />

              <div className="bg-slate-50 p-4 rounded-xl">
                <p className="text-sm font-semibold text-slate-900 mb-1">Have questions?</p>
                <p className="text-xs text-slate-500 mb-3">Our care coordinators are here to help explain insurance and payment options.</p>
                <a href="tel:5551234567" className="text-primary-600 text-sm font-bold hover:underline">Call (555) 123-4567</a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;
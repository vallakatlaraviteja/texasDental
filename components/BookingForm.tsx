import React, { useState, useEffect } from 'react';
import { Calendar, CheckCircle, Star } from 'lucide-react';
import Button from './Button';

interface BookingFormProps {
  defaultService?: string;
}

const BookingForm: React.FC<BookingFormProps> = ({ defaultService = 'checkup' }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: defaultService,
    notes: ''
  });

  useEffect(() => {
    if (defaultService) {
      setFormData(prev => ({ ...prev, service: defaultService }));
    }
  }, [defaultService]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => {
      setSubmitted(true);
    }, 1000);
  };

  if (submitted) {
    return (
      <div className="bg-white/90 backdrop-blur-md p-10 shadow-2xl text-center h-full flex flex-col justify-center items-center min-h-[500px] animate-fade-in border-t-4 border-gold-500">
        <div className="w-20 h-20 bg-gold-50 rounded-full flex items-center justify-center mb-6">
          <CheckCircle className="w-10 h-10 text-gold-500" />
        </div>
        <h3 className="text-3xl font-serif font-bold text-primary-900 mb-2">Request Received</h3>
        <p className="text-slate-600 mb-8 max-w-xs mx-auto leading-relaxed">
          Thank you, {formData.name}. Our patient concierge will contact you shortly at {formData.phone} to arrange your visit.
        </p>
        <Button variant="outline" onClick={() => setSubmitted(false)}>New Request</Button>
      </div>
    );
  }

  return (
    <div className="bg-white p-8 lg:p-12 shadow-2xl relative overflow-hidden border-t-4 border-gold-500 h-full flex flex-col justify-center">
      
      <div className="relative z-10">
        <div className="mb-8 text-center lg:text-left">
          <h3 className="text-3xl font-serif font-bold text-slate-900 mb-2">Begin Your Journey</h3>
          <p className="text-slate-500">Request a consultation with our specialists.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">Full Name</label>
            <input 
              type="text" 
              name="name"
              required 
              className="w-full px-0 py-3 bg-transparent border-b-2 border-slate-200 focus:border-gold-500 transition-colors outline-none text-lg text-slate-900 placeholder-slate-300"
              placeholder="John Doe"
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">Phone</label>
              <input 
                type="tel" 
                name="phone"
                required 
                className="w-full px-0 py-3 bg-transparent border-b-2 border-slate-200 focus:border-gold-500 transition-colors outline-none text-lg text-slate-900 placeholder-slate-300"
                placeholder="(555) 000-0000"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">Email</label>
              <input 
                type="email" 
                name="email"
                required 
                className="w-full px-0 py-3 bg-transparent border-b-2 border-slate-200 focus:border-gold-500 transition-colors outline-none text-lg text-slate-900 placeholder-slate-300"
                placeholder="john@example.com"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">Reason for Visit</label>
            <select 
              name="service"
              className="w-full px-0 py-3 bg-transparent border-b-2 border-slate-200 focus:border-gold-500 transition-colors outline-none text-lg text-slate-900"
              value={formData.service}
              onChange={handleChange}
            >
              <option value="checkup">First Visit / Comprehensive Exam</option>
              <option value="cosmetic">Cosmetic Consultation</option>
              <option value="implant">Dental Implant Consultation</option>
              <option value="invisalign">Invisalign Assessment</option>
              <option value="whitening">Professional Whitening</option>
              <option value="emergency">Emergency / Pain Relief</option>
              <option value="virtual">Virtual Consultation</option>
            </select>
          </div>

          <div>
             <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">Notes</label>
             <textarea 
                name="notes"
                rows={2}
                className="w-full px-0 py-3 bg-transparent border-b-2 border-slate-200 focus:border-gold-500 transition-colors outline-none text-slate-900 resize-none placeholder-slate-300"
                placeholder="Any specific concerns or questions?"
                value={formData.notes}
                onChange={handleChange}
             ></textarea>
          </div>

          <div className="pt-4">
            <Button fullWidth type="submit" variant="gold">
              Request Appointment
            </Button>
          </div>
          
          <div className="flex items-center justify-center space-x-2 mt-4">
             <div className="flex text-gold-400">
               <Star size={12} fill="currentColor" />
               <Star size={12} fill="currentColor" />
               <Star size={12} fill="currentColor" />
               <Star size={12} fill="currentColor" />
               <Star size={12} fill="currentColor" />
             </div>
             <span className="text-xs text-slate-400 uppercase tracking-wide">Trusted by 2,000+ Patients</span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookingForm;
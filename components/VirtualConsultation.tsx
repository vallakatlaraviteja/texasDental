import React from 'react';
import { Video, Smartphone, FileText, Shield, Check } from 'lucide-react';
import BookingForm from './BookingForm';

const VirtualConsultation: React.FC = () => {
  return (
    <div className="pt-24 animate-fade-in bg-slate-50 min-h-screen">
      
      {/* Hero */}
      <section className="bg-white pb-16 pt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center space-x-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full mb-6">
            <Video size={16} />
            <span className="text-sm font-bold uppercase tracking-wide">Tele-Dentistry Available</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-slate-900 mb-6">
            Expert Advice from <span className="text-primary-600">Anywhere</span>.
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-8">
            Get a professional dental assessment without leaving your home. Convenient, secure, and easy to use.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* Left: Information */}
          <div>
            <h2 className="text-2xl font-serif font-bold text-slate-900 mb-8">How it works</h2>
            
            <div className="space-y-10 relative">
              {/* Connecting Line */}
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-slate-200 hidden sm:block"></div>

              {/* Step 1 */}
              <div className="relative flex gap-6">
                <div className="w-12 h-12 bg-white border-2 border-primary-500 rounded-full flex items-center justify-center z-10 shrink-0 text-primary-600 font-bold text-lg shadow-sm">1</div>
                <div>
                  <div className="flex items-center mb-2">
                    <FileText className="w-5 h-5 text-primary-600 mr-2" />
                    <h3 className="text-xl font-bold text-slate-900">Request Your Consult</h3>
                  </div>
                  <p className="text-slate-600">Fill out the secure form on this page. Tell us about your dental concerns and what you'd like to achieve.</p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="relative flex gap-6">
                <div className="w-12 h-12 bg-white border-2 border-primary-500 rounded-full flex items-center justify-center z-10 shrink-0 text-primary-600 font-bold text-lg shadow-sm">2</div>
                <div>
                   <div className="flex items-center mb-2">
                    <Smartphone className="w-5 h-5 text-primary-600 mr-2" />
                    <h3 className="text-xl font-bold text-slate-900">Upload & Connect</h3>
                  </div>
                  <p className="text-slate-600">We'll email you a secure link. You can upload photos of your smile securely or join a live video call with Dr. Vance.</p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="relative flex gap-6">
                <div className="w-12 h-12 bg-white border-2 border-primary-500 rounded-full flex items-center justify-center z-10 shrink-0 text-primary-600 font-bold text-lg shadow-sm">3</div>
                <div>
                   <div className="flex items-center mb-2">
                    <Check className="w-5 h-5 text-primary-600 mr-2" />
                    <h3 className="text-xl font-bold text-slate-900">Receive Your Plan</h3>
                  </div>
                  <p className="text-slate-600">Receive a personalized treatment recommendation and estimated costs. If you decide to proceed, we'll schedule your in-office visit.</p>
                </div>
              </div>
            </div>

            <div className="mt-12 bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
              <h3 className="text-lg font-bold text-slate-900 mb-4">Why choose a Virtual Consult?</h3>
              <ul className="space-y-3">
                {[
                  "Save time by avoiding an initial trip to the office",
                  "Get a second opinion from the comfort of home",
                  "Perfect for cosmetic inquiries and treatment planning",
                  "HIPAA compliant and completely private"
                ].map((item, i) => (
                  <li key={i} className="flex items-center text-slate-700">
                    <Shield className="w-4 h-4 text-green-500 mr-3" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right: Form */}
          <div>
            <div className="sticky top-32">
              <BookingForm defaultService="virtual" />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default VirtualConsultation;
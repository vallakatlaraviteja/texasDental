import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import ServiceDetail from './components/ServiceDetail';
import VirtualConsultation from './components/VirtualConsultation';
import { Service } from './types';
import { PHONE_NUMBER } from './constants';
import { Phone } from 'lucide-react';

type ViewState = 
  | { type: 'home' }
  | { type: 'service', service: Service }
  | { type: 'virtual-consultation' };

const App: React.FC = () => {
  const [view, setView] = useState<ViewState>({ type: 'home' });

  // Scroll to top on view change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [view.type]);

  const handleNavigate = (page: string, section?: string) => {
    if (page === 'home') {
      setView({ type: 'home' });
      if (section) {
        // Allow time for DOM to render before scrolling
        setTimeout(() => {
          const el = document.getElementById(section);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else if (page === 'virtual-consultation') {
      setView({ type: 'virtual-consultation' });
    }
  };

  const handleServiceClick = (service: Service) => {
    setView({ type: 'service', service });
  };

  const handleBookClick = () => {
    // Go to booking section on home page
    setView({ type: 'home' });
    setTimeout(() => {
       const el = document.getElementById('booking');
       if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <div className="min-h-screen bg-slate-50 overflow-x-hidden">
      <Navbar onNavigate={handleNavigate} />

      <main>
        {view.type === 'home' && (
          <LandingPage 
            onNavigate={handleNavigate} 
            onServiceClick={handleServiceClick} 
          />
        )}
        
        {view.type === 'service' && (
          <ServiceDetail 
            service={view.service} 
            onBack={() => setView({ type: 'home' })}
            onBook={handleBookClick}
          />
        )}

        {view.type === 'virtual-consultation' && (
          <VirtualConsultation />
        )}
      </main>

      {/* MOBILE FLOATING CTA - Always visible */}
      <div className="md:hidden fixed bottom-6 right-6 z-50">
        <a href={`tel:${PHONE_NUMBER}`}>
          <div className="bg-primary-600 text-white p-4 rounded-full shadow-lg hover:bg-primary-700 transition-colors animate-bounce">
            <Phone size={24} fill="currentColor" />
          </div>
        </a>
      </div>
    </div>
  );
};

export default App;
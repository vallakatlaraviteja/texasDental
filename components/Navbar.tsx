import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Video } from 'lucide-react';
import { APP_NAME, PHONE_NUMBER } from '../constants';
import Button from './Button';

interface NavbarProps {
  onNavigate: (page: string, section?: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent, page: string, section?: string) => {
    e.preventDefault();
    onNavigate(page, section);
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { name: 'Services', href: '#services', page: 'home' },
    { name: 'Transformations', href: '#transformations', page: 'home' },
    { name: 'The Experience', href: '#why-us', page: 'home' },
    { name: 'Reviews', href: '#reviews', page: 'home' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-xl shadow-sm py-3' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center cursor-pointer group" onClick={() => onNavigate('home')}>
            <div className="mr-2 text-gold-500">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L14.4 9.6H22L16 14.4L18.4 22L12 17.6L5.6 22L8 14.4L2 9.6H9.6L12 2Z" />
              </svg>
            </div>
            <a href="#" className={`text-2xl font-serif font-bold tracking-tight transition-colors ${isScrolled ? 'text-slate-900' : 'text-slate-900 lg:text-white'}`}>
              {APP_NAME}
            </a>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                onClick={(e) => handleNavClick(e, link.page, link.href.substring(1))}
                className={`text-sm font-medium uppercase tracking-wider transition-colors hover:text-gold-500 ${
                  isScrolled ? 'text-slate-600' : 'text-white/90'
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
             <a href={`tel:${PHONE_NUMBER}`} className={`flex items-center font-semibold text-sm hover:text-gold-500 transition-colors ${isScrolled ? 'text-primary-900' : 'text-white'}`}>
                <Phone className="w-4 h-4 mr-2" />
                {PHONE_NUMBER}
             </a>
             <a href="#booking" onClick={(e) => handleNavClick(e, 'home', 'booking')}>
                <Button variant="gold" className="py-2.5 px-6 text-xs">
                  Book Now
                </Button>
             </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 transition-colors ${isScrolled ? 'text-slate-900' : 'text-slate-900'}`} // Always dark on mobile default due to white bg, but if transparent hero needs white text
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-t border-slate-100 shadow-lg animate-fade-in h-screen">
          <div className="px-6 py-8 space-y-6 flex flex-col">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-2xl font-serif font-bold text-slate-800 hover:text-gold-500"
                onClick={(e) => handleNavClick(e, link.page, link.href.substring(1))}
              >
                {link.name}
              </a>
            ))}
             <button 
              onClick={() => {
                onNavigate('virtual-consultation');
                setIsMobileMenuOpen(false);
              }}
              className="flex items-center text-lg font-medium text-primary-600 hover:text-primary-800 transition-colors"
            >
              <Video className="w-5 h-5 mr-3" />
              Virtual Consultation
            </button>
            <hr className="border-slate-100" />
            <a href={`tel:${PHONE_NUMBER}`} className="flex items-center text-primary-900 font-bold text-lg">
                <Phone className="w-5 h-5 mr-3" />
                {PHONE_NUMBER}
             </a>
             <a href="#booking" onClick={(e) => handleNavClick(e, 'home', 'booking')}>
                <Button fullWidth variant="gold">Book Appointment</Button>
             </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
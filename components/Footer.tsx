import React from 'react';
import { Link } from 'react-router-dom';
import { Zap, Instagram, Facebook, Linkedin, Twitter } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-dark border-t border-brand-navy pt-20 pb-10 text-sm text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">

          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <img src="/images/logos/text-logo-white.png" alt="A.W. Puma" className="h-16 w-auto object-contain" />
            </div>
            <p className="mb-6 leading-relaxed">
              Premium home services and climate control for discerning homeowners in Massachusetts. Quality you can trust, built to last.
            </p>
            <div className="flex gap-4">
              <a href="https://www.facebook.com/awpumahomeservices" target="_blank" rel="noopener noreferrer" className="bg-white/5 p-2 rounded-full hover:bg-brand-gold hover:text-white transition-all"><Facebook size={18} /></a>
              <a href="#" className="bg-white/5 p-2 rounded-full hover:bg-brand-gold hover:text-white transition-all"><Instagram size={18} /></a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-bold text-white mb-6 uppercase tracking-wider">Services</h3>
            <ul className="space-y-4">
              <li><Link to="/services/furnace" className="hover:text-brand-gold transition-colors">Furnace Services</Link></li>
              <li><Link to="/services/mini-splits" className="hover:text-brand-gold transition-colors">Mini Splits</Link></li>
              <li><Link to="/services/heat-pump" className="hover:text-brand-gold transition-colors">Heat Pumps</Link></li>
              <li><Link to="/services/ac" className="hover:text-brand-gold transition-colors">Air Conditioning</Link></li>
              <li><Link to="/services/boiler" className="hover:text-brand-gold transition-colors">Boiler Services</Link></li>
              <li><Link to="/services/water-heaters" className="hover:text-brand-gold transition-colors">Water Heaters</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-white mb-6 uppercase tracking-wider">Company</h3>
            <ul className="space-y-4">
              <li><Link to="/about" className="hover:text-brand-gold transition-colors">About Us</Link></li>
              <li><Link to="/mass-save" className="hover:text-brand-gold transition-colors">Mass Save®</Link></li>
              <li><a href="#" className="hover:text-brand-gold transition-colors">Careers</a></li>
              <li><Link to="/contact" className="hover:text-brand-gold transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-white mb-6 uppercase tracking-wider">Contact</h3>
            <ul className="space-y-4">
              <li className="flex flex-col">
                <span className="font-bold text-gray-300">Headquarters</span>
                <span>202 Washington St</span>
                <span>Brookline, MA 02445</span>
              </li>
              <li className="flex flex-col">
                <span className="font-bold text-gray-300">Email Us</span>
                <a href="mailto:info@awpumahome.com" className="text-brand-gold hover:underline">info@awpumahome.com</a>
              </li>
              <li className="flex flex-col">
                <span className="font-bold text-gray-300">Call Us</span>
                <a href="tel:6176183366" className="hover:text-brand-gold transition-colors">(617) 618-3366</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p>&copy; {new Date().getFullYear()} A.W. Puma Home Services.</p>
          <div className="mt-4 md:mt-0 flex gap-6 text-xs uppercase tracking-wide">
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
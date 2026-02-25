import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, ChevronDown, Flame, Wind, ThermometerSun, Snowflake, Construction, Droplets, ArrowRight, MapPin, Hammer, Zap, Gauge, Wrench } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from './ui/Button';

// Define services with icons for reuse in mega menu and elsewhere
export const SERVICES = [
  { name: 'Furnace', href: '/services/furnace', icon: Flame, description: 'High-efficiency furnace installation & repair', color: 'text-orange-500', bgColor: 'bg-orange-50' },
  { name: 'Mini Splits', href: '/services/mini-splits', icon: Wind, description: 'Ductless heating & cooling solutions', color: 'text-blue-500', bgColor: 'bg-blue-50' },
  { name: 'Heat Pump', href: '/services/heat-pump', icon: ThermometerSun, description: 'Energy-efficient heat pump systems', color: 'text-green-500', bgColor: 'bg-green-50' },
  { name: 'Air Conditioner', href: '/services/ac', icon: Snowflake, description: 'Central AC installation & service', color: 'text-cyan-500', bgColor: 'bg-cyan-50' },
  { name: 'Boiler', href: '/services/boiler', icon: Construction, description: 'Boiler repair, replacement & maintenance', color: 'text-red-500', bgColor: 'bg-red-50' },
  { name: 'Water Heaters', href: '/services/water-heaters', icon: Droplets, description: 'Tankless & traditional water heater service', color: 'text-indigo-500', bgColor: 'bg-indigo-50' },
];

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileMenuOpen]);



  return (
    <>
      {/* Top Utility Bar */}
      <div className="hidden md:block bg-brand-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between py-2">
          <p className="text-xs tracking-wide opacity-80">
            Serving All of Massachusetts — Always There. Always Fair.
          </p>
          <div className="flex items-center gap-6">
            <a href="mailto:info@awpumahome.com" className="text-xs hover:text-brand-orange transition-colors">
              info@awpumahome.com
            </a>
            <a href="tel:6176183366" className="flex items-center gap-1.5 text-xs font-bold hover:text-brand-orange transition-colors">
              <Phone size={12} />
              (617) 618-3366
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav
        className={`sticky top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
          ? 'bg-white shadow-lg py-2'
          : 'bg-white py-3'
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 cursor-pointer flex-shrink-0" onClick={() => window.scrollTo(0, 0)}>
              <img
                src="/images/logos/text-logo-color.png"
                alt="A.W. Puma Home Services"
                className={`transition-all duration-300 ${isScrolled ? 'h-12' : 'h-16'}`}
              />
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center space-x-1">
              {/* Services with Mega Menu */}
              <div className="relative group">
                <Link
                  to="/services"
                  className="flex items-center gap-1 text-sm font-semibold text-brand-navy hover:text-brand-orange transition-colors px-4 py-2 rounded-md"
                >
                  Services
                  <ChevronDown size={14} className="group-hover:rotate-180 transition-transform" />
                </Link>

                {/* Mega Menu Dropdown */}
                <div className="absolute top-full left-1/2 -translate-x-1/2 w-[700px] bg-white shadow-2xl rounded-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-3 group-hover:translate-y-0 border border-gray-100 overflow-hidden">
                  {/* Service Grid */}
                  <div className="grid grid-cols-3 gap-1 p-4">
                    {SERVICES.map((service) => (
                      <Link
                        key={service.name}
                        to={service.href}
                        className="flex items-start gap-4 p-4 rounded-lg hover:bg-gray-50 transition-all duration-200 group/item"
                      >
                        <div className={`w-11 h-11 rounded-lg ${service.bgColor} flex items-center justify-center flex-shrink-0 group-hover/item:scale-110 transition-transform duration-200`}>
                          <service.icon size={22} className={service.color} />
                        </div>
                        <div>
                          <div className="font-bold text-brand-navy text-sm group-hover/item:text-brand-orange transition-colors">
                            {service.name}
                          </div>
                          <div className="text-xs text-brand-gray-light mt-0.5 leading-relaxed">
                            {service.description}
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>

                  {/* Mega Menu Footer */}
                  <div className="bg-gray-50 px-6 py-3 border-t border-gray-100 flex items-center justify-between">
                    <span className="text-xs text-brand-gray-light">Not sure what you need?</span>
                    <Link to="/contact" className="inline-flex items-center text-brand-orange font-bold text-xs uppercase tracking-wide hover:underline">
                      Get Expert Advice <ArrowRight size={12} className="ml-1" />
                    </Link>
                  </div>
                </div>
              </div>

              <Link to="/locations" className="text-sm font-semibold text-brand-navy hover:text-brand-orange transition-colors px-4 py-2 rounded-md">
                Locations
              </Link>

              <Link to="/mass-save" className="text-sm font-semibold text-brand-navy hover:text-brand-orange transition-colors px-4 py-2 rounded-md">
                Mass Save®
              </Link>
              <Link to="/about" className="text-sm font-semibold text-brand-navy hover:text-brand-orange transition-colors px-4 py-2 rounded-md">
                About
              </Link>
              <Link to="/contact" className="text-sm font-semibold text-brand-navy hover:text-brand-orange transition-colors px-4 py-2 rounded-md">
                Contact
              </Link>
              <Link to="/blog" className="text-sm font-semibold text-brand-navy hover:text-brand-orange transition-colors px-4 py-2 rounded-md">
                Blog
              </Link>
            </div>

            {/* CTA & Phone */}
            <div className="hidden lg:flex items-center gap-5">
              <a href="tel:6176183366" className="flex items-center gap-2 text-brand-navy font-bold hover:text-brand-orange transition-colors">
                <div className="w-9 h-9 rounded-full bg-brand-orange/10 flex items-center justify-center">
                  <Phone size={16} className="text-brand-orange" />
                </div>
                <div className="flex flex-col leading-tight">
                  <span className="text-[10px] text-brand-gray-light font-normal uppercase tracking-wide">Call Now</span>
                  <span className="text-sm">(617) 618-3366</span>
                </div>
              </a>
              <Link to="/contact">
                <Button size="sm" variant="primary">
                  Get Free Quote
                </Button>
              </Link>
            </div>

            {/* Mobile Toggle & Phone */}
            <div className="lg:hidden flex items-center gap-2">
              <a href="tel:6176183366" className="text-brand-navy p-2 hover:bg-gray-100 rounded-md transition-colors" aria-label="Call Us">
                <Phone size={24} />
              </a>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-brand-navy p-2 hover:bg-gray-100 rounded-md transition-colors"
                aria-label="Toggle Menu"
              >
                {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu — Full Screen Overlay (SOP-17) */}
        <div
          className={`lg:hidden fixed inset-0 z-50 bg-white transition-transform duration-300 ease-in-out ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
            }`}
          style={{ top: 0 }}
        >
          {/* Mobile Header */}
          <div className="flex items-center justify-between px-4 py-4 border-b border-gray-100">
            <Link to="/" onClick={() => setMobileMenuOpen(false)}>
              <img
                src="/images/logos/text-logo-color.png"
                alt="A.W. Puma Home Services"
                className="h-12"
              />
            </Link>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="text-brand-navy p-2 hover:bg-gray-100 rounded-md"
              aria-label="Close Menu"
            >
              <X size={28} />
            </button>
          </div>

          {/* Mobile Nav Links */}
          <div className="flex flex-col px-4 py-4 space-y-0 overflow-y-auto" style={{ maxHeight: 'calc(100vh - 200px)' }}>
            {/* Services Accordion */}
            <div className="border-b border-gray-100">
              <div className="flex items-center justify-between py-3">
                <span className="text-lg font-bold text-brand-navy">Services</span>
                <button
                  onClick={() => setActiveDropdown(activeDropdown === 'services' ? null : 'services')}
                  className="p-2 text-brand-gray"
                  aria-label="Expand Services"
                >
                  <ChevronDown size={20} className={`transform transition-transform ${activeDropdown === 'services' ? 'rotate-180' : ''}`} />
                </button>
              </div>
              {activeDropdown === 'services' && (
                <div className="pb-3 space-y-1">
                  {SERVICES.map((service) => (
                    <Link
                      key={service.name}
                      to={service.href}
                      className="flex items-center gap-3 px-2 py-2.5 rounded-lg hover:bg-gray-50 transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <div className={`w-9 h-9 rounded-lg ${service.bgColor} flex items-center justify-center flex-shrink-0`}>
                        <service.icon size={18} className={service.color} />
                      </div>
                      <div>
                        <div className="font-semibold text-brand-navy text-sm">{service.name}</div>
                        <div className="text-xs text-brand-gray-light">{service.description}</div>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link to="/locations" className="block py-3 text-lg font-bold text-brand-navy hover:text-brand-orange border-b border-gray-100" onClick={() => setMobileMenuOpen(false)}>
              Locations
            </Link>

            <Link to="/mass-save" className="block py-3 text-lg font-bold text-brand-navy hover:text-brand-orange border-b border-gray-100" onClick={() => setMobileMenuOpen(false)}>
              Mass Save®
            </Link>
            <Link to="/about" className="block py-3 text-lg font-bold text-brand-navy hover:text-brand-orange border-b border-gray-100" onClick={() => setMobileMenuOpen(false)}>
              About
            </Link>
            <Link to="/blog" className="block py-3 text-lg font-bold text-brand-navy hover:text-brand-orange border-b border-gray-100" onClick={() => setMobileMenuOpen(false)}>
              Blog
            </Link>
            <Link to="/contact" className="block py-3 text-lg font-bold text-brand-navy hover:text-brand-orange border-b border-gray-100" onClick={() => setMobileMenuOpen(false)}>
              Contact
            </Link>
          </div>

          {/* Mobile CTA Stack */}
          <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-100 bg-white space-y-3">
            <Link to="/contact" onClick={() => setMobileMenuOpen(false)} className="block">
              <Button className="w-full justify-center" variant="primary">
                Get Free Quote
              </Button>
            </Link>
            <a href="tel:6176183366" className="block">
              <Button className="w-full justify-center" variant="navy">
                <Phone size={16} className="mr-2" />
                Call (617) 618-3366
              </Button>
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};
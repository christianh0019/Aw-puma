import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SERVICES } from './Navbar';

export const ServiceGrid: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-brand-cream relative overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-orange/5 rounded-full blur-[120px] -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-brand-navy/5 rounded-full blur-[100px] translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="mb-16 text-center">
          <span className="text-brand-orange font-bold uppercase tracking-[0.2em] text-sm mb-3 block">
            Our Services
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-navy mb-5">
            Expert Home Services
          </h2>
          <p className="text-brand-gray max-w-2xl mx-auto text-lg leading-relaxed">
            From heating and cooling to boiler maintenance and beyond — A.W. Puma delivers expert
            installation, repair, and maintenance across Massachusetts. One call does it all.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service) => (
            <Link
              key={service.name}
              to={service.href}
              className="group relative bg-white rounded-xl p-8 shadow-card hover:shadow-hero transition-all duration-500 border border-gray-100 hover:border-brand-orange/20 flex flex-col items-start overflow-hidden hover:-translate-y-1"
            >
              {/* Hover gradient accent */}
              <div className="absolute inset-0 bg-gradient-to-br from-brand-orange/0 to-brand-orange/0 group-hover:from-brand-orange/[0.02] group-hover:to-brand-orange/[0.06] transition-all duration-500 rounded-xl" />

              {/* Top accent line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-orange/0 via-brand-orange to-brand-orange/0 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center" />

              <div className="relative z-10 w-full">
                {/* Icon */}
                <div className={`w-14 h-14 rounded-xl ${service.bgColor} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon size={28} className={service.color} />
                </div>

                {/* Title */}
                <h3 className="text-xl font-serif font-bold text-brand-navy mb-3 group-hover:text-brand-orange transition-colors duration-300">
                  {service.name}
                </h3>

                {/* Description */}
                <p className="text-brand-gray text-sm leading-relaxed mb-6 flex-grow">
                  {service.description}
                </p>

                {/* Link */}
                <div className="inline-flex items-center text-brand-navy font-bold text-sm uppercase tracking-wide group-hover:text-brand-orange transition-colors">
                  Learn More
                  <ArrowRight size={16} className="ml-2 group-hover:translate-x-2 transition-transform duration-300" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-3 bg-brand-navy rounded-full px-8 py-4 shadow-lg hover:shadow-hero transition-all duration-300 hover:-translate-y-0.5 group">
            <span className="text-white font-bold text-sm">Not sure what you need?</span>
            <Link to="/contact" className="inline-flex items-center text-brand-orange font-bold text-sm uppercase tracking-wide group-hover:underline">
              Talk to an Expert <ArrowRight size={14} className="ml-1.5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
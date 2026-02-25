import React from 'react';
import { Button } from './ui/Button';
import { Phone, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const FinalCTA: React.FC = () => {
  return (
    <section className="py-32 relative overflow-hidden flex items-center justify-center bg-brand-navy">

      {/* Background decoration */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }} />
      <div className="absolute top-0 right-0 w-64 h-64 bg-brand-orange opacity-10 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-brand-orange opacity-5 rounded-full blur-[80px]" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-6xl font-serif font-bold text-white tracking-tight mb-8">
          Ready to Get It Fixed Right?
        </h2>
        <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
          Stop searching. Whether it's heating, cooling, boiler repair, or any home service — A.W. Puma has you covered. Free estimates on new installations.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <Link to="/contact">
            <Button size="lg" className="text-lg h-16 shadow-2xl" icon={<ArrowRight size={18} />}>
              Get Free Quote
            </Button>
          </Link>
          <a href="tel:6176183366">
            <Button variant="outline" size="lg" className="text-lg h-16">
              <Phone size={18} className="mr-2" />
              Call (617) 618-3366
            </Button>
          </a>
        </div>

        <p className="mt-8 text-sm text-gray-400 font-medium">
          No obligation. Same-day service available for emergencies.
        </p>
      </div>
    </section>
  );
};
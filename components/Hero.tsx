import React from 'react';
import { ArrowRight, Star, ShieldCheck, Clock, Phone, Snowflake, Flame, Wrench } from 'lucide-react';
import { Button } from './ui/Button';
import { Link } from 'react-router-dom';

export const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-brand-navy min-h-[92vh] flex items-center">

      {/* Background Layers */}
      <div className="absolute inset-0 z-0">
        {/* Gradient base */}
        <div className="absolute inset-0 bg-gradient-to-br from-brand-navy via-brand-navy-dark to-brand-navy" />

        {/* Subtle geometric pattern */}
        <div className="absolute inset-0 opacity-[0.04]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23ffffff' stroke-width='1'%3E%3Cpath d='M0 0l40 40L0 80'/%3E%3Cpath d='M80 0L40 40l40 40'/%3E%3C/g%3E%3C/svg%3E")`,
        }} />

        {/* Orange accent glow */}
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-brand-orange/15 rounded-full blur-[120px]" />
        <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-brand-orange/10 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12 md:py-0">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">

          {/* Left: Copy */}
          <div className="text-left order-2 lg:order-1">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 mb-8">
              <div className="flex -space-x-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} className="text-brand-orange fill-brand-orange" />
                ))}
              </div>
              <span className="text-sm font-semibold text-white/90">Top Rated in Massachusetts</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-serif font-bold tracking-tight text-white mb-6 leading-[1.1]">
              Home Services <br />
              <span className="text-brand-orange">Done Right</span>
            </h1>

            {/* Tagline */}
            <p className="text-lg sm:text-xl text-gray-300 mb-4 font-serif italic">
              Always There. Always Fair.
            </p>

            {/* Sub-headline */}
            <p className="text-base sm:text-lg text-gray-400 mb-10 max-w-lg leading-relaxed">
              Heating, cooling, plumbing, and more — trusted by Massachusetts homeowners for over 20 years.
              One call handles it all.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-start gap-4 mb-12">
              <Link to="/contact">
                <Button size="lg" icon={<ArrowRight size={18} />}>
                  Get Free Quote
                </Button>
              </Link>
              <a href="tel:6176183366">
                <Button variant="outline" size="lg">
                  <Phone size={16} className="mr-2" />
                  Call Now
                </Button>
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-3 gap-4 sm:gap-6 pt-8 border-t border-white/10">
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="bg-brand-orange/20 p-2 rounded-lg flex-shrink-0">
                  <ShieldCheck className="text-brand-orange" size={20} />
                </div>
                <div className="text-xs sm:text-sm">
                  <div className="text-white font-bold">Licensed</div>
                  <div className="text-gray-500 text-xs">& Insured</div>
                </div>
              </div>
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="bg-brand-orange/20 p-2 rounded-lg flex-shrink-0">
                  <Clock className="text-brand-orange" size={20} />
                </div>
                <div className="text-xs sm:text-sm">
                  <div className="text-white font-bold">Same Day</div>
                  <div className="text-gray-500 text-xs">Service</div>
                </div>
              </div>
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="bg-brand-orange/20 p-2 rounded-lg flex-shrink-0">
                  <Star className="text-brand-orange" size={20} />
                </div>
                <div className="text-xs sm:text-sm">
                  <div className="text-white font-bold">5.0 Stars</div>
                  <div className="text-gray-500 text-xs">100+ Reviews</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Mascot + Service Badges */}
          <div className="relative flex items-center justify-center order-1 lg:order-2">

            {/* Mascot glow backdrop */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-80 h-80 lg:w-[450px] lg:h-[450px] bg-brand-orange/10 rounded-full blur-[60px]" />
            </div>

            {/* Mascot */}
            <div className="relative animate-float">
              <img
                src="/images/mascots/mascot-thumbs-up.png"
                alt="A.W. Puma Mascot"
                className="w-64 sm:w-80 lg:w-[420px] xl:w-[480px] drop-shadow-2xl relative z-10"
              />
            </div>

            {/* Floating service badges */}
            <div className="absolute top-8 right-4 lg:top-12 lg:right-0 bg-white/10 backdrop-blur-md rounded-xl px-4 py-3 border border-white/10 shadow-lg animate-float" style={{ animationDelay: '1s' }}>
              <div className="flex items-center gap-2">
                <Snowflake size={18} className="text-blue-300" />
                <span className="text-white text-sm font-semibold">HVAC</span>
              </div>
            </div>

            <div className="absolute bottom-16 left-0 lg:bottom-24 lg:-left-4 bg-white/10 backdrop-blur-md rounded-xl px-4 py-3 border border-white/10 shadow-lg animate-float" style={{ animationDelay: '2s' }}>
              <div className="flex items-center gap-2">
                <Flame size={18} className="text-brand-orange" />
                <span className="text-white text-sm font-semibold">Heating</span>
              </div>
            </div>

            <div className="absolute bottom-4 right-8 lg:bottom-8 lg:right-8 bg-white/10 backdrop-blur-md rounded-xl px-4 py-3 border border-white/10 shadow-lg animate-float" style={{ animationDelay: '3s' }}>
              <div className="flex items-center gap-2">
                <Wrench size={18} className="text-green-300" />
                <span className="text-white text-sm font-semibold">Plumbing</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom orange accent strip */}
      <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r from-brand-orange via-brand-orange-light to-brand-orange" />
    </section>
  );
};
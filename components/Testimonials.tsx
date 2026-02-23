import React from 'react';
import { Star, Quote } from 'lucide-react';
import { Testimonial } from '../types';

const reviews: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Jenkins",
    location: "Wellesley, MA",
    text: "Our furnace died in the middle of January.  A.W. Puma had a tech at our house within hours and a brand new system installed the next day. Couldn't believe how fast and professional they were.",
    rating: 5,
    role: "Homeowner"
  },
  {
    id: 2,
    name: "Michael Ross",
    location: "Boston, MA",
    text: "Professional, punctual, and transparent pricing. I manage several rental properties in Boston and A.W. Puma is the only company I call for HVAC and plumbing. They're in a league of their own.",
    rating: 5,
    role: "Property Manager"
  },
  {
    id: 3,
    name: "Elena Rodriguez",
    location: "Newton, MA",
    text: "They installed mini splits throughout our home and walked us through the Mass Save rebate process. Saved us thousands. The team was respectful, clean, and finished ahead of schedule.",
    rating: 5,
    role: "Homeowner"
  }
];

export const Testimonials: React.FC = () => {
  return (
    <section id="reviews" className="py-24 bg-brand-light relative">
      <div className="absolute inset-0 bg-pattern opacity-100 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Stats Row */}
        <div className="bg-brand-navy rounded-xl p-12 mb-20 shadow-xl text-white">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-white/10">
            <div className="text-center px-4">
              <div className="text-4xl font-serif font-bold text-brand-orange mb-2">20+</div>
              <div className="text-xs font-bold uppercase tracking-widest text-gray-300">Years Active</div>
            </div>
            <div className="text-center px-4">
              <div className="text-4xl font-serif font-bold text-brand-orange mb-2">5,000+</div>
              <div className="text-xs font-bold uppercase tracking-widest text-gray-300">Service Calls</div>
            </div>
            <div className="text-center px-4">
              <div className="text-4xl font-serif font-bold text-brand-orange mb-2">100%</div>
              <div className="text-xs font-bold uppercase tracking-widest text-gray-300">Licensed & Insured</div>
            </div>
            <div className="text-center px-4">
              <div className="text-4xl font-serif font-bold text-brand-orange mb-2">4.9</div>
              <div className="text-xs font-bold uppercase tracking-widest text-gray-300">Avg Rating</div>
            </div>
          </div>
        </div>

        <div className="text-center mb-16">
          <span className="text-brand-orange font-bold uppercase tracking-[0.2em] text-sm mb-3 block">Testimonials</span>
          <h2 className="text-4xl font-serif font-bold text-brand-navy">What Our Customers Say</h2>
          <p className="mt-4 text-brand-gray max-w-xl mx-auto">Real reviews from real Massachusetts homeowners.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <div key={review.id} className="bg-white p-8 rounded-xl shadow-card border-t-4 border-brand-orange relative">
              <Quote className="text-brand-light absolute top-4 right-4 fill-gray-200" size={60} />

              <div className="flex gap-1 mb-6 relative z-10">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} size={18} className="fill-brand-orange text-brand-orange" />
                ))}
              </div>

              <p className="text-brand-gray mb-6 leading-relaxed min-h-[80px] italic relative z-10">"{review.text}"</p>

              <div className="border-t border-gray-100 pt-4 relative z-10">
                <div className="font-bold text-brand-navy">{review.name}</div>
                <div className="text-sm text-gray-500">{review.location} • {review.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
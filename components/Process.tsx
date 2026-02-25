import React from 'react';
import { Phone, ClipboardCheck, Wrench, ThumbsUp } from 'lucide-react';

const steps = [
  {
    icon: Phone,
    title: "1. Call or Book Online",
    desc: "Tell us what's going on — we'll ask the right questions and schedule a visit at your convenience. No runarounds."
  },
  {
    icon: ClipboardCheck,
    title: "2. On-Site Diagnosis",
    desc: "A licensed technician arrives on time, inspects the issue, and gives you an honest, upfront quote before any work begins."
  },
  {
    icon: Wrench,
    title: "3. Expert Repair or Install",
    desc: "We get to work with quality parts and proven techniques. Most jobs are finished same-day. We protect your home throughout."
  },
  {
    icon: ThumbsUp,
    title: "4. Your Satisfaction",
    desc: "We walk you through everything we did. You don't pay until you're happy. All work is backed by our service guarantee."
  }
];

export const Process: React.FC = () => {
  return (
    <section id="process" className="py-24 bg-brand-navy text-white relative overflow-hidden">
      {/* Texture */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <span className="text-brand-orange font-bold text-sm uppercase tracking-[0.2em] mb-3 block">How We Work</span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6">Simple. Honest. Professional.</h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg mb-8">
            No surprises, no upsells. Here's exactly what happens when you call A.W. Puma.
          </p>
          <a href="tel:6176183366" className="inline-flex items-center gap-2 bg-brand-orange hover:bg-brand-orange-dark text-white font-bold px-8 py-4 rounded-lg transition-colors shadow-lg hover:shadow-xl text-lg">
            <Phone size={20} />
            Call Us Today
          </a>
        </div>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-12 left-10 right-10 h-0.5 bg-brand-orange/30 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
            {steps.map((step, index) => (
              <div key={index} className="relative flex flex-col items-center text-center">
                <div className="w-24 h-24 bg-brand-navy border-4 border-brand-orange rounded-full flex items-center justify-center text-white mb-6 shadow-xl relative z-10">
                  <step.icon size={36} />
                </div>
                <h3 className="text-xl font-serif font-bold text-white mb-3">{step.title}</h3>
                <p className="text-gray-400 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Guarantee Box */}
        <div className="mt-20 bg-white/5 border border-brand-orange/20 rounded-xl p-8 lg:p-10 max-w-5xl mx-auto backdrop-blur-sm shadow-2xl relative overflow-hidden">
          {/* Subtle glow behind the guarantees */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-full bg-brand-orange/5 blur-[80px] -z-10 rounded-full" />

          <div className="text-center mb-10 relative z-10">
            <h4 className="text-3xl font-serif font-bold text-white mb-3">The A.W. Puma Guarantees</h4>
            <p className="text-gray-300 max-w-2xl mx-auto text-lg leading-relaxed">
              Your satisfaction is our reputation. Every job comes with our service guarantees — if it's not right, we make it right.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 relative z-10 text-left">
            <div className="bg-brand-navy-dark/50 border border-white/10 rounded-lg p-6 hover:border-brand-orange/50 transition-colors">
              <h5 className="font-bold text-lg text-white mb-2 flex items-center gap-3">
                <span className="text-brand-orange text-xl">✓</span>
                Absolutely Happy Guarantee
              </h5>
              <p className="text-gray-400 text-sm leading-relaxed">
                If you are not completely satisfied with our work, we will return and resolve the issue for free until you are absolutely happy.
              </p>
            </div>

            <div className="bg-brand-navy-dark/50 border border-white/10 rounded-lg p-6 hover:border-brand-orange/50 transition-colors">
              <h5 className="font-bold text-lg text-white mb-2 flex items-center gap-3">
                <span className="text-brand-orange text-xl">✓</span>
                Lowest Price Guarantee
              </h5>
              <p className="text-gray-400 text-sm leading-relaxed">
                We promise that our price will be the lowest for comparable equipment and services. If you find a better price from a licensed competitor, we'll beat it.
              </p>
            </div>

            <div className="bg-brand-navy-dark/50 border border-white/10 rounded-lg p-6 hover:border-brand-orange/50 transition-colors">
              <h5 className="font-bold text-lg text-white mb-2 flex items-center gap-3">
                <span className="text-brand-orange text-xl">✓</span>
                Better Than We Found It Guarantee
              </h5>
              <p className="text-gray-400 text-sm leading-relaxed">
                Our technicians wear shoe covers, use drop cloths, and commit to leaving your home cleaner than when they arrived.
              </p>
            </div>

            <div className="bg-brand-navy-dark/50 border border-white/10 rounded-lg p-6 hover:border-brand-orange/50 transition-colors">
              <h5 className="font-bold text-lg text-white mb-2 flex items-center gap-3">
                <span className="text-brand-orange text-xl">✓</span>
                Fix It or Hotel Guarantee
              </h5>
              <p className="text-gray-400 text-sm leading-relaxed">
                If we can't fix your home's essential climate control system overnight during a breakdown, we'll put your family up in a hotel.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
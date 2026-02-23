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
          <span className="text-brand-orange font-bold text-sm uppercase tracking-[0.2em] mb-3 block">How It Works</span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6">Simple. Honest. Professional.</h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            No surprises, no upsells. Here's exactly what happens when you call A.W. Puma.
          </p>
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
        <div className="mt-20 bg-white/5 border border-white/10 rounded-xl p-8 max-w-4xl mx-auto text-center backdrop-blur-sm">
          <h4 className="text-2xl font-serif font-bold text-white mb-2">The A.W. Puma Guarantee</h4>
          <p className="text-gray-300">Your satisfaction is our reputation. Every job comes with our service guarantee — if it's not right, we make it right.</p>
        </div>
      </div>
    </section>
  );
};
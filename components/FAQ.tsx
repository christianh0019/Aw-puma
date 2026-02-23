import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { FAQItem } from '../types';

const faqs: FAQItem[] = [
  {
    question: "What areas do you serve in Massachusetts?",
    answer: "We serve the Greater Boston area and beyond — including Boston, Newton, Cambridge, Wellesley, Brookline, Brockton, Worcester, Lawrence, and surrounding communities. Contact us to confirm coverage for your specific location."
  },
  {
    question: "Are you fully licensed and insured?",
    answer: "Yes. A.W. Puma holds all required Massachusetts licenses and carries full liability and workers' compensation insurance. Your home is in safe hands."
  },
  {
    question: "How much does a service call cost?",
    answer: "We offer free estimates for new installations and major projects. For diagnostic service calls and repairs, there is a standard dispatch fee which is waived if you proceed with the recommended work."
  },
  {
    question: "Do you offer financing or rebate assistance?",
    answer: "Yes! We help qualifying homeowners access Mass Save® rebates and incentives for energy-efficient equipment upgrades like heat pumps, insulation, and high-efficiency furnaces. We also offer flexible financing options on approved credit."
  },
  {
    question: "How quickly can you get here?",
    answer: "For urgent issues like no heat or a broken AC in summer, we offer same-day and next-day emergency service. For non-emergency repairs and installations, we typically schedule within 1–3 business days."
  },
  {
    question: "What brands of equipment do you install?",
    answer: "We install and service all major brands including Carrier, Lennox, Trane, Mitsubishi, Rheem, Navien, and more. We'll recommend the best option for your home and budget."
  }
];

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-brand-orange font-bold uppercase tracking-[0.2em] text-sm mb-3 block">FAQ</span>
          <h2 className="text-4xl font-serif font-bold text-brand-navy">Common Questions</h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`border rounded-xl transition-all duration-200 ${openIndex === index ? 'border-brand-orange bg-brand-cream' : 'border-gray-200 bg-white'}`}
            >
              <button
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className={`font-bold text-lg ${openIndex === index ? 'text-brand-navy' : 'text-brand-gray'}`}>
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <Minus className="text-brand-orange flex-shrink-0" size={24} />
                ) : (
                  <Plus className="text-gray-400 flex-shrink-0" size={24} />
                )}
              </button>

              <div
                className={`transition-all duration-300 ease-in-out overflow-hidden ${openIndex === index ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
                  }`}
              >
                <div className="p-6 pt-0 text-brand-gray leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
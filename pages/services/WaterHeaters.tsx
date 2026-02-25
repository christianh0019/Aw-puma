import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, ShieldCheck, Droplets, FileText, Star, Plus, Minus, Zap, Thermometer } from 'lucide-react';
import { Button } from '../../components/ui/Button';
import { SEO } from '../../components/SEO';

export const WaterHeaters: React.FC = () => {
    const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

    return (
        <div className="bg-white">
            <SEO
                title="Tankless Water Heater Installation Boston | Hot Water Repair"
                description="Expert water heater repair and installation services in Greater Boston. Upgrade to a high-efficiency tankless system with A.W. Puma."
                keywords="tankless water heater installation, hot water heater repair Boston, residential water heating, water heater service Massachusetts"
                canonical="https://awpumahome.com/services/water-heaters"
            />
            {/* 1. THE PROMISE (HERO) */}
            <section className="relative min-h-[55vh] flex flex-col justify-center items-center pt-24 pb-16">
                <div className="absolute inset-0 z-0" style={{ backgroundColor: '#153760' }} />

                <div className="relative z-10 max-w-7xl mx-auto px-4 w-full text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-gold/20 border border-brand-gold/50 backdrop-blur-md mb-8">
                        <span className="text-sm font-bold text-brand-gold uppercase tracking-widest">Endless Hot Water</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-serif font-bold tracking-tight text-white mb-6 leading-tight drop-shadow-2xl">
                        Premium Water <br />
                        <span className="text-brand-gold">Heating Solutions</span>
                    </h1>

                    <p className="text-xl text-gray-200 mb-10 max-w-2xl mx-auto leading-relaxed font-light">
                        Never run out of hot water again. From tankless upgrades to high-efficiency repairs, we ensure your family has reliable hot water 24/7.
                    </p>

                    <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                        <Button size="lg" icon={<ArrowRight size={18} />}>
                            Emergency Repair
                        </Button>
                        <Button variant="outline" size="lg">
                            Go Tankless Today
                        </Button>
                    </div>
                </div>
            </section>

            {/* 2. THE EMPATHY LAYER (PAS) */}
            <section className="py-24 bg-gray-50">
                <div className="max-w-4xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-navy mb-6">Cold Showers Are A Thing Of The Past</h2>
                        <p className="text-lg text-brand-gray leading-relaxed">
                            Sediment buildup, failing elements, or an undersized tank can turn your morning routine into a nightmare. We provide fast, reliable solutions for every home.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 mb-12">
                        <div className="bg-white p-8 rounded-sm shadow-sm border-l-4 border-brand-indigo">
                            <div className="flex items-center gap-3 mb-4">
                                <Thermometer className="text-brand-indigo" size={24} />
                                <h3 className="text-xl font-bold text-brand-navy">Running Out Too Fast</h3>
                            </div>
                            <p className="text-brand-gray">
                                If your 15-minute shower has turned into 5, your water heater is struggling. We diagnose and fix the root cause, or help you upsize for your family's needs.
                            </p>
                        </div>
                        <div className="bg-white p-8 rounded-sm shadow-sm border-l-4 border-brand-indigo">
                            <div className="flex items-center gap-3 mb-4">
                                <Zap className="text-brand-indigo" size={24} />
                                <h3 className="text-xl font-bold text-brand-navy">High Energy Bills</h3>
                            </div>
                            <p className="text-brand-gray">
                                Traditional tanks waste energy keeping water hot 24/7. Modern tankless or heat-pump water heaters save up to 50% on heating costs.
                            </p>
                        </div>
                    </div>

                    <div className="bg-brand-navy text-white p-8 rounded-sm text-center">
                        <h3 className="text-2xl font-serif font-bold mb-4">Tankless Efficiency</h3>
                        <p className="text-gray-300 text-lg">
                            Switch to a Navien or Bosch tankless system. They only heat water when you turn on the tap, providing a continuous stream of hot water while taking up 1/3 the space.
                        </p>
                    </div>
                </div>
            </section>

            {/* 3. THE COMPETENCE LAYER (3 PILLARS) */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <span className="text-brand-gold font-bold uppercase tracking-widest text-sm mb-2 block">Hydraulic Mastery</span>
                        <h2 className="text-4xl font-serif font-bold text-brand-navy">Total Water Heating Care</h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-12">
                        {/* Pillar 1: Technical */}
                        <div className="space-y-6">
                            <div className="w-16 h-16 bg-brand-light rounded-full flex items-center justify-center">
                                <Droplets className="text-brand-navy" size={32} />
                            </div>
                            <h3 className="text-2xl font-bold text-brand-navy">Advanced Repair</h3>
                            <ul className="space-y-3">
                                <li className="flex gap-3 text-brand-gray">
                                    <CheckCircle2 size={20} className="text-brand-gold shrink-0" />
                                    <span>Anode rod & element replacement</span>
                                </li>
                                <li className="flex gap-3 text-brand-gray">
                                    <CheckCircle2 size={20} className="text-brand-gold shrink-0" />
                                    <span>System flushing & descaling</span>
                                </li>
                                <li className="flex gap-3 text-brand-gray">
                                    <CheckCircle2 size={20} className="text-brand-gold shrink-0" />
                                    <span>Thermal expansion tank service</span>
                                </li>
                            </ul>
                        </div>

                        {/* Pillar 2: Financial */}
                        <div className="space-y-6">
                            <div className="w-16 h-16 bg-brand-light rounded-full flex items-center justify-center">
                                <FileText className="text-brand-navy" size={32} />
                            </div>
                            <h3 className="text-2xl font-bold text-brand-navy">Modern Upgrades</h3>
                            <ul className="space-y-3">
                                <li className="flex gap-3 text-brand-gray">
                                    <CheckCircle2 size={20} className="text-brand-gold shrink-0" />
                                    <span>High-efficiency tankless installs</span>
                                </li>
                                <li className="flex gap-3 text-brand-gray">
                                    <CheckCircle2 size={20} className="text-brand-gold shrink-0" />
                                    <span>Hybrid heat pump water heaters</span>
                                </li>
                                <li className="flex gap-3 text-brand-gray">
                                    <CheckCircle2 size={20} className="text-brand-gold shrink-0" />
                                    <span>Mass Save® rebate assistance</span>
                                </li>
                            </ul>
                        </div>

                        {/* Pillar 3: Regulatory */}
                        <div className="space-y-6">
                            <div className="w-16 h-16 bg-brand-light rounded-full flex items-center justify-center">
                                <ShieldCheck className="text-brand-navy" size={32} />
                            </div>
                            <h3 className="text-2xl font-bold text-brand-navy">Compliant Safety</h3>
                            <ul className="space-y-3">
                                <li className="flex gap-3 text-brand-gray">
                                    <CheckCircle2 size={20} className="text-brand-gold shrink-0" />
                                    <span>Temp & pressure valve checks</span>
                                </li>
                                <li className="flex gap-3 text-brand-gray">
                                    <CheckCircle2 size={20} className="text-brand-gold shrink-0" />
                                    <span>Strict venting & fuel safety</span>
                                </li>
                                <li className="flex gap-3 text-brand-gray">
                                    <CheckCircle2 size={20} className="text-brand-gold shrink-0" />
                                    <span>Vacuum relief valve installation</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. THE DATA LAYER (FAQ) */}
            <section className="py-24 bg-gray-50">
                <div className="max-w-3xl mx-auto px-4">
                    <h2 className="text-3xl font-serif font-bold text-brand-navy mb-12 text-center">Water Heater FAQs</h2>
                    <div className="space-y-4">
                        {[
                            { q: "What are the signs that my water heater is failing?", a: "Loud popping or rumbling noises (sediment), rusty colored water, or small leaks around the base are all signs that your tank is nearing the end of its life." },
                            { q: "Is tankless really better than a traditional tank?", a: "For most families, yes. Tankless units provide endless hot water and last twice as long as tanks. While the initial cost is higher, the energy savings and longevity often outweigh the investment." },
                            { q: "How long does a new water heater installation take?", a: "A standard tank swap takes 3-4 hours. A conversion from tank to tankless typically takes 1 full day due to the necessary venting and gas line upgrades." },
                            { q: "Do you offer emergency water heater service?", a: "Yes. We offer 24/7 emergency service for major leaks or total loss of hot water. We understand that hot water is a necessity, not a luxury." }
                        ].map((faq, index) => (
                            <div key={index} className="bg-white rounded-sm border border-gray-200">
                                <button
                                    className="w-full flex items-center justify-between p-6 text-left font-bold text-brand-navy focus:outline-none"
                                    onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                                >
                                    {faq.q}
                                    {openFaqIndex === index ? <Minus size={20} className="text-brand-gold" /> : <Plus size={20} className="text-gray-400" />}
                                </button>
                                {openFaqIndex === index && (
                                    <div className="p-6 pt-0 text-brand-gray leading-relaxed border-t border-gray-100">
                                        {faq.a}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 7. SOFT CONVERSION (CTA) */}
            <section className="py-20 bg-brand-light">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-3xl font-serif font-bold text-brand-navy mb-6">Upgrade Your Hot Water Today</h2>
                    <p className="text-brand-gray mb-8">Schedule a repair or get a free quote for a high-efficiency water heating system.</p>

                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Button size="lg">Book Water Heater Service</Button>
                        <Button variant="outline-navy" size="lg">Request Replacement Quote</Button>
                    </div>
                </div>
            </section>
        </div>
    );
};

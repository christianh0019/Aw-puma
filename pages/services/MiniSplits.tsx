import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, AlertTriangle, ShieldCheck, Wind, FileText, Star, Plus, Minus, Snowflake, Zap } from 'lucide-react';
import { Button } from '../../components/ui/Button';
import { SEO } from '../../components/SEO';

export const MiniSplits: React.FC = () => {
    const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

    return (
        <div className="bg-white">
            <SEO
                title="Ductless Mini-Split Installation Boston | Quiet Cooling"
                description="Expert ductless AC installation and mini-split systems in Greater Boston. Quiet, energy-efficient cooling solutions for every room."
                keywords="ductless AC installation, mini-split systems Boston, quiet cooling solutions, ductless heating Massachusetts"
                canonical="https://awpumahome.com/services/mini-splits"
            />
            {/* 1. THE PROMISE (HERO) */}
            <section className="relative min-h-[55vh] flex flex-col justify-center items-center pt-24 pb-16">
                <div className="absolute inset-0 z-0" style={{ backgroundColor: '#153760' }} />

                <div className="relative z-10 max-w-7xl mx-auto px-4 w-full text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-gold/20 border border-brand-gold/50 backdrop-blur-md mb-8">
                        <span className="text-sm font-bold text-brand-gold uppercase tracking-widest">Ductless Comfort Solutions</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-serif font-bold tracking-tight text-white mb-6 leading-tight drop-shadow-2xl">
                        Mini Split Heating <br />
                        <span className="text-brand-gold">& Cooling</span>
                    </h1>

                    <p className="text-xl text-gray-200 mb-10 max-w-2xl mx-auto leading-relaxed font-light">
                        Precision comfort for every room, no ductwork required. Save up to 30% on energy bills with hyper-efficient zone control.
                    </p>

                    <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                        <Button size="lg" icon={<ArrowRight size={18} />}>
                            Get a Free Design Quote
                        </Button>
                        <Button variant="outline" size="lg">
                            See Energy Rebates
                        </Button>
                    </div>
                </div>
            </section>

            {/* 2. THE EMPATHY LAYER (PAS) */}
            <section className="py-24 bg-gray-50">
                <div className="max-w-4xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-navy mb-6">No Ducts? No Problem.</h2>
                        <p className="text-lg text-brand-gray leading-relaxed">
                            Traditional systems aren't always possible in older New England homes. Mini splits provide modern comfort without major renovations.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 mb-12">
                        <div className="bg-white p-8 rounded-sm shadow-sm border-l-4 border-brand-orange">
                            <div className="flex items-center gap-3 mb-4">
                                <Snowflake className="text-brand-orange" size={24} />
                                <h3 className="text-xl font-bold text-brand-navy">That One "Hot" Room</h3>
                            </div>
                            <p className="text-brand-gray">
                                Stop fighting over the thermostat. Mini splits allow you to set specific temperatures for different rooms or additions.
                            </p>
                        </div>
                        <div className="bg-white p-8 rounded-sm shadow-sm border-l-4 border-brand-orange">
                            <div className="flex items-center gap-3 mb-4">
                                <Zap className="text-brand-orange" size={24} />
                                <h3 className="text-xl font-bold text-brand-navy">High Energy Bills</h3>
                            </div>
                            <p className="text-brand-gray">
                                Window units and electric baseboards are energy hogs. Mini splits use inverter technology to sip electricity while delivering maximum comfort.
                            </p>
                        </div>
                    </div>

                    <div className="bg-brand-navy text-white p-8 rounded-sm text-center">
                        <h3 className="text-2xl font-serif font-bold mb-4">The Quietest Comfort</h3>
                        <p className="text-gray-300 text-lg">
                            Modern mini splits are whisper-quiet, often operating at decibel levels lower than a library. Enjoy comfort without the noise.
                        </p>
                    </div>
                </div>
            </section>

            {/* 3. THE COMPETENCE LAYER (3 PILLARS) */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <span className="text-brand-gold font-bold uppercase tracking-widest text-sm mb-2 block">Ductless Mastery</span>
                        <h2 className="text-4xl font-serif font-bold text-brand-navy">Specialized Mini Split Engineering</h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-12">
                        {/* Pillar 1: Technical */}
                        <div className="space-y-6">
                            <div className="w-16 h-16 bg-brand-light rounded-full flex items-center justify-center">
                                <Wind className="text-brand-navy" size={32} />
                            </div>
                            <h3 className="text-2xl font-bold text-brand-navy">Zone Control Design</h3>
                            <ul className="space-y-3">
                                <li className="flex gap-3 text-brand-gray">
                                    <CheckCircle2 size={20} className="text-brand-gold shrink-0" />
                                    <span>Single & multi-zone systems</span>
                                </li>
                                <li className="flex gap-3 text-brand-gray">
                                    <CheckCircle2 size={20} className="text-brand-gold shrink-0" />
                                    <span>Wall, floor, or ceiling mounts</span>
                                </li>
                                <li className="flex gap-3 text-brand-gray">
                                    <CheckCircle2 size={20} className="text-brand-gold shrink-0" />
                                    <span>Hyper-Heat performance specialists</span>
                                </li>
                            </ul>
                        </div>

                        {/* Pillar 2: Financial */}
                        <div className="space-y-6">
                            <div className="w-16 h-16 bg-brand-light rounded-full flex items-center justify-center">
                                <FileText className="text-brand-navy" size={32} />
                            </div>
                            <h3 className="text-2xl font-bold text-brand-navy">Rebate Experts</h3>
                            <ul className="space-y-3">
                                <li className="flex gap-3 text-brand-gray">
                                    <CheckCircle2 size={20} className="text-brand-gold shrink-0" />
                                    <span>Mass Save® $10,000 specialists</span>
                                </li>
                                <li className="flex gap-3 text-brand-gray">
                                    <CheckCircle2 size={20} className="text-brand-gold shrink-0" />
                                    <span>Federal HVAC tax credit guidance</span>
                                </li>
                                <li className="flex gap-3 text-brand-gray">
                                    <CheckCircle2 size={20} className="text-brand-gold shrink-0" />
                                    <span>Energy ROI analysis provided</span>
                                </li>
                            </ul>
                        </div>

                        {/* Pillar 3: Regulatory */}
                        <div className="space-y-6">
                            <div className="w-16 h-16 bg-brand-light rounded-full flex items-center justify-center">
                                <ShieldCheck className="text-brand-navy" size={32} />
                            </div>
                            <h3 className="text-2xl font-bold text-brand-navy">Authorized Service</h3>
                            <ul className="space-y-3">
                                <li className="flex gap-3 text-brand-gray">
                                    <CheckCircle2 size={20} className="text-brand-gold shrink-0" />
                                    <span>Mitsubishi Diamond Pro® Installers</span>
                                </li>
                                <li className="flex gap-3 text-brand-gray">
                                    <CheckCircle2 size={20} className="text-brand-gold shrink-0" />
                                    <span>Factory-trained technicians</span>
                                </li>
                                <li className="flex gap-3 text-brand-gray">
                                    <CheckCircle2 size={20} className="text-brand-gold shrink-0" />
                                    <span>Extended parts & labor warranties</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. THE DATA LAYER (FAQ) */}
            <section className="py-24 bg-gray-50">
                <div className="max-w-3xl mx-auto px-4">
                    <h2 className="text-3xl font-serif font-bold text-brand-navy mb-12 text-center">Mini Split FAQs</h2>
                    <div className="space-y-4">
                        {[
                            { q: "Do mini-splits work for heating in New England?", a: "Absolutely. Modern cold-climate mini splits are designed to provide efficient heating even when temperatures drop to -13°F. They are a primary heating source for many local homes." },
                            { q: "How many indoor units can I have on one outdoor unit?", a: "Depending on the outdoor unit's capacity, you can typically connect between 1 to 8 indoor units, allowing for customized comfort in every major room." },
                            { q: "What is the maintenance like for a mini split?", a: "Maintenance is easy but critical. You'll need to clean the air filters every few months and have a professional deep clean the coils once a year to maintain efficiency." },
                            { q: "Can I install a mini split myself?", a: "No. Proper installation requires specialized tools for handling refrigerant lines and electrical work. DIY installation also voids the manufacturer warranty." }
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
                    <h2 className="text-3xl font-serif font-bold text-brand-navy mb-6">Experience Better Comfort</h2>
                    <p className="text-brand-gray mb-8">Schedule a free design consultation and discover the ductless advantage for your home.</p>

                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Button size="lg">Book Design Consultation</Button>
                        <Button variant="outline-navy" size="lg">Get Instant Rebate Info</Button>
                    </div>
                </div>
            </section>
        </div>
    );
};

import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, ShieldCheck, Snowflake, FileText, Star, Plus, Minus, Droplets, Wind } from 'lucide-react';
import { Button } from '../../components/ui/Button';
import { SEO } from '../../components/SEO';

export const AirConditioner: React.FC = () => {
    const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

    return (
        <div className="bg-white">
            <SEO
                title="AC Repair & Installation Boston | central Air Conditioning"
                description="Professional air conditioning repair, installation, and maintenance in Greater Boston. Keep your home cool with A.W. Puma's expert HVAC services."
                keywords="AC repair Boston, central air conditioning installation, HVAC cooling experts, air conditioning service Massachusetts"
                canonical="https://awpumahome.com/services/air-conditioning"
            />
            {/* 1. THE PROMISE (HERO) */}
            <section className="relative min-h-[55vh] flex flex-col justify-center items-center pt-24 pb-16">
                <div className="absolute inset-0 z-0" style={{ backgroundColor: '#153760' }} />

                <div className="relative z-10 max-w-7xl mx-auto px-4 w-full text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-gold/20 border border-brand-gold/50 backdrop-blur-md mb-8">
                        <span className="text-sm font-bold text-brand-gold uppercase tracking-widest">Premium Cooling Mastery</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-serif font-bold tracking-tight text-white mb-6 leading-tight drop-shadow-2xl">
                        Expert Central AC <br />
                        <span className="text-brand-gold">& Cooling Care</span>
                    </h1>

                    <p className="text-xl text-gray-200 mb-10 max-w-2xl mx-auto leading-relaxed font-light">
                        Stay cool and dry through the humid Massachusetts summers with engineering-grade air conditioning installation and precision repair.
                    </p>

                    <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                        <Button size="lg" icon={<ArrowRight size={18} />}>
                            Schedule AC Tune-Up
                        </Button>
                        <Button variant="outline" size="lg">
                            Get New System Quote
                        </Button>
                    </div>
                </div>
            </section>

            {/* 2. THE EMPATHY LAYER (PAS) */}
            <section className="py-24 bg-gray-50">
                <div className="max-w-4xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-navy mb-6">Humidity Is The Real Enemy</h2>
                        <p className="text-lg text-brand-gray leading-relaxed">
                            It's not just the heat—it's the damp, heavy air that makes your home feel stifling. A poorly tuned AC unit fails to dehumidify, leading to discomfort and potential mold.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 mb-12">
                        <div className="bg-white p-8 rounded-sm shadow-sm border-l-4 border-brand-cyan">
                            <div className="flex items-center gap-3 mb-4">
                                <Droplets className="text-brand-cyan" size={24} />
                                <h3 className="text-xl font-bold text-brand-navy">That "Sticky" Feeling</h3>
                            </div>
                            <p className="text-brand-gray">
                                If your home feels cold but damp, your system is likely oversized or poorly calibrated. We specialize in precision humidity control.
                            </p>
                        </div>
                        <div className="bg-white p-8 rounded-sm shadow-sm border-l-4 border-brand-cyan">
                            <div className="flex items-center gap-3 mb-4">
                                <Wind className="text-brand-cyan" size={24} />
                                <h3 className="text-xl font-bold text-brand-navy">Poor Air Quality</h3>
                            </div>
                            <p className="text-brand-gray">
                                Dirty coils and neglected filters circulate dust and allergens. Our deep-clean service restores air purity and system efficiency.
                            </p>
                        </div>
                    </div>

                    <div className="bg-brand-navy text-white p-8 rounded-sm text-center">
                        <h3 className="text-2xl font-serif font-bold mb-4">No-Breakdown Guarantee</h3>
                        <p className="text-gray-300 text-lg">
                            Schedule a spring tune-up with us. If your system breaks down during the summer, we'll credit the cost of the tune-up toward your repair.
                        </p>
                    </div>
                </div>
            </section>

            {/* 3. THE COMPETENCE LAYER (3 PILLARS) */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <span className="text-brand-gold font-bold uppercase tracking-widest text-sm mb-2 block">Cooling Mastery</span>
                        <h2 className="text-4xl font-serif font-bold text-brand-navy">High-Performance Air Conditioning</h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-12">
                        {/* Pillar 1: Technical */}
                        <div className="space-y-6">
                            <div className="w-16 h-16 bg-brand-light rounded-full flex items-center justify-center">
                                <Snowflake className="text-brand-navy" size={32} />
                            </div>
                            <h3 className="text-2xl font-bold text-brand-navy">Diagnostic Precision</h3>
                            <ul className="space-y-3">
                                <li className="flex gap-3 text-brand-gray">
                                    <CheckCircle2 size={20} className="text-brand-gold shrink-0" />
                                    <span>Refrigerant leak detection</span>
                                </li>
                                <li className="flex gap-3 text-brand-gray">
                                    <CheckCircle2 size={20} className="text-brand-gold shrink-0" />
                                    <span>Compressor & coil repair</span>
                                </li>
                                <li className="flex gap-3 text-brand-gray">
                                    <CheckCircle2 size={20} className="text-brand-gold shrink-0" />
                                    <span>Thermostat & smart home sync</span>
                                </li>
                            </ul>
                        </div>

                        {/* Pillar 2: Financial */}
                        <div className="space-y-6">
                            <div className="w-16 h-16 bg-brand-light rounded-full flex items-center justify-center">
                                <FileText className="text-brand-navy" size={32} />
                            </div>
                            <h3 className="text-2xl font-bold text-brand-navy">Efficiency Upgrades</h3>
                            <ul className="space-y-3">
                                <li className="flex gap-3 text-brand-gray">
                                    <CheckCircle2 size={20} className="text-brand-gold shrink-0" />
                                    <span>High-SEER2 system installs</span>
                                </li>
                                <li className="flex gap-3 text-brand-gray">
                                    <CheckCircle2 size={20} className="text-brand-gold shrink-0" />
                                    <span>Energy Star® certification</span>
                                </li>
                                <li className="flex gap-3 text-brand-gray">
                                    <CheckCircle2 size={20} className="text-brand-gold shrink-0" />
                                    <span>Utility company rebate support</span>
                                </li>
                            </ul>
                        </div>

                        {/* Pillar 3: Regulatory */}
                        <div className="space-y-6">
                            <div className="w-16 h-16 bg-brand-light rounded-full flex items-center justify-center">
                                <ShieldCheck className="text-brand-navy" size={32} />
                            </div>
                            <h3 className="text-2xl font-bold text-brand-navy">Safe Operation</h3>
                            <ul className="space-y-3">
                                <li className="flex gap-3 text-brand-gray">
                                    <CheckCircle2 size={20} className="text-brand-gold shrink-0" />
                                    <span>EPA-Certified technicians</span>
                                </li>
                                <li className="flex gap-3 text-brand-gray">
                                    <CheckCircle2 size={20} className="text-brand-gold shrink-0" />
                                    <span>Proper refrigerant reclamation</span>
                                </li>
                                <li className="flex gap-3 text-brand-gray">
                                    <CheckCircle2 size={20} className="text-brand-gold shrink-0" />
                                    <span>Strict mounting & code safety</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. THE DATA LAYER (FAQ) */}
            <section className="py-24 bg-gray-50">
                <div className="max-w-3xl mx-auto px-4">
                    <h2 className="text-3xl font-serif font-bold text-brand-navy mb-12 text-center">AC Questions Answered</h2>
                    <div className="space-y-4">
                        {[
                            { q: "Why is my AC running but not cooling?", a: "This is often caused by a dirty air filter, a refrigerant leak, or a failing compressor. It's best to turn the system off and call for a professional diagnostic to prevent further damage." },
                            { q: "How often should I change my AC filters?", a: "During the summer peak, you should check your filters every 30 days. If you have pets or allergies, switching to a high-MERV filter every 2-3 months is recommended." },
                            { q: "What is SEER and why does it matter?", a: "SEER stands for Seasonal Energy Efficiency Ratio. Higher SEER numbers mean the unit uses less electricity to cool your home. Modern units are typically 16-22 SEER." },
                            { q: "Do you install central AC in homes with no ducts?", a: "Yes, but it requires significant work. For homes without existing ductwork, we often recommend high-efficiency mini-splits as a more cost-effective and less invasive solution." }
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
                    <h2 className="text-3xl font-serif font-bold text-brand-navy mb-6">Don't Get Stuck In The Heat</h2>
                    <p className="text-brand-gray mb-8">Beat the summer rush. Schedule your AC maintenance or get a free replacement quote now.</p>

                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Button size="lg">Book AC Service</Button>
                        <Button variant="outline-navy" size="lg">Request Installation Quote</Button>
                    </div>
                </div>
            </section>
        </div>
    );
};

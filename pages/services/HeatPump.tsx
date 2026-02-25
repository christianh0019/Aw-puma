import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, ShieldCheck, ThermometerSun, FileText, Star, Plus, Minus, Home, Zap } from 'lucide-react';
import { Button } from '../../components/ui/Button';
import { SEO } from '../../components/SEO';

export const HeatPump: React.FC = () => {
    const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

    return (
        <div className="bg-white">
            <SEO
                title="Heat Pump Installation Massachusetts | Ductless Mini-Splits"
                description="Save on energy bills with energy-efficient heat pump installation in Greater Boston. Expert ductless mini-split solutions for heating and cooling."
                keywords="heat pump installation Massachusetts, ductless mini-splits, energy-efficient heating, heat pump repair Boston"
                canonical="https://awpumahome.com/services/heat-pumps"
            />
            {/* 1. THE PROMISE (HERO) */}
            <section className="relative min-h-[55vh] flex flex-col justify-center items-center pt-24 pb-16">
                <div className="absolute inset-0 z-0" style={{ backgroundColor: '#153760' }} />

                <div className="relative z-10 max-w-7xl mx-auto px-4 w-full text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-gold/20 border border-brand-gold/50 backdrop-blur-md mb-8">
                        <span className="text-sm font-bold text-brand-gold uppercase tracking-widest">Year-Round Efficiency</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-serif font-bold tracking-tight text-white mb-6 leading-tight drop-shadow-2xl">
                        Clean Heating <br />
                        <span className="text-brand-gold">& Cooling</span>
                    </h1>

                    <p className="text-xl text-gray-200 mb-10 max-w-2xl mx-auto leading-relaxed font-light">
                        Upgrade to a high-efficiency heat pump and enjoy whisper-quiet heating and cooling while saving thousands with Mass Save® rebates.
                    </p>

                    <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                        <Button size="lg" icon={<ArrowRight size={18} />}>
                            Get $10k Rebate Quote
                        </Button>
                        <Button variant="outline" size="lg">
                            How Heat Pumps Work
                        </Button>
                    </div>
                </div>
            </section>

            {/* 2. THE EMPATHY LAYER (PAS) */}
            <section className="py-24 bg-gray-50">
                <div className="max-w-4xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-navy mb-6">Transition to the Future of Home Comfort</h2>
                        <p className="text-lg text-brand-gray leading-relaxed">
                            Stop relying on volatile oil and gas prices. Modern heat pumps provide stable, electric-powered comfort even in the harshest New England winters.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 mb-12">
                        <div className="bg-white p-8 rounded-sm shadow-sm border-l-4 border-brand-green">
                            <div className="flex items-center gap-3 mb-4">
                                <Zap className="text-brand-green" size={24} />
                                <h3 className="text-xl font-bold text-brand-navy">High Energy Costs</h3>
                            </div>
                            <p className="text-brand-gray">
                                Fossil fuel prices are unpredictable. Heat pumps offer superior efficiency, often providing 3 units of heat for every 1 unit of electricity used.
                            </p>
                        </div>
                        <div className="bg-white p-8 rounded-sm shadow-sm border-l-4 border-brand-green">
                            <div className="flex items-center gap-3 mb-4">
                                <Home className="text-brand-green" size={24} />
                                <h3 className="text-xl font-bold text-brand-navy">Uneven Temperatures</h3>
                            </div>
                            <p className="text-brand-gray">
                                Ditch the drafty rooms. Heat pumps provide consistent, gentle airflow that eliminates hot and cold spots throughout your home.
                            </p>
                        </div>
                    </div>

                    <div className="bg-brand-navy text-white p-8 rounded-sm text-center">
                        <h3 className="text-2xl font-serif font-bold mb-4">The $10,000 Advantage</h3>
                        <p className="text-gray-300 text-lg">
                            As a Mass Save® participating contractor, we help you secure the maximum <strong>$10,000 whole-home rebate</strong> and 0% interest financing for your upgrade.
                        </p>
                    </div>
                </div>
            </section>

            {/* 3. THE COMPETENCE LAYER (3 PILLARS) */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <span className="text-brand-gold font-bold uppercase tracking-widest text-sm mb-2 block">Heat Pump Mastery</span>
                        <h2 className="text-4xl font-serif font-bold text-brand-navy">Engineering The Perfect Climate</h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-12">
                        {/* Pillar 1: Technical */}
                        <div className="space-y-6">
                            <div className="w-16 h-16 bg-brand-light rounded-full flex items-center justify-center">
                                <ThermometerSun className="text-brand-navy" size={32} />
                            </div>
                            <h3 className="text-2xl font-bold text-brand-navy">Hyper-Heat® Tech</h3>
                            <ul className="space-y-3">
                                <li className="flex gap-3 text-brand-gray">
                                    <CheckCircle2 size={20} className="text-brand-gold shrink-0" />
                                    <span>Full heating capacity at -5°F</span>
                                </li>
                                <li className="flex gap-3 text-brand-gray">
                                    <CheckCircle2 size={20} className="text-brand-gold shrink-0" />
                                    <span>Inverter-driven compressors</span>
                                </li>
                                <li className="flex gap-3 text-brand-gray">
                                    <CheckCircle2 size={20} className="text-brand-gold shrink-0" />
                                    <span>Dual-fuel hybrid options</span>
                                </li>
                            </ul>
                        </div>

                        {/* Pillar 2: Financial */}
                        <div className="space-y-6">
                            <div className="w-16 h-16 bg-brand-light rounded-full flex items-center justify-center">
                                <FileText className="text-brand-navy" size={32} />
                            </div>
                            <h3 className="text-2xl font-bold text-brand-navy">Financial Incentives</h3>
                            <ul className="space-y-3">
                                <li className="flex gap-3 text-brand-gray">
                                    <CheckCircle2 size={20} className="text-brand-gold shrink-0" />
                                    <span>$10,000 Mass Save® Rebates</span>
                                </li>
                                <li className="flex gap-3 text-brand-gray">
                                    <CheckCircle2 size={20} className="text-brand-gold shrink-0" />
                                    <span>$2,000 Federal Tax Credits</span>
                                </li>
                                <li className="flex gap-3 text-brand-gray">
                                    <CheckCircle2 size={20} className="text-brand-gold shrink-0" />
                                    <span>0% Heat Loan assistance</span>
                                </li>
                            </ul>
                        </div>

                        {/* Pillar 3: Regulatory */}
                        <div className="space-y-6">
                            <div className="w-16 h-16 bg-brand-light rounded-full flex items-center justify-center">
                                <ShieldCheck className="text-brand-navy" size={32} />
                            </div>
                            <h3 className="text-2xl font-bold text-brand-navy">Verified Excellence</h3>
                            <ul className="space-y-3">
                                <li className="flex gap-3 text-brand-gray">
                                    <CheckCircle2 size={20} className="text-brand-gold shrink-0" />
                                    <span>Mass Save® Primary Installer</span>
                                </li>
                                <li className="flex gap-3 text-brand-gray">
                                    <CheckCircle2 size={20} className="text-brand-gold shrink-0" />
                                    <span>Certified Design Specialists</span>
                                </li>
                                <li className="flex gap-3 text-brand-gray">
                                    <CheckCircle2 size={20} className="text-brand-gold shrink-0" />
                                    <span>12-Year Warranty available</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. THE DATA LAYER (FAQ) */}
            <section className="py-24 bg-gray-50">
                <div className="max-w-3xl mx-auto px-4">
                    <h2 className="text-3xl font-serif font-bold text-brand-navy mb-12 text-center">Heat Pump FAQs</h2>
                    <div className="space-y-4">
                        {[
                            { q: "Can a heat pump really replace my furnace in MA?", a: "Yes. Modern cold-climate heat pumps are designed to be the sole heating source for homes in the Northeast, providing efficient warmth even during sub-zero cold snaps." },
                            { q: "How do I qualify for the $10,000 rebate?", a: "To receive the full whole-home rebate, you must transition your home's primary heating source to heat pumps. We assist with the audit and energy assessment required." },
                            { q: "What is the lifespan of an air-source heat pump?", a: "With regular maintenance, a high-quality heat pump system typically lasts 15-20 years. They are robust systems designed for year-round operation." },
                            { q: "Is a heat pump indoor unit noisy?", a: "No. Indoor units typically operate between 19-30 decibels, which is quieter than a whisper. The outdoor units are also significantly quieter than traditional central AC units." }
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
                    <h2 className="text-3xl font-serif font-bold text-brand-navy mb-6">Switch to Zero-Emission Comfort</h2>
                    <p className="text-brand-gray mb-8">Join thousands of Massachusetts homeowners saving on energy with a premium heat pump installation.</p>

                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Button size="lg">Get My Rebate Assessment</Button>
                        <Button variant="outline-navy" size="lg">View System Options</Button>
                    </div>
                </div>
            </section>
        </div>
    );
};

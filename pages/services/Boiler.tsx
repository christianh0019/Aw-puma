import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, ShieldCheck, Construction, FileText, Star, Plus, Minus, Droplets, Thermometer } from 'lucide-react';
import { Button } from '../../components/ui/Button';
import { SEO } from '../../components/SEO';

export const Boiler: React.FC = () => {
    const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

    return (
        <div className="bg-white">
            <SEO
                title="Boiler Service & Installation Massachusetts | High-Efficiency Heating"
                description="Expert boiler repair and installation services in Greater Boston. High-efficiency systems to keep your Massachusetts home warm and cost-effective."
                keywords="boiler service Massachusetts, high-efficiency boiler installation, residential heating, boiler repair Boston"
                canonical="https://awpumahome.com/services/boilers"
            />
            {/* 1. THE PROMISE (HERO) */}
            <section className="relative min-h-[55vh] flex flex-col justify-center items-center pt-24 pb-16">
                <div className="absolute inset-0 z-0" style={{ backgroundColor: '#153760' }} />

                <div className="relative z-10 max-w-7xl mx-auto px-4 w-full text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-gold/20 border border-brand-gold/50 backdrop-blur-md mb-8">
                        <span className="text-sm font-bold text-brand-gold uppercase tracking-widest">Hydronic Heating Experts</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-serif font-bold tracking-tight text-white mb-6 leading-tight drop-shadow-2xl">
                        Expert Boiler Service <br />
                        <span className="text-brand-gold">& Installation</span>
                    </h1>

                    <p className="text-xl text-gray-200 mb-10 max-w-2xl mx-auto leading-relaxed font-light">
                        Restore the gentle, even warmth of your steam or hot water system. engineering-grade boiler repair and high-efficiency combi-system upgrades.
                    </p>

                    <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                        <Button size="lg" icon={<ArrowRight size={18} />}>
                            Schedule Boiler Repair
                        </Button>
                        <Button variant="outline" size="lg">
                            Get Replacement Quote
                        </Button>
                    </div>
                </div>
            </section>

            {/* 2. THE EMPATHY LAYER (PAS) */}
            <section className="py-24 bg-gray-50">
                <div className="max-w-4xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-navy mb-6">Traditional Heating, Modern Precision</h2>
                        <p className="text-lg text-brand-gray leading-relaxed">
                            Many New England boilers are decades old, inefficient, and prone to "banging" pipes or uneven radiator heat. We specialize in tuning these complex systems for maximum silence and efficiency.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 mb-12">
                        <div className="bg-white p-8 rounded-sm shadow-sm border-l-4 border-brand-red">
                            <div className="flex items-center gap-3 mb-4">
                                <Thermometer className="text-brand-red" size={24} />
                                <h3 className="text-xl font-bold text-brand-navy">Radiator Issues</h3>
                            </div>
                            <p className="text-brand-gray">
                                Are some rooms boiling while others are freezing? This is usually a balancing issue in your hydronic system. We restore perfect equilibrium.
                            </p>
                        </div>
                        <div className="bg-white p-8 rounded-sm shadow-sm border-l-4 border-brand-red">
                            <div className="flex items-center gap-3 mb-4">
                                <Droplets className="text-brand-red" size={24} />
                                <h3 className="text-xl font-bold text-brand-navy">System Leaks</h3>
                            </div>
                            <p className="text-brand-gray">
                                Water on the floor or constant pressure loss? Ignoring a boiler leak can lead to catastrophic system failure and water damage.
                            </p>
                        </div>
                    </div>

                    <div className="bg-brand-navy text-white p-8 rounded-sm text-center">
                        <h3 className="text-2xl font-serif font-bold mb-4">Combi-Boiler Specialists</h3>
                        <p className="text-gray-300 text-lg">
                            Ask about our wall-mounted "Combi" systems. They provide both whole-home heating and endless hot water from a single, high-efficiency unit, saving massive space in your basement.
                        </p>
                    </div>
                </div>
            </section>

            {/* 3. THE COMPETENCE LAYER (3 PILLARS) */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <span className="text-brand-gold font-bold uppercase tracking-widest text-sm mb-2 block">Boiler Mastery</span>
                        <h2 className="text-4xl font-serif font-bold text-brand-navy">Specialized Hydronic Engineering</h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-12">
                        {/* Pillar 1: Technical */}
                        <div className="space-y-6">
                            <div className="w-16 h-16 bg-brand-light rounded-full flex items-center justify-center">
                                <Construction className="text-brand-navy" size={32} />
                            </div>
                            <h3 className="text-2xl font-bold text-brand-navy">Hydronic Diagnostics</h3>
                            <ul className="space-y-3">
                                <li className="flex gap-3 text-brand-gray">
                                    <CheckCircle2 size={20} className="text-brand-gold shrink-0" />
                                    <span>Steam boiler skimming & cleaning</span>
                                </li>
                                <li className="flex gap-3 text-brand-gray">
                                    <CheckCircle2 size={20} className="text-brand-gold shrink-0" />
                                    <span>Circulator pump replacement</span>
                                </li>
                                <li className="flex gap-3 text-brand-gray">
                                    <CheckCircle2 size={20} className="text-brand-gold shrink-0" />
                                    <span>Expansion tank & valve service</span>
                                </li>
                            </ul>
                        </div>

                        {/* Pillar 2: Financial */}
                        <div className="space-y-6">
                            <div className="w-16 h-16 bg-brand-light rounded-full flex items-center justify-center">
                                <FileText className="text-brand-navy" size={32} />
                            </div>
                            <h3 className="text-2xl font-bold text-brand-navy">Energy Optimization</h3>
                            <ul className="space-y-3">
                                <li className="flex gap-3 text-brand-gray">
                                    <CheckCircle2 size={20} className="text-brand-gold shrink-0" />
                                    <span>High-efficiency gas conversions</span>
                                </li>
                                <li className="flex gap-3 text-brand-gray">
                                    <CheckCircle2 size={20} className="text-brand-gold shrink-0" />
                                    <span>Mass Save® rebate assistance</span>
                                </li>
                                <li className="flex gap-3 text-brand-gray">
                                    <CheckCircle2 size={20} className="text-brand-gold shrink-0" />
                                    <span>Outdoor reset control install</span>
                                </li>
                            </ul>
                        </div>

                        {/* Pillar 3: Regulatory */}
                        <div className="space-y-6">
                            <div className="w-16 h-16 bg-brand-light rounded-full flex items-center justify-center">
                                <ShieldCheck className="text-brand-navy" size={32} />
                            </div>
                            <h3 className="text-2xl font-bold text-brand-navy">Safety Certified</h3>
                            <ul className="space-y-3">
                                <li className="flex gap-3 text-brand-gray">
                                    <CheckCircle2 size={20} className="text-brand-gold shrink-0" />
                                    <span>Licensed gas fitting & plumbing</span>
                                </li>
                                <li className="flex gap-3 text-brand-gray">
                                    <CheckCircle2 size={20} className="text-brand-gold shrink-0" />
                                    <span>Low-water cutoff safety checks</span>
                                </li>
                                <li className="flex gap-3 text-brand-gray">
                                    <CheckCircle2 size={20} className="text-brand-gold shrink-0" />
                                    <span>ASME-Code vessel inspections</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. THE DATA LAYER (FAQ) */}
            <section className="py-24 bg-gray-50">
                <div className="max-w-3xl mx-auto px-4">
                    <h2 className="text-3xl font-serif font-bold text-brand-navy mb-12 text-center">Boiler FAQs</h2>
                    <div className="space-y-4">
                        {[
                            { q: "Why are my radiators making a loud banging noise?", a: "This is often 'water hammer' caused by trapped air, uneven leveling of your radiators, or issues with the steam vents. We can tune your system to operate silently." },
                            { q: "Is it worth upgrading to a gas-condensing boiler?", a: "Yes. Condensing boilers can reach efficiencies over 95%, compared to 70-80% for older cast iron models. They significantly reduce your monthly heating costs." },
                            { q: "What is a 'Combi-Boiler'?", a: "A combination boiler is a compact, wall-mounted unit that handles both your home's central heating and provides on-demand hot water, eliminating the need for a separate water tank." },
                            { q: "How often should I service my boiler?", a: "At minimum, once a year. For steam boilers, we recommend a mid-winter wellness check to ensure water levels and vents are operating correctly." }
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
                    <h2 className="text-3xl font-serif font-bold text-brand-navy mb-6">Expert Boiler Care You Can Trust</h2>
                    <p className="text-brand-gray mb-8">Don't risk a winter breakdown. Get your boiler professionaly inspected or get a replacement quote today.</p>

                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Button size="lg">Book Boiler Service</Button>
                        <Button variant="outline-navy" size="lg">Request Boiler Inspection</Button>
                    </div>
                </div>
            </section>
        </div>
    );
};

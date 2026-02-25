import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, AlertTriangle, ShieldCheck, Flame, FileText, Star, Plus, Minus, Thermometer } from 'lucide-react';
import { Button } from '../../components/ui/Button';
import { SEO } from '../../components/SEO';

export const Furnace: React.FC = () => {
    const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

    return (
        <div className="bg-white">
            <SEO
                title="Furnace Repair & Installation Boston | Residential Heating"
                description="Expert furnace repair and installation services in Greater Boston. Ensure your home stays warm with A.W. Puma's reliable heating solutions."
                keywords="furnace repair Boston, heating system installation, residential furnace service, furnace maintenance Massachusetts"
                canonical="https://awpumahome.com/services/furnace"
            />
            {/* 1. THE PROMISE (HERO) */}
            <section className="relative min-h-[55vh] flex flex-col justify-center items-center pt-24 pb-16">
                <div className="absolute inset-0 z-0" style={{ backgroundColor: '#153760' }} />

                <div className="relative z-10 max-w-7xl mx-auto px-4 w-full text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-gold/20 border border-brand-gold/50 backdrop-blur-md mb-8">
                        <span className="text-sm font-bold text-brand-gold uppercase tracking-widest">Reliable Winter Heating</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-serif font-bold tracking-tight text-white mb-6 leading-tight drop-shadow-2xl">
                        Expert Furnace Repair <br />
                        <span className="text-brand-gold">& Installation</span>
                    </h1>

                    <p className="text-xl text-gray-200 mb-10 max-w-2xl mx-auto leading-relaxed font-light">
                        Don't let a failing furnace leave your family in the cold. We provide 24/7 emergency service and high-efficiency replacements across Massachusetts.
                    </p>

                    <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                        <Button size="lg" icon={<ArrowRight size={18} />}>
                            Schedule Repair Now
                        </Button>
                        <Button variant="outline" size="lg">
                            Get Installation Quote
                        </Button>
                    </div>
                </div>
            </section>

            {/* 2. THE EMPATHY LAYER (PAS) */}
            <section className="py-24 bg-gray-50">
                <div className="max-w-4xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-navy mb-6">Is Your Furnace Crying For Help?</h2>
                        <p className="text-lg text-brand-gray leading-relaxed">
                            Strange noises, yellow burner flames, or cold spots in your home are signs that your heating system is struggling and potentially dangerous.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 mb-12">
                        <div className="bg-white p-8 rounded-sm shadow-sm border-l-4 border-red-500">
                            <div className="flex items-center gap-3 mb-4">
                                <AlertTriangle className="text-red-500" size={24} />
                                <h3 className="text-xl font-bold text-brand-navy">Safety Concerns</h3>
                            </div>
                            <p className="text-brand-gray">
                                Older furnaces can develop cracks in the heat exchanger, leading to silent but deadly carbon monoxide leaks.
                            </p>
                        </div>
                        <div className="bg-white p-8 rounded-sm shadow-sm border-l-4 border-red-500">
                            <div className="flex items-center gap-3 mb-4">
                                <AlertTriangle className="text-red-500" size={24} />
                                <h3 className="text-xl font-bold text-brand-navy">Inefficiency Traps</h3>
                            </div>
                            <p className="text-brand-gray">
                                An outdated system can waste up to 40% of the energy it consumes, sending your money straight up the chimney.
                            </p>
                        </div>
                    </div>

                    <div className="bg-brand-navy text-white p-8 rounded-sm text-center">
                        <h3 className="text-2xl font-serif font-bold mb-4">Fast Emergency Response</h3>
                        <p className="text-gray-300 text-lg">
                            We prioritize no-heat calls during winter. Our technicians arrive with a fully stocked truck to get your system running in a single visit.
                        </p>
                    </div>
                </div>
            </section>

            {/* 3. THE COMPETENCE LAYER (3 PILLARS) */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <span className="text-brand-gold font-bold uppercase tracking-widest text-sm mb-2 block">Furnace Mastery</span>
                        <h2 className="text-4xl font-serif font-bold text-brand-navy">Heating Solutions That Last</h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-12">
                        {/* Pillar 1: Technical */}
                        <div className="space-y-6">
                            <div className="w-16 h-16 bg-brand-light rounded-full flex items-center justify-center">
                                <Flame className="text-brand-navy" size={32} />
                            </div>
                            <h3 className="text-2xl font-bold text-brand-navy">Precision Repairs</h3>
                            <ul className="space-y-3">
                                <li className="flex gap-3 text-brand-gray">
                                    <CheckCircle2 size={20} className="text-brand-gold shrink-0" />
                                    <span>Blower motor replacement</span>
                                </li>
                                <li className="flex gap-3 text-brand-gray">
                                    <CheckCircle2 size={20} className="text-brand-gold shrink-0" />
                                    <span>Ignitor & flame sensor repair</span>
                                </li>
                                <li className="flex gap-3 text-brand-gray">
                                    <CheckCircle2 size={20} className="text-brand-gold shrink-0" />
                                    <span>Circuit board diagnostics</span>
                                </li>
                            </ul>
                        </div>

                        {/* Pillar 2: Financial */}
                        <div className="space-y-6">
                            <div className="w-16 h-16 bg-brand-light rounded-full flex items-center justify-center">
                                <FileText className="text-brand-navy" size={32} />
                            </div>
                            <h3 className="text-2xl font-bold text-brand-navy">System Optimization</h3>
                            <ul className="space-y-3">
                                <li className="flex gap-3 text-brand-gray">
                                    <CheckCircle2 size={20} className="text-brand-gold shrink-0" />
                                    <span>AFUE rating upgrades</span>
                                </li>
                                <li className="flex gap-3 text-brand-gray">
                                    <CheckCircle2 size={20} className="text-brand-gold shrink-0" />
                                    <span>Mass Save® rebate assistance</span>
                                </li>
                                <li className="flex gap-3 text-brand-gray">
                                    <CheckCircle2 size={20} className="text-brand-gold shrink-0" />
                                    <span>Preventative maintenance plans</span>
                                </li>
                            </ul>
                        </div>

                        {/* Pillar 3: Regulatory */}
                        <div className="space-y-6">
                            <div className="w-16 h-16 bg-brand-light rounded-full flex items-center justify-center">
                                <ShieldCheck className="text-brand-navy" size={32} />
                            </div>
                            <h3 className="text-2xl font-bold text-brand-navy">Certified Safety</h3>
                            <ul className="space-y-3">
                                <li className="flex gap-3 text-brand-gray">
                                    <CheckCircle2 size={20} className="text-brand-gold shrink-0" />
                                    <span>Combustion analysis testing</span>
                                </li>
                                <li className="flex gap-3 text-brand-gray">
                                    <CheckCircle2 size={20} className="text-brand-gold shrink-0" />
                                    <span>Gas line leak detection</span>
                                </li>
                                <li className="flex gap-3 text-brand-gray">
                                    <CheckCircle2 size={20} className="text-brand-gold shrink-0" />
                                    <span>Strict permit & code compliance</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. THE EVIDENCE LAYER (SOCIAL PROOF) */}
            <section className="py-24 bg-brand-navy text-white">
                <div className="max-w-7xl mx-auto px-4">
                    <h2 className="text-4xl font-serif font-bold mb-12 text-center text-white">Warm Homes, Happy Clients</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-white/10 p-8 rounded-sm backdrop-blur-sm">
                            <div className="flex gap-1 mb-4">
                                {[1, 2, 3, 4, 5].map(i => <Star key={i} className="fill-brand-gold text-brand-gold" size={16} />)}
                            </div>
                            <p className="text-gray-200 italic mb-6">"Our furnace died on a Sunday night when it was 10 degrees out. A.W. Puma had a technician at our door in 90 minutes. They got it running and saved us from a frozen pipe disaster!"</p>
                            <div className="font-bold">Mark T.</div>
                            <div className="text-sm text-gray-400">Newton, MA • Emergency Heating Repair</div>
                        </div>
                        <div className="bg-white/10 p-8 rounded-sm backdrop-blur-sm">
                            <div className="flex gap-1 mb-4">
                                {[1, 2, 3, 4, 5].map(i => <Star key={i} className="fill-brand-gold text-brand-gold" size={16} />)}
                            </div>
                            <p className="text-gray-200 italic mb-6">"Professional, clean, and honest. They explained why my old furnace was failing instead of just trying to sell me the most expensive unit. The installation was perfect."</p>
                            <div className="font-bold">Sarah L.</div>
                            <div className="text-sm text-gray-400">Wellesley, MA • Furnace Replacement</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. THE DATA LAYER (FAQ) */}
            <section className="py-24 bg-gray-50">
                <div className="max-w-3xl mx-auto px-4">
                    <h2 className="text-3xl font-serif font-bold text-brand-navy mb-12 text-center">Furnace FAQs</h2>
                    <div className="space-y-4">
                        {[
                            { q: "How long does a typical furnace last?", a: "With proper maintenance, a gas furnace usually lasts 15-20 years. If yours is over 15, it may be time to start planning for a high-efficiency replacement." },
                            { q: "What is an AFUE rating?", a: "AFUE stands for Annual Fuel Utilization Efficiency. It measures how much fuel is converted to heat vs. how much is lost. A 95% AFUE furnace only wastes 5% of the fuel." },
                            { q: "Should I repair or replace my furnace?", a: "If the repair costs more than 50% of the value of a new unit, or if the system is older than 15 years and frequently breaking down, replacement is usually the better investment." },
                            { q: "Do you offer financing for new furnaces?", a: "Yes. In addition to Mass Save® 0% interest loans, we offer flexible internal financing options to fit your budget." }
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
                    <h2 className="text-3xl font-serif font-bold text-brand-navy mb-6">Ready For a Warmer Home?</h2>
                    <p className="text-brand-gray mb-8">Schedule your furnace inspection or get a free installation quote today.</p>

                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Button size="lg">Book Service Appointment</Button>
                        <Button variant="outline-navy" size="lg">Request Free Quote</Button>
                    </div>
                </div>
            </section>
        </div>
    );
};

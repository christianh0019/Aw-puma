import React from 'react';
import { Button } from '../../components/ui/Button';
import { SEO } from '../../components/SEO';
import { Link } from 'react-router-dom';
import { ShieldCheck, Zap, ThermometerSnowflake, Wrench, MapPin, CheckCircle2, DollarSign } from 'lucide-react';
import { ServiceAreas } from '../../components/ServiceAreas';
import { FAQ } from '../../components/FAQ';

export const HeatPump: React.FC = () => {
    const heatPumpFaqs = [
        {
            question: "How does a heat pump work in cold Massachusetts winters?",
            answer: "Modern cold-climate heat pumps are designed to extract heat from outdoor air even when temperatures drop well below zero. They use advanced variable-speed compressors and specialized refrigerants to provide reliable, consistent warmth throughout the harshest MA winters."
        },
        {
            question: "Can a heat pump completely replace my existing furnace or boiler?",
            answer: "Yes! Whole-home electric heat pump conversions are becoming the standard for energy-conscious homeowners. A properly sized system can handle all your heating and cooling needs in a single, ultra-efficient unit, eliminating the need for fossil fuels."
        },
        {
            question: "What is the $16,000 Mass Save® rebate?",
            answer: "The $16,000 rebate is a state-level incentive for qualifying homeowners who switch to a whole-home electric heat pump system. As a certified contractor, we guide you through the required home energy audit and installation process to help you secure the maximum possible rebate."
        },
        {
            question: "Do heat pumps require a backup heating source?",
            answer: "While modern units can handle extreme cold, some homeowners choose to keep their existing fossil-fuel system as a secondary 'dual-fuel' backup. However, for most well-insulated homes, a high-performance heat pump is more than capable of serving as the primary and only heat source."
        }
    ];

    return (
        <div className="bg-white">
            <SEO
                title="Heat Pump Installation | HVAC & Mass Save Contractor MA"
                description="Expert heat pump installation and repair in Massachusetts. As a certified Mass Save Contractor, we help you secure up to $16,000 in rebates."
                keywords="heat pump installation, HVAC contractor Massachusetts, Mass Save contractor, heat pump repair, energy efficient heating"
                canonical="https://awpumahome.com/services/heat-pumps"
            />

            {/* HERO SECTION */}
            <section className="relative min-h-[65vh] flex flex-col justify-center items-center pt-24 pb-20 overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src="/images/heatpump/hero-house.jpg"
                        alt="Modern home exterior with heat pump"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-brand-navy/80" />
                </div>

                <div className="relative z-10 max-w-5xl mx-auto px-4 w-full text-center">
                    <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-brand-navy/60 border border-brand-orange/50 shadow-[0_0_15px_rgba(255,107,0,0.3)] backdrop-blur-md mb-8">
                        <ShieldCheck size={20} className="text-brand-orange" />
                        <span className="text-sm font-bold text-white uppercase tracking-widest">Mass Save® Certified Installer</span>
                    </div>

                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold tracking-tight text-white mb-6 leading-tight drop-shadow-2xl">
                        Heat Pump Installation <br className="hidden md:block" />
                        <span className="text-brand-gold">& Repair in Massachusetts</span>
                    </h1>

                    <p className="text-xl text-gray-200 mb-10 max-w-3xl mx-auto leading-relaxed font-light">
                        Looking for expert heat pump installation and repair in Massachusetts? We provide 24/7 emergency heat pump repair and high-efficiency electric heat pump installations across Suffolk, Middlesex, Norfolk, Plymouth, Essex, Worcester, and Bristol counties. Contact us today for a free estimate and up to $16,000 in Mass Save rebates!
                    </p>

                    {/* Highly Visible Mobile & Desktop $16,000 Rebates Banner below hero text */}
                    <div className="md:hidden bg-brand-orange/20 border border-brand-orange/50 rounded-lg p-4 mb-8 text-white font-bold text-lg">
                        <Zap size={20} className="inline-block mr-2 text-brand-gold relative -top-0.5" />
                        Up to $16,000 in Rebates
                    </div>

                    <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                        <Link to="/contact" className="w-full sm:w-auto">
                            <button className="w-full sm:w-auto px-8 py-4 bg-brand-orange hover:bg-orange-600 text-white text-lg font-bold rounded-md transition-colors shadow-lg flex justify-center items-center gap-2">
                                Free Installation Estimate
                            </button>
                        </Link>
                        <Link to="/contact" className="w-full sm:w-auto">
                            <button className="w-full sm:w-auto px-8 py-4 bg-brand-navy hover:bg-[#153760] text-white text-lg font-bold rounded-md transition-colors shadow-lg flex justify-center items-center gap-2 border border-white/20">
                                <DollarSign size={20} /> View Mass Save Rebates
                            </button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* UP TO $16K REBATES BANNER PROMINENTLY DISPLAYED - DESKTOP ONLY */}
            <div className="bg-brand-navy border-b-4 border-brand-orange py-6 hidden md:block">
                <div className="max-w-7xl mx-auto px-4 flex justify-around items-center text-white">
                    <div className="flex items-center gap-3 font-bold text-2xl"><Zap size={32} className="text-brand-orange" /> Up to $16,000 in Rebates</div>
                    <div className="w-px h-12 bg-white/20"></div>
                    <div className="flex items-center gap-3 font-bold text-2xl"><ShieldCheck size={32} className="text-brand-orange" /> Mass Save® Partner</div>
                </div>
            </div>

            {/* SECTION 2: MASS SAVE */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="order-2 lg:order-1 relative">
                            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                                <img src="/images/heatpump/mass-save-family.jpg" alt="Family reviewing Mass Save savings" className="w-full h-full object-cover" />
                            </div>
                            <div className="absolute -bottom-10 -right-10 bg-brand-navy text-white p-8 rounded-2xl shadow-xl max-w-sm hidden md:block border border-white/10">
                                <div className="text-4xl font-serif font-bold text-brand-gold mb-2">$16,000</div>
                                <div className="font-bold text-xl mb-2">Mass Save® Rebates</div>
                                <div className="text-gray-300 text-sm">Available for whole-home electric heat pump conversions.</div>
                            </div>
                        </div>
                        <div className="order-1 lg:order-2">
                            <span className="text-brand-orange font-bold uppercase tracking-widest text-sm mb-2 flex items-center gap-2 block"><Zap size={18} className="inline-block mb-1" /> Financial Incentives</span>
                            <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-navy mb-6">Maximize Your Savings with 2026 Mass Save Heat Pump Rebates</h2>
                            <p className="text-lg text-brand-gray leading-relaxed mb-6">
                                Upgrade your home's comfort and significantly lower your energy bills. As a certified installer, we help Massachusetts homeowners secure up to <strong>$16,000 in 2026 Mass Save rebates</strong> for whole-home electric heat pump conversions.
                            </p>
                            <p className="text-lg text-brand-gray leading-relaxed mb-8">
                                We handle the installations and guide you through the required paperwork so you can focus on the savings without the stress.
                            </p>
                            <Link to="/contact">
                                <Button variant="primary" size="lg">Get Your Free Estimate</Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 3: REPAIR & MAINTENANCE */}
            <section className="py-24 bg-gray-50 border-y border-gray-200">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <span className="text-brand-orange font-bold uppercase tracking-widest text-sm mb-2 flex items-center gap-2 block"><CheckCircle2 size={18} className="inline-block mb-1" /> Licensed Experts</span>
                            <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-navy mb-6">The High-Efficiency Advantage</h2>
                            <p className="text-lg text-brand-gray leading-relaxed mb-6">
                                Why switch to a heat pump? Unlike traditional systems that generate heat through combustion, heat pumps <strong>move heat</strong>, making them up to 300% efficient.
                            </p>
                            <p className="text-lg text-brand-gray leading-relaxed mb-8">
                                This revolutionary technology allows you to heat and cool your home with a single, emission-free system while qualifying for the largest state-level energy incentives available.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link to="/contact">
                                    <button className="w-full sm:w-auto px-6 py-3 bg-brand-orange hover:bg-orange-600 text-white font-bold rounded-md transition-colors flex justify-center items-center gap-2">
                                        <Zap size={18} /> Explore Sustainable Heating
                                    </button>
                                </Link>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                                <img src="/images/heatpump/repairing-technician.jpg" alt="Technician repairing heat pump in winter" className="w-full h-full object-cover" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 4: FAQ SECTION */}
            <FAQ items={heatPumpFaqs} />

            {/* SECTION 5: SERVICE AREAS (Interactive Map) */}
            <ServiceAreas />

            {/* BOTTOM CTA */}
            <section className="py-24 bg-brand-light">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-4xl font-serif font-bold text-brand-navy mb-6">Ready for Zero-Emission Comfort?</h2>
                    <p className="text-lg text-brand-gray mb-10 max-w-2xl mx-auto">Join the future of heating—without the stress. We handle the paperwork, you enjoy the savings.</p>

                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Link to="/contact" className="w-full sm:w-auto">
                            <button className="w-full sm:w-auto px-8 py-4 bg-brand-orange hover:bg-orange-600 text-white text-lg font-bold rounded-md transition-colors shadow-lg flex justify-center items-center gap-2">
                                Free Installation Estimate
                            </button>
                        </Link>
                        <Link to="/contact" className="w-full sm:w-auto">
                            <button className="w-full sm:w-auto px-8 py-4 bg-brand-navy hover:bg-[#153760] text-white text-lg font-bold rounded-md transition-colors shadow-lg flex justify-center items-center gap-2 border border-white/20">
                                View Efficiency Rebates
                            </button>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

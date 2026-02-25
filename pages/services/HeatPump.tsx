import React from 'react';
import { Button } from '../../components/ui/Button';
import { SEO } from '../../components/SEO';
import { Link } from 'react-router-dom';
import { ShieldCheck, Zap, ThermometerSnowflake, Wrench, MapPin, CheckCircle2 } from 'lucide-react';

export const HeatPump: React.FC = () => {
    return (
        <div className="bg-white">
            <SEO
                title="Heat Pump Installation & Repair Massachusetts | Up to $16,000 Rebates"
                description="Expert heat pump installation and repair in Massachusetts. We provide 24/7 emergency heat pump repair and help you secure up to $16,000 in Mass Save rebates."
                keywords="heat pump installation, heat pump repair Massachusetts, Mass Save rebates, electric heat pump, 24/7 HVAC repair"
                canonical="https://awpumahome.com/services/heat-pumps"
            />

            {/* HERO SECTION */}
            <section className="relative min-h-[65vh] flex flex-col justify-center items-center pt-24 pb-20 overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop"
                        alt="Modern home exterior"
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
                        <a href="tel:6176183366" className="w-full sm:w-auto">
                            <button className="w-full sm:w-auto px-8 py-4 bg-brand-orange hover:bg-orange-600 text-white text-lg font-bold rounded-md transition-colors shadow-lg flex justify-center items-center gap-2">
                                Call Now
                            </button>
                        </a>
                        <Link to="/contact" className="w-full sm:w-auto">
                            <button className="w-full sm:w-auto px-8 py-4 bg-[#10b981] hover:bg-[#059669] text-white text-lg font-bold rounded-md transition-colors shadow-lg flex justify-center items-center gap-2">
                                Book Online
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
                    <div className="flex items-center gap-3 font-bold text-2xl"><Wrench size={32} className="text-brand-orange" /> 24/7 Emergency Repair</div>
                </div>
            </div>

            {/* SECTION 2: MASS SAVE */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="order-2 lg:order-1 relative">
                            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                                <img src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2070&auto=format&fit=crop" alt="Homeowner reviewing savings" className="w-full h-full object-cover" />
                            </div>
                            <div className="absolute -bottom-10 -right-10 bg-brand-navy text-white p-8 rounded-2xl shadow-xl max-w-sm hidden md:block border border-white/10">
                                <div className="text-4xl font-serif font-bold text-brand-gold mb-2">$16,000</div>
                                <div className="font-bold text-xl mb-2">Mass Save® Rebates</div>
                                <div className="text-gray-300 text-sm">Available for whole-home electric heat pump conversions.</div>
                            </div>
                        </div>
                        <div className="order-1 lg:order-2">
                            <span className="text-[#10b981] font-bold uppercase tracking-widest text-sm mb-2 flex items-center gap-2 block"><Zap size={18} className="inline-block mb-1" /> Financial Incentives</span>
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
                            <span className="text-brand-orange font-bold uppercase tracking-widest text-sm mb-2 flex items-center gap-2 block"><ThermometerSnowflake size={18} className="inline-block mb-1" /> 24/7 Emergency Service</span>
                            <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-navy mb-6">Fast, Reliable Heat Pump Repair & Maintenance</h2>
                            <p className="text-lg text-brand-gray leading-relaxed mb-6">
                                Is your heat pump blowing cold air, icing up during a winter freeze, or making strange grinding noises? <strong>Don't wait.</strong>
                            </p>
                            <p className="text-lg text-brand-gray leading-relaxed mb-8">
                                Our licensed HVAC technicians are on standby 24/7 to diagnose and fix your system fast. We carry parts for all major heat pump brands to restore your home's heat or air conditioning immediately.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <a href="tel:6176183366">
                                    <button className="w-full sm:w-auto px-6 py-3 bg-brand-orange hover:bg-orange-600 text-white font-bold rounded-md transition-colors flex justify-center items-center gap-2">
                                        <Wrench size={18} /> Request Emergency Repair
                                    </button>
                                </a>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="aspect-square rounded-2xl overflow-hidden shadow-lg mt-8">
                                    <img src="https://images.unsplash.com/photo-1621905252472-740e2ddf82e5?q=80&w=2069&auto=format&fit=crop" alt="HVAC Repair" className="w-full h-full object-cover" />
                                </div>
                                <div className="aspect-square rounded-2xl overflow-hidden shadow-lg">
                                    <img src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=2070&auto=format&fit=crop" alt="Technician inspecting system" className="w-full h-full object-cover" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 4: SERVICE AREAS */}
            <section className="py-24 bg-brand-navy text-white">
                <div className="max-w-5xl mx-auto px-4 text-center">
                    <MapPin size={48} className="text-[#10b981] mx-auto mb-6" />
                    <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Massachusetts Counties We Serve</h2>
                    <p className="text-lg text-gray-300 leading-relaxed max-w-2xl mx-auto mb-12">
                        We are proud to provide top-rated, rapid-response heat pump services to homeowners throughout the following areas:
                    </p>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-left max-w-4xl mx-auto">
                        {["Suffolk County", "Middlesex County", "Norfolk County", "Plymouth County", "Essex County", "Worcester County", "Bristol County"].map((county, index) => (
                            <div key={index} className="bg-white/5 border border-white/10 rounded-lg p-4 flex items-center justify-center gap-3 hover:bg-white/10 transition-colors">
                                <CheckCircle2 size={20} className="text-[#10b981] flex-shrink-0" />
                                <span className="font-semibold text-lg">{county}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* BOTTOM CTA */}
            <section className="py-24 bg-brand-light">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-4xl font-serif font-bold text-brand-navy mb-6">Ready for Zero-Emission Comfort?</h2>
                    <p className="text-lg text-brand-gray mb-10 max-w-2xl mx-auto">Join the future of heating—without the stress. We handle the paperwork, you enjoy the savings.</p>

                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Link to="/contact" className="w-full sm:w-auto">
                            <button className="w-full sm:w-auto px-8 py-4 bg-[#10b981] hover:bg-[#059669] text-white text-lg font-bold rounded-md transition-colors shadow-lg flex justify-center items-center gap-2">
                                Book Online
                            </button>
                        </Link>
                        <a href="tel:6176183366" className="w-full sm:w-auto">
                            <button className="w-full sm:w-auto px-8 py-4 bg-brand-orange hover:bg-orange-600 text-white text-lg font-bold rounded-md transition-colors shadow-lg flex justify-center items-center gap-2">
                                Call Now
                            </button>
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

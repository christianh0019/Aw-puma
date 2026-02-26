import React from 'react';
import { Button } from '../../components/ui/Button';
import { SEO } from '../../components/SEO';
import { Link } from 'react-router-dom';
import { ShieldCheck, Flame, Wrench, ThermometerSnowflake, DollarSign, MapPin, CheckCircle2 } from 'lucide-react';

export const Furnace: React.FC = () => {
    return (
        <div className="bg-white">
            <SEO
                title="Emergency Furnace Repair & Replacement Massachusetts | A.W. Puma"
                description="Need urgent furnace repair near you? We provide 24/7 emergency gas and oil furnace repair, seasonal tune-ups, and high-efficiency furnace replacements."
                keywords="furnace repair Massachusetts, emergency heater repair, gas furnace installation, high-efficiency furnace replacement"
                canonical="https://awpumahome.com/services/furnace"
            />

            {/* HERO SECTION */}
            <section className="relative min-h-[65vh] flex flex-col justify-center items-center pt-24 pb-20 overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src="/images/furnace/hero-furnace.jpg"
                        alt="Technician working on a furnace in a clean uniform"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-brand-navy/85" />
                </div>

                <div className="relative z-10 max-w-5xl mx-auto px-4 w-full text-center">
                    <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-brand-navy/60 border border-brand-orange/50 shadow-[0_0_15px_rgba(255,107,0,0.3)] backdrop-blur-md mb-8">
                        <Flame size={20} className="text-brand-orange" />
                        <span className="text-sm font-bold text-white uppercase tracking-widest">24/7 Emergency Response</span>
                    </div>

                    <h1 className="text-4xl md:text-5xl lg:text-7xl font-serif font-bold tracking-tight text-white mb-6 leading-tight drop-shadow-2xl">
                        Emergency Furnace Repair <br className="hidden md:block" />
                        <span className="text-brand-gold">& Replacement in Massachusetts</span>
                    </h1>

                    <p className="text-xl text-gray-200 mb-10 max-w-3xl mx-auto leading-relaxed font-light">
                        Need urgent furnace repair near you? Our certified HVAC technicians provide 24/7 emergency gas and oil furnace repair, seasonal tune-ups, and high-efficiency furnace replacements across Massachusetts. Call now for fast, reliable heating services to restore your home's comfort immediately.
                    </p>

                    {/* Highly Visible Mobile & Desktop Banner below hero text */}
                    <div className="md:hidden bg-brand-orange/20 border border-brand-orange/50 rounded-lg p-4 mb-8 text-white font-bold text-lg">
                        <DollarSign size={20} className="inline-block mr-2 text-brand-gold relative -top-0.5" />
                        Upfront Pricing & Fully Insured
                    </div>

                    <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                        <a href="tel:6176183366" className="w-full sm:w-auto">
                            <button className="w-full sm:w-auto px-8 py-4 bg-brand-orange hover:bg-orange-600 text-white text-lg font-bold rounded-md transition-colors shadow-lg flex justify-center items-center gap-2">
                                Call for Emergency Furnace Repair
                            </button>
                        </a>
                        <Link to="/contact" className="w-full sm:w-auto">
                            <button className="w-full sm:w-auto px-8 py-4 bg-brand-navy hover:bg-[#153760] text-white text-lg font-bold rounded-md transition-colors shadow-lg flex justify-center items-center gap-2 border border-white/20">
                                Get a Replacement Estimate
                            </button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* HIGH VISIBILITY BANNER PROMINENTLY DISPLAYED - DESKTOP ONLY */}
            <div className="bg-brand-navy border-b-4 border-brand-orange py-6 hidden md:block">
                <div className="max-w-7xl mx-auto px-4 flex justify-around items-center text-white">
                    <div className="flex items-center gap-3 font-bold text-2xl"><Flame size={32} className="text-brand-orange" /> 24/7 Emergency Response</div>
                    <div className="w-px h-12 bg-white/20"></div>
                    <div className="flex items-center gap-3 font-bold text-2xl"><DollarSign size={32} className="text-brand-orange" /> Upfront Pricing</div>
                    <div className="w-px h-12 bg-white/20"></div>
                    <div className="flex items-center gap-3 font-bold text-2xl"><ShieldCheck size={32} className="text-brand-orange" /> Fully Licensed & Insured</div>
                </div>
            </div>

            {/* SECTION 2: 24/7 EMERGENCY REPAIR */}
            <section className="py-24 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <span className="text-brand-orange font-bold uppercase tracking-widest text-sm mb-2 flex items-center gap-2 block"><Wrench size={18} className="inline-block mb-1" /> Rapid Deployment</span>
                            <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-navy mb-6">24/7 Emergency Furnace Repair</h2>
                            <p className="text-lg text-brand-gray leading-relaxed mb-6">
                                Woke up to a freezing house? <strong>Don't panic.</strong> If your furnace is blowing cold air, short-cycling, or refusing to ignite, our fully stocked trucks are ready to deploy.
                            </p>
                            <p className="text-lg text-brand-gray leading-relaxed mb-8">
                                We quickly diagnose and fix dirty flame sensors, bad blower motors, tripped pressure switches, and ignition failures to get your heat back on fast.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <a href="tel:6176183366">
                                    <button className="w-full sm:w-auto px-6 py-3 bg-brand-orange hover:bg-orange-600 text-white font-bold rounded-md transition-colors flex justify-center items-center gap-2">
                                        <Flame size={18} /> Restore Heating Now
                                    </button>
                                </a>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                                <img src="/images/furnace/night-technician.jpg" alt="Technician arriving for emergency winter furnace repair" className="w-full h-full object-cover" />
                            </div>
                            <div className="absolute -bottom-6 -left-6 bg-brand-navy p-6 rounded-xl shadow-xl border border-white/10 hidden md:block">
                                <div className="flex items-center gap-4 text-white">
                                    <ShieldCheck size={36} className="text-brand-orange" />
                                    <div>
                                        <div className="font-bold">Trucks Fully Stocked</div>
                                        <div className="text-sm text-gray-300">Fast, first-visit resolutions</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 3: REPLACEMENT & EFFICIENCY */}
            <section className="py-24 bg-white border-y border-gray-200">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="order-2 lg:order-1 relative">
                            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                                <img src="/images/furnace/side-by-side.jpg" alt="Family experiencing efficient heating with a new furnace" className="w-full h-full object-cover" />
                            </div>
                            <div className="absolute -bottom-10 -right-10 bg-brand-light p-8 rounded-2xl shadow-xl max-w-sm hidden md:block border border-gray-200">
                                <div className="text-3xl font-serif font-bold text-brand-navy mb-2">Lower Gas Bills</div>
                                <div className="font-bold text-brand-orange text-xl mb-2">Up to 98% AFUE</div>
                                <div className="text-brand-gray text-sm">Convert nearly all fuel directly into usable home heat.</div>
                            </div>
                        </div>
                        <div className="order-1 lg:order-2">
                            <span className="text-brand-orange font-bold uppercase tracking-widest text-sm mb-2 flex items-center gap-2 block"><ThermometerSnowflake size={18} className="inline-block mb-1" /> Upgrade & Save</span>
                            <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-navy mb-6">High-Efficiency Furnace Installation</h2>
                            <p className="text-lg text-brand-gray leading-relaxed mb-6">
                                Stop wasting money on an outdated, failing heater. We install top-rated, high-efficiency condensing furnaces that dramatically lower your winter gas bills while providing superior, reliable warmth.
                            </p>
                            <p className="text-lg text-brand-gray leading-relaxed mb-8">
                                Contact us for a free estimate and learn how a new furnace pays for itself in energy savings over its lifespan.
                            </p>
                            <Link to="/contact">
                                <Button variant="primary" size="lg">Get a Replacement Estimate</Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 4: SERVICE AREAS */}
            <section className="py-24 bg-brand-navy text-white">
                <div className="max-w-5xl mx-auto px-4 text-center">
                    <MapPin size={48} className="text-brand-orange mx-auto mb-6" />
                    <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Massachusetts Counties We Serve</h2>
                    <p className="text-lg text-gray-300 leading-relaxed max-w-2xl mx-auto mb-12">
                        We deliver emergency furnace repair and expert installation to:
                    </p>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-left max-w-4xl mx-auto mb-12">
                        {["Suffolk County", "Middlesex County", "Norfolk County", "Plymouth County", "Essex County", "Worcester County", "Bristol County"].map((county, index) => (
                            <div key={index} className="bg-white/5 border border-white/10 rounded-lg p-4 flex items-center justify-center gap-3 hover:bg-white/10 transition-colors">
                                <CheckCircle2 size={20} className="text-brand-gold flex-shrink-0" />
                                <span className="font-semibold text-lg">{county}</span>
                            </div>
                        ))}
                    </div>

                    <Link to="/contact" className="inline-block">
                        <Button variant="primary" size="lg">Check Service Availability</Button>
                    </Link>
                </div>
            </section>

            {/* BOTTOM CTA */}
            <section className="py-24 bg-brand-light">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-4xl font-serif font-bold text-brand-navy mb-6">Don't Wait in the Cold</h2>
                    <p className="text-lg text-brand-gray mb-10 max-w-2xl mx-auto">Our fully stocked service vans are on standby in your area. Get your heating restored today.</p>

                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <a href="tel:6176183366" className="w-full sm:w-auto">
                            <button className="w-full sm:w-auto px-8 py-4 bg-brand-orange hover:bg-orange-600 text-white text-lg font-bold rounded-md transition-colors shadow-lg flex justify-center items-center gap-2">
                                Call for Emergency Furnace Repair
                            </button>
                        </a>
                        <Link to="/contact" className="w-full sm:w-auto">
                            <button className="w-full sm:w-auto px-8 py-4 bg-brand-navy hover:bg-[#153760] text-white text-lg font-bold rounded-md transition-colors shadow-lg flex justify-center items-center gap-2">
                                Get a Replacement Estimate
                            </button>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

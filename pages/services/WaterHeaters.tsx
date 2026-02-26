import React from 'react';
import { Button } from '../../components/ui/Button';
import { SEO } from '../../components/SEO';
import { Link } from 'react-router-dom';
import { ShieldCheck, Droplets, Wrench, Flame, MapPin, CheckCircle2 } from 'lucide-react';

export const WaterHeaters: React.FC = () => {
    return (
        <div className="bg-white">
            <SEO
                title="Water Heater Repair & Installation Massachusetts | A.W. Puma"
                description="We install, repair, and flush traditional tank, tankless on-demand, and hybrid heat pump water heaters. 24/7 emergency service in MA."
                keywords="water heater repair Massachusetts, tankless water heater installation, hot water heater replacement, hybrid heat pump water heater"
                canonical="https://awpumahome.com/services/water-heaters"
            />

            {/* HERO SECTION */}
            <section className="relative min-h-[65vh] flex flex-col justify-center items-center pt-24 pb-20 overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=2070&auto=format&fit=crop"
                        alt="Modern utility room highlighting high-end HVAC and water heating equipment"
                        className="w-full h-full object-cover opacity-60"
                    />
                    <div className="absolute inset-0 bg-brand-navy/85" />
                </div>

                <div className="relative z-10 max-w-5xl mx-auto px-4 w-full text-center">
                    <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-brand-navy/60 border border-brand-orange/50 shadow-[0_0_15px_rgba(255,107,0,0.3)] backdrop-blur-md mb-8">
                        <Flame size={20} className="text-brand-orange" />
                        <span className="text-sm font-bold text-white uppercase tracking-widest">Never Run Out of Hot Water</span>
                    </div>

                    <h1 className="text-4xl md:text-5xl lg:text-7xl font-serif font-bold tracking-tight text-white mb-6 leading-tight drop-shadow-2xl">
                        Water Heater Repair <br className="hidden md:block" />
                        <span className="text-brand-gold">& Installation in MA</span>
                    </h1>

                    <p className="text-xl text-gray-200 mb-10 max-w-3xl mx-auto leading-relaxed font-light">
                        Looking for water heater replacement or repair in Massachusetts? We install, repair, and flush traditional tank, tankless on-demand, and hybrid heat pump water heaters. Call us 24/7 for emergency leaks, no hot water, or to upgrade your system for endless hot water across Suffolk, Middlesex, Essex, and surrounding counties.
                    </p>

                    {/* Highly Visible Mobile & Desktop Banner below hero text */}
                    <div className="md:hidden bg-brand-orange/20 border border-brand-orange/50 rounded-lg p-4 mb-8 text-white font-bold text-lg">
                        <Wrench size={20} className="inline-block mr-2 text-brand-gold relative -top-0.5" />
                        Same-Day Replacement
                    </div>

                    <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                        <a href="tel:6176183366" className="w-full sm:w-auto">
                            <button className="w-full sm:w-auto px-8 py-4 bg-brand-orange hover:bg-orange-600 text-white text-lg font-bold rounded-md transition-colors shadow-lg flex justify-center items-center gap-2">
                                Fix My Water Heater
                            </button>
                        </a>
                        <Link to="/contact" className="w-full sm:w-auto">
                            <button className="w-full sm:w-auto px-8 py-4 bg-brand-navy hover:bg-[#153760] text-white text-lg font-bold rounded-md transition-colors shadow-lg flex justify-center items-center gap-2 border border-white/20">
                                Get a Tankless Quote
                            </button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* HIGH VISIBILITY BANNER PROMINENTLY DISPLAYED - DESKTOP ONLY */}
            <div className="bg-brand-navy border-b-4 border-brand-orange py-6 hidden md:block">
                <div className="max-w-7xl mx-auto px-4 flex justify-around items-center text-white">
                    <div className="flex items-center gap-3 font-bold text-2xl"><Wrench size={32} className="text-brand-orange" /> Same-Day Replacement</div>
                    <div className="w-px h-12 bg-white/20"></div>
                    <div className="flex items-center gap-3 font-bold text-2xl"><Droplets size={32} className="text-brand-orange" /> Never Run Out of Hot Water</div>
                </div>
            </div>

            {/* SECTION 2: 24/7 EMERGENCY REPAIR */}
            <section className="py-24 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <span className="text-brand-orange font-bold uppercase tracking-widest text-sm mb-2 flex items-center gap-2 block"><ShieldCheck size={18} className="inline-block mb-1" /> Fast & Reliable</span>
                            <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-navy mb-6">24/7 Emergency Water Heater Repair</h2>
                            <p className="text-lg text-brand-gray leading-relaxed mb-6">
                                Woke up to a freezing cold shower or a flooded basement? We dispatch immediately to fix failing heating elements, faulty thermostats, and catastrophic tank leaks.
                            </p>
                            <p className="text-lg text-brand-gray leading-relaxed mb-8">
                                We also provide professional annual flushing to combat Massachusetts hard water sediment buildup, which destroys tanks from the inside out.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <a href="tel:6176183366">
                                    <button className="w-full sm:w-auto px-6 py-3 bg-brand-orange hover:bg-orange-600 text-white font-bold rounded-md transition-colors flex justify-center items-center gap-2">
                                        <Wrench size={18} /> Fix My Water Heater
                                    </button>
                                </a>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="aspect-square rounded-2xl overflow-hidden shadow-lg mt-8">
                                    <img src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=2070&auto=format&fit=crop" alt="Technician inspecting utility system components" className="w-full h-full object-cover" />
                                </div>
                                <div className="aspect-square rounded-2xl overflow-hidden shadow-lg">
                                    <img src="https://images.unsplash.com/photo-1621905252472-740e2ddf82e5?q=80&w=2069&auto=format&fit=crop" alt="HVAC Repair Tools" className="w-full h-full object-cover" />
                                </div>
                            </div>
                            <div className="absolute -bottom-6 -left-6 bg-brand-navy p-6 rounded-xl shadow-xl border border-white/10 hidden md:block">
                                <div className="flex items-center gap-4 text-white">
                                    <Droplets size={36} className="text-brand-orange" />
                                    <div>
                                        <div className="font-bold">Protect Your Home</div>
                                        <div className="text-sm text-gray-300">Stop catastrophic leaks</div>
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
                            {/* Side-by-side visual representation constructed with grid */}
                            <div className="grid grid-cols-2 gap-4">
                                <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-xl border border-gray-100 relative group">
                                    <img src="https://images.unsplash.com/photo-1581094288338-2314dddb7ece?q=80&w=2070&auto=format&fit=crop" alt="Traditional Tank System" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                                        <span className="text-white font-bold text-sm tracking-widest uppercase">Traditional Tank</span>
                                    </div>
                                </div>
                                <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl border-2 border-brand-orange relative">
                                    <img src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2070&auto=format&fit=crop" alt="Modern efficient box" className="w-full h-full object-cover" />
                                    <div className="absolute top-4 right-4 bg-brand-orange text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-lg">Upgrade</div>
                                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-brand-navy/90 to-transparent p-4">
                                        <span className="text-white font-bold text-sm tracking-widest uppercase">Tankless / Hybrid</span>
                                    </div>
                                </div>
                            </div>

                            <div className="absolute -bottom-10 -right-4 bg-brand-light p-6 rounded-2xl shadow-xl max-w-[280px] hidden md:block border border-gray-200 z-10">
                                <div className="text-2xl font-serif font-bold text-brand-navy mb-2">Mass Save® Rebates</div>
                                <div className="font-bold text-brand-orange text-lg mb-2">Maximize Savings</div>
                                <div className="text-brand-gray text-sm leading-tight">Heat pump models are eligible for massive state energy rebates.</div>
                            </div>
                        </div>
                        <div className="order-1 lg:order-2">
                            <span className="text-brand-orange font-bold uppercase tracking-widest text-sm mb-2 flex items-center gap-2 block"><Flame size={18} className="inline-block mb-1" /> Infinite Supply</span>
                            <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-navy mb-6">Tankless & Heat Pump Water Heater Upgrades</h2>
                            <p className="text-lg text-brand-gray leading-relaxed mb-6">
                                Never run out of hot water again. Upgrade to a space-saving tankless water heater for an infinite hot water supply, or choose an ultra-efficient hybrid heat pump water heater to maximize energy savings.
                            </p>
                            <p className="text-lg text-brand-gray leading-relaxed mb-8">
                                Heat pump water heaters are also highly eligible for massive state energy rebates!
                            </p>
                            <Link to="/contact">
                                <Button variant="primary" size="lg">Get a Tankless Quote</Button>
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
                        We provide rapid water heater repair and installation across:
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
                    <h2 className="text-4xl font-serif font-bold text-brand-navy mb-6">Restore Your Hot Water Fast</h2>
                    <p className="text-lg text-brand-gray mb-10 max-w-2xl mx-auto">From emergency tank leaks to high-efficiency tankless upgrades, our fully stocked trucks are ready to deploy.</p>

                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <a href="tel:6176183366" className="w-full sm:w-auto">
                            <button className="w-full sm:w-auto px-8 py-4 bg-brand-orange hover:bg-orange-600 text-white text-lg font-bold rounded-md transition-colors shadow-lg flex justify-center items-center gap-2">
                                Fix My Water Heater
                            </button>
                        </a>
                        <Link to="/contact" className="w-full sm:w-auto">
                            <button className="w-full sm:w-auto px-8 py-4 bg-brand-navy hover:bg-[#153760] text-white text-lg font-bold rounded-md transition-colors shadow-lg flex justify-center items-center gap-2">
                                Get a Tankless Quote
                            </button>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

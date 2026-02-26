import React from 'react';
import { Button } from '../../components/ui/Button';
import { SEO } from '../../components/SEO';
import { Link } from 'react-router-dom';
import { ShieldCheck, Wind, Snowflake, Wrench, ThermometerSnowflake, Ruler, MapPin, CheckCircle2 } from 'lucide-react';

export const AirConditioner: React.FC = () => {
    return (
        <div className="bg-white">
            <SEO
                title="Central AC Repair & Installation Massachusetts | A.W. Puma"
                description="Get fast, reliable central AC repair, maintenance, and AC installation services in Massachusetts. Expert cooling solutions for your home."
                keywords="AC repair Massachusetts, central air conditioning installation, emergency AC service, air conditioning maintenance"
                canonical="https://awpumahome.com/services/air-conditioning"
            />

            {/* HERO SECTION */}
            <section className="relative min-h-[65vh] flex flex-col justify-center items-center pt-24 pb-20 overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src="/images/ac/hero-ac.jpg"
                        alt="High efficiency modern central air conditioning condenser next to home"
                        className="w-full h-full object-cover"
                    />
                    {/* Cool, refreshing color palette (blues and whites) overlay instead of navy */}
                    <div className="absolute inset-0 bg-blue-900/70" />
                </div>

                <div className="relative z-10 max-w-5xl mx-auto px-4 w-full text-center">
                    <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 border border-blue-300/50 shadow-[0_0_15px_rgba(147,197,253,0.3)] backdrop-blur-md mb-8">
                        <Snowflake size={20} className="text-blue-300" />
                        <span className="text-sm font-bold text-white uppercase tracking-widest">Stay Cool All Summer</span>
                    </div>

                    <h1 className="text-4xl md:text-5xl lg:text-7xl font-serif font-bold tracking-tight text-white mb-6 leading-tight drop-shadow-2xl">
                        Central Air Conditioning <br className="hidden md:block" />
                        <span className="text-blue-300">Repair & Installation in MA</span>
                    </h1>

                    <p className="text-xl text-blue-50 mb-10 max-w-3xl mx-auto leading-relaxed font-light">
                        Get fast, reliable central AC repair, maintenance, and AC installation services in Massachusetts. From frozen coils to complete system replacements, our local experts keep your home cool and comfortable all summer. We proudly serve Suffolk, Middlesex, Norfolk, Plymouth, Essex, Worcester, and Bristol counties.
                    </p>

                    {/* Highly Visible Mobile Banner below hero text */}
                    <div className="md:hidden bg-blue-500/30 border border-blue-400/50 rounded-lg p-4 mb-8 text-white font-bold text-lg backdrop-blur-sm">
                        <Ruler size={20} className="inline-block mr-2 text-blue-200 relative -top-0.5" />
                        Exact Sizing Guarantee
                    </div>

                    <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                        <a href="tel:6176183366" className="w-full sm:w-auto">
                            <button className="w-full sm:w-auto px-8 py-4 bg-brand-orange hover:bg-orange-600 text-white text-lg font-bold rounded-md transition-colors shadow-lg flex justify-center items-center gap-2">
                                Book AC Repair
                            </button>
                        </a>
                        <Link to="/contact" className="w-full sm:w-auto">
                            <button className="w-full sm:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white text-lg font-bold rounded-md transition-colors shadow-lg flex justify-center items-center gap-2 border border-white/10">
                                Free AC Installation Estimate
                            </button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* HIGH VISIBILITY BANNER PROMINENTLY DISPLAYED - DESKTOP ONLY */}
            <div className="bg-blue-900 border-b-4 border-blue-400 py-6 hidden md:block">
                <div className="max-w-7xl mx-auto px-4 flex justify-around items-center text-white">
                    <div className="flex items-center gap-3 font-bold text-2xl"><Snowflake size={32} className="text-blue-400" /> Stay Cool All Summer</div>
                    <div className="w-px h-12 bg-white/20"></div>
                    <div className="flex items-center gap-3 font-bold text-2xl"><Ruler size={32} className="text-blue-400" /> Exact Sizing Guarantee</div>
                </div>
            </div>

            {/* SECTION 2: 24-HOUR EMERGENCY AC REPAIR */}
            <section className="py-24 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <span className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-2 flex items-center gap-2 block"><Wrench size={18} className="inline-block mb-1" /> Rapid Response</span>
                            <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-navy mb-6">24-Hour Emergency AC Repair</h2>
                            <p className="text-lg text-brand-gray leading-relaxed mb-6">
                                Is your AC blowing warm air, making loud noises, or freezing up into a block of ice? <strong>We understand how brutal and humid Massachusetts summers can get.</strong>
                            </p>
                            <p className="text-lg text-brand-gray leading-relaxed mb-8">
                                Our team rapidly fixes refrigerant leaks, clears clogged drain lines, and replaces blown capacitors so you can relax in comfort.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <a href="tel:6176183366">
                                    <button className="w-full sm:w-auto px-6 py-3 bg-brand-orange hover:bg-orange-600 text-white font-bold rounded-md transition-colors flex justify-center items-center gap-2 shadow-md">
                                        <Wrench size={18} /> Call For Emergency Repair
                                    </button>
                                </a>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                                <img src="/images/ac/night-technician.jpg" alt="Technician examining a frozen AC condenser unit at night" className="w-full h-full object-cover" />
                            </div>
                            <div className="absolute -bottom-6 -left-6 bg-blue-900 p-6 rounded-xl shadow-xl border border-white/10 hidden md:block">
                                <div className="flex items-center gap-4 text-white">
                                    <ShieldCheck size={36} className="text-blue-400" />
                                    <div>
                                        <div className="font-bold">Fast Turnarounds</div>
                                        <div className="text-sm text-blue-100">Most repairs done in one visit</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 3: REPLACEMENT & INSTALLATION */}
            <section className="py-24 bg-white border-y border-gray-200">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="order-2 lg:order-1 relative">
                            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                                <img src="/images/ac/tablet-ac.jpg" alt="Technician showing AC replacement options on a tablet to homeowner" className="w-full h-full object-cover" />
                            </div>
                            <div className="absolute -bottom-10 -right-10 bg-blue-50 p-8 rounded-2xl shadow-xl max-w-sm hidden md:block border border-blue-100">
                                <div className="text-3xl font-serif font-bold text-brand-navy mb-2">Perfect Humidity</div>
                                <div className="font-bold text-blue-600 text-xl mb-2">No Short-Cycling</div>
                                <div className="text-brand-gray text-sm">We calculate the exact load required for your home.</div>
                            </div>
                        </div>
                        <div className="order-1 lg:order-2">
                            <span className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-2 flex items-center gap-2 block"><Ruler size={18} className="inline-block mb-1" /> Precision Engineering</span>
                            <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-navy mb-6">Expert AC Replacement & Installation</h2>
                            <p className="text-lg text-brand-gray leading-relaxed mb-6">
                                A properly sized central AC system is the secret to eliminating sticky indoor humidity. We perform precise load calculations to ensure your new air conditioner delivers perfect, energy-efficient cooling without short-cycling.
                            </p>
                            <p className="text-lg text-brand-gray leading-relaxed mb-8">
                                Say goodbye to damp, uncomfortable rooms and sky-high summer electric bills.
                            </p>
                            <Link to="/contact">
                                <Button variant="primary" size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">Free AC Installation Estimate</Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 4: SERVICE AREAS */}
            <section className="py-24 bg-blue-900 text-white">
                <div className="max-w-5xl mx-auto px-4 text-center">
                    <MapPin size={48} className="text-blue-400 mx-auto mb-6" />
                    <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Massachusetts Counties We Serve</h2>
                    <p className="text-lg text-blue-100 leading-relaxed max-w-2xl mx-auto mb-12">
                        Keep your home cool with our trusted AC services across:
                    </p>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-left max-w-4xl mx-auto mb-12">
                        {["Suffolk County", "Middlesex County", "Norfolk County", "Plymouth County", "Essex County", "Worcester County", "Bristol County"].map((county, index) => (
                            <div key={index} className="bg-white/5 border border-white/10 rounded-lg p-4 flex items-center justify-center gap-3 hover:bg-white/10 transition-colors">
                                <CheckCircle2 size={20} className="text-blue-400 flex-shrink-0" />
                                <span className="font-semibold text-lg">{county}</span>
                            </div>
                        ))}
                    </div>

                    <Link to="/contact" className="inline-block">
                        <Button variant="primary" size="lg" className="bg-blue-600 hover:bg-blue-700 text-white border-0">Check Service Availability</Button>
                    </Link>
                </div>
            </section>

            {/* BOTTOM CTA */}
            <section className="py-24 bg-blue-50">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-4xl font-serif font-bold text-brand-navy mb-6">Ready to Beat the Humidity?</h2>
                    <p className="text-lg text-brand-gray mb-10 max-w-2xl mx-auto">Get fast AC repairs or upgrade to a perfectly sized, ultra-efficient cooling system today.</p>

                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <a href="tel:6176183366" className="w-full sm:w-auto">
                            <button className="w-full sm:w-auto px-8 py-4 bg-brand-orange hover:bg-orange-600 text-white text-lg font-bold rounded-md transition-colors shadow-lg flex justify-center items-center gap-2">
                                Book AC Repair
                            </button>
                        </a>
                        <Link to="/contact" className="w-full sm:w-auto">
                            <button className="w-full sm:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white text-lg font-bold rounded-md transition-colors shadow-lg flex justify-center items-center gap-2">
                                Free AC Installation Estimate
                            </button>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

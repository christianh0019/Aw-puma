import React from 'react';
import { Button } from '../../components/ui/Button';
import { SEO } from '../../components/SEO';
import { Link } from 'react-router-dom';
import { ShieldCheck, Flame, Wrench, ArrowUpRight, Droplets, MapPin, CheckCircle2 } from 'lucide-react';

export const Boiler: React.FC = () => {
    return (
        <div className="bg-white">
            <SEO
                title="Boiler Repair & Replacement Massachusetts | Steam & Hot Water"
                description="We specialize in hot water and steam boiler repair, maintenance, and high-efficiency boiler replacement in Massachusetts. 24/7 emergency boiler service."
                keywords="boiler repair Massachusetts, steam boiler service, hot water boiler installation, high-efficiency boiler replacement"
                canonical="https://awpumahome.com/services/boilers"
            />

            {/* HERO SECTION */}
            <section className="relative min-h-[65vh] flex flex-col justify-center items-center pt-24 pb-20 overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src="/images/boiler/boiler-inspection.jpg"
                        alt="Technician inspecting an old boiler in a historic home basement"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-brand-navy/85" />
                </div>

                <div className="relative z-10 max-w-5xl mx-auto px-4 w-full text-center">
                    <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-brand-navy/60 border border-brand-orange/50 shadow-[0_0_15px_rgba(255,107,0,0.3)] backdrop-blur-md mb-8">
                        <Droplets size={20} className="text-brand-orange" />
                        <span className="text-sm font-bold text-white uppercase tracking-widest">Historic Home Heating Experts</span>
                    </div>

                    <h1 className="text-4xl md:text-5xl lg:text-7xl font-serif font-bold tracking-tight text-white mb-6 leading-tight drop-shadow-2xl">
                        Expert Boiler Repair <br className="hidden md:block" />
                        <span className="text-brand-gold">& Replacement in MA</span>
                    </h1>

                    <p className="text-xl text-gray-200 mb-10 max-w-3xl mx-auto leading-relaxed font-light">
                        We specialize in hot water and steam boiler repair, maintenance, and high-efficiency boiler replacement in Massachusetts. Whether you have banging radiators, massive leaks, or no heat, our licensed experts provide 24/7 emergency boiler service to keep your historic or modern home warm.
                    </p>

                    {/* Highly Visible Mobile & Desktop Banner below hero text */}
                    <div className="md:hidden bg-brand-orange/20 border border-brand-orange/50 rounded-lg p-4 mb-8 text-white font-bold text-lg">
                        <Flame size={20} className="inline-block mr-2 text-brand-gold relative -top-0.5" />
                        Steam & Hot Water Specialists
                    </div>

                    <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                        <a href="tel:6176183366" className="w-full sm:w-auto">
                            <button className="w-full sm:w-auto px-8 py-4 bg-brand-orange hover:bg-orange-600 text-white text-lg font-bold rounded-md transition-colors shadow-lg flex justify-center items-center gap-2">
                                Call for Emergency Boiler Repair
                            </button>
                        </a>
                        <Link to="/contact" className="w-full sm:w-auto">
                            <button className="w-full sm:w-auto px-8 py-4 bg-brand-navy hover:bg-[#153760] text-white text-lg font-bold rounded-md transition-colors shadow-lg flex justify-center items-center gap-2 border border-white/20">
                                Schedule Boiler Service
                            </button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* HIGH VISIBILITY BANNER PROMINENTLY DISPLAYED - DESKTOP ONLY */}
            <div className="bg-brand-navy border-b-4 border-brand-orange py-6 hidden md:block">
                <div className="max-w-7xl mx-auto px-4 flex justify-around items-center text-white">
                    <div className="flex items-center gap-3 font-bold text-2xl"><Droplets size={32} className="text-brand-orange" /> Historic Home Heating Experts</div>
                    <div className="w-px h-12 bg-white/20"></div>
                    <div className="flex items-center gap-3 font-bold text-2xl"><Flame size={32} className="text-brand-orange" /> Steam & Hot Water Specialists</div>
                </div>
            </div>

            {/* SECTION 2: 24/7 EMERGENCY REPAIR */}
            <section className="py-24 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <span className="text-brand-orange font-bold uppercase tracking-widest text-sm mb-2 flex items-center gap-2 block"><Wrench size={18} className="inline-block mb-1" /> Licensed Experts</span>
                            <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-navy mb-6">24/7 Steam and Hydronic Boiler Repair</h2>
                            <p className="text-lg text-brand-gray leading-relaxed mb-6">
                                Boiler leaking water or radiators refusing to heat up? From classic cast-iron radiators in historic Massachusetts homes to modern baseboard heating, we fix and maintain all boiler systems.
                            </p>
                            <p className="text-lg text-brand-gray leading-relaxed mb-8">
                                We quickly resolve dangerous pressure issues, water hammer banging, circulator pump failures, and pilot light outages.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <a href="tel:6176183366">
                                    <button className="w-full sm:w-auto px-6 py-3 bg-brand-orange hover:bg-orange-600 text-white font-bold rounded-md transition-colors flex justify-center items-center gap-2">
                                        <Wrench size={18} /> Call For Emergency Repair
                                    </button>
                                </a>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                                <img src="/images/boiler/night-technician.jpg" alt="Technician performing emergency boiler repair" className="w-full h-full object-cover" />
                            </div>
                            <div className="absolute -bottom-6 -left-6 bg-brand-navy p-6 rounded-xl shadow-xl border border-white/10 hidden md:block">
                                <div className="flex items-center gap-4 text-white">
                                    <ShieldCheck size={36} className="text-brand-orange" />
                                    <div>
                                        <div className="font-bold">Fully Licensed</div>
                                        <div className="text-sm text-gray-300">Strict local code compliance</div>
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
                                <img src="/images/boiler/hero-boiler.jpg" alt="Technician installing a new high-efficiency modern modulating-condensing boiler" className="w-full h-full object-cover" />
                            </div>
                            <div className="absolute -bottom-10 -right-10 bg-brand-light p-8 rounded-2xl shadow-xl max-w-sm hidden md:block border border-gray-200">
                                <div className="text-3xl font-serif font-bold text-brand-navy mb-2">Lower Fuel Costs</div>
                                <div className="font-bold text-brand-orange text-xl mb-2">Quiet, Even Heat</div>
                                <div className="text-brand-gray text-sm">Convert your aging behemoth into a modern marvel.</div>
                            </div>
                        </div>
                        <div className="order-1 lg:order-2">
                            <span className="text-brand-orange font-bold uppercase tracking-widest text-sm mb-2 flex items-center gap-2 block"><ArrowUpRight size={18} className="inline-block mb-1" /> Modulating-Condensing</span>
                            <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-navy mb-6">High-Efficiency Boiler Upgrades</h2>
                            <p className="text-lg text-brand-gray leading-relaxed mb-6">
                                Upgrade your aging, inefficient boiler to a modern modulating-condensing unit. Enjoy quiet, even, radiant heat throughout your entire home while significantly slashing your winter fuel costs.
                            </p>
                            <p className="text-lg text-brand-gray leading-relaxed mb-8">
                                We handle the removal of your old heavy tank and ensure all piping meets strict local plumbing codes.
                            </p>
                            <Link to="/contact">
                                <Button variant="primary" size="lg">Schedule Boiler Service</Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section >

            {/* SECTION 4: SERVICE AREAS */}
            < section className="py-24 bg-brand-navy text-white" >
                <div className="max-w-5xl mx-auto px-4 text-center">
                    <MapPin size={48} className="text-brand-orange mx-auto mb-6" />
                    <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Massachusetts Counties We Serve</h2>
                    <p className="text-lg text-gray-300 leading-relaxed max-w-2xl mx-auto mb-12">
                        We are the trusted boiler experts for homeowners in:
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
            </section >

            {/* BOTTOM CTA */}
            < section className="py-24 bg-brand-light" >
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-4xl font-serif font-bold text-brand-navy mb-6">Don't Get Left in the Cold</h2>
                    <p className="text-lg text-brand-gray mb-10 max-w-2xl mx-auto">From historic steam radiators to modern baseboards, our experts are ready to restore your heat immediately.</p>

                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <a href="tel:6176183366" className="w-full sm:w-auto">
                            <button className="w-full sm:w-auto px-8 py-4 bg-brand-orange hover:bg-orange-600 text-white text-lg font-bold rounded-md transition-colors shadow-lg flex justify-center items-center gap-2">
                                Call for Emergency Boiler Repair
                            </button>
                        </a>
                        <Link to="/contact" className="w-full sm:w-auto">
                            <button className="w-full sm:w-auto px-8 py-4 bg-brand-navy hover:bg-[#153760] text-white text-lg font-bold rounded-md transition-colors shadow-lg flex justify-center items-center gap-2">
                                Schedule Boiler Service
                            </button>
                        </Link>
                    </div>
                </div>
            </section >
        </div >
    );
};

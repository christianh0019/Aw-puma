import React from 'react';
import { Button } from '../../components/ui/Button';
import { SEO } from '../../components/SEO';
import { Link } from 'react-router-dom';
import { ShieldCheck, Wind, ThermometerSnowflake, Wrench, MapPin, CheckCircle2 } from 'lucide-react';

export const MiniSplits: React.FC = () => {
    return (
        <div className="bg-white">
            <SEO
                title="Ductless Mini Split Installation & Repair Massachusetts | A.W. Puma"
                description="Professional ductless mini split installation, maintenance, and emergency repair services throughout Massachusetts. Perfect for older homes without ductwork."
                keywords="ductless mini split installation, mini split repair Massachusetts, ductless air conditioning, zoned heating and cooling"
                canonical="https://awpumahome.com/services/mini-splits"
            />

            {/* HERO SECTION */}
            <section className="relative min-h-[65vh] flex flex-col justify-center items-center pt-24 pb-20 overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src="/images/minisplits/hero-minisplit.jpg"
                        alt="Couple enjoying their sleek wall-mounted mini split in a beautifully furnished room"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-brand-navy/80" />
                </div>

                <div className="relative z-10 max-w-5xl mx-auto px-4 w-full text-center">
                    <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-brand-navy/60 border border-brand-orange/50 shadow-[0_0_15px_rgba(255,107,0,0.3)] backdrop-blur-md mb-8">
                        <Wind size={20} className="text-brand-orange" />
                        <span className="text-sm font-bold text-white uppercase tracking-widest">No Ductwork Required</span>
                    </div>

                    <h1 className="text-4xl md:text-5xl lg:text-7xl font-serif font-bold tracking-tight text-white mb-6 leading-tight drop-shadow-2xl">
                        Ductless Mini Split Installation <br className="hidden md:block" />
                        <span className="text-brand-gold">& Repair in Massachusetts</span>
                    </h1>

                    <p className="text-xl text-gray-200 mb-10 max-w-3xl mx-auto leading-relaxed font-light">
                        We offer professional ductless mini split installation, maintenance, and emergency repair services throughout Massachusetts. Perfect for older homes without ductwork, mini splits provide highly efficient, customized zoned heating and cooling. Call us today for rapid, reliable service in Suffolk, Middlesex, Norfolk, Plymouth, Essex, Worcester, and Bristol counties.
                    </p>

                    {/* Highly Visible Mobile & Desktop Banner below hero text */}
                    <div className="md:hidden bg-brand-orange/20 border border-brand-orange/50 rounded-lg p-4 mb-8 text-white font-bold text-lg">
                        <ShieldCheck size={20} className="inline-block mr-2 text-brand-gold relative -top-0.5" />
                        One-Day Installation
                    </div>

                    <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                        <a href="tel:6176183366" className="w-full sm:w-auto">
                            <button className="w-full sm:w-auto px-8 py-4 bg-brand-orange hover:bg-orange-600 text-white text-lg font-bold rounded-md transition-colors shadow-lg flex justify-center items-center gap-2">
                                Schedule Service Now
                            </button>
                        </a>
                        <Link to="/contact" className="w-full sm:w-auto">
                            <button className="w-full sm:w-auto px-8 py-4 bg-brand-navy hover:bg-[#153760] text-white text-lg font-bold rounded-md transition-colors shadow-lg flex justify-center items-center gap-2">
                                Get Your Free Quote
                            </button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* HIGH VISIBILITY BANNER PROMINENTLY DISPLAYED - DESKTOP ONLY */}
            <div className="bg-brand-navy border-b-4 border-brand-orange py-6 hidden md:block">
                <div className="max-w-7xl mx-auto px-4 flex justify-around items-center text-white">
                    <div className="flex items-center gap-3 font-bold text-2xl"><Wind size={32} className="text-brand-orange" /> No Ductwork Required</div>
                    <div className="w-px h-12 bg-white/20"></div>
                    <div className="flex items-center gap-3 font-bold text-2xl"><ShieldCheck size={32} className="text-brand-orange" /> One-Day Installation</div>
                </div>
            </div>

            {/* SECTION 2: CUSTOM ZONED COMFORT */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="order-2 lg:order-1 relative">
                            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                                <img src="/images/minisplits/side-by-side.jpg" alt="Beautifully cooled living room with mini split" className="w-full h-full object-cover" />
                            </div>
                            <div className="absolute -bottom-10 -right-10 bg-brand-navy text-white p-8 rounded-2xl shadow-xl max-w-sm hidden md:block border border-white/10">
                                <div className="text-3xl font-serif font-bold text-brand-gold mb-2">Room by Room</div>
                                <div className="font-bold text-xl mb-2">Total Control</div>
                                <div className="text-gray-300 text-sm">Set specific temperatures for individual zones.</div>
                            </div>
                        </div>
                        <div className="order-1 lg:order-2">
                            <span className="text-brand-orange font-bold uppercase tracking-widest text-sm mb-2 flex items-center gap-2 block"><ThermometerSnowflake size={18} className="inline-block mb-1" /> Precision Cooling</span>
                            <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-navy mb-6">Customized Zoned Comfort for Your Home</h2>
                            <p className="text-lg text-brand-gray leading-relaxed mb-6">
                                Eliminate hot and cold spots forever. Ductless mini splits allow you to control the temperature in individual rooms, saving you massive amounts on your monthly energy bills.
                            </p>
                            <p className="text-lg text-brand-gray leading-relaxed mb-8">
                                Our expert team provides fast, minimally invasive installations—often completed in just a single day—with absolutely no messy ductwork required.
                            </p>
                            <Link to="/contact">
                                <Button variant="primary" size="lg">Get Your Free Quote</Button>
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
                            <span className="text-brand-orange font-bold uppercase tracking-widest text-sm mb-2 flex items-center gap-2 block"><Wrench size={18} className="inline-block mb-1" /> 24/7 Emergency Service</span>
                            <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-navy mb-6">24/7 Mini Split Repair & Maintenance</h2>
                            <p className="text-lg text-brand-gray leading-relaxed mb-6">
                                If your mini split is leaking water down the wall, freezing up on the outdoor unit, or simply failing to turn on, our expert technicians dispatch immediately.
                            </p>
                            <p className="text-lg text-brand-gray leading-relaxed mb-8">
                                We accurately diagnose airflow issues, fix refrigerant leaks, and replace blower motors on the first visit so you can get back to being comfortable.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <a href="tel:6176183366">
                                    <button className="w-full sm:w-auto px-6 py-3 bg-brand-orange hover:bg-orange-600 text-white font-bold rounded-md transition-colors flex justify-center items-center gap-2">
                                        <Wrench size={18} /> Schedule Service Now
                                    </button>
                                </a>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                                <img src="/images/minisplits/night-technician.jpg" alt="Technician inspecting mini split condenser at night" className="w-full h-full object-cover" />
                            </div>
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
                        Our fully stocked trucks are ready to service your ductless mini split systems in:
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
                    <h2 className="text-4xl font-serif font-bold text-brand-navy mb-6">Ready to Eliminate Hot Spots?</h2>
                    <p className="text-lg text-brand-gray mb-10 max-w-2xl mx-auto">Skip the massive ductwork renovations and get precise localized comfort installed in just one day.</p>

                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Link to="/contact" className="w-full sm:w-auto">
                            <button className="w-full sm:w-auto px-8 py-4 bg-brand-navy hover:bg-[#153760] text-white text-lg font-bold rounded-md transition-colors shadow-lg flex justify-center items-center gap-2">
                                Get Your Free Quote
                            </button>
                        </Link>
                        <a href="tel:6176183366" className="w-full sm:w-auto">
                            <button className="w-full sm:w-auto px-8 py-4 bg-brand-orange hover:bg-orange-600 text-white text-lg font-bold rounded-md transition-colors shadow-lg flex justify-center items-center gap-2">
                                Schedule Service Now
                            </button>
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

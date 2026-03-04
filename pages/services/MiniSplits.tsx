import React from 'react';
import { Button } from '../../components/ui/Button';
import { SEO } from '../../components/SEO';
import { Link } from 'react-router-dom';
import { ShieldCheck, Wind, ThermometerSnowflake, Wrench, MapPin, CheckCircle2, Zap, DollarSign } from 'lucide-react';
import { ServiceAreas } from '../../components/ServiceAreas';
import { FAQ } from '../../components/FAQ';

export const MiniSplits: React.FC = () => {
    const miniSplitFaqs = [
        {
            question: "Are mini splits good for whole-home heating and cooling in Massachusetts?",
            answer: "Yes! Modern ductless mini splits are exceptionally efficient and provide precise 'zone control'—allowing you to heat or cool only the rooms you're using. This makes them a perfect solution for homes without existing ductwork, additions, or problematic hot/cold spots."
        },
        {
            question: "How many indoor units can one outdoor unit support?",
            answer: "Depending on the capacity of the outdoor condenser, a single multi-zone system can typically power between 2 and 8 indoor units. This allows for customized comfort across multiple bedrooms, living areas, and even home offices."
        },
        {
            question: "Are there Mass Save® rebates for ductless mini splits?",
            answer: "Absolutely. Mass Save® offers substantial rebates for high-efficiency mini split systems (especially when replacing electric baseboard or oil/propane systems). We'll help you navigate the equipment requirements to ensure your new system qualifies for the maximum incentives."
        },
        {
            question: "Do mini splits require a lot of maintenance?",
            answer: "Like any HVAC system, mini splits need annual professional maintenance. Additionally, we recommend that homeowners check and clean the reusable air filters every 1–3 months to maintain optimal airflow and indoor air quality."
        }
    ];

    return (
        <div className="bg-white">
            <SEO
                title="Mini Split Installation | HVAC & Mass Save Contractor MA"
                description="Professional ductless mini split installation and repair in Massachusetts. Your local HVAC contractor for zoned heating and cooling solutions."
                keywords="mini split installation, ductless mini splits, HVAC contractor Massachusetts, Mass Save contractor, zoned AC repair"
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

            {/* HIGH VISIBILITY BANNER PROMINENTLY DISPLAYED - DESKTOP ONLY */}
            <div className="bg-brand-navy border-b-4 border-brand-orange py-6 hidden md:block">
                <div className="max-w-7xl mx-auto px-4 flex justify-around items-center text-white">
                    <div className="flex items-center gap-3 font-bold text-2xl"><Zap size={32} className="text-brand-orange" /> Energy Efficient Zoning</div>
                    <div className="w-px h-12 bg-white/20"></div>
                    <div className="flex items-center gap-3 font-bold text-2xl"><ShieldCheck size={32} className="text-brand-orange" /> Mass Save® Partner</div>
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
                            <span className="text-brand-orange font-bold uppercase tracking-widest text-sm mb-2 flex items-center gap-2 block"><CheckCircle2 size={18} className="inline-block mb-1" /> Precision Performance</span>
                            <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-navy mb-6">The High-Efficiency Advantage</h2>
                            <p className="text-lg text-brand-gray leading-relaxed mb-6">
                                Why choose mini splits? They offer incredible flexibility. By providing <strong>localized comfort</strong>, you can avoid wasting energy on unoccupied rooms.
                            </p>
                            <p className="text-lg text-brand-gray leading-relaxed mb-8">
                                These systems are quiet, sleek, and exceptionally efficient—delivering the perfect temperature exactly where you need it, when you need it.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link to="/contact">
                                    <button className="w-full sm:w-auto px-6 py-3 bg-brand-orange hover:bg-orange-600 text-white font-bold rounded-md transition-colors flex justify-center items-center gap-2 shadow-md">
                                        <Zap size={18} /> Explore Zoned Comfort
                                    </button>
                                </Link>
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

            {/* SECTION 4: FAQ SECTION */}
            <FAQ items={miniSplitFaqs} />

            {/* SECTION 5: SERVICE AREAS (Interactive Map) */}
            <ServiceAreas />

            {/* BOTTOM CTA */}
            <section className="py-24 bg-brand-light">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-4xl font-serif font-bold text-brand-navy mb-6">Ready to Eliminate Hot Spots?</h2>
                    <p className="text-lg text-brand-gray mb-10 max-w-2xl mx-auto">Skip the massive ductwork renovations and get precise localized comfort installed in just one day.</p>

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

import React from 'react';
import { Button } from '../../components/ui/Button';
import { SEO } from '../../components/SEO';
import { Link } from 'react-router-dom';
import { ShieldCheck, Droplets, Wrench, Flame, MapPin, CheckCircle2, DollarSign } from 'lucide-react';
import { ServiceAreas } from '../../components/ServiceAreas';
import { FAQ } from '../../components/FAQ';

export const WaterHeaters: React.FC = () => {
    const waterHeaterFaqs = [
        {
            question: "How long should a typical water heater last?",
            answer: "Standard tank-style water heaters usually last between 8–12 years. High-efficiency tankless models can last 20 years or more. If your unit is over 10 years old or showing signs of rust, it's a good idea to consider a proactive high-efficiency replacement."
        },
        {
            question: "Should I upgrade to a heat pump water heater?",
            answer: "Highly recommended! Heat pump water heaters are up to 3 times more efficient than standard electric tanks. In Massachusetts, they qualify for significant Mass Save® rebates which can often cover a large portion of the installation cost."
        },
        {
            question: "What is a tankless water heater and is it right for me?",
            answer: "Tankless systems heat water on demand rather than storing it in a large tank. They provide an endless supply of hot water, save significant space, and are more energy-efficient. They are ideal for larger families or homes where space is at a premium."
        },
        {
            question: "Why is my water heater making a popping or rumbling sound?",
            answer: "This is usually caused by sediment buildup at the bottom of the tank. As the water underneath the sediment boils, it pops through the layer of minerals. While flushing the tank can help, persistent noise in an older unit often indicates the tank is at risk of failing."
        }
    ];

    return (
        <div className="bg-white">
            <SEO
                title="Water Heater Repair & Installation | HVAC Contractor MA"
                description="Expert water heater repair and installation in Massachusetts. A.W. Puma is your trusted HVAC contractor for tankless and heat pump water heaters."
                keywords="water heater repair Massachusetts, HVAC contractor, Mass Save contractor, tankless water heater installation, hybrid heat pump water heater"
                canonical="https://awpumahome.com/services/water-heaters"
            />

            {/* HERO SECTION */}
            <section className="relative min-h-[65vh] flex flex-col justify-center items-center pt-24 pb-20 overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src="/images/waterheaters/hero-waterheater.jpg"
                        alt="Technician repairing an electric water heater"
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
                            <span className="text-brand-orange font-bold uppercase tracking-widest text-sm mb-2 flex items-center gap-2 block"><CheckCircle2 size={18} className="inline-block mb-1" /> Expert Performance</span>
                            <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-navy mb-6">The High-Efficiency Advantage</h2>
                            <p className="text-lg text-brand-gray leading-relaxed mb-6">
                                Woke up to a freezing cold shower or a flooded basement? We dispatch immediately to fix failing heating elements, faulty thermostats, and catastrophic tank leaks.
                            </p>
                            <p className="text-lg text-brand-gray leading-relaxed mb-8">
                                We also provide professional annual flushing to combat Massachusetts hard water sediment buildup, which destroys tanks from the inside out.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link to="/contact">
                                    <button className="w-full sm:w-auto px-6 py-3 bg-brand-orange hover:bg-orange-600 text-white font-bold rounded-md transition-colors flex justify-center items-center gap-2">
                                        <Droplets size={18} /> Explore High-Efficiency Tankless
                                    </button>
                                </Link>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                                <img src="/images/waterheaters/night-technician.jpg" alt="Technician inspecting equipment at night" className="w-full h-full object-cover" />
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
                            {/* Single image replacing the side-by-side grid */}
                            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl relative">
                                <img src="/images/waterheaters/tankless-demo.jpg" alt="Technician showing tankless water heater controls to homeowner" className="w-full h-full object-cover" />
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

            {/* SECTION 4: FAQ SECTION */}
            <FAQ items={waterHeaterFaqs} />

            {/* SECTION 5: SERVICE AREAS (Interactive Map) */}
            <ServiceAreas />

            {/* BOTTOM CTA */}
            <section className="py-24 bg-brand-light">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-4xl font-serif font-bold text-brand-navy mb-6">Restore Your Hot Water Fast</h2>
                    <p className="text-lg text-brand-gray mb-10 max-w-2xl mx-auto">From emergency tank leaks to high-efficiency tankless upgrades, our fully stocked trucks are ready to deploy.</p>

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
        </div>
    );
};

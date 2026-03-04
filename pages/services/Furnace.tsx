import React from 'react';
import { Button } from '../../components/ui/Button';
import { SEO } from '../../components/SEO';
import { Link } from 'react-router-dom';
import { ShieldCheck, Flame, Wrench, ThermometerSnowflake, DollarSign, MapPin, CheckCircle2 } from 'lucide-react';
import { ServiceAreas } from '../../components/ServiceAreas';
import { FAQ } from '../../components/FAQ';

export const Furnace: React.FC = () => {
    const furnaceFaqs = [
        {
            question: "How do I know if my furnace needs to be replaced?",
            answer: "If your furnace is over 15–20 years old, requires frequent repairs, or your energy bills are rising despite normal use, it's likely time for a replacement. Signs like uneven heating, strange noises, or a yellow burner flame also indicate it's reaching the end of its lifespan."
        },
        {
            question: "What is AFUE and why does it matter?",
            answer: "AFUE stands for Annual Fuel Utilization Efficiency. It measures how efficiently a furnace converts fuel into heat. A 98% AFUE rating means 98 cents of every dollar spent on fuel becomes heat for your home, with only 2% escaping through the vent. High-efficiency models significantly lower operating costs."
        },
        {
            question: "Are gas furnaces eligible for Mass Save® rebates?",
            answer: "Yes, many high-efficiency gas furnaces are eligible for Mass Save® rebates. However, state incentives are increasingly favoring heat pump technology for whole-home heating. We'll help you navigate the latest rebate requirements to ensure you get the maximum savings possible."
        },
        {
            question: "How often should I have my furnace professionally serviced?",
            answer: "We recommend professional maintenance at least once a year, ideally in the fall before the heavy heating season begins. Regular tuning preserves your warranty, prevents mid-winter breakdowns, and maintains peak efficiency."
        }
    ];

    return (
        <div className="bg-white">
            <SEO
                title="Furnace Repair & Installation | HVAC & Mass Save Contractor MA"
                description="Need a furnace repair or replacement? A.W. Puma is your trusted HVAC and Mass Save contractor for high-efficiency heating in Massachusetts."
                keywords="furnace repair Massachusetts, HVAC contractor, Mass Save contractor, gas furnace installation, heating installation"
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
                    <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-brand-navy/60 border border-brand-orange/50 shadow-[0_0_15px_rgba(255,107,0,0.3)] backdrop-blur-md mb-12">
                        <Flame size={20} className="text-brand-orange" />
                        <span className="text-sm font-bold text-white uppercase tracking-widest">Energy Efficiency Experts</span>
                    </div>

                    <h1 className="text-4xl md:text-5xl lg:text-7xl font-serif font-bold tracking-tight text-white mb-10 leading-tight drop-shadow-2xl">
                        High-Efficiency Furnace <br className="hidden md:block" />
                        <span className="text-brand-gold">Solutions for Massachusetts</span>
                    </h1>

                    <p className="text-xl text-gray-200 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
                        Upgrade to a high-efficiency furnace and transform your home's comfort while slashing energy bills. Our expert HVAC technicians specialize in top-tier installation, ensuring you maximize Mass Save rebates of up to $16,000. Experience the precision and performance of the latest heating technology today.
                    </p>

                    {/* Highly Visible Mobile & Desktop Banner below hero text */}
                    <div className="md:hidden bg-brand-orange/20 border border-brand-orange/50 rounded-lg p-4 mb-8 text-white font-bold text-lg">
                        <DollarSign size={20} className="inline-block mr-2 text-brand-gold relative -top-0.5" />
                        Upfront Pricing & Fully Insured
                    </div>

                    <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
                        <Link to="/contact" className="w-full sm:w-auto">
                            <button className="w-full sm:w-auto px-10 py-5 bg-brand-orange hover:bg-orange-600 text-white text-xl font-bold rounded-md transition-all shadow-xl flex justify-center items-center gap-2 transform hover:scale-105">
                                Get a Replacement Estimate
                            </button>
                        </Link>
                        <Link to="/contact" className="w-full sm:w-auto">
                            <button className="w-full sm:w-auto px-10 py-5 bg-brand-navy hover:bg-[#153760] text-white text-xl font-bold rounded-md transition-all shadow-xl flex justify-center items-center gap-2 border border-white/20 transform hover:scale-105">
                                <DollarSign size={20} /> View Mass Save Rebates
                            </button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* HIGH VISIBILITY BANNER PROMINENTLY DISPLAYED - DESKTOP ONLY */}
            <div className="bg-brand-navy border-b-4 border-brand-orange py-6 hidden md:block">
                <div className="max-w-7xl mx-auto px-4 flex justify-around items-center text-white">
                    <div className="flex items-center gap-3 font-bold text-2xl"><DollarSign size={32} className="text-brand-orange" /> Mass Save Rebates up to $16k</div>
                    <div className="w-px h-12 bg-white/20"></div>
                    <div className="flex items-center gap-3 font-bold text-2xl"><ThermometerSnowflake size={32} className="text-brand-orange" /> 98% AFUE Rating</div>
                    <div className="w-px h-12 bg-white/20"></div>
                    <div className="flex items-center gap-3 font-bold text-2xl"><ShieldCheck size={32} className="text-brand-orange" /> Expert Installation</div>
                </div>
            </div>

            {/* SECTION 2: 24/7 EMERGENCY REPAIR */}
            <section className="py-24 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <span className="text-brand-orange font-bold uppercase tracking-widest text-sm mb-2 flex items-center gap-2 block"><ShieldCheck size={18} className="inline-block mb-1" /> Smart Investment</span>
                            <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-navy mb-6">The High-Efficiency Advantage</h2>
                            <p className="text-lg text-brand-gray leading-relaxed mb-6">
                                Why settle for standard heating when you can have <strong>peak performance?</strong> Modern high-efficiency furnaces don't just keep you warm; they revolutionize how your home consumes energy.
                            </p>
                            <p className="text-lg text-brand-gray leading-relaxed mb-8">
                                By converting up to 98% of fuel directly into heat, these systems virtually eliminate waste, providing consistent comfort and significantly lower monthly utility costs. It's the smartest upgrade for any Massachusetts homeowner.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <a href="tel:6176183366">
                                    <button className="w-full sm:w-auto px-6 py-3 bg-brand-orange hover:bg-orange-600 text-white font-bold rounded-md transition-colors flex justify-center items-center gap-2">
                                        <ThermometerSnowflake size={18} /> Explore Efficient Models
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

            {/* SECTION 4: FAQ SECTION */}
            <FAQ items={furnaceFaqs} />

            {/* SECTION 5: SERVICE AREAS (Interactive Map) */}
            <ServiceAreas />

            {/* BOTTOM CTA */}
            <section className="py-24 bg-brand-light">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-4xl font-serif font-bold text-brand-navy mb-6">Invest in Year-Round Comfort</h2>
                    <p className="text-lg text-brand-gray mb-10 max-w-2xl mx-auto">Don't wait for a mid-winter breakdown. Upgrade to a high-efficiency system today and start saving on every utility bill. Our experts are ready to design your perfect heating solution.</p>

                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <a href="tel:6176183366" className="w-full sm:w-auto">
                            <button className="w-full sm:w-auto px-8 py-4 bg-brand-orange hover:bg-orange-600 text-white text-lg font-bold rounded-md transition-colors shadow-lg flex justify-center items-center gap-2">
                                Get Your Free Estimate
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

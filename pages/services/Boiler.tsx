import React from 'react';
import { Button } from '../../components/ui/Button';
import { SEO } from '../../components/SEO';
import { Link } from 'react-router-dom';
import { ShieldCheck, Flame, Wrench, ArrowUpRight, Droplets, MapPin, CheckCircle2 } from 'lucide-react';
import { ServiceAreas } from '../../components/ServiceAreas';
import { FAQ } from '../../components/FAQ';

export const Boiler: React.FC = () => {
    const boilerFaqs = [
        {
            question: "How do I know if my boiler needs to be replaced?",
            answer: "Key signs include rising energy bills, strange noises like banging or whistling (kettling), frequent leaks, or if your system is over 15 years old. Modern high-efficiency boilers are dramatically more reliable and less expensive to operate than older cast-iron models."
        },
        {
            question: "What is the difference between steam and hot water boilers?",
            answer: "Steam boilers heat water to a boil and send steam through pipes to radiators, while hot water (hydronic) boilers circulate heated water to baseboard heaters or underfloor systems. We specialize in both and understand the unique maintenance needs of each, especially in historic MA homes."
        },
        {
            question: "Are high-efficiency boilers eligible for Mass Save® rebates?",
            answer: "Yes! Many modern condensing boilers qualify for significant Mass Save® rebates and incentives. Our team stays updated on the latest state requirements to help you maximize your financial savings during a new installation."
        },
        {
            question: "Why should I upgrade to a condensing boiler?",
            answer: "Condensing boilers are significantly more efficient—often reaching 95%+ AFUE—because they capture heat from flue gases that would otherwise be wasted. This translates to substantial energy savings and a smaller carbon footprint for your home."
        }
    ];

    return (
        <div className="bg-white">
            <SEO
                title="Boiler Repair & Installation | HVAC & Mass Save Contractor MA"
                description="Specializing in steam and hot water boiler services. A.W. Puma is your expert HVAC and Mass Save contractor for efficient heating."
                keywords="boiler repair Massachusetts, HVAC contractor, Mass Save contractor, steam boiler service, high-efficiency boiler installation"
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
                            <span className="text-brand-orange font-bold uppercase tracking-widest text-sm mb-2 flex items-center gap-2 block"><CheckCircle2 size={18} className="inline-block mb-1" /> Precision Engineering</span>
                            <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-navy mb-6">The High-Efficiency Advantage</h2>
                            <p className="text-lg text-brand-gray leading-relaxed mb-6">
                                Boiler leaking water or radiators refusing to heat up? From classic cast-iron radiators in historic Massachusetts homes to modern baseboard heating, we fix and maintain all boiler systems.
                            </p>
                            <p className="text-lg text-brand-gray leading-relaxed mb-8">
                                We quickly resolve dangerous pressure issues, water hammer banging, circulator pump failures, and pilot light outages.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link to="/contact">
                                    <button className="w-full sm:w-auto px-6 py-3 bg-brand-orange hover:bg-orange-600 text-white font-bold rounded-md transition-colors flex justify-center items-center gap-2">
                                        <ArrowUpRight size={18} /> Explore Efficient Boiler Models
                                    </button>
                                </Link>
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

            {/* SECTION 4: FAQ SECTION */}
            <FAQ items={boilerFaqs} />

            {/* SECTION 5: SERVICE AREAS (Interactive Map) */}
            <ServiceAreas />

            {/* BOTTOM CTA */}
            < section className="py-24 bg-brand-light" >
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-4xl font-serif font-bold text-brand-navy mb-6">Don't Get Left in the Cold</h2>
                    <p className="text-lg text-brand-gray mb-10 max-w-2xl mx-auto">From historic steam radiators to modern baseboards, our experts are ready to restore your heat immediately.</p>

                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Link to="/contact" className="w-full sm:w-auto">
                            <button className="w-full sm:w-auto px-8 py-4 bg-brand-orange hover:bg-orange-600 text-white text-lg font-bold rounded-md transition-colors shadow-lg flex justify-center items-center gap-2">
                                Free Installation Estimate
                            </button>
                        </Link>
                        <Link to="/contact" className="w-full sm:w-auto">
                            <button className="w-full sm:w-auto px-8 py-4 bg-brand-navy hover:bg-[#153760] text-white text-lg font-bold rounded-md transition-colors shadow-lg flex justify-center items-center gap-2">
                                View Efficiency Rebates
                            </button>
                        </Link>
                    </div>
                </div>
            </section >
        </div >
    );
};

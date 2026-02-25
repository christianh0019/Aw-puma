import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, ShieldCheck, Droplets, Plus, Minus, Thermometer, BatteryCharging, AlertTriangle } from 'lucide-react';
import { Button } from '../../components/ui/Button';
import { SEO } from '../../components/SEO';
import { Link } from 'react-router-dom';

export const WaterHeaters: React.FC = () => {
    const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

    return (
        <div className="bg-white">
            <SEO
                title="Water Heater Repair & Tankless Installation Boston | A.W. Puma"
                description="Expert water heater repair, tankless upgrades, and heat pump installations in Greater Boston. Fast emergency service and Mass Save rebate assistance."
                keywords="tank vs tankless water heater, water heater repair Boston, heat pump water heater Massachusetts, 248 CMR 10 plumbing code, noisy water heater repair"
                canonical="https://awpumahome.com/services/water-heaters"
            />
            
            {/* 1. HERO SECTION */}
            <section className="relative min-h-[55vh] flex flex-col justify-center items-center pt-24 pb-16">
                <div className="absolute inset-0 z-0" style={{ backgroundColor: '#153760' }} />

                <div className="relative z-10 max-w-7xl mx-auto px-4 w-full text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-gold/20 border border-brand-gold/50 backdrop-blur-md mb-8">
                        <span className="text-sm font-bold text-brand-gold uppercase tracking-widest">Endless Hot Water Delivery</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-serif font-bold tracking-tight text-white mb-6 leading-tight drop-shadow-2xl">
                        Premium Water <br />
                        <span className="text-brand-gold">Heating Solutions</span>
                    </h1>

                    <p className="text-xl text-gray-200 mb-10 max-w-3xl mx-auto leading-relaxed font-light">
                        Water heaters are high-turnover appliances with an 8 to 12-year lifespan. Whether you're facing a ruptured tank emergency or seeking a highly efficient, endless hot water upgrade, A.W. Puma has the definitive solution.
                    </p>

                    <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                        <Link to="/contact">
                            <Button size="lg">
                                Emergency Repairs
                            </Button>
                        </Link>
                        <Link to="/contact">
                            <Button variant="outline-white" size="lg">
                                Electrification Upgrades
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* 2. THE HARD WATER FACTOR & MAINTENANCE */}
            <section className="py-24 bg-gray-50 border-b border-gray-200">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <span className="text-brand-gold font-bold uppercase tracking-widest text-sm mb-2 block">Localized Knowledge</span>
                            <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-navy mb-6">The Massachusetts Hard Water Factor</h2>
                            <p className="text-lg text-brand-gray leading-relaxed mb-6">
                                High mineral content in our local water supply causes calcium and magnesium sediment to rapidly accumulate at the bottom of traditional water heater tanks. 
                            </p>
                            <p className="text-lg text-brand-gray leading-relaxed mb-8">
                                This thick layer of sediment creates a thermal barrier between the heating element and the water. As a result, you'll hear <strong className="text-brand-navy">alarming popping or rumbling noises</strong> as steam bubbles violently escape from beneath the hardened layer. This drastically reduces the tank's heating capacity and accelerates internal corrosion.
                            </p>
                            
                            <div className="bg-white border-l-4 border-brand-orange p-6 rounded-r-lg shadow-sm">
                                <div className="flex items-start gap-4">
                                    <AlertTriangle className="text-brand-orange shrink-0 mt-1" size={24} />
                                    <div>
                                        <h4 className="font-bold text-brand-navy mb-2">Annual Flushing is Non-Negotiable</h4>
                                        <p className="text-brand-gray text-sm">To combat this regional reality, professional annual tank flushing is a critical maintenance service to remove corrosive sediment, protect the sacrificial anode rod, and prevent catastrophic tank ruptures.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                                <img src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=2070&auto=format&fit=crop" alt="Plumber inspecting a water heater" className="w-full h-full object-cover" />
                            </div>
                            <div className="absolute -bottom-10 -left-10 bg-brand-navy text-white p-8 rounded-2xl shadow-xl max-w-xs hidden md:block border border-white/10">
                                <Droplets size={32} className="text-brand-gold mb-4" />
                                <div className="font-serif font-bold text-2xl mb-2">Preventative Care</div>
                                <div className="text-gray-300 text-sm">Extend your tank's operational lifespan from 8 to 12+ years with proper descaling.</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. TANK VS TANKLESS COMPARISON */}
            <section className="py-24 bg-white">
                <div className="max-w-5xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <span className="text-brand-gold font-bold uppercase tracking-widest text-sm mb-2 block">Comparative Data</span>
                        <h2 className="text-4xl font-serif font-bold text-brand-navy mb-6">The Tank vs. Tankless Debate</h2>
                        <p className="text-lg text-brand-gray max-w-3xl mx-auto">
                            Evaluate the pros, cons, upfront installation costs, and long-term energy savings associated with the two fundamental water heating technologies.
                        </p>
                    </div>

                    <div className="overflow-hidden bg-white border border-gray-200 rounded-2xl shadow-xl">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-brand-navy text-white">
                                    <th className="p-6 text-lg font-serif w-1/4 border-r border-white/20">Feature</th>
                                    <th className="p-6 text-lg font-serif w-3/8 border-r border-white/20">Traditional Storage Tank</th>
                                    <th className="p-6 text-lg font-serif w-3/8">Tankless (On-Demand)</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200 text-sm sm:text-base">
                                <tr>
                                    <th className="p-6 bg-gray-50 font-bold text-brand-navy border-r border-gray-200">Upfront Installed Cost</th>
                                    <td className="p-6 text-brand-gray border-r border-gray-200">Highly cost-effective.<br/><strong>$700 – $2,000</strong></td>
                                    <td className="p-6 text-brand-navy font-bold bg-blue-50/30">Higher initial investment.<br/><strong>$3,200 – $4,500</strong></td>
                                </tr>
                                <tr>
                                    <th className="p-6 bg-gray-50 font-bold text-brand-navy border-r border-gray-200">Hot Water Supply</th>
                                    <td className="p-6 text-brand-gray border-r border-gray-200">Strictly limited capacity based on tank size (e.g., 40 to 80 gallons).</td>
                                    <td className="p-6 text-brand-navy font-bold bg-blue-50/30">Infinite, endless supply of hot water for back-to-back showers.</td>
                                </tr>
                                <tr>
                                    <th className="p-6 bg-gray-50 font-bold text-brand-navy border-r border-gray-200">Energy Efficiency</th>
                                    <td className="p-6 text-brand-gray border-r border-gray-200">Suffers from constant standby heat loss (heating water 24/7).</td>
                                    <td className="p-6 text-brand-navy font-bold bg-blue-50/30">No standby loss. Only heats water precisely when you turn on the tap.</td>
                                </tr>
                                <tr>
                                    <th className="p-6 bg-gray-50 font-bold text-brand-navy border-r border-gray-200">Physical Footprint</th>
                                    <td className="p-6 text-brand-gray border-r border-gray-200">Bulky footprint. Takes up substantial space in basements or utility closets.</td>
                                    <td className="p-6 text-brand-navy font-bold bg-blue-50/30">Wall-mounted design frees up significant physical floor space.</td>
                                </tr>
                                <tr>
                                    <th className="p-6 bg-gray-50 font-bold text-brand-navy border-r border-gray-200">Catastrophic Risk</th>
                                    <td className="p-6 text-brand-gray border-r border-gray-200 text-red-600 font-medium">Susceptible to massive tank ruptures that can flood your property.</td>
                                    <td className="p-6 text-brand-navy font-bold bg-blue-50/30">Entirely eliminates the risk of a catastrophic reservoir burst.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* 4. ELECTRIFICATION & HEAT PUMPS */}
            <section className="py-24 bg-brand-light">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="order-2 lg:order-1">
                            <div className="grid grid-cols-2 gap-4">
                                <img src="https://images.unsplash.com/photo-1584622781564-1da72e0138db?q=80&w=2070&auto=format&fit=crop" alt="Efficient Heat Pump" className="rounded-2xl shadow-lg" />
                                <img src="https://images.unsplash.com/photo-1621905251918-48416bd8575a?q=80&w=2069&auto=format&fit=crop" alt="Home Utility Room" className="rounded-2xl shadow-lg mt-8" />
                            </div>
                        </div>
                        <div className="order-1 lg:order-2">
                            <span className="text-brand-orange font-bold uppercase tracking-widest text-sm mb-2 flex items-center gap-2 block"><BatteryCharging size={18} className="inline-block mb-1" /> The Future of Heating</span>
                            <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-navy mb-6">Hybrid Heat Pump Water Heaters</h2>
                            <p className="text-lg text-brand-gray leading-relaxed mb-6">
                                As Massachusetts shifts toward electrification and away from fossil fuels, hybrid heat pump water heaters represent the premier, highly-efficient solution for forward-thinking homeowners.
                            </p>
                            <p className="text-lg text-brand-gray leading-relaxed mb-8">
                                Rather than generating heat directly, these units pull ambient, existing heat from the surrounding basement air and transfer it into the water tank. This technology demonstrates unparalleled electrical efficiency—often operating at 300% to 400% efficiency compared to standard electric resistance heaters.
                            </p>
                            
                            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                                <h4 className="font-bold text-brand-navy mb-3 flex items-center gap-2"><CheckCircle2 className="text-brand-gold" size={20} /> Lucrative Financial Incentives</h4>
                                <p className="text-brand-gray text-sm leading-relaxed">
                                    Because of their exceptional efficiency, heat pump water heaters are heavily incentivized. By installing one with A.W. Puma, you may be eligible for significant <strong>Mass Save® rebates</strong> and federal <strong>IRA tax credits</strong> that dramatically offset the upfront installation costs.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. CODE COMPLIANCE (248 CMR 10) */}
            <section className="py-20 bg-brand-navy text-white text-center">
                <div className="max-w-4xl mx-auto px-4">
                    <ShieldCheck size={48} className="text-brand-gold mx-auto mb-6" />
                    <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Uncompromising Code Compliance</h2>
                    <p className="text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto">
                        We don't cut corners. Every A.W. Puma installation stringently complies with the complex Massachusetts plumbing codes <strong>(248 CMR 10)</strong>. To ensure absolute safety and system integrity, we mandate the precise installation of required vacuum relief valves, proper exhaust venting systems, and thermal expansion tanks on all modern water heating units.
                    </p>
                </div>
            </section>

            {/* 6. CONVERSATIONAL FAQ */}
            <section className="py-24 bg-gray-50">
                <div className="max-w-3xl mx-auto px-4">
                    <h2 className="text-3xl font-serif font-bold text-brand-navy mb-12 text-center">Frequently Asked Questions</h2>
                    <div className="space-y-4">
                        {[
                            { 
                                q: "Is upgrading to a tankless water heater actually worth the higher cost?", 
                                a: "A tankless water heater is highly recommended if your household frequently runs out of hot water during back-to-back showers or if you need to free up valuable floor space in your utility room. While the initial installation costs are higher, tankless systems generally last longer than traditional tanks and save money over their lifespan by completely eliminating standby energy loss." 
                            },
                            { 
                                q: "Why is my traditional water heater making a loud popping or rumbling noise?", 
                                a: "Loud popping, rumbling, or banging noises from a traditional water heater are caused by a heavy buildup of calcium sediment and minerals at the bottom of the tank. As the heating element attempts to warm the water, steam bubbles become trapped underneath this hardened sediment layer and audibly pop as they violently escape. The tank requires an immediate professional flushing." 
                            },
                            { 
                                q: "How long does a standard traditional tank water heater typically last?", 
                                a: "A traditional storage-tank water heater typically has an operational lifespan of between eight and twelve years. Performing regular, annual maintenance—such as professionally flushing the tank to remove corrosive sediment and inspecting the sacrificial anode rod—is essential to extending the unit's lifespan and maintaining peak heating efficiency." 
                            }
                        ].map((faq, index) => (
                            <div key={index} className="bg-white rounded-lg border border-gray-200 overflow-hidden transition-all duration-300">
                                <button
                                    className="w-full flex items-center justify-between p-6 text-left font-bold text-brand-navy focus:outline-none hover:bg-gray-50 transition-colors"
                                    onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                                >
                                    <span className="text-lg pr-8">{faq.q}</span>
                                    <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-brand-light">
                                        {openFaqIndex === index ? <Minus size={18} className="text-brand-orange" /> : <Plus size={18} className="text-brand-navy" />}
                                    </div>
                                </button>
                                <div 
                                    className={`transition-all duration-300 ease-in-out ${openFaqIndex === index ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}
                                >
                                    <div className="p-6 pt-0 text-brand-gray leading-relaxed text-lg border-t border-gray-100 mt-2">
                                        {faq.a}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 7. SOFT CONVERSION (CTA) */}
            <section className="py-24 bg-white">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-4xl font-serif font-bold text-brand-navy mb-6">Secure Your Hot Water Supply</h2>
                    <p className="text-lg text-brand-gray mb-10 max-w-2xl mx-auto">Whether you're dealing with an emergency rupture or planning a highly-efficient upgrade, our certified plumbers are ready to deploy.</p>

                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Link to="/contact">
                            <Button size="lg" className="w-full sm:w-auto shadow-lg shadow-brand-orange/20">Book Inspection or Repair</Button>
                        </Link>
                        <Link to="/contact">
                            <Button variant="outline-navy" size="lg" className="w-full sm:w-auto">Request Tankless Quote</Button>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

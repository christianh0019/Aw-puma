import React from 'react';
import { Leaf, ArrowRight, DollarSign, Zap, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export const MassSave: React.FC = () => {
    return (
        <section className="py-24 bg-gray-50 border-y border-gray-200 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100">
                    <div className="grid lg:grid-cols-2 gap-0">

                        {/* Left: Content */}
                        <div className="p-10 lg:p-14 flex flex-col justify-center">
                            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-orange/10 text-brand-orange border border-brand-orange/20 text-xs font-bold uppercase tracking-widest mb-6 w-fit">
                                <Leaf size={14} />
                                Energy Savings
                            </div>

                            <h2 className="text-3xl lg:text-5xl font-serif font-bold text-brand-navy mb-6 leading-tight">
                                Save Thousands with <br className="hidden lg:block" />
                                <a
                                    href="https://www.masssave.com/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-brand-orange hover:text-orange-600 underline decoration-2 underline-offset-4"
                                >
                                    Mass Save®
                                </a>
                            </h2>

                            <p className="text-brand-gray text-lg leading-relaxed mb-8">
                                Massachusetts homeowners can access significant rebates and incentives when upgrading
                                to energy-efficient equipment. A.W. Puma is a qualified contractor who handles the
                                entire rebate process for you.
                            </p>

                            <div className="grid grid-cols-2 gap-6 mb-10">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-brand-light flex items-center justify-center flex-shrink-0">
                                        <DollarSign size={24} className="text-brand-orange" />
                                    </div>
                                    <div>
                                        <div className="font-bold text-brand-navy text-lg">Up to $10,000</div>
                                        <div className="text-sm text-brand-gray">In available rebates</div>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-brand-light flex items-center justify-center flex-shrink-0">
                                        <Zap size={24} className="text-brand-orange" />
                                    </div>
                                    <div>
                                        <div className="font-bold text-brand-navy text-lg">0% Financing</div>
                                        <div className="text-sm text-brand-gray">Up to 84 months</div>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <Link to="/energy-assessment-mass-save">
                                    <button className="inline-flex items-center justify-center w-full sm:w-auto gap-2 bg-brand-orange hover:bg-orange-600 text-white font-bold px-8 py-4 rounded-lg transition-colors shadow-lg hover:shadow-xl text-lg">
                                        Learn About Mass Save® Rebates
                                        <ArrowRight size={20} />
                                    </button>
                                </Link>
                            </div>
                        </div>

                        {/* Right: Visual */}
                        <div className="bg-brand-navy p-10 lg:p-14 flex flex-col justify-center text-white relative">
                            {/* Abstract Pattern overlay */}
                            <div className="absolute inset-0 opacity-5" style={{
                                backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E")`,
                            }} />
                            <div className="relative z-10">
                                <h3 className="text-3xl font-serif font-bold mb-8 text-white">Qualifying Equipment</h3>
                                <ul className="space-y-4 text-lg text-gray-200">
                                    <li className="flex items-center gap-3">
                                        <CheckCircle2 size={24} className="text-brand-gold flex-shrink-0" />
                                        Heat Pumps & Mini Splits
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <CheckCircle2 size={24} className="text-brand-gold flex-shrink-0" />
                                        High-Efficiency Furnaces
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <CheckCircle2 size={24} className="text-brand-gold flex-shrink-0" />
                                        Tankless Water Heaters
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <CheckCircle2 size={24} className="text-brand-gold flex-shrink-0" />
                                        High-Efficiency Boilers
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <CheckCircle2 size={24} className="text-brand-gold flex-shrink-0" />
                                        Smart Thermostats
                                    </li>
                                </ul>
                                <div className="mt-10 p-6 bg-white/10 rounded-xl border border-white/20 backdrop-blur-sm">
                                    <p className="font-bold text-white text-xl mb-1">We handle the paperwork.</p>
                                    <p className="text-brand-gold text-lg">You get the savings.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

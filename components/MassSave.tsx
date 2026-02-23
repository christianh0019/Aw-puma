import React from 'react';
import { Leaf, ArrowRight, DollarSign, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

export const MassSave: React.FC = () => {
    return (
        <section className="py-20 bg-gradient-to-br from-green-50 to-emerald-50 relative overflow-hidden">
            {/* Accent */}
            <div className="absolute top-0 right-0 w-72 h-72 bg-green-200/30 rounded-full blur-[100px]" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="bg-white rounded-2xl shadow-card-hover overflow-hidden border border-green-100">
                    <div className="grid lg:grid-cols-2 gap-0">

                        {/* Left: Content */}
                        <div className="p-10 lg:p-14 flex flex-col justify-center">
                            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-100 text-green-700 text-xs font-bold uppercase tracking-wide mb-6 w-fit">
                                <Leaf size={14} />
                                Energy Savings
                            </div>

                            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-brand-navy mb-4">
                                Save Thousands with{' '}
                                <a
                                    href="https://www.masssave.com/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-green-600 hover:text-green-700 underline decoration-2 underline-offset-4"
                                >
                                    Mass Save®
                                </a>
                            </h2>

                            <p className="text-brand-gray text-lg leading-relaxed mb-8">
                                Massachusetts homeowners can access significant rebates and incentives when upgrading
                                to energy-efficient equipment. A.W. Puma is a qualified contractor who handles the
                                entire rebate process for you.
                            </p>

                            <div className="grid grid-cols-2 gap-4 mb-8">
                                <div className="flex items-start gap-3">
                                    <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center flex-shrink-0">
                                        <DollarSign size={20} className="text-green-600" />
                                    </div>
                                    <div>
                                        <div className="font-bold text-brand-navy text-sm">Up to $10,000+</div>
                                        <div className="text-xs text-brand-gray-light">In available rebates</div>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center flex-shrink-0">
                                        <Zap size={20} className="text-green-600" />
                                    </div>
                                    <div>
                                        <div className="font-bold text-brand-navy text-sm">0% Financing</div>
                                        <div className="text-xs text-brand-gray-light">On qualifying equipment</div>
                                    </div>
                                </div>
                            </div>

                            <Link to="/energy-assessment-mass-save">
                                <button className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold px-6 py-3 rounded-lg transition-colors shadow-md hover:shadow-lg">
                                    Learn About Mass Save® Rebates
                                    <ArrowRight size={16} />
                                </button>
                            </Link>
                        </div>

                        {/* Right: Visual */}
                        <div className="bg-gradient-to-br from-green-600 to-emerald-700 p-10 lg:p-14 flex flex-col justify-center text-white relative">
                            <div className="absolute inset-0 opacity-10" style={{
                                backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E")`,
                            }} />
                            <div className="relative z-10">
                                <div className="text-6xl font-serif font-bold mb-4">💡</div>
                                <h3 className="text-2xl font-serif font-bold mb-4">Qualifying Equipment</h3>
                                <ul className="space-y-3 text-green-50">
                                    <li className="flex items-center gap-2">
                                        <div className="w-1.5 h-1.5 rounded-full bg-green-300" />
                                        Heat Pumps & Mini Splits
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <div className="w-1.5 h-1.5 rounded-full bg-green-300" />
                                        High-Efficiency Furnaces
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <div className="w-1.5 h-1.5 rounded-full bg-green-300" />
                                        Tankless Water Heaters
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <div className="w-1.5 h-1.5 rounded-full bg-green-300" />
                                        Insulation & Weatherization
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <div className="w-1.5 h-1.5 rounded-full bg-green-300" />
                                        Smart Thermostats
                                    </li>
                                </ul>
                                <p className="mt-6 text-sm text-green-200 italic">
                                    We handle the paperwork — you get the savings.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

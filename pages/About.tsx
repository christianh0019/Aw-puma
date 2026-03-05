import React from 'react';
import { Shield, Clock, HeartHandshake, Wrench, ThermometerSun, DollarSign } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { SEO } from '../components/SEO';

export const About: React.FC = () => {
    return (
        <div className="bg-white">
            <SEO
                title="About A.W. Puma Home Services | HVAC & Mass Save Contractor"
                description="Learn about A.W. Puma's history as a leading HVAC contractor in Greater Boston. Expert heat pump installation and Mass Save energy solutions."
                keywords="about A.W. Puma, HVAC contractor Boston, Mass Save contractor Massachusetts, heat pump specialists, A.W. Puma mission"
                canonical="https://awpumahome.com/about"
            />
            {/* 1. HERO SECTION */}
            <section className="relative pt-24 pb-16 bg-brand-navy text-white overflow-hidden">
                <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">Honest Service. Fair Pricing. Every Time.</h1>
                    <p className="text-xl text-brand-gold max-w-2xl mx-auto font-light">
                        A.W. Puma Home Services was founded to bring integrity back to an industry that every homeowner depends on — heating, cooling, and plumbing done right.
                    </p>
                </div>
            </section>

            {/* 2. THE FOUNDER'S STORY */}
            <section className="py-24">
                <div className="max-w-4xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
                    <div className="relative">
                        <div className="aspect-[3/4] rounded-sm overflow-hidden shadow-xl">
                            <img
                                src="/images/team/albert-puma.png"
                                alt="Albert Puma, Founder"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="absolute -bottom-6 -right-6 bg-brand-gold p-6 rounded-sm shadow-lg text-brand-navy hidden md:block">
                            <div className="text-4xl font-bold">10+</div>
                            <div className="text-sm font-bold uppercase tracking-wider">Years in Trade</div>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <h2 className="text-3xl font-serif font-bold text-brand-navy">Why I Started This Company</h2>
                        <h3 className="text-xl text-brand-gray italic">"Every homeowner deserves a technician they can trust."</h3>

                        <div className="prose prose-lg text-brand-gray">
                            <p>
                                After years in the trades, I kept seeing the same problems — homeowners getting overcharged for simple repairs, technicians pushing unnecessary replacements, and companies that disappeared after the invoice was paid. The home services industry had lost people's trust, and I couldn't keep watching it happen.
                            </p>
                            <p>
                                I started A.W. Puma Home Services with one rule: <strong>treat every home like it's your own</strong>. That means honest diagnostics, fair pricing you can understand before the work starts, and standing behind every job we do. No upselling, no scare tactics — just straightforward service.
                            </p>
                            <p>
                                This isn't just a business to me; it's my family name on the truck. And I intend to keep it a name worth calling.
                            </p>
                        </div>

                        <div className="pt-6 border-t border-gray-100 flex items-center justify-between">
                            <div>
                                <div className="font-serif text-2xl text-brand-navy">Albert Puma</div>
                                <div className="text-sm text-brand-gray uppercase tracking-widest font-bold">Founder & Owner</div>
                            </div>
                            <img
                                src="/images/mascots/mascot-standard.png"
                                alt="AW Puma Mascot"
                                className="w-24 h-auto opacity-80"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. OUR VALUES */}
            <section className="py-24 bg-brand-light">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-serif font-bold text-brand-navy mb-4">What Sets Us Apart</h2>
                        <p className="text-brand-gray max-w-2xl mx-auto">
                            In an industry full of shortcuts, we choose to do things the right way — even when it costs more.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Value 1 */}
                        <div className="bg-white p-8 rounded-sm shadow-sm border-t-4 border-brand-gold">
                            <DollarSign className="w-12 h-12 text-brand-navy mb-6" />
                            <h3 className="text-xl font-bold text-brand-navy mb-3">Upfront, Fair Pricing</h3>
                            <p className="text-brand-gray">
                                You'll know exactly what the job costs before we start — no hidden fees, no inflated estimates, no surprise invoices. We quote it fair and stick to it.
                            </p>
                        </div>
                        {/* Value 2 */}
                        <div className="bg-white p-8 rounded-sm shadow-sm border-t-4 border-brand-navy">
                            <HeartHandshake className="w-12 h-12 text-brand-navy mb-6" />
                            <h3 className="text-xl font-bold text-brand-navy mb-3">Honest Diagnostics</h3>
                            <p className="text-brand-gray">
                                If your system can be repaired, we'll repair it. We'll never push a full replacement just to pad the invoice. Our technicians are trained to find the real problem and fix it.
                            </p>
                        </div>
                        {/* Value 3 */}
                        <div className="bg-white p-8 rounded-sm shadow-sm border-t-4 border-brand-gold">
                            <Wrench className="w-12 h-12 text-brand-navy mb-6" />
                            <h3 className="text-xl font-bold text-brand-navy mb-3">Quality Workmanship</h3>
                            <p className="text-brand-gray">
                                We use quality parts, follow manufacturer specs, and stand behind every installation and repair. Our licensed technicians treat your home with the care it deserves.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. OUR JOURNEY */}
            <section className="py-24 bg-white">
                <div className="max-w-5xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-serif font-bold text-brand-navy">Our Journey</h2>
                    </div>

                    <div className="space-y-12 border-l-2 border-gray-200 ml-6 md:ml-auto pl-8 relative">
                        {/* 2014 */}
                        <div className="relative">
                            <div className="absolute -left-[43px] top-1 w-6 h-6 rounded-full bg-brand-gold border-4 border-white shadow-sm"></div>
                            <span className="text-sm font-bold text-brand-gold uppercase tracking-widest">2014</span>
                            <h3 className="text-2xl font-bold text-brand-navy mb-2">Where It All Started</h3>
                            <p className="text-brand-gray">Albert Puma launches A.W. Puma Restoration, building a reputation for quality workmanship and honest business practices in the Greater Boston trades.</p>
                        </div>
                        {/* 2020 */}
                        <div className="relative">
                            <div className="absolute -left-[43px] top-1 w-6 h-6 rounded-full bg-brand-navy border-4 border-white shadow-sm"></div>
                            <span className="text-sm font-bold text-brand-gold uppercase tracking-widest">2020</span>
                            <h3 className="text-2xl font-bold text-brand-navy mb-2">Growing Demand</h3>
                            <p className="text-brand-gray">Homeowners across Massachusetts increasingly ask for HVAC and plumbing help from a company they already trust. Albert sees an industry wide-open for disruption.</p>
                        </div>
                        {/* 2024 */}
                        <div className="relative">
                            <div className="absolute -left-[43px] top-1 w-6 h-6 rounded-full bg-brand-navy border-4 border-white shadow-sm"></div>
                            <span className="text-sm font-bold text-brand-gold uppercase tracking-widest">Late 2024</span>
                            <h3 className="text-2xl font-bold text-brand-navy mb-2">A.W. Puma Home Services</h3>
                            <p className="text-brand-gray">A.W. Puma Home Services officially launches — bringing honest diagnostics, fair pricing, and licensed technicians to heating, cooling, and plumbing across Greater Boston.</p>
                        </div>
                        {/* Today */}
                        <div className="relative">
                            <div className="absolute -left-[43px] top-1 w-6 h-6 rounded-full bg-brand-navy border-4 border-white shadow-sm"></div>
                            <span className="text-sm font-bold text-brand-gold uppercase tracking-widest">Today</span>
                            <h3 className="text-2xl font-bold text-brand-navy mb-2">Serving All of Massachusetts</h3>
                            <p className="text-brand-gray">A growing team of licensed, insured technicians providing furnace, boiler, heat pump, mini split, AC, water heater, and plumbing services to thousands of homeowners across 7 counties.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

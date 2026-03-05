import React from 'react';
import { Shield, Users, Clock, Award, Hammer, HeartHandshake } from 'lucide-react';
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
                    <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">Building Trust, Not Just Houses.</h1>
                    <p className="text-xl text-brand-gold max-w-2xl mx-auto font-light">
                        A.W. Puma Home Services was founded in late 2024 to bring honesty back to trades, building on a legacy of excellence that started with A.W. Puma Restoration in 2014.
                    </p>
                </div>
            </section>

            {/* 2. THE FOUNDER'S LETTER (SOP-08: Section 1) */}
            <section className="py-24">
                <div className="max-w-4xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
                    <div className="relative">
                        <div className="aspect-[3/4] rounded-sm overflow-hidden shadow-xl">
                            <img
                                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop"
                                alt="Albert Puma, Founder"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="absolute -bottom-6 -right-6 bg-brand-gold p-6 rounded-sm shadow-lg text-brand-navy hidden md:block">
                            <div className="text-4xl font-bold">10+</div>
                            <div className="text-sm font-bold uppercase tracking-wider">Years Active</div>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <h2 className="text-3xl font-serif font-bold text-brand-navy">A Letter from the Founder</h2>
                        <h3 className="text-xl text-brand-gray italic">"We don't build for the photo. We build for the next 50 years."</h3>

                        <div className="prose prose-lg text-brand-gray">
                            <p>
                                When I started A.W. Puma Restoration in 2014, the construction industry had a reputation problem. Hidden costs, ghosting contractors, and corners cut behind drywall. I wanted to build a company that was radically transparent.
                            </p>
                            <p>
                                My promise to you is simple: <strong>Financial Honesty</strong>. We adhere to clear, transparent pricing without hidden fees or surprise costs. We treat your budget with the same respect we treat your home.
                            </p>
                            <p>
                                This isn't just a business to me; it's my family name on the sign.
                            </p>
                        </div>

                        <div className="pt-6 border-t border-gray-100 flex items-center justify-between">
                            <div>
                                <div className="font-serif text-2xl text-brand-navy">Albert Puma</div>
                                <div className="text-sm text-brand-gray uppercase tracking-widest font-bold">Founder & Principal</div>
                            </div>
                            <img
                                src="/images/mascots/mascot-standard.png"
                                alt="AW Puma Mascot"
                                className="w-24 h-auto opacity-80 group-hover:opacity-100 transition-opacity"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. VALUES THAT COST MONEY (SOP-08: Section 2) */}
            <section className="py-24 bg-brand-light">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-serif font-bold text-brand-navy mb-4">The Price of Excellence</h2>
                        <p className="text-brand-gray max-w-2xl mx-auto">
                            Real values aren't just words on a wall. They are decisions that cost us money but earn us trust.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Value 1 */}
                        <div className="bg-white p-8 rounded-sm shadow-sm border-t-4 border-brand-gold">
                            <Shield className="w-12 h-12 text-brand-navy mb-6" />
                            <h3 className="text-xl font-bold text-brand-navy mb-3">Longevity Over Speed</h3>
                            <p className="text-brand-gray">
                                We don't rush the cure time on concrete. We don't skip the second coat of waterproofing. If it takes an extra week to do it right, we take the week.
                            </p>
                        </div>
                        {/* Value 2 */}
                        <div className="bg-white p-8 rounded-sm shadow-sm border-t-4 border-brand-navy">
                            <HeartHandshake className="w-12 h-12 text-brand-navy mb-6" />
                            <h3 className="text-xl font-bold text-brand-navy mb-3">Radical Honesty</h3>
                            <p className="text-brand-gray">
                                We believe in clear, upfront pricing without hidden fees or surprise costs. Our fixed-fee structure aligns our incentives with yours, ensuring you know exactly what you're paying for.
                            </p>
                        </div>
                        {/* Value 3 */}
                        <div className="bg-white p-8 rounded-sm shadow-sm border-t-4 border-brand-gold">
                            <Hammer className="w-12 h-12 text-brand-navy mb-6" />
                            <h3 className="text-xl font-bold text-brand-navy mb-3">Craftsmanship First</h3>
                            <p className="text-brand-gray">
                                We employ Master Carpenters, not just laborers. We scribe moldings to the wall. We align screw heads. The details you don't see matter the most.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. THE TIMELINE (SOP-08: Section 3) */}
            <section className="py-24 bg-white">
                <div className="max-w-5xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-serif font-bold text-brand-navy">A History of Reliability</h2>
                    </div>

                    <div className="space-y-12 border-l-2 border-gray-200 ml-6 md:ml-auto pl-8 relative">
                        {/* 2014 */}
                        <div className="relative">
                            <div className="absolute -left-[43px] top-1 w-6 h-6 rounded-full bg-brand-gold border-4 border-white shadow-sm"></div>
                            <span className="text-sm font-bold text-brand-gold uppercase tracking-widest">2014</span>
                            <h3 className="text-2xl font-bold text-brand-navy mb-2">Foundation</h3>
                            <p className="text-brand-gray">Albert Puma starts A.W. Puma Restoration with a commitment to unwavering quality and craftsmanship in home renovations.</p>
                        </div>
                        {/* 2018 */}
                        <div className="relative">
                            <div className="absolute -left-[43px] top-1 w-6 h-6 rounded-full bg-brand-navy border-4 border-white shadow-sm"></div>
                            <span className="text-sm font-bold text-brand-gold uppercase tracking-widest">2018</span>
                            <h3 className="text-2xl font-bold text-brand-navy mb-2">Best of Boston</h3>
                            <p className="text-brand-gray">Awarded "Best Renovation Contractor" by local industry peers for our work on historic restorations.</p>
                        </div>
                        {/* 2024 */}
                        <div className="relative">
                            <div className="absolute -left-[43px] top-1 w-6 h-6 rounded-full bg-brand-navy border-4 border-white shadow-sm"></div>
                            <span className="text-sm font-bold text-brand-gold uppercase tracking-widest">Late 2024</span>
                            <h3 className="text-2xl font-bold text-brand-navy mb-2">A.W. Puma Home Services</h3>
                            <p className="text-brand-gray">A.W. Puma Home Services is officially started to bring the same level of honesty, transparency, and excellence to the HVAC and home services trades.</p>
                        </div>
                        {/* Today */}
                        <div className="relative">
                            <div className="absolute -left-[43px] top-1 w-6 h-6 rounded-full bg-brand-navy border-4 border-white shadow-sm"></div>
                            <span className="text-sm font-bold text-brand-gold uppercase tracking-widest">Today</span>
                            <h3 className="text-2xl font-bold text-brand-navy mb-2">Full-Service Home Experts</h3>
                            <p className="text-brand-gray">Now a growing team, managing custom climate control builds, comprehensive system maintenance, and premium home services across Greater Boston.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. TEAM SECTION (SOP-08: Section 4) */}
            <section className="py-24 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-serif font-bold text-brand-navy mb-4">Meet The Team</h2>
                        <p className="text-brand-gray">The people who will be in your home.</p>
                    </div>

                    <div className="grid md:grid-cols-4 gap-6">
                        {/* Team Member 1 */}
                        <div className="group">
                            <div className="aspect-[3/4] overflow-hidden rounded-sm mb-4">
                                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop" alt="Albert Puma" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                            </div>
                            <h3 className="text-lg font-bold text-brand-navy">Albert Puma</h3>
                            <div className="text-sm text-brand-gold uppercase tracking-widest">Principal</div>
                        </div>
                        {/* Team Member 2 */}
                        <div className="group">
                            <div className="aspect-[3/4] overflow-hidden rounded-sm mb-4">
                                <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop" alt="Sarah Jenkins" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                            </div>
                            <h3 className="text-lg font-bold text-brand-navy">Sarah Jenkins</h3>
                            <div className="text-sm text-brand-gold uppercase tracking-widest">Head of Design</div>
                        </div>
                        {/* Team Member 3 */}
                        <div className="group">
                            <div className="aspect-[3/4] overflow-hidden rounded-sm mb-4">
                                <img src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1974&auto=format&fit=crop" alt="Michael Ross" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                            </div>
                            <h3 className="text-lg font-bold text-brand-navy">Michael Ross</h3>
                            <div className="text-sm text-brand-gold uppercase tracking-widest">Project Manager</div>
                        </div>
                        {/* Team Member 4 */}
                        <div className="group">
                            <div className="aspect-[3/4] overflow-hidden rounded-sm mb-4">
                                <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1974&auto=format&fit=crop" alt="David Chen" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                            </div>
                            <h3 className="text-lg font-bold text-brand-navy">David Chen</h3>
                            <div className="text-sm text-brand-gold uppercase tracking-widest">Lead Super</div>
                        </div>
                    </div>

                    <div className="mt-16 text-center">
                        <p className="text-brand-gray mb-6">Want to join a team that takes pride in the craft?</p>
                        <Button variant="outline-navy">View Career Openings</Button>
                    </div>
                </div>
            </section>
        </div>
    );
};

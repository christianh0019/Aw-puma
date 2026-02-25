import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, AlertTriangle, ShieldCheck, Hammer, FileText, Star, Plus, Minus } from 'lucide-react';
import { Button } from '../../components/ui/Button';
import { SEO } from '../../components/SEO';

export const HomeRemodeling: React.FC = () => {
    const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

    return (
        <div className="bg-white">
            <SEO
                title="Custom Home Renovations in Boston & Metro West | A.W. Puma Home Services"
                description="Elevating Massachusetts homes with expert craftsmanship and transparent project management. From custom carpentry to full-scale remodeling, we build the space you've been waiting for."
                canonical="https://awpumahome.com/services/home-remodeling"
                keywords="custom home renovations, home remodeling boston, custom carpentry massachusetts, design-build boston, home additions metro west"
            />
            {/* 1. THE PROMISE (HERO) */}
            <section className="relative min-h-[55vh] flex flex-col justify-center items-center pt-24 pb-16">
                <div className="absolute inset-0 z-0" style={{ backgroundColor: '#153760' }} />

                <div className="relative z-10 max-w-7xl mx-auto px-4 w-full text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-gold/20 border border-brand-gold/50 backdrop-blur-md mb-8">
                        <span className="text-sm font-bold text-brand-gold uppercase tracking-widest">Premier Design-Build</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-serif font-bold tracking-tight text-white mb-6 leading-tight drop-shadow-2xl">
                        Custom Home Renovations in <br />
                        <span className="text-brand-gold">Boston & Metro West</span>
                    </h1>

                    <p className="text-xl text-gray-200 mb-10 max-w-3xl mx-auto leading-relaxed font-light">
                        Elevating Massachusetts homes with expert craftsmanship and transparent project management. From custom carpentry to full-scale remodeling, we build the space you've been waiting for.
                    </p>

                    <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                        <Button size="lg" icon={<ArrowRight size={18} />}>
                            Get a Free Project Estimate
                        </Button>
                        <Button variant="outline" size="lg">
                            Download Our 2026 Remodeling Cost Guide
                        </Button>
                    </div>
                </div>
            </section>

            {/* 2. THE EMPATHY LAYER (PAS) */}
            <section className="py-24 bg-gray-50">
                <div className="max-w-4xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-navy mb-6">Your Home Should Be Your Sanctuary</h2>
                        <p className="text-lg text-brand-gray leading-relaxed">
                            But an outdated layout or a lack of functional space can make it feel like a source of stress. Finding a contractor in Massachusetts who actually answers the phone—and follows through on their promises—is harder than it should be.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 mb-12">
                        <div className="bg-white p-8 rounded-sm shadow-sm border-l-4 border-red-500">
                            <div className="flex items-center gap-3 mb-4">
                                <AlertTriangle className="text-red-500" size={24} />
                                <h3 className="text-xl font-bold text-brand-navy">The Agitation</h3>
                            </div>
                            <p className="text-brand-gray italic mb-4">"The 'handyman' disappeared mid-project," "The quote doubled after the walls were opened," or "The permit process has been stalled at City Hall for months."</p>
                            <p className="text-brand-gray">
                                In the Greater Boston area, navigating historic codes, strict zoning, and complex MEP (Mechanical, Electrical, Plumbing) requirements can turn a dream renovation into a regulatory nightmare.
                            </p>
                        </div>
                        <div className="bg-white p-8 rounded-sm shadow-sm border-l-4 border-brand-gold">
                            <div className="flex items-center gap-3 mb-4">
                                <ShieldCheck className="text-brand-gold" size={24} />
                                <h3 className="text-xl font-bold text-brand-navy">The Solution</h3>
                            </div>
                            <p className="text-brand-gray">
                                At <strong>A.W. Puma Home Services</strong>, we don't just swing hammers; we manage the chaos. Our "Always There, Always Fair" philosophy means you get a dedicated partner who handles everything from architectural design plans to the final coat of paint.
                            </p>
                        </div>
                    </div>

                    <div className="bg-brand-navy text-white p-8 rounded-sm text-center">
                        <p className="text-gray-300 text-lg">
                            We treat your home with the respect it deserves and your budget with the transparency you require.
                        </p>
                    </div>
                </div>
            </section>

            {/* 3. THE COMPETENCE LAYER (3 PILLARS) */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <span className="text-brand-gold font-bold uppercase tracking-widest text-sm mb-2 block">Operational Excellence</span>
                        <h2 className="text-4xl font-serif font-bold text-brand-navy">Technical Mastery & Transparency</h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-12">
                        {/* Pillar 1: Technical Mastery & Design */}
                        <div className="space-y-6">
                            <div className="w-16 h-16 bg-brand-light rounded-full flex items-center justify-center">
                                <Hammer className="text-brand-navy" size={32} />
                            </div>
                            <h3 className="text-2xl font-bold text-brand-navy">Technical Mastery & Design</h3>
                            <p className="text-sm font-medium text-brand-gray">We blend custom home designs with Massachusetts' architectural heritage.</p>
                            <ul className="space-y-3">
                                <li className="flex gap-3 text-brand-gray">
                                    <CheckCircle2 size={20} className="text-brand-gold shrink-0" />
                                    <span><strong>Custom Carpentry:</strong> Built-ins, finish work, and structural framing.</span>
                                </li>
                                <li className="flex gap-3 text-brand-gray">
                                    <CheckCircle2 size={20} className="text-brand-gold shrink-0" />
                                    <span><strong>Mechanical Integration:</strong> Plumbing & HVAC experts ensuring efficiency.</span>
                                </li>
                                <li className="flex gap-3 text-brand-gray">
                                    <CheckCircle2 size={20} className="text-brand-gold shrink-0" />
                                    <span><strong>Design-Build Excellence:</strong> Tailored custom home design plans.</span>
                                </li>
                            </ul>
                        </div>

                        {/* Pillar 2: Financial Transparency */}
                        <div className="space-y-6">
                            <div className="w-16 h-16 bg-brand-light rounded-full flex items-center justify-center">
                                <FileText className="text-brand-navy" size={32} />
                            </div>
                            <h3 className="text-2xl font-bold text-brand-navy">Financial Transparency</h3>
                            <p className="text-sm font-medium text-brand-gray">No "guesstimate" games. We provide a detailed scope of work.</p>
                            <ul className="space-y-3">
                                <li className="flex gap-3 text-brand-gray">
                                    <CheckCircle2 size={20} className="text-brand-gold shrink-0" />
                                    <span><strong>Fixed-Price Agreements:</strong> Clear contracts that protect your investment.</span>
                                </li>
                                <li className="flex gap-3 text-brand-gray">
                                    <CheckCircle2 size={20} className="text-brand-gold shrink-0" />
                                    <span><strong>Mass Save® Integration:</strong> Energy-efficient and cost-effective incentives.</span>
                                </li>
                                <li className="flex gap-3 text-brand-gray">
                                    <CheckCircle2 size={20} className="text-brand-gold shrink-0" />
                                    <span><strong>Lien Waivers:</strong> Protecting your property title through verified payments.</span>
                                </li>
                            </ul>
                        </div>

                        {/* Pillar 3: Regulatory & Local Expertise */}
                        <div className="space-y-6">
                            <div className="w-16 h-16 bg-brand-light rounded-full flex items-center justify-center">
                                <ShieldCheck className="text-brand-navy" size={32} />
                            </div>
                            <h3 className="text-2xl font-bold text-brand-navy">Regulatory & Local Expertise</h3>
                            <p className="text-sm font-medium text-brand-gray">Navigating permit offices in Cambridge and Winchester is our job.</p>
                            <ul className="space-y-3">
                                <li className="flex gap-3 text-brand-gray">
                                    <CheckCircle2 size={20} className="text-brand-gold shrink-0" />
                                    <span><strong>Permit Management:</strong> Complete handling of building & electrical permits.</span>
                                </li>
                                <li className="flex gap-3 text-brand-gray">
                                    <CheckCircle2 size={20} className="text-brand-gold shrink-0" />
                                    <span><strong>Zoning Compliance:</strong> Expert navigation of FAR and local ordinances.</span>
                                </li>
                                <li className="flex gap-3 text-brand-gray">
                                    <CheckCircle2 size={20} className="text-brand-gold shrink-0" />
                                    <span><strong>Safety & Compliance:</strong> Fully licensed and insured for construction.</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. THE EVIDENCE LAYER (SOCIAL PROOF) */}
            <section className="py-24 bg-brand-navy text-white">
                <div className="max-w-7xl mx-auto px-4">
                    <h2 className="text-4xl font-serif font-bold mb-12 text-center text-white">Neighbors Who Trust Us</h2>
                    <div className="max-w-3xl mx-auto">
                        <div className="bg-white/10 p-12 rounded-sm backdrop-blur-sm relative">
                            <Star className="absolute top-8 right-8 text-brand-gold opacity-20" size={64} />
                            <div className="flex gap-1 mb-6">
                                {[1, 2, 3, 4, 5].map(i => <Star key={i} className="fill-brand-gold text-brand-gold" size={18} />)}
                            </div>
                            <p className="text-xl md:text-2xl text-gray-200 italic mb-8 leading-relaxed">
                                "Albert and his team transformed our outdated Newton kitchen into a custom masterpiece. They were 'Always There' when they said they would be, and the quality of the custom carpentry is unmatched. They handled the permits, the plumbing, and the final details flawlessly."
                            </p>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-brand-gold rounded-full flex items-center justify-center text-brand-navy font-bold">SJ</div>
                                <div>
                                    <div className="font-bold text-lg">Sarah J.</div>
                                    <div className="text-sm text-gray-400 uppercase tracking-widest">Newton, MA • Kitchen & Custom Renovation</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. THE SYSTEM LAYER (PROCESS) */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-serif font-bold text-brand-navy mb-4">The Roadmap</h2>
                        <p className="text-brand-gray uppercase tracking-widest text-sm font-bold">A Systematized Build Process</p>
                    </div>

                    <div className="grid md:grid-cols-4 gap-8">
                        {/* Step 1 */}
                        <div className="relative p-8 bg-gray-50 rounded-sm">
                            <span className="text-5xl font-serif font-black text-brand-gold/20 absolute top-4 right-4">01</span>
                            <h3 className="text-xl font-bold text-brand-navy mb-4">Discovery & Feasibility</h3>
                            <p className="text-brand-gray text-sm leading-relaxed">We meet at your home to discuss your vision, budget, and the feasibility of your custom construction goals.</p>
                        </div>
                        {/* Step 2 */}
                        <div className="relative p-8 bg-gray-50 rounded-sm">
                            <span className="text-5xl font-serif font-black text-brand-gold/20 absolute top-4 right-4">02</span>
                            <h3 className="text-xl font-bold text-brand-navy mb-4">Design & Planning</h3>
                            <p className="text-brand-gray text-sm leading-relaxed">Our team drafts custom house designs and secures necessary engineering approvals and architectural plans.</p>
                        </div>
                        {/* Step 3 */}
                        <div className="relative p-8 bg-gray-50 rounded-sm border-t-4 border-brand-gold">
                            <span className="text-5xl font-serif font-black text-brand-gold/20 absolute top-4 right-4">03</span>
                            <h3 className="text-xl font-bold text-brand-navy mb-4">The Build Phase</h3>
                            <p className="text-brand-gray text-sm leading-relaxed">Clean job sites, daily updates, and professional project management handled by our in-house trade specialists.</p>
                        </div>
                        {/* Step 4 */}
                        <div className="relative p-8 bg-gray-50 rounded-sm">
                            <span className="text-5xl font-serif font-black text-brand-gold/20 absolute top-4 right-4">04</span>
                            <h3 className="text-xl font-bold text-brand-navy mb-4">Final Walkthrough</h3>
                            <p className="text-brand-gray text-sm leading-relaxed">We don't leave until every miter joint is perfect and the space is ready for your family's new chapter.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. THE DATA LAYER (FAQ) */}
            <section className="py-24 bg-gray-50">
                <div className="max-w-3xl mx-auto px-4">
                    <h2 className="text-3xl font-serif font-bold text-brand-navy mb-12 text-center">Remodeling FAQ</h2>
                    <div className="space-y-4">
                        {[
                            {
                                q: "What is the average cost of a custom home renovation in Massachusetts?",
                                a: "While every project is unique, high-quality custom home remodeling in the Boston area typically ranges from $150 to $400+ per square foot, depending on finishes, structural changes, and mechanical upgrades."
                            },
                            {
                                q: "How long does a custom home addition take?",
                                a: "Most custom home additions take between 4 to 8 months from initial design to final inspection. We provide a detailed timeline before we break ground to ensure your life isn't disrupted longer than necessary."
                            },
                            {
                                q: "Do you handle all the permits?",
                                a: "Yes. From the initial filing to the final certificate of occupancy, A.W. Puma manages all interactions with local building departments in our service areas, including Boston, Cambridge, and Brookline."
                            }
                        ].map((faq, index) => (
                            <div key={index} className="bg-white rounded-sm border border-gray-200">
                                <button
                                    className="w-full flex items-center justify-between p-6 text-left font-bold text-brand-navy focus:outline-none"
                                    onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                                >
                                    {faq.q}
                                    {openFaqIndex === index ? <Minus size={20} className="text-brand-gold" /> : <Plus size={20} className="text-gray-400" />}
                                </button>
                                {openFaqIndex === index && (
                                    <div className="p-6 pt-0 text-brand-gray leading-relaxed border-t border-gray-100">
                                        {faq.a}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 7. SOFT CONVERSION (CTA) */}
            <section className="py-24 bg-brand-light relative overflow-hidden">
                <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-navy mb-6">Planning a renovation but not sure where to start?</h2>
                    <p className="text-brand-gray mb-10 text-lg max-w-2xl mx-auto">
                        Download our <strong>Massachusetts Homeowner's Remodeling Checklist</strong>. It covers everything from budgeting for "surprises" to choosing the right finishes for New England weather.
                    </p>

                    <div className="bg-white p-10 rounded-sm shadow-xl max-w-lg mx-auto border-t-4 border-brand-gold">
                        <div className="flex flex-col gap-4">
                            <input type="email" placeholder="Enter your email address" className="w-full px-4 py-4 border border-gray-200 rounded-sm outline-none focus:border-brand-gold transition-colors" />
                            <Button className="w-full justify-center py-4 text-lg">Get the Checklist</Button>
                        </div>
                        <p className="text-xs text-gray-400 mt-6 flex items-center justify-center gap-2">
                            <ShieldCheck size={14} /> We respect your privacy. Unsubscribe anytime.
                        </p>
                    </div>
                </div>
                {/* Decorative background element */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-brand-gold/5 rounded-full -translate-y-1/2 translate-x-1/2" />
            </section>

        </div>
    );
};

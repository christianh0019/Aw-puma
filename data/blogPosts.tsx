import React from 'react';

export interface BlogPostData {
    id: string;
    slug: string;
    title: string;
    date: string;
    author: string;
    excerpt: string;
    image: string;
    content: React.ReactNode;
}

export const blogPosts: BlogPostData[] = [
    {
        id: '1',
        slug: 'winter-hvac-maintenance-tips',
        title: "Expert Tips for Maintaining Your HVAC System This Winter",
        date: "February 20, 2026",
        author: "Alberto Puma",
        excerpt: "Stay warm and save on energy bills with these essential winter maintenance tips for your home heating system.",
        image: "https://images.unsplash.com/photo-1581094288338-2314dddb7ecb?q=80&w=2070&auto=format&fit=crop",
        content: (
            <>
                <p className="text-lg text-slate-700 leading-relaxed mb-8">
                    When the Massachusetts winter sets in and temperatures drop below freezing, the last thing you want is for your heating system to fail. Not only is it uncomfortable, but emergency repairs during peak season can be costly. Routine maintenance is the secret to a warm, efficient, and reliable home.
                </p>

                <h2 className="text-2xl font-serif font-bold text-brand-navy mb-4 mt-12">1. Change Your Air Filters Regularly</h2>
                <p className="text-slate-700 leading-relaxed mb-6">
                    This is arguably the easiest and most important maintenance task you can perform. A dirty, clogged filter restricts airflow, forcing your furnace or heat pump to work harder than necessary. This reduces efficiency, increases your energy bills, and can eventually lead to system failure due to overheating. Check your filter every month and replace it at least every 90 days.
                </p>

                <h2 className="text-2xl font-serif font-bold text-brand-navy mb-4 mt-12">2. Keep Vents and Registers Clear</h2>
                <p className="text-slate-700 leading-relaxed mb-6">
                    Walk through your home and ensure all supply and return vents are open and unblocked. Moving furniture, rugs, or drapes that are obstructing vents allows for proper airflow and ensures balanced temperatures throughout your rooms. Closing vents in unused rooms can actually disrupt the pressure balance of a modern HVAC system and cause damage.
                </p>

                <h2 className="text-2xl font-serif font-bold text-brand-navy mb-4 mt-12">3. Seal Leaks and Drafts</h2>
                <p className="text-slate-700 leading-relaxed mb-6">
                    Your heating system's efficiency is only as good as your home's envelope. Inspect windows, doors, and exposed ductwork for drafts. Use weather stripping or caulking to seal any gaps. In unconditioned spaces like attics or crawlspaces, ensuring ductwork is properly sealed and insulated prevents expensive heat loss.
                </p>

                <div className="bg-brand-light p-8 rounded-lg border border-gray-200 my-10">
                    <h3 className="text-xl font-bold text-brand-navy mb-3">Did You Know?</h3>
                    <p className="text-slate-700 text-sm">
                        Through the Mass Save program, Massachusetts residents can qualify for 75-100% off approved insulation improvements, plus no-cost air sealing to fix those drafts permanently.
                    </p>
                </div>

                <h2 className="text-2xl font-serif font-bold text-brand-navy mb-4 mt-12">4. Schedule a Professional Tune-Up</h2>
                <p className="text-slate-700 leading-relaxed mb-6">
                    While there are many DIY tasks, a professional inspection is irreplaceable. An A.W. Puma technician will check for carbon monoxide leaks, inspect electrical connections, lubricate moving parts, and calibrate your thermostat. A system that is professionally tuned runs more efficiently and lasts significantly longer.
                </p>

                <h2 className="text-2xl font-serif font-bold text-brand-navy mb-4 mt-12">5. Consider Upgrading an Aging System</h2>
                <p className="text-slate-700 leading-relaxed mb-6">
                    If your furnace or boiler is over 15 years old and requiring frequent repairs, it might be time to replace it. Modern high-efficiency systems, especially heat pumps, can cut your heating bills substantially while providing superior comfort.
                </p>

                <p className="text-lg text-slate-700 leading-relaxed mt-10 p-6 border-l-4 border-brand-orange bg-orange-50/50">
                    Need professional help preparing your home for winter? <a href="/contact" className="text-brand-orange font-bold hover:underline">Contact A.W. Puma Home Services</a> today for a comprehensive heating system inspection.
                </p>
            </>
        )
    },
    {
        id: '2',
        slug: 'mass-save-rebates-guide',
        title: "Why Mass Save® Is a Game Changer for Massachusetts Homeowners",
        date: "February 15, 2026",
        author: "Sarah Jenkins",
        excerpt: "Learn how you can access thousands of dollars in rebates and specialized financing for energy efficiency upgrades.",
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2070&auto=format&fit=crop",
        content: (
            <>
                <p className="text-lg text-slate-700 leading-relaxed mb-8">
                    If you live in Massachusetts and aren't utilizing the Mass Save program, you are leaving money on the table. Mass Save is an initiative sponsored by Massachusetts natural gas and electric utilities to help residents reduce energy consumption and save on utility costs.
                </p>
                <h2 className="text-2xl font-serif font-bold text-brand-navy mb-4 mt-12">Rebates Up To $10,000+</h2>
                <p className="text-slate-700 leading-relaxed mb-6">
                    By working with a qualified contractor like A.W. Puma, you can access incredible rebates for upgrading to energy-efficient equipment. The most notable current incentive is the massive rebate for whole-home heat pump installations, which can significantly offset the cost of modernizing your climate control system.
                </p>
                <p className="text-lg text-slate-700 leading-relaxed mt-10">
                    <a href="/mass-save" className="text-brand-orange font-bold hover:underline">Learn more about our Mass Save services here.</a>
                </p>
            </>
        )
    },
    {
        id: '3',
        slug: 'benefits-of-ductless-mini-splits',
        title: "The Benefits of Ductless Mini-Split Systems",
        date: "February 10, 2026",
        author: "Michael Ross",
        excerpt: "Discover why more homeowners are switching to ductless solutions for targeted heating and cooling in their homes.",
        image: "https://images.unsplash.com/photo-1545259741-2ea3ebf61fa3?q=80&w=2070&auto=format&fit=crop",
        content: (
            <>
                <p className="text-lg text-slate-700 leading-relaxed mb-8">
                    Ductless mini-split systems are rapidly becoming the preferred choice for Massachusetts homeowners looking to add cooling to older homes with boiler heating, or to create distinct temperature zones for better efficiency.
                </p>
                <h2 className="text-2xl font-serif font-bold text-brand-navy mb-4 mt-12">No Ductwork Required</h2>
                <p className="text-slate-700 leading-relaxed mb-6">
                    As the name implies, mini-splits do not require traditional ductwork, preventing the roughly 30% energy loss associated with forced-air systems. They are whisper-quiet, incredibly efficient, and double as both air conditioners in the summer and powerful heaters in the winter.
                </p>
                <p className="text-lg text-slate-700 leading-relaxed mt-10">
                    <a href="/services/mini-splits" className="text-brand-orange font-bold hover:underline">Explore our Ductless Mini-Split installation services.</a>
                </p>
            </>
        )
    }
];

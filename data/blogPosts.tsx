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
        slug: 'furnace-maintenance-tips',
        title: "Expert Furnace Maintenance Tips for Massachusetts Winters",
        date: "February 20, 2026",
        author: "Alberto Puma",
        excerpt: "Stay warm and save on energy bills with these essential winter maintenance tips for your home furnace system.",
        image: "/images/furnace/hero-furnace.jpg",
        content: (
            <>
                <p className="text-lg text-slate-700 leading-relaxed mb-8">
                    When the Massachusetts winter sets in and temperatures drop below freezing, the last thing you want is for your furnace to fail. Not only is it uncomfortable, but emergency repairs during peak season can be costly. Routine furnace maintenance is the secret to a warm, efficient, and reliable home.
                </p>

                <h2 className="text-2xl font-serif font-bold text-brand-navy mb-4 mt-12">1. Change Your Air Filters Regularly</h2>
                <p className="text-slate-700 leading-relaxed mb-6">
                    This is arguably the easiest and most important maintenance task you can perform. A dirty, clogged filter restricts airflow, forcing your furnace to work harder than necessary. This reduces efficiency, increases your energy bills, and can eventually lead to system failure due to overheating. Check your filter every month and replace it at least every 90 days.
                </p>

                <h2 className="text-2xl font-serif font-bold text-brand-navy mb-4 mt-12">2. Schedule a Professional Tune-Up</h2>
                <p className="text-slate-700 leading-relaxed mb-6">
                    While there are many DIY tasks, a professional inspection is irreplaceable. An A.W. Puma technician will check for carbon monoxide leaks, inspect electrical connections, lubricate moving parts, and examine the heat exchanger. A system that is professionally tuned runs more efficiently and lasts significantly longer.
                </p>
                <p className="text-lg text-slate-700 leading-relaxed mt-10">
                    <a href="/services/furnace" className="text-brand-orange font-bold hover:underline">Learn more about our Furnace services here.</a>
                </p>
            </>
        )
    },
    {
        id: '2',
        slug: 'benefits-of-ductless-mini-splits',
        title: "The Benefits of Ductless Mini-Split Systems",
        date: "February 10, 2026",
        author: "Michael Ross",
        excerpt: "Discover why more homeowners are switching to ductless solutions for targeted heating and cooling in their homes.",
        image: "/images/minisplits/hero-minisplit.jpg",
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
    },
    {
        id: '3',
        slug: 'heat-pump-revolution',
        title: "Why Heat Pumps Are Taking Over Massachusetts Homes",
        date: "February 5, 2026",
        author: "Sarah Jenkins",
        excerpt: "Learn how modern heat pumps combine cutting-edge technology with Massive state rebates for year-round comfort.",
        image: "/images/heatpumps/hero-heatpump.jpg",
        content: (
            <>
                <p className="text-lg text-slate-700 leading-relaxed mb-8">
                    Heat pumps are revolutionizing the way we control climate in our homes. Unlike traditional systems that generate heat, heat pumps transfer heat from the outside air into your home, making them incredibly energy-efficient even in cold climates.
                </p>
                <h2 className="text-2xl font-serif font-bold text-brand-navy mb-4 mt-12">Mass Save® Rebates Available</h2>
                <p className="text-slate-700 leading-relaxed mb-6">
                    Because they are so efficient and environmentally friendly, heat pumps qualify for the highest tier of Mass Save® rebates—up to $10,000 for whole-home conversions. This makes upgrading to a heat pump an incredible financial decision alongside the year-over-year energy savings.
                </p>
                <p className="text-lg text-slate-700 leading-relaxed mt-10">
                    <a href="/services/heat-pump" className="text-brand-orange font-bold hover:underline">Learn more about our Heat Pump services here.</a>
                </p>
            </>
        )
    },
    {
        id: '4',
        slug: 'central-ac-summer-prep',
        title: "Getting Your Central Air Conditioner Ready for Summer",
        date: "January 28, 2026",
        author: "Alberto Puma",
        excerpt: "Don't wait for the first heatwave to test your AC. Follow these steps to ensure peak cooling performance.",
        image: "/images/ac/hero-ac.jpg",
        content: (
            <>
                <p className="text-lg text-slate-700 leading-relaxed mb-8">
                    The worst time to discover your central air conditioning is broken is during the first humid 90-degree day of summer. Pre-season AC maintenance ensures that your system starts up smoothly and runs efficiently all season long.
                </p>
                <h2 className="text-2xl font-serif font-bold text-brand-navy mb-4 mt-12">Clear the Condenser Area</h2>
                <p className="text-slate-700 leading-relaxed mb-6">
                    Over the fall and winter, leaves, branches, and debris likely gathered around your outdoor condenser unit. For your AC to expel heat effectively, it needs at least two feet of clear space around all sides. Clear away any foliage, debris, or obstructions before turning the system on.
                </p>
                <p className="text-lg text-slate-700 leading-relaxed mt-10">
                    <a href="/services/ac" className="text-brand-orange font-bold hover:underline">See how we repair and install Air Conditioners.</a>
                </p>
            </>
        )
    },
    {
        id: '5',
        slug: 'replacing-historic-boilers',
        title: "Is It Time to Replace Your Historic Home's Boiler?",
        date: "January 15, 2026",
        author: "David Chen",
        excerpt: "Signs that your aging steam or hot water boiler is ready for a high-efficiency upgrade.",
        image: "/images/boiler/hero-boiler.jpg",
        content: (
            <>
                <p className="text-lg text-slate-700 leading-relaxed mb-8">
                    Many older homes in Greater Boston rely on large, cast-iron boilers to provide radiant heat through radiators or baseboards. While these systems are durable, eventually they must be replaced. Knowing when to upgrade can save you from a catastrophic mid-winter breakdown.
                </p>
                <h2 className="text-2xl font-serif font-bold text-brand-navy mb-4 mt-12">Signs of Impending Boiler Failure</h2>
                <p className="text-slate-700 leading-relaxed mb-6">
                    If your boiler is over 15-20 years old, it's wise to start planning for replacement. Listen for unusual banging or whistling noises (often called "kettling"), watch for leaks or pooling water around the base, and monitor your heating bills. A sudden spike in fuel costs usually means the boiler has lost its efficiency. Modern modulating-condensing boilers are vastly superior, offering quiet operation and much lower fuel usage.
                </p>
                <p className="text-lg text-slate-700 leading-relaxed mt-10">
                    <a href="/services/boiler" className="text-brand-orange font-bold hover:underline">Click here to learn about our Boiler repair and replacement services.</a>
                </p>
            </>
        )
    },
    {
        id: '6',
        slug: 'tankless-water-heater-pros-cons',
        title: "The Pros and Cons of Upgrading to a Tankless Water Heater",
        date: "January 4, 2026",
        author: "Sarah Jenkins",
        excerpt: "Tired of running out of hot water? A tankless system might be the perfect solution for your family.",
        image: "/images/waterheaters/hero-waterheater.jpg",
        content: (
            <>
                <p className="text-lg text-slate-700 leading-relaxed mb-8">
                    If you've ever been the last person to shower in the morning, you know the misery of a cold shower. Traditional tank water heaters store a finite amount of hot water. Once it's gone, you have to wait. Tankless water heaters solve this problem entirely by heating water on-demand.
                </p>
                <h2 className="text-2xl font-serif font-bold text-brand-navy mb-4 mt-12">The Case for Tankless</h2>
                <p className="text-slate-700 leading-relaxed mb-6">
                    The biggest advantage is the infinite supply of hot water. Additionally, tankless systems are far more compact, freeing up valuable floor space in your basement or utility closet. Because they don't expend energy keeping 50 gallons of water hot 24/7, they are also more energy-efficient, translating to lower utility bills. However, they do have a higher upfront installation cost compared to a traditional tank swap.
                </p>
                <p className="text-lg text-slate-700 leading-relaxed mt-10">
                    <a href="/services/water-heaters" className="text-brand-orange font-bold hover:underline">Explore our Water Heater installation and repair services.</a>
                </p>
            </>
        )
    }
];

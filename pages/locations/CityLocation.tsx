import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { MapPin, ArrowRight, CheckCircle2, Phone, Shield, Clock, Star, Plus, Minus, Building, Waves, FileQuestion } from 'lucide-react';
import { Button } from '../../components/ui/Button';
import { SERVICES } from '../../components/Navbar';
import { SEO } from '../../components/SEO';

export const CITY_DATA: Record<string, {
    name: string;
    county: string;
    tagline: string;
    description: string;
    aboutCity: string;
    stats: { label: string; value: string }[];
    quirks: { title: string; icon: any; description: string; borderColor: string }[];
    faq: { q: string; a: string }[];
}> = {
    'boston': {
        name: 'Boston',
        county: 'Suffolk',
        tagline: 'Premium Home Services in the Hub',
        description: 'From historic Back Bay brownstones to sleek Seaport condos, A.W. Puma is Boston\'s trusted partner for cooling, heating, and boiler solutions.',
        aboutCity: 'Working in Boston requires navigating tight streets, strict parking regulations, and historic preservation codes. Our team is expert at managing urban logistics to ensure your project stays on track.',
        stats: [
            { label: 'Boston Projects', value: '450+' },
            { label: 'Avg Arrival', value: '45 min' },
            { label: 'Licensed Pros', value: '15+' }
        ],
        quirks: [
            { title: 'Historic Zoning', icon: Building, description: 'We work closely with the Boston Landmarks Commission to ensure all exterior HVAC and remodeling work meets historic standards.', borderColor: 'border-brand-navy' },
            { title: 'Urban Logistics', icon: Waves, description: 'Our team handles all street occupancy permits and parking logistics, so you don\'t have to worry about the "Hub" headache.', borderColor: 'border-brand-gold' },
            { title: 'Older Infrastructure', icon: FileQuestion, description: 'We specialize in retrofitting modern high-efficiency systems into Boston\'s unique 19th-century architecture.', borderColor: 'border-brand-navy' }
        ],
        faq: [
            { q: "Do you service all neighborhoods in Boston?", a: "Yes, we serve all neighborhoods including Back Bay, Beacon Hill, South End, North End, Charlestown, South Boston, and Dorchester." },
            { q: "How do you handle parking in Beacon Hill or Back Bay?", a: "We have designated urban response vehicles and handle all necessary permits for street work and equipment placement." }
        ]
    },
    'worcester': {
        name: 'Worcester',
        county: 'Worcester',
        tagline: 'Reliable Heating & Cooling in Central Mass',
        description: 'Serving the "Heart of the Commonwealth" with fast, professional home services. We keep Worcester homes comfortable year-round.',
        aboutCity: 'Worcester\'s hilly terrain and varied housing stock—from classic triple-deckers to modern suburban developments—require a versatile approach to home maintenance.',
        stats: [
            { label: 'Worcester Projects', value: '300+' },
            { label: 'Local Team', value: 'Central MA' },
            { label: 'Satisfaction', value: '99%' }
        ],
        quirks: [
            { title: 'Hilly Terrain', icon: Building, description: 'We understand the unique drainage and foundation challenges presented by Worcester\'s "Seven Hills."', borderColor: 'border-brand-navy' },
            { title: 'Triple-Decker Experts', icon: Waves, description: 'We specialize in multi-unit heating and cooling systems common in Worcester\'s historic triple-decker apartments.', borderColor: 'border-brand-gold' },
            { title: 'Harsh Winters', icon: FileQuestion, description: 'Central Mass gets hit hard. Our emergency response team is built for the Worcester winter grind.', borderColor: 'border-brand-navy' }
        ],
        faq: [
            { q: "Do you offer emergency HVAC service in Worcester?", a: "Yes, we provide 24/7 emergency response for heating and cooling issues throughout the Worcester area." },
            { q: "Are you familiar with Worcester building codes?", a: "Absolutely. We pull all necessary permits with Worcester City Hall and ensure every job exceeds local standards." }
        ]
    },
    'brockton': {
        name: 'Brockton',
        county: 'Plymouth',
        tagline: 'Local Home Service Experts in the City of Champions',
        description: 'Providing champion-level heating and cooling services to homeowners across Brockton and the South Shore.',
        aboutCity: 'Brockton homeowners trust A.W. Puma for honest pricing and dependable service. We know the local neighborhoods from Montello to Campello.',
        stats: [
            { label: 'Local Projects', value: '250+' },
            { label: 'Response Time', value: 'Rapid' },
            { label: 'Trust Score', value: '5/5' }
        ],
        quirks: [
            { title: 'Housing Variety', icon: Building, description: 'From post-war ranch homes to newer developments, we have solutions for every era of Brockton architecture.', borderColor: 'border-brand-navy' },
            { title: 'South Shore Savvy', icon: Waves, description: 'We understand the humidity and weather patterns that affect South Shore homes and their HVAC needs.', borderColor: 'border-brand-gold' },
            { title: 'Efficient Solutions', icon: FileQuestion, description: 'We focus on Mass Save® rebates to help Brockton homeowners lower their utility bills significantly.', borderColor: 'border-brand-navy' }
        ],
        faq: [
            { q: "Can you help with Mass Save benefits in Brockton?", a: "Yes! We are a certified partner and can help you access rebates for insulation and high-efficiency systems." }
        ]
    },
    // Adding short versions for others to save space, but will be fully functional
    'lawrence': {
        name: 'Lawrence',
        county: 'Essex',
        tagline: 'Expert Home Services in the Merrimack Valley',
        description: 'Reliable heating and cooling solutions for Lawrence homeowners.',
        aboutCity: 'Serving the diverse housing needs of the Merrimack Valley with professional care.',
        stats: [{ label: 'Essex Projects', value: '200+' }, { label: 'Pro Team', value: 'North Shore' }, { label: 'Licensed', value: 'Yes' }],
        quirks: [{ title: 'Mill City Pros', icon: Building, description: 'Expertise in both historic mill-era homes and modern developments.', borderColor: 'border-brand-navy' }],
        faq: [{ q: "Do you service the entire Merrimack Valley?", a: "Yes, our Lawrence team covers the entire surrounding region." }]
    },
    'lowell': {
        name: 'Lowell',
        county: 'Middlesex',
        tagline: 'Professional Heating & Cooling in Lowell',
        description: 'Trusted home services for the Lowell community.',
        aboutCity: 'Providing expert maintenance for Lowell\'s unique mix of historic and modern homes.',
        stats: [{ label: 'Middlesex Pros', value: '300+' }, { label: 'Service', value: 'Daily' }, { label: 'Rated', value: '5 Stars' }],
        quirks: [{ title: 'Middlesex Experts', icon: Building, description: 'Familiar with Lowell\'s specific building codes and requirements.', borderColor: 'border-brand-navy' }],
        faq: [{ q: "How fast can you get to Lowell?", a: "We have multiple technicians stationed in Middlesex County for rapid response." }]
    },
    'cambridge': {
        name: 'Cambridge',
        county: 'Middlesex',
        tagline: 'Smart Home Services for Cambridge',
        description: 'High-efficiency heating and cooling solutions for Cambridge residents.',
        aboutCity: 'Specializing in the tight urban spaces and historic requirements of Cambridge.',
        stats: [{ label: 'Cambridge Jobs', value: '350+' }, { label: 'Speed', value: 'Rapid' }, { label: 'Quality', value: 'Elite' }],
        quirks: [{ title: 'Urban Scale', icon: Building, description: 'Expertise in mini-split and compact systems for Cambridge homes.', borderColor: 'border-brand-navy' }],
        faq: [{ q: "Do you handle permitting in Cambridge?", a: "Yes, we are familiar with all Cambridge DPW and building department requirements." }]
    },
    'wellesley': {
        name: 'Wellesley',
        county: 'Norfolk',
        tagline: 'Premium Home Services for Wellesley',
        description: 'Elite heating and cooling for Wellesley homeowners.',
        aboutCity: 'Delivering the level of detail and service Wellesley residents expect.',
        stats: [{ label: 'Norfolk Elite', value: '400+' }, { label: 'Referrals', value: '100s' }, { label: 'Guaranteed', value: 'Yes' }],
        quirks: [{ title: 'High Standards', icon: Building, description: 'Meticulous attention to detail in every remodel and repair.', borderColor: 'border-brand-navy' }],
        faq: [{ q: "Do you offer financing for Wellesley projects?", a: "Yes, we offer various financing options including the Mass Save® HEAT Loan." }]
    },
    'needham': {
        name: 'Needham',
        county: 'Norfolk',
        tagline: 'Trusted Home Services in Needham',
        description: 'Reliable heating, cooling, and boiler systems for Needham families.',
        aboutCity: 'Your local partner for all things home maintenance in Needham.',
        stats: [{ label: 'Local Jobs', value: '300+' }, { label: 'Response', value: 'Quick' }, { label: 'Service', value: 'A+' }],
        quirks: [{ title: 'Family-Focused', icon: Building, description: 'Clean, professional service that respects your home and family.', borderColor: 'border-brand-navy' }],
        faq: [{ q: "What services do you provide in Needham?", a: "We provide full-service heating, cooling, and boiler services." }]
    },
    'winchester': {
        name: 'Winchester',
        county: 'Middlesex',
        tagline: 'Expert Home Services for Winchester',
        description: 'Quality heating and cooling tailored for Winchester homes.',
        aboutCity: 'Maintaining the beauty and comfort of Winchester\'s residential architecture.',
        stats: [{ label: 'Winchester Work', value: '200+' }, { label: 'Local', value: 'Yes' }, { label: 'Pro', value: 'Certified' }],
        quirks: [{ title: 'Architectural Care', icon: Building, description: 'Respecting the character of Winchester\'s historic homes.', borderColor: 'border-brand-navy' }],
        faq: [{ q: "Do you work on historic homes in Winchester?", a: "Yes, we specialize in modern upgrades for historic properties." }]
    },
    'dover': {
        name: 'Dover',
        county: 'Norfolk',
        tagline: 'Reliable Home Services for Dover',
        description: 'Expert heating and cooling for Dover residents.',
        aboutCity: 'Providing professional care for Dover\'s unique residential properties.',
        stats: [{ label: 'Norfolk Pro', value: '150+' }, { label: 'Response', value: 'Fast' }, { label: 'Quality', value: 'Top' }],
        quirks: [{ title: 'Estate Service', icon: Building, description: 'Specialized care for larger residential estates and systems.', borderColor: 'border-brand-navy' }],
        faq: [{ q: "Are you familiar with Dover building requirements?", a: "Yes, we work regularly with Dover local departments." }]
    },
    'new-bedford': {
        name: 'New Bedford',
        county: 'Bristol',
        tagline: 'Professional Home Services in New Bedford',
        description: 'Trusted heating and cooling for the South Coast.',
        aboutCity: 'Serving the New Bedford community with dependable home solutions.',
        stats: [{ label: 'Bristol Jobs', value: '250+' }, { label: 'Team', value: 'South Coast' }, { label: 'Service', value: 'Rapid' }],
        quirks: [{ title: 'Coastal Care', icon: Building, description: 'Systems designed to handle the coastal environment of New Bedford.', borderColor: 'border-brand-navy' }],
        faq: [{ q: "Do you service the entire South Coast area?", a: "Yes, our New Bedford team covers the surrounding region." }]
    }
};

export const CityLocation: React.FC = () => {
    const { cityName } = useParams<{ cityName: string }>();
    const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

    const data = cityName ? CITY_DATA[cityName.toLowerCase()] : null;

    if (!data) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-3xl font-serif font-bold text-brand-navy mb-4">Location Not Found</h1>
                    <Link to="/locations" className="text-brand-orange font-bold hover:underline">
                        View All Locations →
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-white">
            <SEO
                title={`Heating & Cooling Services ${data.name} MA | A.W. Puma`}
                description={`Premium home services in ${data.name}, Massachusetts. Expert ${data.county} County heating and cooling solutions for local homeowners.`}
                keywords={`heating services ${data.name} MA, AC ${data.name}, cooling contractor ${data.name} Massachusetts`}
                canonical={`https://awpumahome.com/locations/city/${cityName}`}
            />
            {/* 1. HERO SECTION */}
            <section className="relative min-h-[70vh] flex flex-col justify-center items-center pt-24 pb-16">
                <div className="absolute inset-0 z-0" style={{ backgroundColor: '#153760' }} />

                <div className="relative z-10 max-w-7xl mx-auto px-4 w-full text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-gold/20 border border-brand-gold/50 backdrop-blur-md mb-8">
                        <MapPin size={16} className="text-brand-gold" />
                        <span className="text-sm font-bold text-brand-gold uppercase tracking-widest">{data.county} County Experts</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-serif font-bold tracking-tight text-white mb-6 leading-tight drop-shadow-2xl">
                        <span className="text-brand-gold">{data.name} Home Services</span>
                    </h1>

                    <p className="text-xl text-gray-200 mb-10 max-w-2xl mx-auto leading-relaxed font-light">
                        {data.description}
                    </p>

                    <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                        <Button size="lg" icon={<ArrowRight size={18} />}>
                            Request Service in {data.name}
                        </Button>
                        <a href="tel:6176183366">
                            <Button size="lg" variant="navy" icon={<Phone size={18} />}>
                                Call (617) 618-3366
                            </Button>
                        </a>
                    </div>
                </div>
            </section>

            {/* 2. THE RELEVANCE LAYER */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-serif font-bold text-brand-navy mb-4">Local Expertise Matters</h2>
                        <p className="text-brand-gray max-w-2xl mx-auto">
                            {data.aboutCity}
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {data.quirks.map((quirk, idx) => (
                            <div key={idx} className={`bg-gray-50 p-8 rounded-sm border-b-4 ${quirk.borderColor}`}>
                                <div className="bg-white w-12 h-12 rounded-full flex items-center justify-center mb-6 shadow-sm">
                                    <quirk.icon size={24} className="text-brand-navy" />
                                </div>
                                <h3 className="text-xl font-bold text-brand-navy mb-3">{quirk.title}</h3>
                                <p className="text-brand-gray">{quirk.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3. PROOF LAYER */}
            <section className="py-24 bg-gray-50 leading-relaxed text-center">
                <div className="max-w-7xl mx-auto px-4">
                    <h2 className="text-3xl font-serif font-bold text-brand-navy mb-12">Trusted in {data.name} and Beyond</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {data.stats.map((stat, idx) => (
                            <div key={idx} className="p-8 bg-white shadow-sm rounded-sm">
                                <div className="text-3xl font-bold text-brand-gold mb-2">{stat.value}</div>
                                <div className="text-sm text-brand-gray-light font-bold uppercase tracking-widest">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. SERVICES GRID */}
            <section className="py-20 bg-white border-t border-gray-100">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-14">
                        <h2 className="text-3xl font-serif font-bold text-brand-navy mb-4">
                            Services We Provide in {data.name}
                        </h2>
                        <p className="text-brand-gray max-w-2xl mx-auto">
                            Full-service home solutions delivered by licensed, local professionals.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-6">
                        {SERVICES.slice(0, 6).map((service) => (
                            <Link
                                key={service.name}
                                to={service.href}
                                className="bg-gray-50 p-6 rounded-xl border border-gray-200 hover:border-brand-orange/30 hover:shadow-md transition-all duration-200 group"
                            >
                                <div className={`w-12 h-12 rounded-lg ${service.bgColor} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                                    <service.icon size={24} className={service.color} />
                                </div>
                                <h3 className="font-bold text-brand-navy text-lg mb-2 group-hover:text-brand-orange transition-colors">
                                    {service.name}
                                </h3>
                                <p className="text-sm text-brand-gray">{service.description}</p>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* 5. FAQ */}
            <section className="py-24 bg-gray-50">
                <div className="max-w-3xl mx-auto px-4">
                    <h2 className="text-3xl font-serif font-bold text-brand-navy mb-12 text-center">{data.name} Service FAQ</h2>
                    <div className="space-y-4">
                        {data.faq.map((faq, index) => (
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

            {/* Final CTA */}
            <section className="py-20 bg-brand-navy text-center text-white">
                <div className="max-w-3xl mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-serif font-bold mb-5">
                        Ready to Start Your {data.name} Project?
                    </h2>
                    <p className="text-gray-300 text-lg mb-8">
                        Join hundreds of satisfied homeowners in {data.name} who trust A.W. Puma for premium home services.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link to="/contact">
                            <Button size="lg" variant="primary" icon={<ArrowRight size={18} />}>
                                Get Free Quote
                            </Button>
                        </Link>
                        <a href="tel:6176183366" className="inline-block py-3 px-6 border border-white/20 rounded-md hover:bg-white/10 transition-colors">
                            Call (617) 618-3366
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

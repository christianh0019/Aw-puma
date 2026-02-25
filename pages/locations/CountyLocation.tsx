import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { MapPin, ArrowRight, CheckCircle2, Phone, Shield, Clock, Star } from 'lucide-react';
import { Button } from '../../components/ui/Button';
import { SERVICES } from '../../components/Navbar';
import { SEO } from '../../components/SEO';

// County data with descriptions and details
export const COUNTY_DATA: Record<string, {
    name: string;
    tagline: string;
    description: string;
    cities: string[];
    stats: { label: string; value: string }[];
}> = {
    suffolk: {
        name: 'Suffolk',
        tagline: 'Trusted Home Services in the Heart of Boston',
        description: 'From Back Bay brownstones to South Boston triple-deckers, our Suffolk County team delivers expert HVAC, plumbing, and home services tailored to the unique needs of urban living.',
        cities: ['Boston', 'Revere', 'Chelsea', 'Winthrop'],
        stats: [
            { label: 'Years Serving Suffolk', value: '15+' },
            { label: 'Happy Customers', value: '2,500+' },
            { label: 'Average Response Time', value: '2 hrs' },
        ],
    },
    middlesex: {
        name: 'Middlesex',
        tagline: 'Expert Home Services Across Greater Boston',
        description: 'As the most populous county in Massachusetts, Middlesex County homes range from historic colonials to modern builds. Our technicians are familiar with every neighborhood from Cambridge to Lowell.',
        cities: ['Cambridge', 'Lowell', 'Newton', 'Somerville', 'Framingham', 'Waltham', 'Medford', 'Malden'],
        stats: [
            { label: 'Years Serving Middlesex', value: '15+' },
            { label: 'Happy Customers', value: '5,000+' },
            { label: 'Average Response Time', value: '90 min' },
        ],
    },
    norfolk: {
        name: 'Norfolk',
        tagline: 'Reliable Home Services South of Boston',
        description: 'From Brookline to Braintree, Norfolk County homeowners trust A.W. Puma for prompt, professional HVAC and plumbing services. We know the area and we know the homes.',
        cities: ['Brookline', 'Quincy', 'Braintree', 'Weymouth', 'Milton', 'Needham', 'Dedham'],
        stats: [
            { label: 'Years Serving Norfolk', value: '12+' },
            { label: 'Happy Customers', value: '3,000+' },
            { label: 'Average Response Time', value: '2 hrs' },
        ],
    },
    plymouth: {
        name: 'Plymouth',
        tagline: 'Home Services for the South Shore',
        description: 'Plymouth County homeowners face unique challenges — from coastal weather exposure to older heating systems. Our team specializes in solutions built for South Shore living.',
        cities: ['Plymouth', 'Brockton', 'Marshfield', 'Duxbury', 'Hingham', 'Scituate', 'Kingston'],
        stats: [
            { label: 'Years Serving Plymouth', value: '10+' },
            { label: 'Happy Customers', value: '1,800+' },
            { label: 'Average Response Time', value: '2 hrs' },
        ],
    },
    essex: {
        name: 'Essex',
        tagline: 'Trusted Home Services on the North Shore',
        description: 'From Salem to Newburyport, Essex County homes demand special attention. Our technicians understand the coastal climate and historic architecture that define North Shore living.',
        cities: ['Salem', 'Peabody', 'Lawrence', 'Haverhill', 'Gloucester', 'Newburyport', 'Beverly'],
        stats: [
            { label: 'Years Serving Essex', value: '12+' },
            { label: 'Happy Customers', value: '2,200+' },
            { label: 'Average Response Time', value: '2 hrs' },
        ],
    },
    worcester: {
        name: 'Worcester',
        tagline: 'Expert Home Services in Central Mass',
        description: 'Worcester County is the largest county in Massachusetts. From the city of Worcester to the rural hill towns, our team delivers fast, reliable home services throughout Central Mass.',
        cities: ['Worcester', 'Fitchburg', 'Leominster', 'Shrewsbury', 'Milford', 'Southbridge', 'Webster'],
        stats: [
            { label: 'Years Serving Worcester', value: '10+' },
            { label: 'Happy Customers', value: '2,000+' },
            { label: 'Average Response Time', value: '2 hrs' },
        ],
    },
    bristol: {
        name: 'Bristol',
        tagline: 'Dependable Home Services in Southeastern Mass',
        description: 'Bristol County homeowners count on A.W. Puma for everything from emergency furnace repairs in Fall River to new AC installations in Taunton. Fast response, fair pricing.',
        cities: ['Fall River', 'New Bedford', 'Taunton', 'Attleboro', 'Easton', 'Dartmouth', 'Mansfield'],
        stats: [
            { label: 'Years Serving Bristol', value: '8+' },
            { label: 'Happy Customers', value: '1,500+' },
            { label: 'Average Response Time', value: '2.5 hrs' },
        ],
    },
};

export const CountyLocation: React.FC = () => {
    const { county } = useParams<{ county: string }>();
    const data = county ? COUNTY_DATA[county] : null;

    if (!data) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-3xl font-serif font-bold text-brand-navy mb-4">County Not Found</h1>
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
                title={`${data.name} County Home Services | A.W. Puma`}
                description={`Premium HVAC, plumbing, and electrical services across ${data.name} County. Serving ${data.cities.slice(0, 3).join(', ')}, and surrounding Massachusetts areas.`}
                keywords={`regional home services, Massachusetts service area, local HVAC experts, ${data.name} County plumber`}
                canonical={`https://awpumahome.com/locations/${county}`}
            />
            {/* Hero */}
            <section className="relative min-h-[70vh] flex flex-col justify-center items-center pt-24 pb-16" style={{ backgroundColor: '#153760' }}>
                <div className="absolute inset-0" />

                <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-orange/20 border border-brand-orange/40 backdrop-blur-md mb-8">
                        <MapPin size={16} className="text-brand-orange" />
                        <span className="text-sm font-bold text-brand-orange uppercase tracking-widest">
                            {data.name} County
                        </span>
                    </div>

                    <h1 className={`text-4xl md:text-6xl font-serif font-bold mb-6 leading-tight ${county === 'norfolk' ? 'text-brand-orange' : 'text-white'}`}>
                        {data.tagline}
                    </h1>

                    <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
                        {data.description}
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link to="/contact">
                            <Button size="lg" variant="primary" icon={<ArrowRight size={18} />}>
                                Schedule Service in {data.name}
                            </Button>
                        </Link>
                        <a href="tel:6176183366">
                            <Button size="lg" variant="navy" icon={<Phone size={18} />}>
                                Call (617) 618-3366
                            </Button>
                        </a>
                    </div>
                </div>
            </section>

            {/* Stats Bar */}
            <section className="bg-gray-50 border-b border-gray-200">
                <div className="max-w-5xl mx-auto px-4 py-8 grid grid-cols-3 gap-6 text-center">
                    {data.stats.map((stat) => (
                        <div key={stat.label}>
                            <div className="text-2xl md:text-3xl font-bold text-brand-orange">{stat.value}</div>
                            <div className="text-sm text-brand-gray mt-1">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Services Available */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-14">
                        <h2 className="text-3xl font-serif font-bold text-brand-navy mb-4">
                            Our Services in {data.name} County
                        </h2>
                        <p className="text-brand-gray max-w-2xl mx-auto">
                            Full-service home solutions with same-day availability in {data.name} County and surrounding areas.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-6">
                        {SERVICES.map((service) => (
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

            {/* Why Choose Us */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4">
                    <h2 className="text-3xl font-serif font-bold text-brand-navy mb-12 text-center">
                        Why {data.name} County Homeowners Choose Us
                    </h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="text-center">
                            <div className="w-16 h-16 rounded-2xl bg-brand-orange/10 flex items-center justify-center mx-auto mb-5">
                                <Clock size={28} className="text-brand-orange" />
                            </div>
                            <h3 className="font-bold text-brand-navy text-lg mb-2">Fast Response</h3>
                            <p className="text-brand-gray text-sm">Same-day service for emergencies. We're local, so we get there fast.</p>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 rounded-2xl bg-green-50 flex items-center justify-center mx-auto mb-5">
                                <Shield size={28} className="text-green-600" />
                            </div>
                            <h3 className="font-bold text-brand-navy text-lg mb-2">Licensed & Insured</h3>
                            <p className="text-brand-gray text-sm">Fully licensed in Massachusetts. Every job is backed by our satisfaction guarantee.</p>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 rounded-2xl bg-yellow-50 flex items-center justify-center mx-auto mb-5">
                                <Star size={28} className="text-yellow-500" />
                            </div>
                            <h3 className="font-bold text-brand-navy text-lg mb-2">5-Star Rated</h3>
                            <p className="text-brand-gray text-sm">Hundreds of 5-star reviews from homeowners across {data.name} County.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Cities We Serve  */}
            <section className="py-20 bg-white">
                <div className="max-w-5xl mx-auto px-4">
                    <h2 className="text-3xl font-serif font-bold text-brand-navy mb-4 text-center">
                        Cities & Towns We Serve in {data.name} County
                    </h2>
                    <p className="text-brand-gray text-center mb-10 max-w-2xl mx-auto">
                        Our technicians provide service throughout {data.name} County, including these communities and more.
                    </p>
                    <div className="flex flex-wrap justify-center gap-3">
                        {data.cities.map((city) => (
                            <div
                                key={city}
                                className="flex items-center gap-2 px-5 py-3 bg-gray-50 border border-gray-200 rounded-xl text-brand-navy font-semibold text-sm"
                            >
                                <MapPin size={14} className="text-brand-orange" />
                                {city}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-20 bg-brand-navy text-center">
                <div className="max-w-3xl mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-5">
                        Need Service in {data.name} County?
                    </h2>
                    <p className="text-gray-300 text-lg mb-8">
                        Call or book online — we'll have a licensed technician at your door same-day.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link to="/contact">
                            <Button size="lg" variant="primary" icon={<ArrowRight size={18} />}>
                                Get a Free Quote
                            </Button>
                        </Link>
                        <a href="tel:6176183366">
                            <Button size="lg" variant="outline" icon={<Phone size={18} />} className="border-white text-white hover:bg-white/10">
                                (617) 618-3366
                            </Button>
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

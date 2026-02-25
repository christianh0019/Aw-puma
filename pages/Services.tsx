import React from 'react';
import { ServiceGrid } from '../components/ServiceGrid';
import { SEO } from '../components/SEO';

export const Services: React.FC = () => {
    return (
        <div className="bg-white pt-24">
            <SEO
                title="Expert Home Services in Boston | A.W. Puma"
                description="Explore our full suite of premium home services including Furnace, AC, Heat Pump, Mini Splits, and Boiler systems. Quality craftsmanship guaranteed."
                keywords="residential home services, hvac services Boston, air conditioning, furnace, boiler, mini-splits, heat pump"
                canonical="https://awpumahome.com/services"
            />
            <section className="bg-brand-navy text-white py-20 text-center">
                <div className="max-w-7xl mx-auto px-4">
                    <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">Our Premium Services</h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        Comprehensive home improvement solutions delivered with engineering precision and white-glove care.
                    </p>
                </div>
            </section>

            <div className="py-12">
                <ServiceGrid />
            </div>
        </div>
    );
};

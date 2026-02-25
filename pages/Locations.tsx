import React from 'react';
import { SEO } from '../components/SEO';
import { ServiceAreas } from '../components/ServiceAreas';

export const Locations: React.FC = () => {
    return (
        <div className="bg-white pt-16">
            <SEO
                title="Service Areas in Greater Boston & Metro West | A.W. Puma"
                description="A.W. Puma serves Massachusetts areas across 7 counties with premium home services."
                keywords="home services service area, Massachusetts HVAC, A.W. Puma locations, Newton HVAC, Cambridge heating"
                canonical="https://awpumahome.com/locations"
            />
            <ServiceAreas />
        </div>
    );
};

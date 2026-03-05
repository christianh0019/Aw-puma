import React from 'react';
import { Testimonials } from './Testimonials';
import { FAQ } from './FAQ';
import { FinalCTA } from './FinalCTA';

export const GlobalBottomSections: React.FC = () => {
    return (
        <>
            <Testimonials />
            <FAQ />
            <FinalCTA />
        </>
    );
};

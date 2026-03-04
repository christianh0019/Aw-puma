import React from 'react';
import { Hero } from '../components/Hero';
import { ServiceGrid } from '../components/ServiceGrid';
import { Process } from '../components/Process';
import { ServiceAreas } from '../components/ServiceAreas';
import { MassSave } from '../components/MassSave';
import { Testimonials } from '../components/Testimonials';
import { FAQ } from '../components/FAQ';
import { FinalCTA } from '../components/FinalCTA';
import { SEO } from '../components/SEO';

export const Home: React.FC = () => {
  return (
    <>
      <SEO
        title="Heat Pump Installation & Mini Splits | A.W. Puma HVAC Contractor"
        description="Greater Boston's trusted Mass Save Contractor for heat pump installation and energy-efficient cooling. Always There. Always Fair."
        keywords="heat pump installation, mini splits, HVAC contractor Massachusetts, Mass Save contractor, heating and cooling services, A.W. Puma Home Services"
        canonical="https://awpumahome.com/"
      />
      <Hero />
      <ServiceGrid />
      <Process />
      <ServiceAreas />
      <MassSave />
      <Testimonials />
      <FAQ />
      <FinalCTA />
    </>
  );
};

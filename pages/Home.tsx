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
        title="A.W. Puma Home Services | Premium HVAC, Plumbing & Electrical"
        description="Greater Boston's trusted partner for high-efficiency HVAC, expert plumbing, and licensed electrical services. Always There. Always Fair."
        keywords="premium home services Boston, HVAC contractor Massachusetts, plumbing and electrical services, A.W. Puma Home Services, heat pump installation, central air repair"
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

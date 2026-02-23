import React from 'react';
import { Hero } from '../components/Hero';
import { ServiceGrid } from '../components/ServiceGrid';
import { Process } from '../components/Process';
import { ServiceAreas } from '../components/ServiceAreas';
import { MassSave } from '../components/MassSave';
import { Testimonials } from '../components/Testimonials';
import { FAQ } from '../components/FAQ';
import { FinalCTA } from '../components/FinalCTA';

export const Home: React.FC = () => {
  return (
    <>
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

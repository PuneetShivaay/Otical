import React from 'react';
import HeroSection from '../components/Home/HeroSection';
import FeatureSection from '../components/Home/FeatureSection';
import Workflow from '../components/Home/Workflow';
import Testimonials from '../components/Home/Testimonials';
import Projects from '../components/Projects/Projects';
import Contact from '../components/Contact/Contact';
import Services from '../components/Services/Services';

function Home() {
  return (
    <>
      <HeroSection />
      <FeatureSection />
      <Services />
      <Workflow />
      <Projects />
      <Testimonials />
      <Contact />
    </>
  );
}

export default Home;

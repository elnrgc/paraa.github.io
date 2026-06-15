import React from 'react';
import {
  Hero,
  Features,
  SuccessStories,
  HowItWorks,
  Testimonials,
  FAQ,
  CTA
} from '../components/home';
import { HeroBannerAd } from '../components/AdBanner';

export const Home: React.FC = () => (
  <>
    <Hero />
    <HeroBannerAd />
    <Features />
    <HowItWorks />
    <SuccessStories />
    <Testimonials />
    <FAQ />
    <CTA />
  </>
);

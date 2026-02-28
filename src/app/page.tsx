'use client';

import Header from '@/components/Header';
import InteractiveMockup from '@/components/InteractiveMockup';
import Influencers from '@/components/Influencers';
import Features from '@/components/Features';
import WhyChoose from '@/components/WhyChoose';
import Testimonials from '@/components/Testimonials';
import Ratings from '@/components/Ratings';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <InteractiveMockup />
        <Influencers />
        <Features />
        <WhyChoose />
        <Testimonials />
        <Ratings />
        <CTA />
      </main>
      <Footer />
    </>
  );
}

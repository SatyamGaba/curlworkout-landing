'use client';

import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Influencers from '@/components/Influencers';
import Features from '@/components/Features';
import WhyChoose from '@/components/WhyChoose';
import DarkMode from '@/components/DarkMode';
import Testimonials from '@/components/Testimonials';
import Ratings from '@/components/Ratings';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Influencers />
        <Features />
        <WhyChoose />
        <DarkMode />
        <Testimonials />
        <Ratings />
        <CTA />
      </main>
      <Footer />
    </>
  );
}

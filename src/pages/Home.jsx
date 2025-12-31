import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Stats from '../components/Stats';
import Services from '../components/Services';
import Portfolio from '../components/Portfolio';
import Pricing from '../components/Pricing';
import Guarantees from '../components/Guarantees';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

/**
 * Home Page - Página principal que integra todos los componentes
 */
const Home = () => {
  return (
    <main className="min-h-screen bg-black font-poppins">
      <Header />
      <Hero />
      <Stats />
      <Services />
      <Portfolio />
      <Pricing />
      <Guarantees />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
};

export default Home;

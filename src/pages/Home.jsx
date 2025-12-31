import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Portfolio from '../components/Portfolio';
import Testimonials from '../components/Testimonials';
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
      <Services />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
};

export default Home;

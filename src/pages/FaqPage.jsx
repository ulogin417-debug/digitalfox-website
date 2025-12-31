import React from 'react';
import Header from '../components/Header';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';

const FaqPage = () => {
  return (
    <main className="min-h-screen bg-black font-poppins">
      <Header />
      <FAQ />
      <Footer />
    </main>
  );
};

export default FaqPage;

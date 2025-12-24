import React from 'react';

/**
 * Hero Section Component
 * Sección principal con slogan y CTA
 */
const Hero = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative w-full h-screen flex items-center justify-center overflow-hidden pt-16 bg-gradient-to-br from-black via-dark to-black">
      {/* Background decorativo */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-primary rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-primary rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Contenido */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-in">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
          Soluciones Tecnológicas, Digitales y de Hogar
          <br />
          <span className="text-accent">que puedes confiar</span>
        </h1>
        
        <p className="text-lg sm:text-xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
          En <span className="font-semibold text-primary">DigitalFox</span> ofrecemos servicios profesionales en reparación de computadoras, desarrollo web, instalaciones eléctricas y climatización. 
          Calidad garantizada, respuesta rápida, precios justos.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={scrollToContact}
            className="bg-accent text-white px-10 py-4 rounded-lg font-bold text-lg hover:bg-orange-600 transition duration-300 transform hover:scale-105 hover:shadow-2xl shadow-xl"
          >
            Solicita tu Presupuesto
          </button>
          <button
            onClick={scrollToContact}
            className="border-2 border-primary text-primary px-10 py-4 rounded-lg font-bold text-lg hover:bg-primary hover:text-white transition duration-300 transform hover:scale-105"
          >
            Contáctanos Ahora
          </button>
        </div>

        {/* Beneficio */}
        <div className="mt-12 text-gray-400 text-sm">
          <p className="font-semibold text-white mb-2">✓ Respuesta garantizada en menos de 24 horas</p>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-primary"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;

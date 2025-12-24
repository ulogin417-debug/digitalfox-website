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
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
          <span className="text-primary">DigitalFox</span>
          {' – Soluciones rápidas en tecnología, digital y hogar'}
        </h1>
        
        <p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
          Servicio profesional en reparación de computadoras, desarrollo de proyectos, instalaciones eléctricas y más. Tu confianza, nuestra excelencia.
        </p>

        {/* CTA Button */}
        <button
          onClick={scrollToContact}
          className="bg-primary text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-600 transition duration-300 transform hover:scale-105 hover:shadow-2xl shadow-lg"
        >
          Contáctame
        </button>
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

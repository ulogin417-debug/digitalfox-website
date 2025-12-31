import React, { useState, useEffect } from 'react';
import Home from './pages/Home';
import BlogPage from './pages/BlogPage';
import FloatingCTA from './components/FloatingCTA';
import './index.css';

/**
 * App Component - Punto de entrada principal de la aplicación
 * Gestiona el enrutamiento (Home y Blog) y componentes globales
 */
function App() {
  const [currentPage, setCurrentPage] = useState('home');

  // Detectar cambios en la URL (hash routing)
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1);
      if (hash === 'blogs') {
        setCurrentPage('blogs');
      } else {
        setCurrentPage('home');
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange(); // Llamar una vez al cargar
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Schema.org Markup para SEO
  useEffect(() => {
    const schemaScript = document.createElement('script');
    schemaScript.type = 'application/ld+json';
    schemaScript.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      name: 'DigitalFox',
      description: 'Soluciones profesionales en tecnología, digital y hogar',
      url: 'https://digitalfox-website.vercel.app',
      telephone: '+595991836168',
      email: 'digitalfoxjym@gmail.com',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Asunción',
        addressCountry: 'PY',
      },
      areaServed: ['PY'],
      priceRange: '₲100000-₲500000',
      image: 'https://digitalfox-website.vercel.app/logo.png',
      sameAs: [
        'https://www.instagram.com/digitalfoxjym',
        'https://www.facebook.com/digitalfox',
      ],
      knowsAbout: [
        'Reparación de Computadoras',
        'Desarrollo Web',
        'Instalación Eléctrica',
        'Aire Acondicionado',
        'Reparación de Celulares',
      ],
    });
    document.head.appendChild(schemaScript);
  }, []);

  return (
    <>
      {currentPage === 'blogs' ? <BlogPage /> : <Home />}
      <FloatingCTA />
    </>
  );
}

export default App;

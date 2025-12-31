import React, { useState, useEffect } from 'react';
import Home from './pages/Home';
import BlogPage from './pages/BlogPage';
import './index.css';

/**
 * App Component - Punto de entrada principal de la aplicación
 * Gestiona el enrutamiento (Home y Blog)
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

  return (
    <>
      {currentPage === 'blogs' ? <BlogPage /> : <Home />}
    </>
  );
}

export default App;

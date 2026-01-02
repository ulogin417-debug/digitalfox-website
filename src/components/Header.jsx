import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

/**
 * Header Component - Navegación principal fija
 * Incluye logo, menú de navegación responsivo
 */
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const menuItems = [
    { label: 'Inicio', href: '#home' },
    { label: 'Nosotros', href: '#nosotros' },
    { label: 'Servicios', href: '#services' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Blogs', href: '#blogs' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contacto', href: '#contact' },
  ];

  return (
    <header className="fixed w-full top-0 z-50 bg-black/95 backdrop-blur shadow-lg border-b border-gray-800">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <a href="#home" className="text-2xl font-bold flex items-center gap-1">
              <span className="text-primary">Digital</span>
              <span className="text-white">Fox</span>
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-1">
              {menuItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-gray-300 hover:text-primary hover:bg-primary/10 px-3 py-2 rounded-md text-sm font-medium transition duration-300 ease-in-out"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-primary hover:text-white focus:outline-none transition duration-300"
              aria-label="Toggle menu"
            >
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-3 pt-2 animate-fade-in border-t border-gray-800">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {menuItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-gray-300 hover:text-primary hover:bg-primary/10 block px-3 py-2 rounded-md text-base font-medium transition duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;

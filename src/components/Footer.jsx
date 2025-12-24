import React from 'react';
import { FaInstagram, FaFacebook, FaWhatsapp } from 'react-icons/fa';

/**
 * Footer Component - Pie de página
 */
const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: 'Inicio', href: '#home' },
    { label: 'Servicios', href: '#services' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Contacto', href: '#contact' },
  ];

  const services = [
    'Reparación de Computadoras',
    'Proyectos Digitales',
    'Instalaciones Eléctricas',
    'Aire Acondicionado',
  ];

  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Logo y descripción */}
          <div>
            <a href="#home" className="text-2xl font-bold mb-4 block">
              <span className="text-primary">Digital</span>
              <span className="text-white">Fox</span>
            </a>
            <p className="text-gray-400 text-sm">
              Soluciones profesionales en tecnología, digital y hogar. Tu confianza, nuestra excelencia.
            </p>
          </div>

          {/* Enlaces rápidos */}
          <div>
            <h4 className="text-white font-bold mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              {quickLinks.map(link => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-primary transition duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Servicios */}
          <div>
            <h4 className="text-white font-bold mb-4">Servicios</h4>
            <ul className="space-y-2">
              {services.map(service => (
                <li key={service}>
                  <span className="text-gray-400 text-sm">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Redes sociales */}
          <div>
            <h4 className="text-white font-bold mb-4">Síguenos</h4>
            <div className="flex gap-3">
              <a
                href="https://www.instagram.com/digitalfoxjym?igsh=MXZteGM5Mjd0dDJ4bQ=="
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-dark hover:bg-primary text-white p-3 rounded-full transition duration-300 transform hover:scale-110"
              >
                <FaInstagram size={18} />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-dark hover:bg-primary text-white p-3 rounded-full transition duration-300 transform hover:scale-110"
              >
                <FaFacebook size={18} />
              </a>
              <a
                href="https://wa.me/595991836168"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-dark hover:bg-primary text-white p-3 rounded-full transition duration-300 transform hover:scale-110"
              >
                <FaWhatsapp size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Línea divisora */}
        <div className="border-t border-gray-800 pt-8">
          <div className="text-center text-gray-400 text-sm">
            <p>© {currentYear} DigitalFox. Todos los derechos reservados.</p>
            <p className="mt-2">Diseñado con ❤️ por DigitalFox Team</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

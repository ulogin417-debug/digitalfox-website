import React from 'react';
import { FaInstagram, FaFacebook, FaWhatsapp, FaMapMarkerAlt, FaEnvelope, FaPhone } from 'react-icons/fa';

/**
 * Footer Component - Pie de página con información completa
 */
const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: 'Inicio', href: '#home' },
    { label: 'Servicios', href: '#services' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Blogs', href: '#blogs' },
    { label: 'Contacto', href: '#contact' },
  ];

  const services = [
    'Reparación de Computadoras',
    'Proyectos Web y Digitales',
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
            <p className="text-gray-400 text-sm leading-relaxed">
              Soluciones profesionales en tecnología, digital y hogar. 
              Tu confianza es nuestra prioridad. Expertos con más de 10 años de experiencia.
            </p>
          </div>

          {/* Enlaces rápidos */}
          <div>
            <h4 className="text-white font-bold mb-4">
              Enlaces Rápidos
            </h4>
            <ul className="space-y-2">
              {quickLinks.map(link => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-primary transition duration-300 text-sm"
                  >
                    → {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Servicios */}
          <div>
            <h4 className="text-white font-bold mb-4">
              Servicios Principales
            </h4>
            <ul className="space-y-2">
              {services.map(service => (
                <li key={service}>
                  <span className="text-gray-400 text-sm">✓ {service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacto directo */}
          <div>
            <h4 className="text-white font-bold mb-4">
              Contacto Directo
            </h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2 text-gray-400 hover:text-primary transition">
                <FaWhatsapp className="text-primary" />
                <a href="https://wa.me/595991836168" target="_blank" rel="noopener noreferrer">
                  +595 991 836 168
                </a>
              </div>
              <div className="flex items-center gap-2 text-gray-400 hover:text-primary transition">
                <FaEnvelope className="text-primary" />
                <a href="mailto:digitalfoxjym@gmail.com">
                  digitalfoxjym@gmail.com
                </a>
              </div>
              <div className="flex items-start gap-2 text-gray-400">
                <FaMapMarkerAlt className="text-primary mt-1 flex-shrink-0" />
                <a href="https://maps.app.goo.gl/ovnRoq5qik88Nh8D7" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition">
                  Asunción, Paraguay
                </a>
              </div>
            </div>

            {/* Redes sociales */}
            <div className="flex gap-3 mt-4">
              <a
                href="https://www.instagram.com/digitalfoxjym?igsh=MXZteGM5Mjd0dDJ4bQ=="
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary/20 hover:bg-primary text-primary hover:text-white p-3 rounded-full transition duration-300 transform hover:scale-110"
                title="Instagram"
              >
                <FaInstagram size={18} />
              </a>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary/20 hover:bg-primary text-primary hover:text-white p-3 rounded-full transition duration-300 transform hover:scale-110"
                title="Facebook"
              >
                <FaFacebook size={18} />
              </a>
              <a
                href="https://wa.me/595991836168?text=Hola%2C%20vengo%20de%20tu%20web%20DigitalFox"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary/20 hover:bg-primary text-primary hover:text-white p-3 rounded-full transition duration-300 transform hover:scale-110"
                title="WhatsApp"
              >
                <FaWhatsapp size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Línea divisora */}
        <div className="border-t border-gray-800 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center text-gray-400 text-sm">
            <div>
              <p>© {currentYear} DigitalFox. Todos los derechos reservados.</p>
            </div>
            <div>
              <p>Respuesta garantizada en menos de 24 horas</p>
            </div>
            <div>
              <p>Diseñado con ❤️ por <span className="text-primary font-semibold">DigitalFox Team</span></p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

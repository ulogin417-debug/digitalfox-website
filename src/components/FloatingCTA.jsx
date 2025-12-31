import React from 'react';
import { FaWhatsapp, FaPhone } from 'react-icons/fa';

const FloatingCTA = () => {
  const handleWhatsApp = () => {
    const message = 'Hola, tengo una consulta sobre vuestros servicios';
    window.open(`https://wa.me/595991836168?text=${encodeURIComponent(message)}`, '_blank');
  };

  const handleCall = () => {
    window.location.href = 'tel:+595991836168';
  };

  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-50">
      {/* WhatsApp Button */}
      <button
        onClick={handleWhatsApp}
        className="group bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl transition duration-300 transform hover:scale-110 flex items-center justify-center"
        title="Contáctanos por WhatsApp"
      >
        <FaWhatsapp size={24} />
        <span className="absolute right-16 bg-green-600 text-white px-3 py-2 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition duration-300 text-sm font-semibold">
          WhatsApp
        </span>
      </button>

      {/* Phone Button */}
      <button
        onClick={handleCall}
        className="group bg-primary hover:bg-blue-600 text-white p-4 rounded-full shadow-2xl transition duration-300 transform hover:scale-110 flex items-center justify-center"
        title="Llamar directamente"
      >
        <FaPhone size={24} />
        <span className="absolute right-16 bg-primary text-white px-3 py-2 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition duration-300 text-sm font-semibold">
          Llamar
        </span>
      </button>
    </div>
  );
};

export default FloatingCTA;

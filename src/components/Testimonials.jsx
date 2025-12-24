import React, { useState } from 'react';
import { FaStar, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

/**
 * Testimonials Component - Carrusel de testimonios
 */
const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'Carlos Mendez',
      role: 'Estudiante',
      content: 'Excelente servicio en mi proyecto universitario. El equipo es muy profesional y dedicado. Recomendado 100%.',
      rating: 5,
      initials: 'CM',
      bgColor: 'bg-blue-500',
    },
    {
      id: 2,
      name: 'María López',
      role: 'Propietaria',
      content: 'Instalaron el aire acondicionado perfectamente. Muy recomendado, profesionales, puntuales y honestos con los precios.',
      rating: 5,
      initials: 'ML',
      bgColor: 'bg-pink-500',
    },
    {
      id: 3,
      name: 'Juan Pérez',
      role: 'Empresario',
      content: 'Repararon mi laptop en tiempo récord. Servicio de calidad a precios justos. El diagnóstico fue muy detallado.',
      rating: 5,
      initials: 'JP',
      bgColor: 'bg-green-500',
    },
    {
      id: 4,
      name: 'Ana García',
      role: 'Profesional de Marketing',
      content: 'Excelente trabajo en mi sitio web. Entendieron mi visión y la ejecutaron perfectamente. Muy creativo el equipo.',
      rating: 5,
      initials: 'AG',
      bgColor: 'bg-purple-500',
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const currentTestimonial = testimonials[currentIndex];

  // Avatar generado con iniciales
  const AvatarGenerator = ({ initials, bgColor }) => {
    return (
      <div className={`${bgColor} w-20 h-20 rounded-full flex items-center justify-center mb-4 border-4 border-accent shadow-lg`}>
        <span className="text-white font-bold text-xl">{initials}</span>
      </div>
    );
  };

  const StarRating = ({ rating }) => {
    return (
      <div className="flex gap-1 mb-4 justify-center">
        {[...Array(5)].map((_, i) => (
          <FaStar
            key={i}
            className={i < rating ? 'text-accent' : 'text-gray-600'}
            size={18}
          />
        ))}
      </div>
    );
  };

  return (
    <section className="py-16 bg-black">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Título */}
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Lo que dicen nuestros <span className="text-accent">clientes</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Testimonios reales de clientes satisfechos con nuestro servicio
          </p>
        </div>

        {/* Carrusel */}
        <div className="bg-dark rounded-lg p-8 sm:p-12 shadow-lg border border-gray-700 hover:border-accent transition duration-300">
          <div className="flex flex-col items-center text-center">
            {/* Avatar */}
            <AvatarGenerator initials={currentTestimonial.initials} bgColor={currentTestimonial.bgColor} />

            {/* Rating */}
            <StarRating rating={currentTestimonial.rating} />

            {/* Contenido */}
            <p className="text-gray-300 text-lg mb-6 italic max-w-2xl leading-relaxed">
              "{currentTestimonial.content}"
            </p>

            {/* Nombre y rol */}
            <h3 className="text-xl font-semibold text-white mb-1">
              {currentTestimonial.name}
            </h3>
            <p className="text-accent font-medium mb-8">{currentTestimonial.role}</p>

            {/* Controles del carrusel */}
            <div className="flex gap-6 items-center">
              <button
                onClick={prevSlide}
                className="bg-accent hover:bg-orange-600 text-white p-3 rounded-full transition duration-300 transform hover:scale-110 shadow-lg"
                aria-label="Testimonial anterior"
              >
                <FaChevronLeft size={18} />
              </button>
              
              {/* Indicadores */}
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`h-2 rounded-full transition duration-300 cursor-pointer ${
                      index === currentIndex ? 'bg-accent w-8' : 'bg-gray-600 w-2 hover:bg-gray-500'
                    }`}
                    aria-label={`Ir al testimonial ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={nextSlide}
                className="bg-accent hover:bg-orange-600 text-white p-3 rounded-full transition duration-300 transform hover:scale-110 shadow-lg"
                aria-label="Siguiente testimonial"
              >
                <FaChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

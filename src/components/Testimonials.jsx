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
      content: 'Excelente servicio en mi proyecto universitario. El equipo es muy profesional y dedicado.',
      rating: 5,
      avatar: 'https://picsum.photos/80/80?random=1',
    },
    {
      id: 2,
      name: 'María López',
      role: 'Homeowner',
      content: 'Instalaron el aire acondicionado perfectamente. Muy recomendado, profesionales y puntuales.',
      rating: 5,
      avatar: 'https://picsum.photos/80/80?random=2',
    },
    {
      id: 3,
      name: 'Juan Pérez',
      role: 'Empresario',
      content: 'Repararon mi laptop en tiempo récord. Servicio de calidad a precios justos.',
      rating: 4,
      avatar: 'https://picsum.photos/80/80?random=3',
    },
    {
      id: 4,
      name: 'Ana García',
      role: 'Profesional',
      content: 'Diseñaron una presentación increíble para mi pitch de negocios. Muy creativo el equipo.',
      rating: 5,
      avatar: 'https://picsum.photos/80/80?random=4',
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

  const StarRating = ({ rating }) => {
    return (
      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <FaStar
            key={i}
            className={i < rating ? 'text-primary' : 'text-gray-600'}
            size={16}
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
            Lo que dicen nuestros <span className="text-primary">clientes</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Testimonios de clientes satisfechos con nuestro servicio
          </p>
        </div>

        {/* Carrusel */}
        <div className="bg-dark rounded-lg p-8 shadow-lg">
          <div className="flex flex-col items-center text-center">
            {/* Avatar */}
            <img
              src={currentTestimonial.avatar}
              alt={currentTestimonial.name}
              className="w-20 h-20 rounded-full mb-4 border-4 border-primary"
            />

            {/* Rating */}
            <StarRating rating={currentTestimonial.rating} />

            {/* Contenido */}
            <p className="text-gray-300 text-lg mb-6 italic max-w-2xl">
              "{currentTestimonial.content}"
            </p>

            {/* Nombre y rol */}
            <h3 className="text-xl font-semibold text-white mb-1">
              {currentTestimonial.name}
            </h3>
            <p className="text-primary font-medium mb-8">{currentTestimonial.role}</p>

            {/* Controles del carrusel */}
            <div className="flex gap-4">
              <button
                onClick={prevSlide}
                className="bg-primary hover:bg-blue-600 text-white p-3 rounded-full transition duration-300 transform hover:scale-110"
              >
                <FaChevronLeft />
              </button>
              
              {/* Indicadores */}
              <div className="flex gap-2 items-center">
                {testimonials.map((_, index) => (
                  <div
                    key={index}
                    className={`h-2 rounded-full transition duration-300 ${
                      index === currentIndex ? 'bg-primary w-8' : 'bg-gray-600 w-2'
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={nextSlide}
                className="bg-primary hover:bg-blue-600 text-white p-3 rounded-full transition duration-300 transform hover:scale-110"
              >
                <FaChevronRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const BeforeAfter = () => {
  const [sliderPosition, setSliderPosition] = useState(50);

  const beforeAfterPairs = [
    {
      title: 'PC Lenta → Optimizada',
      before: '/images/portafolio/REPLAPTOP.avif',
      after: '/images/portafolio/SERVICIOSDIG.webp',
      description: 'Limpieza térmica, upgrade SSD. Resultado: 300% más rápido.',
    },
    {
      title: 'Aire Sucio → Limpio',
      before: '/images/portafolio/ELECTRICA.webp',
      after: '/images/portafolio/INSTALACIONAA.jpg',
      description: 'Limpieza profunda de filtros y evaporador. Garantía 2 años.',
    },
  ];

  const handleMouseMove = (e, index) => {
    const container = e.currentTarget;
    const rect = container.getBoundingClientRect();
    const newPosition = ((e.clientX - rect.left) / rect.width) * 100;
    setSliderPosition(Math.max(0, Math.min(100, newPosition)));
  };

  return (
    <section className="py-16 bg-dark">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">
            Transformaciones <span className="text-primary">Reales</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Antes y después de nuestros trabajos. Arrastra el slider para comparar.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {beforeAfterPairs.map((pair, index) => (
            <div key={index} className="flex flex-col">
              <div
                className="relative w-full h-64 rounded-lg overflow-hidden bg-black border-2 border-primary/30 group cursor-ew-resize"
                onMouseMove={(e) => handleMouseMove(e, index)}
              >
                {/* Before Image */}
                <img
                  src={pair.before}
                  alt="Antes"
                  className="absolute inset-0 w-full h-full object-cover"
                />

                {/* After Image (with clipping) */}
                <div
                  className="absolute inset-0 overflow-hidden transition-all duration-75"
                  style={{ width: `${sliderPosition}%` }}
                >
                  <img
                    src={pair.after}
                    alt="Después"
                    className="absolute inset-0 w-full h-full object-cover"
                    style={{ width: `${(100 / sliderPosition) * 100}%` }}
                  />
                </div>

                {/* Slider Line */}
                <div
                  className="absolute inset-y-0 w-1 bg-primary transition-all duration-75 group-hover:w-2"
                  style={{ left: `${sliderPosition}%` }}
                >
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-primary text-black p-2 rounded-full shadow-lg">
                      <FaChevronLeft size={12} className="inline mr-1" />
                      <FaChevronRight size={12} className="inline" />
                    </div>
                  </div>
                </div>

                {/* Labels */}
                <div className="absolute top-4 left-4 bg-black/80 px-3 py-1 rounded text-white text-sm font-bold">
                  ANTES
                </div>
                <div className="absolute top-4 right-4 bg-primary/80 px-3 py-1 rounded text-white text-sm font-bold">
                  DESPUÉS
                </div>
              </div>

              <div className="mt-4 p-4 bg-black rounded-lg border border-gray-700">
                <h3 className="text-xl font-bold text-white mb-2">{pair.title}</h3>
                <p className="text-gray-400 text-sm">{pair.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BeforeAfter;

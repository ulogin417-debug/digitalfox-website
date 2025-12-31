import React from 'react';
import { FaShieldAlt, FaClock, FaTools, FaThumbsUp } from 'react-icons/fa';

const Guarantees = () => {
  const guarantees = [
    {
      icon: FaShieldAlt,
      title: 'Garantía 30 Días',
      description: 'Todos los repuestos nuevos incluyen garantía de 30 días. Si falla, reparamos sin costo adicional.',
    },
    {
      icon: FaClock,
      title: 'Diagnóstico Gratis',
      description: 'Evaluamos tu equipo sin ningún costo. Cotización clara y sin sorpresas al final.',
    },
    {
      icon: FaTools,
      title: 'Mano de Obra Garantizada',
      description: 'Garantía de 90 días en reparaciones. Si hay problema, lo solucionamos sin costo.',
    },
    {
      icon: FaThumbsUp,
      title: 'Satisfacción 100%',
      description: 'Si no quedas conforme, ajustamos el trabajo. Tu satisfacción es nuestra prioridad.',
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-primary/10 to-primary/5 border-y border-primary/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">
            Protegido con <span className="text-primary">Garantías</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Confianza total. Tu dinero y tiempo están protegidos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {guarantees.map((guarantee, index) => {
            const Icon = guarantee.icon;
            return (
              <div
                key={index}
                className="bg-black/40 backdrop-blur rounded-lg p-6 border border-primary/30 hover:border-primary hover:shadow-xl transition duration-300 text-center"
              >
                <Icon className="text-primary text-4xl mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">
                  {guarantee.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {guarantee.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Guarantees;

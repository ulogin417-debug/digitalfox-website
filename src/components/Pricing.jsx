import React from 'react';
import { FaCheck, FaClock, FaHeadset } from 'react-icons/fa';

const Pricing = () => {
  const plans = [
    {
      name: 'Servicio Básico',
      price: 'Desde ₲100.000',
      description: 'Para reparaciones simples',
      features: [
        'Diagnóstico gratuito',
        'Reparación de hardware simple',
        'Garantía 30 días',
        'Tiempo: 1-2 horas',
        'Sin costo de consulta',
      ],
      popular: false,
      cta: 'Solicitar',
    },
    {
      name: 'Servicio Completo',
      price: 'Desde ₲250.000',
      description: 'La opción más pedida',
      features: [
        'Todo de Básico +',
        'Cambio de componentes (SSD, RAM)',
        'Limpieza profunda y optimización',
        'Garantía 90 días',
        'Tiempo: 2-4 horas',
        'Prioridad en horario',
      ],
      popular: true,
      cta: 'Elegir Plan',
    },
    {
      name: 'Proyecto Personalizado',
      price: 'Presupuesto a medida',
      description: 'Para trabajos grandes',
      features: [
        'Todo de Completo +',
        'Análisis in situ (si aplica)',
        'Instalaciones eléctricas/aire',
        'Desarrollo web y digital',
        'Soporte post-proyecto',
        'Garantía extendida disponible',
      ],
      popular: false,
      cta: 'Cotizar',
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-black to-dark">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">
            Planes y <span className="text-primary">Precios</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Transparencia total. Elige el plan que se ajuste a tu necesidad.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-lg overflow-hidden transition duration-300 transform hover:scale-105 ${
                plan.popular
                  ? 'border-2 border-primary shadow-2xl shadow-primary/50 bg-gradient-to-b from-primary/10 to-black scale-105'
                  : 'border border-gray-700 bg-black hover:border-primary'
              }`}
            >
              {plan.popular && (
                <div className="bg-primary text-black text-center py-2 font-bold text-sm">
                  ⭐ MÁS POPULAR
                </div>
              )}

              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-2">
                  {plan.name}
                </h3>
                <p className="text-gray-400 text-sm mb-4">{plan.description}</p>

                <div className="mb-6">
                  <p className="text-3xl font-bold text-primary">
                    {plan.price}
                  </p>
                  <p className="text-gray-500 text-xs mt-1">
                    Presupuesto sin compromiso
                  </p>
                </div>

                <button
                  onClick={() => {
                    const msg = `Hola, me interesa el plan "${plan.name}"`;
                    window.open(
                      `https://wa.me/595991836168?text=${encodeURIComponent(msg)}`,
                      '_blank'
                    );
                  }}
                  className={`w-full py-3 rounded-lg font-bold transition duration-300 mb-6 ${
                    plan.popular
                      ? 'bg-primary hover:bg-blue-600 text-white'
                      : 'bg-gray-800 hover:bg-gray-700 text-white border border-gray-600'
                  }`}
                >
                  {plan.cta}
                </button>

                <ul className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-300">
                      <FaCheck className="text-primary flex-shrink-0 mt-1" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Extra Info */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="flex items-center justify-center gap-3">
            <FaClock className="text-primary text-2xl" />
            <div>
              <p className="text-white font-bold">Respuesta en menos de 24h</p>
              <p className="text-gray-400 text-sm">Evaluamos tu caso rápidamente</p>
            </div>
          </div>
          <div className="flex items-center justify-center gap-3">
            <FaCheck className="text-primary text-2xl" />
            <div>
              <p className="text-white font-bold">Sin sorpresas</p>
              <p className="text-gray-400 text-sm">Presupuesto claro antes de empezar</p>
            </div>
          </div>
          <div className="flex items-center justify-center gap-3">
            <FaHeadset className="text-primary text-2xl" />
            <div>
              <p className="text-white font-bold">Soporte total</p>
              <p className="text-gray-400 text-sm">Acompañamiento hasta el final</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;

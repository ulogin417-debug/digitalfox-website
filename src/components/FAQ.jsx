import React, { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: '¿Cuál es el costo de un diagnóstico?',
      answer: 'El diagnóstico es 100% GRATIS. Nuestros especialistas evaluarán tu equipo sin ningún costo y te darán una cotización clara con presupuesto y tiempo de reparación.',
    },
    {
      question: '¿Cuánto tiempo toma reparar mi PC/Laptop?',
      answer: 'Depende del problema. Reparaciones simples: 1-2 horas. Cambios de disco: 2-3 horas. Proyectos web: 4-8 semanas. Siempre te avisamos antes.',
    },
    {
      question: '¿Tienen garantía en los servicios?',
      answer: 'Sí, garantía de 30 días en repuestos nuevos y 90 días en reparaciones de mano de obra. Garantía especial de 2 años en instalaciones de aire acondicionado.',
    },
    {
      question: '¿Atienden emergencias? ¿Trabajan fines de semana?',
      answer: 'Sí. Contacta vía WhatsApp y evaluamos disponibilidad. Emergencias pueden tener costo adicional. Respondemos en menos de 24 horas.',
    },
    {
      question: '¿Aceptan todas las formas de pago?',
      answer: 'Efectivo, transferencia bancaria, tarjeta de crédito/débito y pagos por billetera digital. Presupuesto flexible según tu capacidad.',
    },
    {
      question: '¿Dónde están ubicados? ¿Hacen servicio a domicilio?',
      answer: 'Estamos en San lorenzo, Paraguay. Para trabajos en sitio (instalaciones eléctricas, aire) nos desplazamos. Consulta disponibilidad y costos por WhatsApp.',
    },
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-dark">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">
            Preguntas <span className="text-primary">Frecuentes</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Resolvemos tus dudas. ¿No encuentras tu pregunta? Contáctanos por WhatsApp.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-700 rounded-lg overflow-hidden hover:border-primary transition duration-300"
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full flex items-center justify-between p-6 bg-black hover:bg-gray-900 transition duration-300"
              >
                <h3 className="text-lg font-semibold text-white text-left">
                  {faq.question}
                </h3>
                <FaChevronDown
                  className={`text-primary flex-shrink-0 ml-4 transition duration-300 ${
                    activeIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {activeIndex === index && (
                <div className="p-6 bg-gray-900/50 border-t border-gray-700 animate-fade-in">
                  <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center bg-primary/10 rounded-lg p-8 border border-primary/30">
          <h3 className="text-2xl font-bold text-white mb-4">
            ¿Aún tienes dudas?
          </h3>
          <p className="text-gray-300 mb-6">
            Nuestro equipo está disponible 24/7 para responder cualquier pregunta.
          </p>
          <a
            href="https://wa.me/595991836168?text=Hola%2C%20tengo%20una%20pregunta%20sobre%20vuestros%20servicios"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-primary hover:bg-blue-600 text-white px-8 py-3 rounded-lg font-bold transition duration-300 transform hover:scale-105 shadow-lg"
          >
            Contactar por WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;

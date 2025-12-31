import React from 'react';
import { FaLaptop, FaBolt, FaThermometerHalf, FaTools, FaCheckCircle } from 'react-icons/fa';
import DisqusComments from './DisqusComments';

/**
 * Blog Component - Consejos y tips prácticos para SEO y engagement
 */
const Blog = () => {
  const tips = [
    {
      id: 1,
      icon: FaLaptop,
      title: 'Cómo extender la vida útil de tu computadora',
      category: 'Mantenimiento',
      description: 'Descubre los 5 pasos esenciales para mantener tu PC o laptop en perfecto estado y evitar reparaciones costosas.',
      content: '• Limpia el polvo regularmente • Usa antivirus actualizado • No sobrecargues el disco • Controla la temperatura • Haz backup de tus datos',
    },
    {
      id: 2,
      icon: FaThermometerHalf,
      title: 'Guía de mantenimiento de aire acondicionado',
      category: 'Climatización',
      description: 'Tips prácticos para que tu aire acondicionado funcione eficientemente y consuma menos energía.',
      content: '• Limpia los filtros cada 2 semanas • Realiza mantenimiento cada 6 meses • Revisa refrigerante regularmente • Cierra bien las puertas • Usa termostato inteligente',
    },
    {
      id: 3,
      icon: FaBolt,
      title: 'Seguridad eléctrica domiciliaria',
      category: 'Seguridad',
      description: 'Aprende a identificar riesgos eléctricos y cuándo necesitas ayuda profesional para tu hogar.',
      content: '• No sobrecargues enchufes • Usa protectores de sobretensión • Instala diferenciales • Revisa cables periódicamente • Contrata profesionales certificados',
    },
    {
      id: 4,
      icon: FaTools,
      title: 'Reparación de celular: lo que debes saber',
      category: 'Tecnología',
      description: 'Guía completa sobre tipos de daños comunes y cómo prevenirlos.',
      content: '• Usa protectores de pantalla • Evita caídas con funda • Carga con adaptador original • No expongas al agua • Actualiza software regularmente',
    },
    {
      id: 5,
      icon: FaCheckCircle,
      title: 'Señales de que tu PC necesita reparación',
      category: 'Diagnóstico',
      description: 'Identifica los síntomas comunes que indican problemas técnicos en tu computadora.',
      content: '• Ruidos extraños en el disco • Pantalla azul de error • Lentitud extrema • Sobrecalentamiento • Problemas para encender',
    },
    {
      id: 6,
      icon: FaLaptop,
      title: 'Actualizaciones importantes para tu SSD',
      category: 'Upgrade',
      description: 'Por qué actualizar a SSD es la mejor inversión para tu computadora vieja.',
      content: '• 5-10x más rápido que HDD • Mejora rendimiento general • Consumo de batería reducido • Mayor durabilidad • Instalación en 1-2 horas',
    },
  ];

  const TipCard = ({ tip, index }) => {
    const Icon = tip.icon;
    return (
      <div
        className="group bg-dark rounded-lg p-6 hover:shadow-2xl transition duration-300 transform hover:scale-105 border border-gray-700 hover:border-primary cursor-pointer"
        style={{ animationDelay: `${index * 50}ms` }}
      >
        <div className="flex items-start gap-4">
          <Icon className="text-primary text-3xl flex-shrink-0 mt-1" />
          <div className="flex-1">
            <span className="inline-block text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full mb-2">
              {tip.category}
            </span>
            <h3 className="text-lg font-bold text-white mb-2 group-hover:text-primary transition">
              {tip.title}
            </h3>
            <p className="text-gray-400 text-sm mb-4">
              {tip.description}
            </p>
            <div className="text-xs text-gray-500 space-y-1">
              {tip.content.split(' • ').map((item, i) => (
                item && <p key={i}>✓ {item}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section className="py-16 bg-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Título */}
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Centro de <span className="text-primary">Consejos y Tips</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Artículos prácticos para maximizar la vida útil de tus equipos, 
            mantener tu hogar seguro y ahorrar dinero en reparaciones
          </p>
        </div>

        {/* Grid de tips */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tips.map((tip, index) => (
            <TipCard key={tip.id} tip={tip} index={index} />
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center bg-gradient-to-r from-primary/10 to-primary/10 rounded-lg p-8 border border-primary/30">
          <h3 className="text-2xl font-bold text-white mb-4">
            ¿Tienes alguna pregunta específica?
          </h3>
          <p className="text-gray-300 mb-6">
            Nuestros especialistas están listos para ayudarte. Contáctanos sin compromiso.
          </p>
          <a
            href="#contact"
            className="inline-block bg-primary hover:bg-blue-600 text-white px-8 py-3 rounded-lg font-bold transition duration-300 transform hover:scale-105 shadow-lg"
          >
            Consulta Gratis
          </a>
        </div>

        {/* Comentarios (Disqus) */}
        <DisqusComments />
      </div>
    </section>
  );
};

export default Blog;

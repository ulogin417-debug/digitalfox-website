import React from 'react';
import { FaLaptop, FaBolt, FaThermometerHalf, FaTools, FaCheckCircle, FaCode, FaServer } from 'react-icons/fa';
import DisqusComments from './DisqusComments';
import { BLOG_POSTS } from '../data/blogPosts';
import { CONTACT_INFO } from '../config';

/**
 * Blog Component - Consejos y tips prácticos para SEO y engagement
 */
const Blog = () => {
  const tips = BLOG_POSTS.map(p => {
    // map category to icon
    let icon = FaCheckCircle;
    if (p.category === 'Mantenimiento') icon = FaLaptop;
    if (p.category === 'Climatización') icon = FaThermometerHalf;
    if (p.category === 'Seguridad') icon = FaBolt;
    if (p.category === 'Tecnología') icon = FaTools;
    if (p.category === 'Diagnóstico') icon = FaCheckCircle;
    if (p.category === 'Upgrade') icon = FaLaptop;
    if (p.category === 'Programación y Sistemas Informáticos') icon = FaCode;
    return { ...p, icon };
  });

  const TipCard = ({ tip, index }) => {
    const Icon = tip.icon || FaCheckCircle;
    return (
      <div
        onClick={() => { window.location.hash = `#blog/${tip.slug}` }}
        className="group bg-dark rounded-lg p-6 hover:shadow-2xl transition duration-300 transform hover:scale-105 border border-gray-700 hover:border-primary cursor-pointer"
        style={{ animationDelay: `${index * 50}ms` }}
      >
        <picture>
          <source srcSet={`/images/og/${tip.slug}-thumb.webp`} type="image/webp" />
          <source srcSet={`/images/og/${tip.slug}-thumb.png`} type="image/png" />
          <img
            src={`/images/og/${tip.slug}-thumb.png`}
            onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = `/images/og/${tip.slug}.svg`; }}
            alt={tip.title}
            className="w-full h-40 object-cover rounded-md mb-4"
          />
        </picture>
        <div className="flex items-start gap-4">
          <Icon className="text-primary text-3xl flex-shrink-0 mt-1" />
          <div className="flex-1">
            <span className="inline-block text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full mb-2">
              {tip.category}
            </span>
            <h3 className="text-lg font-bold text-white mb-2 group-hover:text-primary transition">
              {tip.title}
            </h3>
            <p className="text-gray-400 text-sm mb-2">
              {truncateText(tip.description || (tip.content && tip.content[0]) || '', 140)}
            </p>

            <div className="text-xs text-gray-500 mb-3">
              <span className="mr-2">Creado por <strong>{tip.author}</strong></span>
              <span className="mr-2">· {tip.date}</span>
              <span className="text-gray-400">· {tip.locations && tip.locations.slice(0,2).join(', ')}{tip.locations && tip.locations.length>2?' ...':''}</span>
            </div>

            <div className="flex items-center gap-3">
              {/* WhatsApp CTA - reemplazar +595XXXXXXXXX por el número real en config si se desea */}
              <a
                href={`https://wa.me/${CONTACT_INFO.whatsapp}?text=${encodeURIComponent(`Hola DigitalFox, tengo una consulta sobre: ${tip.title}`)}`}
                target="_blank"
                rel="noreferrer"
                className="inline-block bg-primary hover:bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold transition duration-200 shadow"
              >
                Escríbenos ahora
              </a>
              <a href={`#blog/${tip.slug}`} className="text-sm text-gray-400 hover:text-white">Leer más</a>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const truncateText = (text, max) => {
    if (!text) return '';
    if (text.length <= max) return text;
    return text.slice(0, max).trim().replace(/[,\s]+$/, '') + '...';
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

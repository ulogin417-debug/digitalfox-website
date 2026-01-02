import React, { useState, useMemo } from 'react';
import { FaLaptop, FaBolt, FaThermometerHalf, FaTools, FaCheckCircle, FaCode, FaServer, FaSearch, FaTimes } from 'react-icons/fa';
import DisqusComments from './DisqusComments';
import { BLOG_POSTS } from '../data/blogPosts';
import { CONTACT_INFO } from '../config';

/**
 * Blog Component - Consejos y tips prácticos para SEO y engagement
 */
const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [showAll, setShowAll] = useState(false);

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

  // Get unique categories
  const categories = ['Todos', ...new Set(tips.map(t => t.category))];

  // Filter tips based on category and search
  const filteredTips = useMemo(() => {
    return tips.filter(tip => {
      const matchesCategory = !selectedCategory || selectedCategory === 'Todos' || tip.category === selectedCategory;
      const matchesSearch = !searchTerm || 
        tip.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        tip.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        tip.category.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchTerm, tips]);

  // Show limited or all tips
  const displayedTips = showAll ? filteredTips : filteredTips.slice(0, 6);

  const TipCard = ({ tip, index }) => {
    const Icon = tip.icon || FaCheckCircle;
    const readingTime = Math.ceil((tip.content?.join(' ').split(' ').length || 0) / 200); // aprox 200 palabras por minuto
    
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

            <div className="text-xs text-gray-500 mb-3 flex flex-wrap gap-2 items-center">
              <span><strong>{tip.author}</strong></span>
              <span>·</span>
              <span>{tip.date}</span>
              {readingTime > 0 && <>
                <span>·</span>
                <span>{readingTime} min de lectura</span>
              </>}
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

        {/* Buscador */}
        <div className="mb-8 flex gap-4 flex-col sm:flex-row">
          <div className="flex-1 relative">
            <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500" />
            <input
              type="text"
              placeholder="Buscar artículos..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-dark border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-white"
              >
                <FaTimes />
              </button>
            )}
          </div>
        </div>

        {/* Filtros por categoría */}
        <div className="mb-8 flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(selectedCategory === cat ? null : cat)}
              className={`px-4 py-2 rounded-full font-semibold text-sm transition duration-200 ${
                (selectedCategory === cat || (cat === 'Todos' && !selectedCategory))
                  ? 'bg-primary text-white'
                  : 'bg-dark border border-gray-700 text-gray-300 hover:border-primary hover:text-primary'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Conteo de resultados */}
        {(selectedCategory || searchTerm) && (
          <div className="mb-6 text-gray-400 text-sm">
            <span>Se encontraron <strong className="text-primary">{filteredTips.length}</strong> artículo{filteredTips.length !== 1 ? 's' : ''}</span>
            {searchTerm && (
              <span> para "{searchTerm}"</span>
            )}
          </div>
        )}

        {/* Grid de tips */}
        {displayedTips.length > 0 ? (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {displayedTips.map((tip, index) => (
                <TipCard key={tip.id} tip={tip} index={index} />
              ))}
            </div>

            {/* Botón Ver todos/Menos */}
            {filteredTips.length > 6 && (
              <div className="text-center mb-12">
                <button
                  onClick={() => setShowAll(!showAll)}
                  className="bg-primary hover:bg-blue-600 text-white px-8 py-3 rounded-lg font-bold transition duration-300 transform hover:scale-105 shadow-lg"
                >
                  {showAll ? 'Ver menos artículos' : `Ver todos (${filteredTips.length})`}
                </button>
              </div>
            )}
          </>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-400 text-lg">
              No se encontraron artículos con los filtros seleccionados.
            </p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory(null);
              }}
              className="mt-4 text-primary hover:text-blue-400 font-semibold"
            >
              Limpiar filtros
            </button>
          </div>
        )}

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

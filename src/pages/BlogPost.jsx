import React, { useEffect } from 'react';
import { FaLaptop, FaBolt, FaThermometerHalf, FaTools, FaCheckCircle, FaCode } from 'react-icons/fa';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { BLOG_POSTS } from '../data/blogPosts';
import { CONTACT_INFO } from '../config';

const BlogPost = ({ slug }) => {
  const post = BLOG_POSTS.find(p => p.slug === slug);
  
  // Obtener artículos relacionados (misma categoría, excluyendo el actual)
  const relatedPosts = post ? BLOG_POSTS.filter(p => p.category === post.category && p.id !== post.id).slice(0, 3) : [];

  useEffect(() => {
    if (post) {
      document.title = `${post.title} — DigitalFox`;
      const desc = document.querySelector('meta[name="description"]');
      if (desc) desc.setAttribute('content', post.description);
      else {
        const m = document.createElement('meta');
        m.name = 'description';
        m.content = post.description;
        document.head.appendChild(m);
      }

      const keywords = document.querySelector('meta[name="keywords"]');
      const kw = (post.metaKeywords || []).join(', ');
      if (keywords) keywords.setAttribute('content', kw);
      else if (kw) {
        const k = document.createElement('meta');
        k.name = 'keywords';
        k.content = kw;
        document.head.appendChild(k);
      }

      // Open Graph meta tags para compartir en redes sociales
      const ogTitle = document.querySelector('meta[property="og:title"]');
      const ogDesc = document.querySelector('meta[property="og:description"]');
      const ogImage = document.querySelector('meta[property="og:image"]');
      const ogUrl = document.querySelector('meta[property="og:url"]');
      const ogType = document.querySelector('meta[property="og:type"]');

      const siteBase = 'https://digitalfox-website.vercel.app';
      const imageUrl = `${siteBase}/images/portafolio/REPLAPTOP.avif`;
      const currentUrl = window.location.href;

      if (ogTitle) ogTitle.setAttribute('content', post.title);
      else {
        const t = document.createElement('meta');
        t.setAttribute('property', 'og:title');
        t.content = post.title;
        document.head.appendChild(t);
      }

      if (ogDesc) ogDesc.setAttribute('content', post.description);
      else {
        const d = document.createElement('meta');
        d.setAttribute('property', 'og:description');
        d.content = post.description;
        document.head.appendChild(d);
      }

      if (ogImage) ogImage.setAttribute('content', imageUrl);
      else {
        const i = document.createElement('meta');
        i.setAttribute('property', 'og:image');
        i.content = imageUrl;
        document.head.appendChild(i);
      }

      if (ogUrl) ogUrl.setAttribute('content', currentUrl);
      else {
        const u = document.createElement('meta');
        u.setAttribute('property', 'og:url');
        u.content = currentUrl;
        document.head.appendChild(u);
      }

      if (ogType) ogType.setAttribute('content', 'article');
      else {
        const ty = document.createElement('meta');
        ty.setAttribute('property', 'og:type');
        ty.content = 'article';
        document.head.appendChild(ty);
      }
    }
  }, [post]);

  if (!post) {
    return (
      <main className="min-h-screen bg-black font-poppins">
        <Header />
        <div className="max-w-4xl mx-auto px-4 py-24 text-center text-white">
          <h2 className="text-2xl font-bold">Artículo no encontrado</h2>
          <p className="text-gray-400 mt-4">El artículo solicitado no existe o fue movido.</p>
          <a href="#blogs" className="mt-6 inline-block text-primary">Volver al Centro de Consejos y Tips</a>
        </div>
        <Footer />
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-black font-poppins">
      <Header />
      <div className="max-w-4xl mx-auto px-4 py-16">
        <article className="bg-dark rounded-lg p-8 mb-12">
          {post && (
            <img
              src={`/images/og/${post.slug}.png`}
              onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = `/images/og/${post.slug}.svg`; }}
              alt={post.title}
              className="w-full h-64 object-cover rounded-md mb-6"
            />
          )}
          <div className="mb-4 flex flex-wrap gap-4 text-xs text-gray-400">
            <span><strong>{post.author}</strong></span>
            <span>·</span>
            <span>{post.date}</span>
            <span>·</span>
            <span>{Math.ceil((post.content?.join(' ').split(' ').length || 0) / 200)} min de lectura</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">{post.title}</h1>
          <p className="text-gray-300 text-lg mb-6">{post.description}</p>

          <div className="prose prose-invert text-gray-200 mb-8 space-y-4">
            {post.content && post.content.map((para, i) => (
              <p key={i} className="text-base leading-relaxed">{para}</p>
            ))}
          </div>

          <div className="bg-dark border border-gray-700 rounded-lg p-6 mb-8">
            <h3 className="text-white font-bold mb-4">Puntos clave:</h3>
            <ul className="space-y-2 text-gray-300">
              {post.bullets.map((b, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-primary font-bold mt-1">✓</span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-primary/10 border border-primary/30 rounded-lg p-6">
            <h3 className="text-white font-bold mb-3">¿Tu equipo presenta alguno de estos problemas?</h3>
            <p className="text-gray-300 mb-4">Nuestros especialistas están listos para ayudarte. Escríbenos y recibe diagnóstico gratis.</p>
            <a
              href={`https://wa.me/${CONTACT_INFO.whatsapp}?text=${encodeURIComponent(`Hola DigitalFox, necesito ayuda con: ${post.title}`)}`}
              target="_blank"
              rel="noreferrer"
              className="inline-block bg-primary hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-bold transition duration-300"
            >
              Enviar consulta por WhatsApp
            </a>
          </div>
        </article>

        {/* Artículos relacionados */}
        {relatedPosts.length > 0 && (
          <section className="mt-16">
            <h2 className="text-2xl font-bold text-white mb-6">Artículos relacionados</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPosts.map((p) => {
                let icon = FaCheckCircle;
                if (p.category === 'Mantenimiento') icon = FaLaptop;
                if (p.category === 'Climatización') icon = FaThermometerHalf;
                if (p.category === 'Seguridad') icon = FaBolt;
                if (p.category === 'Tecnología') icon = FaTools;
                if (p.category === 'Diagnóstico') icon = FaCheckCircle;
                if (p.category === 'Upgrade') icon = FaLaptop;
                if (p.category === 'Programación y Sistemas Informáticos') icon = FaCode;
                const Icon = icon;

                return (
                  <div
                    key={p.id}
                    onClick={() => { window.location.hash = `#blog/${p.slug}` }}
                    className="group bg-dark rounded-lg p-6 border border-gray-700 hover:border-primary cursor-pointer transition duration-300 transform hover:scale-105"
                  >
                    <picture>
                      <source srcSet={`/images/og/${p.slug}-thumb.webp`} type="image/webp" />
                      <source srcSet={`/images/og/${p.slug}-thumb.png`} type="image/png" />
                      <img
                        src={`/images/og/${p.slug}-thumb.png`}
                        onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = `/images/og/${p.slug}.svg`; }}
                        alt={p.title}
                        className="w-full h-32 object-cover rounded-md mb-4"
                      />
                    </picture>
                    <div className="flex items-start gap-3 mb-3">
                      <Icon className="text-primary text-xl flex-shrink-0 mt-1" />
                      <span className="inline-block text-xs font-semibold text-primary bg-primary/10 px-2 py-1 rounded">{p.category}</span>
                    </div>
                    <h3 className="text-sm font-bold text-white mb-2 group-hover:text-primary transition line-clamp-2">
                      {p.title}
                    </h3>
                    <a href={`#blog/${p.slug}`} className="text-xs text-primary hover:text-blue-400 font-semibold">
                      Leer más →
                    </a>
                  </div>
                );
              })}
            </div>
          </section>
        )}
      </div>
      <Footer />
    </main>
  );
};

// Wrapper para leer el slug desde el hash: #blog/<slug>
const BlogPostWrapper = () => {
  let hash = window.location.hash.slice(1);
  hash = hash.replace(/^\/+/, '');
  const parts = hash.split('/');
  const slug = parts[0] === 'blog' ? parts[1] : null;
  return <BlogPost slug={slug} />;
};

export default BlogPostWrapper;

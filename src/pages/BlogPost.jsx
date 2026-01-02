import React, { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { BLOG_POSTS } from '../data/blogPosts';
import { CONTACT_INFO } from '../config';

const BlogPost = ({ slug }) => {
  const post = BLOG_POSTS.find(p => p.slug === slug);

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
        <article className="bg-dark rounded-lg p-8">
          {post && (
            <img
              src={`/images/og/${post.slug}.png`}
              onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = `/images/og/${post.slug}.svg`; }}
              alt={post.title}
              className="w-full h-64 object-cover rounded-md mb-6"
            />
          )}
          <div className="mb-4 text-xs text-gray-400">
            Creado por <strong>{post.author}</strong> · {post.date} · {post.locations.join(', ')}
          </div>
          <h1 className="text-3xl font-bold text-white mb-4">{post.title}</h1>
          <p className="text-gray-300 mb-6">{post.description}</p>

          <div className="prose prose-invert text-gray-200 mb-6">
            {post.content && post.content.map((para, i) => (
              <p key={i} className="text-sm leading-relaxed">{para}</p>
            ))}
          </div>

          <div className="text-sm text-gray-400 space-y-2 mb-6">
            {post.bullets.map((b, i) => (
              <p key={i}>✓ {b}</p>
            ))}
          </div>

          <div className="mt-8">
            <a
              href={`https://wa.me/${CONTACT_INFO.whatsapp}?text=${encodeURIComponent(`Hola DigitalFox, necesito ayuda con: ${post.title}`)}`}
              target="_blank"
              rel="noreferrer"
              className="inline-block bg-primary hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-bold"
            >
              ¿Tu equipo presenta alguno de estos problemas? Escríbenos ahora y recibe diagnóstico gratis
            </a>
          </div>
        </article>
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

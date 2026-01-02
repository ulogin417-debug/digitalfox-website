import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const About = () => {
  return (
    <main className="min-h-screen bg-black font-poppins">
      <Header />
      <div className="max-w-4xl mx-auto px-4 py-24 text-gray-200">
        <section className="bg-dark rounded-lg p-8 shadow-lg">
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">Nosotros</h1>
          <p className="text-gray-300 mb-6 text-lg">
            Desde 2015 hemos estado dedicados a brindar soluciones tecnológicas y de mantenimiento confiables en Paraguay. Lo que comenzó como un pequeño proyecto personal se transformó en DigitalFox, un centro integral de servicios que combina experiencia, innovación y compromiso con cada cliente.
          </p>

          <h2 className="text-xl font-semibold text-white mt-6 mb-3">Nuestra historia</h2>
          <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6">
            <li><strong>2015:</strong> Inicio ofreciendo reparación de computadoras y laptops.</li>
            <li><strong>2017:</strong> Expansión a reparación de celulares y soporte técnico especializado.</li>
            <li><strong>2019:</strong> Incorporación de servicios de electricidad y climatización para hogares y empresas.</li>
            <li><strong>2022:</strong> Desarrollo de sistemas informáticos y programación a medida.</li>
            <li><strong>Hoy:</strong> Somos un equipo multidisciplinario que atiende tanto a particulares como a empresas en Nemby, Asunción y todo Central.</li>
          </ul>

          <h2 className="text-xl font-semibold text-white mt-6 mb-3">Nuestra misión</h2>
          <p className="text-gray-300 mb-6">
            Ofrecer soluciones rápidas, seguras y accesibles en tecnología y mantenimiento, garantizando la satisfacción de cada cliente.
          </p>

          <h2 className="text-xl font-semibold text-white mt-6 mb-3">Nuestros valores</h2>
          <div className="text-gray-300 space-y-2 mb-6">
            <p>✓ <strong>Confianza:</strong> cada servicio incluye diagnóstico claro y garantía escrita.</p>
            <p>✓ <strong>Innovación:</strong> aplicamos herramientas modernas para optimizar tu tiempo y recursos.</p>
            <p>✓ <strong>Compromiso:</strong> tratamos cada equipo y cada hogar como si fuera propio.</p>
            <p>✓ <strong>Cercanía:</strong> atención personalizada y directa vía WhatsApp, siempre disponibles para ayudarte.</p>
          </div>

          <h2 className="text-xl font-semibold text-white mt-6 mb-3">Equipo y enfoque</h2>
          <p className="text-gray-300 mb-4">
            Nuestro equipo está compuesto por técnicos certificados, desarrolladores y especialistas en climatización y electricidad. Combinamos buenas prácticas, herramientas profesionales y procesos documentados para asegurar servicios rápidos y con garantía.
          </p>

          <p className="text-gray-300 mb-4">
            Valoramos la transparencia: desde el diagnóstico inicial hasta la entrega final, proporcionamos información clara sobre las reparaciones, tiempos estimados y costos, para que siempre sepas qué esperar.
          </p>

          <p className="text-gray-300">
            Si quieres conocernos más o necesitas una cotización, contáctanos por WhatsApp o visita nuestro taller. Estamos listos para ayudarte.
          </p>
        </section>
      </div>
      <Footer />
    </main>
  );
};

export default About;

import React from 'react';

/**
 * Portfolio Component - Galería de proyectos
 */
const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: 'Reparación de PC y Laptop',
      category: 'Tecnología',
      description: 'Reemplazo de disco duro SSD, limpieza térmica y optimización del sistema. Tiempo: 2-3 horas. Resultado: rendimiento mejorado 300%',
      image: '/images/portafolio/REPLAPTOP.avif',
    },
    {
      id: 2,
      title: 'Sistemas Web y de Escritorio',
      category: 'Digital',
      description: 'Aplicación web con React + Node.js. Desarrollo full-stack, base de datos, hosting. Tiempo: 4-8 semanas según complejidad.',
      image: '/images/portafolio/SERVICIOSDIG.webp',
    },
    {
      id: 3,
      title: 'Instalación Aire Acondicionado',
      category: 'Hogar',
      description: 'Instalación profesional de sistemas de climatización, mantención preventiva, limpieza de filtros. Garantía de 2 años.',
      image: '/images/portafolio/ELECTRICA.webp',
    },
    {
      id: 4,
      title: 'Reparación de Celulares',
      category: 'Tecnología',
      description: 'Cambio de pantalla, batería, botones. Diagnóstico gratuito. Tiempo: 1-2 horas. Garantía 30 días en repuestos.',
      image: '/images/portafolio/INSTALACIONAA.jpg',
    },
    {
      id: 5,
      title: 'Servicios Digitales',
      category: 'Digital',
      description: 'Trabajos y proyectos académicos: presentaciones, infografías, edición multimedia. Entrega rápida y profesional.',
      image: '/images/portafolio/PROYECTOWEB.jpg',
    },
    {
      id: 6,
      title: 'Instalación Eléctrica',
      category: 'Hogar',
      description: 'Trabajos de electricidad domiciliaria: circuitos, tomacorrientes, iluminación. Cumple normas de seguridad vigentes.',
      image: '/images/portafolio/REPCELL.jpg',
    },
  ];

  const ProjectCard = ({ project, index }) => {
    return (
      <div
        className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition duration-300 transform hover:scale-105"
        style={{ animationDelay: `${index * 100}ms` }}
      >
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-64 object-cover group-hover:scale-110 transition duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col justify-end p-6">
          <span className="text-primary text-sm font-semibold mb-2">{project.category}</span>
          <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
          <p className="text-gray-300 text-sm">{project.description}</p>
        </div>
      </div>
    );
  };

  return (
    <section id="portfolio" className="py-16 bg-dark">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Título */}
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Nuestro <span className="text-primary">Portfolio</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Proyectos realizados con excelencia y dedicación
          </p>
        </div>

        {/* Grid de proyectos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;

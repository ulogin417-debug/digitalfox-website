import React from 'react';

/**
 * Portfolio Component - Galería de proyectos
 */
const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: 'Reparación Laptop HP',
      category: 'Tecnología',
      description: 'Reemplazo de disco duro y optimización del sistema',
      image: 'https://images.unsplash.com/photo-1588872657840-90a647b8b596?w=400&h=300&fit=crop',
    },
    {
      id: 2,
      title: 'Proyecto Universitario - App Web',
      category: 'Digital',
      description: 'Aplicación web desarrollada con React y Node.js',
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=300&fit=crop',
    },
    {
      id: 3,
      title: 'Instalación Aire Acondicionado',
      category: 'Hogar',
      description: 'Instalación profesional en residencia',
      image: 'https://images.unsplash.com/photo-1581092917056-0c4c3acd3789?w=400&h=300&fit=crop',
    },
    {
      id: 4,
      title: 'Reparación Celular iPhone',
      category: 'Tecnología',
      description: 'Cambio de pantalla y batería',
      image: 'https://images.unsplash.com/photo-1556656793-08538906a9f8?w=400&h=300&fit=crop',
    },
    {
      id: 5,
      title: 'Presentación Profesional',
      category: 'Digital',
      description: 'Diseño de presentación para conferencia empresarial',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop',
    },
    {
      id: 6,
      title: 'Instalación Eléctrica',
      category: 'Hogar',
      description: 'Renovación de sistema eléctrico residencial',
      image: 'https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=400&h=300&fit=crop',
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

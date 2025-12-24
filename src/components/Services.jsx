import React from 'react';
import { FaLaptop, FaMobileAlt, FaPrint, FaCodeBranch, FaBook, FaFilePowerpoint, FaLightbulb, FaWind } from 'react-icons/fa';

/**
 * Services Component - Grid de servicios
 * Tres categorías: Tecnología, Digital, Hogar
 */
const Services = () => {
  const services = [
    {
      category: 'Tecnología',
      icon: FaLaptop,
      title: 'Reparación de Computadoras',
      description: 'Diagnóstico y reparación profesional de notebooks y computadoras de escritorio.'
    },
    {
      category: 'Tecnología',
      icon: FaMobileAlt,
      title: 'Reparación de Celulares',
      description: 'Reparación y mantenimiento de dispositivos móviles con piezas de calidad.'
    },
    {
      category: 'Tecnología',
      icon: FaPrint,
      title: 'Reparación de Impresoras',
      description: 'Servicio especializado en configuración y reparación de impresoras.'
    },
    {
      category: 'Digital',
      icon: FaCodeBranch,
      title: 'Proyectos Escolares',
      description: 'Asistencia en proyectos prácticos escolares y universitarios.'
    },
    {
      category: 'Digital',
      icon: FaBook,
      title: 'Correcciones y Trabajos',
      description: 'Revisión y corrección de trabajos académicos y profesionales.'
    },
    {
      category: 'Digital',
      icon: FaFilePowerpoint,
      title: 'Diseño de Presentaciones',
      description: 'Creación de presentaciones profesionales en PowerPoint y más.'
    },
    {
      category: 'Hogar',
      icon: FaLightbulb,
      title: 'Electricidad Domiciliaria',
      description: 'Instalación y reparación de sistemas eléctricos residenciales.'
    },
    {
      category: 'Hogar',
      icon: FaWind,
      title: 'Aire Acondicionado',
      description: 'Instalación, mantenimiento y reparación de sistemas de climatización.'
    },
  ];

  // Agrupar servicios por categoría
  const groupedServices = {
    Tecnología: services.filter(s => s.category === 'Tecnología'),
    Digital: services.filter(s => s.category === 'Digital'),
    Hogar: services.filter(s => s.category === 'Hogar'),
  };

  const ServiceCard = ({ service, index }) => {
    const Icon = service.icon;
    return (
      <div
        className="group bg-gray-dark rounded-lg p-6 hover:bg-primary transition duration-300 transform hover:scale-105 hover:shadow-2xl shadow-lg cursor-pointer"
        style={{ animationDelay: `${index * 100}ms` }}
      >
        <div className="flex justify-center mb-4">
          <Icon className="text-4xl text-primary group-hover:text-white transition duration-300" />
        </div>
        <h3 className="text-xl font-semibold text-white mb-2 text-center group-hover:text-white">
          {service.title}
        </h3>
        <p className="text-gray-300 text-center text-sm group-hover:text-white transition duration-300">
          {service.description}
        </p>
      </div>
    );
  };

  return (
    <section id="services" className="py-16 bg-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Título */}
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Nuestros <span className="text-primary">Servicios</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Soluciones completas para tus necesidades en tecnología, digital y hogar
          </p>
        </div>

        {/* Grid de servicios */}
        {Object.entries(groupedServices).map(([category, items]) => (
          <div key={category} className="mb-12">
            <h3 className="text-2xl font-bold text-primary mb-6 text-center">
              {category}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {items.map((service, index) => (
                <ServiceCard key={service.title} service={service} index={index} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;

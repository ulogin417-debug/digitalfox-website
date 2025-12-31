import React from 'react';
import { FaUsers, FaClock, FaAward, FaCheckCircle } from 'react-icons/fa';

const Stats = () => {
  const stats = [
    {
      icon: FaUsers,
      number: '500+',
      label: 'Clientes Atendidos',
      description: 'Confianza probada en el tiempo',
    },
    {
      icon: FaClock,
      number: '10+',
      label: 'Años Experiencia',
      description: 'Especialistas certificados',
    },
    {
      icon: FaCheckCircle,
      number: '<24h',
      label: 'Respuesta Garantizada',
      description: 'Atención rápida y profesional',
    },
    {
      icon: FaAward,
      number: '100%',
      label: 'Satisfacción',
      description: 'Garantía en todos los servicios',
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-dark to-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="text-center p-6 rounded-lg bg-black/50 border border-primary/20 hover:border-primary hover:bg-primary/5 transition duration-300"
              >
                <Icon className="text-primary text-4xl mx-auto mb-4" />
                <h3 className="text-3xl font-bold text-primary mb-2">
                  {stat.number}
                </h3>
                <p className="text-white font-semibold mb-1">{stat.label}</p>
                <p className="text-gray-400 text-sm">{stat.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;

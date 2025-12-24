/**
 * Configuración Global de DigitalFox
 * Incluye constantes, datos y configuraciones reutilizables
 */

export const SITE_CONFIG = {
  name: 'DigitalFox',
  tagline: 'Soluciones rápidas en tecnología, digital y hogar',
  description: 'Servicio profesional en reparación de computadoras, desarrollo de proyectos, instalaciones eléctricas y más.',
  year: new Date().getFullYear(),
};

export const CONTACT_INFO = {
  phone: '+595 991 836 168',
  whatsapp: '595991836168', // Número para enlace wa.me (sin + ni espacios)
  email: 'digitalfoxjym@gmail.com',
  instagram: 'https://www.instagram.com/digitalfoxjym?igsh=MXZteGM5Mjd0dDJ4bQ==',
  facebook: '',
};

export const NAVIGATION_ITEMS = [
  { label: 'Inicio', href: '#home' },
  { label: 'Servicios', href: '#services' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Contacto', href: '#contact' },
];

export const SERVICES = [
  // Categoría Tecnología
  {
    category: 'Tecnología',
    icon: 'FaLaptop',
    title: 'Reparación de Computadoras',
    description: 'Diagnóstico y reparación profesional de notebooks y computadoras de escritorio.',
  },
  {
    category: 'Tecnología',
    icon: 'FaMobileAlt',
    title: 'Reparación de Celulares',
    description: 'Reparación y mantenimiento de dispositivos móviles con piezas de calidad.',
  },
  {
    category: 'Tecnología',
    icon: 'FaPrinter',
    title: 'Reparación de Impresoras',
    description: 'Servicio especializado en configuración y reparación de impresoras.',
  },
  // Categoría Digital
  {
    category: 'Digital',
    icon: 'FaCodeBranch',
    title: 'Proyectos Escolares',
    description: 'Asistencia en proyectos prácticos escolares y universitarios.',
  },
  {
    category: 'Digital',
    icon: 'FaBook',
    title: 'Correcciones y Trabajos',
    description: 'Revisión y corrección de trabajos académicos y profesionales.',
  },
  {
    category: 'Digital',
    icon: 'FaFilePowerpoint',
    title: 'Diseño de Presentaciones',
    description: 'Creación de presentaciones profesionales en PowerPoint y más.',
  },
  // Categoría Hogar
  {
    category: 'Hogar',
    icon: 'FaLightbulb',
    title: 'Electricidad Domiciliaria',
    description: 'Instalación y reparación de sistemas eléctricos residenciales.',
  },
  {
    category: 'Hogar',
    icon: 'FaWind',
    title: 'Aire Acondicionado',
    description: 'Instalación, mantenimiento y reparación de sistemas de climatización.',
  },
];

export const COLOR_SCHEME = {
  primary: '#007BFF',
  black: '#000000',
  dark: '#1C1C1C',
  grayDark: '#2A2A2A',
  white: '#FFFFFF',
  grayLight: '#F5F5F5',
};

export default {
  SITE_CONFIG,
  CONTACT_INFO,
  NAVIGATION_ITEMS,
  SERVICES,
  COLOR_SCHEME,
};

import React, { useState } from 'react';
import { FaInstagram, FaFacebook, FaWhatsapp, FaEnvelope, FaPhone } from 'react-icons/fa';

/**
 * Contact Component - Formulario de contacto y redes sociales
 */
const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  /**
   * Validar formulario
   */
  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'El nombre es requerido';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'El email es requerido';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'El email no es válido';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'El mensaje es requerido';
    }

    return newErrors;
  };

  /**
   * Manejar envío del formulario
   */
  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();

    if (Object.keys(newErrors).length === 0) {
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    } else {
      setErrors(newErrors);
    }
  };

  /**
   * Manejar cambios en inputs
   */
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleWhatsAppClick = () => {
    const message = 'Hola, me gustaría conocer más sobre los servicios de DigitalFox';
    const phoneNumber = '595991836168'; // Número Paraguay sin '+' ni espacios
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section id="contact" className="py-16 bg-dark">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Título */}
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Ponte en <span className="text-primary">Contacto</span>
          </h2>
          <p className="text-gray-400 text-lg">
            ¿Tienes una consulta? Nos encantaría escucharte
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Formulario */}
          <div className="bg-black rounded-lg p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-white mb-6">Envíanos un mensaje</h3>

            {submitted && (
              <div className="mb-6 p-4 bg-green-600 rounded-lg text-white animate-fade-in">
                ¡Gracias! Tu mensaje ha sido enviado correctamente.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Nombre */}
              <div>
                <label htmlFor="name" className="block text-white font-medium mb-2">
                  Nombre
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg bg-gray-dark text-white border ${
                    errors.name ? 'border-red-500' : 'border-gray-600'
                  } focus:border-primary focus:outline-none transition duration-300`}
                  placeholder="Tu nombre"
                />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-white font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg bg-gray-dark text-white border ${
                    errors.email ? 'border-red-500' : 'border-gray-600'
                  } focus:border-primary focus:outline-none transition duration-300`}
                  placeholder="tu@email.com"
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
              </div>

              {/* Mensaje */}
              <div>
                <label htmlFor="message" className="block text-white font-medium mb-2">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  className={`w-full px-4 py-3 rounded-lg bg-gray-dark text-white border ${
                    errors.message ? 'border-red-500' : 'border-gray-600'
                  } focus:border-primary focus:outline-none transition duration-300 resize-none`}
                  placeholder="Tu mensaje aquí..."
                />
                {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
              </div>

              {/* Botón enviar */}
              <button
                type="submit"
                className="w-full bg-primary hover:bg-blue-600 text-white font-bold py-3 rounded-lg transition duration-300 transform hover:scale-105 shadow-lg"
              >
                Enviar Mensaje
              </button>
            </form>
          </div>

          {/* Información de contacto */}
          <div className="flex flex-col justify-center space-y-8">
            {/* Contacto directo */}
            <div className="bg-black rounded-lg p-8 shadow-lg hover:shadow-2xl transition duration-300">
              <h3 className="text-2xl font-bold text-white mb-6">Contáctanos directamente</h3>

              {/* WhatsApp */}
              <div className="flex items-center gap-4 mb-6 p-4 bg-dark rounded-lg hover:bg-gray-dark transition duration-300 cursor-pointer" onClick={handleWhatsAppClick}>
                <FaWhatsapp className="text-primary text-3xl" />
                <div>
                  <p className="text-gray-400 text-sm">WhatsApp</p>
                  <p className="text-white font-semibold">+595 991 836 168</p>
                </div>
              </div>

              {/* Email */}
              <a href="mailto:digitalfoxjym@gmail.com" className="flex items-center gap-4 mb-6 p-4 bg-dark rounded-lg hover:bg-gray-dark transition duration-300">
                <FaEnvelope className="text-primary text-3xl" />
                <div>
                  <p className="text-gray-400 text-sm">Email</p>
                  <p className="text-white font-semibold">digitalfoxjym@gmail.com</p>
                </div>
              </a>

              {/* Teléfono */}
              <a href="tel:+595991836168" className="flex items-center gap-4 p-4 bg-dark rounded-lg hover:bg-gray-dark transition duration-300">
                <FaPhone className="text-primary text-3xl" />
                <div>
                  <p className="text-gray-400 text-sm">Teléfono</p>
                  <p className="text-white font-semibold">+595 991 836 168</p>
                </div>
              </a>
            </div>

            {/* Redes sociales */}
            <div className="bg-black rounded-lg p-8 shadow-lg">
              <h3 className="text-xl font-bold text-white mb-6">Síguenos en redes</h3>
              <div className="flex gap-4">
                <a
                  href="https://www.instagram.com/digitalfoxjym?igsh=MXZteGM5Mjd0dDJ4bQ=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary hover:bg-blue-600 text-white p-4 rounded-full transition duration-300 transform hover:scale-110"
                >
                  <FaInstagram size={24} />
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary hover:bg-blue-600 text-white p-4 rounded-full transition duration-300 transform hover:scale-110"
                >
                  <FaFacebook size={24} />
                </a>
                <a
                  href="https://wa.me/595991836168"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary hover:bg-blue-600 text-white p-4 rounded-full transition duration-300 transform hover:scale-110"
                >
                  <FaWhatsapp size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

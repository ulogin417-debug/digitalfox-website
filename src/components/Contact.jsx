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
          <p className="text-gray-400 text-lg mb-2">
            ¿Tienes una consulta o proyecto? Nos encantaría escucharte
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Formulario */}
          <div className="bg-black rounded-lg p-8 shadow-lg border border-gray-700">
            <h3 className="text-2xl font-bold text-white mb-6">Envíanos un mensaje</h3>

            {submitted && (
              <div className="mb-6 p-4 bg-green-600/20 border border-green-500 rounded-lg text-green-400 animate-fade-in font-semibold">
                ✓ ¡Gracias! Tu mensaje ha sido recibido. Nos contactaremos pronto.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Nombre */}
              <div>
                <label htmlFor="name" className="block text-white font-medium mb-2">
                  Nombre completo
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
                  placeholder="Cuéntanos sobre tu proyecto o consulta..."
                />
                {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
              </div>

              {/* Botón enviar */}
              <button
                type="submit"
                className="w-full bg-primary hover:bg-blue-600 text-white font-bold py-3 rounded-lg transition duration-300 transform hover:scale-105 shadow-lg mt-6"
              >
                Enviar Mensaje Ahora
              </button>
            </form>
          </div>

          {/* Información de contacto y Mapa */}
          <div className="flex flex-col space-y-6">
            {/* Contacto directo */}
            <div className="bg-black rounded-lg p-8 shadow-lg border border-gray-700">
              <h3 className="text-2xl font-bold text-white mb-6">Información de contacto</h3>

              {/* WhatsApp */}
              <div className="flex items-center gap-4 mb-6 p-4 bg-dark rounded-lg hover:bg-gray-dark hover:border-primary border border-transparent transition duration-300 cursor-pointer" onClick={handleWhatsAppClick}>
                <FaWhatsapp className="text-primary text-3xl" />
                <div>
                  <p className="text-gray-400 text-sm">WhatsApp (respuesta inmediata)</p>
                  <p className="text-white font-semibold">+595 991 836 168</p>
                </div>
              </div>

              {/* Email */}
              <a href="mailto:digitalfoxjym@gmail.com" className="flex items-center gap-4 mb-6 p-4 bg-dark rounded-lg hover:bg-gray-dark hover:border-accent border border-transparent transition duration-300">
                <FaEnvelope className="text-accent text-3xl" />
                <div>
                  <p className="text-gray-400 text-sm">Email</p>
                  <p className="text-white font-semibold">digitalfoxjym@gmail.com</p>
                </div>
              </a>

              {/* Teléfono */}
              <a href="tel:+595991836168" className="flex items-center gap-4 p-4 bg-dark rounded-lg hover:bg-gray-dark hover:border-accent border border-transparent transition duration-300">
                <FaPhone className="text-accent text-3xl" />
                <div>
                  <p className="text-gray-400 text-sm">Teléfono</p>
                  <p className="text-white font-semibold">+595 991 836 168</p>
                </div>
              </a>
            </div>

            {/* Redes sociales */}
            <div className="bg-black rounded-lg p-8 shadow-lg border border-gray-700">
              <h3 className="text-xl font-bold text-white mb-6">Síguenos en redes</h3>
              <div className="flex gap-4 flex-wrap">
                <a
                  href="https://www.instagram.com/digitalfoxjym?igsh=MXZteGM5Mjd0dDJ4bQ=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-accent hover:bg-orange-600 text-white p-4 rounded-full transition duration-300 transform hover:scale-110 shadow-lg"
                  title="Instagram"
                >
                  <FaInstagram size={24} />
                </a>
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-accent hover:bg-orange-600 text-white p-4 rounded-full transition duration-300 transform hover:scale-110 shadow-lg"
                  title="Facebook"
                >
                  <FaFacebook size={24} />
                </a>
                <a
                  href="https://wa.me/595991836168?text=Hola%2C%20vengo%20de%20tu%20web%20DigitalFox"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-accent hover:bg-orange-600 text-white p-4 rounded-full transition duration-300 transform hover:scale-110 shadow-lg"
                  title="WhatsApp"
                >
                  <FaWhatsapp size={24} />
                </a>
              </div>
            </div>

            {/* Google Maps Embed */}
            <div className="bg-black rounded-lg overflow-hidden shadow-lg border border-gray-700 h-64">
              <iframe
                title="Ubicación DigitalFox"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3575.842!2d-55.5037!3d-25.2898!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1sDigitalFox%20Asunci%C3%B3n!2sAsunci%C3%B3n%2C%20Paraguay!5e0!3m2!1ses!2spy!4v1735689600000"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

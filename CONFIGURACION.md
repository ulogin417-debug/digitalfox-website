# Configuración de DigitalFox

Este archivo contiene las configuraciones y variables que debes ajustar antes de desplegar.

## 🔧 Datos de Contacto

Edita estos valores en `src/config.js`:

```javascript
export const CONTACT_INFO = {
  phone: '+54 9 TU-NUMERO', // Tu teléfono
  whatsapp: '+54912345678', // Tu WhatsApp (sin espacios ni guiones)
  email: 'tuemail@example.com', // Tu email
  instagram: 'https://instagram.com/tu-usuario',
  facebook: 'https://facebook.com/tu-pagina',
};
```

También en `src/components/Contact.jsx`:
- Línea ~68: Número de WhatsApp
- Línea ~118: Número de teléfono
- Línea ~129: Email

## 🖼️ Imágenes y Assets

### Logo
- Coloca tu logo en `public/logo.png` (recomendado: 200x200px)

### Fondo Hero
- Coloca una imagen en `public/hero-bg.jpg` (recomendado: 1920x1080px)
- Puedes descomentar el `background-image` en `Hero.jsx` si deseas usarla

### Proyectos del Portfolio
- Reemplaza los placeholder images en `src/components/Portfolio.jsx`
- Descarga o captura screenshots de tus proyectos

## 📱 Redes Sociales

Actualiza los enlaces en:
1. `src/config.js` - CONTACT_INFO
2. `src/components/Contact.jsx` - Enlaces de redes
3. `src/components/Footer.jsx` - Enlaces de redes

## 🎨 Personalización de Colores

### Cambiar Paleta
Edita `tailwind.config.js`:
```javascript
colors: {
  'primary': '#007BFF',  // Azul primario
  'dark': '#1C1C1C',     // Gris oscuro
  'black': '#000000',    // Negro
  'white': '#FFFFFF',    // Blanco
  'gray-dark': '#2A2A2A',// Gris más oscuro
  'gray-light': '#F5F5F5',// Gris claro
}
```

## 📝 Servicios

Los servicios se definen en `src/config.js`. Para agregar más:

```javascript
{
  category: 'Tecnología',
  icon: 'FaYourIcon',
  title: 'Nombre del Servicio',
  description: 'Descripción breve...',
}
```

Disponibles en [react-icons](https://react-icons.github.io/react-icons/):
- FaLaptop, FaMobileAlt, FaPrinter, FaCodeBranch, FaBook, etc.

## 🚀 Antes de Desplegar

Checklist de verificación:

- [ ] Actualizar números de teléfono y email
- [ ] Cambiar enlaces de redes sociales
- [ ] Agregar logo en `public/`
- [ ] Reemplazar proyectos del portfolio
- [ ] Actualizar colores si es necesario
- [ ] Cambiar "contacto@digitalfox.com" por tu email real
- [ ] Revisar texto y descripciones
- [ ] Probar en mobile y desktop
- [ ] Probar formulario de contacto
- [ ] Probar enlace de WhatsApp

## 📚 Documentación Útil

- [React Docs](https://react.dev)
- [TailwindCSS Docs](https://tailwindcss.com/docs)
- [Vite Docs](https://vite.dev/guide/)
- [React Icons](https://react-icons.github.io/react-icons/)

## ❓ Ayuda

Si tienes problemas:
1. Verifica que Node.js esté instalado: `node -v`
2. Reinstala dependencias: `rm -rf node_modules && npm install`
3. Limpia cache: `npm cache clean --force`
4. Reinicia servidor dev: `npm run dev`

---

¡Tu sitio está listo para personalizarse!

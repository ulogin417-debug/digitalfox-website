# DigitalFox - Sitio Web Profesional

Página web moderna, elegante y responsiva para DigitalFox - soluciones en tecnología, digital y hogar.

## 🚀 Características

- **React 18** - Componentes funcionales modernos
- **Vite** - Construcción rápida y optimizada
- **TailwindCSS** - Estilos utilitarios y responsivos
- **Poppins Font** - Tipografía elegante y profesional
- **Animaciones Suaves** - Fade-in, slide-in, scale-in y más
- **Diseño Responsivo** - Totalmente mobile-friendly
- **Formulario de Contacto** - Con validación integrada
- **Carrusel de Testimonios** - Transiciones suaves
- **Portfolio Interactivo** - Galería de proyectos

## 📁 Estructura del Proyecto

```
digitalfox-website/
├── public/                    # Archivos estáticos
│   ├── logo.png
│   └── hero-bg.jpg
│
├── src/
│   ├── assets/               # Recursos e íconos
│   │
│   ├── components/           # Componentes reutilizables
│   │   ├── Header.jsx        # Navegación principal
│   │   ├── Hero.jsx          # Sección principal
│   │   ├── Services.jsx      # Grid de servicios
│   │   ├── Portfolio.jsx     # Galería de proyectos
│   │   ├── Testimonials.jsx  # Carrusel de testimonios
│   │   ├── Contact.jsx       # Formulario de contacto
│   │   └── Footer.jsx        # Pie de página
│   │
│   ├── pages/
│   │   └── Home.jsx          # Página principal
│   │
│   ├── App.jsx               # Componente raíz
│   ├── main.jsx              # Punto de entrada
│   └── index.css             # Estilos globales y animaciones
│
├── tailwind.config.js        # Configuración de TailwindCSS
├── vite.config.js            # Configuración de Vite
├── package.json              # Dependencias
└── README.md                 # Este archivo
```

## 🎨 Paleta de Colores

- **Azul Primario**: `#007BFF`
- **Negro**: `#000000`
- **Gris Oscuro**: `#1C1C1C`
- **Blanco**: `#FFFFFF`
- **Gris Claro**: `#F5F5F5`

## 📦 Dependencias Principales

```json
{
  "react": "^18.2.0",
  "react-dom": "^18.2.0",
  "react-icons": "^4.11.0",
  "tailwindcss": "^3.4.0"
}
```

## 🛠️ Instalación

1. **Clonar o descargar el proyecto**
   ```bash
   cd digitalfox-website
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   ```

3. **Instalar dependencias de desarrollo si es necesario**
   ```bash
   npm install --save-dev vite @vitejs/plugin-react tailwindcss postcss autoprefixer
   ```

## 🚀 Inicio Rápido

### Modo Desarrollo
```bash
npm run dev
```
- Abre automáticamente `http://localhost:3000`
- HMR (Hot Module Replacement) habilitado para cambios en tiempo real

### Construcción para Producción
```bash
npm run build
```
- Crea la carpeta `dist/` con el código optimizado

### Vista Previa de Producción
```bash
npm run preview
```
- Abre la versión construida en modo local

## 📝 Componentes

### Header
- Navegación fija con logo de DigitalFox
- Menú responsivo (desktop y mobile)
- Animaciones de hover en enlaces

### Hero
- Sección principal con slogan
- Fondo con gradiente y elementos decorativos animados
- Botón CTA "Contáctame" con animación
- Indicador de scroll animado

### Services
- Grid de 8 servicios en 3 categorías:
  - **Tecnología**: Reparación de computadoras, celulares, impresoras
  - **Digital**: Proyectos escolares, presentaciones, correcciones
  - **Hogar**: Electricidad domiciliaria, aire acondicionado
- Animaciones hover (scale + shadow)
- Íconos minimalistas con react-icons

### Portfolio
- Galería de proyectos con placeholder images
- Overlay con información al hacer hover
- Categorización por tipo de servicio
- Transiciones suaves

### Testimonials
- Carrusel de 4 testimonios
- Navegación con botones (anterior/siguiente)
- Indicadores de posición
- Calificación con estrellas

### Contact
- Formulario con campos: Nombre, Email, Mensaje
- Validación en tiempo real
- Mensaje de confirmación al enviar
- Enlaces directos a WhatsApp, Email, Teléfono
- Íconos de redes sociales (Instagram, Facebook, WhatsApp)

### Footer
- Información de la empresa
- Enlaces rápidos a secciones
- Redes sociales
- Derechos reservados

## 🎯 Animaciones Incluidas

- **Fade-in**: Aparición suave con opacidad
- **Slide-in**: Entrada deslizante desde la izquierda
- **Slide-in-right**: Entrada deslizante desde la derecha
- **Scale-in**: Agrandamiento suave
- **Pulse**: Efecto de latido
- **Float**: Flotación vertical suave
- **Glow**: Efecto de brillo

## 🔧 Personalización

### Cambiar Colores
Edita `tailwind.config.js`:
```javascript
colors: {
  'primary': '#007BFF', // Cambiar color primario
  'dark': '#1C1C1C',
  // ... otros colores
}
```

### Agregar Fuente
En `tailwind.config.js`:
```javascript
fontFamily: {
  'poppins': ['Poppins', 'sans-serif'],
  'custom': ['Tu Fuente', 'sans-serif']
}
```

### Modificar Animaciones
En `src/index.css`:
```css
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
```

## 📱 Responsive Design

El sitio es completamente responsivo:
- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

## 🌐 Despliegue

### Vercel (Recomendado)
1. Sube el proyecto a GitHub
2. Conecta tu repositorio en [Vercel](https://vercel.com)
3. Deploy automático

### Netlify
1. Ejecuta `npm run build`
2. Sube la carpeta `dist/` a Netlify
3. O conecta tu GitHub para deploy automático

## 📧 Información de Contacto

Para actualizar los datos de contacto, edita:
- **Contact.jsx** - Números de teléfono y email
- **Footer.jsx** - Enlaces de redes sociales

## 🔐 Seguridad

⚠️ **Importante**: 
- Los números de teléfono en Contact.jsx son placeholders
- Reemplaza con tus datos reales antes de desplegar
- Protege información sensible en variables de entorno

## 📄 Licencia

© 2025 DigitalFox. Todos los derechos reservados.

## 🤝 Contribuciones

Para reportar bugs o sugerir mejoras, contáctanos en digitalfoxjym@gmail.com

---

**Desarrollado con ❤️**


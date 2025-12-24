🔧 ESPECIFICACIONES TÉCNICAS
════════════════════════════════════════════════════════════════════════════=

PROYECTO: DigitalFox Website v1.0
TIPO: Single Page Application (SPA) con React
ESTADO: Producción ✅

═════════════════════════════════════════════════════════════════════════════

STACK TECNOLÓGICO
─────────────────────────────────────────────────────────────────────────────

FRONTEND
├─ React 18.2.0 (Librería de UI)
├─ Vite 5.0+ (Build tool + Dev server)
├─ TailwindCSS 3.4.0 (CSS utility framework)
├─ React Icons 4.11.0 (Iconografía SVG)
├─ PostCSS 8.4.32 (CSS processor)
└─ Autoprefixer 10.4.16 (CSS vendor prefixes)

HERRAMIENTAS
├─ Node.js 18+ (Runtime)
├─ NPM 9+ (Package manager)
├─ ESLint (Code linting)
└─ Git (Version control)

NAVEGADORES SOPORTADOS
├─ Chrome 90+
├─ Firefox 88+
├─ Safari 14+
├─ Edge 90+
└─ Mobile browsers (iOS Safari, Chrome Android)

═════════════════════════════════════════════════════════════════════════════

ARQUITECTURA DEL PROYECTO
─────────────────────────────────────────────────────────────────────────────

PATRÓN: Component-based Architecture

CAPAS
├─ Presentación (Components)
│  ├─ Header.jsx
│  ├─ Hero.jsx
│  ├─ Services.jsx
│  ├─ Portfolio.jsx
│  ├─ Testimonials.jsx
│  ├─ Contact.jsx
│  └─ Footer.jsx
│
├─ Lógica (hooks, funciones)
│  ├─ useState (estado local)
│  └─ Funciones de validación
│
├─ Datos (config.js)
│  ├─ SITE_CONFIG
│  ├─ CONTACT_INFO
│  ├─ NAVIGATION_ITEMS
│  ├─ SERVICES
│  └─ COLOR_SCHEME
│
└─ Estilos (CSS)
   ├─ TailwindCSS clases
   ├─ index.css (globals)
   └─ Animaciones personalizadas

═════════════════════════════════════════════════════════════════════════════

COMPONENTES - DETALLES TÉCNICOS
─────────────────────────────────────────────────────────────────────────────

1. HEADER.jsx
   Tipo: Functional Component
   Estado: useState (isOpen)
   Props: Ninguno
   Callbacks: toggleMenu()
   Responsivo: Sí (hidden md:block)
   Dependencias: React Icons (FaBars, FaTimes)

2. HERO.jsx
   Tipo: Functional Component
   Estado: Ninguno
   Props: Ninguno
   Callbacks: scrollToContact()
   Responsivo: Sí
   Animaciones: Gradient decorativo, pulse animation
   
3. SERVICES.jsx
   Tipo: Functional Component
   Estado: Ninguno
   Props: Ninguno
   Datos: Mapeado desde config.js
   Responsive: Grid adaptable (1 → 2 → 3 columnas)
   Animaciones: Hover scale + shadow
   
4. PORTFOLIO.jsx
   Tipo: Functional Component
   Estado: Ninguno
   Props: Ninguno
   Datos: Array hardcodeado con placeholders
   Animaciones: Hover zoom + overlay fade

5. TESTIMONIALS.jsx
   Tipo: Functional Component
   Estado: useState (currentIndex)
   Props: Ninguno
   Callbacks: nextSlide(), prevSlide()
   Features: Star rating, indicadores, navegación
   
6. CONTACT.jsx
   Tipo: Functional Component
   Estado: formData, errors, submitted
   Props: Ninguno
   Validación: Email regex, campos requeridos
   Callbacks: handleSubmit(), handleChange(), handleWhatsAppClick()
   Features: Formulario, botones contacto, redes sociales
   
7. FOOTER.jsx
   Tipo: Functional Component
   Estado: Ninguno
   Props: Ninguno
   Datos: Links desde arrays locales
   Año dinámico: new Date().getFullYear()

═════════════════════════════════════════════════════════════════════════════

FLUJO DE DATOS
─────────────────────────────────────────────────────────────────────────────

App.jsx
  └─ Home.jsx
      ├─ Header.jsx (navegación)
      ├─ Hero.jsx (sección principal)
      ├─ Services.jsx (servicios)
      ├─ Portfolio.jsx (proyectos)
      ├─ Testimonials.jsx (opiniones)
      ├─ Contact.jsx (contacto)
      └─ Footer.jsx (pie)

CONFIG.JS (datos compartidos)
  ├─ Header.jsx
  ├─ Services.jsx
  ├─ Contact.jsx
  ├─ Footer.jsx
  └─ Otros componentes

═════════════════════════════════════════════════════════════════════════════

GESTIÓN DE ESTADO
─────────────────────────────────────────────────────────────────────────────

ESTADO LOCAL (useState)

Header.jsx
  • isOpen (boolean) - Menú móvil abierto/cerrado

Contact.jsx
  • formData (object) - {name, email, message}
  • errors (object) - Errores de validación
  • submitted (boolean) - Indicador de envío

Testimonials.jsx
  • currentIndex (number) - Testimonio actual

DATOS ESTÁTICOS (config.js)

SITE_CONFIG
  • name: string
  • tagline: string
  • description: string
  • year: number

CONTACT_INFO
  • phone: string
  • whatsapp: string
  • email: string
  • instagram: string
  • facebook: string

NAVIGATION_ITEMS
  • Array de {label, href}

SERVICES
  • Array de {category, icon, title, description}

COLOR_SCHEME
  • Object con variables de color

═════════════════════════════════════════════════════════════════════════════

VALIDACIÓN
─────────────────────────────────────────────────────────────────────────────

FORMULARIO DE CONTACTO (Contact.jsx)

Campo: name
  • Requerido: Sí
  • Validación: Trim + no vacío
  • Mensaje error: "El nombre es requerido"

Campo: email
  • Requerido: Sí
  • Validación: Regex (/^[^\s@]+@[^\s@]+\.[^\s@]+$/)
  • Mensaje error: "El email no es válido"

Campo: message
  • Requerido: Sí
  • Validación: Trim + no vacío
  • Mensaje error: "El mensaje es requerido"

═════════════════════════════════════════════════════════════════════════════

ESTILOS Y ANIMACIONES
─────────────────────────────────────────────────────────────────────────────

FRAMEWORK CSS: TailwindCSS 3.4.0

Configuración Personalizada:
  • Colors: primary, dark, black, white, gray-dark, gray-light
  • Font: Poppins (Google Fonts)
  • Keyframes: 8 animaciones personalizadas

ANIMACIONES PERSONALIZADAS

@keyframes fadeIn
  Duración: 0.6s
  Easing: ease-out
  Efecto: Entrada suave con opacidad + translateY

@keyframes slideIn
  Duración: 0.6s
  Easing: ease-out
  Efecto: Deslizamiento desde izquierda + opacidad

@keyframes slideInRight
  Duración: 0.6s
  Easing: ease-out
  Efecto: Deslizamiento desde derecha + opacidad

@keyframes scaleIn
  Duración: 0.5s
  Easing: ease-out
  Efecto: Escala desde 0.9 a 1

@keyframes pulse
  Duración: 2s
  Easing: cubic-bezier
  Efecto: Opacidad alternada

@keyframes float
  Duración: 3s
  Easing: ease-in-out
  Efecto: Flotación vertical suave

@keyframes glow
  Duración: 2s
  Easing: ease-in-out
  Efecto: Box-shadow animado

CLASES UTILITARIAS

.animate-fade-in ............ fadeIn animation
.animate-slide-in .......... slideIn animation
.animate-slide-in-right .... slideInRight animation
.animate-scale-in .......... scaleIn animation
.animate-pulse ............. pulse animation
.animate-float ............. float animation
.animate-glow .............. glow animation
.transition-all ............ Transición suave general
.hover-lift ................. Efecto de elevación al hover

═════════════════════════════════════════════════════════════════════════════

RESPONSIVE DESIGN
─────────────────────────────────────────────────────────────────────────────

BREAKPOINTS (TailwindCSS)

Mobile:     < 640px
  • Hidden: Menú desktop
  • Visible: Hamburger menu
  • Grid: 1 columna

Tablet:     640px - 1024px
  • Flexible: Menú adaptable
  • Grid: 2 columnas

Desktop:    > 1024px
  • Visible: Menú desktop
  • Hidden: Hamburger menu
  • Grid: 3 columnas

CLASES RESPONSIVE USADAS

hidden md:block ................... Ocultar en mobile, mostrar en tablet+
hidden md:flex .................... Grid en mobile, flex en tablet+
grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ... Columnas adaptables
text-4xl sm:text-5xl lg:text-6xl . Tamaño de fuente responsivo
px-4 sm:px-6 lg:px-8 ............ Padding responsivo

═════════════════════════════════════════════════════════════════════════════

PERFORMANCE
─────────────────────────────────────────────────────────────────────────────

OPTIMIZACIONES APLICADAS

• Code Splitting automático con Vite
• Tree shaking en build
• Minificación de CSS/JS
• Asset hashing para caché
• Lazy loading de componentes (si es necesario)
• Optimización de imágenes

TAMAÑO DE BUNDLE

Código sin minificar: ~150 KB
Build minificado:     ~80 KB (gzip: ~25 KB)

MÉTRICAS ESPERADAS

Lighthouse
  • Performance: 90+
  • Accessibility: 95+
  • Best Practices: 95+
  • SEO: 100

Core Web Vitals
  • LCP (Largest Contentful Paint): < 2.5s
  • FID (First Input Delay): < 100ms
  • CLS (Cumulative Layout Shift): < 0.1

═════════════════════════════════════════════════════════════════════════════

SEGURIDAD
─────────────────────────────────────────────────────────────────────────────

IMPLEMENTACIONES

✅ Validación de entrada (cliente)
✅ Sanitización de HTML (React escapa automáticamente)
✅ No almacena datos sensibles en el código
✅ Variables de entorno en .env (nunca commitear .env)
✅ HTTPS recomendado en producción
✅ CSP headers (configurar en servidor)

RECOMENDACIONES

⚠️  Validar formularios en servidor también
⚠️  Usar HTTPS en producción
⚠️  Configurar headers de seguridad
⚠️  Mantener dependencias actualizadas
⚠️  Revisar logs de seguridad

═════════════════════════════════════════════════════════════════════════════

TESTING
─────────────────────────────────────────────────────────────────────────────

PRUEBAS MANUALES RECOMENDADAS

Navegación
  □ Todos los links funcionan
  □ Scroll smooth funciona
  □ Menú móvil abre/cierra

Formulario
  □ Validación requeridos
  □ Validación email
  □ Envío sin errores
  □ Mensaje de éxito aparece

Responsive
  □ Mobile (375px)
  □ Tablet (768px)
  □ Desktop (1920px)

Animaciones
  □ Fade-in al cargar
  □ Hover effects funcionan
  □ Carrusel navega correctamente
  □ Scroll reveals funcionan

═════════════════════════════════════════════════════════════════════════════

DESPLIEGUE
─────────────────────────────────────────────────────────────────────────────

VERCEL (RECOMENDADO)

Pasos:
  1. Sube a GitHub
  2. Conecta repo en vercel.com
  3. Vercel detecta Vite automáticamente
  4. Deploy en cada push

Configuración automática:
  • Build command: npm run build
  • Output directory: dist
  • Install command: npm install

NETLIFY

Pasos:
  1. npm run build localmente
  2. Arrastra carpeta 'dist/' a Netlify
  3. O conecta GitHub para CI/CD

HOSTING TRADICIONAL (Apache, Nginx)

Pasos:
  1. npm run build
  2. Copia contenido de 'dist/' al servidor
  3. Configura rewrites para SPA:
     - /index.html como fallback

Configuración Nginx:
  location / {
    try_files $uri $uri/ /index.html;
  }

Configuración Apache:
  <IfModule mod_rewrite.c>
    RewriteEngine On
    RewriteBase /
    RewriteCond %{REQUEST_FILENAME} !-f
    RewriteCond %{REQUEST_FILENAME} !-d
    RewriteRule ^ index.html [QSA,L]
  </IfModule>

═════════════════════════════════════════════════════════════════════════════

MANTENIMIENTO
─────────────────────────────────────────────────────────────────────────────

ACTUALIZAR DEPENDENCIAS

Verificar versiones:
  npm outdated

Actualizar:
  npm update                    # Actualiza menores
  npm upgrade [nombre-paquete]  # Actualiza específico

AGREGAR NUEVAS DEPENDENCIAS

npm install nombre-paquete

Guardar en devDependencies:
  npm install --save-dev nombre-paquete

MONITOREO

✅ Verificar console.log en producción
✅ Revisar errores de JavaScript
✅ Monitorear rendimiento
✅ Verificar links

═════════════════════════════════════════════════════════════════════════════

ESCALABILIDAD
─────────────────────────────────────────────────────────────────────────────

ESTRUCTURA ACTUAL

Soporta bien:
✅ Agregar más servicios (config.js)
✅ Agregar más proyectos (Portfolio.jsx)
✅ Agregar más testimonios (Testimonials.jsx)
✅ Cambiar colores (tailwind.config.js)
✅ Cambiar tipografía (tailwind.config.js)
✅ Agregar nuevas secciones (nuevo componente)

PARA CRECER

Si necesitas:
  • Múltiples páginas → Agregar React Router
  • Base de datos → Agregar Node.js + DB
  • Autenticación → Agregar auth library
  • CMS → Integrar Headless CMS
  • Blog → Agregar página de blog

═════════════════════════════════════════════════════════════════════════════

REFERENCIAS Y LIBRERÍAS
─────────────────────────────────────────────────────────────────────────────

React Icons
  URL: https://react-icons.github.io/react-icons/
  Usados: FaBars, FaTimes, FaStar, FaChevronLeft, FaChevronRight, etc.

TailwindCSS
  URL: https://tailwindcss.com/docs
  Documentación: Completa y clara

Vite
  URL: https://vite.dev
  Documentación: Oficial y actualizada

Google Fonts (Poppins)
  URL: https://fonts.google.com/?query=poppins

═════════════════════════════════════════════════════════════════════════════

VARIABLES DE ENTORNO
─────────────────────────────────────────────────────────────────────────────

Ej: .env.local

VITE_PHONE="+54 9 1234-5678"
VITE_WHATSAPP="+5491234567890"
VITE_EMAIL="digitalfoxjym@gmail.com"
VITE_INSTAGRAM_URL="https://instagram.com/..."
VITE_FACEBOOK_URL="https://facebook.com/..."

Uso en código:
  import.meta.env.VITE_PHONE

═════════════════════════════════════════════════════════════════════════════

CHECKLIST TÉCNICO FINAL
─────────────────────────────────────────────────────────────────────────────

Desarrollo
  ✅ Componentes funcionales
  ✅ Estado manejado correctamente
  ✅ Sin prop drilling innecesario
  ✅ Código limpio y comentado
  ✅ Sin console.log en producción

Estilos
  ✅ TailwindCSS completo
  ✅ Responsive en todos los breakpoints
  ✅ Animaciones suaves
  ✅ Colores consistentes

Performance
  ✅ Bundle size optimizado
  ✅ Imágenes optimizadas
  ✅ CSS minificado

Seguridad
  ✅ Validación de entrada
  ✅ Sin datos sensibles hardcodeados
  ✅ .env para variables

Accesibilidad
  ✅ Estructura semántica HTML
  ✅ Alt text en imágenes
  ✅ Contraste de colores adecuado

SEO
  ✅ Meta tags básicos
  ✅ Estructura heading correcta
  ✅ URLs semánticas

═════════════════════════════════════════════════════════════════════════════

CONCLUSIÓN

Proyecto completamente técnico, modular, escalable y listo para:
  ✅ Desarrollo inmediato
  ✅ Personalización rápida
  ✅ Despliegue en producción
  ✅ Mantenimiento futuro
  ✅ Expansión de features

═════════════════════════════════════════════════════════════════════════════

Versión: 1.0
Fecha: Diciembre 2025
Licencia: Para DigitalFox
Estado: Producción ✅

═════════════════════════════════════════════════════════════════════════════

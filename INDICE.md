# 📖 Índice de Documentación - DigitalFox

## 🚀 Para Empezar

**¡PRIMERO LEE ESTO!**

1. **[INICIO_RAPIDO.md](./INICIO_RAPIDO.md)** ⭐
   - Guía de 5 minutos para comenzar
   - Comandos básicos (`npm install`, `npm run dev`)
   - Tareas comunes rápidas
   - Solucionar problemas

2. **[README.md](./README.md)** 📚
   - Descripción completa del proyecto
   - Estructura de carpetas
   - Dependencias instaladas
   - Información de despliegue

---

## 🔧 Personalización

**Para adaptar el sitio a tu negocio:**

1. **[CONFIGURACION.md](./CONFIGURACION.md)** ⚙️
   - Dónde cambiar teléfono, email, etc.
   - Cómo agregar logos e imágenes
   - Personalización de colores
   - Agregar servicios nuevos

2. **.env.example**
   - Template de variables de entorno
   - Copia a `.env.local` y completa tus datos

---

## 📝 Desarrollo

**Si vas a modificar o agregar código:**

1. **[ESTANDARES.md](./ESTANDARES.md)** 📋
   - Convenciones de nomenclatura
   - Estructura de componentes
   - Buenas prácticas de React
   - Cómo documentar código

---

## 🗂️ Estructura de Proyecto

```
digitalfox-website/
│
├── 📄 Documentación
│   ├── README.md              # Guía completa (¡LEE ESTO PRIMERO!)
│   ├── INICIO_RAPIDO.md       # Comienza aquí
│   ├── CONFIGURACION.md       # Personalizar el sitio
│   ├── ESTANDARES.md          # Para desarrolladores
│   └── INDICE.md              # Este archivo
│
├── 📦 Configuración
│   ├── package.json           # Dependencias y scripts
│   ├── tailwind.config.js     # Configuración de estilos
│   ├── vite.config.js         # Configuración de build
│   ├── postcss.config.js      # Procesador de CSS
│   └── .env.example           # Variables de entorno
│
├── 📂 Código Fuente
│   └── src/
│       ├── components/        # 7 componentes reutilizables
│       │   ├── Header.jsx     # Navegación fija
│       │   ├── Hero.jsx       # Sección principal
│       │   ├── Services.jsx   # Grid de servicios
│       │   ├── Portfolio.jsx  # Galería de proyectos
│       │   ├── Testimonials.jsx # Carrusel de opiniones
│       │   ├── Contact.jsx    # Formulario de contacto
│       │   └── Footer.jsx     # Pie de página
│       │
│       ├── pages/
│       │   └── Home.jsx       # Página principal
│       │
│       ├── assets/            # Recursos
│       │   └── index.js
│       │
│       ├── App.jsx            # Componente raíz
│       ├── main.jsx           # Punto de entrada
│       ├── index.css          # Estilos globales y animaciones
│       └── config.js          # Configuración global
│
├── 📁 Estáticos
│   ├── public/                # Archivos públicos
│   │   ├── logo.png           # 👈 Coloca tu logo aquí
│   │   └── hero-bg.jpg        # 👈 Imagen de fondo (opcional)
│   │
│   └── node_modules/          # Dependencias (no tocar)
│
├── 🎯 Control de Versiones
│   └── .gitignore             # Qué no subir a Git

└── 🌐 Otros
    ├── index.html             # HTML principal
    └── eslint.config.js       # Linter de código
```

---

## 📋 Checklist de Configuración

Antes de desplegar:

- [ ] Cambiar número de teléfono en `src/config.js`
- [ ] Cambiar email en `src/config.js`
- [ ] Agregar enlaces de redes sociales
- [ ] Colocar logo en `public/logo.png`
- [ ] Reemplazar proyectos del portfolio
- [ ] Actualizar colores (opcional)
- [ ] Probar en móvil y desktop
- [ ] Probar formulario de contacto
- [ ] Probar botón de WhatsApp

Ver **[CONFIGURACION.md](./CONFIGURACION.md)** para instrucciones detalladas.

---

## 🎨 Componentes

| Componente | Ubicación | Qué Hace |
|-----------|-----------|---------|
| **Header** | `src/components/Header.jsx` | Navegación fija con menú responsivo |
| **Hero** | `src/components/Hero.jsx` | Sección principal con CTA |
| **Services** | `src/components/Services.jsx` | 8 servicios en 3 categorías |
| **Portfolio** | `src/components/Portfolio.jsx` | 6 proyectos con galería |
| **Testimonials** | `src/components/Testimonials.jsx` | Carrusel de 4 testimonios |
| **Contact** | `src/components/Contact.jsx` | Formulario + redes sociales |
| **Footer** | `src/components/Footer.jsx` | Pie de página |

---

## 🚀 Comandos Útiles

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Crear versión optimizada
npm run build

# Ver versión en producción localmente
npm run preview
```

---

## 🎯 Próximos Pasos

### Paso 1: Inicio Rápido ⚡
→ Lee [INICIO_RAPIDO.md](./INICIO_RAPIDO.md)

### Paso 2: Personaliza ⚙️
→ Sigue [CONFIGURACION.md](./CONFIGURACION.md)

### Paso 3: Prueba Localmente 🧪
```bash
npm install
npm run dev
```

### Paso 4: Desplega 🌐
→ Lee la sección "Despliegue" en [README.md](./README.md)

---

## ❓ Preguntas Frecuentes

**P: ¿Cómo cambio el número de teléfono?**
R: Abre `src/config.js` y edita `CONTACT_INFO.phone`

**P: ¿Dónde agrego mi logo?**
R: Coloca la imagen en `public/logo.png`

**P: ¿Cómo agrego más servicios?**
R: Edita el array `SERVICES` en `src/config.js`

**P: ¿Cómo cambio los colores?**
R: Modifica `tailwind.config.js` en la sección `colors`

**P: ¿Dónde se aloja el sitio?**
R: Lee "Despliegue" en [README.md](./README.md) para opciones

Ver [INICIO_RAPIDO.md](./INICIO_RAPIDO.md) para más preguntas.

---

## 📞 Contacto y Soporte

Si necesitas ayuda:

1. Revisa la documentación apropiada arriba
2. Busca en [INICIO_RAPIDO.md](./INICIO_RAPIDO.md) - Solucionar Problemas
3. Verifica [ESTANDARES.md](./ESTANDARES.md) si necesitas entender el código

---

## 🎓 Recursos de Aprendizaje

- [React Oficial](https://react.dev) - Documentación de React
- [TailwindCSS](https://tailwindcss.com) - Framework de CSS
- [Vite](https://vite.dev) - Herramienta de build
- [MDN Web Docs](https://developer.mozilla.org) - Referencia de JavaScript/CSS

---

## 📊 Resumen del Proyecto

- **Tecnología**: React 18 + Vite + TailwindCSS
- **Componentes**: 7 componentes reutilizables
- **Animaciones**: 8+ efectos suaves
- **Responsivo**: Mobile-first design
- **Rendimiento**: Optimizado para velocidad
- **SEO**: Estructura semántica HTML

---

## ✨ Features Incluidas

✅ Navegación fija responsiva
✅ Sección hero con animaciones
✅ Grid de 8 servicios organizados
✅ Galería de portfolio interactiva
✅ Carrusel de testimonios
✅ Formulario de contacto con validación
✅ Integración con WhatsApp
✅ Redes sociales
✅ Footer completo
✅ Animaciones suaves en todo el sitio
✅ Diseño oscuro profesional
✅ Totalmente personalizable

---

**¡Tu sitio profesional está listo! 🎉**

Comienza con [INICIO_RAPIDO.md](./INICIO_RAPIDO.md) ahora →

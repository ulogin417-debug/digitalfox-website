# 📚 Estándares de Código - DigitalFox

## 🎯 Convenciones de Nomenclatura

### Componentes
- Usar **PascalCase**: `Header.jsx`, `ServiceCard.jsx`
- Archivos: `.jsx` para componentes React
- Cada componente en su propio archivo

```javascript
// ✅ Correcto
function ServiceCard({ service }) {
  return <div>...</div>;
}

// ❌ Incorrecto
function serviceCard({ service }) {
  return <div>...</div>;
}
```

### Variables y Funciones
- Usar **camelCase**: `handleClick`, `userEmail`, `isActive`

```javascript
// ✅ Correcto
const handleFormSubmit = () => { /* ... */ }
const userEmail = "user@example.com"

// ❌ Incorrecto
const HandleFormSubmit = () => { /* ... */ }
const user_email = "user@example.com"
```

### Constantes
- Usar **UPPER_SNAKE_CASE**: `MAX_ITEMS`, `API_URL`

```javascript
const MAX_SERVICES = 8;
const DEFAULT_TIMEOUT = 5000;
```

---

## 📝 Estructura de Componentes

### Componente Base
```javascript
import React, { useState } from 'react';

/**
 * MiComponente
 * Descripción breve de qué hace el componente
 * 
 * @returns {JSX.Element} Elemento renderizado
 */
const MiComponente = () => {
  const [state, setState] = useState(initialValue);

  const handleAction = () => {
    // Lógica aquí
  };

  return (
    <section className="...">
      {/* Contenido */}
    </section>
  );
};

export default MiComponente;
```

### Componente con Props
```javascript
/**
 * Card
 * @param {string} title - Título de la tarjeta
 * @param {string} description - Descripción
 * @param {function} onAction - Callback al hacer clic
 */
const Card = ({ title, description, onAction }) => {
  return (
    <div onClick={onAction}>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default Card;
```

---

## 🎨 Estilos con TailwindCSS

### Reglas
1. Usar clases de TailwindCSS en lugar de CSS personalizado cuando sea posible
2. Usar `@apply` para agrupar estilos reutilizables en `index.css`
3. Mantener orden: display → position → sizing → spacing → colors → effects

### Ejemplo Correcto
```jsx
<div className="flex items-center justify-between h-16 px-4 bg-dark border-b border-gray-800">
  <span className="text-white font-bold">Logo</span>
  <nav className="hidden md:flex gap-4">
    <a href="#" className="text-gray-300 hover:text-primary transition">Home</a>
  </nav>
</div>
```

### @apply en CSS
```css
/* Evita repetir clases */
@apply flex items-center justify-center gap-4 p-4 bg-gray-dark rounded-lg;
```

---

## 🔄 Estructura de Carpetas

```
src/
├── components/
│   ├── Header.jsx          # Componentes principales
│   ├── Hero.jsx
│   └── ...
│
├── pages/
│   └── Home.jsx           # Páginas completas
│
├── assets/
│   ├── index.js           # Exportaciones centralizadas
│   └── images/            # Imágenes locales (si las hay)
│
├── App.jsx                # Componente raíz
├── main.jsx               # Punto de entrada
├── index.css              # Estilos globales
└── config.js              # Configuración global
```

### Agregar una Nueva Característica
1. **Si es un componente reutilizable**: `src/components/MiComponente.jsx`
2. **Si es una página completa**: `src/pages/MiPagina.jsx`
3. **Si es configuración**: Agrega a `src/config.js`
4. **Si son estilos globales**: Agrega a `src/index.css`

---

## ✅ Checklist de Código

Antes de hacer commit:

- [ ] Código comentado donde sea complejo
- [ ] Sin `console.log` en producción
- [ ] Nombres claros y descriptivos
- [ ] Sin código duplicado (DRY - Don't Repeat Yourself)
- [ ] Funciones con una única responsabilidad
- [ ] Props bien documentadas con comentarios JSDoc
- [ ] Manejo de errores apropiado
- [ ] Código indentado correctamente (2 espacios)

---

## 💬 Documentación de Código

### Componentes
```javascript
/**
 * ServiceCard Component
 * Muestra una tarjeta de servicio con hover effects
 * 
 * @param {Object} service - Datos del servicio
 * @param {string} service.title - Título del servicio
 * @param {string} service.description - Descripción
 * @param {JSX.Element} service.icon - Ícono del componente
 * @param {number} index - Índice para animación
 * 
 * @returns {JSX.Element} Tarjeta de servicio
 */
const ServiceCard = ({ service, index }) => { /* ... */ }
```

### Funciones
```javascript
/**
 * Valida un email usando regex
 * 
 * @param {string} email - Email a validar
 * @returns {boolean} True si es válido
 */
const validateEmail = (email) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
```

---

## 🎯 Buenas Prácticas

### 1. Estado Local vs Global
```javascript
// Usa useState para estado local simple
const [isOpen, setIsOpen] = useState(false);

// config.js para datos compartidos
export const NAVIGATION_ITEMS = [...]
```

### 2. Eventos Manejados Correctamente
```javascript
// ✅ Correcto
const handleClick = (e) => {
  e.preventDefault();
  // Lógica
}

// ❌ Evitar
<button onClick={() => handleDelete(item)}>
  Delete
</button>
// Usa callback en su lugar
```

### 3. Listas con Keys
```javascript
// ✅ Correcto
{items.map((item) => (
  <div key={item.id}>{item.name}</div>
))}

// ❌ Evitar
{items.map((item, index) => (
  <div key={index}>{item.name}</div>
))}
```

### 4. Condicionales Claros
```javascript
// ✅ Correcto
{isLoading && <LoadingSpinner />}
{error && <ErrorMessage message={error} />}
{!isLoading && !error && <Content />}

// ❌ Evitar
{isLoading ? <LoadingSpinner /> : error ? <ErrorMessage /> : <Content />}
```

---

## 🔍 Debugging Tips

### Usar React DevTools
1. Instala la extensión de Chrome
2. Abre DevTools (F12)
3. Busca "Components" para inspeccionar props y estado

### Console Logging
```javascript
// Útil para debugging
console.log('Estado actual:', state);
console.warn('Posible problema:', value);
console.error('Error:', error);
```

### Validar Props en Desarrollo
```javascript
// Al final del archivo
if (typeof window !== 'undefined') {
  // Solo en desarrollo
  if (process.env.NODE_ENV === 'development') {
    console.log('DEBUG: Props recibidas', props);
  }
}
```

---

## 📦 Dependencias Instaladas

- **react**: Framework UI
- **react-dom**: Renderizado de React
- **react-icons**: Iconos SVG
- **tailwindcss**: Framework CSS
- **vite**: Build tool
- **postcss**: Procesador de CSS

Para agregar más:
```bash
npm install nombre-paquete
```

---

## 🚀 Performance

### Optimizaciones Aplicadas
- ✅ Code splitting automático con Vite
- ✅ Lazy loading de componentes grandes
- ✅ Minimización automática en build
- ✅ Caché de navegador configurado

### Mantener Velocidad
1. Evita renders innecesarios
2. Usa keys en listas
3. Optimiza imágenes (comprime antes de subir)
4. Lazy load componentes pesados si es necesario

---

## 🔐 Seguridad

- ✅ Sanitización de entrada en formularios
- ✅ Validación en cliente (+ validación en servidor recomendada)
- ✅ No almacenes secretos en el código
- ✅ Variables sensibles en `.env` (nunca en `.env.example`)

---

## 📖 Referencias

- [JavaScript Style Guide](https://google.github.io/styleguide/jsguide.html)
- [React Best Practices](https://react.dev/learn)
- [TailwindCSS Best Practices](https://tailwindcss.com/docs/using-with-preprocessors)

---

**¡Mantén el código limpio y consistente para facilitar el mantenimiento futuro!**

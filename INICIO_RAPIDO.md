# 🚀 Guía Rápida de Inicio - DigitalFox

## ⚡ Inicio Rápido (5 minutos)

### 1. Instalar Dependencias
```bash
npm install
```

### 2. Iniciar Servidor de Desarrollo
```bash
npm run dev
```
✅ Se abrirá automáticamente en `http://localhost:3000`

### 3. Editar y Ver Cambios
- Los cambios se reflejan en tiempo real gracias a HMR
- Abre tu editor favorito y comienza a editar archivos en `src/`

---

## 📁 Estructura Rápida

```
src/
├── components/       # Componentes reutilizables
├── pages/           # Páginas completas
├── assets/          # Imágenes e íconos
├── App.jsx          # Componente raíz
├── main.jsx         # Punto de entrada
├── index.css        # Estilos globales
└── config.js        # Configuración global
```

---

## ✏️ Tareas Comunes

### Cambiar Número de Teléfono
1. Abre `src/config.js`
2. Busca `CONTACT_INFO`
3. Actualiza `phone` y `whatsapp`

### Agregar un Nuevo Servicio
1. Abre `src/config.js`
2. En `SERVICES`, agrega un nuevo objeto:
```javascript
{
  category: 'Tecnología',
  icon: 'FaLaptop',
  title: 'Tu Servicio',
  description: 'Descripción...',
}
```

### Cambiar Colores
1. Abre `tailwind.config.js`
2. En `colors`, actualiza los valores hex

### Agregar una Nueva Sección
1. Crea un archivo en `src/components/MiSeccion.jsx`
2. Importa en `src/pages/Home.jsx`
3. Agrégalo entre las otras secciones

---

## 🎯 Componentes Principales

| Componente | Ubicación | Responsable de |
|-----------|-----------|-----------------|
| Header | `src/components/Header.jsx` | Navegación fija |
| Hero | `src/components/Hero.jsx` | Sección principal |
| Services | `src/components/Services.jsx` | Grid de servicios |
| Portfolio | `src/components/Portfolio.jsx` | Galería de proyectos |
| Testimonials | `src/components/Testimonials.jsx` | Carrusel de opiniones |
| Contact | `src/components/Contact.jsx` | Formulario y contacto |
| Footer | `src/components/Footer.jsx` | Pie de página |

---

## 🎨 Personalización

### Cambiar Logo
1. Reemplaza `public/logo.png`
2. O edita el texto en `Header.jsx`:
```jsx
<span className="text-primary">Digital</span>
<span className="text-white">Fox</span>
```

### Cambiar Tipografía
1. Abre `tailwind.config.js`
2. En `fontFamily`, cambia o agrega fuentes
3. Importa de Google Fonts si es necesario

### Agregar Animación Personalizada
1. Abre `src/index.css`
2. Agrega un nuevo `@keyframes`
3. Úsalo con `animate-[nombre]` en TailwindCSS

---

## 🔍 Verificar Errores

```bash
# Buscar errores en tiempo real
npm run dev

# Verifica la sintaxis al guardar
# Los errores aparecerán en la consola del navegador (F12)
```

---

## 📦 Preparar para Producción

### Crear Build
```bash
npm run build
```
Esto crea una carpeta `dist/` optimizada.

### Previsualizarlocalmente
```bash
npm run preview
```

### Desplegar en Vercel
1. Sube a GitHub
2. Importa en [Vercel](https://vercel.com)
3. ¡Listo! Se despliega automáticamente

---

## 🆘 Solucionar Problemas

### "No se ve nada"
- Verifica que `npm run dev` esté ejecutándose
- Limpia caché: Ctrl+Shift+R (Windows) o Cmd+Shift+R (Mac)

### "Errores de dependencias"
```bash
rm -rf node_modules
npm install
npm run dev
```

### "Puerto 3000 en uso"
```bash
npm run dev -- --port 3001
```

### "Cambios no se reflejan"
- Reinicia el servidor: Ctrl+C y `npm run dev`
- Limpia la caché del navegador

---

## 📚 Recursos Útiles

- [Documentación React](https://react.dev)
- [Guía TailwindCSS](https://tailwindcss.com/docs)
- [Vite Docs](https://vite.dev)
- [React Icons Galería](https://react-icons.github.io/react-icons/)

---

## 💡 Tips Productivos

1. **DevTools**: Abre F12 para ver errores en tiempo real
2. **Keyboard Shortcuts**: 
   - Ctrl+S: Guardar (los cambios se ven al instante)
   - Ctrl+P: Buscar archivos rápidamente
3. **Live Reload**: El navegador se actualiza automáticamente
4. **Comentarios**: Usa `//` para documentar tu código

---

## 📞 Ayuda

Si algo no funciona:
1. Revisa la consola (F12 > Console)
2. Lee el README.md detallado
3. Consulta CONFIGURACION.md para personalizaciones

---

**¡Listo para empezar? ¡Ejecuta `npm run dev` y disfruta! 🚀**

#!/bin/bash
# Script de inicio rápido para DigitalFox Website
# Ejecuta este script para configurar e iniciar el proyecto

echo "╔════════════════════════════════════════════════════════════════╗"
echo "║         DigitalFox Website - Script de Instalación           ║"
echo "╚════════════════════════════════════════════════════════════════╝"
echo ""

# Verificar si Node.js está instalado
if ! command -v node &> /dev/null; then
    echo "❌ Node.js no está instalado."
    echo "Descárgalo desde: https://nodejs.org/"
    exit 1
fi

echo "✅ Node.js encontrado: $(node -v)"
echo "✅ NPM encontrado: $(npm -v)"
echo ""

# Instalar dependencias
echo "📦 Instalando dependencias..."
npm install

if [ $? -eq 0 ]; then
    echo "✅ Dependencias instaladas correctamente"
else
    echo "❌ Error al instalar dependencias"
    exit 1
fi

echo ""
echo "╔════════════════════════════════════════════════════════════════╗"
echo "║               ✨ ¡Instalación Completada! ✨                  ║"
echo "╚════════════════════════════════════════════════════════════════╝"
echo ""
echo "Próximos pasos:"
echo "1. Abre INDICE.md para entender la estructura"
echo "2. Abre CONFIGURACION.md para personalizar tu sitio"
echo "3. Ejecuta: npm run dev"
echo "4. Abre tu navegador en http://localhost:3000"
echo ""
echo "📚 Documentación:"
echo "  - BIENVENIDA.txt ........... Información de bienvenida"
echo "  - INDICE.md ............... Índice de documentación"
echo "  - INICIO_RAPIDO.md ........ Guía rápida de 5 minutos"
echo "  - CONFIGURACION.md ........ Cómo personalizar el sitio"
echo "  - README.md ............... Documentación completa"
echo "  - ESTANDARES.md ........... Estándares de código"
echo ""
echo "¡Tu sitio está listo para personalizarse! 🚀"

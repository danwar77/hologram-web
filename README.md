# Danwar Design | Dashboard Holográfico

Dashboard holográfico interactivo con efectos glassmorphic, visualizaciones de datos y galería de proyectos para **Danwar Design** - IA Engineer + Agencia Creativa.

Presenta servicios de aplicaciones con IA para Flutter, diseño 3D con Blender, sitios web modernos y marca digital completa.

## 🚀 Ejecutar

```bash
npm install
npm run dev
```

La aplicación estará disponible en la URL local que muestre Vite, por ejemplo `http://localhost:5174/`.

Para producción:

```bash
npm run build
npm run preview
```

## ✨ Características

### Presentación de Servicios Danwar Design
- **IA Engineering**: Aplicaciones Flutter con inteligencia artificial integrada
- **Blender 3D**: Visualizaciones premium y mundos 3D para marcas
- **Web Moderna**: Sitios rápidos, limpios y persuasivos
- **Marca Digital**: Presencia completa lista para crecer
- **Contenido Bilingüe**: ES/EN desde la base

### Interfaz Glassmorphic
- Efectos de cristal esmerilado con blur, transparencias y gradientes holográficos
- Animaciones de tilt 3D reactivas al movimiento del cursor
- Reflejos y efectos de iluminación dinámica en paneles interactivos
- Scanlines, noise layer y light sweeps para efecto futurista

### Widgets Interactivos
- **Proyectos Flutter**: Apps con IA integrada en desarrollo activo
- **Stack Técnico**: Flutter, Blender, IA, React trabajando juntos
- **Servicios Core**: 4 pilares creativos y técnicos de la agencia
- **Ring Gauges**: Indicadores de crecimiento de marca y presencia digital
- **Alcance Global**: Contenido bilingüe ES/EN para audiencia internacional
- **Sistema Creativo**: IA, Flutter, 3D y Web en un solo ecosistema

### Galería de Proyectos
- Portfolio holográfico con proyectos de Blender 3D y Flutter + IA
- Navegación con controles prev/next y thumbnails
- Efectos de proyección con ghosting lateral
- Animaciones de escaneo y captions descriptivos de servicios

### Navegación y UI
- Top bar con marca Danwar77 y navegación por tabs (Servicios, Proceso, Trabajo, Contacto)
- Rail lateral con 5 modos: Portfolio, Proyectos, Servicios, Stack, Contacto
- Paneles flotantes con insights de creatividad, técnica e inteligencia
- Metric strip con tiles de servicios core y stack técnico
- Grid inferior con paneles de servicios IA/Flutter/3D/Web, tecnologías activas y contacto

### Visualizaciones de Datos
- Trend charts con líneas múltiples y fills
- Area charts para análisis mensual
- Mini bars para resúmenes rápidos
- Ring gauges con valores porcentuales
- World map con conectividad global
- Radar hexagonal para vectores de sistema

### Diseño Responsive
- Layout adaptativo para desktop, tablet y móvil
- Interacciones táctiles optimizadas
- Efectos hover y active states en todos los controles
- Navegación por teclado con ARIA labels

## 🛠️ Tecnologías

- **React 19** - Última versión con renderizado optimizado
- **Vite 8** - Build tool ultrarrápido con HMR
- **TypeScript 5** - Type safety y mejor DX
- **Lucide React** - Iconografía moderna y consistente
- **CSS Custom Properties** - Variables dinámicas para animaciones
- **CSS Grid & Flexbox** - Layouts responsive avanzados

## 📁 Estructura del Proyecto

```
hologram-web/
├── public/
│   └── gallery/          # Imágenes de la galería
├── src/
│   ├── App.tsx           # Componente principal con todos los widgets
│   ├── main.tsx          # Entry point de React
│   └── styles/
│       └── global.css    # Estilos glassmorphic y animaciones
├── index.html
├── vite.config.ts
├── tsconfig.json
└── package.json
```

## 🎨 Personalización

### Cambiar Imágenes de la Galería
1. Agrega tus imágenes a `public/gallery/`
2. Actualiza el array `galleryItems` en `src/App.tsx` con las nuevas rutas y metadatos

### Modificar Colores y Efectos
- Edita las variables CSS en `src/styles/global.css`
- Ajusta gradientes, blur, opacidad y colores de acento
- Personaliza animaciones de tilt, glow y scanlines

### Agregar Nuevos Widgets
1. Crea tu componente de visualización (chart, graph, gauge, etc.)
2. Agrégalo al grid en el `hologram-pane`
3. Actualiza `widgetDetails` con la información del widget

## 🌐 Deployment

Este proyecto está configurado para desplegarse automáticamente en **GitHub Pages** mediante GitHub Actions.

Cada push a la rama `main` dispara un build y deploy automático.

**URL de producción**: `https://danwar77.github.io/hologram-web/`

## 📄 Licencia

MIT

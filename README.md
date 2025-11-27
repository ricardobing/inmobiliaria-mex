# Bosques de Cholul - Demo Inmobiliario

Demo funcional del sitio web para el proyecto residencial Bosques de Cholul, desarrollado con Next.js 14, React y TailwindCSS.

## 🚀 Instalación

```bash
# Instalar dependencias
npm install

# Ejecutar servidor de desarrollo
npm run dev

# Abrir en el navegador
http://localhost:3000
```

## 📦 Tecnologías

- **Next.js 14** (App Router)
- **React 18**
- **TailwindCSS 3.4**
- **PostCSS + Autoprefixer**

## 📂 Estructura del Proyecto

```
inmobiliaria-mex/
├── app/
│   ├── layout.jsx          # Layout principal con Header y Footer
│   ├── page.jsx            # Home page con todas las secciones
│   └── globals.css         # Estilos globales y Tailwind
├── components/
│   ├── Header.jsx          # Navegación sticky con logo y menú
│   ├── Hero.jsx            # Hero section con CTA
│   ├── FeaturesCards.jsx   # 4 tarjetas de características
│   ├── AboutLocation.jsx   # Sección sobre ubicación con imágenes
│   ├── ModelsGrid.jsx      # Grid de modelos disponibles
│   ├── Amenities.jsx       # Amenidades con video central
│   ├── Gallery.jsx         # Galería de imágenes 4x2
│   ├── Contact.jsx         # Formulario de contacto y mapa
│   ├── CTAProvi.jsx        # Call-to-action Grupo Provi
│   └── Footer.jsx          # Footer con redes sociales
├── public/                 # Archivos estáticos (agregar imágenes aquí)
├── next.config.js
├── tailwind.config.js
├── postcss.config.js
└── package.json
```

## 🎨 Componentes Implementados

### 1. **Header** (`components/Header.jsx`)
- Logo Bosques de Cholul
- Menú de navegación: Inicio, Nosotros, Modelos, Galería
- Botón CTA "Contacto"
- Menú hamburguesa responsive
- Sticky navbar con backdrop blur

### 2. **Hero** (`components/Hero.jsx`)
- Background con imagen de casa moderna
- Título: "El Nuevo Lujo Residencial"
- Subtítulo: "El privilegio de vivir en el mejor entorno"
- Botón "Agendar"
- Indicador de scroll animado

### 3. **FeaturesCards** (`components/FeaturesCards.jsx`)
- 4 tarjetas con gradiente verde:
  - Exclusivo y Seguro
  - Diseño y Personalidad
  - Conexión Estratégica
  - Alta Plusvalía
- Iconos SVG personalizados
- Efecto hover scale

### 4. **AboutLocation** (`components/AboutLocation.jsx`)
- Título con underline verde
- Texto sobre Bosques de Cholul y GRUPO PROVI
- Grid de 4 imágenes con layout escalonado
- Botón "Agendar"

### 5. **ModelsGrid** (`components/ModelsGrid.jsx`)
- 3 modelos: Amelia plus, Bianca plus, Davalia plus
- Cards con gradiente verde
- Imagen + descripción + botón "Más información"
- Efecto hover scale

### 6. **Amenities** (`components/Amenities.jsx`)
- Layout 3 columnas:
  - 2 amenidades izquierda
  - Video/imagen central con play button
  - 2 amenidades derecha
- Cards con iconos y descripciones
- Responsive: stack en mobile

### 7. **Gallery** (`components/Gallery.jsx`)
- Grid 4x2 de imágenes
- Hover effect con escala
- Responsive: 2 columnas en mobile

### 8. **Contact** (`components/Contact.jsx`)
- Formulario completo con campos:
  - Nombre, Teléfono, Correo
  - Motivo, Modelo, Presupuesto
  - Tiempo de compra, Tipo de crédito, Estado
- Mapa de Google Maps embebido
- Botón descarga brochure
- Background verde con glassmorphism

### 9. **CTAProvi** (`components/CTAProvi.jsx`)
- Texto social proof: "Más de 4100 familias"
- Logo PROVI
- Fondo oscuro

### 10. **Footer** (`components/Footer.jsx`)
- Logo centrado
- Menú de navegación
- 4 iconos sociales: Email, Instagram, WhatsApp, Maps
- Copyright y créditos 3ROOMS
- Background gradiente verde

## 🎨 Paleta de Colores

```css
Primary: #1B7F5A (Verde principal)
Primary Dark: #0F5940
Primary Light: #2DA574
Dark: #1A1A1A (Fondo principal)
Dark 800: #252525
Dark 900: #0A0A0A
```

## 📱 Responsive Design

- **Mobile**: < 768px (1 columna)
- **Tablet**: 768px - 1024px (2 columnas)
- **Desktop**: > 1024px (3-4 columnas)

Todos los componentes incluyen breakpoints `md:` y `lg:` de Tailwind.

## 🖼️ Imágenes

Actualmente usa placeholders de Unsplash. Para producción:

1. Coloca imágenes reales en `/public/images/`
2. Reemplaza URLs en componentes:
   - Hero background
   - AboutLocation grid (4 imágenes)
   - ModelsGrid (3 imágenes)
   - Amenities video/image
   - Gallery (8 imágenes)

## ⚡ Performance

**Optimizaciones implementadas:**

- App Router de Next.js 14 (Server Components por defecto)
- Tailwind CSS (purge automático de CSS no usado)
- next/image preparado en next.config.js
- Sin dependencias de UI pesadas
- CSS-in-JS mínimo, todo Tailwind utilities

**Próximas optimizaciones:**

- Convertir imágenes a next/image
- Lazy loading de componentes pesados
- Implementar ISR para contenido dinámico
- Agregar loading states

## 🔧 Configuración

### next.config.js
- Remote patterns habilitados para imágenes externas

### tailwind.config.js
- Colores custom del proyecto
- Font family configurada
- Gradientes custom

### globals.css
- Variables CSS custom
- Utilidades personalizadas (.green-underline)
- Smooth scroll habilitado

## 🚢 Deploy

### Vercel (Recomendado)
```bash
npm run build
# Luego conectar repo a Vercel
```

### Otros hosts
```bash
npm run build
npm start
# Puerto 3000 por defecto
```

## 📝 Notas de Desarrollo

### Cambios necesarios antes de producción:

1. **Imágenes**: Reemplazar todas las URLs de Unsplash
2. **Formulario**: Implementar backend para Contact form
3. **Mapa**: Actualizar coordenadas reales del proyecto
4. **Logo**: Reemplazar SVG placeholder con logo real
5. **Textos**: Revisar todos los copy con cliente
6. **Analytics**: Agregar Google Analytics/Meta Pixel
7. **SEO**: Completar metadata en cada página
8. **Links sociales**: Actualizar URLs reales

### Funcionalidades pendientes (fuera de scope del demo):

- Sistema de gestión de modelos
- Galería con lightbox
- Video player custom
- Integración CRM
- Chat en vivo
- Tours virtuales 360°
- Calculadora de crédito

## 👨‍💻 Comandos Útiles

```bash
# Desarrollo
npm run dev

# Build de producción
npm run build

# Servir build
npm start

# Linter
npm run lint
```

## 📧 Contacto

Para modificaciones o escalamiento del proyecto, contactar al equipo de desarrollo.

---

**Desarrollado para demostración del proyecto Bosques de Cholul**

# 🚀 QUICK START - Bosques de Cholul Demo

## Instalación en 3 Pasos

### 1️⃣ Clonar e Instalar
```bash
git clone https://github.com/ricardobing/inmobiliaria-mex.git
cd inmobiliaria-mex
npm install
```

### 2️⃣ Ejecutar
```bash
npm run dev
```

### 3️⃣ Abrir
```
http://localhost:3000
```

---

## 🎨 Lo que Verás

✅ **Header** - Navegación sticky con logo y menú  
✅ **Hero** - "El Nuevo Lujo Residencial" con CTA  
✅ **Features** - 4 tarjetas verdes con características  
✅ **Ubicación** - Grid de imágenes y texto  
✅ **Modelos** - Amelia, Bianca, Davalia plus  
✅ **Amenidades** - Layout con video central  
✅ **Galería** - Grid 4x2 de imágenes  
✅ **Contacto** - Formulario + mapa  
✅ **CTA Provi** - Social proof  
✅ **Footer** - Completo con redes sociales  

---

## 📱 Responsive
- ✅ Mobile (< 768px)
- ✅ Tablet (768-1024px)
- ✅ Desktop (> 1024px)

---

## 🔧 Comandos Útiles

```bash
# Desarrollo
npm run dev

# Build producción
npm run build

# Servir producción
npm start

# Linter
npm run lint
```

---

## 📂 Estructura Clave

```
app/
  ├── layout.jsx      → Layout con Header/Footer
  ├── page.jsx        → Home completa
  └── globals.css     → Estilos globales

components/
  ├── Header.jsx      → Navbar
  ├── Hero.jsx        → Hero section
  ├── FeaturesCards.jsx
  ├── AboutLocation.jsx
  ├── ModelsGrid.jsx
  ├── Amenities.jsx
  ├── Gallery.jsx
  ├── Contact.jsx
  ├── CTAProvi.jsx
  └── Footer.jsx

public/images/        → Agregar imágenes reales aquí
```

---

## ⚠️ Antes de Producción

1. Reemplazar imágenes placeholder en `/public/images/`
2. Actualizar coordenadas del mapa en `Contact.jsx`
3. Implementar backend para formulario de contacto
4. Revisar textos con cliente
5. Agregar Google Analytics

---

## 🌐 Deploy en Vercel

1. Conectar repo en https://vercel.com
2. Import repository
3. Deploy automático en < 2 minutos

---

## 📖 Documentación Completa

Ver `README.md` y `DELIVERABLE.md` para detalles técnicos completos.

---

**GitHub:** https://github.com/ricardobing/inmobiliaria-mex  
**Stack:** Next.js 14 + React 18 + TailwindCSS 3.4

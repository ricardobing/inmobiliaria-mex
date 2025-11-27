# 🎯 ESTRATEGIA WORKANA - PROYECTO $900 USD

## 📊 ANÁLISIS DEL PROYECTO

### Alcance Real del Cliente:
✅ **1 Home** (ya tienes el 80% hecho)  
✅ **3 Páginas de Desarrollos** (modelos individuales)  
✅ **1 Contacto** (ya tienes el formulario base)  

**Total:** 5 páginas + componentes reutilizables

---

## ⏱️ TIEMPO REAL DE DESARROLLO

### CON MI AYUDA Y PROMPTS OPTIMIZADOS:

**Semana 1 (30-35 horas):**
- Día 1-2: Extraer assets de Figma + optimizar
- Día 3-4: Ajustar Home al diseño final + 3 páginas desarrollo
- Día 5-6: Página contacto funcional + formulario backend
- Día 7: Testing, ajustes, deploy

**TOTAL: 5-7 DÍAS CALENDARIO (30-35 horas efectivas)**

### Desglose Detallado:

| Tarea | Tiempo | Con IA |
|-------|--------|--------|
| Extraer assets de Figma | 2-3 hrs | 1 hr |
| Home (ya 80% hecho) | 3 hrs | 1 hr |
| 3 Páginas desarrollo | 8-10 hrs | 4-5 hrs |
| Contacto funcional | 4-5 hrs | 2 hrs |
| Backend formularios | 3-4 hrs | 1-2 hrs |
| Responsive polish | 4-5 hrs | 2 hrs |
| Deploy + testing | 3-4 hrs | 1-2 hrs |
| **TOTAL** | **27-34 hrs** | **12-15 hrs** |

---

## 💰 RENTABILIDAD

**Cobro:** $900 USD  
**Tiempo real:** 12-15 horas  
**Tarifa efectiva:** $60-75 USD/hora  

**¿Es rentable?** ✅ SÍ, muy rentable con IA.

Sin IA: 30-35 horas = $25-30/hora ❌

---

## 🎨 SOLUCIÓN PARA FIGMA (SIN COMPARTIR CREDENCIALES)

### OPCIÓN 1: Exportar desde Figma (RECOMENDADO)

#### Paso a Paso:

1. **Abrir Figma en navegador**
   - Ir a tu diseño
   - Seleccionar frame/sección

2. **Exportar Imágenes:**
   - Click derecho → Export
   - Formato: PNG o JPG (alta calidad)
   - Scale: 2x o 3x (para retina)
   
3. **Exportar Assets por Grupos:**
   ```
   Carpetas a crear:
   ├── hero/ (1 imagen principal)
   ├── modelos/ (3 imágenes por cada desarrollo = 9)
   ├── amenidades/ (4-6 imágenes)
   ├── galeria/ (8-12 imágenes)
   ├── ubicacion/ (mapa, entorno 2-3)
   └── iconos/ (exportar como SVG)
   ```

4. **Copiar Specs:**
   - Usar "Inspect" panel en Figma
   - Anotar:
     - Colores exactos (hex)
     - Tipografías (familia, tamaños)
     - Espaciados (padding, margin)
     - Radios de borde

#### Herramientas para Facilitar:

**Figma Export Tools (Plugins):**
- **Figma to Code** (genera componentes React)
- **Anima** (exporta HTML/CSS)
- **Image Palette** (extrae colores)

**Instalar en Figma:**
1. Plugins → Browse plugins
2. Buscar "Export assets" o "Batch export"
3. Seleccionar múltiples frames y exportar todo

---

### OPCIÓN 2: Figma API (Avanzado pero Rápido)

Si tienes acceso developer en Figma:

```bash
# 1. Obtener API token
# Figma → Settings → Personal Access Token

# 2. Obtener file key de la URL
# https://www.figma.com/design/47hLgfV8Rxp2hPnSBqBxSh/...
#                            ^^^^^^^^^^^^^^^^^^^
#                            Este es el file key

# 3. Usar script para descargar
npm install figma-js
```

```javascript
// download-figma-assets.js
const Figma = require('figma-js');
const client = Figma.Client({ personalAccessToken: 'TU_TOKEN' });

client.file('47hLgfV8Rxp2hPnSBqBxSh').then(({ data }) => {
  console.log(data);
  // Extraer imágenes, colores, etc.
});
```

**Tiempo:** 15-30 minutos vs 2-3 horas manual

---

### OPCIÓN 3: Screenshots + IA (Plan B)

Si no puedes exportar:

1. **Tomar screenshots de alta calidad**
   - Zoom 200% en Figma
   - Capturar secciones
   - Usar herramienta de captura de pantalla

2. **Usar IA para limpiar:**
   - remove.bg (quitar fondos)
   - Upscale con IA (waifu2x, Real-ESRGAN)

3. **Prompt para recrear:**
   ```
   Adjunto screenshot del diseño Figma. 
   Recrea este componente en React + Tailwind exacto.
   ```

---

## 🎯 MI RECOMENDACIÓN DEFINITIVA

### NO COMPARTAS CREDENCIALES DE GOOGLE

**Razones:**
1. ❌ Violación de términos de servicio
2. ❌ Riesgo de seguridad
3. ❌ No es necesario

### PLAN ÓPTIMO (3 horas de tu tiempo):

**HOY (2-3 horas):**

1. **Exportar Assets de Figma (1 hora):**
   ```
   - Abrir Figma
   - Seleccionar frames principales
   - Export → PNG 2x
   - Organizar en carpetas
   - Copiar palette de colores
   - Anotar tipografías
   ```

2. **Subir a GitHub (15 min):**
   ```bash
   cd c:\tmp\inmobiliaria-mex\public\images
   # Pegar imágenes
   git add .
   git commit -m "Add real project assets"
   git push
   ```

3. **Darme Specs (30 min):**
   ```
   Crear archivo FIGMA_SPECS.md con:
   - Colores (hex codes)
   - Fonts (nombres, tamaños)
   - Textos de cada sección
   - Estructura de las 3 páginas desarrollo
   ```

**MAÑANA (Con tus specs):**
- Yo genero prompts optimizados
- Tú ejecutas + IA
- 8-10 horas de desarrollo efectivo
- Sitio completo funcional

---

## 📋 CHECKLIST PARA FIGMA

### Información Crítica a Extraer:

#### 1. COLORES
```
Primario: #______ (verde actual #1B7F5A está bien?)
Secundario: #______
Backgrounds: #______
Textos: #______
```

#### 2. TIPOGRAFÍAS
```
Headings: _______ (font-family, weights)
Body: _______ 
Tamaños: 
  - H1: __px
  - H2: __px
  - H3: __px
  - Body: __px
```

#### 3. IMÁGENES NECESARIAS
```
Home:
  ✓ Hero background (tenemos placeholder)
  ✓ 4 features icons (tenemos SVG)
  ✓ About grid (4 imágenes) ←NECESARIO
  ✓ Galería (8-12) ←NECESARIO

Desarrollo 1 (Amelia Plus):
  □ Hero imagen
  □ Galería interior (4-6)
  □ Plano arquitectónico
  □ Características visuales

Desarrollo 2 (Bianca Plus):
  □ Mismas que Amelia

Desarrollo 3 (Davalia Plus):
  □ Mismas que Amelia

Contacto:
  ✓ Mapa (Google Maps embed)
  □ Foto oficinas (opcional)

TOTAL: ~30-40 imágenes
```

#### 4. TEXTOS EXACTOS
```
Home:
  - Hero título: "El Nuevo Lujo Residencial" (confirmar?)
  - Hero subtítulo: (copiar del Figma)
  - Features (4 textos)
  - About section (2-3 párrafos)

Desarrollos:
  - Nombre
  - Descripción larga
  - Especificaciones (recámaras, baños, m²)
  - Precio (o "Desde $X")
  - Características (lista)

Contacto:
  - Dirección física
  - Teléfonos
  - Emails
  - Horarios
```

---

## 🚀 PLAN DE EJECUCIÓN (5-7 DÍAS)

### DÍA 1 (HOY - 3 horas tu tiempo)
**Tu trabajo:**
- [ ] Exportar todas las imágenes de Figma
- [ ] Crear FIGMA_SPECS.md con colores/fonts/textos
- [ ] Subir assets a `/public/images/` en GitHub

**Mi trabajo (con tus specs):**
- Generar 3 prompts optimizados para:
  1. Ajustar Home con assets reales
  2. Crear las 3 páginas desarrollo
  3. Finalizar contacto + backend

---

### DÍA 2-3 (8-10 horas con IA)
**Prompt 1: Home Final**
```
Tú ejecutas con IA:
- Reemplazar placeholders con imágenes reales
- Ajustar colores exactos del Figma
- Corregir tipografías
- Polish responsive
```

**Resultado:** Home 100% fiel al diseño

---

### DÍA 4-5 (8-10 horas con IA)
**Prompt 2: 3 Páginas Desarrollo**
```
Tú ejecutas con IA:
- Crear /modelos/amelia-plus/page.jsx
- Crear /modelos/bianca-plus/page.jsx
- Crear /modelos/davalia-plus/page.jsx

Cada una con:
- Hero con galería
- Specs técnicas
- Plano
- Características
- CTA contacto
- Modelos relacionados
```

**Resultado:** 3 páginas completas y funcionales

---

### DÍA 6 (4-5 horas con IA)
**Prompt 3: Contacto + Backend**
```
Tú ejecutas con IA:
- Formulario funcional
- API route para envío email
- Validaciones
- Google Maps integrado
- WhatsApp link
```

**Resultado:** Formulario 100% funcional

---

### DÍA 7 (3-4 horas)
**Testing + Deploy:**
- [ ] Testing cross-browser
- [ ] Testing mobile
- [ ] Lighthouse audit (>90)
- [ ] Deploy a Vercel
- [ ] Configurar dominio cliente
- [ ] Entrega final

---

## 💡 PROMPTS QUE TE DARÉ (Ejemplos)

### Ejemplo Prompt 1: Home Ajustado

```
Eres un desarrollador experto de Next.js 14 + TailwindCSS.

CONTEXTO:
Tengo un demo de sitio inmobiliario en Next.js.
Necesito ajustarlo al diseño final del Figma.

CAMBIOS REQUERIDOS:

1. COLORES (actualizar en tailwind.config.js):
   - Primary: #1B7F5A → #[NUEVO_COLOR]
   - Agregar: accent: #[COLOR]

2. TIPOGRAFÍAS:
   - Headings: Cambiar a [FONT_NAME]
   - Importar desde Google Fonts

3. IMÁGENES:
   - Reemplazar en Hero: /images/hero-bg.jpg
   - AboutLocation: /images/about/house-[1-4].jpg
   - Gallery: /images/gallery/img-[1-12].jpg

4. TEXTOS:
   Hero título: "[TEXTO_EXACTO]"
   Hero subtítulo: "[TEXTO]"
   [etc...]

ARCHIVOS A MODIFICAR:
- tailwind.config.js (colores)
- app/layout.jsx (fonts)
- components/Hero.jsx (imagen + textos)
- components/AboutLocation.jsx (imágenes + textos)
- components/Gallery.jsx (imágenes)

GENERA el código completo de cada archivo modificado.
Mantén la estructura actual, solo ajusta lo especificado.
```

---

### Ejemplo Prompt 2: Página Desarrollo

```
Eres experto en Next.js 14 + TailwindCSS.

OBJETIVO:
Crear página individual para modelo "Amelia Plus"
Ruta: app/modelos/amelia-plus/page.jsx

ESTRUCTURA:

1. HERO con galería (carousel)
   - 6 imágenes: /images/models/amelia/[1-6].jpg
   - Título: "Amelia Plus"
   - Precio: "Desde $2,500,000 MXN"

2. ESPECIFICACIONES
   Grid 2 columnas:
   Izquierda:
   - Descripción: "[TEXTO_LARGO]"
   - Características:
     • 2 recámaras con baño propio
     • Closet vestidor
     • Sala y comedor
     • Cocina integral
     • Área de lavado
     • 2 estacionamientos
   
   Derecha:
   - Plano: /images/models/amelia/plano.jpg
   - Specs box:
     * Construcción: 120 m²
     * Terreno: 160 m²
     * Recámaras: 2
     * Baños: 2.5

3. GALERÍA INTERIOR
   Grid 3 columnas de 6 imágenes

4. CTA CONTACTO
   Botón "Agendar visita"
   Formulario modal

5. MODELOS RELACIONADOS
   Cards de Bianca y Davalia

ESTILO:
- Usa design system actual (primary colors, etc.)
- Responsive perfecto
- Animaciones suaves (hover, etc.)

GENERA código completo listo para copiar/pegar.
```

---

## 📊 COMPARACIÓN DE ESTRATEGIAS

| Estrategia | Tiempo | Costo | Calidad | Risk |
|------------|--------|-------|---------|------|
| **Manual sin IA** | 30-35h | $900 ($25/h) | ⭐⭐⭐ | Bajo |
| **Con IA básica** | 20-25h | $900 ($36-45/h) | ⭐⭐⭐⭐ | Medio |
| **Con IA + mis prompts** | 12-15h | $900 ($60-75/h) | ⭐⭐⭐⭐⭐ | Bajo |
| **Compartir creds** | ❌ | ❌ | ❌ | ALTO |

**GANADOR:** IA + Mis prompts optimizados

---

## 🎯 RESUMEN EJECUTIVO

### LO QUE NECESITO DE TI (3 horas HOY):

1. **Exportar imágenes de Figma:**
   - Organizar en carpetas lógicas
   - Formato PNG 2x
   - Nombrar consistentemente

2. **Crear FIGMA_SPECS.md con:**
   ```markdown
   # ESPECIFICACIONES FIGMA
   
   ## Colores
   - Primary: #______
   - Secondary: #______
   - [etc]
   
   ## Tipografías
   - Headings: ______
   - Body: ______
   - Sizes: [lista]
   
   ## Textos
   ### Home
   - Hero: [texto]
   - Features: [4 textos]
   - About: [párrafos]
   
   ### Desarrollo Amelia Plus
   - Descripción: [texto largo]
   - Características: [lista]
   - Specs: [datos]
   
   ### Desarrollo Bianca Plus
   [mismo formato]
   
   ### Desarrollo Davalia Plus
   [mismo formato]
   
   ### Contacto
   - Dirección: [texto]
   - Tel: [número]
   - Email: [email]
   ```

3. **Subir todo a GitHub**

---

### LO QUE YO HARÉ (Inmediato):

1. **Generar 3 prompts ultra-optimizados** para:
   - Home ajustado (2 hrs ejecución)
   - 3 Páginas desarrollo (6 hrs ejecución)
   - Contacto funcional (2 hrs ejecución)

2. **Guiarte paso a paso** en la ejecución

3. **Revisar y ajustar** en tiempo real

---

## ⏰ TIMELINE REALISTA

**HOY:** Tú extraes assets (3 hrs)  
**MAÑANA:** Yo genero prompts (1 hr)  
**DÍA 3-4:** Tú ejecutas con IA (8-10 hrs)  
**DÍA 5:** Polish + testing (3-4 hrs)  
**DÍA 6:** Deploy + entrega

**TOTAL CALENDARIO:** 5-6 días  
**TU TIEMPO:** 12-15 horas  
**TARIFA REAL:** $60-75/hora

---

## 🚨 ADVERTENCIAS

### ❌ NO HAGAS:
- Compartir credenciales de Google
- Dar acceso a tu cuenta Figma
- Usar herramientas "automáticas" no oficiales
- Sobre-prometer fechas al cliente

### ✅ SÍ HAZLO:
- Exporta manualmente (es más seguro)
- Documenta specs claramente
- Usa mis prompts optimizados
- Under-promise, over-deliver

---

## 💰 CÁLCULO FINAL

**Si ejecutas este plan:**

Inversión de tiempo:
- Hoy (specs): 3 hrs
- Desarrollo: 12 hrs
- Total: 15 hrs

Ganancia:
- Cobro: $900 USD
- Tarifa efectiva: $60/hr
- Rentabilidad: ALTA ✅

**Proyectos futuros:**
Si entregas en 5-6 días con calidad premium:
- Cliente satisfecho → más proyectos
- Referidos
- Potencial: 3-5 proyectos similares = $3,000-$5,000

---

## 📧 RESPUESTA INMEDIATA PARA TI

**¿Cuánto tiempo REAL?** 12-15 horas con mis prompts  
**¿Vale la pena $900?** SÍ, $60-75/hr es excelente  
**¿Compartir credenciales?** NO, nunca  
**¿Cómo bajar imágenes?** Export manual de Figma (3 hrs)  
**¿Cuándo empezamos?** En cuanto subas las specs  

---

## 🎬 ACCIÓN INMEDIATA

**TU PRÓXIMO PASO (ahora mismo):**

1. Abre Figma
2. Comienza a exportar imágenes
3. Crea FIGMA_SPECS.md
4. Súbelo a GitHub
5. Avísame cuando esté listo

**YO empiezo a generar los 3 super-prompts**

**Juntos entregamos en 5-6 días. Cliente feliz. Tú con $900 en 15 horas.**

¿Empezamos? 🚀

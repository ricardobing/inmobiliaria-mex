# PLAN COMPLETO DE DESARROLLO - Sitio 100% Funcional

## 🎯 ROADMAP: De Demo a Producción Completa

---

## 📊 ESTADO ACTUAL

### ✅ Completado (Demo)
- Arquitectura Next.js 14 + TailwindCSS
- 10 componentes modulares
- Diseño responsive perfecto
- Navegación fluida
- Performance optimizado
- Deploy pipeline configurado

### ⚠️ Pendiente para Producción
- Backend funcional (formularios, contacto)
- CMS para administración de contenido
- Imágenes reales optimizadas
- Páginas adicionales (Modelos individuales, etc.)
- Funcionalidades avanzadas
- SEO completo
- Analytics y tracking

---

## 🗓️ PLAN DE DESARROLLO EN FASES

### **FASE 1: PRODUCCIÓN BÁSICA** (2-3 semanas)

#### Semana 1: Backend y Formularios
**Días 1-2: API Routes y Email**
- Implementar API route `/api/contact`
- Integrar Resend o SendGrid para emails
- Validación de formularios
- Rate limiting
- Respuesta automática al cliente

**Días 3-4: Base de Datos**
- Setup Vercel Postgres o Supabase
- Modelo de datos: leads, contactos
- CRUD operations
- Backup automático

**Día 5: Testing**
- Test de envío de emails
- Test de guardado en DB
- Validaciones edge cases

#### Semana 2: Contenido Real y Optimización
**Días 1-2: Assets Reales**
- Recibir imágenes profesionales
- Optimización a WebP
- Implementar next/image en todo el sitio
- Crear favicon y app icons

**Días 3-4: SEO y Metadata**
- Metadata dinámica por página
- Open Graph tags
- Twitter Cards
- Sitemap.xml automático
- robots.txt

**Día 5: Performance**
- Lighthouse audit
- Optimización de Core Web Vitals
- Lazy loading avanzado
- Prefetching estratégico

#### Semana 3: Analytics y Deploy Final
**Días 1-2: Tracking**
- Google Analytics 4
- Meta Pixel
- Google Tag Manager
- Event tracking custom

**Días 3-4: Dominio y Producción**
- Configurar dominio custom
- SSL/HTTPS
- CDN optimización
- Deploy a producción

**Día 5: QA Final**
- Testing cross-browser
- Testing dispositivos reales
- Load testing
- Cliente approval

---

### **FASE 2: CMS HEADLESS** (2 semanas)

#### Opción A: Sanity CMS (Recomendado)

**Semana 1: Setup Sanity**
**Días 1-2: Instalación y Configuración**
```bash
npm install @sanity/client @sanity/image-url next-sanity
npx sanity init
```

**Schema Models:**
```javascript
// schemas/model.js
{
  name: 'model',
  title: 'Modelo de Casa',
  type: 'document',
  fields: [
    { name: 'name', type: 'string', title: 'Nombre' },
    { name: 'slug', type: 'slug', options: { source: 'name' } },
    { name: 'description', type: 'text', title: 'Descripción' },
    { name: 'price', type: 'number', title: 'Precio' },
    { name: 'bedrooms', type: 'number', title: 'Recámaras' },
    { name: 'bathrooms', type: 'number', title: 'Baños' },
    { name: 'area', type: 'number', title: 'Área (m²)' },
    { name: 'images', type: 'array', of: [{ type: 'image' }] },
    { name: 'floorPlan', type: 'image', title: 'Plano' },
    { name: 'features', type: 'array', of: [{ type: 'string' }] },
    { name: 'available', type: 'boolean', title: 'Disponible' }
  ]
}

// schemas/gallery.js
{
  name: 'galleryImage',
  title: 'Imagen de Galería',
  type: 'document',
  fields: [
    { name: 'title', type: 'string' },
    { name: 'image', type: 'image' },
    { name: 'category', type: 'string', options: {
      list: ['exterior', 'interior', 'amenidades', 'ubicacion']
    }},
    { name: 'order', type: 'number' }
  ]
}

// schemas/amenity.js
{
  name: 'amenity',
  title: 'Amenidad',
  type: 'document',
  fields: [
    { name: 'title', type: 'string' },
    { name: 'description', type: 'text' },
    { name: 'icon', type: 'string' },
    { name: 'image', type: 'image' }
  ]
}

// schemas/settings.js
{
  name: 'siteSettings',
  title: 'Configuración del Sitio',
  type: 'document',
  fields: [
    { name: 'siteName', type: 'string' },
    { name: 'logo', type: 'image' },
    { name: 'heroTitle', type: 'string' },
    { name: 'heroSubtitle', type: 'string' },
    { name: 'heroImage', type: 'image' },
    { name: 'aboutText', type: 'text' },
    { name: 'contactEmail', type: 'string' },
    { name: 'contactPhone', type: 'string' },
    { name: 'socialMedia', type: 'object', fields: [
      { name: 'facebook', type: 'url' },
      { name: 'instagram', type: 'url' },
      { name: 'whatsapp', type: 'string' }
    ]}
  ]
}
```

**Días 3-4: Integración Frontend**
```javascript
// lib/sanity.js
import { createClient } from 'next-sanity'

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: true,
})

// app/page.jsx (actualizado)
import { client } from '@/lib/sanity'

export default async function Home() {
  const models = await client.fetch(`*[_type == "model"] | order(order asc)`)
  const gallery = await client.fetch(`*[_type == "galleryImage"] | order(order asc)`)
  const amenities = await client.fetch(`*[_type == "amenity"]`)
  const settings = await client.fetch(`*[_type == "siteSettings"][0]`)

  return (
    <main>
      <Hero data={settings} />
      <ModelsGrid models={models} />
      <Amenities amenities={amenities} />
      <Gallery images={gallery} />
    </main>
  )
}
```

**Día 5: Studio Customization**
- Personalizar Sanity Studio
- Agregar custom widgets
- Preview en tiempo real
- Media library organizada

**Semana 2: Features Avanzadas**
**Días 1-2: ISR (Incremental Static Regeneration)**
```javascript
// app/page.jsx
export const revalidate = 60 // Revalidar cada 60 segundos

// app/modelos/[slug]/page.jsx
export async function generateStaticParams() {
  const models = await client.fetch(`*[_type == "model"]{ "slug": slug.current }`)
  return models.map((model) => ({ slug: model.slug }))
}
```

**Días 3-4: Admin Features**
- Roles y permisos
- Workflow de aprobación
- Versioning de contenido
- Scheduled publishing

**Día 5: Capacitación Cliente**
- Video tutorial grabado
- Documentación en español
- Sesión en vivo de 2 horas
- Manual de usuario PDF

---

### **FASE 3: PÁGINAS ADICIONALES** (1-2 semanas)

#### Páginas Nuevas

**1. Página Individual de Modelo**
```
/modelos/[slug]
├── Hero con galería de imágenes
├── Especificaciones técnicas
├── Plano arquitectónico
├── Tour virtual embed
├── Calculadora de hipoteca
├── Formulario de interés
└── Modelos relacionados
```

**2. Página Nosotros**
```
/nosotros
├── Historia de Grupo Provi
├── Misión, visión, valores
├── Timeline de proyectos
├── Equipo
├── Certificaciones
└── CTA contacto
```

**3. Página Ubicación**
```
/ubicacion
├── Mapa interactivo
├── Puntos de interés cercanos
├── Plano maestro del desarrollo
├── Amenidades del área
├── Vialidades y accesos
└── Galería del entorno
```

**4. Blog/Noticias**
```
/blog
├── Grid de artículos
├── Filtros por categoría
├── Búsqueda
├── Artículo individual
├── Artículos relacionados
└── Newsletter signup
```

**5. Avances de Obra**
```
/avances
├── Timeline interactivo
├── Galería por fecha
├── Porcentaje de avance
├── Próximos hitos
└── Suscripción a actualizaciones
```

---

### **FASE 4: FUNCIONALIDADES AVANZADAS** (2-3 semanas)

#### 1. Tour Virtual 360°
**Herramientas:**
- Matterport embed
- O custom con Three.js / React Three Fiber

**Implementación:**
```javascript
// components/Tour360.jsx
'use client'
import dynamic from 'next/dynamic'

const Tour360Viewer = dynamic(
  () => import('@/components/Tour360Viewer'),
  { ssr: false }
)

export default function Tour360() {
  return (
    <div className="aspect-video">
      <Tour360Viewer src="/tours/amelia-plus.jpg" />
    </div>
  )
}
```

#### 2. Calculadora de Hipoteca
```javascript
// components/MortgageCalculator.jsx
'use client'
import { useState } from 'react'

export default function MortgageCalculator({ price }) {
  const [downPayment, setDownPayment] = useState(price * 0.2)
  const [interestRate, setInterestRate] = useState(9.5)
  const [years, setYears] = useState(20)
  
  const calculateMonthly = () => {
    const principal = price - downPayment
    const monthlyRate = interestRate / 100 / 12
    const payments = years * 12
    
    return (principal * monthlyRate * Math.pow(1 + monthlyRate, payments)) / 
           (Math.pow(1 + monthlyRate, payments) - 1)
  }
  
  return (
    <div className="bg-primary p-8 rounded-3xl">
      {/* Form inputs y resultado */}
    </div>
  )
}
```

#### 3. Sistema de Agendamiento
**Opciones:**
- Calendly embed
- Custom con Vercel Postgres + email

**Implementación:**
```javascript
// app/api/appointments/route.js
import { sql } from '@vercel/postgres'
import { sendEmail } from '@/lib/email'

export async function POST(request) {
  const { name, email, phone, date, time, model } = await request.json()
  
  // Guardar en DB
  await sql`
    INSERT INTO appointments (name, email, phone, date, time, model)
    VALUES (${name}, ${email}, ${phone}, ${date}, ${time}, ${model})
  `
  
  // Enviar confirmación
  await sendEmail({
    to: email,
    subject: 'Confirmación de cita - Bosques de Cholul',
    template: 'appointment-confirmation',
    data: { name, date, time }
  })
  
  return Response.json({ success: true })
}
```

#### 4. Chat en Vivo
**Opciones:**
- Crisp
- Intercom
- Tawk.to (gratis)

**Implementación:**
```javascript
// app/layout.jsx
import Script from 'next/script'

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <Script id="crisp-chat">
          {`
            window.$crisp=[];
            window.CRISP_WEBSITE_ID="YOUR_ID";
            (function(){
              d=document;
              s=d.createElement("script");
              s.src="https://client.crisp.chat/l.js";
              s.async=1;
              d.getElementsByTagName("head")[0].appendChild(s);
            })();
          `}
        </Script>
      </body>
    </html>
  )
}
```

#### 5. Sistema de Leads CRM
**Integración con:**
- HubSpot
- Salesforce
- Pipedrive
- O custom dashboard

**Webhook:**
```javascript
// app/api/webhook/crm/route.js
export async function POST(request) {
  const lead = await request.json()
  
  // Enviar a CRM
  await fetch('https://api.hubspot.com/contacts/v1/contact', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${process.env.HUBSPOT_API_KEY}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      properties: [
        { property: 'email', value: lead.email },
        { property: 'firstname', value: lead.name },
        { property: 'phone', value: lead.phone },
        { property: 'modelo_interes', value: lead.model }
      ]
    })
  })
  
  return Response.json({ success: true })
}
```

---

### **FASE 5: ADMIN DASHBOARD** (2 semanas)

#### Panel de Administración Custom

**Tecnología:**
- Next.js API Routes
- NextAuth.js (autenticación)
- Vercel Postgres (datos)
- Recharts (gráficas)

**Features del Dashboard:**

```
/admin (protegido)
├── Login (NextAuth)
├── Dashboard
│   ├── KPIs principales
│   ├── Leads últimos 30 días
│   ├── Conversión funnel
│   ├── Modelos más vistos
│   └── Gráficas de tráfico
├── Leads
│   ├── Lista completa
│   ├── Filtros y búsqueda
│   ├── Detalle de lead
│   ├── Notas y seguimiento
│   └── Exportar CSV
├── Contenido (link a Sanity)
├── Analytics
│   ├── Tráfico
│   ├── Fuentes
│   ├── Conversiones
│   └── Páginas populares
└── Configuración
    ├── Usuarios admin
    ├── Notificaciones email
    └── Integraciones
```

**Implementación Base:**
```javascript
// app/admin/layout.jsx
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'

export default async function AdminLayout({ children }) {
  const session = await getServerSession()
  
  if (!session) {
    redirect('/admin/login')
  }
  
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1">
        {children}
      </main>
    </div>
  )
}

// app/admin/dashboard/page.jsx
import { sql } from '@vercel/postgres'

export default async function Dashboard() {
  const leads = await sql`SELECT COUNT(*) FROM leads WHERE created_at > NOW() - INTERVAL '30 days'`
  const appointments = await sql`SELECT COUNT(*) FROM appointments WHERE date >= CURRENT_DATE`
  
  return (
    <div className="grid grid-cols-4 gap-6">
      <StatCard title="Leads (30d)" value={leads.rows[0].count} />
      <StatCard title="Citas Agendadas" value={appointments.rows[0].count} />
      {/* Más KPIs */}
    </div>
  )
}
```

---

## 🔧 CONFIGURACIÓN TÉCNICA AVANZADA

### 1. Database Schema (Postgres)

```sql
-- Leads
CREATE TABLE leads (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(20),
  model_interest VARCHAR(100),
  budget VARCHAR(50),
  purchase_timeline VARCHAR(50),
  credit_type VARCHAR(50),
  state VARCHAR(100),
  message TEXT,
  source VARCHAR(50),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Appointments
CREATE TABLE appointments (
  id SERIAL PRIMARY KEY,
  lead_id INTEGER REFERENCES leads(id),
  date DATE NOT NULL,
  time TIME NOT NULL,
  model VARCHAR(100),
  status VARCHAR(50) DEFAULT 'pending',
  notes TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Analytics Events
CREATE TABLE events (
  id SERIAL PRIMARY KEY,
  event_name VARCHAR(100) NOT NULL,
  page_url TEXT,
  user_id VARCHAR(255),
  metadata JSONB,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Newsletter
CREATE TABLE newsletter (
  id SERIAL PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  subscribed_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  active BOOLEAN DEFAULT true
);
```

### 2. API Routes Complete

```javascript
// app/api/
├── contact/route.js          # Formulario contacto
├── appointments/route.js     # Agendar cita
├── newsletter/route.js       # Suscripción newsletter
├── leads/route.js            # CRUD leads (admin)
├── analytics/route.js        # Track custom events
├── webhook/
│   ├── sanity/route.js      # Revalidación ISR
│   └── crm/route.js         # Sync con CRM externo
└── admin/
    ├── auth/[...nextauth]/route.js
    ├── dashboard/route.js
    └── reports/route.js
```

### 3. Environment Variables

```bash
# .env.local
NEXT_PUBLIC_SANITY_PROJECT_ID=
SANITY_API_TOKEN=

POSTGRES_URL=
POSTGRES_PRISMA_URL=

RESEND_API_KEY=
CONTACT_EMAIL=

GOOGLE_ANALYTICS_ID=
GOOGLE_TAG_MANAGER_ID=
META_PIXEL_ID=

NEXTAUTH_URL=
NEXTAUTH_SECRET=
ADMIN_EMAIL=
ADMIN_PASSWORD_HASH=

HUBSPOT_API_KEY=
CRISP_WEBSITE_ID=
```

---

## 🎓 CAPACITACIÓN AL CLIENTE

### Módulo 1: Sanity CMS (2 horas)
1. Login y navegación
2. Crear/editar modelo de casa
3. Subir y organizar imágenes
4. Editar textos generales (Hero, About)
5. Administrar galería
6. Publicar cambios
7. Preview antes de publicar

### Módulo 2: Admin Dashboard (1 hora)
1. Ver leads y estadísticas
2. Gestionar citas
3. Exportar reportes
4. Configurar notificaciones

### Material de Capacitación:
- ✅ Videos tutoriales (español)
- ✅ PDF manual de usuario
- ✅ FAQ documento
- ✅ Soporte técnico 30 días

---

## 📝 PROMPT COMPLETO PARA IA

### Para Fase 2 (CMS):

```
Actúa como desarrollador experto de Next.js 14 y Sanity CMS.

CONTEXTO:
Tengo un sitio inmobiliario en Next.js 14 (App Router) con TailwindCSS.
Necesito implementar Sanity CMS para que el cliente administre contenido.

OBJETIVO:
1. Configurar Sanity Studio con schemas para:
   - Modelos de casa (nombre, precio, descripción, imágenes, características)
   - Galería (imágenes categorizadas)
   - Amenidades
   - Configuración general del sitio (hero, about, contacto)

2. Integrar Sanity con Next.js usando:
   - @sanity/client para fetching
   - ISR (Incremental Static Regeneration)
   - Webhooks para revalidación automática

3. Crear componentes que consuman datos de Sanity

REQUISITOS:
- TypeScript optional (puede ser JavaScript)
- Image optimization con next/image
- Preview mode en tiempo real
- Documentación en español

ESTRUCTURA ACTUAL:
app/
  page.jsx
  layout.jsx
components/
  Hero.jsx
  ModelsGrid.jsx
  Gallery.jsx
  etc.

ENTREGABLES:
1. Sanity schema files completos
2. lib/sanity.js con client configurado
3. Componentes actualizados para usar Sanity data
4. README con instrucciones de setup
5. sanity.config.js personalizado

Genera código completo y funcional listo para implementar.
```

### Para Fase 4 (Calculadora):

```
Actúa como desarrollador experto de React y aplicaciones financieras.

CONTEXTO:
Sitio inmobiliario Next.js. Necesito calculadora de hipoteca interactiva.

OBJETIVO:
Crear componente CalculadoraHipoteca.jsx que calcule:
- Pago mensual
- Total a pagar
- Total de intereses
- Amortización (tabla)

INPUTS:
- Precio de la casa
- Enganche (% y $)
- Tasa de interés (%)
- Plazo (años)
- Seguro (opcional)

FEATURES:
- Validación en tiempo real
- Sliders + inputs numéricos
- Gráfica de amortización (Recharts)
- Responsive
- TailwindCSS styling
- Exportar PDF del cálculo

EJEMPLO DE USO:
<CalculadoraHipoteca precioBase={2500000} />

Genera código completo con:
1. Componente principal
2. Helpers de cálculo
3. Tipos/validaciones
4. Styled con Tailwind
5. Documentación de fórmulas usadas
```

### Para Fase 5 (Admin Dashboard):

```
Actúa como desarrollador fullstack experto en Next.js y dashboard admin.

CONTEXTO:
Sitio inmobiliario Next.js 14. Necesito dashboard admin protegido.

OBJETIVO:
Crear /admin con:
1. Autenticación (NextAuth.js)
2. Dashboard con KPIs
3. Lista de leads
4. Gráficas de analytics
5. Exportar reportes

STACK:
- Next.js 14 App Router
- NextAuth.js (credentials provider)
- Vercel Postgres
- Recharts para gráficas
- TailwindCSS

FEATURES:
1. Login protegido
2. Sidebar navigation
3. Dashboard principal con:
   - Leads últimos 30 días
   - Conversión rate
   - Modelos más visitados
   - Gráfica de tráfico
4. Página de leads:
   - Tabla con filtros
   - Búsqueda
   - Detalle modal
   - Exportar CSV
5. Analytics integrado con GA4

ESTRUCTURA:
app/
  admin/
    login/
    dashboard/
    leads/
    analytics/
  api/
    auth/[...nextauth]/
    admin/
      leads/
      stats/

Genera código completo y funcional para estructura base del admin.
```

---

## ⏱️ TIMELINE TOTAL

| Fase | Duración | Esfuerzo (horas) |
|------|----------|------------------|
| Fase 1: Producción Básica | 2-3 semanas | 60-80 hrs |
| Fase 2: CMS Headless | 2 semanas | 40-50 hrs |
| Fase 3: Páginas Adicionales | 1-2 semanas | 30-40 hrs |
| Fase 4: Funcionalidades Avanzadas | 2-3 semanas | 50-70 hrs |
| Fase 5: Admin Dashboard | 2 semanas | 40-50 hrs |
| **TOTAL** | **9-12 semanas** | **220-290 hrs** |

---

## 💰 ESTIMACIÓN DE COSTOS

### Desarrollo
- **Fase 1:** $2,500 - $3,500 USD
- **Fase 2:** $1,500 - $2,000 USD
- **Fase 3:** $1,000 - $1,500 USD
- **Fase 4:** $2,000 - $3,000 USD
- **Fase 5:** $1,500 - $2,000 USD

**TOTAL DESARROLLO:** $8,500 - $12,000 USD

### Servicios Mensuales
- Vercel Pro: $20/mes (opcional)
- Sanity Growth: $0-99/mes
- Resend emails: $0-20/mes
- Database: $0 (Vercel free tier suficiente inicial)

**TOTAL MENSUAL:** $0-140/mes

---

## 🎯 MÉTRICAS DE ÉXITO

### Performance
- Lighthouse Score > 95
- Time to Interactive < 1s
- Largest Contentful Paint < 1.5s

### Conversión
- 30% leads de visitantes
- 50% completación de formularios
- 20% agendamiento de citas

### Usuario
- Time on site > 3 minutos
- Bounce rate < 30%
- Pages per session > 4

---

## 🚀 PRÓXIMO PASO INMEDIATO

1. **Aprobar roadmap** con cliente
2. **Definir prioridades** de fases
3. **Setup Sanity proyecto** (día 1)
4. **Recibir assets reales** (imágenes, textos)
5. **Iniciar Fase 1**

---

**Este plan es completo, escalable y production-ready.**

Cada fase puede ejecutarse independientemente y el sitio permanece funcional durante el desarrollo.

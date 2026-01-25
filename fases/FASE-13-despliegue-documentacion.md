# FASE 13: Despliegue y Documentación

## Resumen
| Campo | Valor |
|-------|-------|
| **Fase** | 13 de 13 |
| **Nombre** | Despliegue y Documentación |
| **Objetivo** | Sitio desplegado y documentado para mantenimiento |
| **Prerequisitos** | Fase 12 completada |

---

## Instrucciones para Claude Code

> **IMPORTANTE**: Esta es la fase final. El objetivo es desplegar el sitio y crear documentación completa.

---

## TAREA 1: Configurar Proyecto para Despliegue en Vercel

### Verificar configuración de Next.js

#### Archivo: `next.config.js`

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configuración para imágenes externas si las hay
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'img.youtube.com',
      },
    ],
  },
  // Otras configuraciones según necesidad
};

module.exports = nextConfig;
```

- [ ] next.config.js configurado

---

## TAREA 2: Desplegar en Vercel

### Pasos para despliegue:

1. **Crear cuenta en Vercel** (si no existe)
   - Ir a https://vercel.com
   - Registrarse con GitHub

2. **Subir código a GitHub**
```bash
# Inicializar repositorio si no existe
git init
git add .
git commit -m "Initial commit: Portal de Inducción"

# Crear repositorio en GitHub y conectar
git remote add origin https://github.com/[usuario]/induccion-salud.git
git branch -M main
git push -u origin main
```

3. **Importar proyecto en Vercel**
   - Ir a https://vercel.com/new
   - Seleccionar el repositorio
   - Vercel detectará automáticamente que es Next.js
   - Click en "Deploy"

4. **Verificar despliegue**
   - Esperar a que termine el build
   - Visitar la URL generada
   - Probar todas las funcionalidades

### Checklist de despliegue Vercel:
- [ ] Código en GitHub
- [ ] Proyecto importado en Vercel
- [ ] Build exitoso
- [ ] Sitio accesible en URL de Vercel
- [ ] Todas las páginas funcionan
- [ ] Tema claro/oscuro funciona
- [ ] Quizzes funcionan

---

## TAREA 3: Configurar Dominio Personalizado (Opcional)

### En Vercel:
1. Ir a Settings > Domains
2. Agregar dominio personalizado
3. Configurar DNS según instrucciones

```
# Ejemplo de configuración DNS
Tipo: CNAME
Nombre: induccion (o www)
Valor: cname.vercel-dns.com
```

- [ ] Dominio personalizado configurado (si aplica)

---

## TAREA 4: Configurar Exportación Estática

### Para servidores locales sin Node.js:

#### Actualizar `next.config.js`:

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Base path si se sirve desde subdirectorio
  // basePath: '/induccion',
};

module.exports = nextConfig;
```

### Generar build estático:
```bash
npm run build
```

Esto generará una carpeta `out/` con archivos estáticos.

### Probar build estático localmente:
```bash
# Instalar servidor estático
npx serve out

# O usar Python
cd out
python -m http.server 3000
```

### Checklist de exportación estática:
- [ ] Build estático generado sin errores
- [ ] Carpeta `out/` contiene todos los archivos
- [ ] Sitio funciona desde servidor estático local
- [ ] Navegación funciona correctamente
- [ ] Imágenes cargan correctamente

---

## TAREA 5: Crear README.md

### Archivo: `README.md`

```markdown
# Portal de Inducción - Personal de Salud

Portal educativo de inducción para personal nuevo de instituciones de salud.

## Descripción

Este portal contiene material de capacitación para nuevos empleados, cubriendo:

- Seguridad de la Información
- Facturación de Servicios P&P
- Diligenciamiento de Historias Clínicas
- Vigilancia Epidemiológica

## Tecnologías

- **Next.js 14** - Framework React con App Router
- **TypeScript** - Tipado estático
- **Tailwind CSS** - Estilos
- **Framer Motion** - Animaciones
- **Lucide React** - Iconos

## Requisitos

- Node.js 18.17 o superior
- npm 9 o superior

## Instalación

```bash
# Clonar el repositorio
git clone https://github.com/[usuario]/induccion-salud.git

# Entrar al directorio
cd induccion-salud

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
```

El sitio estará disponible en `http://localhost:3000`

## Scripts Disponibles

| Comando | Descripción |
|---------|-------------|
| `npm run dev` | Inicia servidor de desarrollo |
| `npm run build` | Genera build de producción |
| `npm run start` | Inicia servidor de producción |
| `npm run lint` | Ejecuta ESLint |

## Estructura del Proyecto

```
src/
├── app/                    # Páginas (App Router)
│   ├── page.tsx           # Página de inicio
│   ├── layout.tsx         # Layout principal
│   ├── seguridad-informacion/
│   ├── facturacion-pyp/
│   ├── historias-clinicas/
│   └── vigilancia-epidemiologica/
│
├── components/
│   ├── layout/            # Header, Footer, Sidebar
│   ├── ui/                # Componentes reutilizables
│   ├── content/           # Componentes de contenido
│   └── templates/         # Plantillas de página
│
├── data/
│   └── navigation.ts      # Configuración de navegación
│
├── hooks/
│   └── useSidebarState.ts # Hook del sidebar
│
└── lib/
    └── utils.ts           # Utilidades
```

## Agregar Nuevo Contenido

### Agregar nueva subsección:

1. Crear carpeta en `src/app/[modulo]/[nueva-subseccion]/`
2. Crear archivo `page.tsx` usando `SectionTemplate`
3. Agregar entrada en `src/data/navigation.ts`

### Ejemplo:

```tsx
// src/app/mi-modulo/nueva-seccion/page.tsx
import { SectionTemplate } from '@/components/templates';

export default function NuevaSeccionPage() {
  return (
    <SectionTemplate
      title="Nueva Sección"
      description="Descripción de la sección"
      breadcrumbs={[
        { label: 'Mi Módulo', href: '/mi-modulo' },
        { label: 'Nueva Sección' },
      ]}
    >
      {/* Contenido */}
    </SectionTemplate>
  );
}
```

## Agregar Nuevo Módulo

1. Crear carpeta en `src/app/[nuevo-modulo]/`
2. Crear `page.tsx` usando `ModuleTemplate`
3. Agregar entrada completa en `navigation.ts`
4. Crear subsecciones según sea necesario

## Despliegue

### Vercel (Recomendado)

El proyecto está configurado para despliegue automático en Vercel.

### Servidor Local (Exportación Estática)

1. Configurar `next.config.js` con `output: 'export'`
2. Ejecutar `npm run build`
3. Copiar contenido de `out/` al servidor web
4. Servir como sitio estático

## Personalización

### Cambiar colores

Editar `tailwind.config.ts`:

```typescript
colors: {
  primary: {
    // Cambiar colores primarios
  }
}
```

### Cambiar logo

Reemplazar imagen en `public/images/logo.png` o modificar el componente `Header.tsx`.

### Cambiar información institucional

Editar componente `Footer.tsx` con datos de la institución.

## Soporte

Para dudas o problemas, contactar al equipo de desarrollo.

## Licencia

Uso interno - [Nombre de la Institución]
```

- [ ] README.md creado

---

## TAREA 6: Crear Guía de Mantenimiento

### Archivo: `docs/MANTENIMIENTO.md`

```bash
mkdir -p docs
```

```markdown
# Guía de Mantenimiento

## Actualizar Dependencias

```bash
# Ver dependencias desactualizadas
npm outdated

# Actualizar dependencias menores
npm update

# Actualizar dependencia específica
npm install package@latest
```

## Agregar Contenido

### Modificar texto existente

1. Localizar el archivo de la página en `src/app/`
2. Editar el contenido directamente en el componente
3. Verificar cambios con `npm run dev`
4. Commit y push para despliegue automático

### Agregar imágenes

1. Agregar imagen en `public/images/[seccion]/`
2. Usar componente Image de Next.js:

```tsx
import Image from 'next/image';

<Image
  src="/images/seccion/imagen.jpg"
  alt="Descripción"
  width={800}
  height={600}
/>
```

### Agregar video

```tsx
import { VideoEmbed } from '@/components/ui';

<VideoEmbed
  url="https://www.youtube.com/watch?v=VIDEO_ID"
  title="Título del video"
/>
```

### Modificar Quiz

Editar el array `quizQuestions` en la página correspondiente:

```tsx
const quizQuestions = [
  {
    id: 'q1',
    question: 'Pregunta aquí',
    options: [
      { id: 'a', text: 'Opción A' },
      { id: 'b', text: 'Opción B' },
      { id: 'c', text: 'Opción C' },
      { id: 'd', text: 'Opción D' },
    ],
    correctOptionId: 'b',
    explanation: 'Explicación de la respuesta correcta.',
  },
];
```

## Problemas Comunes

### El sitio no carga estilos

- Verificar que Tailwind está configurado
- Ejecutar `npm run dev` de nuevo
- Limpiar caché del navegador

### Error de build

```bash
# Limpiar caché de Next.js
rm -rf .next
npm run build
```

### Imágenes no cargan

- Verificar ruta en `public/`
- Verificar que el componente Image tiene width y height
- Para exportación estática, agregar `unoptimized: true` en config

## Contactos

- **Desarrollo**: [email del desarrollador]
- **Contenido**: [email del equipo de contenido]
- **Soporte TI**: [email de soporte]
```

- [ ] Guía de mantenimiento creada

---

## TAREA 7: Crear Documentación de Componentes

### Archivo: `docs/COMPONENTES.md`

```markdown
# Documentación de Componentes

## Componentes de Layout

### Header
Barra superior con logo, título y toggle de tema.

### Footer
Pie de página con información institucional.

### Sidebar
Menú lateral con navegación. Soporta:
- Expandir/colapsar en desktop
- Drawer en móvil
- Secciones con subsecciones

## Componentes UI

### Alert
Muestra mensajes destacados.

```tsx
<Alert variant="info" title="Título">
  Contenido del mensaje
</Alert>
```

Variantes: `info`, `warning`, `success`, `danger`, `tip`

### Accordion
Secciones colapsables.

```tsx
<Accordion
  items={[
    { id: '1', title: 'Título', content: <p>Contenido</p> }
  ]}
  allowMultiple={false}
/>
```

### Card
Contenedor con borde y sombra.

```tsx
<Card>
  <CardHeader>
    <CardTitle>Título</CardTitle>
    <CardDescription>Descripción</CardDescription>
  </CardHeader>
  <CardContent>Contenido</CardContent>
  <CardFooter>Footer</CardFooter>
</Card>
```

### Quiz
Evaluación interactiva.

```tsx
<Quiz
  title="Título del quiz"
  questions={[...]}
  passingScore={70}
/>
```

### VideoEmbed
Video de YouTube o Vimeo.

```tsx
<VideoEmbed
  url="https://youtube.com/watch?v=..."
  title="Título"
/>
```

### ImageGallery
Galería con lightbox.

```tsx
<ImageGallery
  images={[
    { src: '/image.jpg', alt: 'Descripción' }
  ]}
  columns={3}
/>
```

## Plantillas

### ModuleTemplate
Para páginas principales de módulo.

### SectionTemplate
Para subsecciones con breadcrumbs y navegación.
```

- [ ] Documentación de componentes creada

---

## TAREA 8: Verificación Final del Despliegue

### Checklist de verificación en producción:

#### Funcionalidad
- [ ] Página de inicio carga correctamente
- [ ] Navegación por sidebar funciona
- [ ] Todos los módulos accesibles
- [ ] Todas las subsecciones accesibles
- [ ] Quizzes funcionan correctamente
- [ ] Videos cargan y reproducen
- [ ] Tema claro/oscuro funciona
- [ ] Links externos funcionan

#### Rendimiento
- [ ] Tiempo de carga inicial < 3 segundos
- [ ] Sin errores en consola
- [ ] Imágenes cargan correctamente

#### Móvil
- [ ] Sitio usable en móvil
- [ ] Menú móvil funciona
- [ ] Contenido legible sin zoom

---

## TAREA 9: Entrega Final

### Documentos a entregar:

1. **URL del sitio en producción**
   - URL de Vercel: https://[proyecto].vercel.app
   - URL de dominio personalizado (si aplica)

2. **Repositorio de código**
   - URL de GitHub
   - Acceso para el equipo de mantenimiento

3. **Documentación**
   - README.md
   - docs/MANTENIMIENTO.md
   - docs/COMPONENTES.md

4. **Build estático** (si se requiere para servidor local)
   - Carpeta `out/` comprimida
   - Instrucciones de despliegue

### Checklist de entrega:
- [ ] URL de producción funcionando
- [ ] Código en repositorio
- [ ] Documentación completa
- [ ] Accesos compartidos con el equipo
- [ ] Capacitación básica al equipo de contenido (opcional)

---

## Entregable de la Fase 13

✅ Despliegue en Vercel:
  - Proyecto conectado con GitHub
  - Build automático configurado
  - Sitio accesible públicamente

✅ Exportación estática (opcional):
  - Configuración para output estático
  - Build generado y probado
  - Documentación de despliegue local

✅ Documentación completa:
  - README.md con instrucciones de instalación
  - Guía de mantenimiento
  - Documentación de componentes

✅ Entrega final:
  - URLs de producción
  - Acceso al repositorio
  - Documentación entregada

---

## 🎉 ¡Proyecto Completado!

El Portal de Inducción para Personal de Salud está completo y desplegado.

### Resumen del proyecto:

| Aspecto | Detalle |
|---------|---------|
| **Módulos** | 4 (Seguridad, Facturación, HC, Vigilancia) |
| **Subsecciones** | 11 páginas de contenido |
| **Componentes** | 15+ componentes reutilizables |
| **Evaluaciones** | Quiz en cada módulo |
| **Características** | Responsive, tema claro/oscuro, accesible |

### Próximos pasos sugeridos:

1. **Poblar con contenido real** de la institución
2. **Agregar imágenes** institucionales
3. **Personalizar** colores y logo
4. **Capacitar** al equipo de contenido
5. **Monitorear** uso y feedback de usuarios

---

*Documento generado para el proyecto Portal de Inducción - Personal de Salud*

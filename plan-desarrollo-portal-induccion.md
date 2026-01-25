# Plan de Desarrollo: Portal de Inducción para Personal de Salud

## Información del Proyecto

| Campo | Detalle |
|-------|---------|
| **Nombre** | Portal de Inducción - Personal de Salud |
| **Tipo** | Aplicación Web Educativa |
| **Audiencia** | Personal nuevo de instituciones de salud |
| **Idioma** | Español |
| **Autenticación** | No requerida |

---

## Stack Tecnológico

| Tecnología | Propósito |
|------------|-----------|
| **Next.js 14 (App Router)** | Framework principal, permite exportación estática para servidor local |
| **TypeScript** | Tipado estático para mayor robustez |
| **Tailwind CSS** | Estilos y modo oscuro/claro |
| **Lucide React** | Iconos consistentes y ligeros |
| **Framer Motion** | Animaciones suaves para el sidebar y acordeones |
| **next-themes** | Gestión simple de tema claro/oscuro |
| **MDX** (opcional) | Para escribir contenido en Markdown con componentes React |

### Opciones de Despliegue
- **Vercel** - Despliegue principal recomendado
- **Netlify** - Alternativa en la nube
- **Servidor Local** - Mediante exportación estática (`next export`)

---

## Estructura de Contenido

### Secciones y Subsecciones

```
📁 Portal de Inducción
│
├── 🏠 Inicio (Bienvenida)
│
├── 🔒 Seguridad de la Información
│   └── Manejo Correcto de Equipos de Cómputo
│
├── 💰 Facturación de Servicios de Promoción y Prevención
│   ├── Planificación Familiar
│   ├── Ruta Materno Perinatal
│   ├── Ciclos de Vida
│   ├── Vacunación
│   └── Higiene Oral
│
├── 📄 Correcto Diligenciamiento de Historias Clínicas
│   ├── Planificación Familiar
│   ├── Ruta Materno Perinatal
│   └── Ciclos de Vida
│
└── 🦠 Vigilancia Epidemiológica
    ├── Conceptos Generales
    └── Eventos Clave
```

---

## Estructura de Carpetas del Proyecto

```
induccion-salud/
├── public/
│   ├── images/
│   │   ├── logo.png
│   │   └── [imágenes por sección]/
│   └── favicon.ico
│
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── globals.css
│   │   │
│   │   ├── seguridad-informacion/
│   │   │   ├── page.tsx
│   │   │   └── manejo-equipos/
│   │   │       └── page.tsx
│   │   │
│   │   ├── facturacion-pyp/
│   │   │   ├── page.tsx
│   │   │   ├── planificacion-familiar/
│   │   │   │   └── page.tsx
│   │   │   ├── ruta-materno-perinatal/
│   │   │   │   └── page.tsx
│   │   │   ├── ciclos-vida/
│   │   │   │   └── page.tsx
│   │   │   ├── vacunacion/
│   │   │   │   └── page.tsx
│   │   │   └── higiene-oral/
│   │   │       └── page.tsx
│   │   │
│   │   ├── historias-clinicas/
│   │   │   ├── page.tsx
│   │   │   ├── planificacion-familiar/
│   │   │   │   └── page.tsx
│   │   │   ├── ruta-materno-perinatal/
│   │   │   │   └── page.tsx
│   │   │   └── ciclos-vida/
│   │   │       └── page.tsx
│   │   │
│   │   └── vigilancia-epidemiologica/
│   │       ├── page.tsx
│   │       ├── conceptos-generales/
│   │       │   └── page.tsx
│   │       └── eventos-clave/
│   │           └── page.tsx
│   │
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── Sidebar.tsx
│   │   │   └── ThemeToggle.tsx
│   │   │
│   │   ├── ui/
│   │   │   ├── Accordion.tsx
│   │   │   ├── Card.tsx
│   │   │   ├── ExternalLink.tsx
│   │   │   ├── ImageGallery.tsx
│   │   │   ├── VideoEmbed.tsx
│   │   │   ├── Quiz.tsx
│   │   │   ├── Alert.tsx
│   │   │   └── ProgressIndicator.tsx
│   │   │
│   │   └── content/
│   │       ├── SectionIntro.tsx
│   │       └── ContentBlock.tsx
│   │
│   ├── data/
│   │   └── navigation.ts
│   │
│   ├── hooks/
│   │   └── useSidebarState.ts
│   │
│   └── lib/
│       └── utils.ts
│
├── tailwind.config.ts
├── next.config.js
├── package.json
└── README.md
```

---

## Fases de Desarrollo

### Resumen de Fases

| Fase | Nombre | Duración | Días Acumulados |
|------|--------|----------|-----------------|
| 1 | Fundamentos del Proyecto | 1 día | 1 |
| 2 | Header y Footer | 1 día | 2 |
| 3 | Sidebar Colapsable | 1 día | 3 |
| 4 | Sistema de Diseño y Componentes UI | 1 día | 4 |
| 5 | Componentes Interactivos | 1 día | 5 |
| 6 | Página de Inicio y Plantillas | 1 día | 6 |
| 7 | Contenido: Seguridad de la Información | 1 día | 7 |
| 8-9 | Contenido: Facturación P&P | 2 días | 9 |
| 10 | Contenido: Historias Clínicas | 1 día | 10 |
| 11 | Contenido: Vigilancia Epidemiológica | 1 día | 11 |
| 12 | Responsive, Accesibilidad y Pulido | 1 día | 12 |
| 13 | Despliegue y Documentación | 1 día | 13 |

**Duración total estimada: 13 días**

---

### FASE 1: Fundamentos del Proyecto
**Duración:** 1 día

#### Objetivo
Proyecto funcional con layout básico y navegación configurada.

#### Tareas
- [ ] Inicializar proyecto Next.js 14 con TypeScript y Tailwind
- [ ] Configurar estructura de carpetas según especificación
- [ ] Crear archivo de navegación (`navigation.ts`) con estructura completa del menú
- [ ] Implementar `layout.tsx` con estructura básica
- [ ] Crear página de inicio con mensaje de bienvenida placeholder
- [ ] Verificar que el proyecto corre correctamente en localhost

#### Entregable
Proyecto corriendo en localhost con navegación básica entre rutas.

#### Comandos de Inicio
```bash
npx create-next-app@latest induccion-salud --typescript --tailwind --app
cd induccion-salud
npm install lucide-react framer-motion next-themes
npm run dev
```

---

### FASE 2: Header y Footer
**Duración:** 1 día

#### Objetivo
Header y Footer funcionales y estilizados con soporte para tema claro/oscuro.

#### Tareas
- [ ] Crear componente `Header.tsx`:
  - Logo de la institución (lado izquierdo)
  - Título del portal
  - Botón toggle tema oscuro/claro (lado derecho)
  - Altura compacta (~60-70px)
- [ ] Crear componente `Footer.tsx`:
  - Información de la institución
  - Año actual dinámico
  - Links de contacto (opcional)
- [ ] Crear componente `ThemeToggle.tsx`
- [ ] Instalar y configurar `next-themes`
- [ ] Integrar componentes en `layout.tsx`

#### Entregable
Header y Footer responsivos con toggle de tema funcional.

---

### FASE 3: Sidebar Colapsable
**Duración:** 1 día

#### Objetivo
Menú lateral completamente funcional con animaciones.

#### Tareas
- [ ] Crear componente `Sidebar.tsx` con:
  - Estado expandido/colapsado
  - Animación suave con Framer Motion
  - Secciones expandibles (acordeón para subsecciones)
  - Iconos para cada sección principal (Lucide React)
  - Indicador visual de página activa
- [ ] Crear hook `useSidebarState.ts`
- [ ] Implementar persistencia del estado en localStorage
- [ ] Versión móvil: drawer con botón hamburguesa
- [ ] Botón para colapsar/expandir sidebar

#### Entregable
Sidebar funcional en desktop y móvil con navegación completa.

---

### FASE 4: Sistema de Diseño y Componentes UI Base
**Duración:** 1 día

#### Objetivo
Biblioteca de componentes reutilizables con estilos consistentes.

#### Tareas
- [ ] Definir paleta de colores en `tailwind.config.ts`:
  - Colores primarios y secundarios
  - Variantes para modo claro y oscuro
- [ ] Crear componente `Card.tsx` - contenedor de contenido
- [ ] Crear componente `Alert.tsx` - notas importantes, advertencias, tips
- [ ] Crear componente `ExternalLink.tsx` - links externos con icono indicador
- [ ] Crear componente `SectionIntro.tsx` - encabezado de secciones
- [ ] Definir tipografía y espaciados en estilos globales
- [ ] Documentar uso de componentes

#### Entregable
Componentes base documentados y listos para usar.

#### Variantes de Alert
- `info` - Información general (azul)
- `warning` - Advertencia (amarillo)
- `success` - Éxito/Completado (verde)
- `danger` - Importante/Crítico (rojo)
- `tip` - Consejo/Sugerencia (morado)

---

### FASE 5: Componentes de Contenido Interactivo
**Duración:** 1 día

#### Objetivo
Componentes para contenido dinámico e interactivo.

#### Tareas
- [ ] Crear componente `Accordion.tsx`:
  - Múltiples items colapsables
  - Animación suave de apertura/cierre
  - Opción de solo uno abierto a la vez
- [ ] Crear componente `VideoEmbed.tsx`:
  - Soporte para YouTube y Vimeo
  - Wrapper responsivo (16:9)
  - Lazy loading
- [ ] Crear componente `ImageGallery.tsx`:
  - Grid de imágenes
  - Lightbox al hacer clic
  - Navegación entre imágenes
- [ ] Crear componente `Quiz.tsx`:
  - Preguntas de opción múltiple
  - Feedback inmediato (correcto/incorrecto)
  - Puntuación final
  - Opción de reintentar

#### Entregable
Componentes interactivos probados y funcionales.

---

### FASE 6: Página de Inicio y Plantillas de Contenido
**Duración:** 1 día

#### Objetivo
Homepage atractiva y plantilla base reutilizable para secciones.

#### Tareas
- [ ] Diseñar e implementar página de inicio:
  - Mensaje de bienvenida al personal nuevo
  - Tarjetas de presentación de cada módulo (4 tarjetas)
  - Descripción breve de cada módulo
  - Iconos representativos
  - Llamada a la acción para comenzar
- [ ] Crear plantilla de página de sección:
  - Breadcrumbs de navegación
  - Título y descripción de la sección
  - Área de contenido flexible
  - Navegación anterior/siguiente entre subsecciones
- [ ] Crear componente `ContentBlock.tsx` para estructurar contenido

#### Entregable
Homepage funcional y plantilla lista para poblar contenido.

---

### FASE 7: Contenido - Seguridad de la Información
**Duración:** 1 día

#### Objetivo
Primera sección completamente poblada con contenido real.

#### Tareas
- [ ] Página principal de la sección (`/seguridad-informacion`):
  - Introducción al tema
  - Importancia de la seguridad de la información
  - Vista previa de subsecciones
- [ ] Subsección: Manejo Correcto de Equipos de Cómputo:
  - Contenido educativo completo
  - Imágenes ilustrativas (o placeholders)
  - Enlaces externos relevantes
  - Preguntas frecuentes (Accordion)
- [ ] Quiz de evaluación (si aplica)
- [ ] Revisar navegación y breadcrumbs

#### Entregable
Sección de Seguridad de la Información completa y navegable.

---

### FASE 8-9: Contenido - Facturación P&P
**Duración:** 2 días

#### Objetivo
Segunda sección con todas sus subsecciones pobladas.

#### Día 8 - Tareas
- [ ] Página principal de Facturación P&P
- [ ] Subsección: Planificación Familiar
- [ ] Subsección: Ruta Materno Perinatal
- [ ] Subsección: Ciclos de Vida

#### Día 9 - Tareas
- [ ] Subsección: Vacunación
- [ ] Subsección: Higiene Oral
- [ ] Quiz de evaluación de la sección
- [ ] Revisión general de la sección

#### Contenido por Subsección
Cada subsección debe incluir:
- Texto educativo estructurado
- Imágenes relevantes
- Enlaces externos
- Preguntas frecuentes (si aplica)

#### Entregable
Sección de Facturación P&P completa con 5 subsecciones.

---

### FASE 10: Contenido - Historias Clínicas
**Duración:** 1 día

#### Objetivo
Tercera sección completamente poblada.

#### Tareas
- [ ] Página principal de Historias Clínicas
- [ ] Subsección: Planificación Familiar
- [ ] Subsección: Ruta Materno Perinatal
- [ ] Subsección: Ciclos de Vida
- [ ] Quiz de evaluación (si aplica)
- [ ] Revisar consistencia con otras secciones

#### Entregable
Sección de Historias Clínicas completa con 3 subsecciones.

---

### FASE 11: Contenido - Vigilancia Epidemiológica
**Duración:** 1 día

#### Objetivo
Cuarta y última sección de contenido poblada.

#### Tareas
- [ ] Página principal de Vigilancia Epidemiológica
- [ ] Subsección: Conceptos Generales
- [ ] Subsección: Eventos Clave
- [ ] Quiz de evaluación (si aplica)
- [ ] Revisar navegación completa del sitio

#### Entregable
Sección de Vigilancia Epidemiológica completa con 2 subsecciones.

---

### FASE 12: Responsive, Accesibilidad y Pulido
**Duración:** 1 día

#### Objetivo
Sitio pulido, responsivo y accesible.

#### Tareas de Responsive
- [ ] Probar en móvil (320px - 480px)
- [ ] Probar en tablet (768px - 1024px)
- [ ] Probar en desktop (1024px+)
- [ ] Ajustar breakpoints problemáticos
- [ ] Verificar sidebar en todas las resoluciones

#### Tareas de Accesibilidad
- [ ] Verificar contraste de colores (WCAG AA)
- [ ] Navegación completa por teclado
- [ ] Atributos `alt` en todas las imágenes
- [ ] Etiquetas ARIA donde sea necesario
- [ ] Focus visible en elementos interactivos

#### Tareas de Optimización
- [ ] Optimizar imágenes (formatos, tamaños)
- [ ] Verificar tiempos de carga
- [ ] Lazy loading de imágenes y videos

#### Tareas de QA
- [ ] Prueba de navegación completa
- [ ] Verificar todos los enlaces externos
- [ ] Probar quizzes
- [ ] Corrección de bugs encontrados

#### Entregable
Sitio listo para producción.

---

### FASE 13: Despliegue y Documentación
**Duración:** 1 día

#### Objetivo
Sitio desplegado y documentado para mantenimiento.

#### Tareas de Despliegue
- [ ] Configurar proyecto en Vercel:
  - Conectar repositorio
  - Configurar variables de entorno (si las hay)
  - Verificar build exitoso
- [ ] Probar sitio en producción
- [ ] Configurar dominio personalizado (si aplica)

#### Tareas de Exportación Estática
- [ ] Configurar `next.config.js` para exportación estática
- [ ] Ejecutar `npm run build` y `next export`
- [ ] Probar build estático en servidor local
- [ ] Documentar proceso de despliegue en servidor local

#### Tareas de Documentación
- [ ] Escribir README.md completo:
  - Descripción del proyecto
  - Requisitos previos
  - Instalación local
  - Estructura del proyecto
  - Cómo agregar nuevo contenido
  - Cómo agregar nuevas secciones
  - Comandos disponibles
  - Proceso de despliegue
- [ ] Documentar componentes principales
- [ ] Crear guía de mantenimiento

#### Entregable
Sitio desplegado en producción y documentación completa.

---

## Wireframe Conceptual

```
┌─────────────────────────────────────────────────────────────────────┐
│  [Logo]  Portal de Inducción - IPS                    [🌙/☀️]      │
│                                                         Header      │
├────────────────────┬────────────────────────────────────────────────┤
│                    │                                                │
│  ☰ Menú            │    Inicio > Sección > Subsección              │
│                    │                                                │
│  🏠 Inicio         │    ┌────────────────────────────────────────┐  │
│                    │    │                                        │  │
│  🔒 Seguridad      │    │         TÍTULO DE LA SECCIÓN           │  │
│    └ Equipos       │    │                                        │  │
│                    │    │    Descripción introductoria...        │  │
│  💰 Facturación    │    │                                        │  │
│    ├ Planif.       │    │    ┌─────────┐  ┌─────────┐           │  │
│    ├ Materno       │    │    │ Imagen  │  │ Imagen  │           │  │
│    ├ Ciclos        │    │    └─────────┘  └─────────┘           │  │
│    ├ Vacunas       │    │                                        │  │
│    └ Higiene       │    │    Contenido educativo en prosa...     │  │
│                    │    │                                        │  │
│  📄 Historias      │    │    ▶ Pregunta Frecuente 1              │  │
│    ├ Planif.       │    │    ▶ Pregunta Frecuente 2              │  │
│    ├ Materno       │    │                                        │  │
│    └ Ciclos        │    │    🔗 Enlace Externo Relevante         │  │
│                    │    │                                        │  │
│  🦠 Vigilancia     │    │    ┌────────────────────────────────┐  │  │
│    ├ Conceptos     │    │    │      Video Embebido            │  │  │
│    └ Eventos       │    │    └────────────────────────────────┘  │  │
│                    │    │                                        │  │
│                    │    └────────────────────────────────────────┘  │
│                    │                                                │
│  [« Colapsar]      │         [← Anterior]    [Siguiente →]         │
│                    │                                                │
├────────────────────┴────────────────────────────────────────────────┤
│            © 2025 [Nombre Institución] - Todos los derechos        │
│                              Footer                                 │
└─────────────────────────────────────────────────────────────────────┘
```

---

## Características Principales

### Funcionalidades Core
- ✅ Navegación por menú lateral colapsable
- ✅ Modo claro y oscuro
- ✅ Diseño responsivo (móvil, tablet, desktop)
- ✅ Sin autenticación requerida

### Tipos de Contenido Soportados
- ✅ Texto educativo
- ✅ Imágenes y galerías
- ✅ Videos embebidos (YouTube/Vimeo)
- ✅ Enlaces externos
- ✅ Acordeones para FAQ
- ✅ Evaluaciones/Quizzes

### Características Técnicas
- ✅ Exportación estática para servidor local
- ✅ Despliegue en Vercel/Netlify
- ✅ Componentes reutilizables
- ✅ Código mantenible y documentado

---

## Notas Adicionales

### Sobre las Imágenes
- Se recomienda usar imágenes en formato WebP para mejor rendimiento
- Dimensiones sugeridas: máximo 1200px de ancho
- Incluir siempre texto alternativo (alt) para accesibilidad

### Sobre los Videos
- Preferir enlaces de YouTube o Vimeo
- Los videos se cargarán de forma lazy para mejor rendimiento

### Sobre los Quizzes
- Los resultados se muestran inmediatamente
- No se almacenan en base de datos (sin tracking)
- El usuario puede reintentar las veces que quiera

### Escalabilidad
- La estructura permite agregar nuevas secciones fácilmente
- Solo es necesario:
  1. Crear la carpeta en `/app`
  2. Agregar la entrada en `navigation.ts`
  3. Crear los componentes de página

---

## Recursos Útiles

- [Documentación Next.js 14](https://nextjs.org/docs)
- [Documentación Tailwind CSS](https://tailwindcss.com/docs)
- [Iconos Lucide](https://lucide.dev/icons)
- [Framer Motion](https://www.framer.com/motion/)
- [next-themes](https://github.com/pacocoursey/next-themes)

---

## Control de Versiones

| Versión | Fecha | Cambios |
|---------|-------|---------|
| 1.0 | [Fecha actual] | Plan inicial |

---

*Documento generado para el proyecto de Portal de Inducción - Personal de Salud*

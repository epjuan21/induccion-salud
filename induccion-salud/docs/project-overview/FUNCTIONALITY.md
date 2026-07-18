# Funcionalidad

## 1. Resumen general

El **Portal de Inducción para Personal de Salud** es una aplicación web educativa cuyo objetivo es facilitar el proceso de incorporación del personal nuevo en una institución de salud. Presenta contenido formativo organizado por módulos temáticos, con material explicativo, recursos adicionales (videos, imágenes, enlaces) y evaluaciones (quizzes) para verificar la comprensión.

Según la página de inicio, el portal ofrece **4 módulos principales**, **11 lecciones** y una duración estimada de **8 horas**, con certificación incluida.

## 2. Módulos / features principales

| Módulo | Ruta base | Descripción |
|--------|-----------|-------------|
| **Inicio** | `/` | Página de bienvenida con estadísticas, alerta informativa y tarjetas de acceso a los módulos. |
| **Seguridad de la Información** | `/seguridad-informacion` | Manejo seguro de la información y equipos de cómputo institucionales. |
| **Facturación de Servicios P&P** | `/facturacion-pyp` | Procesos de facturación de servicios de promoción y prevención en salud. |
| **Diligenciamiento de Historias Clínicas** | `/historias-clinicas` | Guías y normativas para el correcto diligenciamiento de historias clínicas. |
| **Vigilancia Epidemiológica** | `/vigilancia-epidemiologica` | Conceptos fundamentales y procedimientos de vigilancia epidemiológica. |
| **Capacitaciones** | `/capacitaciones` | Capacitaciones en sistemas y procesos institucionales (afiliaciones, hospital, IHCE, MIPRES, Xenco). |

### Componentes funcionales destacados

- **Quiz / Evaluaciones** ([Quiz.tsx](../../src/components/ui/Quiz.tsx)): evaluaciones interactivas con preguntas de opción múltiple, puntaje de aprobación configurable (por defecto 70%), retroalimentación y opción de reintento.
- **Acordeones** (`Accordion`): secciones de preguntas frecuentes desplegables.
- **Navegación entre páginas** (`PageNavigation`): enlaces a la sección anterior y siguiente.
- **Breadcrumbs**: ruta de migas para ubicación contextual.
- **Recursos multimedia**: `VideoEmbed` (videos incrustados), `ImageGallery` (galerías de imágenes).
- **Tema claro/oscuro**: alternancia de tema con detección de la preferencia del sistema.
- **Sidebar colapsable**: navegación lateral con estado persistente y versión móvil tipo drawer.

## 3. Roles de usuario y permisos

> *No se encontró evidencia de esto en el proyecto.* No existe sistema de autenticación, autorización ni roles de usuario. El portal es de acceso libre y todo el contenido es público dentro de la aplicación.

## 4. Integraciones con servicios externos

> *No se encontró evidencia de integraciones con servicios externos (APIs, pasarelas de pago, proveedores de autenticación) en el proyecto.* El contenido es estático y autocontenido. El único elemento externo es la carga de la fuente **Geist/Inter** mediante `next/font/google`.

## 5. Rutas / endpoints principales agrupados por módulo

La aplicación es un sitio renderizado con Next.js; no expone endpoints de API. Las rutas de navegación se definen en [src/data/navigation.ts](../../src/data/navigation.ts):

### Inicio
- `/` — Página principal

### Seguridad de la Información
- `/seguridad-informacion` — Índice del módulo
- `/seguridad-informacion/manejo-equipos` — Manejo Correcto de Equipos de Cómputo

### Facturación de Servicios P&P
- `/facturacion-pyp` — Índice del módulo
- `/facturacion-pyp/planificacion-familiar` — Planificación Familiar
- `/facturacion-pyp/ruta-materno-perinatal` — Ruta Materno Perinatal
- `/facturacion-pyp/ciclos-vida` — Ciclos de Vida
- `/facturacion-pyp/vacunacion` — Vacunación
- `/facturacion-pyp/higiene-oral` — Higiene Oral

### Diligenciamiento de Historias Clínicas
- `/historias-clinicas` — Índice del módulo
- `/historias-clinicas/planificacion-familiar` — Planificación Familiar
- `/historias-clinicas/ruta-materno-perinatal` — Ruta Materno Perinatal
- `/historias-clinicas/ciclos-vida` — Ciclos de Vida

### Vigilancia Epidemiológica
- `/vigilancia-epidemiologica` — Índice del módulo
- `/vigilancia-epidemiologica/conceptos-generales` — Conceptos Generales
- `/vigilancia-epidemiologica/eventos-clave` — Eventos Clave

### Capacitaciones
- `/capacitaciones` — Índice del módulo
- `/capacitaciones/aps` — Afiliaciones en Línea
- `/capacitaciones/hospital` — Hospital
- `/capacitaciones/ihce` — IHCE
- `/capacitaciones/mipres` — MIPRES
- `/capacitaciones/xenco` — Xenco

### Otras
- `/demo` — Página de demostración de componentes de UI

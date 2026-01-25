# FASE 1: Fundamentos del Proyecto

## Resumen
| Campo | Valor |
|-------|-------|
| **Fase** | 1 de 13 |
| **Nombre** | Fundamentos del Proyecto |
| **Objetivo** | Proyecto funcional con layout básico y navegación configurada |
| **Prerequisitos** | Node.js 18+, npm o pnpm |

---

## Instrucciones para Claude Code

> **IMPORTANTE**: Ejecuta cada tarea en orden. Marca cada checkbox cuando completes la tarea.

---

## TAREA 1: Inicializar Proyecto Next.js

### Comando de Inicialización
```bash
npx create-next-app@latest induccion-salud --typescript --tailwind --eslint --app --src-dir --import-alias "@/*"
```

### Opciones a seleccionar durante la instalación:
- TypeScript: **Yes**
- ESLint: **Yes**
- Tailwind CSS: **Yes**
- `src/` directory: **Yes**
- App Router: **Yes**
- Import alias: **@/***

### Verificación
```bash
cd induccion-salud
npm run dev
```
El proyecto debe correr en `http://localhost:3000`

- [ ] Proyecto inicializado correctamente

---

## TAREA 2: Instalar Dependencias Adicionales

```bash
npm install lucide-react framer-motion next-themes
```

### Dependencias:
| Paquete | Propósito |
|---------|-----------|
| `lucide-react` | Iconos consistentes y ligeros |
| `framer-motion` | Animaciones suaves |
| `next-themes` | Gestión de tema claro/oscuro |

- [ ] Dependencias instaladas

---

## TAREA 3: Crear Estructura de Carpetas

Crear la siguiente estructura dentro de `src/`:

```bash
# Desde la raíz del proyecto (induccion-salud)
mkdir -p src/components/layout
mkdir -p src/components/ui
mkdir -p src/components/content
mkdir -p src/data
mkdir -p src/hooks
mkdir -p src/lib
mkdir -p public/images
```

### Estructura esperada:
```
src/
├── app/                    # (ya existe)
├── components/
│   ├── layout/            # Header, Footer, Sidebar, ThemeToggle
│   ├── ui/                # Accordion, Card, Alert, etc.
│   └── content/           # SectionIntro, ContentBlock
├── data/                  # navigation.ts
├── hooks/                 # useSidebarState.ts
└── lib/                   # utils.ts
```

- [ ] Estructura de carpetas creada

---

## TAREA 4: Crear Archivo de Navegación

### Archivo: `src/data/navigation.ts`

```typescript
import {
  Home,
  Shield,
  DollarSign,
  FileText,
  Bug,
  type LucideIcon
} from 'lucide-react';

export interface NavItem {
  title: string;
  href: string;
  icon?: LucideIcon;
  children?: NavItem[];
}

export const navigation: NavItem[] = [
  {
    title: 'Inicio',
    href: '/',
    icon: Home,
  },
  {
    title: 'Seguridad de la Información',
    href: '/seguridad-informacion',
    icon: Shield,
    children: [
      {
        title: 'Manejo Correcto de Equipos de Cómputo',
        href: '/seguridad-informacion/manejo-equipos',
      },
    ],
  },
  {
    title: 'Facturación de Servicios P&P',
    href: '/facturacion-pyp',
    icon: DollarSign,
    children: [
      {
        title: 'Planificación Familiar',
        href: '/facturacion-pyp/planificacion-familiar',
      },
      {
        title: 'Ruta Materno Perinatal',
        href: '/facturacion-pyp/ruta-materno-perinatal',
      },
      {
        title: 'Ciclos de Vida',
        href: '/facturacion-pyp/ciclos-vida',
      },
      {
        title: 'Vacunación',
        href: '/facturacion-pyp/vacunacion',
      },
      {
        title: 'Higiene Oral',
        href: '/facturacion-pyp/higiene-oral',
      },
    ],
  },
  {
    title: 'Diligenciamiento de Historias Clínicas',
    href: '/historias-clinicas',
    icon: FileText,
    children: [
      {
        title: 'Planificación Familiar',
        href: '/historias-clinicas/planificacion-familiar',
      },
      {
        title: 'Ruta Materno Perinatal',
        href: '/historias-clinicas/ruta-materno-perinatal',
      },
      {
        title: 'Ciclos de Vida',
        href: '/historias-clinicas/ciclos-vida',
      },
    ],
  },
  {
    title: 'Vigilancia Epidemiológica',
    href: '/vigilancia-epidemiologica',
    icon: Bug,
    children: [
      {
        title: 'Conceptos Generales',
        href: '/vigilancia-epidemiologica/conceptos-generales',
      },
      {
        title: 'Eventos Clave',
        href: '/vigilancia-epidemiologica/eventos-clave',
      },
    ],
  },
];
```

- [ ] Archivo de navegación creado

---

## TAREA 5: Crear Archivo de Utilidades

### Archivo: `src/lib/utils.ts`

```typescript
import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

### Instalar dependencias adicionales para utils:
```bash
npm install clsx tailwind-merge
```

- [ ] Archivo de utilidades creado
- [ ] Dependencias clsx y tailwind-merge instaladas

---

## TAREA 6: Crear Estructura de Rutas (App Router)

Crear las carpetas y archivos `page.tsx` para cada ruta:

```bash
# Sección: Seguridad de la Información
mkdir -p "src/app/seguridad-informacion/manejo-equipos"

# Sección: Facturación P&P
mkdir -p "src/app/facturacion-pyp/planificacion-familiar"
mkdir -p "src/app/facturacion-pyp/ruta-materno-perinatal"
mkdir -p "src/app/facturacion-pyp/ciclos-vida"
mkdir -p "src/app/facturacion-pyp/vacunacion"
mkdir -p "src/app/facturacion-pyp/higiene-oral"

# Sección: Historias Clínicas
mkdir -p "src/app/historias-clinicas/planificacion-familiar"
mkdir -p "src/app/historias-clinicas/ruta-materno-perinatal"
mkdir -p "src/app/historias-clinicas/ciclos-vida"

# Sección: Vigilancia Epidemiológica
mkdir -p "src/app/vigilancia-epidemiologica/conceptos-generales"
mkdir -p "src/app/vigilancia-epidemiologica/eventos-clave"
```

- [ ] Estructura de rutas creada

---

## TAREA 7: Crear Páginas Placeholder

### Template para cada página placeholder:

**Archivo: `src/app/seguridad-informacion/page.tsx`**
```tsx
export default function SeguridadInformacionPage() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">Seguridad de la Información</h1>
      <p className="text-gray-600 dark:text-gray-400">
        Contenido en construcción...
      </p>
    </div>
  );
}
```

### Crear páginas para:
1. `src/app/seguridad-informacion/page.tsx`
2. `src/app/seguridad-informacion/manejo-equipos/page.tsx`
3. `src/app/facturacion-pyp/page.tsx`
4. `src/app/facturacion-pyp/planificacion-familiar/page.tsx`
5. `src/app/facturacion-pyp/ruta-materno-perinatal/page.tsx`
6. `src/app/facturacion-pyp/ciclos-vida/page.tsx`
7. `src/app/facturacion-pyp/vacunacion/page.tsx`
8. `src/app/facturacion-pyp/higiene-oral/page.tsx`
9. `src/app/historias-clinicas/page.tsx`
10. `src/app/historias-clinicas/planificacion-familiar/page.tsx`
11. `src/app/historias-clinicas/ruta-materno-perinatal/page.tsx`
12. `src/app/historias-clinicas/ciclos-vida/page.tsx`
13. `src/app/vigilancia-epidemiologica/page.tsx`
14. `src/app/vigilancia-epidemiologica/conceptos-generales/page.tsx`
15. `src/app/vigilancia-epidemiologica/eventos-clave/page.tsx`

- [ ] Todas las páginas placeholder creadas

---

## TAREA 8: Actualizar Layout Principal

### Archivo: `src/app/layout.tsx`

```tsx
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Portal de Inducción - Personal de Salud',
  description: 'Portal educativo de inducción para personal nuevo de instituciones de salud',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={inter.className}>
        <div className="min-h-screen bg-white dark:bg-gray-900">
          {/* Header se agregará en Fase 2 */}
          <main className="flex-1">
            {children}
          </main>
          {/* Footer se agregará en Fase 2 */}
        </div>
      </body>
    </html>
  );
}
```

- [ ] Layout principal actualizado

---

## TAREA 9: Actualizar Página de Inicio

### Archivo: `src/app/page.tsx`

```tsx
export default function HomePage() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center p-8">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Portal de Inducción
        </h1>
        <h2 className="text-2xl text-gray-600 dark:text-gray-300 mb-6">
          Personal de Salud
        </h2>
        <p className="text-gray-500 dark:text-gray-400 max-w-md mx-auto">
          Bienvenido al portal de inducción. Aquí encontrarás toda la información
          necesaria para tu proceso de incorporación.
        </p>
        <div className="mt-8 p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
          <p className="text-yellow-800 dark:text-yellow-200 text-sm">
            🚧 Portal en construcción - Fase 1 completada
          </p>
        </div>
      </div>
    </div>
  );
}
```

- [ ] Página de inicio actualizada

---

## TAREA 10: Verificación Final

### Comandos de verificación:
```bash
# 1. Verificar que el proyecto compila sin errores
npm run build

# 2. Ejecutar el servidor de desarrollo
npm run dev

# 3. Verificar rutas manualmente en el navegador:
# - http://localhost:3000
# - http://localhost:3000/seguridad-informacion
# - http://localhost:3000/facturacion-pyp
# - http://localhost:3000/historias-clinicas
# - http://localhost:3000/vigilancia-epidemiologica
```

### Checklist de verificación:
- [ ] `npm run build` ejecuta sin errores
- [ ] `npm run dev` inicia el servidor correctamente
- [ ] La página de inicio carga correctamente
- [ ] Las rutas de secciones principales funcionan
- [ ] No hay errores en la consola del navegador

---

## Entregable de la Fase 1

✅ Proyecto Next.js 14 inicializado con TypeScript y Tailwind
✅ Dependencias instaladas (lucide-react, framer-motion, next-themes)
✅ Estructura de carpetas según especificación
✅ Archivo de navegación con estructura completa del menú
✅ Todas las rutas creadas con páginas placeholder
✅ Proyecto corriendo correctamente en localhost

---

## Siguiente Fase

➡️ **FASE 2**: Header y Footer - Ver archivo `FASE-02-header-footer.md`

# FASE 2: Header y Footer

## Resumen
| Campo | Valor |
|-------|-------|
| **Fase** | 2 de 13 |
| **Nombre** | Header y Footer |
| **Objetivo** | Header y Footer funcionales con soporte para tema claro/oscuro |
| **Prerequisitos** | Fase 1 completada |

---

## Instrucciones para Claude Code

> **IMPORTANTE**: Esta fase implementa los componentes de layout superiores e inferiores del portal.

---

## TAREA 1: Configurar next-themes en el Layout

### Archivo: `src/app/providers.tsx`

```tsx
'use client';

import { ThemeProvider } from 'next-themes';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      {children}
    </ThemeProvider>
  );
}
```

- [ ] Providers creado

---

## TAREA 2: Actualizar Layout para usar Providers

### Archivo: `src/app/layout.tsx`

```tsx
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Providers } from './providers';
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
        <Providers>
          <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900 transition-colors">
            {/* Header se agregará después de crearlo */}
            <main className="flex-1">
              {children}
            </main>
            {/* Footer se agregará después de crearlo */}
          </div>
        </Providers>
      </body>
    </html>
  );
}
```

- [ ] Layout actualizado con Providers

---

## TAREA 3: Crear Componente ThemeToggle

### Archivo: `src/components/layout/ThemeToggle.tsx`

```tsx
'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // Evitar hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button
        className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800"
        aria-label="Cambiar tema"
      >
        <div className="w-5 h-5" />
      </button>
    );
  }

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 transition-colors"
      aria-label={theme === 'dark' ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
    >
      {theme === 'dark' ? (
        <Sun className="w-5 h-5 text-yellow-500" />
      ) : (
        <Moon className="w-5 h-5 text-gray-700" />
      )}
    </button>
  );
}
```

- [ ] ThemeToggle creado

---

## TAREA 4: Crear Componente Header

### Archivo: `src/components/layout/Header.tsx`

```tsx
'use client';

import Link from 'next/link';
import { Menu } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';

interface HeaderProps {
  onMenuClick?: () => void;
}

export function Header({ onMenuClick }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 dark:border-gray-800 bg-white/95 dark:bg-gray-900/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-gray-900/60">
      <div className="flex h-16 items-center px-4 md:px-6">
        {/* Botón menú móvil */}
        <button
          onClick={onMenuClick}
          className="mr-4 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 lg:hidden"
          aria-label="Abrir menú"
        >
          <Menu className="h-5 w-5 text-gray-700 dark:text-gray-300" />
        </button>

        {/* Logo y Título */}
        <Link href="/" className="flex items-center gap-3">
          {/* Placeholder para logo - reemplazar con imagen real */}
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
            <span className="text-white font-bold text-lg">+</span>
          </div>
          <div className="hidden sm:block">
            <h1 className="text-lg font-semibold text-gray-900 dark:text-white">
              Portal de Inducción
            </h1>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              Personal de Salud
            </p>
          </div>
        </Link>

        {/* Espaciador */}
        <div className="flex-1" />

        {/* Acciones */}
        <div className="flex items-center gap-2">
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
```

- [ ] Header creado

---

## TAREA 5: Crear Componente Footer

### Archivo: `src/components/layout/Footer.tsx`

```tsx
import { Heart } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900/50">
      <div className="mx-auto max-w-7xl px-4 py-6 md:px-6">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          {/* Información institucional */}
          <div className="text-center md:text-left">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              © {currentYear} <span className="font-medium">Institución de Salud</span>
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">
              Portal de Inducción - Todos los derechos reservados
            </p>
          </div>

          {/* Créditos */}
          <div className="flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400">
            <span>Hecho con</span>
            <Heart className="w-4 h-4 text-red-500 fill-red-500" />
            <span>para nuestro equipo</span>
          </div>
        </div>

        {/* Links opcionales */}
        <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-800">
          <div className="flex flex-wrap justify-center gap-4 text-xs text-gray-500 dark:text-gray-400">
            <a
              href="#"
              className="hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
            >
              Contacto
            </a>
            <span>•</span>
            <a
              href="#"
              className="hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
            >
              Soporte Técnico
            </a>
            <span>•</span>
            <a
              href="#"
              className="hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
            >
              Política de Privacidad
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
```

- [ ] Footer creado

---

## TAREA 6: Crear Archivo de Exportación de Componentes

### Archivo: `src/components/layout/index.ts`

```typescript
export { Header } from './Header';
export { Footer } from './Footer';
export { ThemeToggle } from './ThemeToggle';
```

- [ ] Archivo index de exportación creado

---

## TAREA 7: Integrar Header y Footer en Layout

### Actualizar: `src/app/layout.tsx`

```tsx
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Providers } from './providers';
import { Header, Footer } from '@/components/layout';
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
        <Providers>
          <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900 transition-colors">
            <Header />
            <main className="flex-1">
              {children}
            </main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
```

- [ ] Layout actualizado con Header y Footer

---

## TAREA 8: Actualizar Estilos Globales

### Archivo: `src/app/globals.css`

Asegurar que contenga:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 222.2 84% 4.9%;
  }

  .dark {
    --background: 222.2 84% 4.9%;
    --foreground: 210 40% 98%;
  }
}

@layer base {
  * {
    @apply border-border;
  }

  body {
    @apply bg-background text-foreground;
  }
}

/* Transiciones suaves para cambio de tema */
html {
  transition: color-scheme 0.3s;
}

body {
  transition: background-color 0.3s, color 0.3s;
}

/* Scrollbar personalizado */
::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}

::-webkit-scrollbar-track {
  @apply bg-gray-100 dark:bg-gray-800;
}

::-webkit-scrollbar-thumb {
  @apply bg-gray-300 dark:bg-gray-600 rounded-full;
}

::-webkit-scrollbar-thumb:hover {
  @apply bg-gray-400 dark:bg-gray-500;
}
```

- [ ] Estilos globales actualizados

---

## TAREA 9: Verificación Final

### Comandos de verificación:
```bash
# 1. Verificar que el proyecto compila
npm run build

# 2. Ejecutar servidor de desarrollo
npm run dev
```

### Checklist de verificación visual:
- [ ] Header visible en la parte superior con altura ~64px
- [ ] Logo placeholder visible en el header
- [ ] Título "Portal de Inducción" visible (en pantallas >= sm)
- [ ] Botón de toggle de tema visible y funcional
- [ ] Footer visible en la parte inferior
- [ ] Año actual mostrado dinámicamente en el footer
- [ ] Tema oscuro funciona correctamente al hacer clic en el toggle
- [ ] Tema claro funciona correctamente al hacer clic en el toggle
- [ ] Transiciones suaves entre temas
- [ ] Sin errores en consola

### Pruebas de responsive:
- [ ] En móvil (< 640px): Solo icono de logo visible, botón hamburguesa visible
- [ ] En tablet (640px - 1024px): Logo y título visible
- [ ] En desktop (> 1024px): Todo visible correctamente

---

## Entregable de la Fase 2

✅ Componente Header funcional con:
  - Logo placeholder
  - Título del portal
  - Botón toggle de tema
  - Botón hamburguesa para móvil (preparado para Sidebar)

✅ Componente Footer funcional con:
  - Información institucional
  - Año dinámico
  - Links de contacto

✅ Sistema de temas (claro/oscuro) funcional

✅ Componentes integrados en el layout principal

---

## Siguiente Fase

➡️ **FASE 3**: Sidebar Colapsable - Ver archivo `FASE-03-sidebar.md`

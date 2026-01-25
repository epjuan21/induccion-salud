# FASE 3: Sidebar Colapsable

## Resumen
| Campo | Valor |
|-------|-------|
| **Fase** | 3 de 13 |
| **Nombre** | Sidebar Colapsable |
| **Objetivo** | Menú lateral completamente funcional con animaciones |
| **Prerequisitos** | Fase 2 completada |

---

## Instrucciones para Claude Code

> **IMPORTANTE**: Esta fase implementa la navegación lateral con animaciones usando Framer Motion.

---

## TAREA 1: Crear Hook useSidebarState

### Archivo: `src/hooks/useSidebarState.ts`

```typescript
'use client';

import { useState, useEffect, useCallback } from 'react';

interface UseSidebarStateOptions {
  defaultExpanded?: boolean;
  storageKey?: string;
}

export function useSidebarState(options: UseSidebarStateOptions = {}) {
  const {
    defaultExpanded = true,
    storageKey = 'sidebar-expanded'
  } = options;

  const [isExpanded, setIsExpanded] = useState(defaultExpanded);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [expandedSections, setExpandedSections] = useState<string[]>([]);

  // Cargar estado desde localStorage
  useEffect(() => {
    const stored = localStorage.getItem(storageKey);
    if (stored !== null) {
      setIsExpanded(stored === 'true');
    }

    const storedSections = localStorage.getItem(`${storageKey}-sections`);
    if (storedSections) {
      try {
        setExpandedSections(JSON.parse(storedSections));
      } catch {
        // Ignorar errores de parsing
      }
    }
  }, [storageKey]);

  // Guardar estado en localStorage
  useEffect(() => {
    localStorage.setItem(storageKey, String(isExpanded));
  }, [isExpanded, storageKey]);

  useEffect(() => {
    localStorage.setItem(`${storageKey}-sections`, JSON.stringify(expandedSections));
  }, [expandedSections, storageKey]);

  const toggle = useCallback(() => {
    setIsExpanded(prev => !prev);
  }, []);

  const toggleMobile = useCallback(() => {
    setIsMobileOpen(prev => !prev);
  }, []);

  const closeMobile = useCallback(() => {
    setIsMobileOpen(false);
  }, []);

  const toggleSection = useCallback((sectionHref: string) => {
    setExpandedSections(prev =>
      prev.includes(sectionHref)
        ? prev.filter(s => s !== sectionHref)
        : [...prev, sectionHref]
    );
  }, []);

  const isSectionExpanded = useCallback((sectionHref: string) => {
    return expandedSections.includes(sectionHref);
  }, [expandedSections]);

  return {
    isExpanded,
    isMobileOpen,
    toggle,
    toggleMobile,
    closeMobile,
    toggleSection,
    isSectionExpanded,
  };
}
```

- [ ] Hook useSidebarState creado

---

## TAREA 2: Crear Componente Sidebar

### Archivo: `src/components/layout/Sidebar.tsx`

```tsx
'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronLeft, ChevronRight, X } from 'lucide-react';
import { navigation, type NavItem } from '@/data/navigation';
import { cn } from '@/lib/utils';

interface SidebarProps {
  isExpanded: boolean;
  isMobileOpen: boolean;
  onToggle: () => void;
  onCloseMobile: () => void;
  onToggleSection: (href: string) => void;
  isSectionExpanded: (href: string) => boolean;
}

export function Sidebar({
  isExpanded,
  isMobileOpen,
  onToggle,
  onCloseMobile,
  onToggleSection,
  isSectionExpanded,
}: SidebarProps) {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  const renderNavItem = (item: NavItem, depth = 0) => {
    const hasChildren = item.children && item.children.length > 0;
    const expanded = isSectionExpanded(item.href);
    const active = isActive(item.href);
    const Icon = item.icon;

    return (
      <div key={item.href}>
        <div className="relative">
          {hasChildren ? (
            <button
              onClick={() => onToggleSection(item.href)}
              className={cn(
                'w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors',
                'hover:bg-gray-100 dark:hover:bg-gray-800',
                active && 'bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400',
                !active && 'text-gray-700 dark:text-gray-300'
              )}
            >
              {Icon && <Icon className="w-5 h-5 flex-shrink-0" />}
              {isExpanded && (
                <>
                  <span className="flex-1 text-left truncate">{item.title}</span>
                  <ChevronDown
                    className={cn(
                      'w-4 h-4 transition-transform',
                      expanded && 'rotate-180'
                    )}
                  />
                </>
              )}
            </button>
          ) : (
            <Link
              href={item.href}
              onClick={onCloseMobile}
              className={cn(
                'flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors',
                'hover:bg-gray-100 dark:hover:bg-gray-800',
                active && 'bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400',
                !active && 'text-gray-700 dark:text-gray-300',
                depth > 0 && 'ml-6'
              )}
            >
              {Icon && <Icon className="w-5 h-5 flex-shrink-0" />}
              {isExpanded && <span className="truncate">{item.title}</span>}
            </Link>
          )}
        </div>

        {/* Subsecciones */}
        {hasChildren && isExpanded && (
          <AnimatePresence>
            {expanded && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="overflow-hidden"
              >
                <div className="ml-4 mt-1 space-y-1 border-l-2 border-gray-200 dark:border-gray-700">
                  {item.children!.map(child => renderNavItem(child, depth + 1))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        )}
      </div>
    );
  };

  const sidebarContent = (
    <div className="h-full flex flex-col">
      {/* Header del sidebar (solo móvil) */}
      <div className="lg:hidden flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-800">
        <span className="font-semibold text-gray-900 dark:text-white">Menú</span>
        <button
          onClick={onCloseMobile}
          className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Navegación */}
      <nav className="flex-1 overflow-y-auto p-4 space-y-1">
        {navigation.map(item => renderNavItem(item))}
      </nav>

      {/* Botón colapsar (solo desktop) */}
      <div className="hidden lg:block p-4 border-t border-gray-200 dark:border-gray-800">
        <button
          onClick={onToggle}
          className="w-full flex items-center justify-center gap-2 px-3 py-2 rounded-lg text-sm text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
        >
          {isExpanded ? (
            <>
              <ChevronLeft className="w-4 h-4" />
              <span>Colapsar</span>
            </>
          ) : (
            <ChevronRight className="w-4 h-4" />
          )}
        </button>
      </div>
    </div>
  );

  return (
    <>
      {/* Sidebar Desktop */}
      <motion.aside
        initial={false}
        animate={{ width: isExpanded ? 280 : 72 }}
        transition={{ duration: 0.2 }}
        className={cn(
          'hidden lg:flex flex-col fixed left-0 top-16 bottom-0',
          'bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800',
          'z-40'
        )}
      >
        {sidebarContent}
      </motion.aside>

      {/* Overlay móvil */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onCloseMobile}
            className="lg:hidden fixed inset-0 bg-black/50 z-40"
          />
        )}
      </AnimatePresence>

      {/* Sidebar Móvil (Drawer) */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.aside
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className={cn(
              'lg:hidden fixed left-0 top-0 bottom-0 w-72',
              'bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800',
              'z-50'
            )}
          >
            {sidebarContent}
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  );
}
```

- [ ] Componente Sidebar creado

---

## TAREA 3: Actualizar Exportaciones

### Archivo: `src/components/layout/index.ts`

```typescript
export { Header } from './Header';
export { Footer } from './Footer';
export { Sidebar } from './Sidebar';
export { ThemeToggle } from './ThemeToggle';
```

- [ ] Exportaciones actualizadas

---

## TAREA 4: Crear Componente LayoutWrapper

### Archivo: `src/components/layout/LayoutWrapper.tsx`

```tsx
'use client';

import { Header } from './Header';
import { Footer } from './Footer';
import { Sidebar } from './Sidebar';
import { useSidebarState } from '@/hooks/useSidebarState';
import { cn } from '@/lib/utils';

export function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const sidebar = useSidebarState();

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900 transition-colors">
      <Header onMenuClick={sidebar.toggleMobile} />

      <div className="flex-1 flex">
        <Sidebar
          isExpanded={sidebar.isExpanded}
          isMobileOpen={sidebar.isMobileOpen}
          onToggle={sidebar.toggle}
          onCloseMobile={sidebar.closeMobile}
          onToggleSection={sidebar.toggleSection}
          isSectionExpanded={sidebar.isSectionExpanded}
        />

        {/* Contenido principal con margen para el sidebar */}
        <main
          className={cn(
            'flex-1 transition-all duration-200',
            'lg:ml-[280px]',
            !sidebar.isExpanded && 'lg:ml-[72px]'
          )}
        >
          <div className="min-h-[calc(100vh-4rem-4rem)]">
            {children}
          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
}
```

- [ ] LayoutWrapper creado

---

## TAREA 5: Actualizar Layout Principal

### Archivo: `src/app/layout.tsx`

```tsx
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Providers } from './providers';
import { LayoutWrapper } from '@/components/layout/LayoutWrapper';
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
          <LayoutWrapper>
            {children}
          </LayoutWrapper>
        </Providers>
      </body>
    </html>
  );
}
```

- [ ] Layout principal actualizado

---

## TAREA 6: Actualizar Exportaciones de Layout

### Archivo: `src/components/layout/index.ts`

```typescript
export { Header } from './Header';
export { Footer } from './Footer';
export { Sidebar } from './Sidebar';
export { ThemeToggle } from './ThemeToggle';
export { LayoutWrapper } from './LayoutWrapper';
```

- [ ] Exportaciones finales actualizadas

---

## TAREA 7: Crear Archivo de Exportación para Hooks

### Archivo: `src/hooks/index.ts`

```typescript
export { useSidebarState } from './useSidebarState';
```

- [ ] Exportaciones de hooks creadas

---

## TAREA 8: Verificación Final

### Comandos de verificación:
```bash
npm run build
npm run dev
```

### Checklist de verificación Desktop (> 1024px):
- [ ] Sidebar visible a la izquierda
- [ ] Sidebar muestra todas las secciones con iconos
- [ ] Secciones con subsecciones se expanden/colapsan al hacer clic
- [ ] Animación suave al expandir/colapsar subsecciones
- [ ] Botón "Colapsar" visible en la parte inferior
- [ ] Sidebar se colapsa a iconos al hacer clic en "Colapsar"
- [ ] Estado del sidebar persiste al recargar la página
- [ ] Indicador visual en la sección/página activa
- [ ] Links de navegación funcionan correctamente

### Checklist de verificación Móvil (< 1024px):
- [ ] Sidebar NO visible por defecto
- [ ] Botón hamburguesa visible en el Header
- [ ] Al hacer clic en hamburguesa, aparece drawer desde la izquierda
- [ ] Overlay oscuro visible detrás del drawer
- [ ] Botón X para cerrar el drawer visible
- [ ] Al hacer clic en overlay, el drawer se cierra
- [ ] Al hacer clic en un link, el drawer se cierra
- [ ] Animación suave al abrir/cerrar el drawer

### Checklist de funcionalidad:
- [ ] Navegación funciona a todas las páginas
- [ ] Secciones expandidas persisten en localStorage
- [ ] Estado colapsado persiste en localStorage
- [ ] Sin errores en consola
- [ ] Transiciones suaves en todas las animaciones

---

## Entregable de la Fase 3

✅ Componente Sidebar completamente funcional con:
  - Estado expandido/colapsado
  - Animaciones con Framer Motion
  - Secciones expandibles (acordeón)
  - Iconos para cada sección (Lucide React)
  - Indicador visual de página activa

✅ Hook useSidebarState con:
  - Persistencia en localStorage
  - Control de estado expandido/colapsado
  - Control de secciones expandidas

✅ Versión móvil:
  - Drawer deslizante
  - Overlay de fondo
  - Botón hamburguesa en header

✅ Integración completa en el layout

---

## Siguiente Fase

➡️ **FASE 4**: Sistema de Diseño y Componentes UI - Ver archivo `FASE-04-sistema-diseno.md`

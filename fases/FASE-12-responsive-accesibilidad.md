# FASE 12: Responsive, Accesibilidad y Pulido

## Resumen
| Campo | Valor |
|-------|-------|
| **Fase** | 12 de 13 |
| **Nombre** | Responsive, Accesibilidad y Pulido |
| **Objetivo** | Sitio pulido, responsivo y accesible |
| **Prerequisitos** | Todas las fases de contenido completadas (1-11) |

---

## Instrucciones para Claude Code

> **IMPORTANTE**: Esta fase se enfoca en la calidad, no en nuevas funcionalidades.
> Revisar y ajustar lo existente para garantizar una experiencia óptima.

---

## TAREA 1: Pruebas de Responsive - Móvil (320px - 480px)

### Checklist de verificación en móvil:

#### Header
- [ ] Logo visible y no cortado
- [ ] Botón hamburguesa visible y funcional
- [ ] Toggle de tema accesible
- [ ] Altura del header apropiada

#### Sidebar (Drawer)
- [ ] Se abre al tocar hamburguesa
- [ ] Overlay oscuro visible
- [ ] Botón X para cerrar funcional
- [ ] Se cierra al tocar overlay
- [ ] Se cierra al navegar a otra página
- [ ] Scroll interno si hay muchos items

#### Contenido
- [ ] Textos legibles sin zoom
- [ ] Imágenes no se desbordan
- [ ] Tablas con scroll horizontal
- [ ] Cards apiladas verticalmente
- [ ] Padding lateral suficiente
- [ ] Botones con tamaño táctil mínimo (44x44px)

#### Footer
- [ ] Contenido visible y legible
- [ ] Links funcionan correctamente

### Correcciones comunes:

```css
/* En globals.css - Ajustes móvil */
@media (max-width: 480px) {
  /* Asegurar que las tablas tengan scroll */
  .overflow-x-auto {
    -webkit-overflow-scrolling: touch;
  }

  /* Reducir padding en móvil */
  .p-6 {
    padding: 1rem;
  }

  /* Ajustar tamaño de fuente en tablas */
  table {
    font-size: 0.875rem;
  }
}
```

- [ ] Pruebas de móvil completadas

---

## TAREA 2: Pruebas de Responsive - Tablet (768px - 1024px)

### Checklist de verificación en tablet:

#### Layout
- [ ] Sidebar puede estar visible u oculto
- [ ] Grid de cards en 2 columnas
- [ ] Contenido centrado apropiadamente
- [ ] Márgenes laterales adecuados

#### Navegación
- [ ] Breadcrumbs completos visible
- [ ] Navegación anterior/siguiente funcional
- [ ] Links del sidebar clickeables

#### Componentes
- [ ] Quiz se ve correctamente
- [ ] Accordion funciona
- [ ] Videos mantienen proporción 16:9
- [ ] Galería en 2 columnas

- [ ] Pruebas de tablet completadas

---

## TAREA 3: Pruebas de Responsive - Desktop (1024px+)

### Checklist de verificación en desktop:

#### Layout
- [ ] Sidebar fijo a la izquierda
- [ ] Contenido con máximo ancho legible
- [ ] Espaciado generoso
- [ ] Sin scroll horizontal

#### Interacciones
- [ ] Hover effects visibles
- [ ] Sidebar colapsa/expande suavemente
- [ ] Animaciones fluidas

- [ ] Pruebas de desktop completadas

---

## TAREA 4: Verificación de Accesibilidad - Contraste

### Herramientas recomendadas:
- Chrome DevTools > Lighthouse > Accessibility
- axe DevTools extension
- WebAIM Contrast Checker

### Checklist WCAG AA (ratio mínimo 4.5:1):

#### Modo claro
- [ ] Texto principal vs fondo: verificado
- [ ] Texto secundario vs fondo: verificado
- [ ] Links vs fondo: verificado
- [ ] Iconos vs fondo: verificado
- [ ] Botones: texto vs fondo del botón

#### Modo oscuro
- [ ] Texto principal vs fondo oscuro: verificado
- [ ] Texto secundario vs fondo oscuro: verificado
- [ ] Links en modo oscuro: verificado
- [ ] Alertas legibles en ambos modos

### Correcciones de contraste si son necesarias:

```typescript
// En tailwind.config.ts - Ajustar colores si el contraste es insuficiente
colors: {
  gray: {
    // Asegurar que gray-600 tenga suficiente contraste
    600: '#4b5563', // Puede necesitar ser más oscuro
  }
}
```

- [ ] Contraste verificado modo claro
- [ ] Contraste verificado modo oscuro

---

## TAREA 5: Verificación de Accesibilidad - Navegación por Teclado

### Checklist de navegación por teclado:

#### Tab navigation
- [ ] Todos los elementos interactivos son alcanzables con Tab
- [ ] Orden de Tab es lógico (izquierda a derecha, arriba a abajo)
- [ ] No hay "trampas de teclado" (elementos de los que no se puede salir)

#### Focus visible
- [ ] Focus ring visible en todos los elementos interactivos
- [ ] Focus visible en modo claro
- [ ] Focus visible en modo oscuro

#### Funcionalidades específicas
- [ ] Sidebar: navegable con teclado
- [ ] Accordion: Enter/Space para abrir/cerrar
- [ ] Quiz: selección con teclado
- [ ] Lightbox: cerrar con Escape
- [ ] Lightbox: navegar con flechas

### Correcciones de focus:

```css
/* En globals.css */
/* Asegurar focus visible */
:focus-visible {
  @apply outline-2 outline-offset-2 outline-primary-500;
}

/* Remover outline por defecto y usar focus-visible */
button:focus:not(:focus-visible),
a:focus:not(:focus-visible) {
  outline: none;
}
```

- [ ] Navegación por teclado verificada

---

## TAREA 6: Verificación de Accesibilidad - Atributos ARIA

### Checklist de ARIA:

#### Imágenes
- [ ] Todas las imágenes tienen alt text
- [ ] Imágenes decorativas tienen alt=""
- [ ] Alt text es descriptivo

#### Landmarks
- [ ] `<header>` presente
- [ ] `<nav>` para navegación
- [ ] `<main>` para contenido principal
- [ ] `<footer>` presente

#### Componentes interactivos
- [ ] Accordion: aria-expanded en botones
- [ ] Tabs: role="tablist", role="tab", role="tabpanel"
- [ ] Modales: aria-modal, aria-labelledby
- [ ] Alertas: role="alert" o role="status"

#### Formularios (Quiz)
- [ ] Labels asociados a inputs
- [ ] Mensajes de error asociados con aria-describedby
- [ ] Estados de validación comunicados

### Verificar en componentes:

```tsx
// Ejemplo de mejoras ARIA en Accordion
<button
  onClick={() => toggleItem(item.id)}
  aria-expanded={isOpen(item.id)}
  aria-controls={`accordion-content-${item.id}`}
>

<div
  id={`accordion-content-${item.id}`}
  role="region"
  aria-labelledby={`accordion-header-${item.id}`}
>
```

- [ ] Atributos ARIA verificados

---

## TAREA 7: Optimización de Imágenes

### Checklist de imágenes:

#### Formatos
- [ ] Usar WebP donde sea posible
- [ ] Fallback a JPEG/PNG para navegadores antiguos
- [ ] SVG para iconos y gráficos vectoriales

#### Tamaños
- [ ] Imágenes no más grandes de lo necesario
- [ ] Máximo 1200px de ancho para contenido
- [ ] Thumbnails de tamaño apropiado

#### Next.js Image
- [ ] Usar componente `<Image>` de Next.js
- [ ] Definir width y height o fill
- [ ] Usar sizes para responsive

```tsx
// Ejemplo correcto
<Image
  src="/images/example.jpg"
  alt="Descripción de la imagen"
  width={800}
  height={600}
  sizes="(max-width: 768px) 100vw, 800px"
  className="rounded-lg"
/>
```

- [ ] Imágenes optimizadas

---

## TAREA 8: Optimización de Rendimiento

### Checklist de rendimiento:

#### Lazy loading
- [ ] Imágenes con loading="lazy" (automático con Next Image)
- [ ] Videos con lazy loading implementado
- [ ] Componentes pesados con dynamic import si es necesario

#### Bundle size
```bash
# Analizar bundle
npm run build
# Revisar tamaño de salida
```

- [ ] Bundle de JavaScript razonable (< 200KB inicial)
- [ ] Sin dependencias duplicadas
- [ ] Tree shaking funcionando

#### Lighthouse
```bash
# En Chrome DevTools
# 1. Abrir DevTools (F12)
# 2. Ir a pestaña Lighthouse
# 3. Seleccionar Mobile y Desktop
# 4. Ejecutar auditoría
```

Objetivos mínimos:
- [ ] Performance: > 80
- [ ] Accessibility: > 90
- [ ] Best Practices: > 90
- [ ] SEO: > 90

- [ ] Rendimiento optimizado

---

## TAREA 9: Pruebas de QA - Funcionalidad

### Checklist de funcionalidad:

#### Navegación
- [ ] Todos los links del sidebar funcionan
- [ ] Breadcrumbs navegan correctamente
- [ ] Navegación anterior/siguiente funciona
- [ ] Links externos abren en nueva pestaña

#### Tema
- [ ] Toggle de tema funciona
- [ ] Preferencia se guarda en localStorage
- [ ] Se respeta preferencia del sistema

#### Componentes interactivos
- [ ] Todos los accordions abren/cierran
- [ ] Videos se cargan y reproducen
- [ ] Quiz funciona completamente:
  - [ ] Selección de respuestas
  - [ ] Verificación de respuestas
  - [ ] Mostrar explicación
  - [ ] Calcular puntuación
  - [ ] Reiniciar quiz

#### Contenido
- [ ] Sin errores tipográficos visibles
- [ ] Formato consistente en todas las páginas
- [ ] Alertas muestran iconos correctos

- [ ] QA de funcionalidad completado

---

## TAREA 10: Corrección de Bugs

### Lista de bugs comunes a verificar:

1. **Hydration mismatch**
   - Verificar que no hay errores de hydration en consola
   - Usar `suppressHydrationWarning` donde sea necesario

2. **Flash of unstyled content (FOUC)**
   - Tema debe aplicarse sin flash
   - Usar `suppressHydrationWarning` en html tag

3. **Scroll position**
   - Al navegar, la página debe scrollear arriba
   - Verificar en Next.js App Router (comportamiento por defecto)

4. **Estado del sidebar**
   - Estado se mantiene al navegar
   - Se guarda correctamente en localStorage

### Comando para verificar errores:
```bash
npm run build
npm run start
# Navegar por toda la aplicación verificando consola
```

- [ ] Bugs identificados y corregidos

---

## TAREA 11: Verificación Final

### Lista de verificación completa:

```bash
# 1. Build de producción
npm run build

# 2. Verificar que no hay errores
# 3. Iniciar servidor de producción
npm run start

# 4. Probar en múltiples navegadores:
# - Chrome
# - Firefox
# - Safari (si es posible)
# - Edge
```

### Checklist final:
- [ ] Build sin errores
- [ ] Sin warnings importantes en consola
- [ ] Funciona en Chrome
- [ ] Funciona en Firefox
- [ ] Funciona en dispositivo móvil real (si es posible)
- [ ] Tema claro/oscuro funciona perfectamente
- [ ] Todos los quizzes funcionan
- [ ] Navegación completa funcional

---

## Entregable de la Fase 12

✅ Responsive verificado:
  - Móvil (320px - 480px)
  - Tablet (768px - 1024px)
  - Desktop (1024px+)

✅ Accesibilidad:
  - Contraste WCAG AA
  - Navegación por teclado
  - Atributos ARIA
  - Alt text en imágenes

✅ Optimización:
  - Imágenes optimizadas
  - Lazy loading implementado
  - Bundle size razonable
  - Lighthouse > 80 en todas las métricas

✅ QA:
  - Todas las funcionalidades probadas
  - Links verificados
  - Bugs corregidos
  - Build de producción exitoso

---

## Siguiente Fase

➡️ **FASE 13**: Despliegue y Documentación - Ver archivo `FASE-13-despliegue-documentacion.md`

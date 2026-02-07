# Guía de Diseño - Estilo Blog/Artículo Editorial

> **Documento de referencia para aplicar el diseño tipo blog educativo a páginas del portal de inducción**

Esta guía documenta el sistema de diseño implementado en la página de Planificación Familiar, diseñado para crear una experiencia de lectura centrada, limpia y educativa similar a Medium o blogs académicos modernos.

---

## 📋 Tabla de Contenidos

1. [Filosofía de Diseño](#filosofía-de-diseño)
2. [Componentes Principales](#componentes-principales)
3. [Patrones de Layout](#patrones-de-layout)
4. [Sistema de Espaciado](#sistema-de-espaciado)
5. [Tipografía y Jerarquía](#tipografía-y-jerarquía)
6. [Código de Ejemplo](#código-de-ejemplo)
7. [Checklist de Implementación](#checklist-de-implementación)

---

## 🎯 Filosofía de Diseño

### Principios Fundamentales

1. **Contenido Centrado**: El contenido principal debe estar centrado y limitado en ancho para optimizar la legibilidad
2. **Ritmo Visual**: Alternar fondos entre secciones (blanco/gris) para crear separación visual clara
3. **Espacio Generoso**: Usar padding y margins amplios para que el contenido "respire"
4. **Jerarquía Clara**: Variación en tamaños de fuente, peso y color para guiar la lectura
5. **Componentes Compactos**: Cards y elementos inline pequeños que fluyen con el texto

### Ventajas del Diseño Blog

- ✨ **Centrado y enfocado**: Contenido limitado a ~768px para lectura óptima
- 📐 **Secciones claramente separadas**: Fondos alternados marcan cambios de contexto
- 🎨 **Visual hierarchy clara**: Tamaños de fuente y espaciado guían la lectura
- 📱 **Mobile-friendly**: Columna única fluye naturalmente en móvil
- 🌬️ **Espacio para respirar**: py-16/py-24 en secciones
- 🎓 **Educativo y profesional**: Diseño similar a artículos académicos modernos

---

## 🧩 Componentes Principales

### 1. ArticleContainer

**Propósito**: Contenedor centrado con ancho variable según el tipo de contenido

**Variantes**:
- `maxWidth="prose"` - ~768px (max-w-3xl) para texto y lectura
- `maxWidth="article"` - ~896px (max-w-4xl) para elementos más anchos
- `maxWidth="wide"` - ~1024px (max-w-5xl) para tablas grandes

**Uso**:
```tsx
<ArticleContainer maxWidth="prose">
  {/* Contenido de texto */}
</ArticleContainer>
```

**Cuándo usar cada variante**:
- **prose**: Párrafos introductorios, texto largo, alerts, FAQs
- **article**: Cards, listas, contenido mixto
- **wide**: Tablas, grids, elementos que necesitan más espacio

---

### 2. SectionBackground

**Propósito**: Wrapper para crear secciones con fondo alternado y espaciado vertical

**Variantes de fondo**:
- `variant="default"` - Fondo blanco (bg-white dark:bg-gray-950)
- `variant="muted"` - Fondo gris suave (bg-gray-50 dark:bg-gray-900)
- `variant="accent"` - Fondo azul suave (bg-blue-50/30 dark:bg-blue-950/20)

**Variantes de espaciado**:
- `spacing="normal"` - py-12 lg:py-16 (3rem-4rem)
- `spacing="large"` - py-16 lg:py-24 (4rem-6rem)

**Uso**:
```tsx
<SectionBackground variant="muted" spacing="large">
  <ArticleContainer maxWidth="prose">
    {/* Contenido */}
  </ArticleContainer>
</SectionBackground>
```

**Patrón de alternancia**:
```tsx
{/* Sección 1 - Fondo blanco */}
<SectionBackground variant="default" spacing="normal">
  ...
</SectionBackground>

{/* Sección 2 - Fondo gris */}
<SectionBackground variant="muted" spacing="large">
  ...
</SectionBackground>

{/* Sección 3 - Fondo blanco */}
<SectionBackground variant="default" spacing="large">
  ...
</SectionBackground>
```

---

### 3. SectionDivider

**Propósito**: Separador visual entre secciones mayores

**Variantes**:
- `variant="line"` - Línea horizontal simple con border-t
- `variant="space"` - Espacio vacío (h-16 lg:h-24)
- `variant="decorative"` - Línea con icono decorativo al centro

**Uso**:
```tsx
{/* Separador con icono */}
<SectionDivider variant="decorative" icon={Heart} />

{/* Solo espacio */}
<SectionDivider variant="space" />

{/* Línea simple */}
<SectionDivider variant="line" />
```

**Cuándo usar**:
- **decorative**: Entre secciones mayores muy diferentes (ej: después de parámetros, antes de tablas)
- **space**: Para reducir espaciado sin línea visible
- **line**: Rara vez necesario, preferir fondos alternados

---

### 4. CompactCard

**Propósito**: Cards pequeñas y compactas para contenido inline

**Variantes**:
- `variant="default"` - Fondo gris con hover
- `variant="bordered"` - Con borde de 2px
- `variant="highlighted"` - Fondo azul con borde izquierdo destacado

**Uso**:
```tsx
<CompactCard variant="highlighted">
  <div className="flex items-center gap-3">
    <div className="p-2 bg-blue-100 dark:bg-blue-900/40 rounded-lg shrink-0">
      <Hash className="w-5 h-5 text-blue-600 dark:text-blue-400" />
    </div>
    <div>
      <div className="flex items-baseline gap-2">
        <span className="text-sm font-medium">Finalidad:</span>
        <span className="text-lg font-bold">19</span>
      </div>
      <p className="text-sm text-gray-600 dark:text-gray-400 mt-0.5">
        Planificación Familiar y Anticoncepción
      </p>
    </div>
  </div>
</CompactCard>
```

**Características**:
- Padding: `p-4` (más compacto que cards normales)
- Iconos: `w-5 h-5` (pequeños)
- Stack vertical: `space-y-3` entre cards
- Transiciones suaves en hover

---

### 5. CopyButton

**Propósito**: Botón para copiar códigos al portapapeles

**Uso**:
```tsx
<div className="flex items-center gap-2">
  <code className="font-mono text-sm font-semibold text-primary-600">
    *890205-5
  </code>
  <CopyButton text="*890205-5" size="sm" />
</div>
```

**Ubicación típica**: Junto a códigos CUPS, CIE-10, o cualquier dato que el usuario necesite copiar

---

### 6. Badge

**Propósito**: Pills pequeños para categorización

**Variantes**:
- `variant="blue"` - Azul (por defecto)
- `variant="purple"` - Morado
- `variant="green"` - Verde
- `variant="orange"` - Naranja
- `variant="gray"` - Gris

**Tamaños**:
- `size="sm"` - Pequeño (px-2.5 py-0.5 text-xs)
- `size="md"` - Mediano (px-3 py-1 text-sm)

**Uso**:
```tsx
<Badge variant="purple" size="sm">
  Primera Vez
</Badge>
```

---

## 📐 Patrones de Layout

### Estructura de Página Completa

```tsx
export default function TuPagina() {
  return (
    <SectionTemplate
      title="Título de la Página"
      description="Descripción breve"
      icon={IconComponent}
      breadcrumbs={[...]}
      previousPage={{...}}
      nextPage={{...}}
    >
      {/* 1. Lead Paragraph - Introducción */}
      <SectionBackground variant="default" spacing="normal">
        <ArticleContainer maxWidth="prose">
          <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
            Texto introductorio destacado que describe el propósito de la página...
          </p>
          <Alert variant="info" title="Información importante">
            Datos clave o restricciones
          </Alert>
        </ArticleContainer>
      </SectionBackground>

      {/* 2. Sección con parámetros - Fondo gris */}
      <SectionBackground variant="muted" spacing="large">
        <ArticleContainer maxWidth="prose">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Parámetros o Configuración
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
            Descripción de los parámetros
          </p>

          <div className="space-y-3">
            <CompactCard variant="highlighted">
              {/* Contenido del card */}
            </CompactCard>
            <CompactCard variant="highlighted">
              {/* Contenido del card */}
            </CompactCard>
          </div>
        </ArticleContainer>
      </SectionBackground>

      {/* 3. Separador decorativo */}
      <SectionDivider variant="decorative" icon={YourIcon} />

      {/* 4. Tabla o datos principales - Fondo blanco */}
      <SectionBackground variant="default" spacing="large">
        <ArticleContainer maxWidth="wide">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
            Códigos o Datos Principales
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
            Descripción de la tabla
          </p>

          <div className="overflow-x-auto">
            <table className="w-full">
              {/* Tabla limpia sin bordes excesivos */}
            </table>
          </div>
        </ArticleContainer>
      </SectionBackground>

      {/* 5. Sección adicional - Fondo gris */}
      <SectionBackground variant="muted" spacing="normal">
        <ArticleContainer maxWidth="wide">
          {/* Contenido adicional */}
        </ArticleContainer>
      </SectionBackground>

      {/* 6. Alertas o avisos importantes - Fondo blanco */}
      <SectionBackground variant="default" spacing="normal">
        <ArticleContainer maxWidth="prose">
          <Alert variant="danger" className="p-5">
            <h3 className="text-lg font-bold mb-3">
              Título del aviso
            </h3>
            <p className="mb-4 leading-relaxed">
              Descripción
            </p>
            <ul className="space-y-2">
              {/* Lista de items */}
            </ul>
          </Alert>
        </ArticleContainer>
      </SectionBackground>

      {/* 7. Documentación o recursos - Fondo gris */}
      <SectionBackground variant="muted" spacing="large">
        <ArticleContainer maxWidth="prose">
          <h2 className="text-2xl font-bold mb-4">
            Documentación Requerida
          </h2>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
            Descripción
          </p>

          <div className="space-y-3">
            <CompactCard variant="default">
              {/* Items de documentación */}
            </CompactCard>
          </div>
        </ArticleContainer>
      </SectionBackground>

      {/* 8. FAQ - Fondo blanco */}
      <SectionBackground variant="default" spacing="large">
        <ArticleContainer maxWidth="prose">
          <h2 className="text-2xl font-bold mb-6">
            Preguntas Frecuentes
          </h2>
          <Accordion items={faqItems} />
        </ArticleContainer>
      </SectionBackground>
    </SectionTemplate>
  );
}
```

---

## 📏 Sistema de Espaciado

### Espaciado Vertical entre Secciones

| Contexto | Clase | Valor | Uso |
|----------|-------|-------|-----|
| Normal | `py-12 lg:py-16` | 3rem-4rem | Secciones estándar |
| Grande | `py-16 lg:py-24` | 4rem-6rem | Secciones destacadas |
| Entre elementos | `space-y-3` | 0.75rem | Cards compactas |
| Entre elementos | `space-y-6` | 1.5rem | Elementos medianos |
| Margin bottom | `mb-4` | 1rem | Después de h2 |
| Margin bottom | `mb-6` | 1.5rem | Después de párrafos |
| Margin bottom | `mb-8` | 2rem | Antes de tablas |

### Padding de Componentes

| Componente | Padding | Propósito |
|------------|---------|-----------|
| CompactCard | `p-4` | Cards inline compactas |
| Alert normal | `p-5` | Alertas compactas |
| Alert grande | `p-6` o `p-8` | Alertas con mucho contenido |
| Table cells | `px-4 py-3` | Celdas de tabla limpias |
| ArticleContainer | `px-4 sm:px-6 lg:px-8` | Padding horizontal responsive |

### Espaciado en Tablas

```tsx
<table className="w-full">
  {/* Header con línea doble */}
  <thead className="border-b-2 border-gray-300 dark:border-gray-700">
    <tr>
      <th className="px-4 py-3 text-left text-sm font-semibold">
        Columna
      </th>
    </tr>
  </thead>

  {/* Body con dividers sutiles */}
  <tbody className="divide-y divide-gray-200 dark:divide-gray-800">
    <tr className="hover:bg-gray-50 dark:hover:bg-gray-900/50 transition-colors">
      <td className="px-4 py-3 text-sm">
        Contenido
      </td>
    </tr>
  </tbody>
</table>
```

**Características de tablas limpias**:
- Solo línea horizontal doble en header (`border-b-2`)
- Dividers sutiles entre filas (`divide-y`)
- Sin bordes verticales
- Hover state suave
- Padding compacto pero cómodo (`px-4 py-3`)

---

## 🔤 Tipografía y Jerarquía

### Jerarquía de Títulos

```tsx
{/* H1 - Ya viene del SectionTemplate */}

{/* H2 - Títulos de sección */}
<h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
  Título de Sección
</h2>

{/* H3 - Subtítulos dentro de componentes */}
<h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">
  Subtítulo
</h3>

{/* H4 - Títulos pequeños en cards */}
<h4 className="font-semibold text-gray-900 dark:text-white text-sm mb-0.5">
  Título de Card
</h4>
```

### Texto de Cuerpo

```tsx
{/* Lead paragraph - Primer párrafo destacado */}
<p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
  Texto introductorio importante...
</p>

{/* Párrafo normal */}
<p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
  Texto estándar de la página...
</p>

{/* Texto pequeño (en cards o descripciones) */}
<p className="text-sm text-gray-600 dark:text-gray-400">
  Descripción breve
</p>
```

### Código y Datos

```tsx
{/* Código CUPS/CIE-10 */}
<code className="font-mono text-sm font-semibold text-primary-600 dark:text-primary-400">
  *890205-5
</code>

{/* Números destacados */}
<span className="text-lg font-bold text-blue-600 dark:text-blue-400">
  19
</span>

{/* Labels */}
<span className="text-sm font-medium text-gray-600 dark:text-gray-400">
  Finalidad:
</span>
```

### Line Height

| Contexto | Clase | Valor | Uso |
|----------|-------|-------|-----|
| Lectura | `leading-relaxed` | 1.625 | Párrafos largos |
| Listas | `leading-relaxed` | 1.625 | Items de lista |
| Compacto | Sin clase | 1.5 | Por defecto |

---

## 💻 Código de Ejemplo

### Ejemplo: Sección con Cards de Parámetros

```tsx
<SectionBackground variant="muted" spacing="large">
  <ArticleContainer maxWidth="prose">
    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
      Parámetros de Facturación
    </h2>
    <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
      Estos son los parámetros estándar que se deben usar en todos los registros.
    </p>

    <div className="space-y-3">
      <CompactCard variant="highlighted">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-blue-100 dark:bg-blue-900/40 rounded-lg shrink-0">
            <Hash className="w-5 h-5 text-blue-600 dark:text-blue-400" />
          </div>
          <div>
            <div className="flex items-baseline gap-2">
              <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
                Finalidad:
              </span>
              <span className="text-lg font-bold text-blue-600 dark:text-blue-400">
                19
              </span>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-0.5">
              Planificación Familiar y Anticoncepción
            </p>
          </div>
        </div>
      </CompactCard>

      <CompactCard variant="highlighted">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-green-100 dark:bg-green-900/40 rounded-lg shrink-0">
            <Hash className="w-5 h-5 text-green-600 dark:text-green-400" />
          </div>
          <div>
            <div className="flex items-baseline gap-2">
              <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
                Causa Externa:
              </span>
              <span className="text-lg font-bold text-green-600 dark:text-green-400">
                40
              </span>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-0.5">
              Promoción y Mantenimiento de la Salud
            </p>
          </div>
        </div>
      </CompactCard>
    </div>
  </ArticleContainer>
</SectionBackground>
```

### Ejemplo: Tabla Limpia con CopyButton

```tsx
<SectionBackground variant="default" spacing="large">
  <ArticleContainer maxWidth="wide">
    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
      Códigos CUPS para Consultas
    </h2>
    <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
      Códigos para atención de primera vez y control.
    </p>

    <div className="overflow-x-auto">
      <table className="w-full">
        <thead className="border-b-2 border-gray-300 dark:border-gray-700">
          <tr>
            <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 dark:text-white">
              CUPS
            </th>
            <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 dark:text-white">
              Descripción
            </th>
            <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 dark:text-white">
              Tipo
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 dark:divide-gray-800">
          {data.map((item) => (
            <tr
              key={item.id}
              className="hover:bg-gray-50 dark:hover:bg-gray-900/50 transition-colors"
            >
              <td className="px-4 py-3">
                <div className="flex items-center gap-2">
                  <code className="font-mono text-sm font-semibold text-primary-600 dark:text-primary-400">
                    {item.cups}
                  </code>
                  <CopyButton text={item.cups} size="sm" />
                </div>
              </td>
              <td className="px-4 py-3 text-sm text-gray-700 dark:text-gray-300">
                {item.descripcion}
              </td>
              <td className="px-4 py-3">
                <Badge variant="blue" size="sm">
                  {item.tipo}
                </Badge>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </ArticleContainer>
</SectionBackground>
```

### Ejemplo: Alert de Advertencia

```tsx
<SectionBackground variant="default" spacing="normal">
  <ArticleContainer maxWidth="prose">
    <Alert variant="danger" className="p-5">
      <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">
        Causales frecuentes de glosa
      </h3>
      <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
        Evita estas situaciones que pueden generar glosas:
      </p>
      <ul className="space-y-2">
        <li className="flex items-start gap-2">
          <X className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
          <span className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
            Facturar sin documentación completa
          </span>
        </li>
        <li className="flex items-start gap-2">
          <X className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
          <span className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
            Usar códigos incorrectos
          </span>
        </li>
      </ul>
    </Alert>
  </ArticleContainer>
</SectionBackground>
```

---

## ✅ Checklist de Implementación

### Antes de Empezar

- [ ] Leer esta guía completa
- [ ] Revisar la página de Planificación Familiar como referencia
- [ ] Identificar las secciones principales de tu página
- [ ] Definir el flujo de contenido (introducción → datos → alertas → FAQ)

### Imports Necesarios

```tsx
// Layout
import { ArticleContainer, SectionBackground } from '@/components/layout';

// UI Components
import {
  Alert,
  Accordion,
  CopyButton,
  Badge,
  SectionDivider,
  CompactCard
} from '@/components/ui';

// Template
import { SectionTemplate } from '@/components/templates';

// Icons (según necesites)
import { Heart, Hash, FileCheck, X, AlertCircle } from 'lucide-react';
```

### Estructura de Página

- [ ] Lead paragraph con `text-xl` en `ArticleContainer maxWidth="prose"`
- [ ] Alert de información importante en la introducción
- [ ] Alternar fondos entre secciones (default → muted → default → muted)
- [ ] Usar `spacing="large"` para secciones importantes
- [ ] Usar `spacing="normal"` para secciones compactas
- [ ] Incluir al menos un `SectionDivider variant="decorative"` entre secciones mayores

### Componentes

- [ ] CompactCards con `p-4` para parámetros/configuración
- [ ] Iconos de tamaño `w-5 h-5` en cards
- [ ] Tablas limpias sin bordes verticales
- [ ] CopyButton junto a todos los códigos
- [ ] Badges para categorización
- [ ] `space-y-3` entre CompactCards
- [ ] `leading-relaxed` en todos los párrafos

### Tablas

- [ ] Usar `maxWidth="wide"` para tablas
- [ ] Header con `border-b-2`
- [ ] Body con `divide-y`
- [ ] Sin bordes verticales
- [ ] Hover state: `hover:bg-gray-50 dark:hover:bg-gray-900/50`
- [ ] Padding: `px-4 py-3`

### Tipografía

- [ ] H2: `text-2xl font-bold mb-4`
- [ ] H3: `text-lg font-bold mb-3`
- [ ] Párrafos: `text-gray-600 dark:text-gray-400 leading-relaxed`
- [ ] Código: `font-mono text-sm font-semibold text-primary-600`
- [ ] Line height generoso en todo el texto

### Accesibilidad y UX

- [ ] Contraste adecuado en modo claro y oscuro
- [ ] Hover states en elementos interactivos
- [ ] Focus visible en botones
- [ ] Textos descriptivos en CopyButton
- [ ] Alt text en imágenes (si aplica)

### Testing

- [ ] Revisar en desktop (1920px, 1440px, 1024px)
- [ ] Revisar en tablet (768px)
- [ ] Revisar en móvil (375px, 320px)
- [ ] Probar en modo claro
- [ ] Probar en modo oscuro
- [ ] Verificar scroll suave entre secciones
- [ ] Validar que las tablas son responsivas (`overflow-x-auto`)

---

## 🎨 Paleta de Colores Recomendada

### Fondos de Secciones

```tsx
// Blanco (default)
'bg-white dark:bg-gray-950'

// Gris suave (muted)
'bg-gray-50 dark:bg-gray-900'

// Azul suave (accent)
'bg-blue-50/30 dark:bg-blue-950/20'
```

### Colores de Iconos en Cards

```tsx
// Azul
'bg-blue-100 dark:bg-blue-900/40' // Fondo icono
'text-blue-600 dark:text-blue-400' // Color icono y texto

// Verde
'bg-green-100 dark:bg-green-900/40'
'text-green-600 dark:text-green-400'

// Morado
'bg-purple-100 dark:bg-purple-900/40'
'text-purple-600 dark:text-purple-400'

// Naranja
'bg-orange-100 dark:bg-orange-900/40'
'text-orange-600 dark:text-orange-400'
```

---

## 📚 Recursos Adicionales

### Archivos de Referencia

- **Página ejemplo**: `src/app/facturacion-pyp/planificacion-familiar/page.tsx`
- **Componentes**:
  - `src/components/layout/ArticleContainer.tsx`
  - `src/components/layout/SectionBackground.tsx`
  - `src/components/ui/SectionDivider.tsx`
  - `src/components/ui/CompactCard.tsx`
  - `src/components/ui/CopyButton.tsx`
  - `src/components/ui/Badge.tsx`

### Plan de Diseño Completo

Ver el archivo de plan completo en: `~/.claude/plans/proud-marinating-feather.md`

---

## 🔄 Actualizaciones

**Versión**: 1.0
**Fecha**: Febrero 2026
**Autor**: Claude Sonnet 4.5
**Página base**: Planificación Familiar

### Historial de Cambios

- **v1.0** (Feb 2026): Documento inicial basado en la implementación de Planificación Familiar

---

## 💡 Consejos Finales

1. **Mantén la consistencia**: Usa los mismos patrones en todas las páginas
2. **Prioriza la legibilidad**: El espaciado generoso mejora la comprensión
3. **Alternancia de fondos**: Crea ritmo visual claro entre secciones
4. **Contenido centrado**: No dejes que el texto se extienda demasiado
5. **Componentes compactos**: Las cards pequeñas fluyen mejor con el texto
6. **Tablas limpias**: Menos bordes = más claridad
7. **Iconos pequeños**: w-5 h-5 es suficiente para cards compactas
8. **Testing responsive**: Siempre prueba en móvil

---

> 🎯 **Objetivo**: Crear una experiencia de lectura agradable, educativa y profesional que facilite el aprendizaje de los usuarios del portal de inducción.

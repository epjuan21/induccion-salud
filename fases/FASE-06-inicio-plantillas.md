# FASE 6: Página de Inicio y Plantillas de Contenido

## Resumen
| Campo | Valor |
|-------|-------|
| **Fase** | 6 de 13 |
| **Nombre** | Página de Inicio y Plantillas de Contenido |
| **Objetivo** | Homepage atractiva y plantilla base reutilizable para secciones |
| **Prerequisitos** | Fase 5 completada |

---

## Instrucciones para Claude Code

> **IMPORTANTE**: Esta fase crea la página de inicio definitiva y establece las plantillas para las páginas de contenido.

---

## TAREA 1: Crear Componente Breadcrumbs

### Archivo: `src/components/ui/Breadcrumbs.tsx`

```tsx
import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';
import { cn } from '@/lib/utils';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
}

export function Breadcrumbs({ items, className }: BreadcrumbsProps) {
  return (
    <nav
      aria-label="Breadcrumb"
      className={cn('flex items-center text-sm', className)}
    >
      <ol className="flex items-center flex-wrap gap-1">
        {/* Home link */}
        <li>
          <Link
            href="/"
            className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
          >
            <Home className="w-4 h-4" />
            <span className="sr-only">Inicio</span>
          </Link>
        </li>

        {items.map((item, index) => (
          <li key={index} className="flex items-center gap-1">
            <ChevronRight className="w-4 h-4 text-gray-400 dark:text-gray-500" />
            {item.href && index < items.length - 1 ? (
              <Link
                href={item.href}
                className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
              >
                {item.label}
              </Link>
            ) : (
              <span className="text-gray-900 dark:text-white font-medium">
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
```

- [ ] Componente Breadcrumbs creado

---

## TAREA 2: Crear Componente de Navegación Entre Páginas

### Archivo: `src/components/ui/PageNavigation.tsx`

```tsx
import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface PageNavigationProps {
  previousPage?: {
    title: string;
    href: string;
  };
  nextPage?: {
    title: string;
    href: string;
  };
  className?: string;
}

export function PageNavigation({
  previousPage,
  nextPage,
  className,
}: PageNavigationProps) {
  return (
    <nav
      className={cn(
        'flex items-center justify-between gap-4 pt-8 mt-8 border-t border-gray-200 dark:border-gray-700',
        className
      )}
      aria-label="Navegación de páginas"
    >
      {previousPage ? (
        <Link
          href={previousPage.href}
          className="group flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
        >
          <ChevronLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          <div className="text-left">
            <span className="block text-xs text-gray-500 dark:text-gray-500">
              Anterior
            </span>
            <span className="font-medium">{previousPage.title}</span>
          </div>
        </Link>
      ) : (
        <div />
      )}

      {nextPage ? (
        <Link
          href={nextPage.href}
          className="group flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors text-right"
        >
          <div>
            <span className="block text-xs text-gray-500 dark:text-gray-500">
              Siguiente
            </span>
            <span className="font-medium">{nextPage.title}</span>
          </div>
          <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </Link>
      ) : (
        <div />
      )}
    </nav>
  );
}
```

- [ ] Componente PageNavigation creado

---

## TAREA 3: Crear Componente ModuleCard (para página de inicio)

### Archivo: `src/components/ui/ModuleCard.tsx`

```tsx
import Link from 'next/link';
import { ArrowRight, type LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ModuleCardProps {
  title: string;
  description: string;
  href: string;
  icon: LucideIcon;
  iconColor?: string;
  iconBgColor?: string;
  subsections?: { title: string; href: string }[];
  className?: string;
}

export function ModuleCard({
  title,
  description,
  href,
  icon: Icon,
  iconColor = 'text-primary-600 dark:text-primary-400',
  iconBgColor = 'bg-primary-100 dark:bg-primary-900/30',
  subsections,
  className,
}: ModuleCardProps) {
  return (
    <div
      className={cn(
        'group relative bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700',
        'hover:shadow-lg hover:border-primary-300 dark:hover:border-primary-700 transition-all duration-200',
        className
      )}
    >
      <Link href={href} className="block p-6">
        <div className="flex items-start gap-4">
          <div className={cn('p-3 rounded-xl flex-shrink-0', iconBgColor)}>
            <Icon className={cn('w-6 h-6', iconColor)} />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
              {title}
            </h3>
            <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
              {description}
            </p>
          </div>
          <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-primary-600 dark:group-hover:text-primary-400 group-hover:translate-x-1 transition-all flex-shrink-0" />
        </div>
      </Link>

      {/* Subsections preview */}
      {subsections && subsections.length > 0 && (
        <div className="px-6 pb-4">
          <div className="pt-4 border-t border-gray-100 dark:border-gray-700">
            <p className="text-xs font-medium text-gray-500 dark:text-gray-400 mb-2">
              Contenido:
            </p>
            <ul className="space-y-1">
              {subsections.slice(0, 3).map((sub) => (
                <li key={sub.href}>
                  <Link
                    href={sub.href}
                    className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                  >
                    • {sub.title}
                  </Link>
                </li>
              ))}
              {subsections.length > 3 && (
                <li className="text-sm text-gray-500 dark:text-gray-500">
                  +{subsections.length - 3} más...
                </li>
              )}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
```

- [ ] Componente ModuleCard creado

---

## TAREA 4: Crear Plantilla de Página de Sección

### Archivo: `src/components/templates/SectionTemplate.tsx`

```tsx
import { type LucideIcon } from 'lucide-react';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { PageNavigation } from '@/components/ui/PageNavigation';
import { SectionIntro } from '@/components/content';
import { cn } from '@/lib/utils';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface NavigationPage {
  title: string;
  href: string;
}

interface SectionTemplateProps {
  title: string;
  description?: string;
  icon?: LucideIcon;
  breadcrumbs: BreadcrumbItem[];
  previousPage?: NavigationPage;
  nextPage?: NavigationPage;
  children: React.ReactNode;
  className?: string;
}

export function SectionTemplate({
  title,
  description,
  icon,
  breadcrumbs,
  previousPage,
  nextPage,
  children,
  className,
}: SectionTemplateProps) {
  return (
    <div className={cn('p-6 lg:p-8', className)}>
      {/* Breadcrumbs */}
      <Breadcrumbs items={breadcrumbs} className="mb-6" />

      {/* Section Header */}
      <SectionIntro
        title={title}
        description={description}
        icon={icon}
      />

      {/* Content */}
      <div className="mt-8">
        {children}
      </div>

      {/* Page Navigation */}
      {(previousPage || nextPage) && (
        <PageNavigation
          previousPage={previousPage}
          nextPage={nextPage}
        />
      )}
    </div>
  );
}
```

- [ ] Plantilla SectionTemplate creada

---

## TAREA 5: Crear Plantilla de Página Principal de Módulo

### Archivo: `src/components/templates/ModuleTemplate.tsx`

```tsx
import Link from 'next/link';
import { type LucideIcon, ArrowRight } from 'lucide-react';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { Card, CardContent } from '@/components/ui/Card';
import { SectionIntro } from '@/components/content';
import { cn } from '@/lib/utils';

interface Subsection {
  title: string;
  description: string;
  href: string;
}

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface ModuleTemplateProps {
  title: string;
  description: string;
  icon: LucideIcon;
  breadcrumbs: BreadcrumbItem[];
  subsections: Subsection[];
  introContent?: React.ReactNode;
  className?: string;
}

export function ModuleTemplate({
  title,
  description,
  icon,
  breadcrumbs,
  subsections,
  introContent,
  className,
}: ModuleTemplateProps) {
  return (
    <div className={cn('p-6 lg:p-8', className)}>
      {/* Breadcrumbs */}
      <Breadcrumbs items={breadcrumbs} className="mb-6" />

      {/* Module Header */}
      <SectionIntro
        title={title}
        description={description}
        icon={icon}
      />

      {/* Intro Content */}
      {introContent && (
        <div className="mt-6 prose prose-gray dark:prose-invert max-w-none">
          {introContent}
        </div>
      )}

      {/* Subsections Grid */}
      <div className="mt-8">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          Contenido del módulo
        </h2>
        <div className="grid gap-4 md:grid-cols-2">
          {subsections.map((subsection, index) => (
            <Link key={subsection.href} href={subsection.href}>
              <Card className="h-full hover:shadow-md hover:border-primary-300 dark:hover:border-primary-700 transition-all group">
                <CardContent className="p-4">
                  <div className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 flex items-center justify-center text-sm font-semibold">
                      {index + 1}
                    </span>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-medium text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                        {subsection.title}
                      </h3>
                      <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                        {subsection.description}
                      </p>
                    </div>
                    <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-primary-600 dark:group-hover:text-primary-400 group-hover:translate-x-1 transition-all flex-shrink-0" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
```

- [ ] Plantilla ModuleTemplate creada

---

## TAREA 6: Crear Archivo de Exportación de Plantillas

### Archivo: `src/components/templates/index.ts`

```typescript
export { SectionTemplate } from './SectionTemplate';
export { ModuleTemplate } from './ModuleTemplate';
```

### Crear carpeta de plantillas:
```bash
mkdir -p src/components/templates
```

- [ ] Exportaciones de plantillas creadas

---

## TAREA 7: Actualizar Exportaciones de UI

### Archivo: `src/components/ui/index.ts`

```typescript
export { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from './Card';
export { Alert } from './Alert';
export { ExternalLink } from './ExternalLink';
export { Button } from './Button';
export { Accordion } from './Accordion';
export { VideoEmbed } from './VideoEmbed';
export { ImageGallery } from './ImageGallery';
export { Quiz } from './Quiz';
export { ProgressIndicator } from './ProgressIndicator';
export { Breadcrumbs } from './Breadcrumbs';
export { PageNavigation } from './PageNavigation';
export { ModuleCard } from './ModuleCard';
```

- [ ] Exportaciones de UI actualizadas

---

## TAREA 8: Crear Página de Inicio Definitiva

### Archivo: `src/app/page.tsx`

```tsx
import { Shield, DollarSign, FileText, Bug, BookOpen, Users, Award, Clock } from 'lucide-react';
import { ModuleCard } from '@/components/ui/ModuleCard';
import { Alert } from '@/components/ui/Alert';
import { Card, CardContent } from '@/components/ui/Card';

const modules = [
  {
    title: 'Seguridad de la Información',
    description: 'Aprende sobre el manejo seguro de la información y equipos de cómputo institucionales.',
    href: '/seguridad-informacion',
    icon: Shield,
    iconColor: 'text-blue-600 dark:text-blue-400',
    iconBgColor: 'bg-blue-100 dark:bg-blue-900/30',
    subsections: [
      { title: 'Manejo Correcto de Equipos de Cómputo', href: '/seguridad-informacion/manejo-equipos' },
    ],
  },
  {
    title: 'Facturación de Servicios P&P',
    description: 'Conoce los procesos de facturación de servicios de promoción y prevención en salud.',
    href: '/facturacion-pyp',
    icon: DollarSign,
    iconColor: 'text-green-600 dark:text-green-400',
    iconBgColor: 'bg-green-100 dark:bg-green-900/30',
    subsections: [
      { title: 'Planificación Familiar', href: '/facturacion-pyp/planificacion-familiar' },
      { title: 'Ruta Materno Perinatal', href: '/facturacion-pyp/ruta-materno-perinatal' },
      { title: 'Ciclos de Vida', href: '/facturacion-pyp/ciclos-vida' },
      { title: 'Vacunación', href: '/facturacion-pyp/vacunacion' },
      { title: 'Higiene Oral', href: '/facturacion-pyp/higiene-oral' },
    ],
  },
  {
    title: 'Diligenciamiento de Historias Clínicas',
    description: 'Guías y normativas para el correcto diligenciamiento de historias clínicas.',
    href: '/historias-clinicas',
    icon: FileText,
    iconColor: 'text-purple-600 dark:text-purple-400',
    iconBgColor: 'bg-purple-100 dark:bg-purple-900/30',
    subsections: [
      { title: 'Planificación Familiar', href: '/historias-clinicas/planificacion-familiar' },
      { title: 'Ruta Materno Perinatal', href: '/historias-clinicas/ruta-materno-perinatal' },
      { title: 'Ciclos de Vida', href: '/historias-clinicas/ciclos-vida' },
    ],
  },
  {
    title: 'Vigilancia Epidemiológica',
    description: 'Conceptos fundamentales y procedimientos de vigilancia epidemiológica.',
    href: '/vigilancia-epidemiologica',
    icon: Bug,
    iconColor: 'text-orange-600 dark:text-orange-400',
    iconBgColor: 'bg-orange-100 dark:bg-orange-900/30',
    subsections: [
      { title: 'Conceptos Generales', href: '/vigilancia-epidemiologica/conceptos-generales' },
      { title: 'Eventos Clave', href: '/vigilancia-epidemiologica/eventos-clave' },
    ],
  },
];

const stats = [
  { icon: BookOpen, label: 'Módulos', value: '4' },
  { icon: FileText, label: 'Lecciones', value: '11' },
  { icon: Clock, label: 'Duración estimada', value: '8 horas' },
  { icon: Award, label: 'Certificación', value: 'Incluida' },
];

export default function HomePage() {
  return (
    <div className="p-6 lg:p-8">
      {/* Hero Section */}
      <section className="text-center mb-12">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-100 dark:bg-primary-900/30 mb-6">
          <Users className="w-8 h-8 text-primary-600 dark:text-primary-400" />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
          Bienvenido al Portal de Inducción
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Este portal contiene toda la información necesaria para tu proceso de
          incorporación como personal de salud en nuestra institución.
        </p>
      </section>

      {/* Stats */}
      <section className="mb-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <Card key={stat.label} className="text-center">
                <CardContent className="p-4">
                  <Icon className="w-6 h-6 mx-auto text-primary-600 dark:text-primary-400 mb-2" />
                  <p className="text-2xl font-bold text-gray-900 dark:text-white">
                    {stat.value}
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {stat.label}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      {/* Welcome Alert */}
      <section className="mb-12 max-w-3xl mx-auto">
        <Alert variant="info" title="¡Comienza tu proceso de inducción!">
          Te recomendamos completar los módulos en orden para un mejor aprendizaje.
          Cada módulo incluye material educativo, recursos adicionales y evaluaciones
          para verificar tu comprensión.
        </Alert>
      </section>

      {/* Modules Grid */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
          Módulos de Capacitación
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          {modules.map((module) => (
            <ModuleCard
              key={module.href}
              title={module.title}
              description={module.description}
              href={module.href}
              icon={module.icon}
              iconColor={module.iconColor}
              iconBgColor={module.iconBgColor}
              subsections={module.subsections}
            />
          ))}
        </div>
      </section>

      {/* Help Section */}
      <section className="mt-12 text-center">
        <Card className="max-w-xl mx-auto">
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              ¿Necesitas ayuda?
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Si tienes dudas sobre el proceso de inducción o el contenido de los
              módulos, no dudes en contactar al departamento de capacitación.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="mailto:capacitacion@institucion.com"
                className="inline-flex items-center justify-center px-4 py-2 rounded-lg bg-primary-600 text-white hover:bg-primary-700 transition-colors"
              >
                Enviar correo
              </a>
              <a
                href="tel:+571234567890"
                className="inline-flex items-center justify-center px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
              >
                Llamar: (1) 234-5678
              </a>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
```

- [ ] Página de inicio definitiva creada

---

## TAREA 9: Crear Ejemplo de Página de Módulo

### Archivo: `src/app/seguridad-informacion/page.tsx`

```tsx
import { Shield } from 'lucide-react';
import { ModuleTemplate } from '@/components/templates';
import { Alert } from '@/components/ui';

const subsections = [
  {
    title: 'Manejo Correcto de Equipos de Cómputo',
    description: 'Aprende las mejores prácticas para el uso y cuidado de los equipos institucionales.',
    href: '/seguridad-informacion/manejo-equipos',
  },
];

export default function SeguridadInformacionPage() {
  return (
    <ModuleTemplate
      title="Seguridad de la Información"
      description="Conoce los principios fundamentales para proteger la información institucional y de los pacientes."
      icon={Shield}
      breadcrumbs={[
        { label: 'Seguridad de la Información' },
      ]}
      subsections={subsections}
      introContent={
        <>
          <p>
            La seguridad de la información es fundamental en el sector salud, donde
            manejamos datos sensibles de pacientes y procesos institucionales críticos.
          </p>
          <Alert variant="warning" title="Importante" className="mt-4">
            Todo el personal tiene la responsabilidad de proteger la información
            confidencial y seguir los protocolos de seguridad establecidos.
          </Alert>
          <h3>Objetivos de este módulo</h3>
          <ul>
            <li>Comprender la importancia de la seguridad de la información</li>
            <li>Aprender las mejores prácticas para el manejo de equipos</li>
            <li>Conocer los protocolos ante incidentes de seguridad</li>
            <li>Identificar amenazas comunes como phishing y malware</li>
          </ul>
        </>
      }
    />
  );
}
```

- [ ] Ejemplo de página de módulo creado

---

## TAREA 10: Crear Ejemplo de Página de Subsección

### Archivo: `src/app/seguridad-informacion/manejo-equipos/page.tsx`

```tsx
import { Monitor } from 'lucide-react';
import { SectionTemplate } from '@/components/templates';
import { ContentBlock } from '@/components/content';
import { Alert, Accordion, Card, CardContent } from '@/components/ui';

const faqItems = [
  {
    id: '1',
    title: '¿Qué hago si mi equipo se congela?',
    content: (
      <p>
        Primero, espera unos segundos para ver si responde. Si no, intenta cerrar
        la aplicación problemática con Ctrl+Alt+Supr. Como último recurso, mantén
        presionado el botón de encendido durante 5 segundos para forzar el apagado.
      </p>
    ),
  },
  {
    id: '2',
    title: '¿Puedo instalar programas en el equipo institucional?',
    content: (
      <p>
        No. Solo el personal de TI está autorizado para instalar software en los
        equipos institucionales. Si necesitas un programa específico, envía una
        solicitud al departamento de sistemas.
      </p>
    ),
  },
  {
    id: '3',
    title: '¿Cómo reporto un problema con mi equipo?',
    content: (
      <p>
        Ingresa al sistema de tickets de soporte o llama a la extensión de TI.
        Describe el problema con el mayor detalle posible, incluyendo el número
        de inventario del equipo.
      </p>
    ),
  },
];

export default function ManejoEquiposPage() {
  return (
    <SectionTemplate
      title="Manejo Correcto de Equipos de Cómputo"
      description="Guía completa para el uso adecuado de computadores y dispositivos institucionales."
      icon={Monitor}
      breadcrumbs={[
        { label: 'Seguridad de la Información', href: '/seguridad-informacion' },
        { label: 'Manejo de Equipos' },
      ]}
      previousPage={{
        title: 'Seguridad de la Información',
        href: '/seguridad-informacion',
      }}
      nextPage={{
        title: 'Facturación P&P',
        href: '/facturacion-pyp',
      }}
    >
      <ContentBlock>
        <h2>Introducción</h2>
        <p>
          Los equipos de cómputo son herramientas esenciales para el desarrollo de
          nuestras actividades diarias. Un uso adecuado garantiza su buen funcionamiento
          y prolonga su vida útil.
        </p>

        <Alert variant="info" title="Recuerda">
          Los equipos institucionales son para uso exclusivo de actividades laborales.
          El uso personal debe limitarse según las políticas establecidas.
        </Alert>

        <h2>Buenas prácticas</h2>

        <h3>1. Encendido y apagado</h3>
        <ul>
          <li>Espera a que el sistema operativo cargue completamente antes de abrir programas</li>
          <li>Cierra todas las aplicaciones antes de apagar el equipo</li>
          <li>Utiliza siempre la opción &quot;Apagar&quot; del sistema operativo</li>
          <li>No desconectes el equipo directamente del tomacorriente</li>
        </ul>

        <h3>2. Mantenimiento básico</h3>
        <ul>
          <li>Limpia el teclado y pantalla con productos adecuados</li>
          <li>Mantén el área de trabajo libre de líquidos y alimentos</li>
          <li>Reporta cualquier anomalía al área de soporte técnico</li>
          <li>No bloquees las ventilaciones del equipo</li>
        </ul>

        <h3>3. Seguridad</h3>
        <ul>
          <li>Bloquea tu sesión cuando te ausentes (Windows + L)</li>
          <li>No compartas tu contraseña con nadie</li>
          <li>Cierra sesión al finalizar tu jornada</li>
          <li>Reporta correos sospechosos al área de seguridad</li>
        </ul>
      </ContentBlock>

      {/* Tips Section */}
      <div className="my-8 grid gap-4 md:grid-cols-3">
        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-3xl mb-2">💡</div>
            <h4 className="font-semibold text-gray-900 dark:text-white">
              Consejo
            </h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Realiza respaldos periódicos de tu información importante.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-3xl mb-2">⚠️</div>
            <h4 className="font-semibold text-gray-900 dark:text-white">
              Advertencia
            </h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              No conectes dispositivos USB desconocidos al equipo.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-3xl mb-2">🔒</div>
            <h4 className="font-semibold text-gray-900 dark:text-white">
              Seguridad
            </h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Cambia tu contraseña cada 90 días como mínimo.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* FAQ */}
      <div className="my-8">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          Preguntas Frecuentes
        </h2>
        <Accordion items={faqItems} />
      </div>

      {/* Warning */}
      <Alert variant="danger" title="Prohibido">
        Está estrictamente prohibido intentar modificar la configuración del sistema,
        instalar software no autorizado o acceder a sitios web bloqueados mediante
        métodos alternativos.
      </Alert>
    </SectionTemplate>
  );
}
```

- [ ] Ejemplo de página de subsección creado

---

## TAREA 11: Verificación Final

### Comandos de verificación:
```bash
npm run build
npm run dev
```

### Checklist de verificación Página de Inicio:
- [ ] Hero section con título y descripción visible
- [ ] Estadísticas (4 cards) visibles
- [ ] Alert de bienvenida visible
- [ ] 4 ModuleCards con subsecciones preview
- [ ] Sección de ayuda con botones de contacto
- [ ] Todos los links funcionan correctamente

### Checklist de verificación Breadcrumbs:
- [ ] Icono de home visible
- [ ] Links intermedios clickeables
- [ ] Último item (actual) en negrita
- [ ] Separadores visibles entre items

### Checklist de verificación PageNavigation:
- [ ] Botón "Anterior" visible cuando aplica
- [ ] Botón "Siguiente" visible cuando aplica
- [ ] Hover effects funcionan
- [ ] Links navegan correctamente

### Checklist de verificación ModuleTemplate:
- [ ] Breadcrumbs correctos
- [ ] Título e icono del módulo visibles
- [ ] Descripción visible
- [ ] Contenido introductorio visible
- [ ] Grid de subsecciones con numeración
- [ ] Links de subsecciones funcionan

### Checklist de verificación SectionTemplate:
- [ ] Breadcrumbs con link al módulo padre
- [ ] Título e icono de la sección
- [ ] Contenido renderiza correctamente
- [ ] Navegación anterior/siguiente funciona

---

## Entregable de la Fase 6

✅ Componentes de navegación:
  - Breadcrumbs
  - PageNavigation

✅ Componente ModuleCard para página de inicio

✅ Plantillas reutilizables:
  - ModuleTemplate (para páginas principales de módulo)
  - SectionTemplate (para subsecciones)

✅ Página de inicio definitiva con:
  - Hero section
  - Estadísticas
  - Grid de módulos con preview de subsecciones
  - Sección de ayuda

✅ Ejemplos de implementación:
  - Página de módulo (Seguridad de la Información)
  - Página de subsección (Manejo de Equipos)

---

## Siguiente Fase

➡️ **FASE 7**: Contenido - Seguridad de la Información - Ver archivo `FASE-07-seguridad-informacion.md`

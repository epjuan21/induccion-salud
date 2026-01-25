# FASE 4: Sistema de Diseño y Componentes UI Base

## Resumen
| Campo | Valor |
|-------|-------|
| **Fase** | 4 de 13 |
| **Nombre** | Sistema de Diseño y Componentes UI Base |
| **Objetivo** | Biblioteca de componentes reutilizables con estilos consistentes |
| **Prerequisitos** | Fase 3 completada |

---

## Instrucciones para Claude Code

> **IMPORTANTE**: Esta fase establece el sistema de diseño y los componentes UI fundamentales.

---

## TAREA 1: Configurar Paleta de Colores en Tailwind

### Archivo: `tailwind.config.ts`

```typescript
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Colores primarios - Azul salud
        primary: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
          950: '#172554',
        },
        // Colores secundarios - Verde médico
        secondary: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
          950: '#052e16',
        },
        // Colores de acento
        accent: {
          info: '#3b82f6',
          success: '#22c55e',
          warning: '#f59e0b',
          danger: '#ef4444',
          tip: '#8b5cf6',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.3s ease-in-out',
        'slide-in': 'slideIn 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideIn: {
          '0%': { transform: 'translateY(-10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
```

- [ ] Tailwind configurado con paleta de colores

---

## TAREA 2: Crear Componente Card

### Archivo: `src/components/ui/Card.tsx`

```tsx
import { cn } from '@/lib/utils';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'bordered' | 'elevated';
  padding?: 'none' | 'sm' | 'md' | 'lg';
}

export function Card({
  children,
  className,
  variant = 'default',
  padding = 'md',
}: CardProps) {
  return (
    <div
      className={cn(
        'rounded-xl bg-white dark:bg-gray-800 transition-colors',
        {
          'border border-gray-200 dark:border-gray-700': variant === 'default' || variant === 'bordered',
          'shadow-lg': variant === 'elevated',
          'p-0': padding === 'none',
          'p-4': padding === 'sm',
          'p-6': padding === 'md',
          'p-8': padding === 'lg',
        },
        className
      )}
    >
      {children}
    </div>
  );
}

interface CardHeaderProps {
  children: React.ReactNode;
  className?: string;
}

export function CardHeader({ children, className }: CardHeaderProps) {
  return (
    <div className={cn('mb-4', className)}>
      {children}
    </div>
  );
}

interface CardTitleProps {
  children: React.ReactNode;
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4';
}

export function CardTitle({ children, className, as: Tag = 'h3' }: CardTitleProps) {
  return (
    <Tag className={cn('text-xl font-semibold text-gray-900 dark:text-white', className)}>
      {children}
    </Tag>
  );
}

interface CardDescriptionProps {
  children: React.ReactNode;
  className?: string;
}

export function CardDescription({ children, className }: CardDescriptionProps) {
  return (
    <p className={cn('text-sm text-gray-600 dark:text-gray-400 mt-1', className)}>
      {children}
    </p>
  );
}

interface CardContentProps {
  children: React.ReactNode;
  className?: string;
}

export function CardContent({ children, className }: CardContentProps) {
  return (
    <div className={cn('text-gray-700 dark:text-gray-300', className)}>
      {children}
    </div>
  );
}

interface CardFooterProps {
  children: React.ReactNode;
  className?: string;
}

export function CardFooter({ children, className }: CardFooterProps) {
  return (
    <div className={cn('mt-4 pt-4 border-t border-gray-200 dark:border-gray-700', className)}>
      {children}
    </div>
  );
}
```

- [ ] Componente Card creado

---

## TAREA 3: Crear Componente Alert

### Archivo: `src/components/ui/Alert.tsx`

```tsx
import { cn } from '@/lib/utils';
import {
  Info,
  AlertTriangle,
  CheckCircle,
  XCircle,
  Lightbulb,
  type LucideIcon,
} from 'lucide-react';

type AlertVariant = 'info' | 'warning' | 'success' | 'danger' | 'tip';

interface AlertProps {
  children: React.ReactNode;
  variant?: AlertVariant;
  title?: string;
  className?: string;
  icon?: LucideIcon;
}

const variantStyles: Record<AlertVariant, {
  container: string;
  icon: string;
  title: string;
  defaultIcon: LucideIcon;
}> = {
  info: {
    container: 'bg-blue-50 border-blue-200 dark:bg-blue-900/20 dark:border-blue-800',
    icon: 'text-blue-600 dark:text-blue-400',
    title: 'text-blue-800 dark:text-blue-300',
    defaultIcon: Info,
  },
  warning: {
    container: 'bg-yellow-50 border-yellow-200 dark:bg-yellow-900/20 dark:border-yellow-800',
    icon: 'text-yellow-600 dark:text-yellow-400',
    title: 'text-yellow-800 dark:text-yellow-300',
    defaultIcon: AlertTriangle,
  },
  success: {
    container: 'bg-green-50 border-green-200 dark:bg-green-900/20 dark:border-green-800',
    icon: 'text-green-600 dark:text-green-400',
    title: 'text-green-800 dark:text-green-300',
    defaultIcon: CheckCircle,
  },
  danger: {
    container: 'bg-red-50 border-red-200 dark:bg-red-900/20 dark:border-red-800',
    icon: 'text-red-600 dark:text-red-400',
    title: 'text-red-800 dark:text-red-300',
    defaultIcon: XCircle,
  },
  tip: {
    container: 'bg-purple-50 border-purple-200 dark:bg-purple-900/20 dark:border-purple-800',
    icon: 'text-purple-600 dark:text-purple-400',
    title: 'text-purple-800 dark:text-purple-300',
    defaultIcon: Lightbulb,
  },
};

export function Alert({
  children,
  variant = 'info',
  title,
  className,
  icon: CustomIcon,
}: AlertProps) {
  const styles = variantStyles[variant];
  const Icon = CustomIcon || styles.defaultIcon;

  return (
    <div
      className={cn(
        'flex gap-3 p-4 rounded-lg border',
        styles.container,
        className
      )}
      role="alert"
    >
      <Icon className={cn('w-5 h-5 flex-shrink-0 mt-0.5', styles.icon)} />
      <div className="flex-1 min-w-0">
        {title && (
          <h4 className={cn('font-semibold mb-1', styles.title)}>
            {title}
          </h4>
        )}
        <div className="text-sm text-gray-700 dark:text-gray-300">
          {children}
        </div>
      </div>
    </div>
  );
}
```

- [ ] Componente Alert creado

---

## TAREA 4: Crear Componente ExternalLink

### Archivo: `src/components/ui/ExternalLink.tsx`

```tsx
import { ExternalLink as ExternalLinkIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ExternalLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  showIcon?: boolean;
}

export function ExternalLink({
  href,
  children,
  className,
  showIcon = true,
}: ExternalLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        'inline-flex items-center gap-1 text-primary-600 dark:text-primary-400',
        'hover:text-primary-700 dark:hover:text-primary-300',
        'underline underline-offset-2 decoration-primary-300 dark:decoration-primary-700',
        'hover:decoration-primary-500 dark:hover:decoration-primary-500',
        'transition-colors',
        className
      )}
    >
      {children}
      {showIcon && (
        <ExternalLinkIcon className="w-3.5 h-3.5 flex-shrink-0" />
      )}
    </a>
  );
}
```

- [ ] Componente ExternalLink creado

---

## TAREA 5: Crear Componente SectionIntro

### Archivo: `src/components/content/SectionIntro.tsx`

```tsx
import { cn } from '@/lib/utils';
import { type LucideIcon } from 'lucide-react';

interface SectionIntroProps {
  title: string;
  description?: string;
  icon?: LucideIcon;
  className?: string;
  children?: React.ReactNode;
}

export function SectionIntro({
  title,
  description,
  icon: Icon,
  className,
  children,
}: SectionIntroProps) {
  return (
    <div className={cn('mb-8', className)}>
      <div className="flex items-start gap-4">
        {Icon && (
          <div className="flex-shrink-0 p-3 rounded-xl bg-primary-100 dark:bg-primary-900/30">
            <Icon className="w-8 h-8 text-primary-600 dark:text-primary-400" />
          </div>
        )}
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            {title}
          </h1>
          {description && (
            <p className="mt-2 text-lg text-gray-600 dark:text-gray-400">
              {description}
            </p>
          )}
        </div>
      </div>
      {children && (
        <div className="mt-6">
          {children}
        </div>
      )}
    </div>
  );
}
```

- [ ] Componente SectionIntro creado

---

## TAREA 6: Crear Componente ContentBlock

### Archivo: `src/components/content/ContentBlock.tsx`

```tsx
import { cn } from '@/lib/utils';

interface ContentBlockProps {
  children: React.ReactNode;
  className?: string;
}

export function ContentBlock({ children, className }: ContentBlockProps) {
  return (
    <div
      className={cn(
        'prose prose-gray dark:prose-invert max-w-none',
        'prose-headings:text-gray-900 dark:prose-headings:text-white',
        'prose-p:text-gray-700 dark:prose-p:text-gray-300',
        'prose-a:text-primary-600 dark:prose-a:text-primary-400',
        'prose-strong:text-gray-900 dark:prose-strong:text-white',
        'prose-ul:text-gray-700 dark:prose-ul:text-gray-300',
        'prose-ol:text-gray-700 dark:prose-ol:text-gray-300',
        'prose-li:marker:text-gray-400 dark:prose-li:marker:text-gray-500',
        className
      )}
    >
      {children}
    </div>
  );
}
```

### Instalar plugin de typography:
```bash
npm install -D @tailwindcss/typography
```

### Actualizar `tailwind.config.ts`:
Agregar el plugin al final del archivo:
```typescript
plugins: [require('@tailwindcss/typography')],
```

- [ ] Componente ContentBlock creado
- [ ] Plugin typography instalado y configurado

---

## TAREA 7: Crear Componente Button

### Archivo: `src/components/ui/Button.tsx`

```tsx
import { forwardRef } from 'react';
import { cn } from '@/lib/utils';
import { Loader2, type LucideIcon } from 'lucide-react';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  isLoading?: boolean;
  leftIcon?: LucideIcon;
  rightIcon?: LucideIcon;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary: 'bg-primary-600 text-white hover:bg-primary-700 focus:ring-primary-500',
  secondary: 'bg-secondary-600 text-white hover:bg-secondary-700 focus:ring-secondary-500',
  outline: 'border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 focus:ring-gray-500',
  ghost: 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 focus:ring-gray-500',
  danger: 'bg-red-600 text-white hover:bg-red-700 focus:ring-red-500',
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-4 py-2 text-sm',
  lg: 'px-6 py-3 text-base',
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = 'primary',
      size = 'md',
      isLoading = false,
      leftIcon: LeftIcon,
      rightIcon: RightIcon,
      disabled,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        className={cn(
          'inline-flex items-center justify-center gap-2 font-medium rounded-lg',
          'transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2',
          'disabled:opacity-50 disabled:cursor-not-allowed',
          variantStyles[variant],
          sizeStyles[size],
          className
        )}
        disabled={disabled || isLoading}
        {...props}
      >
        {isLoading ? (
          <Loader2 className="w-4 h-4 animate-spin" />
        ) : (
          LeftIcon && <LeftIcon className="w-4 h-4" />
        )}
        {children}
        {!isLoading && RightIcon && <RightIcon className="w-4 h-4" />}
      </button>
    );
  }
);

Button.displayName = 'Button';
```

- [ ] Componente Button creado

---

## TAREA 8: Crear Archivo de Exportación de Componentes UI

### Archivo: `src/components/ui/index.ts`

```typescript
export { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from './Card';
export { Alert } from './Alert';
export { ExternalLink } from './ExternalLink';
export { Button } from './Button';
```

- [ ] Exportaciones de UI creadas

---

## TAREA 9: Crear Archivo de Exportación de Componentes Content

### Archivo: `src/components/content/index.ts`

```typescript
export { SectionIntro } from './SectionIntro';
export { ContentBlock } from './ContentBlock';
```

- [ ] Exportaciones de Content creadas

---

## TAREA 10: Crear Página de Demostración de Componentes

### Archivo: `src/app/page.tsx` (actualizar)

```tsx
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  Alert,
  ExternalLink,
  Button,
} from '@/components/ui';
import { SectionIntro } from '@/components/content';
import { Shield, DollarSign, FileText, Bug, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const modules = [
  {
    title: 'Seguridad de la Información',
    description: 'Aprende sobre el manejo seguro de la información y equipos de cómputo.',
    icon: Shield,
    href: '/seguridad-informacion',
    color: 'text-blue-600 dark:text-blue-400',
    bgColor: 'bg-blue-100 dark:bg-blue-900/30',
  },
  {
    title: 'Facturación P&P',
    description: 'Conoce los procesos de facturación de servicios de promoción y prevención.',
    icon: DollarSign,
    href: '/facturacion-pyp',
    color: 'text-green-600 dark:text-green-400',
    bgColor: 'bg-green-100 dark:bg-green-900/30',
  },
  {
    title: 'Historias Clínicas',
    description: 'Guías para el correcto diligenciamiento de historias clínicas.',
    icon: FileText,
    href: '/historias-clinicas',
    color: 'text-purple-600 dark:text-purple-400',
    bgColor: 'bg-purple-100 dark:bg-purple-900/30',
  },
  {
    title: 'Vigilancia Epidemiológica',
    description: 'Conceptos y procedimientos de vigilancia epidemiológica.',
    icon: Bug,
    href: '/vigilancia-epidemiologica',
    color: 'text-orange-600 dark:text-orange-400',
    bgColor: 'bg-orange-100 dark:bg-orange-900/30',
  },
];

export default function HomePage() {
  return (
    <div className="p-6 lg:p-8">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Bienvenido al Portal de Inducción
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Este portal contiene toda la información necesaria para tu proceso de
          incorporación como personal de salud.
        </p>
      </div>

      {/* Alert de bienvenida */}
      <div className="max-w-3xl mx-auto mb-12">
        <Alert variant="info" title="¡Comienza tu inducción!">
          Explora cada módulo en orden para completar tu proceso de inducción.
          Cada sección incluye material educativo, videos y evaluaciones.
        </Alert>
      </div>

      {/* Módulos */}
      <div className="grid gap-6 md:grid-cols-2 max-w-4xl mx-auto">
        {modules.map((module) => {
          const Icon = module.icon;
          return (
            <Link key={module.href} href={module.href}>
              <Card
                className="h-full hover:shadow-lg transition-shadow cursor-pointer group"
                variant="bordered"
              >
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className={`p-3 rounded-xl ${module.bgColor}`}>
                      <Icon className={`w-6 h-6 ${module.color}`} />
                    </div>
                    <div>
                      <CardTitle className="group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                        {module.title}
                      </CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-400">
                    {module.description}
                  </p>
                  <div className="mt-4 flex items-center text-primary-600 dark:text-primary-400 font-medium">
                    <span>Comenzar</span>
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          );
        })}
      </div>

      {/* Sección de ayuda */}
      <div className="mt-12 text-center">
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          ¿Necesitas ayuda? Contacta al departamento de capacitación.
        </p>
        <ExternalLink href="mailto:capacitacion@institucion.com">
          capacitacion@institucion.com
        </ExternalLink>
      </div>
    </div>
  );
}
```

- [ ] Página de inicio actualizada con componentes

---

## TAREA 11: Verificación Final

### Comandos de verificación:
```bash
npm run build
npm run dev
```

### Checklist de verificación:
- [ ] Página de inicio muestra los 4 módulos como cards
- [ ] Cards tienen hover effect con sombra
- [ ] Alert de bienvenida visible con estilo info
- [ ] ExternalLink muestra icono de enlace externo
- [ ] Todos los colores se ven correctamente en modo claro
- [ ] Todos los colores se ven correctamente en modo oscuro
- [ ] Tipografía legible y consistente
- [ ] Sin errores en consola
- [ ] Build exitoso sin warnings

### Verificar cada variante de Alert:
Crear temporalmente alerts de prueba para verificar:
- [ ] Alert info (azul)
- [ ] Alert warning (amarillo)
- [ ] Alert success (verde)
- [ ] Alert danger (rojo)
- [ ] Alert tip (morado)

---

## Entregable de la Fase 4

✅ Sistema de colores definido en Tailwind:
  - Colores primarios (azul)
  - Colores secundarios (verde)
  - Colores de acento para alertas

✅ Componentes UI creados y documentados:
  - Card (con Header, Title, Description, Content, Footer)
  - Alert (5 variantes: info, warning, success, danger, tip)
  - ExternalLink (con icono indicador)
  - Button (con variantes y estados)

✅ Componentes Content creados:
  - SectionIntro
  - ContentBlock (con typography plugin)

✅ Página de inicio actualizada como demostración

---

## Siguiente Fase

➡️ **FASE 5**: Componentes Interactivos - Ver archivo `FASE-05-componentes-interactivos.md`

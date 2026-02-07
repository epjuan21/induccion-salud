import { cn } from '@/lib/utils';

interface SectionBackgroundProps {
  children: React.ReactNode;
  variant?: 'default' | 'muted' | 'accent';
  spacing?: 'normal' | 'large';
  className?: string;
}

/**
 * Wrapper para secciones con fondo alternado (tipo blog)
 * Permite alternar fondos entre secciones para mejorar la separación visual
 */
export function SectionBackground({
  children,
  variant = 'default',
  spacing = 'normal',
  className
}: SectionBackgroundProps) {
  return (
    <div
      className={cn(
        // Spacing vertical
        spacing === 'normal' && 'py-12 lg:py-16',
        spacing === 'large' && 'py-16 lg:py-24',
        // Variants de fondo
        variant === 'default' && 'bg-white dark:bg-gray-950',
        variant === 'muted' && 'bg-gray-50 dark:bg-gray-900',
        variant === 'accent' && 'bg-blue-50/30 dark:bg-blue-950/20',
        className
      )}
    >
      {children}
    </div>
  );
}

SectionBackground.displayName = 'SectionBackground';

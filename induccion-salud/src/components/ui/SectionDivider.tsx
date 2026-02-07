import { cn } from '@/lib/utils';
import { type LucideIcon } from 'lucide-react';

interface SectionDividerProps {
  variant?: 'line' | 'space' | 'decorative';
  icon?: LucideIcon;
  className?: string;
}

/**
 * Separador visual entre secciones mayores
 *
 * @param variant - 'line' para línea horizontal, 'space' para espacio vacío, 'decorative' para línea con icono
 * @param icon - Icono opcional para variant 'decorative'
 */
export function SectionDivider({
  variant = 'line',
  icon: Icon,
  className
}: SectionDividerProps) {
  if (variant === 'space') {
    return <div className={cn('h-16 lg:h-24', className)} />;
  }

  if (variant === 'decorative' && Icon) {
    return (
      <div className={cn('flex items-center justify-center py-12', className)}>
        <div className="flex items-center gap-4 text-gray-300 dark:text-gray-700">
          <div className="h-px w-16 bg-current" />
          <Icon className="w-5 h-5" />
          <div className="h-px w-16 bg-current" />
        </div>
      </div>
    );
  }

  return (
    <div
      className={cn(
        'border-t border-gray-200 dark:border-gray-800 my-16',
        className
      )}
    />
  );
}

SectionDivider.displayName = 'SectionDivider';

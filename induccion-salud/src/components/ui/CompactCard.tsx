import { cn } from '@/lib/utils';

interface CompactCardProps {
  children: React.ReactNode;
  variant?: 'default' | 'bordered' | 'highlighted';
  className?: string;
}

/**
 * Cards pequeñas y compactas para datos inline con el texto
 * Diseñadas para fluir con el contenido tipo blog
 */
export function CompactCard({
  children,
  variant = 'default',
  className
}: CompactCardProps) {
  return (
    <div
      className={cn(
        'rounded-lg p-4 transition-colors',
        variant === 'default' &&
          'bg-gray-50 dark:bg-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800',
        variant === 'bordered' &&
          'border-2 border-gray-200 dark:border-gray-700 hover:border-primary-500',
        variant === 'highlighted' &&
          'bg-blue-50 dark:bg-blue-950/30 border-l-4 border-blue-500',
        className
      )}
    >
      {children}
    </div>
  );
}

CompactCard.displayName = 'CompactCard';

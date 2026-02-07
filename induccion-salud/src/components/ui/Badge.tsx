import { cn } from '@/lib/utils';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'blue' | 'purple' | 'green' | 'orange' | 'gray';
  size?: 'sm' | 'md';
  className?: string;
}

export function Badge({
  children,
  variant = 'blue',
  size = 'md',
  className
}: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center font-medium rounded-full',
        // Tamaños
        size === 'sm' && 'px-2.5 py-0.5 text-xs',
        size === 'md' && 'px-3 py-1 text-sm',
        // Variantes con colores sutiles
        variant === 'blue' && 'bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300',
        variant === 'purple' && 'bg-purple-50 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300',
        variant === 'green' && 'bg-green-50 text-green-700 dark:bg-green-900/30 dark:text-green-300',
        variant === 'orange' && 'bg-orange-50 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300',
        variant === 'gray' && 'bg-gray-50 text-gray-700 dark:bg-gray-800 dark:text-gray-300',
        className
      )}
    >
      {children}
    </span>
  );
}

Badge.displayName = 'Badge';

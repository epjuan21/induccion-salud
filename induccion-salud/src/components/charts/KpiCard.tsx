import { type LucideIcon } from 'lucide-react';
import { TrendingUp, TrendingDown, Minus } from 'lucide-react';
import { Card } from '@/components/ui/Card';
import { cn } from '@/lib/utils';

interface KpiCardProps {
  /** Etiqueta del indicador */
  label: string;
  /** Valor principal a destacar */
  value: string | number;
  /** Icono representativo */
  icon?: LucideIcon;
  /** Color de acento del icono (clases de Tailwind) */
  iconColor?: string;
  /** Fondo del icono (clases de Tailwind) */
  iconBgColor?: string;
  /** Texto descriptivo o de contexto bajo el valor */
  helpText?: string;
  /** Variación respecto a un período anterior (ej. "+12%") */
  trend?: {
    value: string;
    direction: 'up' | 'down' | 'neutral';
  };
  className?: string;
}

/**
 * Tarjeta de indicador clave (KPI) para resaltar una métrica.
 */
export function KpiCard({
  label,
  value,
  icon: Icon,
  iconColor = 'text-primary-600 dark:text-primary-400',
  iconBgColor = 'bg-primary-100 dark:bg-primary-900/30',
  helpText,
  trend,
  className,
}: KpiCardProps) {
  const TrendIcon =
    trend?.direction === 'up'
      ? TrendingUp
      : trend?.direction === 'down'
        ? TrendingDown
        : Minus;

  const trendColor =
    trend?.direction === 'up'
      ? 'text-green-600 dark:text-green-400'
      : trend?.direction === 'down'
        ? 'text-red-600 dark:text-red-400'
        : 'text-gray-500 dark:text-gray-400';

  return (
    <Card className={cn('p-5', className)} padding="none">
      <div className="flex items-start justify-between">
        <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
          {label}
        </p>
        {Icon && (
          <span
            className={cn(
              'inline-flex items-center justify-center w-9 h-9 rounded-lg shrink-0',
              iconBgColor
            )}
          >
            <Icon className={cn('w-5 h-5', iconColor)} />
          </span>
        )}
      </div>
      <p className="mt-2 text-3xl font-bold text-gray-900 dark:text-white">
        {value}
      </p>
      <div className="mt-1 flex items-center gap-2">
        {trend && (
          <span className={cn('inline-flex items-center gap-1 text-sm font-medium', trendColor)}>
            <TrendIcon className="w-4 h-4" />
            {trend.value}
          </span>
        )}
        {helpText && (
          <span className="text-sm text-gray-500 dark:text-gray-400">{helpText}</span>
        )}
      </div>
    </Card>
  );
}

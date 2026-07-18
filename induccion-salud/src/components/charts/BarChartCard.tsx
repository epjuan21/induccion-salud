'use client';

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';
import { Card } from '@/components/ui/Card';
import { cn } from '@/lib/utils';
import { ChartCanvas } from './ChartCanvas';

export interface ChartSeries {
  /** Clave del campo en los datos */
  dataKey: string;
  /** Nombre legible para la leyenda */
  name?: string;
  /** Color en formato CSS (hex, rgb, var) */
  color?: string;
}

interface BarChartCardProps {
  /** Título del gráfico */
  title?: string;
  /** Descripción opcional bajo el título */
  description?: string;
  /** Datos a graficar */
  data: Array<Record<string, string | number>>;
  /** Clave del eje X (categorías) */
  xKey: string;
  /** Series (barras) a representar */
  series: ChartSeries[];
  /** Altura del gráfico en píxeles */
  height?: number;
  /** Mostrar leyenda */
  showLegend?: boolean;
  className?: string;
}

const DEFAULT_COLORS = ['#2563eb', '#16a34a', '#f59e0b', '#8b5cf6', '#ef4444'];

/**
 * Gráfico de barras reutilizable basado en Recharts.
 * Responsivo y compatible con el modo oscuro.
 */
export function BarChartCard({
  title,
  description,
  data,
  xKey,
  series,
  height = 320,
  showLegend = true,
  className,
}: BarChartCardProps) {
  return (
    <Card className={cn('p-4 sm:p-6', className)} padding="none">
      {title && (
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          {title}
        </h3>
      )}
      {description && (
        <p className="mt-1 mb-4 text-sm text-gray-600 dark:text-gray-400">
          {description}
        </p>
      )}
      <ChartCanvas height={height}>
          <BarChart data={data} margin={{ top: 8, right: 8, left: -16, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="currentColor" className="text-gray-200 dark:text-gray-700" />
            <XAxis
              dataKey={xKey}
              tick={{ fontSize: 12 }}
              stroke="currentColor"
              className="text-gray-500 dark:text-gray-400"
            />
            <YAxis
              tick={{ fontSize: 12 }}
              stroke="currentColor"
              className="text-gray-500 dark:text-gray-400"
            />
            <Tooltip
              contentStyle={{
                borderRadius: 8,
                border: '1px solid rgb(229 231 235)',
                fontSize: 13,
              }}
            />
            {showLegend && <Legend wrapperStyle={{ fontSize: 13 }} />}
            {series.map((s, i) => (
              <Bar
                key={s.dataKey}
                dataKey={s.dataKey}
                name={s.name ?? s.dataKey}
                fill={s.color ?? DEFAULT_COLORS[i % DEFAULT_COLORS.length]}
                radius={[4, 4, 0, 0]}
              />
            ))}
          </BarChart>
      </ChartCanvas>
    </Card>
  );
}

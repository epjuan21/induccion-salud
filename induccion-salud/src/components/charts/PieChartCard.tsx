'use client';

import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
} from 'recharts';
import { Card } from '@/components/ui/Card';
import { cn } from '@/lib/utils';
import { ChartCanvas } from './ChartCanvas';

export interface PieDatum {
  /** Etiqueta del segmento */
  name: string;
  /** Valor numérico del segmento */
  value: number;
  /** Color opcional del segmento */
  color?: string;
}

interface PieChartCardProps {
  /** Título del gráfico */
  title?: string;
  /** Descripción opcional bajo el título */
  description?: string;
  /** Datos a graficar */
  data: PieDatum[];
  /** Altura del gráfico en píxeles */
  height?: number;
  /** Mostrar leyenda */
  showLegend?: boolean;
  /** Renderizar como dona (con hueco central) */
  donut?: boolean;
  className?: string;
}

const DEFAULT_COLORS = [
  '#2563eb',
  '#16a34a',
  '#f59e0b',
  '#8b5cf6',
  '#ef4444',
  '#06b6d4',
  '#ec4899',
];

/**
 * Gráfico circular (pie o dona) reutilizable basado en Recharts.
 * Responsivo y compatible con el modo oscuro.
 */
export function PieChartCard({
  title,
  description,
  data,
  height = 320,
  showLegend = true,
  donut = false,
  className,
}: PieChartCardProps) {
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
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              innerRadius={donut ? '55%' : 0}
              outerRadius="80%"
              paddingAngle={donut ? 2 : 0}
              label={({ name, percent }) =>
                `${name}: ${((percent ?? 0) * 100).toFixed(0)}%`
              }
              labelLine={false}
            >
              {data.map((entry, i) => (
                <Cell
                  key={entry.name}
                  fill={entry.color ?? DEFAULT_COLORS[i % DEFAULT_COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip
              contentStyle={{
                borderRadius: 8,
                border: '1px solid rgb(229 231 235)',
                fontSize: 13,
              }}
            />
            {showLegend && <Legend wrapperStyle={{ fontSize: 13 }} />}
          </PieChart>
      </ChartCanvas>
    </Card>
  );
}

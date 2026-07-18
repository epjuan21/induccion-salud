'use client';

import { useEffect, useState } from 'react';
import { ResponsiveContainer } from 'recharts';

interface ChartCanvasProps {
  /** Altura del área del gráfico en píxeles */
  height: number;
  /** Elemento de gráfico de Recharts a renderizar */
  children: React.ReactElement;
}

/**
 * Contenedor responsivo que solo monta el gráfico de Recharts en el cliente.
 * Evita las advertencias de dimensiones (-1) durante el prerender estático,
 * mostrando un espacio reservado de la misma altura hasta la hidratación.
 */
export function ChartCanvas({ height, children }: ChartCanvasProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div style={{ width: '100%', height }}>
      {mounted && (
        <ResponsiveContainer width="100%" height="100%">
          {children}
        </ResponsiveContainer>
      )}
    </div>
  );
}

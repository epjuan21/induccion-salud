import { BarChart3, AlertTriangle } from 'lucide-react';
import { Card } from '@/components/ui/Card';
import { cn } from '@/lib/utils';

interface PowerBIEmbedProps {
  /**
   * URL de inserción de Power BI.
   * Usa el enlace generado en Power BI mediante "Publicar en la web" o
   * "Insertar > Sitio web o portal" (dominio app.powerbi.com).
   */
  src?: string;
  /** Título accesible del reporte (atributo title del iframe) */
  title: string;
  /** Relación de aspecto del contenedor */
  aspectRatio?: '16/9' | '4/3' | '1/1';
  /** Altura fija opcional en píxeles (anula aspectRatio) */
  height?: number;
  className?: string;
}

const ALLOWED_HOSTS = ['app.powerbi.com', 'playground.powerbi.com'];

/**
 * Valida que la URL pertenezca a un dominio autorizado de Power BI
 * para evitar incrustar contenido de orígenes no confiables.
 */
function isAllowedPowerBIUrl(src: string): boolean {
  try {
    const url = new URL(src);
    return url.protocol === 'https:' && ALLOWED_HOSTS.includes(url.hostname);
  } catch {
    return false;
  }
}

/**
 * Inserta un reporte de Power BI mediante un iframe seguro.
 * Solo admite URLs de dominios autorizados de Power BI.
 */
export function PowerBIEmbed({
  src,
  title,
  aspectRatio = '16/9',
  height,
  className,
}: PowerBIEmbedProps) {
  const hasValidUrl = !!src && isAllowedPowerBIUrl(src);

  const containerStyle = height
    ? { height }
    : { aspectRatio };

  // Estado vacío / placeholder cuando aún no hay URL configurada
  if (!hasValidUrl) {
    return (
      <Card
        className={cn(
          'flex flex-col items-center justify-center gap-3 border-dashed text-center',
          className
        )}
        padding="none"
      >
        <div
          className="flex w-full flex-col items-center justify-center gap-3 p-8"
          style={containerStyle}
        >
          {src ? (
            <>
              <AlertTriangle className="h-10 w-10 text-amber-500" />
              <p className="font-medium text-gray-900 dark:text-white">
                URL de Power BI no válida
              </p>
              <p className="max-w-md text-sm text-gray-600 dark:text-gray-400">
                Solo se permiten enlaces de los dominios autorizados
                ({ALLOWED_HOSTS.join(', ')}). Verifica el enlace de inserción.
              </p>
            </>
          ) : (
            <>
              <BarChart3 className="h-10 w-10 text-gray-400" />
              <p className="font-medium text-gray-900 dark:text-white">
                Reporte de Power BI pendiente de configurar
              </p>
              <p className="max-w-md text-sm text-gray-600 dark:text-gray-400">
                Pega la URL de inserción de tu reporte en la propiedad{' '}
                <code className="rounded bg-gray-100 px-1 py-0.5 text-xs dark:bg-gray-700">
                  src
                </code>{' '}
                del componente <code className="rounded bg-gray-100 px-1 py-0.5 text-xs dark:bg-gray-700">PowerBIEmbed</code>.
              </p>
            </>
          )}
        </div>
      </Card>
    );
  }

  return (
    <Card className={cn('overflow-hidden', className)} padding="none">
      <div style={containerStyle} className="w-full">
        <iframe
          title={title}
          src={src}
          className="h-full w-full border-0"
          allowFullScreen
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
        />
      </div>
    </Card>
  );
}

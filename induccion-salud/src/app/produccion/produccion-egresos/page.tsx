import { BarChart3 } from 'lucide-react';
import { SectionTemplate } from '@/components/templates';
import { ArticleContainer, SectionBackground } from '@/components/layout';
import { PowerBIEmbed } from '@/components/charts';

// URL de inserción del reporte de Producción Egresos en Power BI (dominio app.powerbi.com).
const PRODUCCION_EGRESOS_REPORT_URL = 'https://app.powerbi.com/view?r=eyJrIjoiYmQ0NWU0OGYtYmY5OC00Y2NmLTliZDgtZjljMjlkOTRjOTE4IiwidCI6Ijk5ZTFlNzIxLTcxODQtNDk4ZS04YWZmLWIyYWQ0ZTUzYzFjMiIsImMiOjR9&embedImagePlaceholder=true';

export default function ProduccionEgresosPage() {
  return (
    <SectionTemplate
      title="Producción Egresos"
      description="Reporte de producción de egresos."
      icon={BarChart3}
      breadcrumbs={[
        { label: 'Producción', href: '/produccion' },
        { label: 'Producción Egresos' },
      ]}
    >
      <SectionBackground variant="default">
        <ArticleContainer maxWidth="wide" className="max-w-none">
          <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
            Tablero interactivo con la producción de egresos. Puedes filtrar,
            explorar y navegar el reporte completo sin salir del portal.
          </p>

          {PRODUCCION_EGRESOS_REPORT_URL ? (
            <div className="mx-auto w-full max-w-[1024px]">
              <PowerBIEmbed
                src={PRODUCCION_EGRESOS_REPORT_URL}
                title="Reporte de producción de egresos"
                aspectRatio="16/9"
              />
            </div>
          ) : (
            <div className="mx-auto w-full max-w-[1024px] flex items-center justify-center rounded-xl border-2 border-dashed border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800/50 py-16">
              <p className="text-sm text-gray-400 dark:text-gray-500">
                Reporte de Power BI pendiente de configuración.
                Reemplaza <code className="font-mono">PRODUCCION_EGRESOS_REPORT_URL</code> con la URL de inserción.
              </p>
            </div>
          )}
        </ArticleContainer>
      </SectionBackground>
    </SectionTemplate>
  );
}
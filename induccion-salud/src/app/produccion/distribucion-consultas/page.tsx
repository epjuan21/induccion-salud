import { ChartNoAxesCombined } from 'lucide-react';
import { SectionTemplate } from '@/components/templates';
import { ArticleContainer, SectionBackground } from '@/components/layout';
import { PowerBIEmbed } from '@/components/charts';

// URL de inserción del reporte de Distribución Consultas en Power BI (dominio app.powerbi.com).
const DISTRIBUCION_CONSULTAS_REPORT_URL = 'https://app.powerbi.com/view?r=eyJrIjoiYTYzNWM2OGEtNzgyYS00ODE5LWIyNTMtMGU2MmY1Yjc1NThjIiwidCI6Ijk5ZTFlNzIxLTcxODQtNDk4ZS04YWZmLWIyYWQ0ZTUzYzFjMiIsImMiOjR9&embedImagePlaceholder=true';

export default function DistribucionConsultasPage() {
  return (
    <SectionTemplate
      title="Distribución Consultas"
      description="Reporte de distribución de consultas."
      icon={ChartNoAxesCombined}
      breadcrumbs={[
        { label: 'Producción', href: '/produccion' },
        { label: 'Distribución Consultas' },
      ]}
    >
      <SectionBackground variant="default">
        <ArticleContainer maxWidth="wide" className="max-w-none">
          <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
            Tablero interactivo con la distribución de consultas. Puedes filtrar,
            explorar y navegar el reporte completo sin salir del portal.
          </p>

          {DISTRIBUCION_CONSULTAS_REPORT_URL ? (
            <div className="mx-auto w-full max-w-[1024px]">
              <PowerBIEmbed
                src={DISTRIBUCION_CONSULTAS_REPORT_URL}
                title="Reporte de distribución de consultas"
                aspectRatio="16/9"
              />
            </div>
          ) : (
            <div className="mx-auto w-full max-w-[1024px] flex items-center justify-center rounded-xl border-2 border-dashed border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800/50 py-16">
              <p className="text-sm text-gray-400 dark:text-gray-500">
                Reporte de Power BI pendiente de configuración.
                Reemplaza <code className="font-mono">DISTRIBUCION_CONSULTAS_REPORT_URL</code> con la URL de inserción.
              </p>
            </div>
          )}
        </ArticleContainer>
      </SectionBackground>
    </SectionTemplate>
  );
}
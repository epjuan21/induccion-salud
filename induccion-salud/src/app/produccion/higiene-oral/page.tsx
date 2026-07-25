import { SmilePlus } from 'lucide-react';
import { SectionTemplate } from '@/components/templates';
import { ArticleContainer, SectionBackground } from '@/components/layout';
import { PowerBIEmbed } from '@/components/charts';

// URL de inserción del reporte de Higiene Oral en Power BI (dominio app.powerbi.com).
const HIGIENE_ORAL_REPORT_URL = 'https://app.powerbi.com/view?r=eyJrIjoiNGU5NDMxMjQtYzZjZi00NDAwLWI5MGMtZTlkYmVlYmY0ODAwIiwidCI6Ijk5ZTFlNzIxLTcxODQtNDk4ZS04YWZmLWIyYWQ0ZTUzYzFjMiIsImMiOjR9';

export default function ProduccionHigieneOralPage() {
  return (
    <SectionTemplate
      title="Higiene Oral"
      description="Reporte de producción de higiene oral."
      icon={SmilePlus}
      breadcrumbs={[
        { label: 'Producción', href: '/produccion' },
        { label: 'Higiene Oral' },
      ]}
    >
      <SectionBackground variant="default">
        <ArticleContainer maxWidth="wide" className="max-w-none">
          <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
            Tablero interactivo con la producción de higiene oral. Puedes filtrar,
            explorar y navegar el reporte completo sin salir del portal.
          </p>

          {HIGIENE_ORAL_REPORT_URL ? (
            <div className="mx-auto w-full max-w-[1024px]">
              <PowerBIEmbed
                src={HIGIENE_ORAL_REPORT_URL}
                title="Reporte de producción de higiene oral"
                aspectRatio="16/9"
              />
            </div>
          ) : (
            <div className="mx-auto w-full max-w-[1024px] flex items-center justify-center rounded-xl border-2 border-dashed border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800/50 py-16">
              <p className="text-sm text-gray-400 dark:text-gray-500">
                Reporte de Power BI pendiente de configuración.
                Reemplaza <code className="font-mono">HIGIENE_ORAL_REPORT_URL</code> con la URL de inserción.
              </p>
            </div>
          )}
        </ArticleContainer>
      </SectionBackground>
    </SectionTemplate>
  );
}
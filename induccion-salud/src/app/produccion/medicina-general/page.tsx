import { Stethoscope } from 'lucide-react';
import { SectionTemplate } from '@/components/templates';
import { ArticleContainer, SectionBackground } from '@/components/layout';
import { PowerBIEmbed } from '@/components/charts';

// URL de inserción del reporte de Medicina General en Power BI (dominio app.powerbi.com).
const MEDICINA_GENERAL_REPORT_URL = 'https://app.powerbi.com/view?r=eyJrIjoiYTUzNGNlNWQtNjEzZi00OWZlLWEyMWItYzYyYThjZDA0N2VjIiwidCI6Ijk5ZTFlNzIxLTcxODQtNDk4ZS04YWZmLWIyYWQ0ZTUzYzFjMiIsImMiOjR9&embedImagePlaceholder=true';

export default function ProduccionMedicinaGeneralPage() {
  return (
    <SectionTemplate
      title="Medicina General"
      description="Primeras causas de morbilidad en consulta de medicina general."
      icon={Stethoscope}
      breadcrumbs={[
        { label: 'Producción', href: '/produccion' },
        { label: 'Medicina General' },
      ]}
    >
      <SectionBackground variant="default">
        <ArticleContainer maxWidth="wide" className="max-w-none">
          <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
            Tablero interactivo con las primeras causas de morbilidad registradas en
            consulta de medicina general. Puedes filtrar, explorar y navegar el
            reporte completo sin salir del portal.
          </p>

          {MEDICINA_GENERAL_REPORT_URL ? (
            <div className="mx-auto w-full max-w-[1024px]">
              <PowerBIEmbed
                src={MEDICINA_GENERAL_REPORT_URL}
                title="Primeras causas de morbilidad en consulta de medicina general"
                aspectRatio="16/9"
              />
            </div>
          ) : (
            <div className="mx-auto w-full max-w-[1024px] flex items-center justify-center rounded-xl border-2 border-dashed border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800/50 py-16">
              <p className="text-sm text-gray-400 dark:text-gray-500">
                Reporte de Power BI pendiente de configuración.
                Reemplaza <code className="font-mono">MEDICINA_GENERAL_REPORT_URL</code> con la URL de inserción.
              </p>
            </div>
          )}
        </ArticleContainer>
      </SectionBackground>
    </SectionTemplate>
  );
}

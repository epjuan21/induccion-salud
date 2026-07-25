import { HeartPulse } from 'lucide-react';
import { SectionTemplate } from '@/components/templates';
import { ArticleContainer, SectionBackground } from '@/components/layout';
import { PowerBIEmbed } from '@/components/charts';

// URL de inserción del reporte de Producción PyM en Power BI (dominio app.powerbi.com).
const PRODUCCION_PYM_REPORT_URL = 'https://app.powerbi.com/view?r=eyJrIjoiNjdhZjFkMmUtYjVjNS00NjMzLWE4M2ItNTY2NGUyY2YwM2Q5IiwidCI6Ijk5ZTFlNzIxLTcxODQtNDk4ZS04YWZmLWIyYWQ0ZTUzYzFjMiIsImMiOjR9&embedImagePlaceholder=true';

export default function ProduccionPymPage() {
  return (
    <SectionTemplate
      title="Procedimientos PyM"
      description="Reporte de Procedimientos PyM."
      icon={HeartPulse}
      breadcrumbs={[
        { label: 'Producción', href: '/produccion' },
        { label: 'Procedimientos PyM' },
      ]}
    >
      <SectionBackground variant="default">
        <ArticleContainer maxWidth="wide" className="max-w-none">
          <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
            Tablero interactivo con la producción de Procedimientos de PyM. Puedes filtrar, explorar
            y navegar el reporte completo sin salir del portal.
          </p>

          {PRODUCCION_PYM_REPORT_URL ? (
            <div className="mx-auto w-full max-w-[1024px]">
              <PowerBIEmbed
                src={PRODUCCION_PYM_REPORT_URL}
                title="Reporte de producción PyM"
                aspectRatio="16/9"
              />
            </div>
          ) : (
            <div className="mx-auto w-full max-w-[1024px] flex items-center justify-center rounded-xl border-2 border-dashed border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800/50 py-16">
              <p className="text-sm text-gray-400 dark:text-gray-500">
                Reporte de Power BI pendiente de configuración.
                Reemplaza <code className="font-mono">PRODUCCION_PYM_REPORT_URL</code> con la URL de inserción.
              </p>
            </div>
          )}
        </ArticleContainer>
      </SectionBackground>
    </SectionTemplate>
  );
}
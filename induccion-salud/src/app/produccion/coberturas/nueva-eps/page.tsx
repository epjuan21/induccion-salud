import { ShieldCheck } from 'lucide-react';
import { SectionTemplate } from '@/components/templates';
import { ArticleContainer, SectionBackground } from '@/components/layout';
import { PowerBIEmbed } from '@/components/charts';

// URL de inserción del reporte de Coberturas NuevaEPS en Power BI (dominio app.powerbi.com).
const NUEVA_EPS_REPORT_URL = 'https://app.powerbi.com/view?r=eyJrIjoiNWU1NzAwMjUtNTg2Mi00ZWQwLWIwNzEtZTg4OWE0Mjk4NmFiIiwidCI6Ijk5ZTFlNzIxLTcxODQtNDk4ZS04YWZmLWIyYWQ0ZTUzYzFjMiIsImMiOjR9';

export default function CoberturasNuevaEpsPage() {
  return (
    <SectionTemplate
      title="NuevaEPS"
      description="Reporte de coberturas de NuevaEPS."
      icon={ShieldCheck}
      breadcrumbs={[
        { label: 'Producción', href: '/produccion' },
        { label: 'Coberturas' },
        { label: 'NuevaEPS' },
      ]}
    >
      <SectionBackground variant="default">
        <ArticleContainer maxWidth="wide" className="max-w-none">
          <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
            Tablero interactivo con las coberturas de NuevaEPS. Puedes filtrar,
            explorar y navegar el reporte completo sin salir del portal.
          </p>

          {NUEVA_EPS_REPORT_URL ? (
            <div className="mx-auto w-full max-w-[1024px]">
              <PowerBIEmbed
                src={NUEVA_EPS_REPORT_URL}
                title="Reporte de coberturas de NuevaEPS"
                aspectRatio="16/9"
              />
            </div>
          ) : (
            <div className="mx-auto w-full max-w-[1024px] flex items-center justify-center rounded-xl border-2 border-dashed border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800/50 py-16">
              <p className="text-sm text-gray-400 dark:text-gray-500">
                Reporte de Power BI pendiente de configuración.
                Reemplaza <code className="font-mono">NUEVA_EPS_REPORT_URL</code> con la URL de inserción.
              </p>
            </div>
          )}
        </ArticleContainer>
      </SectionBackground>
    </SectionTemplate>
  );
}

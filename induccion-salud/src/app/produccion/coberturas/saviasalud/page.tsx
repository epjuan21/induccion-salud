import { ShieldCheck } from 'lucide-react';
import { SectionTemplate } from '@/components/templates';
import { ArticleContainer, SectionBackground } from '@/components/layout';
import { PowerBIEmbed } from '@/components/charts';

// URL de inserción del reporte de Coberturas Saviasalud en Power BI (dominio app.powerbi.com).
const SAVIASALUD_REPORT_URL = 'https://app.powerbi.com/view?r=eyJrIjoiMzgzNTlmYzItMTAxYS00MzZmLWJjMmQtMjA0ZWJlNGNjMmFlIiwidCI6Ijk5ZTFlNzIxLTcxODQtNDk4ZS04YWZmLWIyYWQ0ZTUzYzFjMiIsImMiOjR9';

export default function CoberturasSaviasaludPage() {
  return (
    <SectionTemplate
      title="Saviasalud"
      description="Reporte de coberturas de Saviasalud."
      icon={ShieldCheck}
      breadcrumbs={[
        { label: 'Producción', href: '/produccion' },
        { label: 'Coberturas' },
        { label: 'Saviasalud' },
      ]}
    >
      <SectionBackground variant="default">
        <ArticleContainer maxWidth="wide" className="max-w-none">
          <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
            Tablero interactivo con las coberturas de Saviasalud. Puedes filtrar,
            explorar y navegar el reporte completo sin salir del portal.
          </p>

          {SAVIASALUD_REPORT_URL ? (
            <div className="mx-auto w-full max-w-[1024px]">
              <PowerBIEmbed
                src={SAVIASALUD_REPORT_URL}
                title="Reporte de coberturas de Saviasalud"
                aspectRatio="16/9"
              />
            </div>
          ) : (
            <div className="mx-auto w-full max-w-[1024px] flex items-center justify-center rounded-xl border-2 border-dashed border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800/50 py-16">
              <p className="text-sm text-gray-400 dark:text-gray-500">
                Reporte de Power BI pendiente de configuración.
                Reemplaza <code className="font-mono">SAVIASALUD_REPORT_URL</code> con la URL de inserción.
              </p>
            </div>
          )}
        </ArticleContainer>
      </SectionBackground>
    </SectionTemplate>
  );
}

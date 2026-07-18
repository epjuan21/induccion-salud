import { FlaskConical } from 'lucide-react';
import { SectionTemplate } from '@/components/templates';
import { ArticleContainer, SectionBackground } from '@/components/layout';
import { PowerBIEmbed } from '@/components/charts';

// URL de inserción del reporte de Laboratorio en Power BI (dominio app.powerbi.com).
const LABORATORIO_REPORT_URL = 'https://app.powerbi.com/view?r=eyJrIjoiNTFmODMyOGUtYmU3Zi00ZTAzLWE3NGEtOWJhMjQxMThlMjUzIiwidCI6Ijk5ZTFlNzIxLTcxODQtNDk4ZS04YWZmLWIyYWQ0ZTUzYzFjMiIsImMiOjR9&embedImagePlaceholder=true';

export default function ProduccionLaboratorioPage() {
  return (
    <SectionTemplate
      title="Laboratorio"
      description="Reporte de producción de laboratorio."
      icon={FlaskConical}
      breadcrumbs={[
        { label: 'Producción', href: '/produccion' },
        { label: 'Laboratorio' },
      ]}
    >
      <SectionBackground variant="default">
        <ArticleContainer maxWidth="wide" className="max-w-none">
          <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
            Tablero interactivo con la producción de laboratorio. Puedes filtrar,
            explorar y navegar el reporte completo sin salir del portal.
          </p>

          <div className="mx-auto w-full max-w-[1024px]">
            <PowerBIEmbed
              src={LABORATORIO_REPORT_URL}
              title="Reporte de producción de laboratorio"
              aspectRatio="16/9"
            />
          </div>
        </ArticleContainer>
      </SectionBackground>
    </SectionTemplate>
  );
}

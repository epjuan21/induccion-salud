import { BarChart3 } from 'lucide-react';
import { SectionTemplate } from '@/components/templates';
import { ArticleContainer, SectionBackground } from '@/components/layout';
import { PowerBIEmbed } from '@/components/charts';

// URL de inserción del reporte de Consultas en Power BI (dominio app.powerbi.com).
const CONSULTAS_REPORT_URL = 'https://app.powerbi.com/view?r=eyJrIjoiZTFhZTg2NjktZDMwMC00Yjk3LWIyZjgtZjA2YzNlMjk5ZDgwIiwidCI6Ijk5ZTFlNzIxLTcxODQtNDk4ZS04YWZmLWIyYWQ0ZTUzYzFjMiIsImMiOjR9&embedImagePlaceholder=true';

export default function ProduccionConsultasPage() {
  return (
    <SectionTemplate
      title="Consultas"
      description="Reporte de producción de consultas."
      icon={BarChart3}
      breadcrumbs={[
        { label: 'Producción', href: '/produccion' },
        { label: 'Consultas' },
      ]}
    >
      <SectionBackground variant="default">
        <ArticleContainer maxWidth="wide" className="max-w-none">
          <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
            Tablero interactivo con la producción de consultas. Puedes filtrar,
            explorar y navegar el reporte completo sin salir del portal.
          </p>

          <div className="mx-auto w-full max-w-[1024px]">
            <PowerBIEmbed
              src={CONSULTAS_REPORT_URL}
              title="Reporte de producción de consultas"
              aspectRatio="16/9"
            />
          </div>
        </ArticleContainer>
      </SectionBackground>
    </SectionTemplate>
  );
}

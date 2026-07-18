import { BarChart3 } from 'lucide-react';
import { ModuleTemplate } from '@/components/templates';

const subsections = [
  {
    title: 'Consultas',
    description: 'Reporte de producción de consultas embebido desde Power BI.',
    href: '/produccion/consultas',
  },
  {
    title: 'Laboratorio',
    description: 'Reporte de producción de laboratorio embebido desde Power BI.',
    href: '/produccion/laboratorio',
  },
  {
    title: 'Egresos',
    description: 'Primeras causas de morbilidad en egresos hospitalarios con tablero de Power BI.',
    href: '/produccion/egresos',
  },
  {
    title: 'Medicina General',
    description: 'Primeras causas de morbilidad en consulta de medicina general con tablero de Power BI.',
    href: '/produccion/medicina-general',
  },
];

export default function ProduccionPage() {
  return (
    <ModuleTemplate
      title="Producción"
      description="Reportes de producción institucional visualizados mediante tableros de Power BI."
      icon={BarChart3}
      breadcrumbs={[{ label: 'Producción' }]}
      subsections={subsections}
      introContent={
        <p>
          Esta sección reúne los reportes de producción de la institución. Cada
          página presenta un tablero interactivo de Power BI con la información
          correspondiente. Se encuentran disponibles los reportes de Consultas,
          Laboratorio y Egresos Hospitalarios.
        </p>
      }
    />
  );
}

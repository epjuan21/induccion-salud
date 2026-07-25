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
    title: 'Producción Egresos',
    description: 'Reporte de producción de egresos embebido desde Power BI.',
    href: '/produccion/produccion-egresos',
  },
  {
    title: 'Higiene Oral',
    description: 'Reporte de producción de higiene oral embebido desde Power BI.',
    href: '/produccion/higiene-oral',
  },
  {
    title: 'Distribución Consultas',
    description: 'Reporte de distribución de consultas embebido desde Power BI.',
    href: '/produccion/distribucion-consultas',
  },
  {
    title: 'Medicamentos',
    description: 'Reporte de producción de medicamentos embebido desde Power BI.',
    href: '/produccion/medicamentos',
  },
  {
    title: 'Procedimientos PyM',
    description: 'Reporte de procedimientos PyM embebido desde Power BI.',
    href: '/produccion/procedimientos-pym',
  },
  {
    title: 'Rayos X',
    description: 'Reporte de producción de Rayos X embebido desde Power BI.',
    href: '/produccion/rayos-x',
  },
  {
    title: 'Remisiones',
    description: 'Reporte de producción de remisiones embebido desde Power BI.',
    href: '/produccion/remisiones',
  },
  {
    title: 'Aseguramiento',
    description: 'Reporte de población asegurada embebido desde Power BI.',
    href: '/produccion/poblacion/aseguramiento',
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
          Laboratorio, Producción Egresos, Higiene Oral, Distribución Consultas
          Medicamentos, Procedimientos PyM, Rayos X, Remisiones, Aseguramiento
          y Egresos Hospitalarios.
        </p>
      }
    />
  );
}

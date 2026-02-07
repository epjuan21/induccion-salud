import { DollarSign, FileCheck, AlertCircle, BookOpen, Calculator } from 'lucide-react';
import { ModuleTemplate } from '@/components/templates';
import { Alert, Card, CardContent } from '@/components/ui';

const subsections = [
  {
    title: 'Planificación Familiar',
    description: 'Facturación de servicios de anticoncepción, asesoría y seguimiento.',
    href: '/facturacion-pyp/planificacion-familiar',
  },
  {
    title: 'Ruta Materno Perinatal',
    description: 'Facturación de controles prenatales, parto y atención del recién nacido.',
    href: '/facturacion-pyp/ruta-materno-perinatal',
  },
  {
    title: 'Ciclos de Vida',
    description: 'Facturación de controles según etapa del ciclo vital: infancia, adolescencia, adulto y adulto mayor.',
    href: '/facturacion-pyp/ciclos-vida',
  },
  {
    title: 'Vacunación',
    description: 'Facturación de biológicos y servicios del programa ampliado de inmunizaciones.',
    href: '/facturacion-pyp/vacunacion',
  },
  {
    title: 'Higiene Oral',
    description: 'Facturación de actividades de promoción y prevención en salud oral.',
    href: '/facturacion-pyp/higiene-oral',
  },
];

const keyPoints = [
  {
    icon: FileCheck,
    title: 'Documentación Completa',
    description: 'Verificar que toda la documentación esté correcta antes de facturar.',
  },
  {
    icon: Calculator,
    title: 'Códigos CUPS',
    description: 'Usar los códigos correctos según el procedimiento realizado.',
  },
  {
    icon: AlertCircle,
    title: 'Evitar Glosas',
    description: 'Seguir los lineamientos para minimizar devoluciones.',
  },
];

export default function FacturacionPypPage() {
  return (
    <ModuleTemplate
      title="Facturación de Servicios P&P"
      description="Aprende los procedimientos correctos para facturar servicios de Promoción y Prevención en salud."
      icon={DollarSign}
      breadcrumbs={[
        { label: 'Facturación P&P' },
      ]}
      subsections={subsections}
      introContent={
        <>
          <p>
            Los servicios de Promoción de la Salud y Prevención de la Enfermedad (P&P)
            son fundamentales en nuestro modelo de atención. Su correcta facturación
            garantiza el sostenimiento financiero de estos programas y el cumplimiento
            de metas de cobertura.
          </p>

          <Alert variant="info" title="¿Qué son los servicios P&P?" className="my-6">
            <p>
              Son actividades, intervenciones y procedimientos orientados a promover
              la salud, prevenir la aparición de enfermedades y detectar oportunamente
              condiciones de riesgo. Están definidos en la Resolución 3280 de 2018.
            </p>
          </Alert>

          <h3>Principios de facturación P&P</h3>
          <div className="grid gap-4 md:grid-cols-3 my-6 not-prose">
            {keyPoints.map((point) => {
              const Icon = point.icon;
              return (
                <Card key={point.title}>
                  <CardContent className="p-4 text-center">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-green-100 dark:bg-green-900/30 mb-3">
                      <Icon className="w-6 h-6 text-green-600 dark:text-green-400" />
                    </div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                      {point.title}
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {point.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <h3>Marco normativo</h3>
          <ul>
            <li><strong>Resolución 3280 de 2018</strong> - Ruta de Promoción y Mantenimiento de la Salud</li>
            <li><strong>Resolución 2481 de 2020</strong> - Actualización listado de procedimientos</li>
            <li><strong>Manual tarifario SOAT / ISS</strong> - Referencia de tarifas</li>
            <li><strong>Acuerdos con EPS</strong> - Condiciones específicas por asegurador</li>
          </ul>

          <h3>Objetivos de aprendizaje</h3>
          <p>Al completar este módulo serás capaz de:</p>
          <ul>
            <li>Identificar los servicios P&P y sus códigos CUPS</li>
            <li>Diligenciar correctamente los soportes de facturación</li>
            <li>Aplicar las frecuencias establecidas por normatividad</li>
            <li>Evitar las causales de glosa más comunes</li>
            <li>Facturar por capitación y por evento según corresponda</li>
          </ul>

          <Alert variant="warning" title="Importante" className="mt-6">
            Los errores en facturación P&P generan glosas que afectan directamente
            los ingresos de la institución. Presta especial atención a los detalles
            de cada procedimiento.
          </Alert>
        </>
      }
    />
  );
}

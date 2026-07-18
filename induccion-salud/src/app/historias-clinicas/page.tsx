import { FileText, ClipboardCheck, Scale, ShieldCheck } from 'lucide-react';
import { ModuleTemplate } from '@/components/templates';
import { Alert, Card, CardContent } from '@/components/ui';

const subsections = [
  {
    title: 'Planificación Familiar',
    description: 'Registro de asesoría, selección de método y seguimiento anticonceptivo.',
    href: '/historias-clinicas/planificacion-familiar',
  },
  {
    title: 'Ruta Materno Perinatal',
    description: 'Documentación de controles prenatales, parto y puerperio.',
    href: '/historias-clinicas/ruta-materno-perinatal',
  },
  {
    title: 'Ciclos de Vida',
    description: 'Registro de controles según etapa del ciclo vital.',
    href: '/historias-clinicas/ciclos-vida',
  },
];

const principios = [
  {
    icon: ClipboardCheck,
    title: 'Integralidad',
    description: 'Documentar todos los aspectos relevantes de la atención.',
  },
  {
    icon: Scale,
    title: 'Veracidad',
    description: 'Registrar información fidedigna y verificable.',
  },
  {
    icon: ShieldCheck,
    title: 'Confidencialidad',
    description: 'Proteger la información del paciente.',
  },
];

export default function HistoriasClinicasPage() {
  return (
    <ModuleTemplate
      title="Diligenciamiento de Historias Clínicas"
      description="Guías y normativas para el correcto diligenciamiento de la historia clínica."
      icon={FileText}
      breadcrumbs={[
        { label: 'Historias Clínicas' },
      ]}
      subsections={subsections}
      introContent={
        <>
          <p>
            La historia clínica es el documento médico-legal que contiene todos los
            datos relativos a la salud del paciente. Su correcto diligenciamiento
            es fundamental para la continuidad de la atención, la seguridad del
            paciente y la protección jurídica del profesional.
          </p>

          <Alert variant="warning" title="Documento médico-legal" className="my-6">
            <p>
              La historia clínica es un documento con valor legal. Lo que no está
              escrito, no existe. Un registro incompleto o inadecuado puede tener
              consecuencias legales y afectar la calidad de la atención.
            </p>
          </Alert>

          <h3>Principios del registro clínico</h3>
          <div className="grid gap-4 md:grid-cols-3 my-6 not-prose">
            {principios.map((principio) => {
              const Icon = principio.icon;
              return (
                <Card key={principio.title}>
                  <CardContent className="p-4 text-center">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-purple-100 dark:bg-purple-900/30 mb-3">
                      <Icon className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                    </div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                      {principio.title}
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {principio.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <h3>Marco normativo</h3>
          <ul>
            <li><strong>Resolución 1995 de 1999</strong> - Normas para el manejo de la historia clínica</li>
            <li><strong>Ley 23 de 1981</strong> - Ética médica (secreto profesional)</li>
            <li><strong>Resolución 839 de 2017</strong> - Historia clínica electrónica</li>
            <li><strong>Ley 1581 de 2012</strong> - Protección de datos personales</li>
          </ul>

          <h3>Objetivos de aprendizaje</h3>
          <p>Al completar este módulo serás capaz de:</p>
          <ul>
            <li>Diligenciar correctamente los componentes de la historia clínica</li>
            <li>Aplicar el formato SOAP en las notas de evolución</li>
            <li>Registrar adecuadamente consentimientos informados</li>
            <li>Cumplir con los requisitos legales del registro</li>
            <li>Proteger la confidencialidad de la información</li>
          </ul>

          <Alert variant="tip" title="Tiempo estimado" className="mt-6">
            Este módulo tiene una duración aproximada de 1.5 horas, incluyendo
            los ejercicios prácticos.
          </Alert>
        </>
      }
    />
  );
}

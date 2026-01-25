import { Shield, Lock, Monitor, CheckCircle } from 'lucide-react';
import { ModuleTemplate } from '@/components/templates';
import { Alert, Card, CardContent } from '@/components/ui';

const subsections = [
  {
    title: 'Manejo Correcto de Equipos de Cómputo',
    description: 'Buenas prácticas para el uso, cuidado y mantenimiento de los equipos institucionales.',
    href: '/seguridad-informacion/manejo-equipos',
  },
];

const keyPoints = [
  {
    icon: Lock,
    title: 'Confidencialidad',
    description: 'Proteger la información sensible de accesos no autorizados.',
  },
  {
    icon: CheckCircle,
    title: 'Integridad',
    description: 'Garantizar que la información no sea alterada indebidamente.',
  },
  {
    icon: Monitor,
    title: 'Disponibilidad',
    description: 'Asegurar el acceso a la información cuando se necesite.',
  },
];

export default function SeguridadInformacionPage() {
  return (
    <ModuleTemplate
      title="Seguridad de la Información"
      description="Conoce los principios fundamentales para proteger la información institucional y de los pacientes."
      icon={Shield}
      breadcrumbs={[
        { label: 'Seguridad de la Información' },
      ]}
      subsections={subsections}
      introContent={
        <>
          <p>
            La seguridad de la información es un pilar fundamental en las instituciones
            de salud. Manejamos información altamente sensible que incluye datos personales
            de pacientes, historias clínicas, información financiera y datos institucionales
            que requieren protección especial.
          </p>

          <Alert variant="warning" title="Responsabilidad compartida" className="my-6">
            <p>
              Todo el personal tiene la obligación legal y ética de proteger la información
              confidencial. El incumplimiento puede resultar en sanciones disciplinarias,
              legales y daños a la reputación institucional.
            </p>
          </Alert>

          <h3>Los tres pilares de la seguridad de la información</h3>

          <div className="grid gap-4 md:grid-cols-3 my-6 not-prose">
            {keyPoints.map((point) => {
              const Icon = point.icon;
              return (
                <Card key={point.title}>
                  <CardContent className="p-4 text-center">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary-100 dark:bg-primary-900/30 mb-3">
                      <Icon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
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
          <p>
            La protección de datos en salud está regulada por:
          </p>
          <ul>
            <li><strong>Ley 1581 de 2012</strong> - Protección de datos personales</li>
            <li><strong>Ley 1266 de 2008</strong> - Habeas Data</li>
            <li><strong>Resolución 1995 de 1999</strong> - Manejo de historia clínica</li>
            <li><strong>Ley 23 de 1981</strong> - Ética médica (secreto profesional)</li>
          </ul>

          <h3>Objetivos de aprendizaje</h3>
          <p>Al completar este módulo serás capaz de:</p>
          <ul>
            <li>Identificar información sensible que requiere protección</li>
            <li>Aplicar buenas prácticas en el manejo de equipos de cómputo</li>
            <li>Reconocer y reportar incidentes de seguridad</li>
            <li>Proteger credenciales y accesos a sistemas</li>
            <li>Prevenir amenazas como phishing y malware</li>
          </ul>

          <Alert variant="tip" title="Tiempo estimado" className="mt-6">
            Este módulo tiene una duración aproximada de 1 hora, incluyendo la
            evaluación final.
          </Alert>
        </>
      }
    />
  );
}

import { Baby, Stethoscope } from 'lucide-react';
import { SectionTemplate } from '@/components/templates';
import { ArticleContainer, SectionBackground } from '@/components/layout';
import { Alert, Accordion, SectionDivider, CompactCard } from '@/components/ui';

const registrosObligatorios = [
  'Fecha de última menstruación (FUM) y fecha probable de parto (FPP)',
  'Edad gestacional en cada control',
  'Peso materno y ganancia de peso',
  'Presión arterial',
  'Altura uterina',
  'Frecuencia cardíaca fetal',
  'Movimientos fetales',
  'Presentación fetal (tercer trimestre)',
  'Resultados de laboratorios y ecografías',
  'Vacunación',
  'Signos de alarma explicados',
];

const elementosPartograma = [
  'Dilatación cervical (curva de alerta y curva de acción)',
  'Descenso de la presentación',
  'Frecuencia cardíaca fetal',
  'Características de las contracciones',
  'Estado de las membranas',
  'Características del líquido amniótico',
  'Signos vitales maternos',
  'Medicamentos administrados',
];

const faqItems = [
  {
    id: 'hcmp-1',
    title: '¿Qué es el Carné Materno y cómo se diligencia?',
    content: (
      <p>
        El carné materno es un documento que porta la gestante con el resumen
        de su control prenatal. Debe actualizarse en cada consulta con los
        datos clínicos relevantes, resultados de exámenes y próxima cita.
        Es fundamental para la atención de urgencias y el parto.
      </p>
    ),
  },
  {
    id: 'hcmp-2',
    title: '¿Cómo registrar una gestación de alto riesgo?',
    content: (
      <p>
        Las gestaciones de alto riesgo requieren documentación detallada del
        factor de riesgo identificado, el plan de manejo especializado, las
        interconsultas realizadas y el seguimiento más frecuente. Debe quedar
        clara la clasificación del riesgo y las razones de la misma.
      </p>
    ),
  },
  {
    id: 'hcmp-3',
    title: '¿Qué documentación requiere la atención del parto?',
    content: (
      <ul className="list-disc list-inside space-y-1">
        <li>Partograma completo y firmado</li>
        <li>Nota de ingreso a trabajo de parto</li>
        <li>Consentimiento informado para el parto</li>
        <li>Descripción del procedimiento (parto o cesárea)</li>
        <li>Nota de atención del recién nacido</li>
        <li>Consentimientos adicionales si aplica</li>
      </ul>
    ),
  },
];

export default function HCRutaMaternoPerinatalPage() {
  return (
    <SectionTemplate
      title="Historia Clínica en Ruta Materno Perinatal"
      description="Documentación de controles prenatales, parto, puerperio y atención neonatal."
      icon={Baby}
      breadcrumbs={[
        { label: 'Historias Clínicas', href: '/historias-clinicas' },
        { label: 'Ruta Materno Perinatal' },
      ]}
      previousPage={{
        title: 'Planificación Familiar',
        href: '/historias-clinicas/planificacion-familiar',
      }}
      nextPage={{
        title: 'Ciclos de Vida',
        href: '/historias-clinicas/ciclos-vida',
      }}
    >
      {/* Introducción - Fondo Blanco */}
      <SectionBackground variant="default" spacing="normal">
        <ArticleContainer maxWidth="prose">
          <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
            La historia clínica perinatal es un instrumento diseñado para documentar
            el seguimiento del embarazo, el parto y el puerperio de manera estandarizada.
            Colombia utiliza el modelo del CLAP/OPS (Centro Latinoamericano de
            Perinatología).
          </p>

          <Alert variant="danger" title="Registro crítico">
            La historia clínica perinatal es un documento crítico para la seguridad
            materna y neonatal. Errores u omisiones pueden tener consecuencias
            graves y responsabilidad legal.
          </Alert>
        </ArticleContainer>
      </SectionBackground>

      {/* Registros obligatorios - Fondo Gris */}
      <SectionBackground variant="muted" spacing="large">
        <ArticleContainer maxWidth="prose">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Registros Obligatorios en Control Prenatal
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
            Cada control prenatal debe documentar obligatoriamente los siguientes datos:
          </p>

          <div className="space-y-2">
            {registrosObligatorios.map((item, index) => (
              <CompactCard key={index} variant="default">
                <div className="flex items-start gap-3">
                  <span className="text-green-500 dark:text-green-400 shrink-0 mt-0.5 font-bold">✓</span>
                  <span className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">{item}</span>
                </div>
              </CompactCard>
            ))}
          </div>
        </ArticleContainer>
      </SectionBackground>

      {/* Separador Decorativo */}
      <SectionDivider variant="decorative" icon={Stethoscope} />

      {/* Partograma - Fondo Blanco */}
      <SectionBackground variant="default" spacing="large">
        <ArticleContainer maxWidth="prose">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            El Partograma
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
            El partograma es una herramienta gráfica que permite vigilar el
            progreso del trabajo de parto y detectar desviaciones de la normalidad.
            Su diligenciamiento es obligatorio en todas las instituciones.
          </p>

          <div className="space-y-2 mb-6">
            {elementosPartograma.map((item, index) => (
              <CompactCard key={index} variant="default">
                <div className="flex items-start gap-3">
                  <div className="shrink-0 w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-900/40 flex items-center justify-center">
                    <span className="text-xs font-bold text-blue-700 dark:text-blue-300">{index + 1}</span>
                  </div>
                  <span className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">{item}</span>
                </div>
              </CompactCard>
            ))}
          </div>

          <Alert variant="warning" title="Importante">
            El partograma debe iniciarse cuando la gestante tiene 4 cm de dilatación
            y se encuentra en fase activa de trabajo de parto. Debe actualizarse
            cada hora.
          </Alert>
        </ArticleContainer>
      </SectionBackground>

      {/* Preguntas frecuentes - Fondo Gris */}
      <SectionBackground variant="muted" spacing="large">
        <ArticleContainer maxWidth="prose">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Preguntas Frecuentes
          </h2>
          <Accordion items={faqItems} />
        </ArticleContainer>
      </SectionBackground>
    </SectionTemplate>
  );
}

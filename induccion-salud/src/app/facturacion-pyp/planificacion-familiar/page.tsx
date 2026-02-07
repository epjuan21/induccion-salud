import { Heart, Hash, FileCheck, X } from 'lucide-react';
import { SectionTemplate } from '@/components/templates';
import { ArticleContainer, SectionBackground } from '@/components/layout';
import { Alert, Accordion, CopyButton, Badge, SectionDivider, CompactCard } from '@/components/ui';

const consultasPlanificacion = [
  {
    cups: '*890205-5',
    descripcion: 'PYP CONSULTA PRIMERA VEZ PLANIFICACION FAMILIAR ENFERMERA',
    tipo: 'Primera Vez',
    profesional: 'Enfermera',
  },
  {
    cups: '*890201-5',
    descripcion: 'PYP CONSULTA PRIMERA VEZ PLANIFICACION FAMILIAR MEDICO',
    tipo: 'Primera Vez',
    profesional: 'Médico',
  },
  {
    cups: '*890305-5',
    descripcion: 'PYP CONSULTA CONTROL PLANIFICACION FAMILIAR ENFERMERA',
    tipo: 'Control',
    profesional: 'Enfermera',
  },
  {
    cups: '*890301-5',
    descripcion: 'PYP CONSULTA CONTROL PLANIFICACION FAMILIAR MEDICO',
    tipo: 'Control',
    profesional: 'Médico',
  },
];

const diagnosticosCIE10 = [
  {
    codigo: 'Z300',
    descripcion: 'Consejo y asesoramiento general sobre la anticoncepción',
  },
  {
    codigo: 'Z304',
    descripcion: 'Supervisión del uso de drogas anticonceptivas',
  },
  {
    codigo: 'Z305',
    descripcion: 'Supervisión del uso de dispositivo anticonceptivo (intrauterino)',
  },
  {
    codigo: 'Z308',
    descripcion: 'Otras atenciones especificadas para la anticoncepción',
  },
  {
    codigo: 'Z309',
    descripcion: 'Asistencia para la anticoncepción, no especificada',
  },
  {
    codigo: 'Z316',
    descripcion: 'Consejo y asesoramiento general sobre la procreación',
  },
  {
    codigo: 'Z318',
    descripcion: 'Otra atención especificada para la procreación',
  },
  {
    codigo: 'Z319',
    descripcion: 'Atención no especificada relacionada con la procreación',
  },
];

const faqItems = [
  {
    id: 'pf-1',
    title: '¿Cuándo se factura consulta de primera vez vs control?',
    content: (
      <div className="space-y-3">
        <p className="leading-relaxed">
          <strong>Primera vez (*890205-5 o *890201-5)</strong>: Se factura cuando es la
          primera atención de la usuaria o usuario para iniciar un método anticonceptivo
          específico, o cuando es su primer ingreso al programa de planificación familiar.
        </p>
        <p className="leading-relaxed">
          <strong>Control (*890305-5 o *890301-5)</strong>: Se factura en los seguimientos
          posteriores para el mismo método anticonceptivo. Si la persona cambia de método,
          se debe generar una nueva consulta de primera vez.
        </p>
      </div>
    ),
  },
  {
    id: 'pf-2',
    title: '¿Qué rango de edad aplica para planificación familiar?',
    content: (
      <p className="leading-relaxed">
        Los servicios de planificación familiar están dirigidos a personas entre los
        <strong> 10 y 54 años</strong>. Este rango garantiza la atención integral en
        todas las etapas de la vida reproductiva, incluyendo adolescentes con derechos
        sexuales y reproductivos garantizados.
      </p>
    ),
  },
  {
    id: 'pf-3',
    title: '¿Qué finalidad y causa externa se usan en planificación familiar?',
    content: (
      <div>
        <p className="mb-3 leading-relaxed">Para todos los códigos de planificación familiar se usa:</p>
        <ul className="list-disc list-inside space-y-2">
          <li className="leading-relaxed">
            <strong>Finalidad: 19</strong> - Planificación Familiar y Anticoncepción
          </li>
          <li className="leading-relaxed">
            <strong>Causa Externa: 40</strong> - Promoción y Mantenimiento de la Salud
            o Intervenciones Individuales
          </li>
        </ul>
      </div>
    ),
  },
  {
    id: 'pf-4',
    title: '¿Cuándo usar cada diagnóstico CIE-10?',
    content: (
      <div>
        <p className="mb-3 leading-relaxed">Selecciona el diagnóstico según el motivo de consulta:</p>
        <ul className="list-disc list-inside space-y-2">
          <li className="leading-relaxed"><strong>Z300</strong>: Cuando se brinda asesoría general sobre anticoncepción</li>
          <li className="leading-relaxed"><strong>Z304</strong>: Para seguimiento de métodos hormonales (píldoras, inyectables)</li>
          <li className="leading-relaxed"><strong>Z305</strong>: Para seguimiento de DIU</li>
          <li className="leading-relaxed"><strong>Z316</strong>: Asesoría sobre procreación y fertilidad</li>
          <li className="leading-relaxed"><strong>Z308/Z309</strong>: Otras atenciones o no especificadas</li>
        </ul>
      </div>
    ),
  },
  {
    id: 'pf-5',
    title: '¿Puede enfermería realizar consultas de planificación familiar?',
    content: (
      <p className="leading-relaxed">
        Sí, enfermería puede realizar tanto consultas de primera vez como controles de
        planificación familiar. Los códigos *890205-5 (primera vez) y *890305-5 (control)
        están específicamente diseñados para atención por enfermería profesional, siempre
        dentro del marco de competencias establecido.
      </p>
    ),
  },
];

export default function PlanificacionFamiliarPage() {
  return (
    <SectionTemplate
      title="Planificación Familiar"
      description="Facturación de servicios de anticoncepción, asesoría y seguimiento en planificación familiar."
      icon={Heart}
      breadcrumbs={[
        { label: 'Facturación P&P', href: '/facturacion-pyp' },
        { label: 'Planificación Familiar' },
      ]}
      previousPage={{
        title: 'Facturación P&P',
        href: '/facturacion-pyp',
      }}
      nextPage={{
        title: 'Ruta Materno Perinatal',
        href: '/facturacion-pyp/ruta-materno-perinatal',
      }}
    >
      {/* Introducción - Lead Paragraph */}
      <SectionBackground variant="default" spacing="normal">
        <ArticleContainer maxWidth="prose">
          <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
            Los servicios de planificación familiar son una prioridad en salud pública
            y hacen parte de los derechos sexuales y reproductivos. Su correcta
            facturación asegura la continuidad de estos programas y garantiza el acceso
            universal a métodos anticonceptivos.
          </p>

          <Alert variant="info" title="Población objetivo">
            Personas entre <strong>10 y 54 años</strong> que deseen regular su fecundidad,
            incluyendo adolescentes con capacidad de ejercer sus derechos sexuales y
            reproductivos.
          </Alert>
        </ArticleContainer>
      </SectionBackground>

      {/* Parámetros de Facturación - Fondo Gris */}
      <SectionBackground variant="muted" spacing="large">
        <ArticleContainer maxWidth="prose">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Parámetros de Facturación
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
            Estos son los parámetros estándar que se deben usar en todos los registros de planificación familiar.
          </p>

          <div className="space-y-3">
            <CompactCard variant="highlighted">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-blue-100 dark:bg-blue-900/40 rounded-lg shrink-0">
                  <Hash className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Finalidad:</span>
                    <span className="text-lg font-bold text-blue-600 dark:text-blue-400">19</span>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-0.5">
                    Planificación Familiar y Anticoncepción
                  </p>
                </div>
              </div>
            </CompactCard>

            <CompactCard variant="highlighted">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-green-100 dark:bg-green-900/40 rounded-lg shrink-0">
                  <Hash className="w-5 h-5 text-green-600 dark:text-green-400" />
                </div>
                <div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Causa Externa:</span>
                    <span className="text-lg font-bold text-green-600 dark:text-green-400">40</span>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-0.5">
                    Promoción y Mantenimiento de la Salud o Intervenciones Individuales
                  </p>
                </div>
              </div>
            </CompactCard>
          </div>
        </ArticleContainer>
      </SectionBackground>

      {/* Separador Decorativo */}
      <SectionDivider variant="decorative" icon={Heart} />

      {/* Códigos CUPS - Fondo Blanco */}
      <SectionBackground variant="default" spacing="large">
        <ArticleContainer maxWidth="wide">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
            Códigos CUPS para Consultas
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
            Códigos para atención de primera vez y control en planificación familiar.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="border-b-2 border-gray-300 dark:border-gray-700">
                <tr>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 dark:text-white">
                    CUPS
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 dark:text-white">
                    Descripción
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 dark:text-white">
                    Tipo
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 dark:text-white">
                    Profesional
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-800">
                {consultasPlanificacion.map((consulta) => (
                  <tr
                    key={consulta.cups}
                    className="hover:bg-gray-50 dark:hover:bg-gray-900/50 transition-colors"
                  >
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-2">
                        <code className="font-mono text-sm font-semibold text-primary-600 dark:text-primary-400">
                          {consulta.cups}
                        </code>
                        <CopyButton text={consulta.cups} size="sm" />
                      </div>
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-700 dark:text-gray-300">
                      {consulta.descripcion}
                    </td>
                    <td className="px-4 py-3">
                      <Badge
                        variant={consulta.tipo === 'Primera Vez' ? 'purple' : 'blue'}
                        size="sm"
                      >
                        {consulta.tipo}
                      </Badge>
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-700 dark:text-gray-300">
                      {consulta.profesional}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </ArticleContainer>
      </SectionBackground>

      {/* Diagnósticos CIE-10 - Fondo Gris */}
      <SectionBackground variant="muted" spacing="normal">
        <ArticleContainer maxWidth="wide">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
            Diagnósticos CIE-10 Aplicables
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
            Selecciona el diagnóstico según el motivo de consulta. Todos los códigos CUPS
            de planificación familiar pueden usar cualquiera de estos diagnósticos.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="border-b-2 border-gray-300 dark:border-gray-700">
                <tr>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 dark:text-white">
                    Código CIE-10
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 dark:text-white">
                    Descripción
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-800">
                {diagnosticosCIE10.map((diagnostico) => (
                  <tr
                    key={diagnostico.codigo}
                    className="hover:bg-gray-50 dark:hover:bg-gray-900/50 transition-colors"
                  >
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-2">
                        <code className="font-mono font-semibold text-primary-600 dark:text-primary-400 text-sm">
                          {diagnostico.codigo}
                        </code>
                        <CopyButton text={diagnostico.codigo} size="sm" />
                      </div>
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                      {diagnostico.descripcion}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </ArticleContainer>
      </SectionBackground>

      {/* Causales de Glosa - Fondo Blanco */}
      <SectionBackground variant="default" spacing="normal">
        <ArticleContainer maxWidth="prose">
          <Alert variant="danger" className="p-5">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">
              Causales frecuentes de glosa
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              Evita estas situaciones que pueden generar glosas en la facturación:
            </p>
            <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <X className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                      Facturar consulta de control sin una primera vez previa registrada
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <X className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                      No documentar adecuadamente el método anticonceptivo seleccionado
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <X className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                      Usar finalidad o causa externa incorrecta (debe ser 19 y 40 respectivamente)
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <X className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                      No registrar el consentimiento informado cuando aplique
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <X className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                      Facturar fuera del rango de edad establecido (10-54 años)
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <X className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                      No especificar el diagnóstico CIE-10 adecuado al motivo de consulta
                    </span>
                  </li>
                </ul>
          </Alert>
        </ArticleContainer>
      </SectionBackground>

      {/* Documentación Requerida - Fondo Gris */}
      <SectionBackground variant="muted" spacing="large">
        <ArticleContainer maxWidth="prose">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Documentación requerida
          </h2>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
            Para facturar correctamente los servicios de planificación familiar, asegúrate de tener:
          </p>

          <div className="space-y-3">
            <CompactCard variant="default">
              <div className="flex items-start gap-3">
                <FileCheck className="w-5 h-5 text-primary-600 dark:text-primary-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white text-sm mb-0.5">
                    Historia clínica completa
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Con motivo de consulta y antecedentes documentados
                  </p>
                </div>
              </div>
            </CompactCard>

            <CompactCard variant="default">
              <div className="flex items-start gap-3">
                <FileCheck className="w-5 h-5 text-primary-600 dark:text-primary-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white text-sm mb-0.5">
                    Consentimiento informado
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Firmado por el usuario
                  </p>
                </div>
              </div>
            </CompactCard>

            <CompactCard variant="default">
              <div className="flex items-start gap-3">
                <FileCheck className="w-5 h-5 text-primary-600 dark:text-primary-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white text-sm mb-0.5">
                    Registro del método anticonceptivo
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Seleccionado o en seguimiento
                  </p>
                </div>
              </div>
            </CompactCard>

            <CompactCard variant="default">
              <div className="flex items-start gap-3">
                <FileCheck className="w-5 h-5 text-primary-600 dark:text-primary-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white text-sm mb-0.5">
                    Plan de seguimiento
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Con fecha de próxima cita
                  </p>
                </div>
              </div>
            </CompactCard>

            <CompactCard variant="default">
              <div className="flex items-start gap-3">
                <FileCheck className="w-5 h-5 text-primary-600 dark:text-primary-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white text-sm mb-0.5">
                    Educación brindada
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Documentada en la historia clínica
                  </p>
                </div>
              </div>
            </CompactCard>
          </div>

          <Alert variant="tip" title="Buena práctica" className="mt-6">
            Documenta detalladamente la asesoría brindada, las opciones presentadas y la
            decisión informada del usuario. Esto no solo evita glosas, sino que también
            protege legalmente al profesional y a la institución.
          </Alert>
        </ArticleContainer>
      </SectionBackground>

      {/* Preguntas Frecuentes - Fondo Blanco */}
      <SectionBackground variant="default" spacing="large">
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

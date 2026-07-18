import { Heart, ClipboardList } from 'lucide-react';
import { SectionTemplate } from '@/components/templates';
import { ArticleContainer, SectionBackground } from '@/components/layout';
import { Alert, Accordion, SectionDivider, CompactCard } from '@/components/ui';

const componentesHC = [
  { componente: 'Identificación', contenido: 'Datos del paciente, aseguradora, fecha.' },
  { componente: 'Motivo de consulta', contenido: 'Deseo de anticoncepción, cambio de método, control.' },
  { componente: 'Antecedentes', contenido: 'Gineco-obstétricos, patológicos, familiares, alérgicos.' },
  { componente: 'Historia sexual', contenido: 'Edad de inicio, número de parejas, ITS previas.' },
  { componente: 'Examen físico', contenido: 'Signos vitales, IMC, examen de mamas y pélvico si aplica.' },
  { componente: 'Diagnóstico', contenido: 'CIE-10 correspondiente (Z30.x).' },
  { componente: 'Plan', contenido: 'Método seleccionado, educación brindada, próximo control.' },
];

const faqItems = [
  {
    id: 'hcpf-1',
    title: '¿Qué información debe incluir el consentimiento informado?',
    content: (
      <ul className="list-disc list-inside space-y-1">
        <li>Nombre del procedimiento o método</li>
        <li>Descripción del procedimiento</li>
        <li>Beneficios esperados</li>
        <li>Riesgos y efectos secundarios posibles</li>
        <li>Alternativas disponibles</li>
        <li>Derecho a revocar el consentimiento</li>
        <li>Firma del paciente y del profesional</li>
        <li>Fecha y hora</li>
      </ul>
    ),
  },
  {
    id: 'hcpf-2',
    title: '¿Cómo documentar la asesoría en planificación familiar?',
    content: (
      <p>
        La asesoría debe quedar documentada indicando: métodos explicados,
        criterios de elegibilidad revisados, método seleccionado y razón de
        la elección, información brindada sobre uso correcto, efectos secundarios
        esperados y signos de alarma, y confirmación de comprensión por parte
        de la usuaria.
      </p>
    ),
  },
  {
    id: 'hcpf-3',
    title: '¿Es obligatorio el consentimiento para todos los métodos?',
    content: (
      <p>
        Sí, todos los métodos anticonceptivos requieren consentimiento informado.
        Para métodos de larga duración (DIU, implante) y definitivos (ligadura,
        vasectomía) se requiere formato específico. Para métodos de corta duración
        puede documentarse en la historia clínica.
      </p>
    ),
  },
];

export default function HCPlanificacionFamiliarPage() {
  return (
    <SectionTemplate
      title="Historia Clínica en Planificación Familiar"
      description="Guía para el registro correcto de la atención en planificación familiar."
      icon={Heart}
      breadcrumbs={[
        { label: 'Historias Clínicas', href: '/historias-clinicas' },
        { label: 'Planificación Familiar' },
      ]}
      previousPage={{
        title: 'Historias Clínicas',
        href: '/historias-clinicas',
      }}
      nextPage={{
        title: 'Ruta Materno Perinatal',
        href: '/historias-clinicas/ruta-materno-perinatal',
      }}
    >
      {/* Introducción - Fondo Blanco */}
      <SectionBackground variant="default" spacing="normal">
        <ArticleContainer maxWidth="prose">
          <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
            El registro de la atención en planificación familiar debe documentar
            de manera completa la asesoría brindada, la elección informada del
            método anticonceptivo y el seguimiento correspondiente.
          </p>

          <Alert variant="info" title="Autonomía del paciente">
            Recuerda que la elección del método anticonceptivo es una decisión
            autónoma del paciente. Tu rol es informar de manera imparcial sobre
            todas las opciones disponibles.
          </Alert>
        </ArticleContainer>
      </SectionBackground>

      {/* Componentes de la HC - Fondo Gris */}
      <SectionBackground variant="muted" spacing="large">
        <ArticleContainer maxWidth="prose">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Componentes de la Historia Clínica
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
            Todos estos componentes deben estar presentes en cada atención de planificación familiar.
          </p>

          <div className="space-y-3">
            {componentesHC.map((item, index) => (
              <CompactCard key={index} variant="default">
                <div className="flex items-start gap-3">
                  <div className="shrink-0 w-7 h-7 rounded-full bg-purple-100 dark:bg-purple-900/40 flex items-center justify-center">
                    <span className="text-xs font-bold text-purple-700 dark:text-purple-300">{index + 1}</span>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-900 dark:text-white">
                      {item.componente}:{' '}
                    </span>
                    <span className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                      {item.contenido}
                    </span>
                  </div>
                </div>
              </CompactCard>
            ))}
          </div>
        </ArticleContainer>
      </SectionBackground>

      {/* Separador Decorativo */}
      <SectionDivider variant="decorative" icon={ClipboardList} />

      {/* Formato SOAP - Fondo Blanco */}
      <SectionBackground variant="default" spacing="large">
        <ArticleContainer maxWidth="prose">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Formato SOAP para Notas de Evolución
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
            Las notas de control o evolución deben seguir el formato SOAP para garantizar
            un registro completo y estructurado de cada atención.
          </p>

          <div className="space-y-3">
            {[
              { letra: 'S', color: 'blue', titulo: 'Subjetivo', desc: 'Lo que refiere la paciente — síntomas, preocupaciones, efectos del método.' },
              { letra: 'O', color: 'green', titulo: 'Objetivo', desc: 'Hallazgos del examen físico — signos vitales, peso, examen pertinente.' },
              { letra: 'A', color: 'orange', titulo: 'Análisis', desc: 'Interpretación clínica — tolerancia al método, diagnósticos.' },
              { letra: 'P', color: 'purple', titulo: 'Plan', desc: 'Conducta a seguir — continuar método, cambio, próxima cita.' },
            ].map((item) => (
              <CompactCard key={item.letra} variant="default">
                <div className="flex items-start gap-3">
                  <div className={`shrink-0 w-10 h-10 rounded-lg flex items-center justify-center font-bold text-lg
                    ${item.color === 'blue' ? 'bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300' : ''}
                    ${item.color === 'green' ? 'bg-green-100 dark:bg-green-900/40 text-green-700 dark:text-green-300' : ''}
                    ${item.color === 'orange' ? 'bg-orange-100 dark:bg-orange-900/40 text-orange-700 dark:text-orange-300' : ''}
                    ${item.color === 'purple' ? 'bg-purple-100 dark:bg-purple-900/40 text-purple-700 dark:text-purple-300' : ''}
                  `}>
                    {item.letra}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-0.5">
                      {item.titulo}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </CompactCard>
            ))}
          </div>

          <Alert variant="warning" title="Importante" className="mt-6">
            Nunca dejes espacios en blanco en la historia clínica. Si un campo
            no aplica, escribe &quot;No aplica&quot; o &quot;N/A&quot;. Los espacios vacíos pueden
            ser llenados posteriormente, lo que invalida el documento.
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

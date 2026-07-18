import { Users, Baby, GraduationCap, HeartPulse } from 'lucide-react';
import { SectionTemplate } from '@/components/templates';
import { ArticleContainer, SectionBackground } from '@/components/layout';
import { Alert, Accordion, Quiz, SectionDivider, CompactCard } from '@/components/ui';

const faqItems = [
  {
    id: 'hccv-1',
    title: '¿Qué escalas de desarrollo se usan en primera infancia?',
    content: (
      <p>
        En Colombia se utiliza la Escala Abreviada de Desarrollo (EAD-3)
        que evalúa motricidad gruesa, motricidad fino-adaptativa, audición
        y lenguaje, y personal-social. El resultado debe registrarse con
        la interpretación: adecuado, en riesgo o con retraso.
      </p>
    ),
  },
  {
    id: 'hccv-2',
    title: '¿Cómo documentar la valoración del adolescente?',
    content: (
      <p>
        La valoración del adolescente debe incluir evaluación de desarrollo
        puberal (Tanner), tamizaje de riesgos psicosociales (HEADSS),
        orientación en salud sexual y reproductiva, y detección de conductas
        de riesgo. Recordar la confidencialidad con el adolescente.
      </p>
    ),
  },
  {
    id: 'hccv-3',
    title: '¿Qué incluye la valoración geriátrica integral?',
    content: (
      <ul className="list-disc list-inside space-y-1">
        <li>Estado funcional (Barthel, Lawton)</li>
        <li>Estado cognitivo (Mini-Mental, MoCA)</li>
        <li>Estado afectivo (Yesavage)</li>
        <li>Estado nutricional (MNA)</li>
        <li>Riesgo de caídas</li>
        <li>Red de apoyo social</li>
        <li>Polifarmacia</li>
      </ul>
    ),
  },
];

const quizQuestions = [
  {
    id: 'qhc1',
    question: '¿Qué formato se recomienda para las notas de evolución en historia clínica?',
    options: [
      { id: 'a', text: 'Texto libre sin estructura' },
      { id: 'b', text: 'Formato SOAP (Subjetivo, Objetivo, Análisis, Plan)' },
      { id: 'c', text: 'Solo diagnósticos CIE-10' },
      { id: 'd', text: 'Listado de medicamentos' },
    ],
    correctOptionId: 'b',
    explanation: 'El formato SOAP es el estándar recomendado para notas de evolución porque asegura un registro completo y estructurado de la atención.',
  },
  {
    id: 'qhc2',
    question: '¿Cuál es el valor legal de un espacio en blanco en la historia clínica?',
    options: [
      { id: 'a', text: 'No tiene importancia' },
      { id: 'b', text: 'Indica que no hubo hallazgos' },
      { id: 'c', text: 'Puede invalidar el documento por posible adulteración' },
      { id: 'd', text: 'Significa que el paciente no colaboró' },
    ],
    correctOptionId: 'c',
    explanation: 'Los espacios en blanco pueden ser llenados posteriormente, lo que constituye adulteración del documento. Siempre debe escribirse "No aplica" o "N/A" si un campo no se utiliza.',
  },
  {
    id: 'qhc3',
    question: '¿Quién es el propietario legal de la historia clínica?',
    options: [
      { id: 'a', text: 'El médico que la escribió' },
      { id: 'b', text: 'El paciente' },
      { id: 'c', text: 'La institución de salud que la custodia' },
      { id: 'd', text: 'La EPS del paciente' },
    ],
    correctOptionId: 'b',
    explanation: 'Según la normatividad colombiana, el paciente es el propietario de la información contenida en la historia clínica. La institución es el custodio responsable de su conservación.',
  },
];

export default function HCCiclosVidaPage() {
  return (
    <SectionTemplate
      title="Historia Clínica por Ciclos de Vida"
      description="Registro de controles y valoraciones según la etapa del ciclo vital."
      icon={Users}
      breadcrumbs={[
        { label: 'Historias Clínicas', href: '/historias-clinicas' },
        { label: 'Ciclos de Vida' },
      ]}
      previousPage={{
        title: 'Ruta Materno Perinatal',
        href: '/historias-clinicas/ruta-materno-perinatal',
      }}
      nextPage={{
        title: 'Vigilancia Epidemiológica',
        href: '/vigilancia-epidemiologica',
      }}
    >
      {/* Introducción - Fondo Blanco */}
      <SectionBackground variant="default" spacing="normal">
        <ArticleContainer maxWidth="prose">
          <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
            Cada etapa del ciclo vital tiene requerimientos específicos de
            valoración y registro. Es importante conocer las escalas y
            herramientas de evaluación propias de cada grupo etario para
            garantizar un registro completo y pertinente.
          </p>
        </ArticleContainer>
      </SectionBackground>

      {/* Primera infancia - Fondo Gris */}
      <SectionBackground variant="muted" spacing="large">
        <ArticleContainer maxWidth="prose">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-pink-100 dark:bg-pink-900/40 rounded-lg shrink-0">
              <Baby className="w-5 h-5 text-pink-600 dark:text-pink-400" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              Primera Infancia (0–5 años)
            </h2>
          </div>
          <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
            El registro debe incluir valoración del crecimiento (curvas OMS),
            desarrollo psicomotor (EAD-3), alimentación, vacunación y
            detección de alteraciones. La periodicidad del control varía
            según la edad.
          </p>

          <div className="space-y-3">
            <CompactCard variant="default">
              <div className="flex items-start gap-2">
                <span className="text-primary-600 dark:text-primary-400 shrink-0 mt-0.5">•</span>
                <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                  <strong>Crecimiento:</strong> Peso, talla y perímetro cefálico graficados en curvas OMS.
                </p>
              </div>
            </CompactCard>
            <CompactCard variant="default">
              <div className="flex items-start gap-2">
                <span className="text-primary-600 dark:text-primary-400 shrink-0 mt-0.5">•</span>
                <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                  <strong>Desarrollo:</strong> Escala Abreviada de Desarrollo EAD-3 con resultado interpretado.
                </p>
              </div>
            </CompactCard>
            <CompactCard variant="default">
              <div className="flex items-start gap-2">
                <span className="text-primary-600 dark:text-primary-400 shrink-0 mt-0.5">•</span>
                <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                  <strong>Vacunación:</strong> Estado del esquema PAI y registro de dosis aplicadas.
                </p>
              </div>
            </CompactCard>
          </div>

          <Alert variant="tip" title="Recuerda" className="mt-6">
            En menores de 2 años, el perímetro cefálico es un indicador
            importante que siempre debe registrarse junto con peso y talla.
          </Alert>
        </ArticleContainer>
      </SectionBackground>

      {/* Separador */}
      <SectionDivider variant="decorative" icon={GraduationCap} />

      {/* Infancia y adolescencia - Fondo Blanco */}
      <SectionBackground variant="default" spacing="large">
        <ArticleContainer maxWidth="prose">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-blue-100 dark:bg-blue-900/40 rounded-lg shrink-0">
              <GraduationCap className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              Infancia y Adolescencia (6–17 años)
            </h2>
          </div>
          <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
            Además del crecimiento, se evalúa desarrollo puberal, rendimiento
            escolar, salud visual y auditiva, salud bucal y detección de
            conductas de riesgo en adolescentes.
          </p>

          <div className="space-y-3 mb-6">
            <CompactCard variant="default">
              <div className="flex items-start gap-2">
                <span className="text-primary-600 dark:text-primary-400 shrink-0 mt-0.5">•</span>
                <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                  <strong>Desarrollo puberal:</strong> Estadios de Tanner documentados.
                </p>
              </div>
            </CompactCard>
            <CompactCard variant="default">
              <div className="flex items-start gap-2">
                <span className="text-primary-600 dark:text-primary-400 shrink-0 mt-0.5">•</span>
                <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                  <strong>Tamizaje psicosocial:</strong> Herramienta HEADSS (Hogar, Educación, Actividades, Drogas, Sexualidad, Suicidio).
                </p>
              </div>
            </CompactCard>
            <CompactCard variant="default">
              <div className="flex items-start gap-2">
                <span className="text-primary-600 dark:text-primary-400 shrink-0 mt-0.5">•</span>
                <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                  <strong>Salud sexual y reproductiva:</strong> Orientación e información documentada en la HC.
                </p>
              </div>
            </CompactCard>
          </div>

          <Alert variant="warning" title="Confidencialidad en adolescentes">
            A partir de los 14 años, el adolescente tiene derecho a
            confidencialidad en temas de salud sexual y reproductiva.
            Documenta qué información se compartió con los padres.
          </Alert>
        </ArticleContainer>
      </SectionBackground>

      {/* Adulto y adulto mayor - Fondo Gris */}
      <SectionBackground variant="muted" spacing="large">
        <ArticleContainer maxWidth="prose">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-orange-100 dark:bg-orange-900/40 rounded-lg shrink-0">
              <HeartPulse className="w-5 h-5 text-orange-600 dark:text-orange-400" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              Adulto y Adulto Mayor (18 años en adelante)
            </h2>
          </div>
          <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
            El enfoque es la detección de factores de riesgo cardiovascular,
            tamizajes de cáncer según edad y sexo, y valoración de la
            funcionalidad. En adultos mayores se aplica valoración geriátrica
            integral.
          </p>

          <div className="space-y-3">
            <CompactCard variant="default">
              <div className="flex items-start gap-2">
                <span className="text-primary-600 dark:text-primary-400 shrink-0 mt-0.5">•</span>
                <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                  <strong>Riesgo cardiovascular:</strong> HTA, diabetes, dislipidemia, tabaquismo, obesidad.
                </p>
              </div>
            </CompactCard>
            <CompactCard variant="default">
              <div className="flex items-start gap-2">
                <span className="text-primary-600 dark:text-primary-400 shrink-0 mt-0.5">•</span>
                <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                  <strong>Tamizajes oncológicos:</strong> Cáncer de cuello uterino, mama, próstata, colon según edad y sexo.
                </p>
              </div>
            </CompactCard>
            <CompactCard variant="default">
              <div className="flex items-start gap-2">
                <span className="text-primary-600 dark:text-primary-400 shrink-0 mt-0.5">•</span>
                <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                  <strong>Valoración geriátrica:</strong> Funcionalidad (Barthel, Lawton), cognitivo (Mini-Mental, MoCA), afectivo (Yesavage), riesgo de caídas.
                </p>
              </div>
            </CompactCard>
          </div>
        </ArticleContainer>
      </SectionBackground>

      {/* Preguntas frecuentes - Fondo Blanco */}
      <SectionBackground variant="default" spacing="large">
        <ArticleContainer maxWidth="prose">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Preguntas Frecuentes
          </h2>
          <Accordion items={faqItems} />
        </ArticleContainer>
      </SectionBackground>

      {/* Quiz - Fondo Gris */}
      <SectionBackground variant="muted" spacing="large">
        <ArticleContainer maxWidth="prose">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Evaluación del Módulo de Historias Clínicas
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
            Completa esta evaluación para verificar tu comprensión sobre el
            correcto diligenciamiento de historias clínicas.
          </p>
          <Quiz
            title="Evaluación: Historias Clínicas"
            questions={quizQuestions}
            passingScore={70}
          />
        </ArticleContainer>
      </SectionBackground>
    </SectionTemplate>
  );
}

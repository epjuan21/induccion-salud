# FASE 10: Contenido - Diligenciamiento de Historias Clínicas

## Resumen
| Campo | Valor |
|-------|-------|
| **Fase** | 10 de 13 |
| **Nombre** | Contenido - Diligenciamiento de Historias Clínicas |
| **Objetivo** | Tercera sección completamente poblada con 3 subsecciones |
| **Prerequisitos** | Fase 8-9 completada |

---

## Instrucciones para Claude Code

> **IMPORTANTE**: Esta fase crea el contenido del módulo de Historias Clínicas.

---

## TAREA 1: Crear Página Principal del Módulo

### Archivo: `src/app/historias-clinicas/page.tsx`

```tsx
import { FileText, ClipboardCheck, AlertTriangle, Scale, ShieldCheck } from 'lucide-react';
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
```

- [ ] Página principal del módulo creada

---

## TAREA 2: Crear Página de HC - Planificación Familiar

### Archivo: `src/app/historias-clinicas/planificacion-familiar/page.tsx`

```tsx
import { Heart } from 'lucide-react';
import { SectionTemplate } from '@/components/templates';
import { ContentBlock } from '@/components/content';
import { Alert, Accordion, Card, CardContent } from '@/components/ui';

const componentesHC = [
  { componente: 'Identificación', contenido: 'Datos del paciente, aseguradora, fecha' },
  { componente: 'Motivo de consulta', contenido: 'Deseo de anticoncepción, cambio de método, control' },
  { componente: 'Antecedentes', contenido: 'Gineco-obstétricos, patológicos, familiares, alérgicos' },
  { componente: 'Historia sexual', contenido: 'Edad de inicio, número de parejas, ITS previas' },
  { componente: 'Examen físico', contenido: 'Signos vitales, IMC, examen de mamas y pélvico si aplica' },
  { componente: 'Diagnóstico', contenido: 'CIE-10 correspondiente (Z30.x)' },
  { componente: 'Plan', contenido: 'Método seleccionado, educación, próximo control' },
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
      <ContentBlock>
        <h2>Introducción</h2>
        <p>
          El registro de la atención en planificación familiar debe documentar
          de manera completa la asesoría brindada, la elección informada del
          método anticonceptivo y el seguimiento correspondiente.
        </p>

        <Alert variant="info" title="Autonomía del paciente">
          Recuerda que la elección del método anticonceptivo es una decisión
          autónoma del paciente. Tu rol es informar de manera imparcial sobre
          todas las opciones disponibles.
        </Alert>
      </ContentBlock>

      {/* Componentes de la HC */}
      <div className="my-8">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          Componentes de la Historia Clínica
        </h2>
        <div className="space-y-3">
          {componentesHC.map((item, index) => (
            <Card key={index}>
              <CardContent className="p-4">
                <div className="flex flex-col md:flex-row md:items-center gap-2">
                  <span className="font-semibold text-gray-900 dark:text-white min-w-[180px]">
                    {item.componente}:
                  </span>
                  <span className="text-gray-600 dark:text-gray-400">
                    {item.contenido}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <ContentBlock>
        <h2>Formato SOAP para notas de evolución</h2>
        <p>
          Las notas de control o evolución deben seguir el formato SOAP:
        </p>
        <ul>
          <li><strong>S (Subjetivo):</strong> Lo que refiere la paciente - síntomas, preocupaciones, efectos del método</li>
          <li><strong>O (Objetivo):</strong> Hallazgos del examen físico - signos vitales, peso, examen pertinente</li>
          <li><strong>A (Análisis):</strong> Interpretación clínica - tolerancia al método, diagnósticos</li>
          <li><strong>P (Plan):</strong> Conducta a seguir - continuar método, cambio, próximo control</li>
        </ul>

        <Alert variant="warning" title="Importante">
          Nunca dejes espacios en blanco en la historia clínica. Si un campo
          no aplica, escribe &quot;No aplica&quot; o &quot;N/A&quot;. Los espacios vacíos pueden
          ser llenados posteriormente, lo que invalida el documento.
        </Alert>
      </ContentBlock>

      {/* FAQ */}
      <div className="my-8">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          Preguntas Frecuentes
        </h2>
        <Accordion items={faqItems} />
      </div>
    </SectionTemplate>
  );
}
```

- [ ] Página de HC Planificación Familiar creada

---

## TAREA 3: Crear Página de HC - Ruta Materno Perinatal

### Archivo: `src/app/historias-clinicas/ruta-materno-perinatal/page.tsx`

```tsx
import { Baby } from 'lucide-react';
import { SectionTemplate } from '@/components/templates';
import { ContentBlock } from '@/components/content';
import { Alert, Accordion, Card, CardContent } from '@/components/ui';

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
      <ContentBlock>
        <h2>Introducción</h2>
        <p>
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
      </ContentBlock>

      {/* Registros obligatorios */}
      <div className="my-8">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          Registros Obligatorios en Control Prenatal
        </h2>
        <Card>
          <CardContent className="p-4">
            <ul className="grid gap-2 md:grid-cols-2">
              {registrosObligatorios.map((item, index) => (
                <li key={index} className="flex items-start gap-2 text-sm">
                  <span className="text-green-500 mt-0.5">✓</span>
                  <span className="text-gray-700 dark:text-gray-300">{item}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>

      <ContentBlock>
        <h2>El Partograma</h2>
        <p>
          El partograma es una herramienta gráfica que permite vigilar el
          progreso del trabajo de parto y detectar desviaciones de la normalidad.
          Su diligenciamiento es obligatorio en todas las instituciones.
        </p>

        <h3>Elementos del partograma:</h3>
        <ul>
          <li>Dilatación cervical (curva de alerta y curva de acción)</li>
          <li>Descenso de la presentación</li>
          <li>Frecuencia cardíaca fetal</li>
          <li>Características de las contracciones</li>
          <li>Estado de las membranas</li>
          <li>Características del líquido amniótico</li>
          <li>Signos vitales maternos</li>
          <li>Medicamentos administrados</li>
        </ul>

        <Alert variant="warning" title="Importante">
          El partograma debe iniciarse cuando la gestante tiene 4 cm de dilatación
          y se encuentra en fase activa de trabajo de parto. Debe actualizarse
          cada hora.
        </Alert>
      </ContentBlock>

      {/* FAQ */}
      <div className="my-8">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          Preguntas Frecuentes
        </h2>
        <Accordion items={faqItems} />
      </div>
    </SectionTemplate>
  );
}
```

- [ ] Página de HC Ruta Materno Perinatal creada

---

## TAREA 4: Crear Página de HC - Ciclos de Vida

### Archivo: `src/app/historias-clinicas/ciclos-vida/page.tsx`

```tsx
import { Users } from 'lucide-react';
import { SectionTemplate } from '@/components/templates';
import { ContentBlock } from '@/components/content';
import { Alert, Accordion, Quiz } from '@/components/ui';

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
      <ContentBlock>
        <h2>Introducción</h2>
        <p>
          Cada etapa del ciclo vital tiene requerimientos específicos de
          valoración y registro. Es importante conocer las escalas y
          herramientas de evaluación propias de cada grupo etario.
        </p>
      </ContentBlock>

      {/* Contenido por ciclo de vida */}
      <div className="my-8 space-y-6">
        <ContentBlock>
          <h2>Primera Infancia (0-5 años)</h2>
          <p>
            El registro debe incluir valoración del crecimiento (curvas OMS),
            desarrollo psicomotor (EAD-3), alimentación, vacunación y
            detección de alteraciones. La periodicidad del control varía
            según la edad.
          </p>

          <Alert variant="tip" title="Recuerda">
            En menores de 2 años, el perímetro cefálico es un indicador
            importante que siempre debe registrarse junto con peso y talla.
          </Alert>
        </ContentBlock>

        <ContentBlock>
          <h2>Infancia y Adolescencia (6-17 años)</h2>
          <p>
            Además del crecimiento, se evalúa desarrollo puberal, rendimiento
            escolar, salud visual y auditiva, salud bucal y detección de
            conductas de riesgo en adolescentes.
          </p>

          <Alert variant="warning" title="Confidencialidad en adolescentes">
            A partir de los 14 años, el adolescente tiene derecho a
            confidencialidad en temas de salud sexual y reproductiva.
            Documenta qué información se compartió con los padres.
          </Alert>
        </ContentBlock>

        <ContentBlock>
          <h2>Adulto y Adulto Mayor</h2>
          <p>
            El enfoque es la detección de factores de riesgo cardiovascular,
            tamizajes de cáncer según edad y sexo, y valoración de la
            funcionalidad. En adultos mayores se aplica valoración geriátrica
            integral.
          </p>
        </ContentBlock>
      </div>

      {/* FAQ */}
      <div className="my-8">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          Preguntas Frecuentes
        </h2>
        <Accordion items={faqItems} />
      </div>

      {/* Quiz */}
      <div className="my-8">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          Evaluación del Módulo de Historias Clínicas
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          Completa esta evaluación para verificar tu comprensión sobre el
          correcto diligenciamiento de historias clínicas.
        </p>
        <Quiz
          title="Evaluación: Historias Clínicas"
          questions={quizQuestions}
          passingScore={70}
        />
      </div>
    </SectionTemplate>
  );
}
```

- [ ] Página de HC Ciclos de Vida creada con Quiz del módulo

---

## TAREA 5: Verificación Final

### Comandos de verificación:
```bash
npm run build
npm run dev
```

### URLs a verificar:
- `http://localhost:3000/historias-clinicas`
- `http://localhost:3000/historias-clinicas/planificacion-familiar`
- `http://localhost:3000/historias-clinicas/ruta-materno-perinatal`
- `http://localhost:3000/historias-clinicas/ciclos-vida`

### Checklist de verificación:
- [ ] Página principal muestra las 3 subsecciones
- [ ] Navegación entre subsecciones funciona
- [ ] Breadcrumbs correctos en cada página
- [ ] Contenido educativo visible y legible
- [ ] Accordions de FAQ funcionan
- [ ] Quiz de evaluación funciona
- [ ] Sin errores en consola

---

## Entregable de la Fase 10

✅ Página principal de Historias Clínicas con 3 subsecciones

✅ 3 Subsecciones completamente pobladas:
  1. Planificación Familiar - componentes de HC, formato SOAP
  2. Ruta Materno Perinatal - registros obligatorios, partograma
  3. Ciclos de Vida - escalas por edad, quiz del módulo

✅ Contenido común:
  - Formato SOAP explicado
  - Alertas sobre aspectos legales
  - Preguntas frecuentes

✅ Quiz de evaluación del módulo

---

## Siguiente Fase

➡️ **FASE 11**: Contenido - Vigilancia Epidemiológica - Ver archivo `FASE-11-vigilancia-epidemiologica.md`

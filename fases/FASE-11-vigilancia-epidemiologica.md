# FASE 11: Contenido - Vigilancia Epidemiológica

## Resumen
| Campo | Valor |
|-------|-------|
| **Fase** | 11 de 13 |
| **Nombre** | Contenido - Vigilancia Epidemiológica |
| **Objetivo** | Cuarta y última sección de contenido poblada con 2 subsecciones |
| **Prerequisitos** | Fase 10 completada |

---

## Instrucciones para Claude Code

> **IMPORTANTE**: Esta fase crea el contenido del módulo de Vigilancia Epidemiológica.

---

## TAREA 1: Crear Página Principal del Módulo

### Archivo: `src/app/vigilancia-epidemiologica/page.tsx`

```tsx
import { Bug, AlertTriangle, Search, FileWarning, Bell } from 'lucide-react';
import { ModuleTemplate } from '@/components/templates';
import { Alert, Card, CardContent } from '@/components/ui';

const subsections = [
  {
    title: 'Conceptos Generales',
    description: 'Fundamentos de la vigilancia en salud pública y el sistema de notificación.',
    href: '/vigilancia-epidemiologica/conceptos-generales',
  },
  {
    title: 'Eventos Clave',
    description: 'Eventos de notificación obligatoria y procedimientos de reporte.',
    href: '/vigilancia-epidemiologica/eventos-clave',
  },
];

const objetivos = [
  {
    icon: Search,
    title: 'Detección',
    description: 'Identificar tempranamente eventos de interés en salud pública.',
  },
  {
    icon: Bell,
    title: 'Notificación',
    description: 'Reportar oportunamente los eventos al sistema de vigilancia.',
  },
  {
    icon: FileWarning,
    title: 'Respuesta',
    description: 'Activar acciones de control y prevención.',
  },
];

export default function VigilanciaEpidemiologicaPage() {
  return (
    <ModuleTemplate
      title="Vigilancia Epidemiológica"
      description="Conceptos fundamentales y procedimientos del sistema de vigilancia en salud pública."
      icon={Bug}
      breadcrumbs={[
        { label: 'Vigilancia Epidemiológica' },
      ]}
      subsections={subsections}
      introContent={
        <>
          <p>
            La vigilancia epidemiológica es el proceso sistemático de recolección,
            análisis e interpretación de datos de salud esenciales para la
            planificación, implementación y evaluación de las prácticas de salud
            pública.
          </p>

          <Alert variant="warning" title="Obligación legal" className="my-6">
            <p>
              La notificación de eventos de interés en salud pública es una
              obligación legal de todos los profesionales de salud. El incumplimiento
              puede generar sanciones disciplinarias y legales.
            </p>
          </Alert>

          <h3>Objetivos de la vigilancia</h3>
          <div className="grid gap-4 md:grid-cols-3 my-6 not-prose">
            {objetivos.map((objetivo) => {
              const Icon = objetivo.icon;
              return (
                <Card key={objetivo.title}>
                  <CardContent className="p-4 text-center">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-orange-100 dark:bg-orange-900/30 mb-3">
                      <Icon className="w-6 h-6 text-orange-600 dark:text-orange-400" />
                    </div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                      {objetivo.title}
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {objetivo.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <h3>Sistema de vigilancia en Colombia</h3>
          <p>
            El Sistema Nacional de Vigilancia en Salud Pública (SIVIGILA) es
            el sistema oficial de información para la vigilancia en salud
            pública. Es coordinado por el Instituto Nacional de Salud (INS).
          </p>

          <h3>Marco normativo</h3>
          <ul>
            <li><strong>Decreto 3518 de 2006</strong> - Crea y reglamenta el SIVIGILA</li>
            <li><strong>Ley 9 de 1979</strong> - Código Sanitario Nacional</li>
            <li><strong>Protocolos INS</strong> - Guías de vigilancia por evento</li>
          </ul>

          <h3>Objetivos de aprendizaje</h3>
          <p>Al completar este módulo serás capaz de:</p>
          <ul>
            <li>Comprender el funcionamiento del sistema de vigilancia</li>
            <li>Identificar eventos de notificación obligatoria</li>
            <li>Realizar notificación oportuna al SIVIGILA</li>
            <li>Conocer los tiempos de notificación según tipo de evento</li>
            <li>Participar en la investigación de campo de brotes</li>
          </ul>
        </>
      }
    />
  );
}
```

- [ ] Página principal del módulo creada

---

## TAREA 2: Crear Página de Conceptos Generales

### Archivo: `src/app/vigilancia-epidemiologica/conceptos-generales/page.tsx`

```tsx
import { BookOpen } from 'lucide-react';
import { SectionTemplate } from '@/components/templates';
import { ContentBlock } from '@/components/content';
import { Alert, Accordion, Card, CardContent } from '@/components/ui';

const tiposVigilancia = [
  {
    tipo: 'Vigilancia pasiva',
    descripcion: 'Notificación rutinaria de casos por las instituciones de salud.',
    ejemplo: 'Notificación semanal de casos de dengue.',
  },
  {
    tipo: 'Vigilancia activa',
    descripcion: 'Búsqueda activa de casos en la comunidad o instituciones.',
    ejemplo: 'Búsqueda de contactos en brote de tuberculosis.',
  },
  {
    tipo: 'Vigilancia centinela',
    descripcion: 'Monitoreo en sitios seleccionados para detectar tendencias.',
    ejemplo: 'Vigilancia de influenza en hospitales centinela.',
  },
  {
    tipo: 'Vigilancia sindrómica',
    descripcion: 'Monitoreo de síndromes antes de confirmación diagnóstica.',
    ejemplo: 'Síndrome febril agudo, síndrome diarreico agudo.',
  },
];

const faqItems = [
  {
    id: 've-1',
    title: '¿Qué es un evento de interés en salud pública?',
    content: (
      <p>
        Es aquella situación de salud que por su magnitud, severidad o
        potencial de diseminación requiere vigilancia especial. Incluye
        enfermedades transmisibles, no transmisibles, emergentes, reemergentes
        y otros eventos como brotes, intoxicaciones y emergencias.
      </p>
    ),
  },
  {
    id: 've-2',
    title: '¿Qué es la Unidad Primaria Generadora de Datos (UPGD)?',
    content: (
      <p>
        Es la institución prestadora de servicios de salud, laboratorio o
        entidad que identifica y notifica los eventos de vigilancia. Incluye
        hospitales, clínicas, centros de salud, laboratorios clínicos y de
        salud pública.
      </p>
    ),
  },
  {
    id: 've-3',
    title: '¿Cuál es la diferencia entre caso sospechoso, probable y confirmado?',
    content: (
      <ul className="list-disc list-inside space-y-1">
        <li><strong>Caso sospechoso:</strong> Cumple definición clínica o epidemiológica inicial</li>
        <li><strong>Caso probable:</strong> Caso sospechoso con nexo epidemiológico o criterios adicionales</li>
        <li><strong>Caso confirmado:</strong> Caso con confirmación por laboratorio o criterio clínico-epidemiológico según protocolo</li>
      </ul>
    ),
  },
  {
    id: 've-4',
    title: '¿Qué es una semana epidemiológica?',
    content: (
      <p>
        Es la unidad de tiempo utilizada para la notificación de eventos.
        El año tiene 52 o 53 semanas epidemiológicas. Cada semana inicia el
        domingo y termina el sábado. La notificación rutinaria se hace por
        semana epidemiológica.
      </p>
    ),
  },
];

export default function ConceptosGeneralesPage() {
  return (
    <SectionTemplate
      title="Conceptos Generales"
      description="Fundamentos de la vigilancia en salud pública y el sistema de notificación."
      icon={BookOpen}
      breadcrumbs={[
        { label: 'Vigilancia Epidemiológica', href: '/vigilancia-epidemiologica' },
        { label: 'Conceptos Generales' },
      ]}
      previousPage={{
        title: 'Vigilancia Epidemiológica',
        href: '/vigilancia-epidemiologica',
      }}
      nextPage={{
        title: 'Eventos Clave',
        href: '/vigilancia-epidemiologica/eventos-clave',
      }}
    >
      <ContentBlock>
        <h2>¿Qué es la vigilancia epidemiológica?</h2>
        <p>
          La vigilancia epidemiológica es la observación sistemática, continuada
          y oportuna de la ocurrencia y distribución de enfermedades y otros
          eventos de salud, así como de sus determinantes, para su utilización
          en la planificación, implementación y evaluación de medidas de
          prevención y control.
        </p>

        <Alert variant="info" title="SIVIGILA">
          El Sistema de Vigilancia en Salud Pública (SIVIGILA) es la plataforma
          nacional para la notificación de eventos. Todo personal de salud debe
          conocer su funcionamiento.
        </Alert>
      </ContentBlock>

      {/* Tipos de vigilancia */}
      <div className="my-8">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          Tipos de Vigilancia
        </h2>
        <div className="grid gap-4 md:grid-cols-2">
          {tiposVigilancia.map((item) => (
            <Card key={item.tipo}>
              <CardContent className="p-4">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  {item.tipo}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                  {item.descripcion}
                </p>
                <p className="text-xs text-primary-600 dark:text-primary-400">
                  <strong>Ejemplo:</strong> {item.ejemplo}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <ContentBlock>
        <h2>Flujo de la información</h2>
        <p>
          El flujo de información en vigilancia va desde la UPGD (nivel local)
          hacia la secretaría municipal/distrital de salud, luego a la
          secretaría departamental y finalmente al Instituto Nacional de Salud
          (nivel nacional).
        </p>

        <ol>
          <li>
            <strong>Detección del caso:</strong> El profesional de salud identifica
            un caso que cumple definición de evento de vigilancia
          </li>
          <li>
            <strong>Notificación:</strong> Se diligencia la ficha de notificación
            y se ingresa al SIVIGILA
          </li>
          <li>
            <strong>Análisis local:</strong> La secretaría de salud analiza la
            información y activa acciones de respuesta
          </li>
          <li>
            <strong>Consolidación:</strong> La información fluye a los niveles
            superiores para análisis regional y nacional
          </li>
          <li>
            <strong>Retroalimentación:</strong> Los análisis y alertas se comparten
            de vuelta a los niveles locales
          </li>
        </ol>

        <Alert variant="warning" title="Tiempos de notificación">
          <p>Los tiempos de notificación varían según el evento:</p>
          <ul className="list-disc list-inside mt-2">
            <li><strong>Inmediata (24 horas):</strong> Eventos de alta prioridad como parálisis flácida, sarampión, cólera</li>
            <li><strong>Semanal:</strong> La mayoría de eventos se notifican por semana epidemiológica</li>
          </ul>
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

- [ ] Página de Conceptos Generales creada

---

## TAREA 3: Crear Página de Eventos Clave

### Archivo: `src/app/vigilancia-epidemiologica/eventos-clave/page.tsx`

```tsx
import { AlertTriangle } from 'lucide-react';
import { SectionTemplate } from '@/components/templates';
import { ContentBlock } from '@/components/content';
import { Alert, Accordion, Quiz, Card, CardContent } from '@/components/ui';

const eventosInmediatos = [
  'Parálisis flácida aguda (sospecha de poliomielitis)',
  'Sarampión / Rubéola',
  'Difteria',
  'Cólera',
  'Fiebre amarilla',
  'Rabia humana',
  'Muerte materna',
  'Muerte perinatal evitable',
  'Brotes de cualquier etiología',
  'Eventos adversos graves post-vacunación',
];

const eventosSemanales = [
  { categoria: 'Inmunoprevenibles', eventos: 'Tosferina, parotiditis, varicela, hepatitis B' },
  { categoria: 'Transmitidos por vectores', eventos: 'Dengue, malaria, chikungunya, Zika, leishmaniasis' },
  { categoria: 'Transmitidas por alimentos', eventos: 'ETA, fiebre tifoidea, hepatitis A' },
  { categoria: 'Respiratorias', eventos: 'Tuberculosis, infección respiratoria aguda grave (IRAG)' },
  { categoria: 'De transmisión sexual', eventos: 'VIH/SIDA, sífilis gestacional, sífilis congénita' },
  { categoria: 'No transmisibles', eventos: 'Intento de suicidio, violencia de género, cáncer infantil' },
];

const faqItems = [
  {
    id: 'ec-1',
    title: '¿Qué hacer si identifico un caso de notificación inmediata?',
    content: (
      <ol className="list-decimal list-inside space-y-1">
        <li>Notificar inmediatamente al referente de vigilancia de tu institución</li>
        <li>Diligenciar la ficha de notificación correspondiente</li>
        <li>Tomar muestras si aplica según el evento</li>
        <li>Iniciar tratamiento si corresponde</li>
        <li>Realizar la notificación al SIVIGILA en máximo 24 horas</li>
        <li>Colaborar en la investigación de campo si se requiere</li>
      </ol>
    ),
  },
  {
    id: 'ec-2',
    title: '¿Qué información debe contener la ficha de notificación?',
    content: (
      <ul className="list-disc list-inside space-y-1">
        <li>Datos básicos del paciente (identificación, edad, sexo, residencia)</li>
        <li>Datos de la UPGD notificadora</li>
        <li>Fecha de consulta y fecha de inicio de síntomas</li>
        <li>Signos y síntomas según definición de caso</li>
        <li>Clasificación inicial del caso</li>
        <li>Antecedentes relevantes (vacunación, viajes, contactos)</li>
        <li>Resultados de laboratorio si están disponibles</li>
      </ul>
    ),
  },
  {
    id: 'ec-3',
    title: '¿Qué es un brote y cómo se notifica?',
    content: (
      <p>
        Un brote es la ocurrencia de casos de una enfermedad por encima de lo
        esperado en un lugar y tiempo determinados. Todos los brotes son de
        notificación inmediata. Se debe notificar incluso con un solo caso
        para eventos eliminados o de alta severidad, o cuando se detecta
        aumento inusual de casos de cualquier patología.
      </p>
    ),
  },
];

const quizQuestions = [
  {
    id: 'qve1',
    question: '¿Cuál de los siguientes eventos requiere notificación inmediata (24 horas)?',
    options: [
      { id: 'a', text: 'Varicela' },
      { id: 'b', text: 'Dengue sin signos de alarma' },
      { id: 'c', text: 'Sarampión sospechoso' },
      { id: 'd', text: 'Infección respiratoria aguda leve' },
    ],
    correctOptionId: 'c',
    explanation: 'El sarampión es un evento de notificación inmediata porque es una enfermedad en proceso de eliminación. Cualquier caso sospechoso debe notificarse en las primeras 24 horas.',
  },
  {
    id: 'qve2',
    question: '¿Qué significa SIVIGILA?',
    options: [
      { id: 'a', text: 'Sistema de Vigilancia de Laboratorios' },
      { id: 'b', text: 'Sistema Nacional de Vigilancia en Salud Pública' },
      { id: 'c', text: 'Sistema de Vigilancia de Vacunación' },
      { id: 'd', text: 'Servicio de Información de Vigilancia' },
    ],
    correctOptionId: 'b',
    explanation: 'SIVIGILA es el Sistema Nacional de Vigilancia en Salud Pública de Colombia, coordinado por el Instituto Nacional de Salud.',
  },
  {
    id: 'qve3',
    question: '¿Cuándo se debe notificar un brote de enfermedad?',
    options: [
      { id: 'a', text: 'Solo si hay más de 10 casos' },
      { id: 'b', text: 'Al final de la semana epidemiológica' },
      { id: 'c', text: 'De manera inmediata, en las primeras 24 horas' },
      { id: 'd', text: 'Solo si hay muertes asociadas' },
    ],
    correctOptionId: 'c',
    explanation: 'Todos los brotes son de notificación inmediata, independientemente del número de casos, ya que requieren investigación y respuesta rápida.',
  },
  {
    id: 'qve4',
    question: '¿Cuál es la clasificación inicial de un caso que cumple definición clínica pero no tiene confirmación de laboratorio?',
    options: [
      { id: 'a', text: 'Caso confirmado' },
      { id: 'b', text: 'Caso descartado' },
      { id: 'c', text: 'Caso sospechoso o probable, según el evento' },
      { id: 'd', text: 'No se notifica hasta tener laboratorio' },
    ],
    correctOptionId: 'c',
    explanation: 'Los casos se notifican desde la sospecha clínica. No se debe esperar confirmación de laboratorio para notificar. La clasificación se ajusta posteriormente.',
  },
];

export default function EventosClavePage() {
  return (
    <SectionTemplate
      title="Eventos Clave de Notificación"
      description="Eventos de notificación obligatoria y procedimientos de reporte."
      icon={AlertTriangle}
      breadcrumbs={[
        { label: 'Vigilancia Epidemiológica', href: '/vigilancia-epidemiologica' },
        { label: 'Eventos Clave' },
      ]}
      previousPage={{
        title: 'Conceptos Generales',
        href: '/vigilancia-epidemiologica/conceptos-generales',
      }}
    >
      <ContentBlock>
        <h2>Eventos de Notificación Obligatoria</h2>
        <p>
          Existen más de 100 eventos de notificación obligatoria en Colombia.
          Aquí presentamos los más frecuentes y los de notificación inmediata
          que todo profesional de salud debe conocer.
        </p>
      </ContentBlock>

      {/* Eventos inmediatos */}
      <div className="my-8">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          Eventos de Notificación Inmediata (24 horas)
        </h2>
        <Alert variant="danger" title="¡Atención!">
          Estos eventos requieren notificación en las primeras 24 horas
          desde la identificación del caso sospechoso.
        </Alert>
        <Card className="mt-4">
          <CardContent className="p-4">
            <ul className="grid gap-2 md:grid-cols-2">
              {eventosInmediatos.map((evento, index) => (
                <li key={index} className="flex items-start gap-2 text-sm">
                  <span className="text-red-500 mt-0.5">⚠</span>
                  <span className="text-gray-700 dark:text-gray-300">{evento}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>

      {/* Eventos semanales */}
      <div className="my-8">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          Eventos de Notificación Semanal
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-100 dark:bg-gray-800">
                <th className="border border-gray-200 dark:border-gray-700 px-4 py-2 text-left">
                  Categoría
                </th>
                <th className="border border-gray-200 dark:border-gray-700 px-4 py-2 text-left">
                  Eventos
                </th>
              </tr>
            </thead>
            <tbody>
              {eventosSemanales.map((item, index) => (
                <tr key={index} className="hover:bg-gray-50 dark:hover:bg-gray-800/50">
                  <td className="border border-gray-200 dark:border-gray-700 px-4 py-2 font-medium">
                    {item.categoria}
                  </td>
                  <td className="border border-gray-200 dark:border-gray-700 px-4 py-2 text-sm">
                    {item.eventos}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <ContentBlock>
        <h2>Muerte materna y perinatal</h2>
        <p>
          Las muertes maternas y perinatales son eventos de notificación
          inmediata y requieren análisis especial a través de los Comités
          de Vigilancia Epidemiológica (COVE).
        </p>

        <Alert variant="warning" title="Muerte materna">
          Toda muerte de una mujer durante el embarazo, parto o dentro de
          los 42 días siguientes a la terminación del embarazo debe notificarse
          inmediatamente, independientemente de la causa.
        </Alert>
      </ContentBlock>

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
          Evaluación del Módulo de Vigilancia Epidemiológica
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          Completa esta evaluación para verificar tu comprensión sobre el
          sistema de vigilancia epidemiológica.
        </p>
        <Quiz
          title="Evaluación: Vigilancia Epidemiológica"
          questions={quizQuestions}
          passingScore={70}
        />
      </div>

      {/* Resumen final */}
      <Alert variant="success" title="¡Has completado todos los módulos!">
        <p className="mb-2">
          Felicitaciones por completar el portal de inducción. Recuerda que
          puedes volver a consultar este material en cualquier momento.
        </p>
        <p>
          Si tienes dudas adicionales, contacta al departamento de capacitación
          o a tu supervisor directo.
        </p>
      </Alert>
    </SectionTemplate>
  );
}
```

- [ ] Página de Eventos Clave creada con Quiz del módulo

---

## TAREA 4: Verificación Final

### Comandos de verificación:
```bash
npm run build
npm run dev
```

### URLs a verificar:
- `http://localhost:3000/vigilancia-epidemiologica`
- `http://localhost:3000/vigilancia-epidemiologica/conceptos-generales`
- `http://localhost:3000/vigilancia-epidemiologica/eventos-clave`

### Checklist de verificación:
- [ ] Página principal muestra las 2 subsecciones
- [ ] Navegación entre subsecciones funciona
- [ ] Breadcrumbs correctos
- [ ] Tipos de vigilancia en cards
- [ ] Tabla de eventos semanales visible
- [ ] Lista de eventos inmediatos con iconos de alerta
- [ ] Accordions de FAQ funcionan
- [ ] Quiz de evaluación funciona
- [ ] Alert de felicitación al final
- [ ] Sin errores en consola

---

## Entregable de la Fase 11

✅ Página principal de Vigilancia Epidemiológica con 2 subsecciones

✅ 2 Subsecciones completamente pobladas:
  1. Conceptos Generales - tipos de vigilancia, flujo de información
  2. Eventos Clave - eventos inmediatos, semanales, quiz

✅ Contenido especializado:
  - Tipos de vigilancia epidemiológica
  - Eventos de notificación inmediata
  - Eventos de notificación semanal
  - Procedimientos de notificación

✅ Quiz de evaluación del módulo

✅ Mensaje de finalización del portal

---

## Siguiente Fase

➡️ **FASE 12**: Responsive, Accesibilidad y Pulido - Ver archivo `FASE-12-responsive-accesibilidad.md`

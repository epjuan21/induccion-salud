# FASE 8-9: Contenido - Facturación de Servicios P&P

## Resumen
| Campo | Valor |
|-------|-------|
| **Fase** | 8-9 de 13 |
| **Nombre** | Contenido - Facturación de Servicios de Promoción y Prevención |
| **Objetivo** | Segunda sección con todas sus 5 subsecciones pobladas |
| **Prerequisitos** | Fase 7 completada |

---

## Instrucciones para Claude Code

> **IMPORTANTE**: Esta fase crea el contenido del módulo de Facturación P&P con 5 subsecciones.
> Dividido en dos días de trabajo: Día 8 (3 subsecciones) y Día 9 (2 subsecciones + quiz).

---

## TAREA 1: Crear Página Principal del Módulo

### Archivo: `src/app/facturacion-pyp/page.tsx`

```tsx
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
```

- [ ] Página principal del módulo creada

---

## TAREA 2: Crear Página de Planificación Familiar

### Archivo: `src/app/facturacion-pyp/planificacion-familiar/page.tsx`

```tsx
import { Heart } from 'lucide-react';
import { SectionTemplate } from '@/components/templates';
import { ContentBlock } from '@/components/content';
import { Alert, Accordion, Card, CardContent } from '@/components/ui';

const servicios = [
  {
    codigo: '990201',
    nombre: 'Consulta de primera vez por planificación familiar',
    frecuencia: '1 vez por método',
    requisitos: 'Historia clínica, consentimiento informado',
  },
  {
    codigo: '990202',
    nombre: 'Consulta de control por planificación familiar',
    frecuencia: 'Según método',
    requisitos: 'Historia clínica de seguimiento',
  },
  {
    codigo: '681200',
    nombre: 'Inserción de dispositivo intrauterino',
    frecuencia: 'Según indicación',
    requisitos: 'Consentimiento, citología vigente',
  },
  {
    codigo: '681300',
    nombre: 'Retiro de dispositivo intrauterino',
    frecuencia: 'Según necesidad',
    requisitos: 'Indicación médica documentada',
  },
  {
    codigo: '681511',
    nombre: 'Inserción de implante subdérmico',
    frecuencia: 'Cada 3-5 años',
    requisitos: 'Consentimiento, valoración previa',
  },
];

const faqItems = [
  {
    id: 'pf-1',
    title: '¿Cuándo se factura consulta de primera vez vs control?',
    content: (
      <p>
        Se factura consulta de primera vez cuando es la primera atención de la
        usuaria para iniciar un método anticonceptivo específico. Los controles
        posteriores para el mismo método se facturan como consulta de control.
        Si cambia de método, se genera una nueva primera vez.
      </p>
    ),
  },
  {
    id: 'pf-2',
    title: '¿Qué documentación se requiere para inserción de DIU?',
    content: (
      <ul className="list-disc list-inside space-y-1">
        <li>Consentimiento informado firmado</li>
        <li>Citología cervicouterina vigente (menos de 1 año)</li>
        <li>Prueba de embarazo negativa (si aplica)</li>
        <li>Historia clínica con indicación del procedimiento</li>
        <li>Registro del número de lote del dispositivo</li>
      </ul>
    ),
  },
  {
    id: 'pf-3',
    title: '¿Cómo se factura la entrega de anticonceptivos orales?',
    content: (
      <p>
        Los anticonceptivos orales se facturan junto con la consulta de control.
        Debe registrarse en la historia clínica el número de ciclos entregados
        y la fecha de próximo control. La entrega sin consulta solo aplica en
        programas especiales autorizados.
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
      <ContentBlock>
        <h2>Introducción</h2>
        <p>
          Los servicios de planificación familiar son una prioridad en salud pública
          y hacen parte de los derechos sexuales y reproductivos. Su correcta
          facturación asegura la continuidad de estos programas.
        </p>

        <Alert variant="info" title="Población objetivo">
          Hombres y mujeres en edad fértil (generalmente 14-49 años) que deseen
          regular su fecundidad, incluyendo adolescentes con capacidad de ejercer
          sus derechos sexuales y reproductivos.
        </Alert>
      </ContentBlock>

      {/* Tabla de servicios */}
      <div className="my-8">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          Códigos CUPS Principales
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-100 dark:bg-gray-800">
                <th className="border border-gray-200 dark:border-gray-700 px-4 py-2 text-left font-semibold">
                  Código
                </th>
                <th className="border border-gray-200 dark:border-gray-700 px-4 py-2 text-left font-semibold">
                  Servicio
                </th>
                <th className="border border-gray-200 dark:border-gray-700 px-4 py-2 text-left font-semibold">
                  Frecuencia
                </th>
                <th className="border border-gray-200 dark:border-gray-700 px-4 py-2 text-left font-semibold">
                  Requisitos
                </th>
              </tr>
            </thead>
            <tbody>
              {servicios.map((servicio) => (
                <tr key={servicio.codigo} className="hover:bg-gray-50 dark:hover:bg-gray-800/50">
                  <td className="border border-gray-200 dark:border-gray-700 px-4 py-2 font-mono text-sm">
                    {servicio.codigo}
                  </td>
                  <td className="border border-gray-200 dark:border-gray-700 px-4 py-2">
                    {servicio.nombre}
                  </td>
                  <td className="border border-gray-200 dark:border-gray-700 px-4 py-2 text-sm">
                    {servicio.frecuencia}
                  </td>
                  <td className="border border-gray-200 dark:border-gray-700 px-4 py-2 text-sm">
                    {servicio.requisitos}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <ContentBlock>
        <h2>Causales frecuentes de glosa</h2>
        <Alert variant="danger" title="Evita estas situaciones">
          <ul className="list-disc list-inside space-y-1">
            <li>Facturar sin consentimiento informado firmado</li>
            <li>No registrar el lote del dispositivo o insumo</li>
            <li>Facturar controles sin consulta de primera vez previa</li>
            <li>Superar las frecuencias establecidas por normatividad</li>
            <li>No adjuntar citología para procedimientos que la requieren</li>
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

- [ ] Página de Planificación Familiar creada

---

## TAREA 3: Crear Página de Ruta Materno Perinatal

### Archivo: `src/app/facturacion-pyp/ruta-materno-perinatal/page.tsx`

```tsx
import { Baby } from 'lucide-react';
import { SectionTemplate } from '@/components/templates';
import { ContentBlock } from '@/components/content';
import { Alert, Accordion, Card, CardContent } from '@/components/ui';

const controlesPrenatales = [
  { semana: '< 10 sem', control: '1er control', actividades: 'Captación, exámenes iniciales, ecografía' },
  { semana: '11-14 sem', control: '2do control', actividades: 'Ecografía 11-14, tamizaje' },
  { semana: '18-22 sem', control: '3er control', actividades: 'Ecografía morfológica' },
  { semana: '26-28 sem', control: '4to control', actividades: 'Glucemia, hemoglobina, anti-D si aplica' },
  { semana: '30-32 sem', control: '5to control', actividades: 'Ecografía de crecimiento' },
  { semana: '34-36 sem', control: '6to control', actividades: 'Valoración presentación' },
  { semana: '37-38 sem', control: '7mo control', actividades: 'Preparación para el parto' },
  { semana: '39-40 sem', control: '8vo control', actividades: 'Control previo a fecha probable' },
];

const faqItems = [
  {
    id: 'rmp-1',
    title: '¿Cómo se factura un embarazo de alto riesgo?',
    content: (
      <p>
        Los embarazos de alto riesgo se facturan con los mismos códigos de control
        prenatal pero pueden tener mayor frecuencia según indicación médica.
        Adicionalmente, se facturan las consultas especializadas (obstetricia,
        medicina materno-fetal) y procedimientos adicionales con sus respectivos
        códigos.
      </p>
    ),
  },
  {
    id: 'rmp-2',
    title: '¿Qué incluye el paquete de atención del parto?',
    content: (
      <div>
        <p className="mb-2">El paquete típico incluye:</p>
        <ul className="list-disc list-inside space-y-1">
          <li>Atención del trabajo de parto</li>
          <li>Atención del parto (vaginal o cesárea)</li>
          <li>Atención inmediata del recién nacido</li>
          <li>Estancia hospitalaria madre e hijo</li>
          <li>Consulta de egreso hospitalario</li>
        </ul>
      </div>
    ),
  },
  {
    id: 'rmp-3',
    title: '¿Cuándo se factura control de puerperio?',
    content: (
      <p>
        El control de puerperio se factura entre los 7 y 10 días postparto.
        Se debe verificar el estado de la madre (involución uterina, herida
        quirúrgica si aplica, lactancia) y del recién nacido. Se recomienda
        un segundo control a las 6 semanas.
      </p>
    ),
  },
];

export default function RutaMaternoPerinatalPage() {
  return (
    <SectionTemplate
      title="Ruta Materno Perinatal"
      description="Facturación de controles prenatales, atención del parto y seguimiento al recién nacido."
      icon={Baby}
      breadcrumbs={[
        { label: 'Facturación P&P', href: '/facturacion-pyp' },
        { label: 'Ruta Materno Perinatal' },
      ]}
      previousPage={{
        title: 'Planificación Familiar',
        href: '/facturacion-pyp/planificacion-familiar',
      }}
      nextPage={{
        title: 'Ciclos de Vida',
        href: '/facturacion-pyp/ciclos-vida',
      }}
    >
      <ContentBlock>
        <h2>Introducción</h2>
        <p>
          La Ruta Integral de Atención en Salud Materno Perinatal tiene como
          objetivo garantizar la atención segura y de calidad durante el embarazo,
          parto, puerperio y atención del recién nacido. La facturación correcta
          de estos servicios es crucial para el seguimiento de indicadores.
        </p>

        <Alert variant="warning" title="Captación temprana">
          La captación de gestantes antes de la semana 10 es un indicador de
          calidad. Asegúrate de facturar correctamente el primer control con
          todos los exámenes de ingreso.
        </Alert>
      </ContentBlock>

      {/* Cronograma de controles */}
      <div className="my-8">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          Cronograma de Controles Prenatales
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-100 dark:bg-gray-800">
                <th className="border border-gray-200 dark:border-gray-700 px-4 py-2 text-left">
                  Edad Gestacional
                </th>
                <th className="border border-gray-200 dark:border-gray-700 px-4 py-2 text-left">
                  Control
                </th>
                <th className="border border-gray-200 dark:border-gray-700 px-4 py-2 text-left">
                  Actividades Principales
                </th>
              </tr>
            </thead>
            <tbody>
              {controlesPrenatales.map((control, index) => (
                <tr key={index} className="hover:bg-gray-50 dark:hover:bg-gray-800/50">
                  <td className="border border-gray-200 dark:border-gray-700 px-4 py-2 font-medium">
                    {control.semana}
                  </td>
                  <td className="border border-gray-200 dark:border-gray-700 px-4 py-2">
                    {control.control}
                  </td>
                  <td className="border border-gray-200 dark:border-gray-700 px-4 py-2 text-sm">
                    {control.actividades}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <ContentBlock>
        <h2>Códigos CUPS frecuentes</h2>
        <ul>
          <li><strong>890205</strong> - Consulta de control prenatal por enfermería</li>
          <li><strong>890305</strong> - Consulta de control prenatal por medicina general</li>
          <li><strong>881302</strong> - Ecografía obstétrica</li>
          <li><strong>881303</strong> - Ecografía obstétrica con perfil biofísico</li>
          <li><strong>731101</strong> - Atención del parto vaginal</li>
          <li><strong>741100</strong> - Cesárea</li>
          <li><strong>990116</strong> - Atención del recién nacido</li>
        </ul>

        <h2>Atención del recién nacido</h2>
        <p>
          La atención inmediata del recién nacido incluye valoración APGAR,
          profilaxis oftálmica, aplicación de vitamina K, vacunación BCG y
          Hepatitis B, tamizaje neonatal y valoración de riesgos.
        </p>

        <Alert variant="tip" title="Recuerda">
          El tamizaje neonatal (TSH, pruebas metabólicas) tiene código independiente
          y debe facturarse por separado de la atención del recién nacido.
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

- [ ] Página de Ruta Materno Perinatal creada

---

## TAREA 4: Crear Página de Ciclos de Vida

### Archivo: `src/app/facturacion-pyp/ciclos-vida/page.tsx`

```tsx
import { Users } from 'lucide-react';
import { SectionTemplate } from '@/components/templates';
import { ContentBlock } from '@/components/content';
import { Alert, Accordion, Card, CardContent } from '@/components/ui';

const ciclosVida = [
  {
    etapa: 'Primera Infancia (0-5 años)',
    controles: 'Control de crecimiento y desarrollo',
    frecuencia: '0-1 año: mensual; 1-2 años: trimestral; 2-5 años: semestral',
    codigo: '890202',
  },
  {
    etapa: 'Infancia (6-11 años)',
    controles: 'Control de crecimiento y desarrollo',
    frecuencia: 'Anual',
    codigo: '890202',
  },
  {
    etapa: 'Adolescencia (12-17 años)',
    controles: 'Consulta de valoración integral',
    frecuencia: 'Anual',
    codigo: '890203',
  },
  {
    etapa: 'Juventud (18-28 años)',
    controles: 'Control de adulto joven',
    frecuencia: 'Según riesgo, mínimo cada 2 años',
    codigo: '890201',
  },
  {
    etapa: 'Adultez (29-59 años)',
    controles: 'Control de adulto',
    frecuencia: 'Anual o según riesgo cardiovascular',
    codigo: '890201',
  },
  {
    etapa: 'Vejez (60+ años)',
    controles: 'Valoración integral del adulto mayor',
    frecuencia: 'Semestral o anual según condición',
    codigo: '890204',
  },
];

const faqItems = [
  {
    id: 'cv-1',
    title: '¿Qué diferencia hay entre control de crecimiento y desarrollo y consulta médica?',
    content: (
      <p>
        El control de crecimiento y desarrollo es una actividad de P&P que
        incluye valoración del crecimiento físico (peso, talla, perímetros),
        desarrollo psicomotor, detección de alteraciones y educación a los
        padres. Puede ser realizado por enfermería o medicina. La consulta
        médica general es para atención de patologías o síntomas específicos.
      </p>
    ),
  },
  {
    id: 'cv-2',
    title: '¿Cómo se factura la valoración del adulto mayor?',
    content: (
      <p>
        La valoración integral del adulto mayor incluye evaluación funcional,
        cognitiva, afectiva, social y nutricional. Se factura con código
        específico (890204) y debe incluir las escalas de valoración geriátrica.
        Puede complementarse con consulta por otras especialidades según hallazgos.
      </p>
    ),
  },
];

export default function CiclosVidaPage() {
  return (
    <SectionTemplate
      title="Ciclos de Vida"
      description="Facturación de controles según etapa del ciclo vital: desde la primera infancia hasta la vejez."
      icon={Users}
      breadcrumbs={[
        { label: 'Facturación P&P', href: '/facturacion-pyp' },
        { label: 'Ciclos de Vida' },
      ]}
      previousPage={{
        title: 'Ruta Materno Perinatal',
        href: '/facturacion-pyp/ruta-materno-perinatal',
      }}
      nextPage={{
        title: 'Vacunación',
        href: '/facturacion-pyp/vacunacion',
      }}
    >
      <ContentBlock>
        <h2>Introducción</h2>
        <p>
          La atención por ciclos de vida permite realizar intervenciones de
          promoción y prevención específicas para cada etapa del desarrollo
          humano, considerando las necesidades particulares de cada grupo etario.
        </p>
      </ContentBlock>

      {/* Tabla de ciclos de vida */}
      <div className="my-8">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          Controles por Etapa del Ciclo Vital
        </h2>
        <div className="grid gap-4">
          {ciclosVida.map((ciclo) => (
            <Card key={ciclo.etapa}>
              <CardContent className="p-4">
                <div className="flex flex-col md:flex-row md:items-center gap-4">
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 dark:text-white">
                      {ciclo.etapa}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {ciclo.controles}
                    </p>
                  </div>
                  <div className="flex flex-col md:flex-row gap-4 text-sm">
                    <div>
                      <span className="text-gray-500">Frecuencia:</span>
                      <span className="ml-2 text-gray-900 dark:text-white">{ciclo.frecuencia}</span>
                    </div>
                    <div>
                      <span className="text-gray-500">Código:</span>
                      <span className="ml-2 font-mono text-primary-600 dark:text-primary-400">{ciclo.codigo}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <ContentBlock>
        <Alert variant="info" title="Actividades complementarias">
          Además de los controles, cada ciclo de vida incluye actividades como
          tamizajes específicos, educación en salud, aplicación de escalas de
          riesgo y vacunación según edad. Estas se facturan con códigos adicionales.
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

- [ ] Página de Ciclos de Vida creada

---

## TAREA 5: Crear Página de Vacunación

### Archivo: `src/app/facturacion-pyp/vacunacion/page.tsx`

```tsx
import { Syringe } from 'lucide-react';
import { SectionTemplate } from '@/components/templates';
import { ContentBlock } from '@/components/content';
import { Alert, Accordion, Card, CardContent } from '@/components/ui';

const esquemaVacunacion = [
  { edad: 'Recién nacido', vacunas: 'BCG, Hepatitis B (dosis neonatal)' },
  { edad: '2 meses', vacunas: 'Pentavalente 1, Polio 1, Rotavirus 1, Neumococo 1' },
  { edad: '4 meses', vacunas: 'Pentavalente 2, Polio 2, Rotavirus 2, Neumococo 2' },
  { edad: '6 meses', vacunas: 'Pentavalente 3, Polio 3, Influenza (1ra dosis)' },
  { edad: '7 meses', vacunas: 'Influenza (2da dosis)' },
  { edad: '12 meses', vacunas: 'SRP (Triple viral), Neumococo refuerzo, Varicela, Fiebre Amarilla' },
  { edad: '18 meses', vacunas: 'DPT refuerzo, Polio refuerzo, Hepatitis A' },
  { edad: '5 años', vacunas: 'DPT refuerzo, Polio refuerzo, SRP refuerzo' },
  { edad: '9 años (niñas)', vacunas: 'VPH (2 dosis)' },
  { edad: 'Gestantes', vacunas: 'Tdap, Influenza' },
  { edad: 'Adulto mayor', vacunas: 'Influenza anual, Neumococo' },
];

const faqItems = [
  {
    id: 'vac-1',
    title: '¿Cómo se factura una vacuna que requiere múltiples dosis?',
    content: (
      <p>
        Cada dosis se factura de forma independiente en la fecha de aplicación.
        Es importante registrar el número de dosis (1ra, 2da, 3ra, refuerzo)
        en la historia clínica y el carné de vacunación. El sistema debe
        permitir trazabilidad del esquema completo.
      </p>
    ),
  },
  {
    id: 'vac-2',
    title: '¿Qué documentación se requiere para facturar vacunación?',
    content: (
      <ul className="list-disc list-inside space-y-1">
        <li>Registro en historia clínica</li>
        <li>Carné de vacunación actualizado</li>
        <li>Registro de lote, fecha de vencimiento y fabricante</li>
        <li>Consentimiento informado (algunos biológicos)</li>
        <li>PAIWEB actualizado</li>
      </ul>
    ),
  },
  {
    id: 'vac-3',
    title: '¿Qué hacer si un niño tiene esquema atrasado?',
    content: (
      <p>
        Se debe aplicar el esquema de recuperación según lineamientos del PAI.
        No se reinicia el esquema, se continúa desde donde quedó. Las dosis
        de recuperación se facturan igual que las del esquema regular, pero
        debe documentarse la razón del atraso.
      </p>
    ),
  },
];

export default function VacunacionPage() {
  return (
    <SectionTemplate
      title="Vacunación"
      description="Facturación de biológicos y servicios del Programa Ampliado de Inmunizaciones (PAI)."
      icon={Syringe}
      breadcrumbs={[
        { label: 'Facturación P&P', href: '/facturacion-pyp' },
        { label: 'Vacunación' },
      ]}
      previousPage={{
        title: 'Ciclos de Vida',
        href: '/facturacion-pyp/ciclos-vida',
      }}
      nextPage={{
        title: 'Higiene Oral',
        href: '/facturacion-pyp/higiene-oral',
      }}
    >
      <ContentBlock>
        <h2>Introducción</h2>
        <p>
          El Programa Ampliado de Inmunizaciones (PAI) es una prioridad en salud
          pública. La correcta facturación y registro de las vacunas es esencial
          para el seguimiento de coberturas y la trazabilidad de los biológicos.
        </p>

        <Alert variant="warning" title="Importante">
          Todos los biológicos del PAI son gratuitos para la población. La
          facturación se realiza a las EPS o al ente territorial según el
          régimen de afiliación.
        </Alert>
      </ContentBlock>

      {/* Esquema de vacunación */}
      <div className="my-8">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          Esquema Nacional de Vacunación
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-100 dark:bg-gray-800">
                <th className="border border-gray-200 dark:border-gray-700 px-4 py-2 text-left">
                  Edad
                </th>
                <th className="border border-gray-200 dark:border-gray-700 px-4 py-2 text-left">
                  Vacunas
                </th>
              </tr>
            </thead>
            <tbody>
              {esquemaVacunacion.map((item, index) => (
                <tr key={index} className="hover:bg-gray-50 dark:hover:bg-gray-800/50">
                  <td className="border border-gray-200 dark:border-gray-700 px-4 py-2 font-medium">
                    {item.edad}
                  </td>
                  <td className="border border-gray-200 dark:border-gray-700 px-4 py-2">
                    {item.vacunas}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <ContentBlock>
        <h2>Registro PAIWEB</h2>
        <p>
          Todas las vacunas aplicadas deben registrarse en el sistema PAIWEB
          del Ministerio de Salud. Este registro es obligatorio y la facturación
          debe coincidir con los datos reportados.
        </p>

        <Alert variant="danger" title="Causales de glosa">
          <ul className="list-disc list-inside space-y-1">
            <li>Vacunación sin registro en PAIWEB</li>
            <li>Lote o fecha de vencimiento no registrado</li>
            <li>Dosis aplicada fuera del rango de edad establecido</li>
            <li>Esquema incompleto sin justificación</li>
            <li>Facturar biológicos no incluidos en el PAI como PAI</li>
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

- [ ] Página de Vacunación creada

---

## TAREA 6: Crear Página de Higiene Oral

### Archivo: `src/app/facturacion-pyp/higiene-oral/page.tsx`

```tsx
import { Smile } from 'lucide-react';
import { SectionTemplate } from '@/components/templates';
import { ContentBlock } from '@/components/content';
import { Alert, Accordion, Quiz } from '@/components/ui';

const actividadesHO = [
  { codigo: '997101', actividad: 'Aplicación de barniz de flúor', frecuencia: 'Cada 6 meses' },
  { codigo: '997102', actividad: 'Aplicación de sellantes', frecuencia: 'Una vez por diente' },
  { codigo: '997103', actividad: 'Detartraje supragingival', frecuencia: 'Cada 6 meses a 1 año' },
  { codigo: '997104', actividad: 'Control de placa bacteriana', frecuencia: 'Según riesgo' },
  { codigo: '990109', actividad: 'Educación en salud oral', frecuencia: 'Cada consulta' },
];

const faqItems = [
  {
    id: 'ho-1',
    title: '¿Cuándo se factura profilaxis vs detartraje?',
    content: (
      <p>
        La profilaxis (limpieza simple) se realiza cuando hay poca placa
        bacteriana. El detartraje se factura cuando hay presencia de cálculos
        dentales que requieren remoción con instrumental específico. El
        diagnóstico determina cuál procedimiento facturar.
      </p>
    ),
  },
  {
    id: 'ho-2',
    title: '¿Cómo se facturan los sellantes dentales?',
    content: (
      <p>
        Los sellantes se facturan por diente sellado, no por consulta. Se
        aplican en dientes posteriores permanentes (molares y premolares)
        preferiblemente en los primeros 4 años después de la erupción. Debe
        especificarse el diente tratado en la historia clínica.
      </p>
    ),
  },
  {
    id: 'ho-3',
    title: '¿Qué población tiene derecho a flúor gratuito?',
    content: (
      <p>
        La aplicación de flúor está incluida en el plan de beneficios para
        toda la población, con énfasis en menores de 18 años. La frecuencia
        depende del riesgo de caries: alto riesgo cada 3 meses, riesgo
        moderado cada 6 meses.
      </p>
    ),
  },
];

const quizQuestions = [
  {
    id: 'qf1',
    question: '¿Cuál es la frecuencia recomendada para aplicación de flúor en población de bajo riesgo?',
    options: [
      { id: 'a', text: 'Cada 3 meses' },
      { id: 'b', text: 'Cada 6 meses' },
      { id: 'c', text: 'Una vez al año' },
      { id: 'd', text: 'Solo cuando el paciente lo solicite' },
    ],
    correctOptionId: 'b',
    explanation: 'En población de bajo riesgo de caries, la aplicación de flúor se recomienda cada 6 meses. En alto riesgo puede ser cada 3 meses.',
  },
  {
    id: 'qf2',
    question: '¿Qué se debe verificar antes de facturar un servicio de P&P?',
    options: [
      { id: 'a', text: 'Solo la firma del paciente' },
      { id: 'b', text: 'Que el código CUPS corresponda al procedimiento realizado y tenga soportes completos' },
      { id: 'c', text: 'Solo que el paciente esté afiliado a una EPS' },
      { id: 'd', text: 'Solo la fecha de atención' },
    ],
    correctOptionId: 'b',
    explanation: 'Antes de facturar se debe verificar que el código CUPS sea correcto, que existan todos los soportes documentales y que se cumplan las frecuencias establecidas.',
  },
  {
    id: 'qf3',
    question: '¿Cuál de los siguientes NO es un servicio de P&P?',
    options: [
      { id: 'a', text: 'Control de crecimiento y desarrollo' },
      { id: 'b', text: 'Obturación dental por caries' },
      { id: 'c', text: 'Aplicación de vacunas del PAI' },
      { id: 'd', text: 'Control prenatal' },
    ],
    correctOptionId: 'b',
    explanation: 'La obturación dental es un procedimiento curativo, no de promoción y prevención. Los demás son actividades de P&P.',
  },
];

export default function HigieneOralPage() {
  return (
    <SectionTemplate
      title="Higiene Oral"
      description="Facturación de actividades de promoción y prevención en salud oral."
      icon={Smile}
      breadcrumbs={[
        { label: 'Facturación P&P', href: '/facturacion-pyp' },
        { label: 'Higiene Oral' },
      ]}
      previousPage={{
        title: 'Vacunación',
        href: '/facturacion-pyp/vacunacion',
      }}
      nextPage={{
        title: 'Historias Clínicas',
        href: '/historias-clinicas',
      }}
    >
      <ContentBlock>
        <h2>Introducción</h2>
        <p>
          La salud oral es un componente esencial de la salud integral. Las
          actividades de promoción y prevención buscan mantener la salud bucal
          y prevenir las patologías orales más frecuentes como caries y
          enfermedad periodontal.
        </p>
      </ContentBlock>

      {/* Actividades de higiene oral */}
      <div className="my-8">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          Actividades de P&P en Salud Oral
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-100 dark:bg-gray-800">
                <th className="border border-gray-200 dark:border-gray-700 px-4 py-2 text-left">
                  Código
                </th>
                <th className="border border-gray-200 dark:border-gray-700 px-4 py-2 text-left">
                  Actividad
                </th>
                <th className="border border-gray-200 dark:border-gray-700 px-4 py-2 text-left">
                  Frecuencia
                </th>
              </tr>
            </thead>
            <tbody>
              {actividadesHO.map((item) => (
                <tr key={item.codigo} className="hover:bg-gray-50 dark:hover:bg-gray-800/50">
                  <td className="border border-gray-200 dark:border-gray-700 px-4 py-2 font-mono">
                    {item.codigo}
                  </td>
                  <td className="border border-gray-200 dark:border-gray-700 px-4 py-2">
                    {item.actividad}
                  </td>
                  <td className="border border-gray-200 dark:border-gray-700 px-4 py-2 text-sm">
                    {item.frecuencia}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <ContentBlock>
        <Alert variant="tip" title="Recuerda">
          La educación en salud oral debe realizarse en cada contacto con el
          paciente y debe quedar documentada en la historia clínica. Incluye
          técnica de cepillado, uso de seda dental y hábitos alimentarios.
        </Alert>
      </ContentBlock>

      {/* FAQ */}
      <div className="my-8">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          Preguntas Frecuentes
        </h2>
        <Accordion items={faqItems} />
      </div>

      {/* Quiz del módulo completo */}
      <div className="my-8">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          Evaluación del Módulo de Facturación P&P
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          Completa esta evaluación para verificar tu comprensión de los conceptos
          de facturación de servicios de Promoción y Prevención.
        </p>
        <Quiz
          title="Evaluación: Facturación P&P"
          questions={quizQuestions}
          passingScore={70}
        />
      </div>
    </SectionTemplate>
  );
}
```

- [ ] Página de Higiene Oral creada con Quiz del módulo

---

## TAREA 7: Verificación Final

### Comandos de verificación:
```bash
npm run build
npm run dev
```

### URLs a verificar:
- `http://localhost:3000/facturacion-pyp`
- `http://localhost:3000/facturacion-pyp/planificacion-familiar`
- `http://localhost:3000/facturacion-pyp/ruta-materno-perinatal`
- `http://localhost:3000/facturacion-pyp/ciclos-vida`
- `http://localhost:3000/facturacion-pyp/vacunacion`
- `http://localhost:3000/facturacion-pyp/higiene-oral`

### Checklist de verificación:
- [ ] Página principal muestra las 5 subsecciones
- [ ] Navegación entre subsecciones funciona (anterior/siguiente)
- [ ] Breadcrumbs muestran ruta correcta en cada página
- [ ] Tablas de códigos CUPS visibles y legibles
- [ ] Accordions de FAQ funcionan en todas las páginas
- [ ] Quiz de evaluación funciona en Higiene Oral
- [ ] Alertas visibles con colores correctos
- [ ] Sin errores en consola

---

## Entregable de la Fase 8-9

✅ Página principal de Facturación P&P con 5 subsecciones

✅ 5 Subsecciones completamente pobladas:
  1. Planificación Familiar - con tabla de códigos CUPS
  2. Ruta Materno Perinatal - con cronograma de controles
  3. Ciclos de Vida - con cards por etapa
  4. Vacunación - con esquema nacional
  5. Higiene Oral - con actividades y quiz

✅ Elementos comunes en todas las páginas:
  - Introducción al tema
  - Tablas de información
  - Preguntas frecuentes (Accordion)
  - Alertas informativas
  - Navegación funcional

✅ Quiz de evaluación del módulo

---

## Siguiente Fase

➡️ **FASE 10**: Contenido - Historias Clínicas - Ver archivo `FASE-10-historias-clinicas.md`

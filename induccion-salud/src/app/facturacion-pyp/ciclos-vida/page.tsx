import Link from 'next/link';
import { Users, ArrowRight } from 'lucide-react';
import { SectionTemplate } from '@/components/templates';
import { ContentBlock } from '@/components/content';
import { Alert, Accordion } from '@/components/ui';
import { ciclosVida } from '@/data/ciclos-vida';

const faqItems = [
  {
    id: 'cv-1',
    title: '¿Qué es la valoración integral por ciclo de vida?',
    content: (
      <p>
        La atención por ciclos de vida permite realizar intervenciones de promoción y
        prevención específicas para cada etapa del desarrollo humano, considerando las
        necesidades particulares de cada grupo etario. Incluye valoración de crecimiento,
        desarrollo, detección de alteraciones y educación en salud.
      </p>
    ),
  },
  {
    id: 'cv-2',
    title: '¿Qué finalidad y causa externa se usan en todos los ciclos?',
    content: (
      <div>
        <p className="mb-2">Para todos los códigos de ciclos de vida se usa:</p>
        <ul className="list-disc list-inside space-y-1">
          <li>
            <strong>Finalidad: 11</strong> - Promoción de la Salud y Mantenimiento
          </li>
          <li>
            <strong>Causa Externa: 40</strong> - Promoción y Mantenimiento de la Salud
            o Intervenciones Individuales
          </li>
        </ul>
      </div>
    ),
  },
  {
    id: 'cv-3',
    title: '¿Cuál es la diferencia entre los diagnósticos CIE-10 usados?',
    content: (
      <div>
        <p className="mb-2">Los diagnósticos varían según el ciclo:</p>
        <ul className="list-disc list-inside space-y-1">
          <li><strong>Z001</strong>: Examen de salud del niño (Primera infancia hasta 4 años)</li>
          <li><strong>Z002</strong>: Examen de salud del niño (5-9 años e Infancia)</li>
          <li><strong>Z003</strong>: Examen de salud del adolescente (10-17 años)</li>
          <li><strong>Z108</strong>: Examen de salud general (Juventud, Adultez y Vejez)</li>
          <li><strong>Z012</strong>: Examen odontológico (todas las edades)</li>
        </ul>
      </div>
    ),
  },
  {
    id: 'cv-4',
    title: '¿Con qué frecuencia se facturan los controles por ciclo de vida?',
    content: (
      <div>
        <p className="mb-2">La frecuencia varía según la edad:</p>
        <ul className="list-disc list-inside space-y-1">
          <li><strong>Primera Infancia</strong>: Controles frecuentes por meses y años específicos</li>
          <li><strong>Infancia y Adolescencia</strong>: Control anual</li>
          <li><strong>Juventud y Adultez</strong>: Control cada 2-5 años según rango</li>
          <li><strong>Vejez</strong>: Control cada 2-3 años según rango</li>
          <li><strong>Odontología</strong>: Anual en niños, cada 2-3 años en adultos</li>
        </ul>
      </div>
    ),
  },
  {
    id: 'cv-5',
    title: '¿Puede enfermería realizar controles de crecimiento y desarrollo?',
    content: (
      <p>
        Sí, enfermería profesional puede realizar controles de crecimiento y desarrollo
        en Primera Infancia, Infancia y Adolescencia. Los códigos específicos de
        enfermería (*890205-XX y *890305-XX) están diseñados para estas atenciones,
        alternando con los controles médicos según la edad del paciente.
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
          La atención por ciclos de vida permite realizar intervenciones de promoción y
          prevención específicas para cada etapa del desarrollo humano, considerando las
          necesidades particulares de cada grupo etario. La Ruta Integral de Atención en
          Salud (RIAS) establece controles periódicos desde el nacimiento hasta la vejez.
        </p>

        <Alert variant="info" title="Parámetros comunes de facturación">
          <p className="mb-2">
            Todos los códigos de valoración integral usan los mismos parámetros:
          </p>
          <ul className="list-disc list-inside space-y-1">
            <li><strong>Finalidad: 11</strong> - Promoción de la Salud y Mantenimiento</li>
            <li><strong>Causa Externa: 40</strong> - Promoción y Mantenimiento de la Salud</li>
          </ul>
        </Alert>
      </ContentBlock>

      {/* Selección de ciclo de vida */}
      <div className="my-8">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          Selecciona un ciclo de vida
        </h2>
        <div className="grid gap-4 md:grid-cols-2">
          {ciclosVida.map((ciclo) => {
            const Icon = ciclo.icon;
            return (
              <Link
                key={ciclo.slug}
                href={`/facturacion-pyp/ciclos-vida/${ciclo.slug}`}
                className={`group block rounded-lg border bg-gradient-to-r ${ciclo.gradient} ${ciclo.border} p-5 transition-all hover:shadow-md`}
              >
                <div className="flex items-start gap-4">
                  <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-white/70 text-gray-700 shadow-sm dark:bg-gray-900/40 dark:text-gray-200">
                    <Icon className="h-6 w-6" />
                  </span>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-gray-900 dark:text-white">
                      {ciclo.numero}. {ciclo.title}
                    </h3>
                    <p className="mt-1 text-sm text-gray-700 dark:text-gray-300">
                      {ciclo.rangoEdad}
                    </p>
                  </div>
                  <ArrowRight className="h-5 w-5 flex-shrink-0 text-gray-500 transition-transform group-hover:translate-x-1 dark:text-gray-400" />
                </div>
              </Link>
            );
          })}
        </div>
      </div>

      <ContentBlock>
        <Alert variant="tip" title="Actividades complementarias">
          Además de los controles, cada ciclo de vida incluye actividades como tamizajes
          específicos, educación en salud, aplicación de escalas de riesgo y vacunación
          según edad. Estas se facturan con códigos adicionales según corresponda.
        </Alert>
      </ContentBlock>

      <ContentBlock>
        <h2>Causales frecuentes de glosa</h2>
        <Alert variant="danger" title="Evita estas situaciones">
          <ul className="list-disc list-inside space-y-1">
            <li>Usar código CUPS que no corresponde a la edad exacta del paciente</li>
            <li>No documentar adecuadamente las valoraciones realizadas</li>
            <li>Usar finalidad o causa externa incorrecta (debe ser 11 y 40 respectivamente)</li>
            <li>No aplicar el diagnóstico CIE-10 correcto según el ciclo de vida</li>
            <li>Facturar controles fuera de las frecuencias establecidas sin justificación</li>
            <li>No registrar las actividades de educación y promoción realizadas</li>
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

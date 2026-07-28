import { Layers, CalendarClock, ArrowRight } from 'lucide-react';
import { SectionTemplate } from '@/components/templates';
import { ContentBlock } from '@/components/content';
import { Alert, Badge } from '@/components/ui';
import { ciclosVida } from '@/data/ciclos-vida';

interface FrecuenciaCiclo {
  slug: string;
  frecuencias: string[];
}

// Frecuencias de edad definidas para cada ciclo de vida
const frecuenciasPorCiclo: FrecuenciaCiclo[] = [
  {
    slug: 'primera-infancia',
    frecuencias: [
      '1 Mes',
      'De 2 a 3 Meses',
      'De 4 a 5 Meses',
      'De 6 a 8 Meses',
      'De 9 a 11 Meses',
      'De 12 a 18 Meses',
      'De 19 a 23 Meses',
      'De 24 a 29 Meses',
      'De 30 a 35 Meses',
      '3 Años',
      '4 Años',
      '5 Años',
    ],
  },
  {
    slug: 'infancia',
    frecuencias: ['6 Años', '7 Años', '8 Años', '9 Años', '10 Años', '11 Años'],
  },
  {
    slug: 'adolescencia',
    frecuencias: ['12 Años', '13 Años', '14 Años', '15 Años', '16 Años', '17 Años'],
  },
  {
    slug: 'juventud',
    frecuencias: ['De 18 a 23 Años', 'De 24 a 28 Años'],
  },
  {
    slug: 'adultez',
    frecuencias: [
      'De 29 a 34 Años',
      'De 35 a 39 Años',
      'De 40 a 44 Años',
      'De 45 a 49 Años',
      'De 50 a 52 Años',
      'De 53 a 55 Años',
      'De 56 a 59 Años',
    ],
  },
  {
    slug: 'vejez',
    frecuencias: [
      'De 60 a 62 Años',
      'De 63 a 65 Años',
      'De 66 a 68 Años',
      'De 69 a 71 Años',
      'De 72 a 74 Años',
      'De 75 a 77 Años',
      'De 78 a 79 Años',
      '80 Años y más',
    ],
  },
];

// Colores del punto/acento por ciclo para el badge de frecuencias
const badgeVariantePorSlug: Record<string, 'blue' | 'purple' | 'green' | 'orange' | 'gray'> = {
  'primera-infancia': 'purple',
  infancia: 'blue',
  adolescencia: 'green',
  juventud: 'orange',
  adultez: 'blue',
  vejez: 'purple',
};

function getFrecuencias(slug: string): string[] {
  return frecuenciasPorCiclo.find((f) => f.slug === slug)?.frecuencias ?? [];
}

export default function ClasificacionCiclosVidaPage() {
  return (
    <SectionTemplate
      title="Clasificación por Ciclo de Vida y Frecuencia de Edad"
      description="Guía didáctica para identificar con claridad a qué ciclo de vida pertenece cada persona y cómo se divide en frecuencias de edad."
      icon={Layers}
      breadcrumbs={[
        { label: 'Facturación P&P', href: '/facturacion-pyp' },
        { label: 'Ciclos de Vida', href: '/facturacion-pyp/ciclos-vida' },
        { label: 'Clasificación por Edad' },
      ]}
      previousPage={{
        title: 'Ciclos de Vida',
        href: '/facturacion-pyp/ciclos-vida',
      }}
      nextPage={{
        title: 'Vacunación',
        href: '/facturacion-pyp/vacunacion',
      }}
    >
      <ContentBlock>
        <h2>¿Por qué es importante clasificar bien?</h2>
        <p>
          Cada persona atendida pertenece a un <strong>ciclo de vida</strong> según su edad. A su vez,
          cada ciclo se divide en <strong>frecuencias de edad</strong>, que son los rangos exactos que
          determinan cuándo corresponde realizar y facturar cada control. Clasificar correctamente
          evita errores de codificación y glosas.
        </p>

        <Alert variant="tip" title="Dos niveles, un mismo objetivo">
          <ul className="list-disc list-inside space-y-1">
            <li>
              <strong>Ciclo de Vida:</strong> la gran etapa a la que pertenece la persona (por ejemplo,
              Adolescencia).
            </li>
            <li>
              <strong>Frecuencia de Edad:</strong> el rango específico dentro de ese ciclo que define el
              control puntual (por ejemplo, 14 Años).
            </li>
          </ul>
        </Alert>
      </ContentBlock>

      {/* Línea de tiempo de los 6 ciclos */}
      <div className="my-10">
        <h2 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">
          Los 6 ciclos de vida de un vistazo
        </h2>
        <p className="mb-6 text-sm text-gray-600 dark:text-gray-400">
          De menor a mayor edad, así se ordena el curso de vida de una persona.
        </p>

        <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {ciclosVida.map((ciclo) => {
            const Icon = ciclo.icon;
            return (
              <li
                key={ciclo.slug}
                className={`relative flex items-start gap-4 rounded-xl border bg-gradient-to-br ${ciclo.gradient} ${ciclo.border} p-5`}
              >
                <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-white/70 text-gray-700 shadow-sm dark:bg-gray-900/40 dark:text-gray-200">
                  <Icon className="h-6 w-6" />
                </span>
                <div className="min-w-0">
                  <span className="text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400">
                    Ciclo {ciclo.numero}
                  </span>
                  <h3 className="font-semibold text-gray-900 dark:text-white">{ciclo.title}</h3>
                  <p className="mt-1 text-sm text-gray-700 dark:text-gray-300">{ciclo.rangoEdad}</p>
                </div>
              </li>
            );
          })}
        </ol>
      </div>

      <ContentBlock>
        <Alert variant="info" title="Recuerda los límites de edad">
          Los rangos incluyen hasta el último día antes de cumplir la siguiente etapa. Por ejemplo, la
          Primera Infancia llega hasta los <strong>5 años, 11 meses y 29 días</strong>; al cumplir 6
          años la persona pasa a Infancia.
        </Alert>
      </ContentBlock>

      {/* Frecuencias de edad por ciclo */}
      <div className="my-10">
        <div className="mb-6 flex items-center gap-2">
          <CalendarClock className="h-6 w-6 text-blue-600 dark:text-blue-400" />
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
            Frecuencias de edad por ciclo
          </h2>
        </div>
        <p className="mb-6 text-sm text-gray-600 dark:text-gray-400">
          Cada ciclo se subdivide en las siguientes frecuencias. Identifica primero el ciclo y luego el
          rango exacto que corresponde a la edad de la persona.
        </p>

        <div className="space-y-5">
          {ciclosVida.map((ciclo) => {
            const Icon = ciclo.icon;
            const frecuencias = getFrecuencias(ciclo.slug);
            return (
              <section
                key={ciclo.slug}
                className={`rounded-xl border ${ciclo.border} bg-white dark:bg-gray-800/40`}
              >
                <header
                  className={`flex flex-wrap items-center justify-between gap-3 rounded-t-xl border-b bg-gradient-to-r ${ciclo.gradient} ${ciclo.border} px-5 py-4`}
                >
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-white/70 text-gray-700 shadow-sm dark:bg-gray-900/40 dark:text-gray-200">
                      <Icon className="h-5 w-5" />
                    </span>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white">
                        {ciclo.numero}. {ciclo.title}
                      </h3>
                      <p className="text-sm text-gray-700 dark:text-gray-300">{ciclo.rangoEdad}</p>
                    </div>
                  </div>
                  <span className="text-xs font-medium text-gray-600 dark:text-gray-300">
                    {frecuencias.length} frecuencias
                  </span>
                </header>

                <div className="flex flex-wrap gap-2 p-5">
                  {frecuencias.map((frecuencia) => (
                    <Badge
                      key={frecuencia}
                      variant={badgeVariantePorSlug[ciclo.slug] ?? 'gray'}
                      size="md"
                    >
                      {frecuencia}
                    </Badge>
                  ))}
                </div>
              </section>
            );
          })}
        </div>
      </div>

      <ContentBlock>
        <Alert variant="success" title="En resumen">
          <ol className="list-decimal list-inside space-y-1">
            <li>Ubica la edad de la persona dentro de uno de los 6 ciclos de vida.</li>
            <li>Dentro de ese ciclo, identifica la frecuencia de edad exacta.</li>
            <li>Con esa frecuencia, selecciona el control y el código de facturación correcto.</li>
          </ol>
        </Alert>

        <p className="mt-6">
          ¿Necesitas los códigos CUPS y diagnósticos por edad? Consulta el detalle de cada ciclo desde la
          página principal de{' '}
          <a
            href="/facturacion-pyp/ciclos-vida"
            className="inline-flex items-center gap-1 font-medium text-blue-600 hover:underline dark:text-blue-400"
          >
            Ciclos de Vida
            <ArrowRight className="h-4 w-4" />
          </a>
          .
        </p>
      </ContentBlock>
    </SectionTemplate>
  );
}

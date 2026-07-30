'use client';

import { useState } from 'react';
import {
  Baby,
  Smile,
  Star,
  Sprout,
  Briefcase,
  Heart,
  CalendarDays,
  Layers3,
  type LucideIcon,
} from 'lucide-react';
import { SectionTemplate } from '@/components/templates';

interface CicloVidaInteractivo {
  slug: string;
  title: string;
  rangoCorto: string;
  descripcion: string;
  frecuencias: string[];
  icon: LucideIcon;
  color: string;
  softBackground: string;
  paleBackground: string;
  borderColor: string;
  textColor: string;
  badgeBackground: string;
  timelineWidth: string;
}

const ciclos: CicloVidaInteractivo[] = [
  {
    slug: 'primera-infancia',
    title: 'Primera Infancia',
    rangoCorto: '7 días – 5 años',
    descripcion: 'Desde los 7 días hasta los 5 años, 11 meses y 29 días',
    frecuencias: [
      '1 mes',
      'De 2 a 3 meses',
      'De 4 a 5 meses',
      'De 6 a 8 meses',
      'De 9 a 11 meses',
      'De 12 a 18 meses',
      'De 19 a 23 meses',
      'De 24 a 29 meses',
      'De 30 a 35 meses',
      '3 años',
      '4 años',
      '5 años',
    ],
    icon: Baby,
    color: 'bg-pink-500',
    softBackground: 'bg-pink-100 dark:bg-pink-950/50',
    paleBackground: 'bg-pink-50 dark:bg-pink-950/30',
    borderColor: 'border-pink-200 dark:border-pink-900',
    textColor: 'text-pink-600 dark:text-pink-400',
    badgeBackground: 'bg-pink-100 dark:bg-pink-900/50',
    timelineWidth: 'basis-[8%]',
  },
  {
    slug: 'infancia',
    title: 'Infancia',
    rangoCorto: '6 – 11 años',
    descripcion: 'Desde los 6 hasta los 11 años, 11 meses y 29 días',
    frecuencias: ['6 años', '7 años', '8 años', '9 años', '10 años', '11 años'],
    icon: Smile,
    color: 'bg-amber-500',
    softBackground: 'bg-amber-100 dark:bg-amber-950/50',
    paleBackground: 'bg-amber-50 dark:bg-amber-950/30',
    borderColor: 'border-amber-200 dark:border-amber-900',
    textColor: 'text-amber-600 dark:text-amber-400',
    badgeBackground: 'bg-amber-100 dark:bg-amber-900/50',
    timelineWidth: 'basis-[8%]',
  },
  {
    slug: 'adolescencia',
    title: 'Adolescencia',
    rangoCorto: '12 – 17 años',
    descripcion: 'Desde los 12 hasta los 17 años',
    frecuencias: ['12 años', '13 años', '14 años', '15 años', '16 años', '17 años'],
    icon: Star,
    color: 'bg-orange-500',
    softBackground: 'bg-orange-100 dark:bg-orange-950/50',
    paleBackground: 'bg-orange-50 dark:bg-orange-950/30',
    borderColor: 'border-orange-200 dark:border-orange-900',
    textColor: 'text-orange-600 dark:text-orange-400',
    badgeBackground: 'bg-orange-100 dark:bg-orange-900/50',
    timelineWidth: 'basis-[8%]',
  },
  {
    slug: 'juventud',
    title: 'Juventud',
    rangoCorto: '18 – 28 años',
    descripcion: 'Desde los 18 hasta los 28 años',
    frecuencias: ['De 18 a 23 años', 'De 24 a 28 años'],
    icon: Sprout,
    color: 'bg-teal-500',
    softBackground: 'bg-teal-100 dark:bg-teal-950/50',
    paleBackground: 'bg-teal-50 dark:bg-teal-950/30',
    borderColor: 'border-teal-200 dark:border-teal-900',
    textColor: 'text-teal-600 dark:text-teal-400',
    badgeBackground: 'bg-teal-100 dark:bg-teal-900/50',
    timelineWidth: 'basis-[13%]',
  },
  {
    slug: 'adultez',
    title: 'Adultez',
    rangoCorto: '29 – 59 años',
    descripcion: 'Desde los 29 hasta los 59 años',
    frecuencias: [
      'De 29 a 34 años',
      'De 35 a 39 años',
      'De 40 a 44 años',
      'De 45 a 49 años',
      'De 50 a 52 años',
      'De 53 a 55 años',
      'De 56 a 59 años',
    ],
    icon: Briefcase,
    color: 'bg-blue-500',
    softBackground: 'bg-blue-100 dark:bg-blue-950/50',
    paleBackground: 'bg-blue-50 dark:bg-blue-950/30',
    borderColor: 'border-blue-200 dark:border-blue-900',
    textColor: 'text-blue-600 dark:text-blue-400',
    badgeBackground: 'bg-blue-100 dark:bg-blue-900/50',
    timelineWidth: 'basis-[29%]',
  },
  {
    slug: 'vejez',
    title: 'Vejez',
    rangoCorto: '60 años y más',
    descripcion: 'Desde los 60 años en adelante',
    frecuencias: [
      'De 60 a 62 años',
      'De 63 a 65 años',
      'De 66 a 68 años',
      'De 69 a 71 años',
      'De 72 a 74 años',
      'De 75 a 77 años',
      'De 78 a 79 años',
      '80 años y más',
    ],
    icon: Heart,
    color: 'bg-violet-500',
    softBackground: 'bg-violet-100 dark:bg-violet-950/50',
    paleBackground: 'bg-violet-50 dark:bg-violet-950/30',
    borderColor: 'border-violet-200 dark:border-violet-900',
    textColor: 'text-violet-600 dark:text-violet-400',
    badgeBackground: 'bg-violet-100 dark:bg-violet-900/50',
    timelineWidth: 'basis-[34%]',
  },
];

export default function ClasificacionCiclosVidaPage() {
  const [cicloActivo, setCicloActivo] = useState(ciclos[0]);
  const ActiveIcon = cicloActivo.icon;

  return (
    <SectionTemplate
      title="Clasificación por Ciclo de Vida"
      description="Identifica de forma rápida el ciclo de vida y las frecuencias de edad que corresponden a cada persona."
      icon={Layers3}
      breadcrumbs={[
        { label: 'Facturación P&P', href: '/facturacion-pyp' },
        { label: 'Ciclos de Vida', href: '/facturacion-pyp/ciclos-vida' },
        { label: 'Clasificación por Edad' },
      ]}
      previousPage={{ title: 'Ciclos de Vida', href: '/facturacion-pyp/ciclos-vida' }}
      nextPage={{ title: 'Vacunación', href: '/facturacion-pyp/vacunacion' }}
    >
      <div className="w-full">
        <p className="max-w-4xl text-base leading-7 text-gray-600 dark:text-gray-300">
          El curso de vida se organiza en{' '}
          <strong className="text-gray-900 dark:text-white">seis ciclos</strong>, y cada ciclo agrupa
          una serie de <strong className="text-gray-900 dark:text-white">frecuencias de edad</strong>{' '}
          utilizadas para la atención y el seguimiento en salud. Selecciona un ciclo para consultar
          su detalle.
        </p>

        <section className="mt-8" aria-labelledby="linea-curso-vida">
          <div className="mb-3 flex items-center gap-2 text-xs font-bold uppercase text-gray-500 dark:text-gray-400">
            <CalendarDays className="h-4 w-4" />
            <h2 id="linea-curso-vida">Línea del curso de vida</h2>
          </div>

          <div className="overflow-x-auto pb-2">
            <div
              className="flex min-w-[760px] overflow-hidden rounded-xl border border-gray-200 shadow-sm dark:border-gray-700"
              role="tablist"
              aria-label="Ciclos de vida"
            >
              {ciclos.map((ciclo) => {
                const Icon = ciclo.icon;
                const activo = ciclo.slug === cicloActivo.slug;

                return (
                  <button
                    key={ciclo.slug}
                    type="button"
                    role="tab"
                    aria-selected={activo}
                    aria-controls="detalle-ciclo"
                    onClick={() => setCicloActivo(ciclo)}
                    className={`flex min-h-20 shrink-0 flex-col items-center justify-center gap-1 px-3 py-3 text-center transition-colors ${ciclo.timelineWidth} ${
                      activo
                        ? `${ciclo.color} text-white`
                        : `${ciclo.softBackground} ${ciclo.textColor} hover:brightness-95 dark:hover:brightness-110`
                    }`}
                  >
                    <Icon className="h-5 w-5" />
                    <span className="text-xs font-bold">{ciclo.rangoCorto}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        <section
          className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-3 xl:grid-cols-6"
          aria-label="Selector de ciclo de vida"
        >
          {ciclos.map((ciclo) => {
            const Icon = ciclo.icon;
            const activo = ciclo.slug === cicloActivo.slug;

            return (
              <button
                key={ciclo.slug}
                type="button"
                onClick={() => setCicloActivo(ciclo)}
                aria-pressed={activo}
                className={`group flex min-h-32 flex-col items-center justify-center rounded-xl border p-4 text-center transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${
                  activo
                    ? `${ciclo.paleBackground} ${ciclo.borderColor} -translate-y-0.5 shadow-lg`
                    : 'border-gray-200 bg-white hover:-translate-y-0.5 hover:border-gray-300 hover:shadow-md dark:border-gray-700 dark:bg-gray-900 dark:hover:border-gray-600'
                }`}
              >
                <span
                  className={`flex h-11 w-11 items-center justify-center rounded-lg transition-colors ${
                    activo ? `${ciclo.color} text-white` : `${ciclo.softBackground} ${ciclo.textColor}`
                  }`}
                >
                  <Icon className="h-5 w-5" />
                </span>
                <span
                  className={`mt-3 text-sm font-semibold ${
                    activo ? ciclo.textColor : 'text-gray-900 dark:text-white'
                  }`}
                >
                  {ciclo.title}
                </span>
                <span className="mt-1 text-xs text-gray-400">
                  {ciclo.frecuencias.length} frec.
                </span>
              </button>
            );
          })}
        </section>

        <section
          id="detalle-ciclo"
          role="tabpanel"
          aria-live="polite"
          className={`mt-8 overflow-hidden rounded-2xl border bg-white shadow-sm dark:bg-gray-900 ${cicloActivo.borderColor}`}
        >
          <header
            className={`flex flex-col gap-4 px-5 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-7 ${cicloActivo.paleBackground}`}
          >
            <div className="flex items-center gap-4">
              <span
                className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-xl text-white shadow-md ${cicloActivo.color}`}
              >
                <ActiveIcon className="h-7 w-7" />
              </span>
              <div>
                <h2 className="text-xl font-bold text-gray-900 dark:text-white sm:text-2xl">
                  {cicloActivo.title}
                </h2>
                <p className="mt-0.5 text-sm text-gray-600 dark:text-gray-300 sm:text-base">
                  {cicloActivo.descripcion}
                </p>
              </div>
            </div>
            <span
              className={`inline-flex w-fit items-center gap-2 rounded-full px-4 py-2 text-xs font-bold ${cicloActivo.badgeBackground} ${cicloActivo.textColor}`}
            >
              <Layers3 className="h-4 w-4" />
              {cicloActivo.frecuencias.length} frecuencias de edad
            </span>
          </header>

          <ol className="grid gap-3 p-5 sm:grid-cols-2 sm:p-7 lg:grid-cols-3 xl:grid-cols-4">
            {cicloActivo.frecuencias.map((frecuencia, index) => (
              <li
                key={frecuencia}
                className="flex min-h-14 items-center gap-3 rounded-lg bg-gray-50 px-4 py-3 dark:bg-gray-800/80"
              >
                <span
                  className={`flex h-8 min-w-8 items-center justify-center rounded-md text-xs font-bold ${cicloActivo.badgeBackground} ${cicloActivo.textColor}`}
                >
                  {index + 1}
                </span>
                <span className="text-sm font-medium text-gray-700 dark:text-gray-200 sm:text-base">
                  {frecuencia}
                </span>
              </li>
            ))}
          </ol>
        </section>
      </div>
    </SectionTemplate>
  );
}

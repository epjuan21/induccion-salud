import { BookOpen, FolderOpen, ExternalLink } from 'lucide-react';
import { SectionTemplate } from '@/components/templates';
import { ArticleContainer, SectionBackground } from '@/components/layout';
import { Alert, Accordion, SectionDivider, CompactCard } from '@/components/ui';

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
      {/* Introducción - Fondo Blanco */}
      <SectionBackground variant="default" spacing="normal">
        <ArticleContainer maxWidth="prose">
          <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
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
        </ArticleContainer>
      </SectionBackground>

      {/* Tipos de vigilancia - Fondo Gris */}
      <SectionBackground variant="muted" spacing="large">
        <ArticleContainer maxWidth="prose">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Tipos de Vigilancia
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
            Existen diferentes estrategias de vigilancia según el contexto y el evento de interés.
          </p>

          <div className="space-y-3">
            {tiposVigilancia.map((item) => (
              <CompactCard key={item.tipo} variant="default">
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                    {item.tipo}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-1">
                    {item.descripcion}
                  </p>
                  <p className="text-xs text-primary-600 dark:text-primary-400">
                    <strong>Ejemplo:</strong> {item.ejemplo}
                  </p>
                </div>
              </CompactCard>
            ))}
          </div>
        </ArticleContainer>
      </SectionBackground>

      {/* Separador Decorativo */}
      <SectionDivider variant="decorative" icon={BookOpen} />

      {/* Flujo de información - Fondo Blanco */}
      <SectionBackground variant="default" spacing="large">
        <ArticleContainer maxWidth="prose">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Flujo de la Información
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
            El flujo de información en vigilancia va desde la UPGD (nivel local)
            hacia la secretaría municipal/distrital de salud, luego a la
            secretaría departamental y finalmente al Instituto Nacional de Salud
            (nivel nacional).
          </p>

          <div className="space-y-3">
            {[
              { paso: '1', titulo: 'Detección del caso', desc: 'El profesional de salud identifica un caso que cumple definición de evento de vigilancia.' },
              { paso: '2', titulo: 'Notificación', desc: 'Se diligencia la ficha de notificación y se ingresa al SIVIGILA.' },
              { paso: '3', titulo: 'Análisis local', desc: 'La secretaría de salud analiza la información y activa acciones de respuesta.' },
              { paso: '4', titulo: 'Consolidación', desc: 'La información fluye a los niveles superiores para análisis regional y nacional.' },
              { paso: '5', titulo: 'Retroalimentación', desc: 'Los análisis y alertas se comparten de vuelta a los niveles locales.' },
            ].map((item) => (
              <CompactCard key={item.paso} variant="default">
                <div className="flex items-start gap-3">
                  <div className="shrink-0 w-8 h-8 rounded-full bg-primary-100 dark:bg-primary-900/40 flex items-center justify-center">
                    <span className="text-sm font-bold text-primary-700 dark:text-primary-300">{item.paso}</span>
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

          <Alert variant="warning" title="Tiempos de notificación" className="mt-6">
            <p>Los tiempos de notificación varían según el evento:</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li><strong>Inmediata (24 horas):</strong> Eventos de alta prioridad como parálisis flácida, sarampión, cólera</li>
              <li><strong>Semanal:</strong> La mayoría de eventos se notifican por semana epidemiológica</li>
            </ul>
          </Alert>
        </ArticleContainer>
      </SectionBackground>

      {/* Fichas y Protocolos - Fondo Gris */}
      <SectionBackground variant="muted" spacing="large">
        <ArticleContainer maxWidth="prose">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Fichas y Protocolos de Vigilancia
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
            Las fichas de notificación y los protocolos de vigilancia contienen las definiciones
            de caso, criterios de clasificación y procedimientos para cada evento. Consúltalos
            en los siguientes recursos:
          </p>

          <div className="space-y-3">
            <CompactCard variant="default">
              <div className="flex items-start gap-3">
                <div className="p-2 bg-blue-100 dark:bg-blue-900/40 rounded-lg shrink-0">
                  <FolderOpen className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                    Servidor institucional
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-2">
                    En el servidor principal del hospital encontrarás la carpeta{' '}
                    <strong className="text-gray-800 dark:text-gray-200">SIVIGILA</strong>{' '}
                    con las fichas y protocolos actualizados de todos los eventos de
                    vigilancia en salud pública.
                  </p>
                  <p className="text-xs font-mono bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-2 py-1 rounded inline-block">
                    \SIVIGILA\
                  </p>
                </div>
              </div>
            </CompactCard>

            <CompactCard variant="default">
              <div className="flex items-start gap-3">
                <div className="p-2 bg-green-100 dark:bg-green-900/40 rounded-lg shrink-0">
                  <ExternalLink className="w-5 h-5 text-green-600 dark:text-green-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                    Instituto Nacional de Salud (INS)
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-2">
                    El INS publica oficialmente todas las fichas y protocolos de
                    vigilancia. Descárgalos desde el buscador oficial de eventos.
                  </p>
                  <a
                    href="https://www.ins.gov.co/buscador-eventos/Paginas/Fichas-y-Protocolos.aspx"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs text-green-700 dark:text-green-400 hover:underline font-medium"
                  >
                    <ExternalLink className="w-3 h-3" />
                    ins.gov.co — Fichas y Protocolos
                  </a>
                </div>
              </div>
            </CompactCard>
          </div>
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

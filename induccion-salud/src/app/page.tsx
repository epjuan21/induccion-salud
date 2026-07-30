import {
  Hospital,
  Target,
  Eye,
  Scale,
  Handshake,
  ShieldCheck,
  Users,
  HeartPulse,
  Zap,
  ClipboardCheck,
  Sparkles,
  ExternalLink,
  Table2,
  BarChart3,
} from 'lucide-react';
import { Card } from '@/components/ui/Card';

const valores = [
  {
    title: 'Diligencia',
    description:
      'Cumplo con los deberes, funciones y responsabilidades asignadas a mi cargo de la mejor manera posible, con atención, prontitud, destreza y eficiencia, para así optimizar el uso de los recursos del Estado.',
    icon: Zap,
    iconColor: 'text-amber-600 dark:text-amber-400',
    iconBgColor: 'bg-amber-100 dark:bg-amber-900/30',
  },
  {
    title: 'Justicia',
    description:
      'Actúo con imparcialidad garantizando los derechos de las personas, con equidad, igualdad y sin discriminación.',
    icon: Scale,
    iconColor: 'text-blue-600 dark:text-blue-400',
    iconBgColor: 'bg-blue-100 dark:bg-blue-900/30',
  },
  {
    title: 'Compromiso',
    description:
      'Soy consciente de la importancia de mi rol como servidor público y estoy en disposición permanente para comprender y resolver las necesidades de las personas con las que me relaciono en mis labores cotidianas, buscando siempre mejorar su bienestar.',
    icon: Handshake,
    iconColor: 'text-green-600 dark:text-green-400',
    iconBgColor: 'bg-green-100 dark:bg-green-900/30',
  },
  {
    title: 'Honestidad',
    description:
      'Actúo siempre con fundamento en la verdad, cumpliendo mis deberes con transparencia y rectitud, y siempre favoreciendo el interés general.',
    icon: ShieldCheck,
    iconColor: 'text-teal-600 dark:text-teal-400',
    iconBgColor: 'bg-teal-100 dark:bg-teal-900/30',
  },
  {
    title: 'Respeto',
    description:
      'Reconozco, valoro y trato de manera digna a todas las personas, con sus virtudes y defectos, sin importar su labor, su procedencia, títulos o cualquier otra condición.',
    icon: Users,
    iconColor: 'text-indigo-600 dark:text-indigo-400',
    iconBgColor: 'bg-indigo-100 dark:bg-indigo-900/30',
  },
  {
    title: 'Humanización',
    description:
      'Presto el servicio a la persona enferma, considerándolo en su globalidad personal y tratando de ofrecerle una asistencia integral con calidez, que responda a las dimensiones psicológica, biológica, social y espiritual.',
    icon: HeartPulse,
    iconColor: 'text-rose-600 dark:text-rose-400',
    iconBgColor: 'bg-rose-100 dark:bg-rose-900/30',
  },
];

const objetivos = [
  'Producir servicios de salud eficientes y efectivos que cumplan con las normas de calidad establecidas, de acuerdo con la reglamentación que se expida para tal propósito.',
  'Prestar los servicios de salud que la población requiera y que la Empresa Social, de acuerdo con su desarrollo y recursos disponibles, pueda ofrecer.',
  'Garantizar mediante un manejo gerencial adecuado, la rentabilidad social y financiera de la Empresa Social.',
  'Ofrecer a las Entidades Promotoras de Salud y demás personas naturales o jurídicas que los demanden, servicios y paquetes de servicios a tarifas competitivas en el mercado.',
  'Satisfacer los requerimientos del entorno, adecuando continuamente sus servicios y funcionamiento.',
  'Garantizar los mecanismos de participación ciudadana y comunitaria establecidos por la ley y los reglamentos.',
];

const herramientas = [
  {
    title: 'Referencias en Salud',
    description:
      'Acceso a tablas de referencia y herramientas de utilidad del sector salud.',
    href: 'https://www.referencias.app/',
    icon: Table2,
    iconColor: 'text-primary-600 dark:text-primary-400',
    iconBgColor: 'bg-primary-100 dark:bg-primary-900/30',
  },
  {
    title: 'ChartForge',
    description:
      'Herramienta para crear gráficos de manera rápida y visual.',
    href: 'https://chartforge-iota.vercel.app/',
    icon: BarChart3,
    iconColor: 'text-secondary-600 dark:text-secondary-400',
    iconBgColor: 'bg-secondary-100 dark:bg-secondary-900/30',
  },
];

export default function HomePage() {
  return (
    <div className="p-6 lg:p-8">
      {/* Hero Section */}
      <section className="relative mb-16 overflow-hidden rounded-3xl border border-primary-100 dark:border-primary-900/40 bg-gradient-to-br from-primary-600 via-primary-700 to-primary-900 shadow-xl">
        {/* Decorative background */}
        <div
          className="pointer-events-none absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              'radial-gradient(circle at 20% 20%, rgba(255,255,255,0.35) 0, transparent 45%), radial-gradient(circle at 85% 15%, rgba(255,255,255,0.25) 0, transparent 40%)',
          }}
        />
        <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-white/10 blur-2xl" />
        <div className="pointer-events-none absolute -bottom-24 -left-10 h-72 w-72 rounded-full bg-secondary-400/20 blur-3xl" />

        <div className="relative px-6 py-14 sm:px-10 lg:px-16 lg:py-20">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-white/90 backdrop-blur">
              <Sparkles className="h-3.5 w-3.5" />
              Empresa Social del Estado
            </span>

            <div className="mt-6 flex items-center gap-4">
              <div className="inline-flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-white/15 ring-1 ring-white/25 backdrop-blur">
                <Hospital className="h-9 w-9 text-white" />
              </div>
              <h1 className="text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
                Hospital San Antonio de Betania
              </h1>
            </div>

            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-primary-50/90">
              Bienvenido al Portal de Inducción. Un espacio institucional para
              conocer quiénes somos, nuestra razón de ser y los principios que
              guían la atención humanizada y de calidad a nuestros usuarios.
            </p>

            <a
              href="https://www.esesanantonio-betania-antioquia.gov.co/"
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-semibold text-primary-700 shadow-lg shadow-primary-950/20 transition-all hover:-translate-y-0.5 hover:bg-primary-50 hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary-700"
            >
              Visitar sitio web institucional
              <ExternalLink className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </div>
      </section>

      {/* Misión & Visión */}
      <section className="mb-16 grid gap-6 lg:grid-cols-2">
        <Card padding="none" className="relative overflow-hidden border-l-4 border-l-primary-600">
          <div className="p-8">
            <div className="mb-5 flex items-center gap-3">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary-100 text-primary-600 dark:bg-primary-900/30 dark:text-primary-400">
                <Target className="h-6 w-6" />
              </span>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Misión</h2>
            </div>
            <p className="leading-relaxed text-gray-600 dark:text-gray-300">
              Prestar servicios de salud de baja complejidad, con énfasis en
              protección específica y detección temprana, a través de un enfoque
              diferencial y participativo, recurso humano competente, encaminado a
              la calidad y atención humanizada, con responsabilidad ambiental y
              tecnología adecuada, satisfaciendo las necesidades en salud de
              nuestros usuarios.
            </p>
          </div>
        </Card>

        <Card padding="none" className="relative overflow-hidden border-l-4 border-l-secondary-600">
          <div className="p-8">
            <div className="mb-5 flex items-center gap-3">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-secondary-100 text-secondary-600 dark:bg-secondary-900/30 dark:text-secondary-400">
                <Eye className="h-6 w-6" />
              </span>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Visión</h2>
            </div>
            <p className="leading-relaxed text-gray-600 dark:text-gray-300">
              Para el año 2028 seremos una institución con reconocimiento en la
              región por la atención cálida y humana, fortalecida por su capacidad
              de adaptación al cambio, su solidez tecnológica, sostenibilidad
              financiera y rentabilidad social.
            </p>
          </div>
        </Card>
      </section>

      {/* Valores */}
      <section className="mb-16">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
            Valores Corporativos
          </h2>
          <p className="mx-auto mt-3 max-w-3xl text-gray-600 dark:text-gray-400">
            Los valores corporativos de la E.S.E. Hospital San Antonio de Betania
            son los impulsores principales del actuar de cada funcionario; otorgan
            cohesión y sentido de pertenencia, y establecen compromisos éticos con
            nuestros usuarios. La institución se acoge a los valores del Código de
            Integridad del Funcionario Público, sumando adicionalmente el valor de
            la Humanización.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {valores.map((valor) => {
            const Icon = valor.icon;
            return (
              <Card
                key={valor.title}
                className="group h-full transition-all hover:-translate-y-1 hover:shadow-lg"
              >
                <span
                  className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl ${valor.iconBgColor} ${valor.iconColor}`}
                >
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
                  {valor.title}
                </h3>
                <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                  {valor.description}
                </p>
              </Card>
            );
          })}
        </div>
      </section>

      {/* Objetivos Corporativos */}
      <section className="mb-16">
        <div className="mb-8 flex flex-col items-center text-center">
          <span className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary-100 text-primary-600 dark:bg-primary-900/30 dark:text-primary-400">
            <ClipboardCheck className="h-6 w-6" />
          </span>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
            Objetivos Corporativos
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {objetivos.map((objetivo, index) => (
            <Card
              key={index}
              className="flex items-start gap-4 transition-colors hover:border-primary-300 dark:hover:border-primary-700"
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary-600 text-sm font-bold uppercase text-white">
                {String.fromCharCode(97 + index)}
              </span>
              <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-300">
                {objetivo}
              </p>
            </Card>
          ))}
        </div>
      </section>

      {/* Herramientas Externas */}
      <section className="relative overflow-hidden rounded-3xl border border-gray-200 bg-gradient-to-br from-gray-50 to-primary-50/60 p-8 dark:border-gray-800 dark:from-gray-900 dark:to-primary-950/30 sm:p-10">
        <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-primary-200/40 blur-3xl dark:bg-primary-800/20" />
        <div className="relative">
          <div className="mb-8 text-center">
            <span className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary-600 text-white shadow-lg shadow-primary-600/30">
              <ExternalLink className="h-6 w-6" />
            </span>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              Herramientas Externas
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-gray-600 dark:text-gray-400">
              Recursos y aplicaciones de apoyo para tu labor diaria en el sector
              salud.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {herramientas.map((herramienta) => {
              const Icon = herramienta.icon;
              return (
                <a
                  key={herramienta.href}
                  href={herramienta.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start gap-4 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-primary-300 hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 dark:border-gray-700 dark:bg-gray-800 dark:hover:border-primary-700"
                >
                  <span
                    className={`inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${herramienta.iconBgColor} ${herramienta.iconColor}`}
                  >
                    <Icon className="h-6 w-6" />
                  </span>
                  <div className="min-w-0">
                    <h3 className="flex items-center gap-1.5 text-lg font-semibold text-gray-900 dark:text-white">
                      {herramienta.title}
                      <ExternalLink className="h-4 w-4 text-gray-400 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary-600 dark:group-hover:text-primary-400" />
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                      {herramienta.description}
                    </p>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

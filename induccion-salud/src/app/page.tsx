import { Shield, DollarSign, FileText, Bug, BookOpen, Users, Award, Clock } from 'lucide-react';
import { ModuleCard } from '@/components/ui/ModuleCard';
import { Alert } from '@/components/ui/Alert';
import { Card, CardContent } from '@/components/ui/Card';

const modules = [
  {
    title: 'Seguridad de la Información',
    description: 'Aprende sobre el manejo seguro de la información y equipos de cómputo institucionales.',
    href: '/seguridad-informacion',
    icon: Shield,
    iconColor: 'text-blue-600 dark:text-blue-400',
    iconBgColor: 'bg-blue-100 dark:bg-blue-900/30',
    subsections: [
      { title: 'Manejo Correcto de Equipos de Cómputo', href: '/seguridad-informacion/manejo-equipos' },
    ],
  },
  {
    title: 'Facturación de Servicios P&P',
    description: 'Conoce los procesos de facturación de servicios de promoción y prevención en salud.',
    href: '/facturacion-pyp',
    icon: DollarSign,
    iconColor: 'text-green-600 dark:text-green-400',
    iconBgColor: 'bg-green-100 dark:bg-green-900/30',
    subsections: [
      { title: 'Planificación Familiar', href: '/facturacion-pyp/planificacion-familiar' },
      { title: 'Ruta Materno Perinatal', href: '/facturacion-pyp/ruta-materno-perinatal' },
      { title: 'Ciclos de Vida', href: '/facturacion-pyp/ciclos-vida' },
      { title: 'Vacunación', href: '/facturacion-pyp/vacunacion' },
      { title: 'Higiene Oral', href: '/facturacion-pyp/higiene-oral' },
    ],
  },
  {
    title: 'Diligenciamiento de Historias Clínicas',
    description: 'Guías y normativas para el correcto diligenciamiento de historias clínicas.',
    href: '/historias-clinicas',
    icon: FileText,
    iconColor: 'text-purple-600 dark:text-purple-400',
    iconBgColor: 'bg-purple-100 dark:bg-purple-900/30',
    subsections: [
      { title: 'Planificación Familiar', href: '/historias-clinicas/planificacion-familiar' },
      { title: 'Ruta Materno Perinatal', href: '/historias-clinicas/ruta-materno-perinatal' },
      { title: 'Ciclos de Vida', href: '/historias-clinicas/ciclos-vida' },
    ],
  },
  {
    title: 'Vigilancia Epidemiológica',
    description: 'Conceptos fundamentales y procedimientos de vigilancia epidemiológica.',
    href: '/vigilancia-epidemiologica',
    icon: Bug,
    iconColor: 'text-orange-600 dark:text-orange-400',
    iconBgColor: 'bg-orange-100 dark:bg-orange-900/30',
    subsections: [
      { title: 'Conceptos Generales', href: '/vigilancia-epidemiologica/conceptos-generales' },
      { title: 'Eventos Clave', href: '/vigilancia-epidemiologica/eventos-clave' },
    ],
  },
];

const stats = [
  { icon: BookOpen, label: 'Módulos', value: '4' },
  { icon: FileText, label: 'Lecciones', value: '11' },
  { icon: Clock, label: 'Duración estimada', value: '8 horas' },
  { icon: Award, label: 'Certificación', value: 'Incluida' },
];

export default function HomePage() {
  return (
    <div className="p-6 lg:p-8">
      {/* Hero Section */}
      <section className="text-center mb-12">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-100 dark:bg-primary-900/30 mb-6">
          <Users className="w-8 h-8 text-primary-600 dark:text-primary-400" />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
          Bienvenido al Portal de Inducción
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Este portal contiene toda la información necesaria para tu proceso de
          incorporación como personal de salud en nuestra institución.
        </p>
      </section>

      {/* Stats */}
      <section className="mb-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <Card key={stat.label} className="text-center">
                <CardContent className="p-4">
                  <Icon className="w-6 h-6 mx-auto text-primary-600 dark:text-primary-400 mb-2" />
                  <p className="text-2xl font-bold text-gray-900 dark:text-white">
                    {stat.value}
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {stat.label}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      {/* Welcome Alert */}
      <section className="mb-12 max-w-3xl mx-auto">
        <Alert variant="info" title="¡Comienza tu proceso de inducción!">
          Te recomendamos completar los módulos en orden para un mejor aprendizaje.
          Cada módulo incluye material educativo, recursos adicionales y evaluaciones
          para verificar tu comprensión.
        </Alert>
      </section>

      {/* Modules Grid */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
          Módulos de Capacitación
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          {modules.map((module) => (
            <ModuleCard
              key={module.href}
              title={module.title}
              description={module.description}
              href={module.href}
              icon={module.icon}
              iconColor={module.iconColor}
              iconBgColor={module.iconBgColor}
              subsections={module.subsections}
            />
          ))}
        </div>
      </section>
    </div>
  );
}

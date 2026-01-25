import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  Alert,
  ExternalLink,
} from '@/components/ui';
import { Shield, DollarSign, FileText, Bug, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const modules = [
  {
    title: 'Seguridad de la Información',
    description: 'Aprende sobre el manejo seguro de la información y equipos de cómputo.',
    icon: Shield,
    href: '/seguridad-informacion',
    color: 'text-blue-600 dark:text-blue-400',
    bgColor: 'bg-blue-100 dark:bg-blue-900/30',
  },
  {
    title: 'Facturación P&P',
    description: 'Conoce los procesos de facturación de servicios de promoción y prevención.',
    icon: DollarSign,
    href: '/facturacion-pyp',
    color: 'text-green-600 dark:text-green-400',
    bgColor: 'bg-green-100 dark:bg-green-900/30',
  },
  {
    title: 'Historias Clínicas',
    description: 'Guías para el correcto diligenciamiento de historias clínicas.',
    icon: FileText,
    href: '/historias-clinicas',
    color: 'text-purple-600 dark:text-purple-400',
    bgColor: 'bg-purple-100 dark:bg-purple-900/30',
  },
  {
    title: 'Vigilancia Epidemiológica',
    description: 'Conceptos y procedimientos de vigilancia epidemiológica.',
    icon: Bug,
    href: '/vigilancia-epidemiologica',
    color: 'text-orange-600 dark:text-orange-400',
    bgColor: 'bg-orange-100 dark:bg-orange-900/30',
  },
];

export default function HomePage() {
  return (
    <div className="p-6 lg:p-8">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Bienvenido al Portal de Inducción
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Este portal contiene toda la información necesaria para tu proceso de
          incorporación como personal de salud.
        </p>
      </div>

      {/* Alert de bienvenida */}
      <div className="max-w-3xl mx-auto mb-12">
        <Alert variant="info" title="¡Comienza tu inducción!">
          Explora cada módulo en orden para completar tu proceso de inducción.
          Cada sección incluye material educativo, videos y evaluaciones.
        </Alert>
      </div>

      {/* Módulos */}
      <div className="grid gap-6 md:grid-cols-2 max-w-4xl mx-auto">
        {modules.map((module) => {
          const Icon = module.icon;
          return (
            <Link key={module.href} href={module.href}>
              <Card
                className="h-full hover:shadow-lg transition-shadow cursor-pointer group"
                variant="bordered"
              >
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className={`p-3 rounded-xl ${module.bgColor}`}>
                      <Icon className={`w-6 h-6 ${module.color}`} />
                    </div>
                    <div>
                      <CardTitle className="group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                        {module.title}
                      </CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-400">
                    {module.description}
                  </p>
                  <div className="mt-4 flex items-center text-primary-600 dark:text-primary-400 font-medium">
                    <span>Comenzar</span>
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          );
        })}
      </div>

      {/* Sección de ayuda */}
      <div className="mt-12 text-center">
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          ¿Necesitas ayuda? Contacta al departamento de capacitación.
        </p>
        <ExternalLink href="mailto:capacitacion@institucion.com">
          capacitacion@institucion.com
        </ExternalLink>
      </div>
    </div>
  );
}

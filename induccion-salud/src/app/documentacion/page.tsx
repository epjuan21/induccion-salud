import { BookOpen, FileText, Route, ShieldPlus, ClipboardList } from 'lucide-react';
import { SectionTemplate } from '@/components/templates';
import { ArticleContainer, SectionBackground } from '@/components/layout';
import { ModuleCard } from '@/components/ui/ModuleCard';

const secciones = [
  {
    title: 'Guías Saviasalud',
    description: 'Guías de práctica clínica y manejo definidas por Savia Salud EPS.',
    href: '/documentacion/guias-saviasalud',
    icon: FileText,
    iconColor: 'text-emerald-600 dark:text-emerald-400',
    iconBgColor: 'bg-emerald-100 dark:bg-emerald-900/30',
  },
  {
    title: 'Rutas Saviasalud',
    description: 'Rutas integrales de atención en salud de Savia Salud EPS.',
    href: '/documentacion/rutas-saviasalud',
    icon: Route,
    iconColor: 'text-sky-600 dark:text-sky-400',
    iconBgColor: 'bg-sky-100 dark:bg-sky-900/30',
  },
  {
    title: 'Guías Sura',
    description: 'Guías de abordaje y seguimiento definidas por EPS SURA.',
    href: '/documentacion/guias-sura',
    icon: ShieldPlus,
    iconColor: 'text-indigo-600 dark:text-indigo-400',
    iconBgColor: 'bg-indigo-100 dark:bg-indigo-900/30',
  },
  {
    title: 'Protocolos Institucionales',
    description: 'Protocolos clínicos propios de la institución.',
    href: '/documentacion/protocolos-institucionales',
    icon: ClipboardList,
    iconColor: 'text-amber-600 dark:text-amber-400',
    iconBgColor: 'bg-amber-100 dark:bg-amber-900/30',
  },
];

export default function DocumentacionPage() {
  return (
    <SectionTemplate
      title="Documentación"
      description="Guías, rutas y protocolos de consulta para el personal de salud, organizados por entidad y tipo de documento."
      icon={BookOpen}
      breadcrumbs={[{ label: 'Documentación' }]}
    >
      <SectionBackground variant="default">
        <ArticleContainer maxWidth="wide">
          <div className="grid gap-6 md:grid-cols-2">
            {secciones.map((seccion) => (
              <ModuleCard
                key={seccion.href}
                title={seccion.title}
                description={seccion.description}
                href={seccion.href}
                icon={seccion.icon}
                iconColor={seccion.iconColor}
                iconBgColor={seccion.iconBgColor}
              />
            ))}
          </div>
        </ArticleContainer>
      </SectionBackground>
    </SectionTemplate>
  );
}

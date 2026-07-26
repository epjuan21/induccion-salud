import { Palette } from 'lucide-react';
import { SectionTemplate } from '@/components/templates';
import { ArticleContainer, SectionBackground } from '@/components/layout';
import { ModuleCard } from '@/components/ui/ModuleCard';

const references = [
  {
    title: 'Paleta Ciclos de Vida',
    description: 'Colores base para piezas, tarjetas e interfaces relacionadas con ciclos de vida.',
    href: '/otras-referencias/paleta-ciclos-vida',
    icon: Palette,
    iconColor: 'text-rose-600 dark:text-rose-400',
    iconBgColor: 'bg-rose-100 dark:bg-rose-900/30',
    subsections: [
      { title: 'Primera infancia', href: '/otras-referencias/paleta-ciclos-vida#primera-infancia' },
      { title: 'Infancia', href: '/otras-referencias/paleta-ciclos-vida#infancia' },
      { title: 'Adolescencia', href: '/otras-referencias/paleta-ciclos-vida#adolescencia' },
    ],
  },
];

export default function OtrasReferenciasPage() {
  return (
    <SectionTemplate
      title="Otras Referencias"
      description="Recursos de consulta para mantener criterios visuales y de contenido consistentes en el portal."
      icon={Palette}
      breadcrumbs={[{ label: 'Otras Referencias' }]}
    >
      <SectionBackground variant="default">
        <ArticleContainer maxWidth="wide">
          <div className="grid gap-6 md:grid-cols-2">
            {references.map((reference) => (
              <ModuleCard
                key={reference.href}
                title={reference.title}
                description={reference.description}
                href={reference.href}
                icon={reference.icon}
                iconColor={reference.iconColor}
                iconBgColor={reference.iconBgColor}
                subsections={reference.subsections}
              />
            ))}
          </div>
        </ArticleContainer>
      </SectionBackground>
    </SectionTemplate>
  );
}
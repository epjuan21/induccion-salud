import { Palette, Baby, Smile, Star, Sprout, Briefcase, Heart, type LucideIcon } from 'lucide-react';
import { SectionTemplate } from '@/components/templates';
import { ArticleContainer, SectionBackground } from '@/components/layout';
import { Card } from '@/components/ui/Card';
import { CopyButton } from '@/components/ui/CopyButton';

interface LifeCycleGroup {
  id: string;
  title: string;
  icon: LucideIcon;
  accent: string;
  description: string;
  colors: string[];
}

const lifeCyclePalette: LifeCycleGroup[] = [
  {
    id: 'primera-infancia',
    title: 'Primera infancia',
    icon: Baby,
    accent: '#F06292',
    description: 'Representa cuidado, ternura y crecimiento temprano.',
    colors: ['#C2187A', '#F06292', '#F8BBD0'],
  },
  {
    id: 'infancia',
    title: 'Infancia',
    icon: Smile,
    accent: '#FF8F00',
    description: 'Transmite energía, alegría y aprendizaje.',
    colors: ['#FF8F00', '#FFC107', '#FFE082'],
  },
  {
    id: 'adolescencia',
    title: 'Adolescencia',
    icon: Star,
    accent: '#FF7043',
    description: 'Refleja transformación, identidad y exploración.',
    colors: ['#E64A19', '#FF7043', '#FFB09B'],
  },
  {
    id: 'juventud',
    title: 'Juventud',
    icon: Sprout,
    accent: '#26A69A',
    description: 'Simboliza vitalidad, propósito y conexión.',
    colors: ['#00695C', '#26A69A', '#A5D6A7'],
  },
  {
    id: 'adultez',
    title: 'Adultez',
    icon: Briefcase,
    accent: '#42A5F5',
    description: 'Representa responsabilidad, estabilidad y confianza.',
    colors: ['#1565C0', '#42A5F5', '#BBDEFB'],
  },
  {
    id: 'vejez',
    title: 'Vejez',
    icon: Heart,
    accent: '#9575CD',
    description: 'Evoca sabiduría, experiencia y tranquilidad.',
    colors: ['#5E35B1', '#9575CD', '#D1C4E9'],
  },
];

export default function PaletaCiclosVidaPage() {
  return (
    <SectionTemplate
      title="Paleta Ciclos de Vida"
      description="Referencia de colores para diseños, recursos visuales y componentes relacionados con ciclos de vida."
      icon={Palette}
      breadcrumbs={[
        { label: 'Otras Referencias', href: '/otras-referencias' },
        { label: 'Paleta Ciclos de Vida' },
      ]}
    >
      <SectionBackground variant="default">
        <ArticleContainer maxWidth="wide">
          <div className="grid gap-6 md:grid-cols-2">
            {lifeCyclePalette.map((group) => {
              const Icon = group.icon;
              return (
                <Card
                  key={group.id}
                  id={group.id}
                  variant="elevated"
                  className="scroll-mt-24 border border-gray-100 dark:border-gray-700"
                >
                  <h2 className="mb-5 text-xl font-bold text-gray-900 dark:text-white">
                    {group.title}
                  </h2>
                  <div className="grid grid-cols-3 gap-3">
                    {group.colors.map((color) => (
                      <div key={color} className="min-w-0">
                        <div
                          className="h-20 rounded-2xl shadow-sm ring-1 ring-black/5 dark:ring-white/10"
                          style={{ backgroundColor: color }}
                          aria-label={`${group.title} ${color}`}
                        />
                        <div className="mt-2 flex items-center justify-center gap-1">
                          <span className="font-mono text-xs text-gray-500 dark:text-gray-400 sm:text-sm">
                            {color}
                          </span>
                          <CopyButton text={color} size="sm" />
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-5 flex items-center gap-3">
                    <span
                      className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full"
                      style={{ backgroundColor: `${group.accent}1A`, color: group.accent }}
                    >
                      <Icon className="h-5 w-5" />
                    </span>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {group.description}
                    </p>
                  </div>
                </Card>
              );
            })}
          </div>
        </ArticleContainer>
      </SectionBackground>
    </SectionTemplate>
  );
}
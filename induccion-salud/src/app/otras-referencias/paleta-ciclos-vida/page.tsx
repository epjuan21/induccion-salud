import { Palette } from 'lucide-react';
import { SectionTemplate } from '@/components/templates';
import { ArticleContainer, SectionBackground } from '@/components/layout';
import { Card } from '@/components/ui/Card';
import { CopyButton } from '@/components/ui/CopyButton';

const lifeCyclePalette = [
  {
    id: 'primera-infancia',
    title: 'Primera infancia',
    colors: ['#993556', '#D4537E', '#F4C0D1'],
  },
  {
    id: 'infancia',
    title: 'Infancia',
    colors: ['#854F0B', '#BA7517', '#FAC775'],
  },
  {
    id: 'adolescencia',
    title: 'Adolescencia',
    colors: ['#993C1D', '#D85A30', '#F5C4B3'],
  },
  {
    id: 'juventud',
    title: 'Juventud',
    colors: ['#0F6E56', '#1D9E75', '#9FE1CB'],
  },
  {
    id: 'adultez',
    title: 'Adultez',
    colors: ['#185FA6', '#378ADD', '#B5D4F4'],
  },
  {
    id: 'vejez',
    title: 'Vejez',
    colors: ['#534AB7', '#7F77DD', '#CECBF6'],
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
          <div className="grid gap-5 lg:grid-cols-2 xl:grid-cols-3">
            {lifeCyclePalette.map((group) => (
              <Card
                key={group.id}
                id={group.id}
                className="scroll-mt-24 bg-gray-950 text-white border-gray-800 dark:bg-gray-900"
              >
                <h2 className="text-xl font-bold text-white mb-4">
                  {group.title}
                </h2>
                <div className="grid grid-cols-3 gap-3">
                  {group.colors.map((color) => (
                    <div key={color} className="min-w-0">
                      <div
                        className="h-16 rounded-lg border border-white/10 shadow-sm"
                        style={{ backgroundColor: color }}
                        aria-label={`${group.title} ${color}`}
                      />
                      <div className="mt-2 flex items-center justify-between gap-1">
                        <span className="truncate font-mono text-xs text-gray-300 sm:text-sm">
                          {color}
                        </span>
                        <CopyButton
                          text={color}
                          size="sm"
                          className="text-gray-400 hover:bg-white/10 hover:text-white focus:ring-white/40"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </ArticleContainer>
      </SectionBackground>
    </SectionTemplate>
  );
}
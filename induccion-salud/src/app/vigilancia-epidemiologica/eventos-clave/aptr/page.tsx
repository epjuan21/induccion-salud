import { FileText, FolderOpen } from 'lucide-react';
import { SectionTemplate } from '@/components/templates';
import { ArticleContainer, SectionBackground } from '@/components/layout';
import { CompactCard } from '@/components/ui';

export default function AptrPage() {
  return (
    <SectionTemplate
      title="Accidentes por Animales Potencialmente Transmisores de Rabia (APTR)"
      description="Archivo de apoyo para la clasificación y gestión de casos APTR en vigilancia epidemiológica."
      icon={FileText}
      breadcrumbs={[
        { label: 'Vigilancia Epidemiológica', href: '/vigilancia-epidemiologica' },
        { label: 'Eventos Clave', href: '/vigilancia-epidemiologica/eventos-clave' },
        { label: 'APTR' },
      ]}
      previousPage={{
        title: 'Dengue',
        href: '/vigilancia-epidemiologica/eventos-clave/dengue',
      }}
    >
      <SectionBackground variant="default" spacing="normal">
        <ArticleContainer maxWidth="prose">
          <CompactCard variant="default">
            <div className="flex items-center gap-2 mb-4">
              <div className="p-2 bg-purple-100 dark:bg-purple-900/40 rounded-lg shrink-0">
                <FileText className="w-5 h-5 text-purple-600 dark:text-purple-400" />
              </div>
              <h2 className="font-semibold text-gray-900 dark:text-white text-base">
                Accidentes por Animales Potencialmente Transmisores de Rabia (APTR)
              </h2>
            </div>

            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-3">
              Para la clasificación y gestión de estos casos se utiliza un archivo de apoyo
              ubicado en el servidor institucional:
            </p>

            <div className="flex items-center gap-2 p-3 rounded-md bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800">
              <FolderOpen className="w-4 h-4 text-purple-500 shrink-0" />
              <div>
                <p className="text-xs font-mono text-purple-700 dark:text-purple-300">
                  \SIVIGILA\CLASIFICACIÓN APTR2.xlsm
                </p>
                <p className="text-xs text-purple-600 dark:text-purple-400 mt-0.5">
                  Archivo Excel con macros — Servidor Hospital
                </p>
              </div>
            </div>
          </CompactCard>
        </ArticleContainer>
      </SectionBackground>
    </SectionTemplate>
  );
}
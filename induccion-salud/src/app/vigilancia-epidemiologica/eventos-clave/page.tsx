import Link from 'next/link';
import { ArrowRight, FileText } from 'lucide-react';
import { SectionTemplate } from '@/components/templates';
import { ArticleContainer, SectionBackground } from '@/components/layout';
import { CompactCard } from '@/components/ui';

export default function EventosClavePage() {
  return (
    <SectionTemplate
      title="Eventos Clave"
      description="Eventos de vigilancia que requieren criterios específicos de clasificación, consulta y gestión."
      icon={FileText}
      breadcrumbs={[
        { label: 'Vigilancia Epidemiológica', href: '/vigilancia-epidemiologica' },
        { label: 'Eventos Clave' },
      ]}
      previousPage={{
        title: 'Conceptos Generales',
        href: '/vigilancia-epidemiologica/conceptos-generales',
      }}
      nextPage={{
        title: 'Dengue',
        href: '/vigilancia-epidemiologica/eventos-clave/dengue',
      }}
    >
      <SectionBackground variant="default" spacing="normal">
        <ArticleContainer maxWidth="prose">
          <div className="space-y-4">
            <CompactCard variant="default">
              <Link
                href="/vigilancia-epidemiologica/eventos-clave/dengue"
                className="group flex items-start gap-3"
              >
                <div className="p-2 bg-orange-100 dark:bg-orange-900/40 rounded-lg shrink-0">
                  <FileText className="w-5 h-5 text-orange-600 dark:text-orange-400" />
                </div>
                <div className="min-w-0 flex-1">
                  <h2 className="font-semibold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                    Dengue
                  </h2>
                  <p className="mt-1 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                    Revisa los criterios de clasificación de laboratorio para confirmar, descartar o mantener casos probables.
                  </p>
                </div>
                <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-primary-600 dark:group-hover:text-primary-400 group-hover:translate-x-1 transition-all shrink-0" />
              </Link>
            </CompactCard>

            <CompactCard variant="default">
              <Link
                href="/vigilancia-epidemiologica/eventos-clave/aptr"
                className="group flex items-start gap-3"
              >
                <div className="p-2 bg-purple-100 dark:bg-purple-900/40 rounded-lg shrink-0">
                  <FileText className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                </div>
                <div className="min-w-0 flex-1">
                  <h2 className="font-semibold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                    Accidentes por Animales Potencialmente Transmisores de Rabia (APTR)
                  </h2>
                  <p className="mt-1 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                    Consulta el archivo de apoyo institucional usado para la clasificación y gestión de casos APTR.
                  </p>
                </div>
                <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-primary-600 dark:group-hover:text-primary-400 group-hover:translate-x-1 transition-all shrink-0" />
              </Link>
            </CompactCard>
          </div>
        </ArticleContainer>
      </SectionBackground>
    </SectionTemplate>
  );
}

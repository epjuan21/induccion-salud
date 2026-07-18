import { FileText } from 'lucide-react';
import { SectionTemplate } from '@/components/templates';
import { ArticleContainer, SectionBackground } from '@/components/layout';
import { Alert, CompactCard } from '@/components/ui';

export default function DenguePage() {
  return (
    <SectionTemplate
      title="Dengue"
      description="Criterios de clasificación de laboratorio para casos de dengue en vigilancia epidemiológica."
      icon={FileText}
      breadcrumbs={[
        { label: 'Vigilancia Epidemiológica', href: '/vigilancia-epidemiologica' },
        { label: 'Eventos Clave', href: '/vigilancia-epidemiologica/eventos-clave' },
        { label: 'Dengue' },
      ]}
      previousPage={{
        title: 'Eventos Clave',
        href: '/vigilancia-epidemiologica/eventos-clave',
      }}
      nextPage={{
        title: 'APTR',
        href: '/vigilancia-epidemiologica/eventos-clave/aptr',
      }}
    >
      <SectionBackground variant="default" spacing="normal">
        <ArticleContainer maxWidth="prose">
          <CompactCard variant="default">
            <div className="flex items-center gap-2 mb-4">
              <div className="p-2 bg-orange-100 dark:bg-orange-900/40 rounded-lg shrink-0">
                <FileText className="w-5 h-5 text-orange-600 dark:text-orange-400" />
              </div>
              <h2 className="font-semibold text-gray-900 dark:text-white text-base">
                Dengue — Criterios de clasificación de laboratorio
              </h2>
            </div>

            <div className="space-y-3">
              <div className="flex items-start gap-3 p-3 rounded-md bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800">
                <span className="text-green-600 dark:text-green-400 font-bold shrink-0 mt-0.5">✓</span>
                <div>
                  <p className="text-sm font-semibold text-green-800 dark:text-green-300">Caso confirmado</p>
                  <p className="text-sm text-green-700 dark:text-green-400 leading-relaxed">
                    Prueba ELISA confirmatoria <strong>positiva</strong> o prueba rápida <strong>positiva</strong>.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 rounded-md bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800">
                <span className="text-red-600 dark:text-red-400 font-bold shrink-0 mt-0.5">✗</span>
                <div>
                  <p className="text-sm font-semibold text-red-800 dark:text-red-300">Caso descartado</p>
                  <p className="text-sm text-red-700 dark:text-red-400 leading-relaxed">
                    Únicamente con prueba ELISA <strong>negativa</strong>.
                  </p>
                </div>
              </div>

              <Alert variant="warning" title="Prueba rápida negativa — no descarta">
                Si la prueba rápida es <strong>negativa</strong>, el caso <strong>no se descarta</strong>.
                Debe mantenerse como <strong>caso probable</strong> hasta obtener una prueba ELISA confirmatoria.
              </Alert>
            </div>
          </CompactCard>
        </ArticleContainer>
      </SectionBackground>
    </SectionTemplate>
  );
}
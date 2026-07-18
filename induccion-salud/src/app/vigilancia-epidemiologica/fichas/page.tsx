import { FileText } from 'lucide-react';
import { SectionTemplate } from '@/components/templates';
import { ArticleContainer, SectionBackground } from '@/components/layout';
import { Alert } from '@/components/ui';
import { fichasVigilancia } from '@/data/fichas-vigilancia';
import { FichasBrowser } from './FichasBrowser';

export default function FichasPage() {
  return (
    <SectionTemplate
      title="Fichas"
      description="Listado de fichas de notificación de vigilancia epidemiológica. Cada ficha abre el archivo oficial en la carpeta compartida de Google Drive."
      icon={FileText}
      breadcrumbs={[
        { label: 'Vigilancia Epidemiológica', href: '/vigilancia-epidemiologica' },
        { label: 'Fichas' },
      ]}
      previousPage={{
        title: 'Eventos Clave',
        href: '/vigilancia-epidemiologica/eventos-clave',
      }}
    >
      <SectionBackground variant="default" spacing="normal">
        <ArticleContainer maxWidth="prose">
          <Alert variant="info" title="Archivos en Google Drive" className="mb-6">
            Las fichas se encuentran en la carpeta compartida institucional. Usa el
            buscador para filtrar por nombre del evento o por su código INS.
          </Alert>

          <FichasBrowser fichas={fichasVigilancia} />
        </ArticleContainer>
      </SectionBackground>
    </SectionTemplate>
  );
}

import { ClipboardCheck } from 'lucide-react';
import { SectionTemplate } from '@/components/templates';
import { ArticleContainer, SectionBackground } from '@/components/layout';
import { DocumentGrid, type DocumentItem } from '@/components/ui';

const documentos: DocumentItem[] = [
  {
    title: 'Protocolo Institucional Manejo Integral de Diabetes Mellitus Tipo 2',
    href: 'https://drive.google.com/file/d/1MHJ_0YkcU8mzRIfJYzbfl4FOqQyV0zJm/view?usp=drive_link',
    cover: '/images/documentacion/protocolos-saviasalud/ProtocoloInstitucionalManejoIntegralDeDiabetesMellitusTipo2.png',
  },
];

export default function ProtocolosSaviasaludPage() {
  return (
    <SectionTemplate
      title="Protocolos Saviasalud"
      description="Protocolos clínicos definidos por Savia Salud EPS."
      icon={ClipboardCheck}
      breadcrumbs={[
        { label: 'Documentación', href: '/documentacion' },
        { label: 'Protocolos Saviasalud' },
      ]}
      previousPage={{
        title: 'Rutas Saviasalud',
        href: '/documentacion/rutas-saviasalud',
      }}
      nextPage={{
        title: 'Guías Sura',
        href: '/documentacion/guias-sura',
      }}
    >
      <SectionBackground variant="default">
        <ArticleContainer maxWidth="wide">
          <DocumentGrid documents={documentos} />
        </ArticleContainer>
      </SectionBackground>
    </SectionTemplate>
  );
}

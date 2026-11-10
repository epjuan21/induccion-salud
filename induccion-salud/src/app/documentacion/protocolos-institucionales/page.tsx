import { ClipboardList } from 'lucide-react';
import { SectionTemplate } from '@/components/templates';
import { ArticleContainer, SectionBackground } from '@/components/layout';
import { DocumentGrid, type DocumentItem } from '@/components/ui';

const documentos: DocumentItem[] = [
  {
    title: 'Protocolo Institucional Enfermedad Cerebro Vascular',
    href: 'https://drive.google.com/file/d/1W51j1_tt2zfiNijSrLYHd6jZptrhWp5T/view?usp=drive_link',
    cover: '/images/documentacion/protocolos-institucionales/ProtocoloInstitucinoalEnfermedadCerebroVascular.png',
  },
  {
    title: 'Protocolo Institucional Diagnóstico Muerte Encefálica',
    href: 'https://drive.google.com/file/d/1V-wIOzR1FZt_DuZRmMyYRvUYXAwhmwCm/view?usp=drive_link',
    cover: '/images/documentacion/protocolos-institucionales/ProtocoloInstitucionalDiagnosticoMuerteEncefalica.png',
  },
  {
    title: 'Protocolo Institucional Episiotomía, Episiorrafia y Corrección de Desgarros Perineales',
    href: 'https://drive.google.com/file/d/1k0q7Q5BtcTXTyTyC6rxug8uY9Va3GBeU/view?usp=drive_link',
    cover: '/images/documentacion/protocolos-institucionales/ProtocoloInstitucionalEpisiotomiaEpisorrafiaYCorreccionDeDesgarrosPerineales.png',
  },
];

export default function ProtocolosInstitucionalesPage() {
  return (
    <SectionTemplate
      title="Protocolos Institucionales"
      description="Protocolos clínicos propios de la institución."
      icon={ClipboardList}
      breadcrumbs={[
        { label: 'Documentación', href: '/documentacion' },
        { label: 'Protocolos Institucionales' },
      ]}
      previousPage={{
        title: 'Guías Sura',
        href: '/documentacion/guias-sura',
      }}
      nextPage={{
        title: 'SSSA',
        href: '/documentacion/sssa',
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

import { FileText } from 'lucide-react';
import { SectionTemplate } from '@/components/templates';
import { ArticleContainer, SectionBackground } from '@/components/layout';
import { DocumentGrid, type DocumentItem } from '@/components/ui';

const documentos: DocumentItem[] = [
  {
    title: 'Atención del cuidado preconcepcional — Identificación del riesgo',
    href: 'https://drive.google.com/file/d/14AyZzrsbhPnDI5ABThz9qUts8bkZa9_3/view?usp=drive_link',
    cover: '/images/documentacion/guias-saviasalud/AtencionDelCuidadoPreconcepcionalIdentificacionDelRiesgo.png',
  },
  {
    title: 'Guía para el manejo de la hipertensión arterial',
    href: 'https://drive.google.com/file/d/1S3aTBo3h3_CgiDDSSleZHyPiD--IvcCa/view?usp=drive_link',
    cover: '/images/documentacion/guias-saviasalud/GuiaParaElManejoDeLaHipertensiónArterial.png',
  },
  {
    title: 'Guía sobre el manejo de EPOC',
    href: 'https://drive.google.com/file/d/1TjNzO3lkpvrchTyRn52xB9FmIYCshD2t/view?usp=drive_link',
    cover: '/images/documentacion/guias-saviasalud/GuiaSobreElManejoDeEPOC.png',
  },
];

export default function GuiasSaviasaludPage() {
  return (
    <SectionTemplate
      title="Guías Saviasalud"
      description="Guías de práctica clínica y manejo definidas por Savia Salud EPS."
      icon={FileText}
      breadcrumbs={[
        { label: 'Documentación', href: '/documentacion' },
        { label: 'Guías Saviasalud' },
      ]}
      nextPage={{
        title: 'Rutas Saviasalud',
        href: '/documentacion/rutas-saviasalud',
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

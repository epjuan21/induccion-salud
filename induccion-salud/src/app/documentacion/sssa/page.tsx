import { Landmark } from 'lucide-react';
import { SectionTemplate } from '@/components/templates';
import { ArticleContainer, SectionBackground } from '@/components/layout';
import { DocumentGrid, type DocumentItem } from '@/components/ui';

const documentos: DocumentItem[] = [
  {
    title: 'Código Fucsia',
    type: 'pptx',
    href: 'https://docs.google.com/presentation/d/15eaeh9X1uBfNYIPadmBIfDydkgjSFX4D/edit?usp=sharing&ouid=113703453282834833524&rtpof=true&sd=true',
    cover: '/images/documentacion/sssa/CodigoFucsia.png',
  },
  {
    title: 'Ruta Integral de Atención en Salud Materno Perinatal',
    type: 'pptx',
    href: 'https://docs.google.com/presentation/d/1COlIsYyCEo_75dui351O89LWG2a561CS/edit?usp=drive_link&ouid=113703453282834833524&rtpof=true&sd=true',
    cover: '/images/documentacion/sssa/RutaIntegralDeAtencionEnSaludMaternoPerinatal.png',
  },
  {
    title: 'Rutas Salud Sexual y Reproductiva',
    type: 'pptx',
    href: 'https://docs.google.com/presentation/d/15_Tzw_LvVmfxCQzdwXM2IV5g5id3rTET/edit?usp=sharing&ouid=113703453282834833524&rtpof=true&sd=true',
    cover: '/images/documentacion/sssa/RutasSaludSexualYReproductiva.png',
  },
];

export default function SssaPage() {
  return (
    <SectionTemplate
      title="SSSA"
      description="Documentos de la Secretaría Seccional de Salud de Antioquia."
      icon={Landmark}
      breadcrumbs={[
        { label: 'Documentación', href: '/documentacion' },
        { label: 'SSSA' },
      ]}
      previousPage={{
        title: 'Protocolos Institucionales',
        href: '/documentacion/protocolos-institucionales',
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

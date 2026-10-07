import { Route } from 'lucide-react';
import { SectionTemplate } from '@/components/templates';
import { ArticleContainer, SectionBackground } from '@/components/layout';
import { DocumentGrid, type DocumentItem } from '@/components/ui';

const documentos: DocumentItem[] = [
  {
    title: 'Ruta Muy Alto Riesgo Obstétrico',
    href: 'https://drive.google.com/file/d/1_n37g_1E0g4YtF3kkqF31fPuikB_TWau/view?usp=drive_link',
    cover: '/images/documentacion/rutas-saviasalud/RutaMuyAltoRiesgoObstetrico.png',
  },
  {
    title: 'Ruta VIH',
    href: 'https://drive.google.com/file/d/1vzAKluhttwZtw3KHKXcV0ml0G-RnmDHM/view?usp=drive_link',
    cover: '/images/documentacion/rutas-saviasalud/RutaVIH.png',
  },
];

export default function RutasSaviasaludPage() {
  return (
    <SectionTemplate
      title="Rutas Saviasalud"
      description="Rutas integrales de atención en salud de Savia Salud EPS."
      icon={Route}
      breadcrumbs={[
        { label: 'Documentación', href: '/documentacion' },
        { label: 'Rutas Saviasalud' },
      ]}
      previousPage={{
        title: 'Guías Saviasalud',
        href: '/documentacion/guias-saviasalud',
      }}
      nextPage={{
        title: 'Protocolos Saviasalud',
        href: '/documentacion/protocolos-saviasalud',
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

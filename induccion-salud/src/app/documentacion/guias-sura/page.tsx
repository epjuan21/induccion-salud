import { ShieldPlus } from 'lucide-react';
import { SectionTemplate } from '@/components/templates';
import { ArticleContainer, SectionBackground } from '@/components/layout';
import { DocumentGrid, type DocumentItem } from '@/components/ui';

const documentos: DocumentItem[] = [
  {
    title: 'Estudio de ERC en paciente con diagnóstico confirmado de HTA y/o DM',
    href: 'https://drive.google.com/open?id=1IMkkuNq2m4t8xqIOt0kIFUdJ1i3DEzf3&usp=drive_copy',
    cover: '/images/documentacion/guias-sura/EstudioDeERCEnPacienteConDiagnosticoConfirmadoDeHTAyDM.png',
  },
  {
    title: 'Guía de abordaje de pacientes con trastornos del colesterol — Dislipidemia e hipertrigliceridemia',
    href: 'https://drive.google.com/file/d/1jwQ3zXz_bsknc1nxP9UDWsSpr5RBFmf7/view?usp=drive_link',
    cover: '/images/documentacion/guias-sura/GuiaDeAbordajeDePacientesConTrastornosDelColesterolDislipidemiaEHipertrigliceridemia.png',
  },
  {
    title: 'Guía de abordaje Enfermedad Renal Crónica en el Adulto',
    href: 'https://drive.google.com/file/d/1NrwCRTIZGT7eu7Pkwa5qJOpInOQwstBm/view?usp=drive_link',
    cover: '/images/documentacion/guias-sura/GuiaDeAbordajeEnfermedadRenalCronicaEnElAdulto.png',
  },
  {
    title: 'Guía de abordaje hipertensión arterial en adultos',
    href: 'https://drive.google.com/file/d/1tH1M6nRLlSmDTe_QGIXmvAAs6USqeto4/view?usp=drive_link',
    cover: '/images/documentacion/guias-sura/GuiaDeAbordajeHipertensionArterialEnAdultos.png',
  },
  {
    title: 'Guía RIAS — Curso de Vida Primera Infancia (8 días - 5 años)',
    href: 'https://drive.google.com/file/d/1ialzmaaEKkH8e3IE8EWSN4T2q6ecYuZZ/view?usp=drive_link',
    cover: '/images/documentacion/guias-sura/GuiaRIASCursoDeVidaPrimeraInfancia.png',
  },
  {
    title: 'Guía RIAS — Curso de Vida Infancia (6-11 años)',
    href: 'https://drive.google.com/file/d/1vd99wNTSj8ZnIMO5tSxynXWeWCzQ6YEn/view?usp=drive_link',
    cover: '/images/documentacion/guias-sura/GuiaRIASCursoDeVidaInfancia.png',
  },
  {
    title: 'Guía RIAS — Curso de Vida Adolescencia (12-17 años)',
    href: 'https://drive.google.com/file/d/1Q_cb9P9GdOuEgJfnebQA5rKnOK14dxhS/view?usp=drive_link',
    cover: '/images/documentacion/guias-sura/GuiaRIASCursoDeVidaAdolescencia.png',
  },
  {
    title: 'Guía RIAS — Curso de Vida Juventud (18-28 años)',
    href: 'https://drive.google.com/file/d/1WUknojJmuNkep0yCxnXNINW57gKS7JZ7/view?usp=drive_link',
    cover: '/images/documentacion/guias-sura/GuiaRIASCursoDeVidaJuventud.png',
  },
  {
    title: 'Guía RIAS — Curso de Vida Adultez (29-59 años)',
    href: 'https://drive.google.com/file/d/1NI5JHj02yLm41HRiFZXmzLxBFsRsjFKn/view?usp=drive_link',
    cover: '/images/documentacion/guias-sura/GuiaRIASCursoDeVidaAdultez.png',
  },
  {
    title: 'Guía RIAS — Curso de Vida Vejez (mayor de 60 años)',
    href: 'https://drive.google.com/file/d/1Hs0xdK5Pia2W3bolv4SVbTqgRUORyTcM/view?usp=drive_link',
    cover: '/images/documentacion/guias-sura/GuiaRIASCursoDeVidaVejez.png',
  },
];

export default function GuiasSuraPage() {
  return (
    <SectionTemplate
      title="Guías Sura"
      description="Guías de abordaje y seguimiento definidas por EPS SURA."
      icon={ShieldPlus}
      breadcrumbs={[
        { label: 'Documentación', href: '/documentacion' },
        { label: 'Guías Sura' },
      ]}
      previousPage={{
        title: 'Protocolos Saviasalud',
        href: '/documentacion/protocolos-saviasalud',
      }}
      nextPage={{
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

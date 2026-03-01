import { Syringe, Hash, ShieldCheck } from 'lucide-react';
import { SectionTemplate } from '@/components/templates';
import { ArticleContainer, SectionBackground } from '@/components/layout';
import { Alert, Accordion, CopyButton, Badge, SectionDivider, CompactCard } from '@/components/ui';

const vacunasBacterianas = [
  {
    cups: '*993102',
    descripcion: 'VACUNACION CONTRA TUBERCULOSIS BCG',
    cie10: 'Z232',
    descripcionCie10: 'Necesidad de inmunización contra la tuberculosis [BCG]',
  },
  {
    cups: '*993102-4',
    descripcion: 'VACUNACION CONTRA TUBERCULOSIS BCG - RECIEN NACIDO',
    cie10: 'Z232',
    descripcionCie10: 'Necesidad de inmunización contra la tuberculosis [BCG]',
    recienNacido: true,
  },
  {
    cups: '*993104-1',
    descripcion: 'VACUNACION CONTRA Haemophilus influenza tipo b',
    cie10: 'Z251',
    descripcionCie10: 'Necesidad de inmunización contra la influenza [gripe]',
  },
  {
    cups: '*993106-1',
    descripcion: 'VACUNACION CONTRA NEUMOCOCO',
    cie10: 'Z238',
    descripcionCie10: 'Necesidad de inmunización solo contra otra enfermedad bacteriana',
  },
];

const vacunasCombinadas = [
  {
    cups: '*993120',
    descripcion: 'VACUNACION COMBINADA CONTRA TETANOS Y DIFTERIA (TD)',
    cie10: 'Z278',
    descripcionCie10: 'Necesidad de inmunización contra otras combinaciones de enfermedades infecciosas',
  },
  {
    cups: '*993120-8',
    descripcion: 'VACUNACION COMBINADA CONTRA TETANOS Y DIFTERIA Td',
    cie10: 'Z278',
    descripcionCie10: 'Necesidad de inmunización contra otras combinaciones de enfermedades infecciosas',
  },
  {
    cups: '*993122',
    descripcion: 'VACUNACION COMBINADA DPT CONTRA DIFTERIA TETANOS Y TOSFERINA',
    cie10: 'Z271',
    descripcionCie10: 'Necesidad de inmunización contra difteria-pertussis-tétanos combinados [DPT]',
  },
  {
    cups: '*993130-1',
    descripcion: 'VACUNACION PENTAVALENTE',
    cie10: 'Z278',
    descripcionCie10: 'Necesidad de inmunización contra otras combinaciones de enfermedades infecciosas',
  },
  {
    cups: '*993520',
    descripcion: 'VACUNACION COMBINADA CONTRA SARAMPION Y RUBEOLA SR DOBLE VIR',
    cie10: 'Z274',
    descripcionCie10: 'Necesidad de inmunización contra sarampión-parotiditis-rubéola [SPR] [MMR]',
  },
  {
    cups: '*993522',
    descripcion: 'VACUNACION COMBINADA CONTRA SARAMPION PAROTIDITIS Y RUBEOLA',
    cie10: 'Z274',
    descripcionCie10: 'Necesidad de inmunización contra sarampión-parotiditis-rubéola [SPR] [MMR]',
  },
  {
    cups: '*993522-1',
    descripcion: 'VACUNACION SRP TRIPLE VIRAL',
    cie10: 'Z274',
    descripcionCie10: 'Necesidad de inmunización contra sarampión-parotiditis-rubéola [SPR] [MMR]',
  },
  {
    cups: '*995201',
    descripcion: 'VACUNACION DPaT ACELULAR GESTANTES',
    cie10: 'Z271',
    descripcionCie10: 'Necesidad de inmunización contra difteria-pertussis-tétanos combinados [DPT]',
  },
];

const vacunasVirales = [
  {
    cups: '*993501',
    descripcion: 'VACUNACION CONTRA POLIOMIELITIS VOP O IVP',
    cie10: 'Z240',
    descripcionCie10: 'Necesidad de inmunización contra la poliomielitis',
  },
  {
    cups: '*993502-1',
    descripcion: 'VACUNACION CONTRA Hepatitis A',
    cie10: 'Z246',
    descripcionCie10: 'Necesidad de inmunización contra la hepatitis viral',
  },
  {
    cups: '*993503-1',
    descripcion: 'VACUNACION CONTRA Hepatitis B',
    cie10: 'Z246',
    descripcionCie10: 'Necesidad de inmunización contra la hepatitis viral',
  },
  {
    cups: '*993503-4',
    descripcion: 'VACUNACION CONTRA Hepatitis B - RECIEN NACIDO',
    cie10: 'Z246',
    descripcionCie10: 'Necesidad de inmunización contra la hepatitis viral',
    recienNacido: true,
  },
  {
    cups: '*993504-1',
    descripcion: 'VACUNACION CONTRA FIEBRE AMARILLA',
    cie10: 'Z243',
    descripcionCie10: 'Necesidad de inmunización contra la fiebre amarilla',
  },
  {
    cups: '*993505',
    descripcion: 'VACUNACION CONTRA RABIA',
    cie10: 'Z242',
    descripcionCie10: 'Necesidad de inmunización contra la rabia',
  },
  {
    cups: '*993506-1',
    descripcion: 'VACUNACION CONTRA SARAMPION',
    cie10: 'Z244',
    descripcionCie10: 'Necesidad de inmunización solo contra el sarampión',
  },
  {
    cups: '*993509-1',
    descripcion: 'VACUNACION CONTRA VARICELA',
    cie10: 'Z258',
    descripcionCie10: 'Necesidad de inmunización contra otras enfermedades virales únicas especificadas',
  },
  {
    cups: '*993510-1',
    descripcion: 'VACUNACION CONTRA INFLUENZA',
    cie10: 'Z251',
    descripcionCie10: 'Necesidad de inmunización contra la influenza [gripe]',
  },
  {
    cups: '*993512-1',
    descripcion: 'VACUNACION CONTRA ROTAVIRUS',
    cie10: 'Z258',
    descripcionCie10: 'Necesidad de inmunización contra otras enfermedades virales únicas especificadas',
  },
  {
    cups: '*993513',
    descripcion: 'VACUNACION CONTRA VIRUS PAPILOMA HUMANO VPH',
    cie10: 'Z258',
    descripcionCie10: 'Necesidad de inmunización contra otras enfermedades virales únicas especificadas',
  },
  {
    cups: '*995202',
    descripcion: 'VACUNACION CONTRA SARS CoV 2 COVID-19',
    cie10: 'U119',
    descripcionCie10: 'Necesidad de inmunización contra COVID-19, no especificada',
  },
  {
    cups: '*906329-1',
    descripcion: 'VACUNACION VIRUS SINCITIAL RESPIRATORIO',
    cie10: 'Z258',
    descripcionCie10: 'Necesidad de inmunización contra otras enfermedades virales únicas especificadas',
  },
];

const faqItems = [
  {
    id: 'vac-1',
    title: '¿Qué finalidad y causa externa se utilizan para facturación de vacunas?',
    content: (
      <div>
        <p className="mb-2">Para todos los códigos de vacunación se usa:</p>
        <ul className="list-disc list-inside space-y-1">
          <li>
            <strong>Finalidad: 14</strong> - Protección Específica
          </li>
          <li>
            <strong>Causa Externa: 40</strong> - Promoción y Mantenimiento de la Salud
          </li>
        </ul>
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
          Estos parámetros aplican uniformemente para todas las vacunas del PAI
          (Programa Ampliado de Inmunizaciones).
        </p>
      </div>
    ),
  },
  {
    id: 'vac-2',
    title: '¿Cuál es la diferencia entre los códigos para recién nacidos y otros grupos etarios?',
    content: (
      <p>
        Los códigos con sufijo <strong>-4</strong> (como *993102-4 y *993503-4) están
        específicamente diseñados para aplicación en recién nacidos dentro de las primeras
        horas o días de vida. Por ejemplo, BCG y Hepatitis B tienen códigos específicos
        para recién nacidos que deben usarse en lugar de los códigos generales cuando
        se aplican inmediatamente después del nacimiento.
      </p>
    ),
  },
  {
    id: 'vac-3',
    title: '¿Qué documentación se requiere para facturar vacunación?',
    content: (
      <div>
        <p className="mb-2">Para facturar correctamente los biológicos debes tener:</p>
        <ul className="list-disc list-inside space-y-1">
          <li><strong>Registro en carné de vacunación</strong> con fecha, lote y datos del biológico</li>
          <li><strong>Consentimiento informado</strong> firmado por el paciente o acudiente</li>
          <li><strong>Registro en historia clínica</strong> del biológico aplicado</li>
          <li><strong>Esquema de vacunación completo</strong> documentado</li>
          <li><strong>Evento Adverso Seguimiento a la Vacunación (ESAVI)</strong> si aplica</li>
        </ul>
      </div>
    ),
  },
  {
    id: 'vac-4',
    title: '¿Cuándo usar vacunas combinadas vs vacunas individuales?',
    content: (
      <p>
        Las vacunas combinadas (como Pentavalente, DPT, Triple Viral) protegen contra
        múltiples enfermedades con una sola aplicación. Debes facturar el código de la
        vacuna combinada específica aplicada, <strong>NO factures cada componente por separado</strong>.
        Por ejemplo, si aplicas Triple Viral (*993522-1), no facturas sarampión, rubéola y
        parotiditis por separado.
      </p>
    ),
  },
  {
    id: 'vac-5',
    title: '¿Qué hacer si se aplica una vacuna fuera del esquema regular del PAI?',
    content: (
      <div>
        <p className="mb-2">
          Algunas vacunas pueden aplicarse fuera del esquema regular por situaciones especiales:
        </p>
        <ul className="list-disc list-inside space-y-1">
          <li><strong>Fiebre Amarilla</strong>: Requerida para viajes a zonas endémicas</li>
          <li><strong>Rabia</strong>: Profilaxis post-exposición o pre-exposición de riesgo</li>
          <li><strong>Influenza</strong>: Campaña estacional anual</li>
          <li><strong>COVID-19</strong>: Según lineamientos vigentes de vacunación</li>
        </ul>
        <p className="mt-2">
          En estos casos, documenta claramente la indicación médica o justificación para
          la aplicación del biológico.
        </p>
      </div>
    ),
  },
];

interface Vacuna {
  cups: string;
  descripcion: string;
  cie10: string;
  descripcionCie10: string;
  recienNacido?: boolean;
}

function TablaVacunas({ datos }: { datos: Vacuna[] }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead className="border-b-2 border-gray-300 dark:border-gray-700">
          <tr>
            <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 dark:text-white">
              CUPS
            </th>
            <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 dark:text-white">
              Descripción
            </th>
            <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 dark:text-white">
              CIE-10
            </th>
            <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 dark:text-white">
              Descripción CIE-10
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 dark:divide-gray-800">
          {datos.map((vacuna, index) => (
            <tr key={index} className="hover:bg-gray-50 dark:hover:bg-gray-900/50 transition-colors">
              <td className="px-4 py-3">
                <div className="flex items-center gap-2">
                  <code className="font-mono text-sm font-semibold text-primary-600 dark:text-primary-400">
                    {vacuna.cups}
                  </code>
                  <CopyButton text={vacuna.cups} size="sm" />
                </div>
                {vacuna.recienNacido && (
                  <Badge variant="orange" size="sm" className="mt-1">RN</Badge>
                )}
              </td>
              <td className="px-4 py-3 text-sm text-gray-700 dark:text-gray-300">
                {vacuna.descripcion}
              </td>
              <td className="px-4 py-3">
                <div className="flex items-center gap-2">
                  <code className="font-mono text-sm font-semibold text-primary-600 dark:text-primary-400">
                    {vacuna.cie10}
                  </code>
                  <CopyButton text={vacuna.cie10} size="sm" />
                </div>
              </td>
              <td className="px-4 py-3 text-sm text-gray-700 dark:text-gray-300">
                {vacuna.descripcionCie10}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function VacunacionPage() {
  return (
    <SectionTemplate
      title="Vacunación"
      description="Facturación de biológicos y servicios del Programa Ampliado de Inmunizaciones (PAI)."
      icon={Syringe}
      breadcrumbs={[
        { label: 'Facturación P&P', href: '/facturacion-pyp' },
        { label: 'Vacunación' },
      ]}
      previousPage={{
        title: 'Ciclos de Vida',
        href: '/facturacion-pyp/ciclos-vida',
      }}
      nextPage={{
        title: 'Higiene Oral',
        href: '/facturacion-pyp/higiene-oral',
      }}
    >
      {/* Introducción */}
      <SectionBackground variant="default" spacing="normal">
        <ArticleContainer maxWidth="prose">
          <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
            El Programa Ampliado de Inmunizaciones (PAI) es una de las estrategias más
            costo-efectivas en salud pública. La correcta facturación de los biológicos
            garantiza el sostenimiento del programa y el acceso universal a vacunas
            que previenen enfermedades inmunoprevenibles.
          </p>

          <Alert variant="info" title="Programa Ampliado de Inmunizaciones">
            El PAI en Colombia incluye vacunas gratuitas y obligatorias para todos los niños,
            niñas y poblaciones especiales. Su correcta aplicación y facturación es
            responsabilidad de todos los actores del sistema de salud.
          </Alert>
        </ArticleContainer>
      </SectionBackground>

      {/* Parámetros de Facturación */}
      <SectionBackground variant="muted" spacing="large">
        <ArticleContainer maxWidth="prose">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Parámetros de Facturación
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
            Estos parámetros aplican uniformemente para todas las vacunas del PAI.
          </p>

          <div className="space-y-3">
            <CompactCard variant="highlighted">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-orange-100 dark:bg-orange-900/40 rounded-lg shrink-0">
                  <Hash className="w-5 h-5 text-orange-600 dark:text-orange-400" />
                </div>
                <div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Finalidad:</span>
                    <span className="text-lg font-bold text-orange-600 dark:text-orange-400">14</span>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-0.5">
                    Protección Específica
                  </p>
                </div>
              </div>
            </CompactCard>

            <CompactCard variant="highlighted">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-green-100 dark:bg-green-900/40 rounded-lg shrink-0">
                  <ShieldCheck className="w-5 h-5 text-green-600 dark:text-green-400" />
                </div>
                <div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Causa Externa:</span>
                    <span className="text-lg font-bold text-green-600 dark:text-green-400">40</span>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-0.5">
                    Promoción y Mantenimiento de la Salud
                  </p>
                </div>
              </div>
            </CompactCard>
          </div>
        </ArticleContainer>
      </SectionBackground>

      {/* Separador */}
      <SectionDivider variant="decorative" icon={Syringe} />

      {/* 1. Vacunas Bacterianas */}
      <SectionBackground variant="default" spacing="large">
        <ArticleContainer maxWidth="wide">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
            1. Vacunas contra Enfermedades Bacterianas
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-2 leading-relaxed">
            Tipo: <Badge variant="blue" size="sm">Protección Específica</Badge>
          </p>
          <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
            BCG, Neumococo y Haemophilus influenzae tipo b. Incluye códigos específicos
            para recién nacidos.
          </p>

          <TablaVacunas datos={vacunasBacterianas} />

          <Alert variant="warning" title="Recién nacidos" className="mt-6">
            <p className="text-sm">
              Los códigos con sufijo <strong>-4</strong> (como *993102-4) son específicos para
              recién nacidos. Usa estos códigos cuando la vacuna se aplica en las primeras horas
              o días de vida, no el código general.
            </p>
          </Alert>
        </ArticleContainer>
      </SectionBackground>

      {/* 2. Vacunas Virales */}
      <SectionBackground variant="muted" spacing="large">
        <ArticleContainer maxWidth="wide">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
            2. Vacunas contra Enfermedades Virales
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-2 leading-relaxed">
            Tipo: <Badge variant="purple" size="sm">Protección Específica</Badge>
          </p>
          <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
            Polio, Hepatitis A y B, Fiebre Amarilla, Rabia, Sarampión, Varicela,
            Influenza, Rotavirus, VPH, COVID-19 y Virus Sincitial Respiratorio.
          </p>

          <TablaVacunas datos={vacunasVirales} />
        </ArticleContainer>
      </SectionBackground>

      {/* 3. Vacunas Combinadas */}
      <SectionBackground variant="default" spacing="large">
        <ArticleContainer maxWidth="wide">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
            3. Vacunas Combinadas
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-2 leading-relaxed">
            Tipo: <Badge variant="green" size="sm">Protección Específica</Badge>
          </p>
          <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
            DPT, Td, Pentavalente, Triple Viral, Doble Viral y DPaT acelular para gestantes.
            Protegen contra múltiples enfermedades con una sola aplicación.
          </p>

          <TablaVacunas datos={vacunasCombinadas} />

          <Alert variant="tip" title="Vacunas combinadas" className="mt-6">
            <p className="text-sm">
              Factura el código de la vacuna combinada aplicada. <strong>NO factures cada
              componente por separado</strong>. Por ejemplo, si aplicas Triple Viral (*993522-1),
              no facturas sarampión, rubéola y parotiditis individualmente.
            </p>
          </Alert>
        </ArticleContainer>
      </SectionBackground>

      {/* Separador */}
      <SectionDivider variant="decorative" icon={ShieldCheck} />

      {/* Causales de glosa */}
      <SectionBackground variant="muted" spacing="large">
        <ArticleContainer maxWidth="prose">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Causales Frecuentes de Glosa
          </h2>
          <Alert variant="danger" title="Evita estas situaciones">
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>Facturar vacuna sin registro completo en carné de vacunación</li>
              <li>No documentar lote, fecha de vencimiento y laboratorio del biológico</li>
              <li>Aplicar dosis fuera del esquema establecido sin justificación</li>
              <li>No registrar consentimiento informado del paciente o acudiente</li>
              <li>Facturar componentes individuales de vacunas combinadas</li>
              <li>Usar código general cuando existe código específico para recién nacidos</li>
              <li>No documentar ESAVI (Eventos Supuestamente Atribuibles a Vacunación o Inmunización)</li>
              <li>Facturar con finalidad o causa externa incorrecta</li>
            </ul>
          </Alert>
        </ArticleContainer>
      </SectionBackground>

      {/* Documentación requerida */}
      <SectionBackground variant="default" spacing="large">
        <ArticleContainer maxWidth="prose">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Documentación Requerida
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
            Para facturar correctamente los servicios de vacunación, asegúrate de tener:
          </p>

          <div className="space-y-3">
            {[
              { label: 'Carné de vacunación', detail: 'con registro completo del biológico aplicado' },
              { label: 'Historia clínica', detail: 'con indicación médica si aplica' },
              { label: 'Consentimiento informado', detail: 'firmado por el paciente o acudiente' },
              { label: 'Registro de lote y fecha de vencimiento', detail: 'del biológico aplicado' },
              { label: 'Cadena de frío', detail: 'documentada y verificada' },
              { label: 'Esquema de vacunación', detail: 'completo del paciente' },
              { label: 'Reporte de ESAVI', detail: 'si se presentó evento adverso' },
            ].map((item, index) => (
              <CompactCard key={index} variant="default">
                <p className="text-sm">
                  <strong className="text-gray-900 dark:text-white">{item.label}</strong>
                  <span className="text-gray-600 dark:text-gray-400"> — {item.detail}</span>
                </p>
              </CompactCard>
            ))}
          </div>

          <Alert variant="tip" title="Buena práctica" className="mt-6">
            Mantén actualizado el esquema de vacunación en la historia clínica electrónica
            y verifica siempre las contraindicaciones antes de aplicar cualquier biológico.
            Esto no solo evita glosas, sino que protege la seguridad del paciente.
          </Alert>
        </ArticleContainer>
      </SectionBackground>

      {/* Preguntas Frecuentes */}
      <SectionBackground variant="muted" spacing="large">
        <ArticleContainer maxWidth="prose">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Preguntas Frecuentes
          </h2>
          <Accordion items={faqItems} />
        </ArticleContainer>
      </SectionBackground>
    </SectionTemplate>
  );
}

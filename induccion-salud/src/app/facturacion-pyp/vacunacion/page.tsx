import { Syringe } from 'lucide-react';
import { SectionTemplate } from '@/components/templates';
import { ContentBlock } from '@/components/content';
import { Alert, Accordion } from '@/components/ui';

const vacunas = [
  {
    cups: '*993102',
    descripcion: 'VACUNACION CONTRA TUBERCULOSIS BCG',
    cie10: 'Z232',
    descripcionCie10: 'NECESIDAD DE INMUNIZACION CONTRA LA TUBERCULOSIS [BCG]',
  },
  {
    cups: '*993102-4',
    descripcion: 'VACUNACION CONTRA TUBERCULOSIS BCG - RECIEN NACIDO',
    cie10: 'Z232',
    descripcionCie10: 'NECESIDAD DE INMUNIZACION CONTRA LA TUBERCULOSIS [BCG]',
  },
  {
    cups: '*993104-1',
    descripcion: 'VACUNACION CONTRA Haemophilus influenza tipo b',
    cie10: 'Z251',
    descripcionCie10: 'NECESIDAD DE INMUNIZACION CONTRA LA INFLUENZA [GRIPE]',
  },
  {
    cups: '*993106-1',
    descripcion: 'VACUNACION CONTRA NEUMOCOCO',
    cie10: 'Z238',
    descripcionCie10: 'NECESIDAD DE INMUNIZACION SOLO CONTRA OTRA ENFERMEDAD BACTERIANA',
  },
  {
    cups: '*993120',
    descripcion: 'VACUNACION COMBINADA CONTRA TETANOS Y DIFTERIA (TD)',
    cie10: 'Z278',
    descripcionCie10: 'NECESIDAD DE INMUNIZACION CONTRA OTRAS COMBINACIONES DE ENFERMEDADES INFECCIOSAS',
  },
  {
    cups: '*993120-8',
    descripcion: 'VACUNACION COMBINADA CONTRA TETANOS Y DIFTERIA Td',
    cie10: 'Z278',
    descripcionCie10: 'NECESIDAD DE INMUNIZACION CONTRA OTRAS COMBINACIONES DE ENFERMEDADES INFECCIOSAS',
  },
  {
    cups: '*993122',
    descripcion: 'VACUNACION COMBINADA DPT CONTRA DIFTERIA TETANOS Y TOSFERINA',
    cie10: 'Z271',
    descripcionCie10: 'NECESIDAD DE INMUNIZACION CONTRA DIFTERIA-PERTUSSIS-TETANOS COMBINADOS [DPT]',
  },
  {
    cups: '*993130-1',
    descripcion: 'VACUNACION PENTAVALENTE',
    cie10: 'Z278',
    descripcionCie10: 'NECESIDAD DE INMUNIZACION CONTRA OTRAS COMBINACIONES DE ENFERMEDADES INFECCIOSAS',
  },
  {
    cups: '*993501',
    descripcion: 'VACUNACION CONTRA POLIOMIELITIS VOP O IVP',
    cie10: 'Z240',
    descripcionCie10: 'NECESIDAD DE INMUNIZACION CONTRA LA POLIOMIELITIS',
  },
  {
    cups: '*993502-1',
    descripcion: 'VACUNACION CONTRA Hepatitis A',
    cie10: 'Z246',
    descripcionCie10: 'NECESIDAD DE INMUNIZACION CONTRA LA HEPATITIS VIRAL',
  },
  {
    cups: '*993503-1',
    descripcion: 'VACUNACION CONTRA Hepatitis B',
    cie10: 'Z246',
    descripcionCie10: 'NECESIDAD DE INMUNIZACION CONTRA LA HEPATITIS VIRAL',
  },
  {
    cups: '*993503-4',
    descripcion: 'VACUNACION CONTRA Hepatitis B - RECIEN NACIDO',
    cie10: 'Z246',
    descripcionCie10: 'NECESIDAD DE INMUNIZACION CONTRA LA HEPATITIS VIRAL',
  },
  {
    cups: '*993504-1',
    descripcion: 'VACUNACION CONTRA FIEBRE AMARILLA',
    cie10: 'Z243',
    descripcionCie10: 'NECESIDAD DE INMUNIZACION CONTRA LA FIEBRE AMARILLA',
  },
  {
    cups: '*993505',
    descripcion: 'VACUNACION CONTRA RABIA',
    cie10: 'Z242',
    descripcionCie10: 'NECESIDAD DE INMUNIZACION CONTRA LA RABIA',
  },
  {
    cups: '*993506-1',
    descripcion: 'VACUNACION CONTRA SARAMPION',
    cie10: 'Z244',
    descripcionCie10: 'NECESIDAD DE INMUNIZACION SOLO CONTRA EL SARAMPION',
  },
  {
    cups: '*993509-1',
    descripcion: 'VACUNACION CONTRA VARICELA',
    cie10: 'Z258',
    descripcionCie10: 'NECESIDAD DE INMUNIZACION CONTRA OTRAS ENFERMEDADES VIRALES UNICAS ESPECIFICADAS',
  },
  {
    cups: '*993510-1',
    descripcion: 'VACUNACION CONTRA INFLUENZA',
    cie10: 'Z251',
    descripcionCie10: 'NECESIDAD DE INMUNIZACION CONTRA LA INFLUENZA [GRIPE]',
  },
  {
    cups: '*993512-1',
    descripcion: 'VACUNACION CONTRA ROTAVIRUS',
    cie10: 'Z258',
    descripcionCie10: 'NECESIDAD DE INMUNIZACION CONTRA OTRAS ENFERMEDADES VIRALES UNICAS ESPECIFICADAS',
  },
  {
    cups: '*993513',
    descripcion: 'VACUNACION CONTRA VIRUS PAPILOMA HUMANO VPH',
    cie10: 'Z258',
    descripcionCie10: 'NECESIDAD DE INMUNIZACION CONTRA OTRAS ENFERMEDADES VIRALES UNICAS ESPECIFICADAS',
  },
  {
    cups: '*993520',
    descripcion: 'VACUNACION COMBINADA CONTRA SARAMPION Y RUBEOLA SR DOBLE VIR',
    cie10: 'Z274',
    descripcionCie10: 'NECESIDAD DE INMUNIZACION CONTRA SARAMPION-PAROTIDITIS-RUBEOLA- [SPR] [MMR]',
  },
  {
    cups: '*993522',
    descripcion: 'VACUNACION COMBINADA CONTRA SARAMPION PAROTIDITIS Y RUBEOLA',
    cie10: 'Z274',
    descripcionCie10: 'NECESIDAD DE INMUNIZACION CONTRA SARAMPION-PAROTIDITIS-RUBEOLA- [SPR] [MMR]',
  },
  {
    cups: '*993522-1',
    descripcion: 'VACUNACION SRP TRIPLE VIRAL',
    cie10: 'Z274',
    descripcionCie10: 'NECESIDAD DE INMUNIZACION CONTRA SARAMPION-PAROTIDITIS-RUBEOLA- [SPR] [MMR]',
  },
  {
    cups: '*995201',
    descripcion: 'VACUNACION DPaT ACELULAR GESTANTES',
    cie10: 'Z271',
    descripcionCie10: 'NECESIDAD DE INMUNIZACION CONTRA DIFTERIA-PERTUSSIS-TETANOS COMBINADOS [DPT]',
  },
  {
    cups: '*995202',
    descripcion: 'VACUNACION CONTRA SARS CoV 2 COVID-19',
    cie10: 'U119',
    descripcionCie10: 'NECESIDAD DE INMUNIZACION CONTRA COVID-19, NO ESPECIFICADA',
  },
  {
    cups: '*906329-1',
    descripcion: 'VACUNACION VIRUS SINCITIAL RESPIRATORIO',
    cie10: 'Z258',
    descripcionCie10: 'NECESIDAD DE INMUNIZACION CONTRA OTRAS ENFERMEDADES VIRALES UNICAS ESPECIFICADAS',
  },
];

// Agrupar vacunas por tipo
const vacunasBacterianas = vacunas.filter(v =>
  v.cups.includes('993102') || v.cups.includes('993106') || v.cups.includes('993104')
);

const vacunasCombinadas = vacunas.filter(v =>
  v.cups.includes('993120') || v.cups.includes('993122') || v.cups.includes('993130') ||
  v.cups.includes('993520') || v.cups.includes('993522') || v.cups.includes('995201')
);

const vacunasVirales = vacunas.filter(v =>
  v.cups.includes('993501') || v.cups.includes('993502') || v.cups.includes('993503') ||
  v.cups.includes('993504') || v.cups.includes('993505') || v.cups.includes('993506') ||
  v.cups.includes('993509') || v.cups.includes('993510') || v.cups.includes('993512') ||
  v.cups.includes('993513') || v.cups.includes('995202') || v.cups.includes('906329')
);

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
      <ContentBlock>
        <h2>Introducción</h2>
        <p>
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
      </ContentBlock>

      {/* Parámetros de facturación */}
      <div className="my-8">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          Parámetros de Facturación
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-lg border border-orange-200 dark:border-orange-800">
            <h3 className="font-semibold text-orange-900 dark:text-orange-300 mb-2">
              Finalidad
            </h3>
            <p className="text-sm">
              <span className="font-mono font-semibold">14</span> - Protección Específica
            </p>
          </div>
          <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border border-green-200 dark:border-green-800">
            <h3 className="font-semibold text-green-900 dark:text-green-300 mb-2">
              Causa Externa
            </h3>
            <p className="text-sm">
              <span className="font-mono font-semibold">40</span> - Promoción y Mantenimiento de la Salud
            </p>
          </div>
        </div>
      </div>

      {/* Vacunas Bacterianas */}
      <div className="my-8">
        <div className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white p-4 rounded-t-lg">
          <h2 className="text-xl font-semibold">Vacunas contra Enfermedades Bacterianas</h2>
          <p className="text-sm opacity-90 mt-1">BCG, Neumococo, Haemophilus influenzae</p>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-gray-100 dark:bg-gray-800">
                <th className="border border-gray-200 dark:border-gray-700 px-4 py-2 text-left font-semibold w-32">
                  CUPS
                </th>
                <th className="border border-gray-200 dark:border-gray-700 px-4 py-2 text-left font-semibold w-xl">
                  Descripción
                </th>
                <th className="border border-gray-200 dark:border-gray-700 px-4 py-2 text-left font-semibold w-24">
                  CIE-10
                </th>
                <th className="border border-gray-200 dark:border-gray-700 px-4 py-2 text-left font-semibold">
                  Descripción CIE-10
                </th>
              </tr>
            </thead>
            <tbody>
              {vacunasBacterianas.map((vacuna, index) => (
                <tr key={index} className="hover:bg-gray-50 dark:hover:bg-gray-800/50">
                  <td className="border border-gray-200 dark:border-gray-700 px-4 py-2 font-mono text-sm w-32">
                    {vacuna.cups}
                  </td>
                  <td className="border border-gray-200 dark:border-gray-700 px-4 py-2 text-sm w-xl">
                    {vacuna.descripcion}
                  </td>
                  <td className="border border-gray-200 dark:border-gray-700 px-4 py-2 font-mono text-sm w-24">
                    {vacuna.cie10}
                  </td>
                  <td className="border border-gray-200 dark:border-gray-700 px-4 py-2 text-sm">
                    {vacuna.descripcionCie10}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Vacunas Virales */}
      <div className="my-8">
        <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-4 rounded-t-lg">
          <h2 className="text-xl font-semibold">Vacunas contra Enfermedades Virales</h2>
          <p className="text-sm opacity-90 mt-1">Polio, Hepatitis, Rotavirus, Influenza, VPH, COVID-19, VSR</p>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-gray-100 dark:bg-gray-800">
                <th className="border border-gray-200 dark:border-gray-700 px-4 py-2 text-left font-semibold w-32">
                  CUPS
                </th>
                <th className="border border-gray-200 dark:border-gray-700 px-4 py-2 text-left font-semibold w-xl">
                  Descripción
                </th>
                <th className="border border-gray-200 dark:border-gray-700 px-4 py-2 text-left font-semibold w-24">
                  CIE-10
                </th>
                <th className="border border-gray-200 dark:border-gray-700 px-4 py-2 text-left font-semibold">
                  Descripción CIE-10
                </th>
              </tr>
            </thead>
            <tbody>
              {vacunasVirales.map((vacuna, index) => (
                <tr key={index} className="hover:bg-gray-50 dark:hover:bg-gray-800/50">
                  <td className="border border-gray-200 dark:border-gray-700 px-4 py-2 font-mono text-sm w-32">
                    {vacuna.cups}
                  </td>
                  <td className="border border-gray-200 dark:border-gray-700 px-4 py-2 text-sm w-xl">
                    {vacuna.descripcion}
                  </td>
                  <td className="border border-gray-200 dark:border-gray-700 px-4 py-2 font-mono text-sm w-24">
                    {vacuna.cie10}
                  </td>
                  <td className="border border-gray-200 dark:border-gray-700 px-4 py-2 text-sm">
                    {vacuna.descripcionCie10}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Vacunas Combinadas */}
      <div className="my-8">
        <div className="bg-gradient-to-r from-green-500 to-teal-500 text-white p-4 rounded-t-lg">
          <h2 className="text-xl font-semibold">Vacunas Combinadas</h2>
          <p className="text-sm opacity-90 mt-1">DPT, Td, Pentavalente, Triple Viral, Doble Viral</p>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-gray-100 dark:bg-gray-800">
                <th className="border border-gray-200 dark:border-gray-700 px-4 py-2 text-left font-semibold w-32">
                  CUPS
                </th>
                <th className="border border-gray-200 dark:border-gray-700 px-4 py-2 text-left font-semibold w-xl">
                  Descripción
                </th>
                <th className="border border-gray-200 dark:border-gray-700 px-4 py-2 text-left font-semibold w-24">
                  CIE-10
                </th>
                <th className="border border-gray-200 dark:border-gray-700 px-4 py-2 text-left font-semibold">
                  Descripción CIE-10
                </th>
              </tr>
            </thead>
            <tbody>
              {vacunasCombinadas.map((vacuna, index) => (
                <tr key={index} className="hover:bg-gray-50 dark:hover:bg-gray-800/50">
                  <td className="border border-gray-200 dark:border-gray-700 px-4 py-2 font-mono text-sm w-32">
                    {vacuna.cups}
                  </td>
                  <td className="border border-gray-200 dark:border-gray-700 px-4 py-2 text-sm w-xl">
                    {vacuna.descripcion}
                  </td>
                  <td className="border border-gray-200 dark:border-gray-700 px-4 py-2 font-mono text-sm w-24">
                    {vacuna.cie10}
                  </td>
                  <td className="border border-gray-200 dark:border-gray-700 px-4 py-2 text-sm">
                    {vacuna.descripcionCie10}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <ContentBlock>
        <h2>Causales frecuentes de glosa</h2>
        <Alert variant="danger" title="Evita estas situaciones">
          <ul className="list-disc list-inside space-y-1">
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
      </ContentBlock>

      <ContentBlock>
        <h2>Documentación requerida</h2>
        <p>Para facturar correctamente los servicios de vacunación, asegúrate de tener:</p>
        <ul>
          <li><strong>Carné de vacunación</strong> con registro completo del biológico aplicado</li>
          <li><strong>Historia clínica</strong> con indicación médica si aplica</li>
          <li><strong>Consentimiento informado</strong> firmado</li>
          <li><strong>Registro de lote y fecha de vencimiento</strong> del biológico</li>
          <li><strong>Cadena de frío</strong> documentada y verificada</li>
          <li><strong>Esquema de vacunación</strong> completo del paciente</li>
          <li><strong>Reporte de ESAVI</strong> si se presentó evento adverso</li>
        </ul>

        <Alert variant="tip" title="Buena práctica" className="mt-4">
          Mantén actualizado el esquema de vacunación en la historia clínica electrónica
          y verifica siempre las contraindicaciones antes de aplicar cualquier biológico.
          Esto no solo evita glosas, sino que protege la seguridad del paciente.
        </Alert>
      </ContentBlock>

      {/* FAQ */}
      <div className="my-8">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          Preguntas Frecuentes
        </h2>
        <Accordion items={faqItems} />
      </div>
    </SectionTemplate>
  );
}

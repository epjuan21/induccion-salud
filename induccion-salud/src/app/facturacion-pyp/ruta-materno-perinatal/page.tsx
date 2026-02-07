import { Baby, Hash, Stethoscope, HeartPulse } from 'lucide-react';
import { SectionTemplate } from '@/components/templates';
import { ArticleContainer, SectionBackground } from '@/components/layout';
import { Alert, Accordion, CopyButton, Badge, SectionDivider, CompactCard } from '@/components/ui';

const atencionesPreconcepcional = [
  {
    tipo: 'Ingreso Cuidado Preconcepcional',
    plantilla: 'X750 INGRESO - CUIDADO PRECONCEPCIONAL',
    cups: '*890201-16',
    descripcion: 'PYP INGRESO CUIDADO PRECONCEPCIONAL',
    finalidad: '22',
    causaExterna: '40',
    cie10: 'Z316',
  },
  {
    tipo: 'Control Cuidado Preconcepcional',
    plantilla: 'X751 CONTROL - CUIDADO PRECONCEPCIONAL',
    cups: '*890301-16',
    descripcion: 'PYP CONTROL CUIDADO PRECONCEPCIONAL',
    finalidad: '22',
    causaExterna: '40',
    cie10: 'Z316',
  },
];

const atencionesPrenatal = [
  {
    tipo: 'Ingreso',
    plantilla: 'X7A2 INGRESO – CUIDADO PRENATAL',
    cups: '*890201-8',
    descripcion: 'PYP INGRESO CUIDADO PRENATAL MEDICO',
    finalidad: '23',
    causaExterna: '42',
    cie10: 'Z349, Z352, Z358',
  },
  {
    tipo: 'Ingreso',
    plantilla: 'X7A2 INGRESO – CUIDADO PRENATAL',
    cups: '*890205-8',
    descripcion: 'PYP INGRESO CUIDADO PRENATAL ENFERMERA',
    finalidad: '23',
    causaExterna: '42',
    cie10: 'Z349, Z352, Z358',
  },
  {
    tipo: 'Control',
    plantilla: 'X7A3 CONTROL – CUIDADO PRENATAL',
    cups: '*890301-8',
    descripcion: 'PYP CONTROL CUIDADO PRENATAL MEDICO',
    finalidad: '23',
    causaExterna: '42',
    cie10: 'Z349, Z352, Z358',
  },
  {
    tipo: 'Control',
    plantilla: 'X7A3 CONTROL – CUIDADO PRENATAL',
    cups: '*890305-8',
    descripcion: 'PYP CONTROL CUIDADO PRENATAL ENFERMERA',
    finalidad: '23',
    causaExterna: '42',
    cie10: 'Z349, Z352, Z358',
  },
];

const atencionesIVE = [
  {
    tipo: 'Ingreso',
    plantilla: 'X780 INGRESO – INTERRUPCIÓN VOLUNTARIA DEL EMBARAZO',
    cups: '*890201-24',
    descripcion: 'PYP INGRESO INTERRUPCION VOLUNTARIA DEL EMBARAZO',
    finalidad: '24',
    causaExterna: '34 – 35 – 36 – 49',
    cie10: 'Z319',
  },
  {
    tipo: 'Control',
    plantilla: 'X781 CONTROL – INTERRUPCIÓN VOLUNTARIA DEL EMBARAZO',
    cups: '*890301-24',
    descripcion: 'PYP CONTROL INTERRUPCION VOLUNTARIA DEL EMBARAZO',
    finalidad: '24',
    causaExterna: '34 – 35 – 36 – 49',
    cie10: 'Z319',
  },
];

const atencionesParto = [
  {
    cups: '*735300',
    descripcion: 'ASISTENCIA DEL PARTO NORMAL CON EPISIORRAFIA Y/O PERINEO-RR',
    finalidad: '25',
    plantilla: 'X785 INGRESO - ATENCIÓN DEL PARTO',
  },
  {
    cups: '*735301-3',
    descripcion: 'PYP ASISTENCIA DEL PARTO CON O SIN EPISIORRAFIA O PERINEORRA',
    finalidad: '25',
    plantilla: 'X785 INGRESO - ATENCIÓN DEL PARTO',
  },
  {
    cups: '*735301-S',
    descripcion: 'PYP ASISTENCIA PARTO NORMAL – SAVIASALUD',
    finalidad: '25',
    plantilla: 'X785 INGRESO - ATENCIÓN DEL PARTO',
  },
];

const atencionesPuerperio = [
  {
    cups: '*890201-3',
    descripcion: 'PYP ATENCION DEL PUERPERIO',
    finalidad: '25',
  },
];

const atencionesRecienNacido = [
  {
    cups: '*890201-4',
    descripcion: 'PYP ATENCION PARA EL CUIDADO DEL RECIEN NACIDO',
    finalidad: '26',
  },
  {
    cups: '*890301-4',
    descripcion: 'PYP ATENCION PARA EL SEGUIMIENTO AL RECIEN NACIDO',
    finalidad: '27',
  },
];

const faqItems = [
  {
    id: 'rmp-1',
    title: '¿Cuál es la diferencia entre ingreso y control prenatal?',
    content: (
      <div>
        <p className="mb-2">
          El <strong>ingreso</strong> es la primera consulta de control prenatal de la gestante,
          donde se realiza la captación, valoración inicial completa y solicitud de exámenes
          de laboratorio e imágenes diagnósticas.
        </p>
        <p>
          El <strong>control</strong> son las consultas de seguimiento subsecuentes durante
          el embarazo para monitorear la evolución de la gestación, revisar resultados de
          exámenes y detectar oportunamente complicaciones.
        </p>
      </div>
    ),
  },
  {
    id: 'rmp-2',
    title: '¿Qué es el cuidado preconcepcional y cuándo se factura?',
    content: (
      <p>
        El cuidado preconcepcional es la atención que se brinda a mujeres y hombres en edad
        reproductiva que planean tener hijos. Incluye valoración del estado de salud,
        identificación de riesgos, suplementación con ácido fólico y orientación. Se factura
        cuando la pareja o mujer acude específicamente para planear un embarazo.
      </p>
    ),
  },
  {
    id: 'rmp-3',
    title: '¿Cómo se factura la atención del parto?',
    content: (
      <div>
        <p className="mb-2">
          La atención del parto se factura con códigos específicos según el tipo de atención:
        </p>
        <ul className="list-disc list-inside space-y-1">
          <li>Parto normal con episiorrafia: código *735300</li>
          <li>Parto con o sin episiorrafia: código *735301-3</li>
          <li>Para SAVIASALUD: código *735301-S</li>
        </ul>
        <p className="mt-2">
          Todos tienen finalidad 25 (Protección Específica) y se registran con la plantilla
          X785 en Xenco.
        </p>
      </div>
    ),
  },
  {
    id: 'rmp-4',
    title: '¿Cuándo se factura la atención del recién nacido?',
    content: (
      <div>
        <p className="mb-2">
          Se facturan dos momentos diferentes:
        </p>
        <ul className="list-disc list-inside space-y-1">
          <li>
            <strong>Atención para el cuidado del recién nacido (*890201-4)</strong>: Se
            factura al momento del nacimiento. Incluye la valoración inmediata, APGAR,
            antropometría y cuidados iniciales.
          </li>
          <li>
            <strong>Atención para el seguimiento al recién nacido (*890301-4)</strong>: Se
            factura a los 7 días del nacimiento. Es el control de seguimiento temprano.
          </li>
        </ul>
      </div>
    ),
  },
  {
    id: 'rmp-5',
    title: '¿Qué plantilla de Xenco se usa para cada atención?',
    content: (
      <div>
        <p className="mb-2">Las plantillas principales son:</p>
        <ul className="list-disc list-inside space-y-1">
          <li>X750/X751: Cuidado preconcepcional (ingreso/control)</li>
          <li>X7A2/X7A3: Cuidado prenatal (ingreso/control)</li>
          <li>X780/X781: IVE (ingreso/control)</li>
          <li>X785: Atención del parto</li>
          <li>X788: Atención del puerperio</li>
          <li>X789: Atención del recién nacido</li>
          <li>X790: Seguimiento al recién nacido</li>
        </ul>
      </div>
    ),
  },
];

export default function RutaMaternoPerinatalPage() {
  return (
    <SectionTemplate
      title="Ruta Materno Perinatal"
      description="Facturación de controles prenatales, atención del parto y seguimiento al recién nacido."
      icon={Baby}
      breadcrumbs={[
        { label: 'Facturación P&P', href: '/facturacion-pyp' },
        { label: 'Ruta Materno Perinatal' },
      ]}
      previousPage={{
        title: 'Planificación Familiar',
        href: '/facturacion-pyp/planificacion-familiar',
      }}
      nextPage={{
        title: 'Ciclos de Vida',
        href: '/facturacion-pyp/ciclos-vida',
      }}
    >
      {/* Introducción - Lead Paragraph */}
      <SectionBackground variant="default" spacing="normal">
        <ArticleContainer maxWidth="prose">
          <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
            La Ruta Integral de Atención en Salud Materno Perinatal tiene como
            objetivo garantizar la atención segura y de calidad durante el embarazo,
            parto, puerperio y atención del recién nacido. La facturación correcta
            de estos servicios es crucial para el seguimiento de indicadores de salud
            materno-infantil.
          </p>

          <Alert variant="warning" title="Captación temprana">
            La captación de gestantes antes de la semana 10 es un indicador de
            calidad. Asegúrate de facturar correctamente el primer control con
            todos los exámenes de ingreso.
          </Alert>
        </ArticleContainer>
      </SectionBackground>

      {/* Parámetros Generales - Fondo Gris */}
      <SectionBackground variant="muted" spacing="large">
        <ArticleContainer maxWidth="prose">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Parámetros Comunes
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
            Estos parámetros se repiten en la mayoría de atenciones de la ruta materno perinatal.
          </p>

          <div className="space-y-3">
            <CompactCard variant="highlighted">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-purple-100 dark:bg-purple-900/40 rounded-lg shrink-0">
                  <Hash className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                </div>
                <div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Causa Externa:</span>
                    <span className="text-lg font-bold text-purple-600 dark:text-purple-400">40 - 42</span>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-0.5">
                    Promoción y Mantenimiento / Atención Materna
                  </p>
                </div>
              </div>
            </CompactCard>
          </div>
        </ArticleContainer>
      </SectionBackground>

      {/* Separador Decorativo */}
      <SectionDivider variant="decorative" icon={Baby} />

      {/* 1. Atención Preconcepcional - Fondo Blanco */}
      <SectionBackground variant="default" spacing="large">
        <ArticleContainer maxWidth="wide">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
            1. Atención para el Cuidado Preconcepcional
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-2 leading-relaxed">
            Tipo: <Badge variant="blue" size="sm">Detección Temprana</Badge>
          </p>
          <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
            Atención dirigida a personas que planean tener hijos. Incluye valoración del estado de salud,
            identificación de riesgos y suplementación.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="border-b-2 border-gray-300 dark:border-gray-700">
                <tr>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 dark:text-white">
                    Tipo
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 dark:text-white">
                    CUPS
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 dark:text-white">
                    Descripción
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 dark:text-white">
                    Finalidad
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 dark:text-white">
                    CIE-10
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-800">
                {atencionesPreconcepcional.map((atencion, index) => (
                  <tr key={index} className="hover:bg-gray-50 dark:hover:bg-gray-900/50 transition-colors">
                    <td className="px-4 py-3">
                      <Badge variant={atencion.tipo.includes('Ingreso') ? 'purple' : 'blue'} size="sm">
                        {atencion.tipo.replace('Cuidado Preconcepcional', '').trim()}
                      </Badge>
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-2">
                        <code className="font-mono text-sm font-semibold text-primary-600 dark:text-primary-400">
                          {atencion.cups}
                        </code>
                        <CopyButton text={atencion.cups} size="sm" />
                      </div>
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-700 dark:text-gray-300">
                      {atencion.descripcion}
                    </td>
                    <td className="px-4 py-3 text-center">
                      <span className="text-sm font-semibold text-gray-900 dark:text-white">{atencion.finalidad}</span>
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-2">
                        <code className="font-mono text-sm font-semibold text-primary-600 dark:text-primary-400">
                          {atencion.cie10}
                        </code>
                        <CopyButton text={atencion.cie10} size="sm" />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <Alert variant="info" title="Plantilla Xenco" className="mt-6">
            <ul className="space-y-1 text-sm">
              <li><strong>Ingreso:</strong> <code className="font-mono">X750 INGRESO - CUIDADO PRECONCEPCIONAL</code></li>
              <li><strong>Control:</strong> <code className="font-mono">X751 CONTROL - CUIDADO PRECONCEPCIONAL</code></li>
            </ul>
          </Alert>

          <Alert variant="tip" title="Descripción de Códigos" className="mt-4">
            <ul className="space-y-1 text-sm">
              <li><strong>Finalidad 22:</strong> Atención para el cuidado preconcepcional</li>
              <li><strong>Causa Externa 40:</strong> Promoción y Mantenimiento de la Salud - Intervenciones Individuales</li>
              <li><strong>CIE-10 Z316:</strong> Consejo y Asesoramiento General sobre la Procreación</li>
            </ul>
          </Alert>
        </ArticleContainer>
      </SectionBackground>

      {/* 2. Atención Prenatal - Fondo Gris */}
      <SectionBackground variant="muted" spacing="large">
        <ArticleContainer maxWidth="wide">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
            2. Atención para el Cuidado Prenatal
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-2 leading-relaxed">
            Tipo: <Badge variant="blue" size="sm">Detección Temprana</Badge>
          </p>
          <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
            Controles prenatales para monitorear la evolución del embarazo. El ingreso se realiza
            en la primera consulta prenatal, y los controles son seguimientos subsecuentes.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="border-b-2 border-gray-300 dark:border-gray-700">
                <tr>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 dark:text-white">
                    Tipo
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 dark:text-white">
                    CUPS
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 dark:text-white">
                    Descripción
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 dark:text-white">
                    Finalidad
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 dark:text-white">
                    CIE-10
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-800">
                {atencionesPrenatal.map((atencion, index) => (
                  <tr key={index} className="hover:bg-gray-50 dark:hover:bg-gray-900/50 transition-colors">
                    <td className="px-4 py-3">
                      <Badge variant={atencion.tipo === 'Ingreso' ? 'purple' : 'blue'} size="sm">
                        {atencion.tipo}
                      </Badge>
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-2">
                        <code className="font-mono text-sm font-semibold text-primary-600 dark:text-primary-400">
                          {atencion.cups}
                        </code>
                        <CopyButton text={atencion.cups} size="sm" />
                      </div>
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-700 dark:text-gray-300">
                      {atencion.descripcion}
                    </td>
                    <td className="px-4 py-3 text-center">
                      <span className="text-sm font-semibold text-gray-900 dark:text-white">{atencion.finalidad}</span>
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-2">
                        <code className="font-mono text-sm font-semibold text-primary-600 dark:text-primary-400">
                          {atencion.cie10}
                        </code>
                        <CopyButton text={atencion.cie10} size="sm" />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <Alert variant="info" title="Plantillas Xenco" className="mt-6">
            <ul className="space-y-1 text-sm">
              <li><strong>Ingreso:</strong> <code className="font-mono">X7A2 INGRESO – CUIDADO PRENATAL</code></li>
              <li><strong>Control:</strong> <code className="font-mono">X7A3 CONTROL – CUIDADO PRENATAL</code></li>
            </ul>
          </Alert>

          <Alert variant="tip" title="Descripción de Códigos" className="mt-4">
            <ul className="space-y-2 text-sm">
              <li><strong>Finalidad 23:</strong> Atención para el Cuidado Prenatal</li>
              <li><strong>Causa Externa 42:</strong> Atención de Población Materno Perinatal</li>
              <li><strong>Códigos CIE-10:</strong>
                <ul className="ml-4 mt-1 space-y-1">
                  <li>• <code className="font-mono">Z349</code> - Supervisión de Embarazo Normal no Especificado</li>
                  <li>• <code className="font-mono">Z352</code> - Supervisión de Embarazo con otro Riesgo en la Historia Obstétrica o Reproductiva</li>
                  <li>• <code className="font-mono">Z358</code> - Supervisión de Otros Embarazos de Alto Riesgo</li>
                </ul>
              </li>
            </ul>
          </Alert>
        </ArticleContainer>
      </SectionBackground>

      {/* 3. IVE - Fondo Blanco */}
      <SectionBackground variant="default" spacing="large">
        <ArticleContainer maxWidth="wide">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
            3. Interrupción Voluntaria del Embarazo (IVE)
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-2 leading-relaxed">
            Tipo: <Badge variant="blue" size="sm">Detección Temprana</Badge>
          </p>
          <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
            Atención para la interrupción voluntaria del embarazo bajo las causales legales establecidas.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="border-b-2 border-gray-300 dark:border-gray-700">
                <tr>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 dark:text-white">
                    Tipo
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 dark:text-white">
                    CUPS
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 dark:text-white">
                    Descripción
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 dark:text-white">
                    Finalidad
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 dark:text-white">
                    CIE-10
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-800">
                {atencionesIVE.map((atencion, index) => (
                  <tr key={index} className="hover:bg-gray-50 dark:hover:bg-gray-900/50 transition-colors">
                    <td className="px-4 py-3">
                      <Badge variant={atencion.tipo === 'Ingreso' ? 'purple' : 'blue'} size="sm">
                        {atencion.tipo}
                      </Badge>
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-2">
                        <code className="font-mono text-sm font-semibold text-primary-600 dark:text-primary-400">
                          {atencion.cups}
                        </code>
                        <CopyButton text={atencion.cups} size="sm" />
                      </div>
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-700 dark:text-gray-300">
                      {atencion.descripcion}
                    </td>
                    <td className="px-4 py-3 text-center">
                      <span className="text-sm font-semibold text-gray-900 dark:text-white">{atencion.finalidad}</span>
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-2">
                        <code className="font-mono text-sm font-semibold text-primary-600 dark:text-primary-400">
                          {atencion.cie10}
                        </code>
                        <CopyButton text={atencion.cie10} size="sm" />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <Alert variant="info" title="Plantillas Xenco" className="mt-6">
            <ul className="space-y-1 text-sm">
              <li><strong>Ingreso:</strong> <code className="font-mono">X780 INGRESO – INTERRUPCIÓN VOLUNTARIA DEL EMBARAZO</code></li>
              <li><strong>Control:</strong> <code className="font-mono">X781 CONTROL – INTERRUPCIÓN VOLUNTARIA DEL EMBARAZO</code></li>
            </ul>
          </Alert>

          <Alert variant="tip" title="Descripción de Códigos" className="mt-4">
            <ul className="space-y-2 text-sm">
              <li><strong>Finalidad 24:</strong> Interrupción Voluntaria del Embarazo</li>
              <li><strong>Causas Externas:</strong>
                <ul className="ml-4 mt-1 space-y-1">
                  <li>• <strong>34</strong> - IVE Relacionado con Peligro a la Salud o Vida de la Mujer</li>
                  <li>• <strong>35</strong> - IVE Por Malformación Congénita Incompatible con la Vida</li>
                  <li>• <strong>36</strong> - IVE Por Violencia Sexual</li>
                  <li>• <strong>49</strong> - IVE Por Decisión o Manifestación de Voluntad de la Persona Gestante hasta la Semana 24 de Gestación</li>
                </ul>
              </li>
              <li><strong>CIE-10 Z319:</strong> Atención no Especificada Relacionada con la Procreación</li>
            </ul>
          </Alert>
        </ArticleContainer>
      </SectionBackground>

      {/* Separador Decorativo */}
      <SectionDivider variant="decorative" icon={Stethoscope} />

      {/* 4. Atención del Parto - Fondo Gris */}
      <SectionBackground variant="muted" spacing="large">
        <ArticleContainer maxWidth="wide">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
            4. Atención del Parto
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-2 leading-relaxed">
            Tipo: <Badge variant="green" size="sm">Protección Específica</Badge>
          </p>
          <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
            Códigos para la atención del parto normal. Usa el código correspondiente según
            el tipo de procedimiento y la EPS.
          </p>

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
                    Finalidad
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-800">
                {atencionesParto.map((atencion, index) => (
                  <tr key={index} className="hover:bg-gray-50 dark:hover:bg-gray-900/50 transition-colors">
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-2">
                        <code className="font-mono text-sm font-semibold text-primary-600 dark:text-primary-400">
                          {atencion.cups}
                        </code>
                        <CopyButton text={atencion.cups} size="sm" />
                      </div>
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-700 dark:text-gray-300">
                      {atencion.descripcion}
                    </td>
                    <td className="px-4 py-3 text-center">
                      <span className="text-sm font-semibold text-gray-900 dark:text-white">{atencion.finalidad}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <Alert variant="info" title="Plantilla Xenco" className="mt-6">
            <p className="text-sm">
              <strong>Plantilla:</strong> <code className="font-mono">X785 INGRESO - ATENCIÓN DEL PARTO</code>
            </p>
          </Alert>

          <Alert variant="tip" title="Descripción de Códigos" className="mt-4">
            <p className="text-sm">
              <strong>Finalidad 25:</strong> Atención del Parto y Puerperio
            </p>
          </Alert>
        </ArticleContainer>
      </SectionBackground>

      {/* 5. Atención del Puerperio - Fondo Blanco */}
      <SectionBackground variant="default" spacing="large">
        <ArticleContainer maxWidth="wide">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
            5. Atención del Puerperio
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-2 leading-relaxed">
            Tipo: <Badge variant="green" size="sm">Protección Específica</Badge>
          </p>
          <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
            Atención en el período posterior al parto (puerperio). Se realiza control de la
            involución uterina, lactancia y signos de alarma.
          </p>

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
                    Finalidad
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-800">
                {atencionesPuerperio.map((atencion, index) => (
                  <tr key={index} className="hover:bg-gray-50 dark:hover:bg-gray-900/50 transition-colors">
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-2">
                        <code className="font-mono text-sm font-semibold text-primary-600 dark:text-primary-400">
                          {atencion.cups}
                        </code>
                        <CopyButton text={atencion.cups} size="sm" />
                      </div>
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-700 dark:text-gray-300">
                      {atencion.descripcion}
                    </td>
                    <td className="px-4 py-3 text-center">
                      <span className="text-sm font-semibold text-gray-900 dark:text-white">{atencion.finalidad}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <Alert variant="info" title="Plantilla Xenco" className="mt-6">
            <ul className="space-y-1 text-sm">
              <li><strong>Plantilla:</strong> <code className="font-mono">X788 ATENCIÓN DEL PUERPERIO</code></li>
            </ul>
          </Alert>

          <Alert variant="tip" title="Descripción de Códigos" className="mt-4">
            <ul className="space-y-1 text-sm">
              <li><strong>Finalidad 25:</strong> Atención del Parto y Puerperio</li>
              <li><strong>Causa Externa 42:</strong> Atención de Población Materno Perinatal</li>
              <li><strong>CIE-10 Z392:</strong> Seguimiento Postparto de Rutina</li>
            </ul>
          </Alert>
        </ArticleContainer>
      </SectionBackground>

      {/* Separador Decorativo */}
      <SectionDivider variant="decorative" icon={HeartPulse} />

      {/* 6 y 7. Atención del Recién Nacido - Fondo Gris */}
      <SectionBackground variant="muted" spacing="large">
        <ArticleContainer maxWidth="wide">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
            6 y 7. Atención para el Cuidado del Recién Nacido
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-2 leading-relaxed">
            Tipo: <Badge variant="green" size="sm">Protección Específica</Badge>
          </p>
          <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
            Se registran dos atenciones: una al momento del nacimiento y otra en el control
            a los 7 días.
          </p>

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
                    Finalidad
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-800">
                {atencionesRecienNacido.map((atencion, index) => (
                  <tr key={index} className="hover:bg-gray-50 dark:hover:bg-gray-900/50 transition-colors">
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-2">
                        <code className="font-mono text-sm font-semibold text-primary-600 dark:text-primary-400">
                          {atencion.cups}
                        </code>
                        <CopyButton text={atencion.cups} size="sm" />
                      </div>
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-700 dark:text-gray-300">
                      {atencion.descripcion}
                    </td>
                    <td className="px-4 py-3 text-center">
                      <span className="text-sm font-semibold text-gray-900 dark:text-white">{atencion.finalidad}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <Alert variant="info" title="Plantillas Xenco" className="mt-6">
            <ul className="space-y-1 text-sm">
              <li><strong>Atención al nacimiento:</strong></li>
              <li className="ml-4">Plantilla: <code className="font-mono">X789 ATENCIÓN PARA EL CUIDADO RECIÉN NACIDO</code></li>
              <li className="mt-2"><strong>Seguimiento a los 7 días:</strong></li>
              <li className="ml-4">Plantilla: <code className="font-mono">X790 ATENCIÓN PARA EL SEGUIMIENTO AL RECIÉN NACIDO</code></li>
            </ul>
          </Alert>

          <Alert variant="tip" title="Descripción de Códigos" className="mt-4">
            <ul className="space-y-2 text-sm">
              <li><strong>Finalidad 26:</strong> Atención para el Cuidado del Recién Nacido (al momento del nacimiento)</li>
              <li><strong>Finalidad 27:</strong> Atención para el Seguimiento del Recién Nacido (a los 7 días)</li>
              <li><strong>Causa Externa 42:</strong> Atención de Población Materno Perinatal</li>
              <li><strong>Códigos CIE-10:</strong>
                <ul className="ml-4 mt-1 space-y-1">
                  <li>• <code className="font-mono">Z370</code> - Nacido Vivo Único</li>
                  <li>• <code className="font-mono">Z380</code> - Producto Único Nacido en Hospital</li>
                </ul>
              </li>
            </ul>
          </Alert>
        </ArticleContainer>
      </SectionBackground>

      {/* Recordatorio importante - Fondo Blanco */}
      <SectionBackground variant="default" spacing="normal">
        <ArticleContainer maxWidth="prose">
          <Alert variant="tip" title="Importante" className="p-5">
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Cada atención tiene una plantilla específica en Xenco y códigos CUPS diferentes.
              Es fundamental usar la plantilla correcta para que los datos se registren
              adecuadamente y la facturación sea exitosa.
            </p>
          </Alert>
        </ArticleContainer>
      </SectionBackground>

      {/* Preguntas Frecuentes - Fondo Gris */}
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

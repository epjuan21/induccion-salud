import { Users } from 'lucide-react';
import { SectionTemplate } from '@/components/templates';
import { ContentBlock } from '@/components/content';
import { Alert, Accordion } from '@/components/ui';

// Datos de Primera Infancia (7 días a 5 años, 11 meses, 29 días)
const primeraInfancia = [
  { cups: '*890201-17-1', descripcion: 'PYM PRIMERA INFANCIA MEDICO 1 M', finalidad: '11', causaExterna: '40', cie10: 'Z001', edades: '1 Mes' },
  { cups: '*890305-17-1', descripcion: 'PYM PRIMERA INFANCIA CONTROL ENFERMERIA 1 M', finalidad: '11', causaExterna: '40', cie10: 'Z001', edades: '1 Mes' },
  { cups: '*890205-17-1', descripcion: 'PYM PRIMERA INFANCIA ENFERMERA 2-3M', finalidad: '11', causaExterna: '40', cie10: 'Z001', edades: 'De 2 a 3 Meses' },
  { cups: '*890201-17-2', descripcion: 'PYM PRIMERA INFANCIA MEDICO 4-5M', finalidad: '11', causaExterna: '40', cie10: 'Z001', edades: 'De 4 a 5 Meses' },
  { cups: '*890205-17-2', descripcion: 'PYM PRIMERA INFANCIA ENFERMERA 6-8M', finalidad: '11', causaExterna: '40', cie10: 'Z001', edades: 'De 6 a 8 Meses' },
  { cups: '*890205-17-3', descripcion: 'PYM PRIMERA INFANCIA ENFERMERA 9-11M', finalidad: '11', causaExterna: '40', cie10: 'Z001', edades: 'De 9 a 11 Meses' },
  { cups: '*890201-17-3', descripcion: 'PYM PRIMERA INFANCIA MEDICO 12-18M', finalidad: '11', causaExterna: '40', cie10: 'Z001', edades: 'De 12 a 18 Meses' },
  { cups: '*890205-17-4', descripcion: 'PYM PRIMERA INFANCIA ENFERMERA 19-23M', finalidad: '11', causaExterna: '40', cie10: 'Z001', edades: 'De 19 a 23 Meses' },
  { cups: '*890201-17-4', descripcion: 'PYM PRIMERA INFANCIA MEDICO 24-29M', finalidad: '11', causaExterna: '40', cie10: 'Z001', edades: 'De 24 a 29 Meses' },
  { cups: '*890205-17-5', descripcion: 'PYM PRIMERA INFANCIA ENFERMERA 30-35M', finalidad: '11', causaExterna: '40', cie10: 'Z001', edades: 'De 30 a 35 Meses' },
  { cups: '*890201-17-5', descripcion: 'PYM PRIMERA INFANCIA MEDICO 3 A', finalidad: '11', causaExterna: '40', cie10: 'Z001', edades: '3 Años' },
  { cups: '*890205-17-6', descripcion: 'PYM PRIMERA INFANCIA ENFERMERA 4 A', finalidad: '11', causaExterna: '40', cie10: 'Z001', edades: '4 Años' },
  { cups: '*890201-17-6', descripcion: 'PYM PRIMERA INFANCIA MEDICO 5 A', finalidad: '11', causaExterna: '40', cie10: 'Z002', edades: '5 Años' },
  { cups: '*890203-17', descripcion: 'PYM PRIMERA INFANCIA ODONTOLOGIA ANUAL', finalidad: '11', causaExterna: '40', cie10: 'Z012', edades: 'Anual' },
  { cups: '*890305-17-2', descripcion: 'PYM PRIMERA INFANCIA CONTROL ENFERMERIA', finalidad: '11', causaExterna: '40', cie10: 'Z001', edades: 'Según Hallazgos' },
];

// Datos de Infancia (6 a 11 años, 11 meses, 29 días)
const infancia = [
  { cups: '*890201-18-1', descripcion: 'PYM INFANCIA MEDICO 6 A', finalidad: '11', causaExterna: '40', cie10: 'Z002', edades: '6 Años' },
  { cups: '*890205-18-1', descripcion: 'PYM INFANCIA ENFERMERIA 7 A', finalidad: '11', causaExterna: '40', cie10: 'Z002', edades: '7 Años' },
  { cups: '*890201-18-2', descripcion: 'PYM INFANCIA MEDICO 8 A', finalidad: '11', causaExterna: '40', cie10: 'Z002', edades: '8 Años' },
  { cups: '*890205-18-2', descripcion: 'PYM INFANCIA ENFERMERIA 9 A', finalidad: '11', causaExterna: '40', cie10: 'Z002', edades: '9 Años' },
  { cups: '*890201-18-3', descripcion: 'PYM INFANCIA MEDICO 10 A', finalidad: '11', causaExterna: '40', cie10: 'Z003', edades: '10 Años' },
  { cups: '*890205-18-3', descripcion: 'PYM INFANCIA ENFERMERIA 11 A', finalidad: '11', causaExterna: '40', cie10: 'Z003', edades: '11 Años' },
  { cups: '*890203-18', descripcion: 'PYM INFANCIA ODONTOLOGIA ANUAL', finalidad: '11', causaExterna: '40', cie10: 'Z012', edades: 'Anual' },
];

// Datos de Adolescencia (12 a 17 años)
const adolescencia = [
  { cups: '*890201-19-1', descripcion: 'PYM ADOLESCENCIA MEDICO 12 A', finalidad: '11', causaExterna: '40', cie10: 'Z003', edades: '12 Años' },
  { cups: '*890205-19-1', descripcion: 'PYM ADOLESCENCIA ENFERMERIA 13 A', finalidad: '11', causaExterna: '40', cie10: 'Z003', edades: '13 Años' },
  { cups: '*890201-19-2', descripcion: 'PYM ADOLESCENCIA MEDICO 14 A', finalidad: '11', causaExterna: '40', cie10: 'Z003', edades: '14 Años' },
  { cups: '*890205-19-2', descripcion: 'PYM ADOLESCENCIA ENFERMERIA 15 A', finalidad: '11', causaExterna: '40', cie10: 'Z003', edades: '15 Años' },
  { cups: '*890201-19-3', descripcion: 'PYM ADOLESCENCIA MEDICO 16 A', finalidad: '11', causaExterna: '40', cie10: 'Z003', edades: '16 Años' },
  { cups: '*890205-19-3', descripcion: 'PYM ADOLESCENCIA ENFERMERIA 17 A', finalidad: '11', causaExterna: '40', cie10: 'Z003', edades: '17 Años' },
  { cups: '*890203-19', descripcion: 'PYM ADOLESCENCIA ODONTOLOGIA ANUAL', finalidad: '11', causaExterna: '40', cie10: 'Z012', edades: 'Anual' },
];

// Datos de Juventud (18 a 28 años)
const juventud = [
  { cups: '*890201-20-1', descripcion: 'PYM JUVENTUD MEDICO PRIMERA VEZ 18-23 A', finalidad: '11', causaExterna: '40', cie10: 'Z108', edades: 'De 18 a 23 Años' },
  { cups: '*890201-20-2', descripcion: 'PYM JUVENTUD MEDICO PRIMERA VEZ 24-28 A', finalidad: '11', causaExterna: '40', cie10: 'Z108', edades: 'De 24 a 28 Años' },
  { cups: '*890203-20', descripcion: 'PYM JUVENTUD ODONTOLOGIA UNA VEZ CADA DOS AÑOS', finalidad: '11', causaExterna: '40', cie10: 'Z012', edades: 'Una vez cada 2 Años' },
];

// Datos de Adultez (29 a 59 años)
const adultez = [
  { cups: '*890201-21-1', descripcion: 'PYM ADULTEZ MEDICO PRIMERA VEZ 29-34A', finalidad: '11', causaExterna: '40', cie10: 'Z108', edades: 'De 29 a 34 Años' },
  { cups: '*890201-21-2', descripcion: 'PYM ADULTEZ MEDICO PRIMERA VEZ 35-39A', finalidad: '11', causaExterna: '40', cie10: 'Z108', edades: 'De 35 a 39 Años' },
  { cups: '*890201-21-3', descripcion: 'PYM ADULTEZ MEDICO PRIMERA VEZ 40-44A', finalidad: '11', causaExterna: '40', cie10: 'Z108', edades: 'De 40 a 44 Años' },
  { cups: '*890201-21-4', descripcion: 'PYM ADULTEZ MEDICO PRIMERA VEZ 45-49A', finalidad: '11', causaExterna: '40', cie10: 'Z108', edades: 'De 45 a 49 Años' },
  { cups: '*890201-21-5', descripcion: 'PYM ADULTEZ MEDICO PRIMERA VEZ 50-52 A', finalidad: '11', causaExterna: '40', cie10: 'Z108', edades: 'De 50 a 52 Años' },
  { cups: '*890201-21-6', descripcion: 'PYM ADULTEZ MEDICO PRIMERA VEZ 53-55 A', finalidad: '11', causaExterna: '40', cie10: 'Z108', edades: 'De 53 a 55 Años' },
  { cups: '*890201-21-7', descripcion: 'PYM ADULTEZ MEDICO PRIMERA VEZ 56-59A', finalidad: '11', causaExterna: '40', cie10: 'Z108', edades: 'De 56 a 59 Años' },
  { cups: '*890203-21', descripcion: 'PYM ADULTEZ ODONTOLOGIA UNA VEZ CADA DOS AÑOS', finalidad: '11', causaExterna: '40', cie10: 'Z012', edades: 'Una vez cada 2 Años' },
];

// Datos de Vejez (60 años en adelante)
const vejez = [
  { cups: '*890201-22-1', descripcion: 'PYM VEJEZ MEDICO PRIMERA VEZ 60-62A', finalidad: '11', causaExterna: '40', cie10: 'Z108', edades: 'De 60 a 62 Años' },
  { cups: '*890201-22-2', descripcion: 'PYM VEJEZ MEDICO PRIMERA VEZ 63-65A', finalidad: '11', causaExterna: '40', cie10: 'Z108', edades: 'De 63 a 65 Años' },
  { cups: '*890201-22-3', descripcion: 'PYM VEJEZ MEDICO PRIMERA VEZ 66-68 A', finalidad: '11', causaExterna: '40', cie10: 'Z108', edades: 'De 66 a 68 Años' },
  { cups: '*890201-22-4', descripcion: 'PYM VEJEZ MEDICO PRIMERA VEZ 69-71 A', finalidad: '11', causaExterna: '40', cie10: 'Z108', edades: 'De 69 a 71 Años' },
  { cups: '*890201-22-5', descripcion: 'PYM VEJEZ MEDICO PRIMERA VEZ 72-74 A', finalidad: '11', causaExterna: '40', cie10: 'Z108', edades: 'De 72 a 74 Años' },
  { cups: '*890201-22-6', descripcion: 'PYM VEJEZ MEDICO PRIMERA VEZ 75-77 A', finalidad: '11', causaExterna: '40', cie10: 'Z108', edades: 'De 75 a 77 Años' },
  { cups: '*890201-22-7', descripcion: 'PYM VEJEZ MEDICO PRIMERA VEZ 78-79 A', finalidad: '11', causaExterna: '40', cie10: 'Z108', edades: 'De 78 a 79 Años' },
  { cups: '*890201-22-8', descripcion: 'PYM VEJEZ MEDICO PRIMERA VEZ 80A Y MAS', finalidad: '11', causaExterna: '40', cie10: 'Z108', edades: '80 y más' },
  { cups: '*890203-22', descripcion: 'PYM VEJEZ ODONTOLOGIA UNA VEZ CADA DOS AÑOS', finalidad: '11', causaExterna: '40', cie10: 'Z012', edades: 'Una vez cada 3 Años' },
];

const faqItems = [
  {
    id: 'cv-1',
    title: '¿Qué es la valoración integral por ciclo de vida?',
    content: (
      <p>
        La atención por ciclos de vida permite realizar intervenciones de promoción y
        prevención específicas para cada etapa del desarrollo humano, considerando las
        necesidades particulares de cada grupo etario. Incluye valoración de crecimiento,
        desarrollo, detección de alteraciones y educación en salud.
      </p>
    ),
  },
  {
    id: 'cv-2',
    title: '¿Qué finalidad y causa externa se usan en todos los ciclos?',
    content: (
      <div>
        <p className="mb-2">Para todos los códigos de ciclos de vida se usa:</p>
        <ul className="list-disc list-inside space-y-1">
          <li>
            <strong>Finalidad: 11</strong> - Promoción de la Salud y Mantenimiento
          </li>
          <li>
            <strong>Causa Externa: 40</strong> - Promoción y Mantenimiento de la Salud
            o Intervenciones Individuales
          </li>
        </ul>
      </div>
    ),
  },
  {
    id: 'cv-3',
    title: '¿Cuál es la diferencia entre los diagnósticos CIE-10 usados?',
    content: (
      <div>
        <p className="mb-2">Los diagnósticos varían según el ciclo:</p>
        <ul className="list-disc list-inside space-y-1">
          <li><strong>Z001</strong>: Examen de salud del niño (Primera infancia hasta 4 años)</li>
          <li><strong>Z002</strong>: Examen de salud del niño (5-9 años e Infancia)</li>
          <li><strong>Z003</strong>: Examen de salud del adolescente (10-17 años)</li>
          <li><strong>Z108</strong>: Examen de salud general (Juventud, Adultez y Vejez)</li>
          <li><strong>Z012</strong>: Examen odontológico (todas las edades)</li>
        </ul>
      </div>
    ),
  },
  {
    id: 'cv-4',
    title: '¿Con qué frecuencia se facturan los controles por ciclo de vida?',
    content: (
      <div>
        <p className="mb-2">La frecuencia varía según la edad:</p>
        <ul className="list-disc list-inside space-y-1">
          <li><strong>Primera Infancia</strong>: Controles frecuentes por meses y años específicos</li>
          <li><strong>Infancia y Adolescencia</strong>: Control anual</li>
          <li><strong>Juventud y Adultez</strong>: Control cada 2-5 años según rango</li>
          <li><strong>Vejez</strong>: Control cada 2-3 años según rango</li>
          <li><strong>Odontología</strong>: Anual en niños, cada 2-3 años en adultos</li>
        </ul>
      </div>
    ),
  },
  {
    id: 'cv-5',
    title: '¿Puede enfermería realizar controles de crecimiento y desarrollo?',
    content: (
      <p>
        Sí, enfermería profesional puede realizar controles de crecimiento y desarrollo
        en Primera Infancia, Infancia y Adolescencia. Los códigos específicos de
        enfermería (*890205-XX y *890305-XX) están diseñados para estas atenciones,
        alternando con los controles médicos según la edad del paciente.
      </p>
    ),
  },
];

const TablaCodigosComponent = ({ datos, titulo }: { datos: typeof primeraInfancia, titulo: string }) => (
  <div className="my-8">
    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
      {titulo}
    </h3>
    <div className="overflow-x-auto">
      <table className="w-full border-collapse text-sm">
        <thead>
          <tr className="bg-gray-100 dark:bg-gray-800">
            <th className="border border-gray-200 dark:border-gray-700 px-3 py-2 text-left font-semibold">
              CUPS
            </th>
            <th className="border border-gray-200 dark:border-gray-700 px-3 py-2 text-left font-semibold">
              Descripción
            </th>
            <th className="border border-gray-200 dark:border-gray-700 px-3 py-2 text-left font-semibold">
              CIE10
            </th>
            <th className="border border-gray-200 dark:border-gray-700 px-3 py-2 text-left font-semibold">
              Edades
            </th>
          </tr>
        </thead>
        <tbody>
          {datos.map((item, index) => (
            <tr key={index} className="hover:bg-gray-50 dark:hover:bg-gray-800/50">
              <td className="border border-gray-200 dark:border-gray-700 px-3 py-2 font-mono text-sm">
                {item.cups}
              </td>
              <td className="border border-gray-200 dark:border-gray-700 px-3 py-2 text-sm">
                {item.descripcion}
              </td>
              <td className="border border-gray-200 dark:border-gray-700 px-3 py-2 font-mono text-sm">
                {item.cie10}
              </td>
              <td className="border border-gray-200 dark:border-gray-700 px-3 py-2 text-sm">
                {item.edades}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

export default function CiclosVidaPage() {
  return (
    <SectionTemplate
      title="Ciclos de Vida"
      description="Facturación de controles según etapa del ciclo vital: desde la primera infancia hasta la vejez."
      icon={Users}
      breadcrumbs={[
        { label: 'Facturación P&P', href: '/facturacion-pyp' },
        { label: 'Ciclos de Vida' },
      ]}
      previousPage={{
        title: 'Ruta Materno Perinatal',
        href: '/facturacion-pyp/ruta-materno-perinatal',
      }}
      nextPage={{
        title: 'Vacunación',
        href: '/facturacion-pyp/vacunacion',
      }}
    >
      <ContentBlock>
        <h2>Introducción</h2>
        <p>
          La atención por ciclos de vida permite realizar intervenciones de promoción y
          prevención específicas para cada etapa del desarrollo humano, considerando las
          necesidades particulares de cada grupo etario. La Ruta Integral de Atención en
          Salud (RIAS) establece controles periódicos desde el nacimiento hasta la vejez.
        </p>

        <Alert variant="info" title="Parámetros comunes de facturación">
          <p className="mb-2">
            Todos los códigos de valoración integral usan los mismos parámetros:
          </p>
          <ul className="list-disc list-inside space-y-1">
            <li><strong>Finalidad: 11</strong> - Promoción de la Salud y Mantenimiento</li>
            <li><strong>Causa Externa: 40</strong> - Promoción y Mantenimiento de la Salud</li>
          </ul>
        </Alert>
      </ContentBlock>

      {/* 1. Primera Infancia */}
      <div className="my-8">
        <div className="bg-gradient-to-r from-pink-50 to-purple-50 dark:from-pink-900/20 dark:to-purple-900/20 p-6 rounded-lg border border-pink-200 dark:border-pink-800 mb-4">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
            1. Primera Infancia
          </h2>
          <p className="text-gray-700 dark:text-gray-300">
            Desde los <strong>7 días</strong> hasta los <strong>5 años, 11 meses y 29 días</strong>
          </p>
        </div>
        <TablaCodigosComponent datos={primeraInfancia} titulo="Códigos CUPS - Primera Infancia" />
      </div>

      {/* 2. Infancia */}
      <div className="my-8">
        <div className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 p-6 rounded-lg border border-blue-200 dark:border-blue-800 mb-4">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
            2. Infancia
          </h2>
          <p className="text-gray-700 dark:text-gray-300">
            Desde los <strong>6 años</strong> hasta los <strong>11 años, 11 meses y 29 días</strong>
          </p>
        </div>
        <TablaCodigosComponent datos={infancia} titulo="Códigos CUPS - Infancia" />
      </div>

      {/* 3. Adolescencia */}
      <div className="my-8">
        <div className="bg-gradient-to-r from-green-50 to-teal-50 dark:from-green-900/20 dark:to-teal-900/20 p-6 rounded-lg border border-green-200 dark:border-green-800 mb-4">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
            3. Adolescencia
          </h2>
          <p className="text-gray-700 dark:text-gray-300">
            Desde los <strong>12 años</strong> hasta los <strong>17 años</strong>
          </p>
        </div>
        <TablaCodigosComponent datos={adolescencia} titulo="Códigos CUPS - Adolescencia" />
      </div>

      {/* 4. Juventud */}
      <div className="my-8">
        <div className="bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 p-6 rounded-lg border border-yellow-200 dark:border-yellow-800 mb-4">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
            4. Juventud
          </h2>
          <p className="text-gray-700 dark:text-gray-300">
            Desde los <strong>18 años</strong> hasta los <strong>28 años</strong>
          </p>
        </div>
        <TablaCodigosComponent datos={juventud} titulo="Códigos CUPS - Juventud" />
      </div>

      {/* 5. Adultez */}
      <div className="my-8">
        <div className="bg-gradient-to-r from-indigo-50 to-blue-50 dark:from-indigo-900/20 dark:to-blue-900/20 p-6 rounded-lg border border-indigo-200 dark:border-indigo-800 mb-4">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
            5. Adultez
          </h2>
          <p className="text-gray-700 dark:text-gray-300">
            Desde los <strong>29 años</strong> hasta los <strong>59 años</strong>
          </p>
        </div>
        <TablaCodigosComponent datos={adultez} titulo="Códigos CUPS - Adultez" />
      </div>

      {/* 6. Vejez */}
      <div className="my-8">
        <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-6 rounded-lg border border-purple-200 dark:border-purple-800 mb-4">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
            6. Vejez
          </h2>
          <p className="text-gray-700 dark:text-gray-300">
            Desde los <strong>60 años</strong> en adelante
          </p>
        </div>
        <TablaCodigosComponent datos={vejez} titulo="Códigos CUPS - Vejez" />
      </div>

      <ContentBlock>
        <Alert variant="tip" title="Actividades complementarias">
          Además de los controles, cada ciclo de vida incluye actividades como tamizajes
          específicos, educación en salud, aplicación de escalas de riesgo y vacunación
          según edad. Estas se facturan con códigos adicionales según corresponda.
        </Alert>
      </ContentBlock>

      <ContentBlock>
        <h2>Causales frecuentes de glosa</h2>
        <Alert variant="danger" title="Evita estas situaciones">
          <ul className="list-disc list-inside space-y-1">
            <li>Usar código CUPS que no corresponde a la edad exacta del paciente</li>
            <li>No documentar adecuadamente las valoraciones realizadas</li>
            <li>Usar finalidad o causa externa incorrecta (debe ser 11 y 40 respectivamente)</li>
            <li>No aplicar el diagnóstico CIE-10 correcto según el ciclo de vida</li>
            <li>Facturar controles fuera de las frecuencias establecidas sin justificación</li>
            <li>No registrar las actividades de educación y promoción realizadas</li>
          </ul>
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

import { Baby, Smile, Star, Sprout, Briefcase, Heart, type LucideIcon } from 'lucide-react';

export interface CicloCodigo {
  cups: string;
  descripcion: string;
  finalidad: string;
  causaExterna: string;
  cie10: string;
  edades: string;
}

// Datos de Primera Infancia (7 días a 5 años, 11 meses, 29 días)
export const primeraInfancia: CicloCodigo[] = [
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
export const infancia: CicloCodigo[] = [
  { cups: '*890201-18-1', descripcion: 'PYM INFANCIA MEDICO 6 A', finalidad: '11', causaExterna: '40', cie10: 'Z002', edades: '6 Años' },
  { cups: '*890205-18-1', descripcion: 'PYM INFANCIA ENFERMERIA 7 A', finalidad: '11', causaExterna: '40', cie10: 'Z002', edades: '7 Años' },
  { cups: '*890201-18-2', descripcion: 'PYM INFANCIA MEDICO 8 A', finalidad: '11', causaExterna: '40', cie10: 'Z002', edades: '8 Años' },
  { cups: '*890205-18-2', descripcion: 'PYM INFANCIA ENFERMERIA 9 A', finalidad: '11', causaExterna: '40', cie10: 'Z002', edades: '9 Años' },
  { cups: '*890201-18-3', descripcion: 'PYM INFANCIA MEDICO 10 A', finalidad: '11', causaExterna: '40', cie10: 'Z003', edades: '10 Años' },
  { cups: '*890205-18-3', descripcion: 'PYM INFANCIA ENFERMERIA 11 A', finalidad: '11', causaExterna: '40', cie10: 'Z003', edades: '11 Años' },
  { cups: '*890203-18', descripcion: 'PYM INFANCIA ODONTOLOGIA ANUAL', finalidad: '11', causaExterna: '40', cie10: 'Z012', edades: 'Anual' },
];

// Datos de Adolescencia (12 a 17 años)
export const adolescencia: CicloCodigo[] = [
  { cups: '*890201-19-1', descripcion: 'PYM ADOLESCENCIA MEDICO 12 A', finalidad: '11', causaExterna: '40', cie10: 'Z003', edades: '12 Años' },
  { cups: '*890205-19-1', descripcion: 'PYM ADOLESCENCIA ENFERMERIA 13 A', finalidad: '11', causaExterna: '40', cie10: 'Z003', edades: '13 Años' },
  { cups: '*890201-19-2', descripcion: 'PYM ADOLESCENCIA MEDICO 14 A', finalidad: '11', causaExterna: '40', cie10: 'Z003', edades: '14 Años' },
  { cups: '*890205-19-2', descripcion: 'PYM ADOLESCENCIA ENFERMERIA 15 A', finalidad: '11', causaExterna: '40', cie10: 'Z003', edades: '15 Años' },
  { cups: '*890201-19-3', descripcion: 'PYM ADOLESCENCIA MEDICO 16 A', finalidad: '11', causaExterna: '40', cie10: 'Z003', edades: '16 Años' },
  { cups: '*890205-19-3', descripcion: 'PYM ADOLESCENCIA ENFERMERIA 17 A', finalidad: '11', causaExterna: '40', cie10: 'Z003', edades: '17 Años' },
  { cups: '*890203-19', descripcion: 'PYM ADOLESCENCIA ODONTOLOGIA ANUAL', finalidad: '11', causaExterna: '40', cie10: 'Z012', edades: 'Anual' },
];

// Datos de Juventud (18 a 28 años)
export const juventud: CicloCodigo[] = [
  { cups: '*890201-20-1', descripcion: 'PYM JUVENTUD MEDICO PRIMERA VEZ 18-23 A', finalidad: '11', causaExterna: '40', cie10: 'Z108', edades: 'De 18 a 23 Años' },
  { cups: '*890201-20-2', descripcion: 'PYM JUVENTUD MEDICO PRIMERA VEZ 24-28 A', finalidad: '11', causaExterna: '40', cie10: 'Z108', edades: 'De 24 a 28 Años' },
  { cups: '*890203-20', descripcion: 'PYM JUVENTUD ODONTOLOGIA UNA VEZ CADA DOS AÑOS', finalidad: '11', causaExterna: '40', cie10: 'Z012', edades: 'Una vez cada 2 Años' },
];

// Datos de Adultez (29 a 59 años)
export const adultez: CicloCodigo[] = [
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
export const vejez: CicloCodigo[] = [
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

export interface CicloVida {
  slug: string;
  numero: number;
  title: string;
  icon: LucideIcon;
  rangoEdad: React.ReactNode;
  descripcion: string;
  gradient: string;
  border: string;
  datos: CicloCodigo[];
}

export const ciclosVida: CicloVida[] = [
  {
    slug: 'primera-infancia',
    numero: 1,
    title: 'Primera Infancia',
    icon: Baby,
    rangoEdad: (
      <>
        Desde los <strong>7 días</strong> hasta los <strong>5 años, 11 meses y 29 días</strong>
      </>
    ),
    descripcion: 'Controles de crecimiento y desarrollo médicos y de enfermería para la primera etapa de la vida.',
    gradient: 'from-pink-50 to-purple-50 dark:from-pink-900/20 dark:to-purple-900/20',
    border: 'border-pink-200 dark:border-pink-800',
    datos: primeraInfancia,
  },
  {
    slug: 'infancia',
    numero: 2,
    title: 'Infancia',
    icon: Smile,
    rangoEdad: (
      <>
        Desde los <strong>6 años</strong> hasta los <strong>11 años, 11 meses y 29 días</strong>
      </>
    ),
    descripcion: 'Controles anuales de detección temprana durante la etapa escolar.',
    gradient: 'from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20',
    border: 'border-blue-200 dark:border-blue-800',
    datos: infancia,
  },
  {
    slug: 'adolescencia',
    numero: 3,
    title: 'Adolescencia',
    icon: Star,
    rangoEdad: (
      <>
        Desde los <strong>12 años</strong> hasta los <strong>17 años</strong>
      </>
    ),
    descripcion: 'Controles anuales enfocados en el desarrollo y los riesgos propios de la adolescencia.',
    gradient: 'from-green-50 to-teal-50 dark:from-green-900/20 dark:to-teal-900/20',
    border: 'border-green-200 dark:border-green-800',
    datos: adolescencia,
  },
  {
    slug: 'juventud',
    numero: 4,
    title: 'Juventud',
    icon: Sprout,
    rangoEdad: (
      <>
        Desde los <strong>18 años</strong> hasta los <strong>28 años</strong>
      </>
    ),
    descripcion: 'Valoración integral de primera vez y odontología por rangos de edad.',
    gradient: 'from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20',
    border: 'border-yellow-200 dark:border-yellow-800',
    datos: juventud,
  },
  {
    slug: 'adultez',
    numero: 5,
    title: 'Adultez',
    icon: Briefcase,
    rangoEdad: (
      <>
        Desde los <strong>29 años</strong> hasta los <strong>59 años</strong>
      </>
    ),
    descripcion: 'Valoración integral por rangos quinquenales y odontología periódica.',
    gradient: 'from-indigo-50 to-blue-50 dark:from-indigo-900/20 dark:to-blue-900/20',
    border: 'border-indigo-200 dark:border-indigo-800',
    datos: adultez,
  },
  {
    slug: 'vejez',
    numero: 6,
    title: 'Vejez',
    icon: Heart,
    rangoEdad: (
      <>
        Desde los <strong>60 años</strong> en adelante
      </>
    ),
    descripcion: 'Valoración integral del adulto mayor por rangos de edad y odontología.',
    gradient: 'from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20',
    border: 'border-purple-200 dark:border-purple-800',
    datos: vejez,
  },
];

export function getCicloBySlug(slug: string): CicloVida | undefined {
  return ciclosVida.find((ciclo) => ciclo.slug === slug);
}

interface TablaCodigosCicloProps {
  datos: CicloCodigo[];
  titulo: string;
}

export function TablaCodigosCiclo({ datos, titulo }: TablaCodigosCicloProps) {
  return (
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
}

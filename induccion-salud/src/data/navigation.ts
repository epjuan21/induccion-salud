import {
  Home,
  Shield,
  DollarSign,
  FileText,
  Bug,
  GraduationCap,
  BarChart3,
  type LucideIcon
} from 'lucide-react';

export interface NavItem {
  title: string;
  href: string;
  icon?: LucideIcon;
  children?: NavItem[];
}

export const navigation: NavItem[] = [
  {
    title: 'Inicio',
    href: '/',
    icon: Home,
  },
  {
    title: 'Seguridad de la Información',
    href: '/seguridad-informacion',
    icon: Shield,
    children: [
      {
        title: 'Manejo Correcto de Equipos de Cómputo',
        href: '/seguridad-informacion/manejo-equipos',
      },
    ],
  },
  {
    title: 'Facturación de Servicios P&P',
    href: '/facturacion-pyp',
    icon: DollarSign,
    children: [
      {
        title: 'Planificación Familiar',
        href: '/facturacion-pyp/planificacion-familiar',
      },
      {
        title: 'Ruta Materno Perinatal',
        href: '/facturacion-pyp/ruta-materno-perinatal',
      },
      {
        title: 'Ciclos de Vida',
        href: '/facturacion-pyp/ciclos-vida',
      },
      {
        title: 'Vacunación',
        href: '/facturacion-pyp/vacunacion',
      },
      {
        title: 'Higiene Oral',
        href: '/facturacion-pyp/higiene-oral',
      },
    ],
  },
  {
    title: 'Diligenciamiento de Historias Clínicas',
    href: '/historias-clinicas',
    icon: FileText,
    children: [
      {
        title: 'Planificación Familiar',
        href: '/historias-clinicas/planificacion-familiar',
      },
      {
        title: 'Ruta Materno Perinatal',
        href: '/historias-clinicas/ruta-materno-perinatal',
      },
      {
        title: 'Ciclos de Vida',
        href: '/historias-clinicas/ciclos-vida',
      },
    ],
  },
  {
    title: 'Vigilancia Epidemiológica',
    href: '/vigilancia-epidemiologica',
    icon: Bug,
    children: [
      {
        title: 'Conceptos Generales',
        href: '/vigilancia-epidemiologica/conceptos-generales',
      },
      {
        title: 'Eventos Clave',
        href: '/vigilancia-epidemiologica/eventos-clave',
        children: [
          {
            title: 'Dengue',
            href: '/vigilancia-epidemiologica/eventos-clave/dengue',
          },
          {
            title: 'APTR',
            href: '/vigilancia-epidemiologica/eventos-clave/aptr',
          },
        ],
      },
      {
        title: 'Fichas',
        href: '/vigilancia-epidemiologica/fichas',
      },
    ],
  },
  {
    title: 'Gráficos',
    href: '/produccion',
    icon: BarChart3,
    children: [
      {
        title: 'Primeras Causas',
        href: '/produccion/primeras-causas',
        children: [
          {
            title: 'Egresos',
            href: '/produccion/egresos',
          },
          {
            title: 'Medicina General',
            href: '/produccion/medicina-general',
          },
        ],
      },
      {
        title: 'Producción',
        href: '/produccion/reportes',
        children: [
          {
            title: 'Consultas',
            href: '/produccion/consultas',
          },
          {
            title: 'Laboratorio',
            href: '/produccion/laboratorio',
          },
        ],
      },
    ],
  },
  {
    title: 'Capacitaciones',
    href: '/capacitaciones',
    icon: GraduationCap,
    children: [
      {
        title: 'Afiliaciones en Línea',
        href: '/capacitaciones/aps',
      },
      {
        title: 'Hospital',
        href: '/capacitaciones/hospital',
      },
      {
        title: 'IHCE',
        href: '/capacitaciones/ihce',
      },
      {
        title: 'MIPRES',
        href: '/capacitaciones/mipres',
      },
      {
        title: 'Xenco',
        href: '/capacitaciones/xenco',
      },
    ],
  },
];

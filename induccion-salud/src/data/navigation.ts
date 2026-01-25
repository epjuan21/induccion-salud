import {
  Home,
  Shield,
  DollarSign,
  FileText,
  Bug,
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
      },
    ],
  },
];

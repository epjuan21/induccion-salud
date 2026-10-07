import {
  Home,
  Shield,
  DollarSign,
  FileText,
  Bug,
  GraduationCap,
  BarChart3,
  Building2,
  BookOpen,
  Palette,
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
    title: 'Facturación de Servicios PYM',
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
        children: [
          {
            title: 'Clasificación por Edad',
            href: '/facturacion-pyp/ciclos-vida/clasificacion',
          },
          {
            title: 'Primera Infancia',
            href: '/facturacion-pyp/ciclos-vida/primera-infancia',
          },
          {
            title: 'Infancia',
            href: '/facturacion-pyp/ciclos-vida/infancia',
          },
          {
            title: 'Adolescencia',
            href: '/facturacion-pyp/ciclos-vida/adolescencia',
          },
          {
            title: 'Juventud',
            href: '/facturacion-pyp/ciclos-vida/juventud',
          },
          {
            title: 'Adultez',
            href: '/facturacion-pyp/ciclos-vida/adultez',
          },
          {
            title: 'Vejez',
            href: '/facturacion-pyp/ciclos-vida/vejez',
          },
        ],
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
          {
            title: 'Producción Egresos',
            href: '/produccion/produccion-egresos',
          },
          {
            title: 'Higiene Oral',
            href: '/produccion/higiene-oral',
          },
          {
            title: 'Distribución Consultas',
            href: '/produccion/distribucion-consultas',
          },
          {
            title: 'Medicamentos',
            href: '/produccion/medicamentos',
          },
          {
            title: 'Procedimientos PyM',
            href: '/produccion/procedimientos-pym',
          },
          {
            title: 'Rayos X',
            href: '/produccion/rayos-x',
          },
          {
            title: 'Remisiones',
            href: '/produccion/remisiones',
          },
          {
            title: 'Triage',
            href: '/produccion/triage',
          },
        ],
      },
      {
        title: 'Población',
        href: '/produccion/poblacion',
        children: [
          {
            title: 'Aseguramiento',
            href: '/produccion/poblacion/aseguramiento',
          },
        ],
      },
      {
        title: 'Oportunidad',
        href: '/produccion/oportunidad',
        children: [
          {
            title: 'Consulta',
            href: '/produccion/oportunidad/consulta',
          },
          {
            title: 'Triage',
            href: '/produccion/oportunidad/triage',
          },
        ],
      },
      {
        title: 'Coberturas',
        href: '/produccion/coberturas',
        children: [
          {
            title: 'Saviasalud',
            href: '/produccion/coberturas/saviasalud',
          },
          {
            title: 'NuevaEPS',
            href: '/produccion/coberturas/nueva-eps',
          },
        ],
      },
    ],
  },
  {
    title: 'EAPB',
    href: '/eapb',
    icon: Building2,
    children: [
      {
        title: 'SURA',
        href: '/eapb/sura',
        children: [
          {
            title: 'Gestión Usuarios',
            href: '/eapb/sura/gestion-usuarios',
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
  {
    title: 'Documentación',
    href: '/documentacion',
    icon: BookOpen,
    children: [
      {
        title: 'Guías Saviasalud',
        href: '/documentacion/guias-saviasalud',
      },
      {
        title: 'Rutas Saviasalud',
        href: '/documentacion/rutas-saviasalud',
      },
      {
        title: 'Guías Sura',
        href: '/documentacion/guias-sura',
      },
      {
        title: 'Protocolos Institucionales',
        href: '/documentacion/protocolos-institucionales',
      },
    ],
  },
  {
    title: 'Otras Referencias',
    href: '/otras-referencias',
    icon: Palette,
    children: [
      {
        title: 'Paleta Ciclos de Vida',
        href: '/otras-referencias/paleta-ciclos-vida',
      },
    ],
  },
];

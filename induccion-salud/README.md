# Portal de Inducción — Personal de Salud

Aplicación web educativa para facilitar el proceso de incorporación del personal nuevo en una institución de salud. Presenta contenido formativo organizado por módulos temáticos, con material explicativo, recursos multimedia y evaluaciones interactivas.

## Tecnologías

- **Next.js 16** (App Router)
- **React 19** + **TypeScript**
- **Tailwind CSS v4**
- **Framer Motion** — animaciones
- **Recharts** — gráficas y visualizaciones
- **next-themes** — modo claro/oscuro
- **Lucide React** — iconos

## Módulos del portal

| Módulo | Ruta |
|--------|------|
| Página principal | `/` |
| Seguridad de la Información | `/seguridad-informacion` |
| Facturación de Servicios P&P | `/facturacion-pyp` |
| Historias Clínicas | `/historias-clinicas` |
| Producción | `/produccion` |
| Vigilancia Epidemiológica | `/vigilancia-epidemiologica` |
| Capacitaciones | `/capacitaciones` |

## Instalación y desarrollo

```bash
# Clonar el repositorio
git clone https://github.com/epjuan21/induccion-salud.git
cd induccion-salud

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
```

Abrir [http://localhost:3000](http://localhost:3000) en el navegador.

## Scripts disponibles

```bash
npm run dev      # Servidor de desarrollo (con hot reload)
npm run build    # Build de producción
npm run start    # Servidor de producción
npm run lint     # Verificar errores de ESLint
```

## Estructura del proyecto

```
src/
├── app/                    # Rutas y páginas (Next.js App Router)
│   ├── capacitaciones/
│   ├── facturacion-pyp/
│   ├── historias-clinicas/
│   ├── produccion/
│   ├── seguridad-informacion/
│   └── vigilancia-epidemiologica/
├── components/
│   ├── charts/             # Componentes de gráficas (Recharts)
│   ├── content/            # Bloques de contenido editorial
│   ├── layout/             # Header, Footer, Sidebar, etc.
│   ├── templates/          # Plantillas de módulos y secciones
│   └── ui/                 # Componentes base (Button, Card, Quiz, etc.)
├── data/
│   └── navigation.ts       # Estructura de navegación del portal
├── hooks/                  # Custom hooks
└── lib/
    └── utils.ts
```

## Documentación

- [Arquitectura](docs/project-overview/ARCHITECTURE.md)
- [Funcionalidades](docs/project-overview/FUNCTIONALITY.md)
- [Guía de desarrollo](docs/project-overview/DEVELOPMENT.md)
- [Despliegue](docs/project-overview/DEPLOYMENT.md)
- [CI/CD](docs/project-overview/CICD.md)

## Despliegue

La forma más sencilla de desplegar es con [Vercel](https://vercel.com/new):

1. Conectar el repositorio en Vercel
2. Configurar el directorio raíz como `induccion-salud/`
3. Vercel detecta automáticamente Next.js y aplica la configuración correcta

Ver [DEPLOYMENT.md](docs/project-overview/DEPLOYMENT.md) para más opciones.

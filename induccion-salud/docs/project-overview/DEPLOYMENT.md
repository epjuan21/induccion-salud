# Despliegue

## 1. Entornos existentes

> *No se encontró evidencia de configuración de múltiples entornos (dev, staging, producción) en el proyecto.* No existen archivos de configuración por entorno ni variables de entorno. La distinción se limita a los modos de ejecución de Next.js: **desarrollo** (`next dev`) y **producción** (`next build` + `next start`).

## 2. Plataforma de hosting

> *No se encontró evidencia de una plataforma de hosting configurada explícitamente (no hay `vercel.json`, Dockerfile, ni manifiestos de despliegue).*

Al tratarse de un proyecto creado con `create-next-app`, la plataforma recomendada por defecto es **Vercel** (creadores de Next.js), según indica el [README.md](../../README.md). Otras opciones compatibles con un proyecto Next.js estándar son: Netlify, contenedores Docker, o cualquier servidor Node.js capaz de ejecutar `next start`.

## 3. Proceso de build para producción

```bash
# Generar el build optimizado de producción
npm run build

# Servir el build de producción
npm run start
```

- `npm run build` ejecuta `next build`, que compila la aplicación, optimiza los assets, realiza el tree-shaking y genera la salida en la carpeta `.next/`.
- `npm run start` ejecuta `next start`, sirviendo la aplicación compilada (por defecto en el puerto 3000).

```mermaid
flowchart LR
    A[Código fuente] --> B[npm run build]
    B --> C[Compilación + optimización]
    C --> D[Salida en .next/]
    D --> E[npm run start / Plataforma de hosting]
    E --> F[Aplicación en producción]
```

## 4. Configuración de infraestructura

> *No se encontró evidencia de Dockerfile, docker-compose, configuración de IIS ni reverse proxy en el proyecto.*

El despliegue depende de la plataforma elegida:
- **Vercel / Netlify:** detectan Next.js automáticamente; basta con conectar el repositorio. El comando de build es `npm run build` y la salida se gestiona por la plataforma.
- **Servidor propio / contenedor:** se requeriría añadir un `Dockerfile` (no presente actualmente) o un proceso que ejecute `npm run build` seguido de `npm run start` detrás de un reverse proxy (por ejemplo Nginx).

## 5. Variables de entorno de producción

> *No se encontró evidencia de variables de entorno en el proyecto.* La aplicación no requiere secretos ni configuración externa para funcionar en producción.

## 6. Estrategia de base de datos en producción

> *No aplica.* El proyecto no utiliza base de datos; todo el contenido es estático y está embebido en el código. No hay migraciones ni estrategia de backups.

## 7. Sugerencia de despliegue (no presente actualmente)

Dado el stack (Next.js estático/SSR sin dependencias externas), el despliegue más simple sería:

1. Conectar el repositorio a **Vercel**.
2. Configurar el directorio raíz del proyecto en `induccion-salud/` (si está anidado).
3. Build command: `npm run build` · Output: gestionado por Vercel.
4. Despliegue automático en cada push a la rama principal.

Alternativamente, para un contenedor Docker mínimo se podría usar la imagen oficial `node:20-alpine`, ejecutar `npm ci && npm run build` y exponer `npm run start` en el puerto 3000.

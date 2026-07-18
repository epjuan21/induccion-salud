# Ejecución en Desarrollo

## 1. Prerrequisitos

- **Node.js** 18.18 o superior (recomendado 20 LTS o superior, requerido por Next.js 16).
- **npm** (incluido con Node.js). El proyecto también es compatible con `yarn`, `pnpm` o `bun`.
- Editor recomendado: **Visual Studio Code** con extensiones de ESLint y Tailwind CSS IntelliSense.

> *No se requiere base de datos local: el contenido es estático y no hay servicios externos.*

## 2. Pasos para clonar, instalar y ejecutar

```bash
# 1. Clonar el repositorio
git clone <url-del-repositorio>
cd induccion-salud

# 2. Instalar dependencias
npm install

# 3. Ejecutar el servidor de desarrollo
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en el navegador. La página se actualiza automáticamente al editar los archivos (Fast Refresh).

> **Nota:** si la carpeta del proyecto Next.js (`induccion-salud/`) está anidada dentro de un repositorio más grande, ejecuta los comandos desde dentro de `induccion-salud/`.

## 3. Variables de entorno

> *No se encontró evidencia de uso de variables de entorno en el proyecto.* No existen archivos `.env*` ni referencias a `process.env` en el código. La aplicación no requiere configuración de entorno para ejecutarse.

## 4. Comandos útiles

Definidos en [package.json](../../package.json):

| Comando | Descripción |
|---------|-------------|
| `npm run dev` | Inicia el servidor de desarrollo con Fast Refresh. |
| `npm run build` | Genera el build de producción optimizado. |
| `npm run start` | Sirve el build de producción (requiere `build` previo). |
| `npm run lint` | Ejecuta ESLint sobre el proyecto. |

> *No hay scripts de test, migraciones ni seeds configurados en el proyecto.*

## 5. Configuración relevante

- **TypeScript** ([tsconfig.json](../../tsconfig.json)): modo `strict` activado y alias de importación `@/*` → `./src/*`.
- **ESLint** ([eslint.config.mjs](../../eslint.config.mjs)): usa la configuración `eslint-config-next` (flat config).
- **Tailwind CSS v4** ([postcss.config.mjs](../../postcss.config.mjs)): integrado mediante el plugin `@tailwindcss/postcss`. El tema personalizado (colores, espaciado, animaciones) se define en [src/app/globals.css](../../src/app/globals.css) con la directiva `@theme`.
- **Next.js** ([next.config.ts](../../next.config.ts)): configuración por defecto, sin opciones personalizadas.

## 6. Troubleshooting de problemas comunes

| Problema | Causa probable | Solución |
|----------|----------------|----------|
| `next: command not found` | Dependencias no instaladas. | Ejecuta `npm install` antes de `npm run dev`. |
| Versión de Node incompatible | Node anterior a 18.18. | Actualiza a Node 20 LTS o superior. |
| El puerto 3000 está ocupado | Otro proceso usa el puerto. | Ejecuta `npm run dev -- -p 3001` para usar otro puerto. |
| Estilos de Tailwind no aplican | Caché de build corrupta. | Elimina la carpeta `.next` y reinicia `npm run dev`. |
| Cambios no se reflejan | Caché del navegador o de Next. | Recarga forzada (Ctrl+Shift+R) o borra `.next`. |
| Advertencia de hidratación por el tema | Normal con `next-themes`. | Está mitigada con `suppressHydrationWarning` en el `<html>` del layout raíz. |

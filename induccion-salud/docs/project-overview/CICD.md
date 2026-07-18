# CI/CD

## 1. Plataforma de CI/CD utilizada

> *No se encontró evidencia de configuración de CI/CD en el proyecto.* No existen archivos `.github/workflows/`, `azure-pipelines.yml`, `.gitlab-ci.yml` ni configuraciones equivalentes.

## 2. Pipelines / workflows existentes

> *No aplica.* Actualmente no hay pipelines de integración ni despliegue continuo definidos.

## 3. Sugerencia de pipeline básico (no presente actualmente)

Dado que el stack es **Next.js 16 + TypeScript + ESLint**, a continuación se propone un pipeline básico apropiado usando **GitHub Actions**. Este workflow ejecuta lint y build en cada push y pull request hacia la rama principal.

### Etapas propuestas

```mermaid
flowchart LR
    A[Push / Pull Request] --> B[Checkout del código]
    B --> C[Setup Node.js 20]
    C --> D[npm ci]
    D --> E[npm run lint]
    E --> F[npm run build]
    F --> G[Despliegue opcional]
```

| Etapa | Acción |
|-------|--------|
| **Install** | `npm ci` — instalación reproducible de dependencias. |
| **Lint** | `npm run lint` — valida el código con ESLint. |
| **Build** | `npm run build` — verifica que la aplicación compila sin errores. |
| **Deploy** (opcional) | Despliegue a Vercel u otra plataforma en push a `main`. |

### Ejemplo de workflow (`.github/workflows/ci.yml`)

```yaml
name: CI

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  build:
    runs-on: ubuntu-latest
    defaults:
      run:
        working-directory: induccion-salud
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: npm
          cache-dependency-path: induccion-salud/package-lock.json

      - name: Install dependencies
        run: npm ci

      - name: Lint
        run: npm run lint

      - name: Build
        run: npm run build
```

> **Nota:** ajusta `working-directory` y `cache-dependency-path` si el proyecto Next.js no está anidado en `induccion-salud/`.

## 4. Triggers sugeridos

- **`push` a `main`**: ejecuta lint + build (y despliegue si se configura).
- **`pull_request` a `main`**: ejecuta lint + build como verificación previa al merge.

## 5. Secrets / variables requeridas

Para el pipeline de CI propuesto (lint + build) **no se requieren secrets**, ya que la aplicación no usa variables de entorno.

Si se añadiera una etapa de despliegue a Vercel, se necesitarían los siguientes secrets en el repositorio de GitHub:

| Secret | Descripción |
|--------|-------------|
| `VERCEL_TOKEN` | Token de acceso de la cuenta de Vercel. |
| `VERCEL_ORG_ID` | Identificador de la organización en Vercel. |
| `VERCEL_PROJECT_ID` | Identificador del proyecto en Vercel. |

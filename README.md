# Constructora KALI

Sitio corporativo de Constructora KALI, desarrollado como una landing page
responsiva con React y Vite. Presenta los servicios, proyectos, aliados y vías
de contacto de la empresa.

## Requisitos

- Node.js 20.19, 22.12 o una versión posterior compatible
- pnpm 11

## Desarrollo local

```bash
pnpm install
pnpm dev
```

El servidor de desarrollo se abre en `http://localhost:3000`.

## Comandos

```bash
pnpm dev      # Inicia Vite con recarga en caliente
pnpm lint     # Ejecuta ESLint
pnpm build    # Genera la versión de producción en dist/
pnpm preview  # Sirve localmente el build de producción
```

## Estructura

```text
src/
├── blocks/       Estilos CSS por bloque
├── components/   Secciones y componentes de interfaz
├── data/         Proyectos y aliados
├── hooks/        Lógica reutilizable de React
├── images/       Imágenes utilizadas por el sitio
└── vendor/       Estilos externos normalizados
```

La aplicación es una sola página. `Main.jsx` compone las distintas secciones y
la navegación utiliza enlaces internos. Los carruseles de proyectos se
implementan con Embla Carousel.

## Despliegue

El proyecto se despliega en Vercel. El comando de construcción es
`pnpm build` y el directorio de salida es `dist`.

Si el repositorio está conectado a Vercel, cada cambio enviado a la rama de
producción crea un nuevo despliegue automáticamente.

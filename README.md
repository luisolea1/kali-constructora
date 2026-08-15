# Constructora KALI

Sitio corporativo de Constructora KALI, desarrollado como una experiencia web de una sola página para presentar sus servicios, proyectos, aliados estratégicos y canales de contacto.

La interfaz combina una dirección visual sobria con navegación fluida, animaciones respetuosas de las preferencias del usuario y un portafolio fotográfico optimizado para dispositivos móviles, tabletas y pantallas de escritorio.

## Características principales

- Landing page completamente responsiva para arquitectura y construcción.
- Navegación flotante y translúcida con efecto de desenfoque.
- Detección automática de la sección activa mediante `IntersectionObserver`.
- Encabezado que se oculta al bajar y reaparece al desplazarse hacia arriba.
- Menú móvil accesible con cierre mediante la tecla `Escape`.
- Indicador animado del progreso de lectura.
- Aparición progresiva de secciones y proyectos al entrar en pantalla.
- Portafolio con carruseles independientes y controles accesibles.
- Visualización inicial de dos proyectos con controles “Ver más” y “Ver menos”.
- Botón “Ver menos” persistente mientras se recorren los proyectos adicionales.
- Retorno suave al final del segundo proyecto al contraer el portafolio, conservando el foco del teclado.
- Presentación completa de fotografías verticales en escritorio y tablet.
- Fondos difuminados que heredan automáticamente los colores de cada fotografía.
- Imágenes WebP optimizadas y vista previa para compartir el sitio en redes sociales.
- Enlace directo de contacto mediante WhatsApp.

## Tecnologías

| Tecnología | Uso en el proyecto |
| --- | --- |
| React 19 | Componentes, estado y composición de la interfaz. |
| Vite 8 | Entorno de desarrollo, recarga en caliente y build de producción. |
| Motion for React | Animaciones de entrada, progreso de scroll y soporte para movimiento reducido. |
| Embla Carousel | Carruseles táctiles y responsivos para las galerías de proyectos. |
| CSS | Sistema visual responsivo, variables globales, efectos translúcidos y estilos por bloque. |
| Fontsource | Distribución local de las tipografías Inter y Cormorant Garamond. |
| Sharp | Conversión y optimización automatizada de imágenes JPG a WebP. |
| ESLint | Análisis estático y control de calidad del código. |

## Diseño y tipografía

El sistema visual utiliza una paleta arquitectónica basada en negro carbón, blanco cálido y acentos dorados. Los colores principales y las medidas generales se administran mediante variables CSS en `src/index.css`.

- **Cormorant Garamond 500:** títulos principales, títulos de sección y nombres de proyectos.
- **Inter 400/500:** navegación, párrafos, botones, etiquetas y elementos funcionales.
- **Encabezado translúcido:** `backdrop-filter`, bordes suaves y sombra adaptativa durante el scroll.
- **Diseño responsivo:** ajustes específicos para escritorio, laptop, tablet y móvil.

## Animaciones e interacción

La aplicación utiliza `LazyMotion` con `domAnimation` para cargar únicamente las funciones de animación necesarias.

### Aparición durante el scroll

`ScrollReveal` anima las secciones desde una posición vertical desplazada y con opacidad inicial reducida. Los proyectos emplean el mismo lenguaje visual con tiempos diferenciados para los elementos revelados dinámicamente.

### Progreso de lectura

`ScrollProgress` conecta `useScroll` con `useSpring` para representar el avance de la página mediante una línea dorada suavizada en la parte superior.

### Navegación inteligente

El encabezado utiliza `requestAnimationFrame` para responder eficientemente al desplazamiento. También identifica la sección visible y actualiza el enlace activo de la navegación.

### Preferencias de movimiento

Las animaciones consultan `prefers-reduced-motion`. Cuando el usuario solicita menos movimiento, se eliminan las transiciones no esenciales, se desactiva el indicador animado y el portafolio evita desplazamientos suaves innecesarios.

## Portafolio de proyectos

Los proyectos se mantienen como módulos de datos independientes dentro de `src/data/projects`. Cada entrada incluye:

- título;
- categoría;
- ubicación;
- descripción;
- colección de imágenes.

La sección muestra inicialmente los dos primeros proyectos. El resto se monta únicamente después de activar “Ver más”, reduciendo el trabajo inicial del navegador.

Al seleccionar “Ver menos” desde cualquier punto del portafolio ampliado:

1. la página regresa suavemente al final del segundo proyecto;
2. espera el evento `scrollend` o un temporizador de respaldo;
3. desmonta los proyectos adicionales;
4. devuelve el foco al botón sin generar un segundo salto de scroll.

### Carruseles e imágenes

Cada proyecto dispone de un carrusel Embla con controles anterior/siguiente, estados deshabilitados y etiquetas ARIA descriptivas.

En escritorio y tablet, las fotografías usan `object-fit: contain` para preservar el encuadre completo. El espacio lateral se rellena con una versión ampliada y difuminada de la misma imagen, por lo que el fondo cambia de manera natural en cada diapositiva. En móvil se utiliza `object-fit: cover` para aprovechar mejor el formato vertical disponible.

## Accesibilidad

- Estructura semántica con encabezado, navegación, contenido principal, secciones y pie de página.
- Regiones y diapositivas del carrusel identificadas mediante ARIA.
- Estados `aria-expanded`, `aria-controls` y `aria-current` en controles interactivos.
- Contornos visibles para navegación mediante teclado.
- Cierre del menú móvil con `Escape`.
- Restauración del foco después de contraer el portafolio.
- Compatibilidad con `prefers-reduced-motion`.
- Textos alternativos descriptivos en imágenes y logotipos.

## SEO y vista previa social

`index.html` incluye:

- título y descripción orientados a arquitectura y construcción en Morelos;
- idioma y configuración regional en español de México;
- metadatos Open Graph;
- Twitter Card de formato amplio;
- imagen social WebP de `1200 × 630`;
- color del navegador y favicon del proyecto.

La imagen utilizada al compartir el enlace se encuentra en `public/social-preview.webp`.

## Rendimiento

- Imágenes principales y galerías en formato WebP.
- Carga diferida (`loading="lazy"`) y decodificación asíncrona en los carruseles.
- Prioridad alta para la imagen principal del hero.
- Montaje diferido de los proyectos adicionales.
- Carga optimizada de Motion mediante `LazyMotion`.
- Tipografías servidas desde el propio paquete, sin depender de solicitudes externas en tiempo de ejecución.
- Script de optimización con Sharp y calidad WebP configurable.

## Requisitos

- Node.js `20.19.x`, `22.12.x` o una versión posterior compatible.
- pnpm `11.x`.

## Instalación y desarrollo local

```bash
pnpm install
pnpm dev
```

Vite inicia el servidor de desarrollo en:

```text
http://localhost:3000
```

## Scripts disponibles

| Comando | Descripción |
| --- | --- |
| `pnpm dev` | Inicia el servidor de desarrollo con recarga en caliente. |
| `pnpm build` | Genera el build optimizado dentro de `dist/`. |
| `pnpm preview` | Sirve localmente el build de producción. |
| `pnpm lint` | Analiza el proyecto con ESLint. |
| `pnpm optimize:images` | Convierte los archivos JPG de `src/images` a WebP mediante Sharp. |

## Estructura del proyecto

```text
.
├── public/
│   ├── favicon.png
│   └── social-preview.webp
├── scripts/
│   └── optimize-images.mjs
├── src/
│   ├── blocks/                 Estilos CSS organizados por bloque
│   ├── components/             Secciones y componentes reutilizables
│   │   ├── ProjectCarousel/
│   │   ├── Projects/
│   │   ├── ScrollProgress/
│   │   └── ScrollReveal/
│   ├── data/
│   │   ├── partners/
│   │   └── projects/           Contenido independiente por proyecto
│   ├── hooks/
│   │   └── useCarousel.js
│   ├── images/                 Recursos originales y optimizados
│   ├── vendor/
│   │   └── normalize.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
└── vite.config.js
```

## Agregar un proyecto

1. Guarda las imágenes en una carpeta nueva dentro de `src/images/projects/`.
2. Ejecuta `pnpm optimize:images` si las fuentes están en formato JPG.
3. Crea un módulo en `src/data/projects/` siguiendo la estructura de los proyectos existentes.
4. Importa el módulo y agrégalo al arreglo exportado por `src/data/projects/index.js`.
5. Ejecuta `pnpm lint` y `pnpm build` antes de publicar.

El orden del arreglo determina cuáles son los dos proyectos que aparecen inicialmente.

## Validación antes de producción

```bash
pnpm lint
pnpm build
```

También se recomienda revisar visualmente los puntos de quiebre principales:

- `1440 × 900` — escritorio;
- `1024 × 768` — laptop;
- `768 × 1024` — tablet;
- `390 × 844` — móvil.

## Despliegue

El proyecto está preparado para desplegarse como sitio estático. En Vercel se utiliza:

- **Build command:** `pnpm build`
- **Output directory:** `dist`

Cada actualización de la rama configurada como producción puede generar un nuevo despliegue automático.

## Uso

Proyecto privado de Constructora KALI. Todos los derechos reservados.

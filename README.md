# Sitio institucional GAM Ixiamas

Web estática multipágina para el Gobierno Autónomo Municipal de Ixiamas, construida con HTML, CSS y JavaScript puro.

## Cómo abrir localmente

Abrir `index.html` directamente en el navegador.

## Publicación

Puede publicarse en cualquier hosting estático, por ejemplo GitHub Pages, Netlify, Vercel, cPanel o un servidor web tradicional. Subir todo el contenido de esta carpeta manteniendo la estructura de archivos.

## Dominio y SEO

Antes de publicar, reemplazar `https://TU-DOMINIO.com/` por el dominio oficial en:

- Metadatos `canonical`, Open Graph y Twitter Cards de los archivos HTML.
- `sitemap.xml`
- `robots.txt`
- JSON-LD de `index.html`

Subir `sitemap.xml` y `robots.txt` junto al sitio publicado.

## Archivos principales

- `index.html`
- `institucion.html`
- `autoridades.html`
- `historia.html`
- `geografia.html`
- `cultura.html`
- `conservacion.html`
- `desarrollo.html`
- `normativa.html`
- `transparencia.html`
- `documentos.html`
- `contacto.html`
- `desarrolladores.html`
- `sitemap.xml`
- `robots.txt`

## Organización de activos

- `assets/css/main.css`: punto de entrada de estilos.
- `assets/css/base.css`: variables, reset y estilos base.
- `assets/css/layout.css`: contenedores, grillas, navbar, heroes y footer.
- `assets/css/components.css`: botones, tarjetas, listas, documentos, formularios y componentes reutilizables.
- `assets/css/pages.css`: estilos específicos de páginas.
- `assets/css/responsive.css`: reglas responsive.
- `assets/js/navigation.js`: menú móvil, submenús y enlace activo.
- `assets/js/filters.js`: filtros del repositorio de documentos.
- `assets/js/main.js`
- `assets/img/`
- `assets/docs/`
- `site.webmanifest`

El CSS usa un patrón de componentes estáticos y se carga desde `main.css` con imports ordenados.

## Recomendaciones antes de publicar

- Validar teléfonos, dirección, correo institucional, horarios, redes sociales y documentos oficiales.
- Cargar los PDF oficiales en `assets/docs/` y reemplazar los estados “Pendiente de carga” por enlaces reales.
- Comprimir imágenes y, si es posible, generar versiones WebP para mejorar rendimiento.
- Revisar que el favicon `assets/img/favicon.png` sea reemplazado por un logo oficial cuando exista.
- Confirmar que no se publiquen páginas escaneadas como contenido principal.

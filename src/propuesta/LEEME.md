# Rediseño del sitio (propuesta)

Esta carpeta tiene todo lo del rediseño de las páginas públicas. El panel `/admin` no cambia.

## Qué hay acá

| Archivo | Para qué |
|---|---|
| `veb.css` | Todos los estilos del rediseño. Solo aplican dentro de `<div class="veb">` (ver `Layout` en `App.jsx`), así no tocan el panel. |
| `Header.jsx`, `Footer.jsx`, `RedesSociales.jsx` | Encabezado (menú, botón EN/ES, menú del celular), pie y botón flotante de WhatsApp. Los anteriores siguen en `components/UI/` por si hay que volver. |
| `VebContactForm.jsx` | Formulario de contacto con el diseño nuevo. **Envía igual que antes** (Netlify Forms, form `contacto`) y si falla ofrece WhatsApp o mail. |
| `useVeb.js`, `runtime.js` | Hook común de las páginas: aparición al hacer scroll, contadores y el script de cada página, que se limpia al cambiar de página. |
| `scripts/*.js` | Comportamiento propio de cada página (mapa de bancos y carrusel, caminito de etapas, filtros de logros, etc.). |
| `data/*.json` | Datos fijos del rediseño: bancos con sus fotos y ubicación, dibujo del mapa, logos de la pasarela, curva del camino de la home. |
| `textos.js` | Textos nuevos en español e inglés. Se suman a `context/translations.js`. |

Las páginas están en `src/pages/` (mismos nombres que antes) y las imágenes nuevas en `public/veb/`.

## Contenido editable desde el panel

Sigue funcionando igual. Las páginas leen de los mismos JSON:

- **Números de la portada** → `data/stats.json`
- **Logros** → `data/achievements.json`. Se agregaron campos opcionales que el panel conserva al guardar: `anio`, `tipo` (`premio` / `congreso` / `reco`), `lugar` (`{es, en}`) y `primero` (`latam` / `mundo`: va destacado arriba). Un logro sin `anio` aparece en "Otros".
- **Proyectos** → `data/projects.json`. Campos opcionales nuevos: `corto` (etiqueta del índice, por idioma) y `accion` (botón principal: `href`, o `whatsapp` con la clave del mensaje en las traducciones).
- **Opciones de "¿Cómo puedo involucrarme?"** → `data/involvement.json` + las claves `involvement_*` de siempre.

## Inglés

- En `textos.js`, `en` tiene solo las **traducciones oficiales** (las del sitio en inglés). Si un texto no tiene traducción, en inglés se ve en español.
- `enBorradores` son traducciones nuevas **todavía no aprobadas**: no se usan. Cuando se aprueben, se pasan a `en`.

## Origen

Se generó a partir de la propuesta navegable (HTML) con scripts de conversión que no forman parte del repo. Desde acá se puede editar normalmente.

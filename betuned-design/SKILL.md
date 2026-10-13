---
name: "betuned-design"
description: "Sistema de diseño BeTuned para cualquier interfaz web (webapps, portales, herramientas internas, páginas): tokens día/noche, tipografía, recetas de componentes, patrones móvil y movimiento tal como están en portfolio.betuned.co. Cárgala antes de crear o retocar UI de BeTuned."
---

# Sistema de diseño BeTuned

Extraído tal cual de **portfolio.betuned.co** (repo `betuned-dot/betuned-portfolio`, plantilla `scripts/template/index.html`, 1 de octubre de 2026). Sirve para que cualquier app o web nueva de BeTuned se vea igual. Si esta skill y la plantilla difieren, manda la plantilla, con una excepción: el botón primario es plano (actualizado el 5 de octubre de 2026). La plantilla del portfolio todavía arrastra un degradado en `.btn.primary`; no se copia. Idioma con Bernat: español.

## 0. Cómo aplicarla

1. Al empezar una UI nueva, crea un único archivo (`betuned.css` o `globals.css`) con el bloque **9. CSS listo para pegar** de abajo, tal cual, y construye todo con `var(--…)`. Nunca colores literales en componentes.
2. Con Tailwind: mapea los tokens en `theme.extend` (`var(--x)`); no uses su paleta por defecto. Con React/Next: mismas clases y CSS; nada de librerías de UI.
3. Si el proyecto ya tiene un sistema propio, respétalo y añade solo lo que falte; avisa a Bernat si choca con esto.
4. Wordmark una vez por vista, arriba a la izquierda; favicons claro/oscuro.
5. Antes de dar por acabada una vista: comprobar a **390 px** y en **modo día y noche** (Safari real si es posible), y pasar la checklist del final.

## 1. Principios

1. **Un solo acento: rosa #E91E63.** Todo lo demás son grises. El rosa marca lo activo, lo seleccionado, el foco y la acción principal. Nada más lleva color.
2. **Grises Apple.** Fondo #F5F5F7 de día y #0B0B0D de noche; la tinta nunca es negro puro ni blanco puro (#1F1F23 / #F2F2F4).
3. **Superficies planas y sutiles.** Los controles son translúcidos con borde de 1 px y sombra discreta. Sin cristal exagerado, sin degradados, sin brillos. El botón primario también es plano: rosa sólido, sin degradado ni sombra de color.
4. **Todo es píldora.** Botones, chips, buscador, segmentado, tags, badges y switch van a `border-radius: 999px`. Los botones de icono son círculos. Las tarjetas y paneles usan radios grandes (16–24 px).
5. **Animación elástica discreta.** Curvas con rebote suave y duraciones de 350–550 ms para transformaciones; 300 ms para color. Al pasar el ratón las cosas suben 1 px; al pulsar se encogen al 96 %. Siempre respetar `prefers-reduced-motion`.
6. **Poco texto, sin cifras.** Nada de contadores, resultados ni resúmenes numéricos en la interfaz. Los nombres van sin adornos. Lo visual manda.
7. **Modo día y noche por tokens.** Sigue al sistema (`prefers-color-scheme`) y se puede forzar con `<html data-theme="light|dark">`. Ningún color va escrito en los componentes; todo sale de `var(--…)`.
8. **Sin dependencias.** Solo Google Fonts (Inter). Nada de librerías de JS ni de CSS.
9. **Bilingüe ES/EN** con botón en la cabecera (EN/ES, 12,5 px, peso 700).

## 2. Color

| Token | Día | Noche | Uso |
|---|---|---|---|
| `--bg` | #F5F5F7 | #0B0B0D | Fondo de página |
| `--paper` | #FFFFFF | #151517 | Superficie opaca |
| `--surface` | #FFFFFF | #17171A | Fondo de control en hover |
| `--ink` | #1F1F23 | #F2F2F4 | Texto principal |
| `--ink-2` | #3A3A3F | #E4E4E8 | Texto secundario (chips, listas) |
| `--muted` | #6E6E75 | #9A9AA3 | Texto atenuado, placeholders, eyebrows, iconos |
| `--line` | rgba(31,31,35,.10) | rgba(255,255,255,.10) | Separadores, switch apagado, botón cerrar |
| `--pink` | #E91E63 | #E91E63 | Acento: fondo de chip activo, checkbox marcado, switch, foco, pines |
| `--pink-ink` | #D4145A | #FF5C93 | Rosa para **texto** (más oscuro de día, más claro de noche) |
| `--pink-soft` | #FDE8EF | #3A1524 | Fondo rosa suave: tags activas, opciones marcadas, hover de menú |
| `--pink-glow` | rgba(233,30,99,.35) | rgba(233,30,99,.45) | Halo: sombra de chip activo y anillo de foco (el botón primario no lleva sombra) |
| `--glass` | rgba(255,255,255,.72) | rgba(255,255,255,.06) | Fondo de controles |
| `--glass-strong` | rgba(245,245,247,.9) | rgba(11,11,13,.9) | Cabecera sticky, paneles, popovers |
| `--glass-edge` | rgba(31,31,35,.08) | rgba(255,255,255,.08) | Borde 1 px de controles y paneles |
| `--seg-thumb` | #FFFFFF | #36363C | Píldora del segmentado (gris plano de noche, sin degradado) |
| `--shadow` | 0 10px 30px rgba(20,20,22,.10) | 0 10px 30px rgba(0,0,0,.45) | Tarjetas y paneles |
| `--shadow-lg` | 0 30px 80px rgba(20,20,22,.22) | 0 30px 80px rgba(0,0,0,.6) | Hover de tarjeta, mapa |
| `--tile` / `--thumb-bg` | #EAEAEE / #E4E4E9 | #1B1B1F / #202024 | Fondo de imagen antes de cargar |
| `--lb` | rgba(245,245,247,.94) | rgba(8,8,10,.96) | Fondo del visor (blur 30 px + saturate 1.4) |

Colores fijos (van sobre imagen, iguales en los dos modos): texto blanco; pie de foto `linear-gradient(180deg, transparent, rgba(0,0,0,.66))`; badge sobre imagen rgba(0,0,0,.45) con blur 8 px; botón play rgba(255,255,255,.22) con borde rgba(255,255,255,.45) y blur 10 px; scrim de hoja móvil rgba(0,0,0,.32).

Botón primario: fondo `--pink` sólido con texto blanco; en hover, `--pink-ink`. **Nunca degradado** (el antiguo #FF6B9E queda retirado) y sin sombra de color.

Resplandores de fondo (`body::before`, fijos, z-index −1): rosa rgba(233,30,99,.13) arriba-izquierda (55vw 38vh at 12% −6%), azul rgba(90,140,255,.10) arriba-derecha (48vw 40vh at 92% 8%), ámbar rgba(255,170,60,.08) abajo-centro (60vw 50vh at 50% 112%). Son el único toque de color aparte del rosa y son casi imperceptibles.

Aviso: el degradado de los Brand Assets (icono) acaba en #EB0F63; la web usa #E91E63. Son casi iguales; en una app nueva usar #E91E63 y no mezclar los dos en un mismo elemento.

## 3. Tipografía

- **Inter** variable desde Google Fonts (`opsz 14..32, wght 300..700`, `display=swap`). Fallback: -apple-system, "SF Pro Text", "Segoe UI", Roboto, sans-serif.
- `font-optical-sizing: auto`, `font-feature-settings: "cv11","ss01","calt"`, `-webkit-font-smoothing: antialiased`.
- Cuerpo **15 px / 1.5**.
- Pesos: **500** por defecto en la interfaz (botones, chips, segmentado); **600** para títulos, nombres y eyebrows; **700** solo en el botón de idioma. 400 solo en notas pequeñas.
- Títulos ≥13,5 px con `letter-spacing: −0.01em`. Eyebrows en mayúsculas, 11–11,5 px, `+0.08em`, 600, color `--muted`.
- Cualquier número, fecha o duración con `font-variant-numeric: tabular-nums`.

Escala usada (no inventar tamaños intermedios): 11 · 11,5 · 12 · 12,5 · 13 · 13,5 · 14 · 15 · 16 · 18 px. El input de texto en móvil va a 16 px para que iOS no haga zoom.

## 4. Forma y medidas

**Radios:** 999 px píldoras · 50 % círculos · 6 px checkbox · 11 px ítem de menú · 12 px foco y tarjeta en móvil · 14 px foto en el visor · 16 px tarjeta, menú, leyenda · 18 px popover · 22 px panel (hoja móvil 22 22 0 0) · 24 px mapa.

**Alturas de control:** botón e input 40 px (36 en móvil) · botón pequeño en paneles y segmentado 34 px (30 en móvil) · chip 36 px · opción con checkbox 32 px · tag 30 px · cerrar 28 px · switch 46×28 px (bolita 22) · play 54 px (40 en móvil).

**Iconos:** línea, viewBox 24, `stroke-width 2` (2.2 en flechas, 2.5 en la × pequeña), `stroke-linecap: round`, sin relleno; 16 px dentro de botones, 18 px en tema/cerrar, 14–15 px en chips. Color `currentColor`.

**Espaciado:** contenedor 1360 px con gutter 20 px (14 en ≤640). Gap de controles 8 px en móvil y 14 px en escritorio; gap de chips pequeños 6 px; separación de popovers respecto a su control 8 px; padding de popover 12 px, de panel 18 px.

**Blur:** 12 px en paneles y popovers; 10 px en cabecera y barras sticky; 8 px en badges sobre imagen; 30 px + saturate(1.4) en el visor.

**Capas (z-index):** fondo ambiental −1 · barra de categorías 30 · cabecera 40 · menú 50 · scrim 55 · panel 60 · sugerencias 70 · visor 100.

**Breakpoints:** ≤640 (gutter 14, visor sin flechas) · ≤760 móvil (cabecera compacta, hoja inferior, 2 columnas) · ≥1500 (5 columnas).

## 5. Movimiento

| Curva | Valor | Para |
|---|---|---|
| spring | cubic-bezier(.3,1.4,.4,1) | botones, píldora del segmentado, icono de tema |
| spring-md | cubic-bezier(.3,1.5,.4,1) | chips, opciones, switch, play, pines |
| spring-lg | cubic-bezier(.3,1.6,.4,1) | keyframe `pop`, checkbox |
| spring-soft | cubic-bezier(.3,1.3,.4,1) | entrada de paneles (`enter`) |
| out | cubic-bezier(.2,.9,.3,1) | sin rebote: aparición de tarjetas, zoom de imagen, visor, hoja inferior |

Duraciones: color/opacidad 300 ms · transform de botón 350 ms · paneles 400 ms · chips y switch 450 ms · pop 500 ms · píldora del segmentado 550 ms · tema 600 ms · entrada de tarjetas 700 ms · latido de pin 2,6 s infinito · cambio día/noche del body 400 ms.

Keyframes: `enter` (opacity 0, translateY −8 px, scale .96, blur 6 px → normal) · `pop` (scale 1.08 al 40 %) · `squish` (scale 1.12/.88 al 35 %) · `fade` · `zoomin` (scale .96) · `sheet` (translateY 100 %) · `pulse` (scale .6→2.4, opacity .5→0).

Interacciones: hover = `translateY(−1px)` + fondo `--surface` (+ sombra 0 2px 8px rgba(0,0,0,.08) en botones); active = `scale(.96)` (chips .94, opciones .95); tarjeta en hover = imagen a 1.035 + `--shadow-lg` + pie de foto; play 1.08; pin 1.25. Las tarjetas entran al llegar al viewport (de opacity 0, translateY 14 px, scale .98). Con `prefers-reduced-motion: reduce` se quitan todas las animaciones y transiciones.

## 6. Recetas de componentes

**Botón** `.btn`: píldora 40 px, fondo `--glass`, borde `--glass-edge`, 14 px/500, gap 7 px, padding 0 14 px. Icono: 40×40 sin padding. **Primario**: rosa sólido (`--pink`), texto blanco, sin sombra ni brillo; hover `--pink-ink`; al pulsar se encoge al 96 % como el resto. Indicador de "hay algo activo" en un botón de icono: punto rosa de 8 px en la esquina superior derecha con anillo de 2 px del color de fondo (no un número).

**Chip de categoría** `.chip`: píldora 36 px, 13,5 px/500, color `--ink-2`; activo = fondo `--pink`, texto blanco, sombra `0 4px 12px var(--pink-glow)`, animación `pop`. Fila con scroll horizontal, sin barra, con desvanecido de 36 px en los bordes (mask) y flechas ‹ › de 30 px a la derecha en escritorio.

**Tira de chips con flechas** (obligatoria siempre que haya una fila de chips que pueda desbordar; no inventar otra variante). Comportamiento: la fila hace scroll horizontal sin barra; cuando el contenido es más ancho que el hueco, en escritorio (≥ 761 px) aparecen **dos flechas ‹ › juntas a la derecha de la fila**, al lado del siguiente control (p. ej. «Aleatorio»), y el borde por el que sigue contenido se desvanece 36 px; la flecha del extremo alcanzado queda al 28 % y deshabilitada. En móvil no hay flechas: solo el desvanecido y el dedo. Se recalcula al hacer scroll y al redimensionar.

```html
<div class="chipsbox" id="chipsbox">
  <div class="chips" id="chips" role="group" aria-label="Categorías"><!-- .chip … --></div>
  <div class="carrs">
    <button class="carr" id="cprev" aria-label="Anterior"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="m15 5-7 7 7 7"/></svg></button>
    <button class="carr" id="cnext" aria-label="Siguiente"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="m9 5 7 7-7 7"/></svg></button>
  </div>
</div>
```
```css
.chipsbox{position:relative;flex:1;min-width:0;display:flex;align-items:center;gap:8px}
.chips{display:flex;gap:8px;overflow-x:auto;scrollbar-width:none;padding:10px 6px;margin:-10px -6px -10px -4px;scroll-snap-type:x proximity;scroll-padding-inline:6px;flex:1;min-width:0;scroll-behavior:smooth}
.chips::-webkit-scrollbar{display:none}
.carrs{display:none;gap:4px;flex:0 0 auto}
.carr{flex:0 0 auto;width:30px;height:30px;border-radius:50%;border:1px solid var(--glass-edge);background:var(--glass);color:var(--ink);display:none;place-items:center;cursor:pointer;transition:opacity .25s,transform .3s var(--ease-spring),background .25s}
.carr:hover{background:var(--surface);transform:scale(1.06)}
.carr[disabled]{opacity:.28;cursor:default;transform:none}
@media (min-width:761px){.chipsbox.scroll .carrs{display:flex}.chipsbox.scroll .carr{display:grid}}
.chipsbox.more .chips{-webkit-mask-image:linear-gradient(90deg,#000 calc(100% - 36px),transparent);mask-image:linear-gradient(90deg,#000 calc(100% - 36px),transparent)}
.chipsbox.less .chips{-webkit-mask-image:linear-gradient(90deg,transparent,#000 36px);mask-image:linear-gradient(90deg,transparent,#000 36px)}
.chipsbox.more.less .chips{-webkit-mask-image:linear-gradient(90deg,transparent,#000 36px,#000 calc(100% - 36px),transparent);mask-image:linear-gradient(90deg,transparent,#000 36px,#000 calc(100% - 36px),transparent)}
```
```js
const chips=document.getElementById('chips'),chipsbox=document.getElementById('chipsbox'),cprev=document.getElementById('cprev'),cnext=document.getElementById('cnext');
function chipsState(){
  const sc=chips.scrollWidth>chips.clientWidth+2;chipsbox.classList.toggle('scroll',sc);
  const atS=chips.scrollLeft<=8,atE=chips.scrollLeft+chips.clientWidth>=chips.scrollWidth-8;
  chipsbox.classList.toggle('more',sc&&!atE);chipsbox.classList.toggle('less',sc&&!atS);
  cprev.disabled=atS;cnext.disabled=atE;
}
chips.addEventListener('scroll',chipsState,{passive:true});addEventListener('resize',chipsState);
cprev.onclick=()=>chips.scrollBy({left:-chips.clientWidth*0.6,behavior:'smooth'});
cnext.onclick=()=>chips.scrollBy({left:chips.clientWidth*0.6,behavior:'smooth'});
chipsState(); // y volver a llamarla cada vez que se vuelvan a pintar los chips
```
En React: mismo CSS; el estado `scroll/more/less` sale de un `useEffect` con `ResizeObserver` sobre la fila + listener de `scroll`, y se recalcula cuando cambia la lista de chips. El padding/margen negativo de `.chips` es para que las sombras y el `translateY(-1px)` del hover no se recorten.

**Tag de filtro activo** `.tag`: píldora 30 px, fondo `--pink-soft`, texto `--pink-ink` 12,5 px/500, con × de 16 px en círculo rgba(0,0,0,.06) que se vuelve rosa en hover.

**Control segmentado** `.seg`: píldora con padding 4 px, fondo `--glass`; píldora deslizante `--seg-thumb` con sombra `0 1px 3px rgba(0,0,0,.18)` que se mueve en 550 ms spring y hace `squish`. Texto 13,5 px/500, `--muted` → `--ink` al seleccionar. En móvil ocupa todo el ancho, padding 3 px, botones de 30 px.

**Buscador** `.search`: píldora 40 px con lupa 16 px `--muted`; al enfocar, anillo `0 0 0 3px var(--pink-glow)` y sube 1 px. Sugerencias en popover (radio 18, padding 12, blur 12, `enter`) con eyebrow y chips de 12,5 px. En móvil es un botón de lupa que despliega el campo bajo la cabecera.

**Opción con checkbox** `.opt`: píldora 32 px, 13 px; checkbox 16 px radio 6 con tick blanco; marcada = fondo `--pink-soft`, texto `--pink-ink`, checkbox `--pink` a scale 1.08.

**Switch**: 46×28, fondo `--line` → `--pink`; bolita blanca 22 px con sombra, se alarga a 28 px al pulsar, se desplaza 18 px.

**Menú desplegable** `.menu`: radio 16, padding 6, min-width 220; ítems radio 11, padding 10 12, 14 px; hover `--pink-soft`; seleccionado `--pink-ink` 600 con tick; subtítulo 12 px/400 `--muted`.

**Panel / hoja de filtros** `.fpanel`: escritorio = popover fijo bajo la cabecera, radio 22, padding 18, ancho min(560px, 100vw − 32px), `enter`. Móvil = hoja inferior a todo el ancho, radio 22 arriba, máx. alto `100dvh − safe-top − 48px`, cabecera sticky con blur, scrim rgba(0,0,0,.32), animación `sheet` 450 ms out, scroll del fondo bloqueado. Facetas separadas por `--line` con eyebrow de 11,5 px.

**Tarjeta de imagen** `.tile`: radio 16 (12 en móvil), fondo `--tile`, `--shadow`; imagen `object-fit: cover`; pie de foto solo en hover (degradado negro, nombre 13,5/600, detalle 12,5 al 85 %, botón ir 28 px circular rgba(255,255,255,.18) blur 8); badge de duración arriba a la derecha; botón play 54 px centrado. Mosaico en columnas flex rellenadas por JS (cada pieza a la columna más baja, orden por filas), gap 14 px (8 en móvil); 2 columnas en móvil, 4 en escritorio, 5 a partir de 1500 px.

**Popover de mapa** `.popv`: radio 18, padding 14, ancho min(300px, 100 % − 28px); título 15/−0.01em, subtítulo 12,5 `--muted`, lista 12,5 con fechas tabulares a la derecha, botón primario a todo el ancho de 36 px, cerrar 28 px circular con fondo `--line`. Siempre cabe dentro del mapa (en móvil, fijo abajo a todo el ancho).

**Visor** `.lbx`: fondo `--lb` con blur 30 + saturate 1.4; barra superior con píldora de info (13 px, nombre 600, detalle `--muted`) y cerrar circular; foto con radio 14 y sombra `0 30px 90px rgba(0,0,0,.5)`, entra con `zoomin`; flechas circulares a los lados (ocultas en móvil, deslizar con el dedo); sin contador.

**Cabecera**: sticky con `--glass-strong` y blur 10, altura mínima 62 px; logo (118 px; 96 en móvil) + segmentado + buscador + Filtros + EN/ES + día/noche. En móvil: una fila de logo y cuatro botones de icono de 36 px, segmentado debajo a todo el ancho.

**Pie**: 13 px `--muted`, borde superior `--line`; texto a la izquierda y redes como botones circulares de 40 px (Instagram, TikTok) a la derecha; en hover el icono se pone `--pink`.

## 7. Marca

- **Logotipo** (wordmark "betuned"): SVG inline con `fill: currentColor` (tinta de día, blanco de noche) y subrayado rosa que se desvanece **hacia la derecha** (degradado `--pink` opaco de 0 a 30 %, transparente al 100 %). 118 px de ancho en escritorio, 96 en móvil. Sin eslogan ni descripción al lado.
- **Icono** ("be" con subrayado): favicon redondo, círculo blanco con logo negro de día y círculo negro con logo blanco de noche; cambia con el sistema y con el botón día/noche. Para la pantalla de inicio de iOS, cuadrado blanco (iOS redondea).
- Fuente de los SVG originales: `BeTuned Media/Betuned Brand Assets/` en Drive. Favicons listos (`favicon.svg` claro/oscuro, `favicon-32.png`, `apple-touch-icon.png`) en `site/` del repo del portfolio.

Wordmark listo para pegar (CSS: `.wordmark{display:inline-flex;align-items:center;color:var(--ink);line-height:0} .wordmark svg{display:block;width:118px;height:auto}`; móvil 96 px):

```html
<a class="wordmark" href="/" aria-label="BeTuned"><svg viewBox="70 199 314 66" width="118" height="25" role="img" aria-hidden="true"><defs><linearGradient id="lg-ul" x1="0" y1="0" x2="1" y2="0"><stop offset="0" style="stop-color:var(--pink);stop-opacity:1"/><stop offset=".3" style="stop-color:var(--pink);stop-opacity:1"/><stop offset="1" style="stop-color:var(--pink);stop-opacity:0"/></linearGradient></defs><g fill="currentColor"><path d="M165.55,232.51c0-12.06-9.34-17.77-21.89-17.85-12.51-.07-23.24,5.69-23.42,17.55-.11-11.85-6.72-17.48-19.3-17.55-4.6-.07-9.76,2.16-12.83,5.51-1.11,1.12-1.81,3.14-2.37,4.6h-.07c.49-1.53.84-3.55.84-5.16v-18.47h-13.04v48.79h13.04v-4.25c0-1.6-.35-3.62-.91-5.16h.14c.49,1.46,1.25,3.49,2.37,4.6,3.07,3.28,8.23,5.23,12.83,5.23,12.58,0,19.19-5.69,19.3-17.54.18,11.85,10.91,17.61,23.42,17.54,11.01-.07,19.45-1.88,21.82-13.66l-12.2-.21c-1.18,3.97-3.83,4.39-9.2,4.46-5.09,0-9.83-2.65-10.46-6.48-.56-8.99,6.2-11.08,10.46-11.08,4.81.07,9.83,1.6,10.04,5.93h-14.43c-2.79,0-4.81,1.46-6.06,5.16h31.92v-1.95ZM97.87,240.25c-7.39,0-11.29-3.76-11.29-7.74s3.83-8.51,11.29-8.43c7.6,0,9.41,4.6,9.41,8.43s-1.88,7.74-9.41,7.74"/><path d="M183.82,234.33v-7.39h12.06v-11.92h-16.31c-1.39,0-3.28.21-4.67.49v-.14c1.39-.28,3.28-.49,4.6-1.11,1.67-.84,3.9-2.37,5.23-4.32,2.37-3.69,2.44-8.16,2.44-8.16h-13.1c0,6.06-3.07,13.24-7.32,13.24h-2.79v11.92h6.76v6.41c0,10.46,3.55,16.59,13.59,16.59h13.24v-11.85h-9.97c-2.16,0-3.76-.7-3.76-3.76"/><path d="M226.96,228.03c0,7.11-4.81,9.34-9.2,9.34s-7.95-2.44-7.95-8.29v-14.08h-13.1v14.01c0,14.5,5.09,21.4,15.89,21.4,4.74,0,10.94-3,13.66-10.04.49-1.32.77-3.21,1.05-4.6l.14.07c-.28,1.39-.49,3.28-.49,4.67v9.34h13.1v-34.85h-13.1v13.04Z"/><path d="M269.41,214.53c-4.74,0-11.15,3.07-13.94,10.11-.49,1.33-.84,3.21-1.05,4.6h-.14c.21-1.39.49-3.28.49-4.74v-9.41h-13.1v34.85h13.1v-13.04c0-7.04,5.02-9.34,9.48-9.34,4.04,0,7.74,2.58,7.74,8.29v14.08h13.04v-14.01c0-14.5-5.09-21.4-15.61-21.4"/><path d="M308.65,214.67c-12.62-.07-23.35,5.79-23.35,17.85s10.73,17.91,23.35,17.84c11.01-.07,19.45-1.88,21.82-13.66l-12.2-.21c-1.18,3.97-3.83,4.39-9.2,4.46-5.09,0-9.83-2.65-10.46-6.48-.56-8.99,6.2-11.08,10.46-11.08,4.81.07,9.83,1.6,10.04,5.93h-14.43c-2.79,0-4.81,1.46-6.07,5.16h31.93v-1.95c0-12.06-9.34-17.77-21.89-17.85"/><path d="M365.04,201.15v18.47c0,1.6.42,3.62.91,5.16h-.14c-.49-1.46-1.26-3.48-2.3-4.6-3.07-3.35-8.3-5.58-12.9-5.51-12.69.07-19.31,5.79-19.31,17.85s6.62,17.85,19.31,17.85c4.6,0,9.83-1.95,12.9-5.23,1.04-1.11,1.81-3.14,2.3-4.6h.14c-.49,1.53-.91,3.55-.91,5.16v4.25h13.03v-48.79h-13.03ZM353.75,240.25c-7.6,0-9.48-3.9-9.48-7.74s1.74-8.43,9.48-8.43c7.39-.07,11.29,4.46,11.29,8.43s-3.97,7.74-11.29,7.74"/></g><rect x="73.47" y="254.65" width="93.1" height="7.51" fill="url(#lg-ul)"/></svg></a>
```

## 8. Lo que no se hace

- No usar otro color que el rosa para destacar; nada de verdes, azules o amarillos semánticos salvo necesidad real (y entonces apagados).
- No poner contadores, cifras de resultados ni resúmenes numéricos.
- No usar degradados ni efectos de cristal fuertes. Los únicos degradados son el subrayado del logo y el oscurecido de los pies de foto sobre imagen: los botones, también el primario, son planos.
- No usar esquinas cuadradas ni radios pequeños (<6 px) en nada interactivo.
- No animar con `ease` genérico ni con `linear`; usar las curvas de arriba. No animar más de 700 ms salvo el latido de los pines.
- No cargar librerías externas ni otras fuentes.
- No escribir colores en los componentes; todo por tokens para que el modo noche funcione solo.

## 9. CSS listo para pegar

```css
/* ============================================================
   BeTuned · tokens de diseño (extraídos de portfolio.betuned.co, 2026-10-01)
   Pegar tal cual al principio del CSS de cualquier app web de BeTuned.
   Modo noche: sigue al sistema (prefers-color-scheme) y se puede forzar
   con <html data-theme="light|dark">.
   ============================================================ */
:root{
  /* base */
  --bg:#F5F5F7; --paper:#FFFFFF; --surface:#FFFFFF;
  --ink:#1F1F23; --ink-2:#3A3A3F; --muted:#6E6E75; --line:rgba(31,31,35,.10);
  /* acento (único) */
  --pink:#E91E63; --pink-ink:#D4145A; --pink-soft:#FDE8EF; --pink-glow:rgba(233,30,99,.35);
  /* superficies de controles y paneles */
  --glass:rgba(255,255,255,.72); --glass-strong:rgba(245,245,247,.9); --glass-edge:rgba(31,31,35,.08);
  --glass-hi:rgba(255,255,255,.6); --glass-lo:rgba(31,31,35,.04); --seg-thumb:#FFFFFF;
  --shadow:0 10px 30px rgba(20,20,22,.10); --shadow-lg:0 30px 80px rgba(20,20,22,.22);
  /* imágenes */
  --tile:#EAEAEE; --thumb-bg:#E4E4E9; --lb:rgba(245,245,247,.94);
  /* mapa (opcional) */
  --map-water:#CFE3F7; --map-water-2:#BFD8F2; --map-land:#E7E3DA; --map-cat:#FAF8F2; --map-border:#D8D3C8; --map-border-2:#C3BDB0;
  --map-label:#5F5F69; --map-river:#B4D0EC; --map-city:#8A8A94; --map-relief:#E3DFD4; --map-relief-2:#B9B2A3; --map-mon:#6F6A62;
  /* movimiento */
  --ease-spring:cubic-bezier(.3,1.4,.4,1); --ease-spring-md:cubic-bezier(.3,1.5,.4,1); --ease-spring-lg:cubic-bezier(.3,1.6,.4,1);
  --ease-spring-soft:cubic-bezier(.3,1.3,.4,1); --ease-out:cubic-bezier(.2,.9,.3,1);
  /* forma */
  --r-pill:999px; --r-card:16px; --r-popover:18px; --r-panel:22px; --r-hero:24px; --r-media:14px;
  /* medidas */
  --container:1360px; --gutter:20px; --control:40px; --control-sm:34px; --chip:36px; --hh:62px;
}
@media (prefers-color-scheme:dark){ :root:not([data-theme="light"]){
  --bg:#0B0B0D; --paper:#151517; --surface:#17171A;
  --ink:#F2F2F4; --ink-2:#E4E4E8; --muted:#9A9AA3; --line:rgba(255,255,255,.10);
  --pink:#E91E63; --pink-ink:#FF5C93; --pink-soft:#3A1524; --pink-glow:rgba(233,30,99,.45);
  --glass:rgba(255,255,255,.06); --glass-strong:rgba(11,11,13,.9); --glass-edge:rgba(255,255,255,.08);
  --glass-hi:rgba(255,255,255,.06); --glass-lo:rgba(0,0,0,.2); --seg-thumb:#36363C;
  --shadow:0 10px 30px rgba(0,0,0,.45); --shadow-lg:0 30px 80px rgba(0,0,0,.6);
  --tile:#1B1B1F; --thumb-bg:#202024; --lb:rgba(8,8,10,.96);
  --map-water:#0F151D; --map-water-2:#0B1118; --map-land:#1F2126; --map-cat:#2A2C33; --map-border:#3A3D47; --map-border-2:#4A4E5A;
  --map-label:#B9BBC5; --map-river:#1C2B3B; --map-city:#8E90A0; --map-relief:#34363E; --map-relief-2:#5A5D6A; --map-mon:#A6A9B6;
  color-scheme:dark } }
:root[data-theme="dark"]{
  --bg:#0B0B0D; --paper:#151517; --surface:#17171A;
  --ink:#F2F2F4; --ink-2:#E4E4E8; --muted:#9A9AA3; --line:rgba(255,255,255,.10);
  --pink:#E91E63; --pink-ink:#FF5C93; --pink-soft:#3A1524; --pink-glow:rgba(233,30,99,.45);
  --glass:rgba(255,255,255,.06); --glass-strong:rgba(11,11,13,.9); --glass-edge:rgba(255,255,255,.08);
  --glass-hi:rgba(255,255,255,.06); --glass-lo:rgba(0,0,0,.2); --seg-thumb:#36363C;
  --shadow:0 10px 30px rgba(0,0,0,.45); --shadow-lg:0 30px 80px rgba(0,0,0,.6);
  --tile:#1B1B1F; --thumb-bg:#202024; --lb:rgba(8,8,10,.96);
  --map-water:#0F151D; --map-water-2:#0B1118; --map-land:#1F2126; --map-cat:#2A2C33; --map-border:#3A3D47; --map-border-2:#4A4E5A;
  --map-label:#B9BBC5; --map-river:#1C2B3B; --map-city:#8E90A0; --map-relief:#34363E; --map-relief-2:#5A5D6A; --map-mon:#A6A9B6;
  color-scheme:dark }

/* ---------- base ---------- */
*{box-sizing:border-box}
html{overflow-x:clip}
body{margin:0;background:var(--bg);color:var(--ink);
  font-family:Inter,-apple-system,"SF Pro Text","Segoe UI",Roboto,sans-serif;font-optical-sizing:auto;font-feature-settings:"cv11","ss01","calt";
  font-size:15px;line-height:1.5;-webkit-font-smoothing:antialiased;min-height:100%;transition:background .4s,color .4s}
/* resplandores ambientales (rosa arriba-izq, azul arriba-der, ámbar abajo) */
body::before{content:"";position:fixed;inset:0;z-index:-1;pointer-events:none;
  background:radial-gradient(55vw 38vh at 12% -6%,rgba(233,30,99,.13),transparent 62%),
             radial-gradient(48vw 40vh at 92% 8%,rgba(90,140,255,.10),transparent 60%),
             radial-gradient(60vw 50vh at 50% 112%,rgba(255,170,60,.08),transparent 60%)}
a{color:inherit}
button{font:inherit;color:inherit}
.wrap{max-width:var(--container);margin:0 auto;padding-inline:var(--gutter)}
@media (max-width:640px){.wrap{padding-inline:14px}}
:focus-visible{outline:2px solid var(--pink);outline-offset:2px;border-radius:12px}
@media (prefers-reduced-motion:reduce){*{animation:none!important;transition:none!important}}

/* ---------- superficies ---------- */
/* panel / popover / menú: fondo fuerte con blur, borde fino, sombra */
.glass{position:relative;background:var(--glass-strong);-webkit-backdrop-filter:blur(12px);backdrop-filter:blur(12px);border:1px solid var(--glass-edge);box-shadow:var(--shadow)}
/* cabecera y barras sticky */
.sticky-bar{position:sticky;z-index:40;background:var(--glass-strong);-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px)}

/* ---------- controles ---------- */
.btn{display:inline-flex;align-items:center;justify-content:center;gap:7px;min-height:var(--control);padding:0 14px;border-radius:var(--r-pill);
  border:1px solid var(--glass-edge);background:var(--glass);color:var(--ink);font-size:14px;font-weight:500;cursor:pointer;white-space:nowrap;position:relative;
  transition:transform .35s var(--ease-spring),background .3s,box-shadow .3s}
.btn:hover{transform:translateY(-1px);background:var(--surface);box-shadow:0 2px 8px rgba(0,0,0,.08)}
.btn:active{transform:scale(.96)}
.btn.icon{width:var(--control);padding:0}
.btn.primary{background:var(--pink);color:#fff;border-color:transparent;box-shadow:none}
.btn.primary:hover{background:var(--pink-ink);box-shadow:none}
/* indicador "hay algo activo" en un botón de icono: punto rosa en la esquina */
.btn.on::after{content:"";position:absolute;top:5px;right:5px;width:8px;height:8px;border-radius:50%;background:var(--pink);box-shadow:0 0 0 2px var(--bg)}

.chip{flex:0 0 auto;min-height:var(--chip);padding:0 13px;border-radius:var(--r-pill);border:1px solid var(--glass-edge);background:var(--glass);color:var(--ink-2);
  font-size:13.5px;font-weight:500;cursor:pointer;white-space:nowrap;display:inline-flex;align-items:center;gap:7px;
  transition:background .35s,color .35s,border-color .35s,transform .45s var(--ease-spring-md),box-shadow .35s}
.chip:hover{transform:translateY(-1px);background:var(--surface)}
.chip:active{transform:scale(.94)}
.chip[aria-pressed="true"]{background:var(--pink);border-color:transparent;color:#fff;box-shadow:0 4px 12px var(--pink-glow)}
.chip.pop{animation:pop .5s var(--ease-spring-lg)}
/* tira de chips con flechas (ver receta en 6): flechas solo en escritorio y solo si desborda */
.chipsbox{position:relative;flex:1;min-width:0;display:flex;align-items:center;gap:8px}
.chips{display:flex;gap:8px;overflow-x:auto;scrollbar-width:none;padding:10px 6px;margin:-10px -6px -10px -4px;scroll-snap-type:x proximity;scroll-padding-inline:6px;flex:1;min-width:0;scroll-behavior:smooth}
.chips::-webkit-scrollbar{display:none}
.carrs{display:none;gap:4px;flex:0 0 auto}
.carr{flex:0 0 auto;width:30px;height:30px;border-radius:50%;border:1px solid var(--glass-edge);background:var(--glass);color:var(--ink);display:none;place-items:center;cursor:pointer;transition:opacity .25s,transform .3s var(--ease-spring),background .25s}
.carr:hover{background:var(--surface);transform:scale(1.06)}
.carr[disabled]{opacity:.28;cursor:default;transform:none}
@media (min-width:761px){.chipsbox.scroll .carrs{display:flex}.chipsbox.scroll .carr{display:grid}}
.chipsbox.more .chips{-webkit-mask-image:linear-gradient(90deg,#000 calc(100% - 36px),transparent);mask-image:linear-gradient(90deg,#000 calc(100% - 36px),transparent)}
.chipsbox.less .chips{-webkit-mask-image:linear-gradient(90deg,transparent,#000 36px);mask-image:linear-gradient(90deg,transparent,#000 36px)}
.chipsbox.more.less .chips{-webkit-mask-image:linear-gradient(90deg,transparent,#000 36px,#000 calc(100% - 36px),transparent);mask-image:linear-gradient(90deg,transparent,#000 36px,#000 calc(100% - 36px),transparent)}

.tag{display:inline-flex;align-items:center;gap:6px;min-height:30px;padding:0 6px 0 11px;border-radius:var(--r-pill);background:var(--pink-soft);color:var(--pink-ink);font-size:12.5px;font-weight:500;border:0;cursor:pointer;animation:pop .45s var(--ease-spring-lg)}

.seg{display:inline-flex;position:relative;padding:4px;border-radius:var(--r-pill);gap:2px;isolation:isolate;background:var(--glass);border:1px solid var(--glass-edge)}
.seg button{position:relative;z-index:1;border:0;background:transparent;padding:0 14px;min-height:var(--control-sm);border-radius:var(--r-pill);cursor:pointer;color:var(--muted);font-size:13.5px;font-weight:500;transition:color .3s}
.seg button[aria-selected="true"]{color:var(--ink)}
.seg .thumb{position:absolute;top:4px;left:4px;height:var(--control-sm);border-radius:var(--r-pill);background:var(--seg-thumb);box-shadow:0 1px 3px rgba(0,0,0,.18);transition:transform .55s var(--ease-spring),width .55s var(--ease-spring);z-index:0}
.seg.moving .thumb{transform-origin:center;animation:squish .55s var(--ease-spring)}

.search{display:flex;align-items:center;gap:8px;min-height:var(--control);padding:0 12px;border-radius:var(--r-pill);background:var(--glass);border:1px solid var(--glass-edge);transition:box-shadow .3s,transform .3s}
.search:focus-within{box-shadow:0 0 0 3px var(--pink-glow);transform:translateY(-1px)}
.search input{border:0;background:transparent;outline:0;font:inherit;font-size:14px;color:var(--ink);width:100%;min-width:0}
.search input::placeholder{color:var(--muted)}
@media (max-width:760px){.search input{font-size:16px}} /* evita el zoom de iOS */

.opt{display:inline-flex;align-items:center;gap:7px;min-height:32px;padding:0 11px 0 9px;border-radius:var(--r-pill);border:1px solid var(--glass-edge);background:var(--glass);font-size:13px;cursor:pointer;user-select:none;transition:background .3s,color .3s,transform .4s var(--ease-spring-md)}
.opt:active{transform:scale(.95)}
.opt input{appearance:none;width:16px;height:16px;border-radius:6px;border:1.5px solid var(--muted);margin:0;display:grid;place-items:center;transition:background .25s,border-color .25s,transform .35s var(--ease-spring-lg)}
.opt input::after{content:"";width:9px;height:5px;border:2px solid #fff;border-top:0;border-right:0;transform:rotate(-45deg) scale(0);transition:transform .3s var(--ease-spring-lg);margin-top:-2px}
.opt input:checked{background:var(--pink);border-color:var(--pink);transform:scale(1.08)}
.opt input:checked::after{transform:rotate(-45deg) scale(1)}
.opt:has(input:checked){background:var(--pink-soft);color:var(--pink-ink);border-color:transparent}

.switch input{appearance:none;width:46px;height:28px;border-radius:var(--r-pill);background:var(--line);position:relative;margin:0;cursor:pointer;transition:background .3s}
.switch input::after{content:"";position:absolute;top:3px;left:3px;width:22px;height:22px;border-radius:50%;background:#fff;box-shadow:0 2px 6px rgba(0,0,0,.25);transition:transform .45s var(--ease-spring-md),width .3s}
.switch input:active::after{width:28px}
.switch input:checked{background:var(--pink)}
.switch input:checked::after{transform:translateX(18px)}

.menu{min-width:220px;padding:6px;border-radius:var(--r-card);transform-origin:top right}
.menu button{display:flex;width:100%;align-items:center;justify-content:space-between;gap:10px;border:0;background:transparent;padding:10px 12px;border-radius:11px;cursor:pointer;font-size:14px;text-align:left;transition:background .2s}
.menu button:hover{background:var(--pink-soft)}
.menu button[aria-checked="true"]{color:var(--pink-ink);font-weight:600}
.menu small{color:var(--muted);font-weight:400;display:block;font-size:12px}

.eyebrow{font-size:11.5px;letter-spacing:.08em;text-transform:uppercase;color:var(--muted);font-weight:600}
.num{font-variant-numeric:tabular-nums}

/* ---------- tarjeta de imagen ---------- */
.tile{display:block;position:relative;border-radius:var(--r-card);overflow:hidden;background:var(--tile);box-shadow:var(--shadow);border:0;padding:0;cursor:zoom-in;width:100%;color:inherit;isolation:isolate;
  opacity:0;transform:translateY(14px) scale(.98);transition:opacity .6s ease,transform .7s var(--ease-out),box-shadow .35s}
.tile.in{opacity:1;transform:none}
.tile:hover{box-shadow:var(--shadow-lg)}
.tile img,.tile video{display:block;width:100%;height:100%;object-fit:cover;transition:transform .7s var(--ease-out),opacity .5s}
.tile:hover img,.tile:hover video{transform:scale(1.035)}
.tile .cap{position:absolute;left:0;right:0;bottom:0;padding:34px 14px 12px;background:linear-gradient(180deg,transparent,rgba(0,0,0,.66));color:#fff;font-size:12.5px;line-height:1.3;opacity:0;transform:translateY(6px);transition:opacity .3s,transform .4s var(--ease-out)}
.tile:hover .cap,.tile:focus-visible .cap{opacity:1;transform:none}
.tile .cap b{display:block;font-weight:600;font-size:13.5px;letter-spacing:-.01em}
.tile .badge{position:absolute;top:10px;right:10px;display:inline-flex;align-items:center;gap:5px;padding:4px 8px 4px 6px;border-radius:var(--r-pill);background:rgba(0,0,0,.45);color:#fff;font-size:11.5px;font-weight:600;-webkit-backdrop-filter:blur(8px);backdrop-filter:blur(8px);font-variant-numeric:tabular-nums}
@media (max-width:760px){.tile{border-radius:12px}}

/* ---------- animaciones ---------- */
.enter{animation:enter .4s var(--ease-spring-soft)}
@keyframes enter{from{opacity:0;transform:translateY(-8px) scale(.96);filter:blur(6px)}to{opacity:1;transform:none;filter:none}}
@keyframes pop{0%{scale:1}40%{scale:1.08}100%{scale:1}}
@keyframes squish{0%{scale:1 1}35%{scale:1.12 .88}100%{scale:1 1}}
@keyframes fade{from{opacity:0}}
@keyframes zoomin{from{transform:scale(.96);opacity:0}}
@keyframes sheet{from{transform:translateY(100%)}}
@keyframes pulse{0%{transform:scale(.6);opacity:.5}100%{transform:scale(2.4);opacity:0}}
```

## 10. Checklist antes de entregar

- [ ] Todos los colores vienen de tokens; los dos bloques oscuros son idénticos; `body` con fondo explícito; favicon claro/oscuro.
- [ ] Un solo botón primario (rosa plano, sin degradado ni sombra) por vista; estado activo = punto rosa en el botón, no badge con número.
- [ ] Sin contadores, cifras de resultados ni marcas de «destacado».
- [ ] Controles translúcidos con borde de 1 px y sin blur; paneles con blur suave; nada de brillos ni degradados (ni en botones).
- [ ] Radios: 999 px controles, 16 px tarjetas (12 en móvil), 18 px popovers, 22 px paneles.
- [ ] Toda fila de chips que pueda desbordar lleva la tira con flechas ‹ › a la derecha en escritorio (receta de 6) y desvanecido en los bordes.
- [ ] Móvil: cabecera de una fila con iconos de 36 px, buscador plegable, segmentado compacto, paneles como hoja inferior, mosaico a 2 columnas, inputs a 16 px.
- [ ] Animaciones solo en respuesta a acciones, con las curvas de la tabla; `prefers-reduced-motion` respetado; sin saltos de scroll.
- [ ] Wordmark con subrayado que se desvanece hacia la derecha; «vosotros» a clientes, «tú» en herramientas internas; bilingüe si mira al cliente.
- [ ] Revisado a 390 px, día y noche, con sombras sin recortar.
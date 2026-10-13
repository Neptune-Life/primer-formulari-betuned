# Skill `betuned-design` · cómo instalarla y usarla

Esta skill es el **sistema de diseño de BeTuned** empaquetado para Claude Code: tokens de color día/noche, tipografía Inter, recetas de componentes (botones, chips, segmentado, tarjetas, paneles, visor…), patrones de móvil y movimiento, tal como están en portfolio.betuned.co. Cuando Claude la carga, construye cualquier interfaz nueva con el mismo aspecto que el resto del ecosistema BeTuned (Portfolio, Crew, la web).

Es un solo archivo: `betuned-design/SKILL.md`. Lo lee Claude; no hace falta tocarlo.

## 1. Instalar

Una skill es una carpeta con un `SKILL.md` dentro. Hay dos sitios donde ponerla:

| Dónde | Para qué | Ruta |
| --- | --- | --- |
| **En un proyecto** | Solo ese proyecto la ve. Es lo normal si trabajas en un repo de BeTuned | `<carpeta-del-proyecto>/.claude/skills/betuned-design/SKILL.md` |
| **En tu usuario** | La ven todos tus proyectos | `~/.claude/skills/betuned-design/SKILL.md` |

Pasos:

1. Descomprime el zip.
2. Copia la carpeta `betuned-design` entera (con su `SKILL.md`) a una de las dos rutas de arriba. En un proyecto, crea `.claude/skills/` si no existe.
3. Abre Claude Code en esa carpeta (o reinícialo si ya estaba abierto). Al arrancar, Claude lista las skills disponibles y verá `betuned-design`.

Comprobación rápida: escribe `/betuned-design` en el chat. Si la skill está bien instalada, Claude la carga y responde con el sistema de diseño en contexto.

Si el proyecto está en git, puedes dejar `.claude/skills/` dentro del repo para que todo el equipo la tenga, como hacemos en `betuned-web`.

## 2. Usarla

Hay dos formas:

- **A mano**: escribe `/betuned-design` antes de pedir una interfaz. Claude carga el sistema de diseño y lo aplica a lo que le pidas a continuación.
- **Automática**: Claude la carga sola cuando el encargo encaja con la descripción de la skill (crear o retocar UI de BeTuned). Para asegurarte, conviene mencionarlo: «aplica BeTuned Design» o «siguiendo la skill betuned-design».

Ejemplos de peticiones que funcionan bien:

```
/betuned-design
Hazme una página de login para crew.betuned.co con email y contraseña, modo día y noche.
```

```
/betuned-design
Añade a esta tabla de pedidos una fila de chips para filtrar por estado, con las flechas si desborda.
```

```
Revisa este componente React y ajústalo a la skill betuned-design: tokens, radios, botón primario plano.
```

## 3. Lo que la skill garantiza

Cuando está cargada, Claude:

- Crea un único archivo CSS con los **tokens** (`--bg`, `--ink`, `--pink`, `--glass`…) y construye todo con `var(--…)`; nunca escribe colores sueltos en los componentes.
- Usa **Inter** desde Google Fonts, cuerpo a 15 px, títulos a 600 y la escala de tamaños fijada (11 a 18 px en interfaz).
- Mantiene el **rosa #E91E63 como único acento**; todo lo demás son grises Apple (#F5F5F7 de día, #0B0B0D de noche).
- Hace el **botón primario plano**: rosa sólido, sin degradado ni sombra de color.
- Pone **píldoras** (radio 999 px) en botones, chips, buscador y segmentado; radios grandes (16 a 24 px) en tarjetas y paneles.
- Aplica el **modo noche por tokens**: sigue al sistema y se puede forzar con `<html data-theme="light|dark">`.
- Usa las **curvas de movimiento** de la tabla (spring, out) y respeta `prefers-reduced-motion`.
- Revisa a **390 px** y en los dos modos antes de dar por buena una vista, y pasa la checklist del final de la skill.

Y lo que no hace: contadores ni cifras en la interfaz, degradados fuera del subrayado del logo y los pies de foto, librerías de UI ni otras fuentes, colores semánticos (verde, rojo, azul) salvo necesidad real.

## 4. Con otros stacks

- **HTML y CSS a secas**: pega el bloque «9. CSS listo para pegar» de la skill tal cual al principio de tu CSS. Claude lo hace solo.
- **Tailwind**: Claude mapea los tokens en `theme.extend` con `var(--x)`; no se usa la paleta por defecto de Tailwind.
- **React / Next / Vue / Svelte**: mismas clases y mismo CSS; nada de librerías de componentes (MUI, shadcn…). La tira de chips con flechas se hace con `useEffect` y `ResizeObserver`, como explica la receta.
- **Proyecto que ya tiene su propio sistema**: Claude lo respeta, añade solo lo que falte y avisa si choca con BeTuned Design.

## 5. Mantenerla al día

La fuente de verdad del diseño es la plantilla del Portfolio (`betuned-dot/betuned-portfolio`, `scripts/template/index.html`). Si el Portfolio cambia, hay que actualizar el `SKILL.md` y volver a repartirlo. La fecha de la última extracción está en la primera línea del archivo.

Si cambias algo en la skill, mantén el bloque de cabecera (`name` y `description` entre `---`): es lo que Claude Code usa para listarla y decidir cuándo cargarla.

## 6. Si algo falla

- **Claude no la ve**: comprueba la ruta exacta (`.claude/skills/betuned-design/SKILL.md`, con la carpeta `betuned-design` y el archivo en mayúsculas) y reinicia Claude Code.
- **La carga pero no la aplica**: pídeselo de forma explícita («siguiendo la skill betuned-design») y, si estás retocando código existente, dile que lo audite contra la checklist del punto 10 de la skill.
- **Dudas de diseño**: la referencia viva es portfolio.betuned.co; ante una duda, manda lo que haga el Portfolio, salvo el botón primario, que ya es plano.

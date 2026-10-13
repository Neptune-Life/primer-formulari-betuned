# Primer formulari BeTuned

Formulario web responsive para recopilar los datos esenciales de un evento siguiendo el sistema de diseño BeTuned.

## Campos

- Nombre y apellidos
- Teléfono internacional con código de país
- Correo electrónico
- Fecha del evento
- Espacio del evento
- `source_lead` oculto, con `WEB` como valor predeterminado

`source_lead` también se puede establecer mediante la URL con uno de estos valores: `IG`, `WEB`, `TK`, `LK` u `O`.

```text
?source_lead=IG
```

## Ejecutar en local

No necesita dependencias. Se puede abrir `index.html` directamente o servir la carpeta con cualquier servidor estático:

```bash
python -m http.server 4173
```

## Sistema de diseño

La carpeta `betuned-design/` contiene la skill original y sus documentos de uso.

# Private Notes PWA

PWA estática de prueba para iPhone/Safari. Simula una lista de conversaciones y usa la cámara desde la web para guardar fotos y vídeos en IndexedDB, sin backend y sin enviar datos fuera del dispositivo.

## Archivos

- `index.html`: estructura de la app.
- `styles.css`: interfaz responsive inspirada en una lista de mensajería, sin marcas reales.
- `app.js`: cámara, grabación, IndexedDB y galería local.
- `manifest.webmanifest`: configuración PWA.
- `service-worker.js`: cache básico de archivos estáticos.
- `icons/`: iconos placeholder en PNG y SVG.

## Probar en local

La cámara web requiere contexto seguro. En escritorio normalmente funciona en `localhost`, pero en iPhone necesitarás HTTPS real o un túnel HTTPS.

Opción simple en tu ordenador:

```bash
python -m http.server 8080
```

Abre:

```text
http://localhost:8080
```

Para probar desde iPhone, sirve el proyecto por HTTPS. GitHub Pages es suficiente para esta demo.

## Subir a GitHub Pages

1. Crea un repositorio en GitHub, por ejemplo `private-notes-pwa`.
2. Sube estos archivos a la rama principal.
3. En GitHub, entra en `Settings` > `Pages`.
4. En `Build and deployment`, elige `Deploy from a branch`.
5. Selecciona la rama `main` y la carpeta `/root`.
6. Guarda y espera a que GitHub publique la URL HTTPS.
7. Abre esa URL en Safari del iPhone.

## Añadir a pantalla de inicio en iPhone

1. Abre la URL HTTPS en Safari.
2. Pulsa el botón de compartir.
3. Elige `Añadir a pantalla de inicio`.
4. Confirma el nombre `Private Notes`.
5. Abre la app desde el icono creado.

## Uso

- Toca `Foto rápida` para pedir permiso de cámara y guardar una foto local en IndexedDB.
- Toca varias veces `Foto rápida` para guardar varias fotos.
- Toca `Grabación rápida` para iniciar vídeo.
- Toca de nuevo `Grabación rápida` para parar y guardar.
- Abre `Galería local` para ver, reproducir o borrar elementos guardados.
- En cada elemento de la galería puedes usar `Compartir`, `Abrir` o `Descargar`.
- En iPhone, usa `Compartir` para abrir la hoja de iOS y elegir `Guardar imagen` o `Guardar vídeo` cuando esa opción esté disponible.

## Limitaciones reales de iOS/Safari

- `getUserMedia` solo funciona en contexto seguro: HTTPS o `localhost`.
- iOS puede volver a pedir permisos o invalidarlos al cerrar Safari, limpiar datos del sitio o reinstalar la PWA.
- `MediaRecorder` no está disponible o no se comporta igual en todas las versiones de iOS/Safari. Si falla, la app muestra un aviso y mantiene funcionando las fotos.
- El formato de vídeo depende del navegador. Safari suele preferir MP4/H.264 cuando lo soporta.
- IndexedDB es almacenamiento local del sitio/PWA, pero iOS puede purgarlo si el sistema necesita espacio o si el usuario borra datos de Safari.
- Una PWA no puede guardar de forma fiable y silenciosa en el carrete del iPhone. Por eso esta demo guarda dentro del almacenamiento local de la app.
- Para pasar un archivo al carrete, debe intervenir el usuario desde la hoja de compartir de iOS. Safari puede mostrar opciones distintas según versión, formato y permisos.
- Los iconos incluidos son placeholders. Para una app real, sustitúyelos por iconos finales en PNG de 180x180, 192x192 y 512x512.

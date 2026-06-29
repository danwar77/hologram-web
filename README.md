# Hologram Web

Interfaz holografica interactiva hecha con React, Vite, Three.js y React Three Fiber.

## Ejecutar

```bash
npm install
npm run dev
```

La app queda disponible en la URL local que muestre Vite, por ejemplo `http://localhost:5174/`.

## Que incluye

- Avatar 3D procedural con material holografico, scanlines, glow y particulas.
- HUD responsive inspirado en la referencia: navegacion, paneles de capacidades, estadisticas y modulo de conversacion.
- Entrada de texto, sintesis de voz con Web Speech API y reconocimiento de voz cuando el navegador lo permite.
- Estructura preparada para reemplazar el avatar procedural por un archivo GLB/GLTF.

## Siguientes conexiones

- Avatar GLB/GLTF: sustituir el componente `Avatar` en `src/components/HologramScene.tsx` por un loader de modelo.
- Convai u OpenAI Realtime: conectar el formulario de `src/App.tsx` a un backend propio para no exponer claves en navegador.
- ElevenLabs: usar un endpoint de servidor para convertir las respuestas del asistente a audio.

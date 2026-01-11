# Guía de Despliegue (Deployment)

## 1. Publicar Online (Web)

La forma más fácil y gratuita de publicar tu web es usando **Netlify**.

### Opción A: Netlify Drop (Muy Fácil - Sin comandos)
1. Ve a [app.netlify.com/drop](https://app.netlify.com/drop).
2. Abre la carpeta de tu proyecto en tu ordenador: `c:\Users\manum\.gemini\antigravity\scratch\recetas_abuelas`.
3. **Arrastra la carpeta completa** dentro del área punteada en la web de Netlify.
4. ¡Listo! Netlify te dará una URL (ej: `https://recetas-abuelas-random.netlify.app`) donde tu web ya es visible para todo el mundo.
5. (Opcional) Puedes cambiar el nombre del sitio en "Site Settings" > "Change site name".

### Opción B: Conectar con GitHub (Recomendado para actualizaciones)
1. Sube tu código a un repositorio de GitHub.
2. En Netlify, haz clic en "Add new site" > "Import an existing project".
3. Selecciona GitHub y elige tu repositorio.
4. Netlify se actualizará automáticamente cada vez que hagas cambios en el código.

---

## 2. Versión para Móvil (App)

Tu web ya está configurada como una **PWA (Progressive Web App)**. Esto significa que se puede instalar como una App nativa sin pasar por la App Store.

### Cómo instalarla en el móvil:

**En iPhone (iOS):**
1. Abre la web publicada (la URL de Netlify) en **Safari**.
2. Toca el botón **Compartir** (el cuadrado con la flecha hacia arriba).
3. Busca y pulsa en **"Añadir a la pantalla de inicio"**.
4. Ahora tendrás el icono de la App en tu menú y funcionará a pantalla completa, como una App normal.

**En Android:**
1. Abre la web publicada en **Chrome**.
2. Toca los tres puntos del menú (arriba a la derecha).
3. Pulsa en **"Instalar aplicación"** o **"Añadir a pantalla de inicio"**.
4. La App aparecerá en tu cajón de aplicaciones.

### Ventajas:
- **Funciona Offline:** Gracias al archivo `sw.js`, las recetas visitadas se guardan para verse sin internet.
- **Sin descargas pesadas:** Es muy ligera.
- **Actualizaciones automáticas:** Al actualizar la web, la App se actualiza sola.

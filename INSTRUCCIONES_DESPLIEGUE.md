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

---

## 3. Guía Paso a Paso: Implementación con GitHub + GitHub Pages

Esta es la opción más profesional y te permite tener tu web online gratis para siempre, con un dominio tipo `tusuario.github.io/recetas`.

### Paso 1: Preparar tu código local (Ya realizado)
Ya hemos guardado todos tus cambios en la versión local. Tu proyecto está listo para subirse.

### Paso 2: Crear el repositorio en GitHub
1. Entra a [github.com](https://github.com) y loguéate.
2. Haz clic en el icono **+** (arriba a la derecha) y selecciona **New repository**.
3. **Repository name**: Escribe un nombre, por ejemplo: `recetas-abuelas`.
4. **Public/Private**: Elige **Public** (necesario para GitHub Pages gratuito).
5. **NO** marques "Initialize this repository with a README", ni .gitignore, ni license. Queremos un repositorio vacío.
6. Dale al botón verde **Create repository**.

### Paso 3: Conectar y subir tu código
Una vez creado, verás una pantalla con instrucciones. Busca la sección **"…or push an existing repository from the command line"**.

Copia y pega los siguientes comandos en tu terminal (uno por uno):

```bash
git remote add origin https://github.com/TU_USUARIO/recetas-abuelas.git
git branch -M main
git push -u origin main
```
*(Asegúrate de cambiar `TU_USUARIO` por tu nombre de usuario real de GitHub)*.

### Paso 4: Activar GitHub Pages (Para ver la web online)
1. En tu repositorio de GitHub, ve a la pestaña **Settings** (arriba).
2. En el menú de la izquierda, busca y haz clic en **Pages**.
3. En la sección **Build and deployment** > **Source**, selecciona **Deploy from a branch**.
4. En **Branch**, selecciona `main` y la carpeta `/(root)`. Dale a **Save**.
5. Espera unos instantes (recarga la página). Verás un mensaje arriba que dice:
   > "Your site is live at https://tu-usuario.github.io/recetas-abuelas/"

¡Esa es tu URL definitiva! Compártela con la familia.

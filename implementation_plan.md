# Plan de Implementación - Estado Actual

## Tareas Completadas ✅
- [x] **Configuración de Versión y Despliegue**: Repositorio en GitHub conectado y despliegue automático en Netlify (`s-lili-mari.netlify.app`).
- [x] **Deduplicación de Datos**: Limpieza de recetas duplicadas (Pavo, Calamares, Pollo).
- [x] **Optimización de Textos**:
    - Mención a Fermín en la historia de Mari.
    - Actualización de la historia de Lili (hijos: Andrés, Alfonso y Manolo; corrección de negritas).
    - Corrección gramatical y de estilo en la bio de Mari ("convierte", "reunen", "nos acompaña").
- [x] **Interfaz de Usuario (UI)**:
    - Vista predeterminada: "Todas las Recetas".
    - Orden inteligente: Top 10 (Lili y Mari mezcladas) + resto aleatorio.
    - Vista de lista optimizada: Acordeón compacto con menos espaciado.
    - Botón "Ver Lista" movido a la fila superior junto a las pestañas.
- [x] **Mejora Móvil**: Ajuste de fuentes y márgenes para dispositivos pequeños.

## Tareas Pendientes ⏳

### 🔴 Prioridad Alta
- [x] **Commit de Cambios Pendientes**: ✅ Completado
    - Cambios en `css/styles.css` y `js/script.js` subidos
    - Netlify actualizándose automáticamente

- [x] **Crear Carpeta de Familia**: ✅ Completado
    - Directorio `assets/familia/` creado
    - Documentación añadida (README.md y PENDIENTE.md)
    - **Pendiente**: Añadir 6 fotos familiares manualmente (foto1.jpg - foto6.jpg)
    - Nota: Cuota de generación de imágenes agotada (se resetea ~22:49 UTC)

- [x] **Icono de la App (PWA)**: ✅ Completado
    - Creado `assets/app-icon.png` (usando perfil de Lili temporalmente)
    - Actualizado `manifest.json` y `index.html`
    - **Mejora futura**: Crear icono personalizado definitivo

- [x] **Actualización de Contenido**: ✅ Completado
    - Título "Paella de Mari" actualizado
    - Top 12 recetas configurado (2 filas de 6):
        - Añadido "Pavo Trufao" (Lili)
        - Añadido "Albóndigas de Bacalao" (Amelia)
    - Biografías actualizadas:
        - Lili: Mención a 6 nietos (Ana, Carlos, Andrea, Vera, Daniela, Leo) en versión extendida
        - Mari: 4 nietos mencionados en versión corta, nombres en versión extendida
        - Textos justificados
        - Alfonso en negrita

### 🟡 Prioridad Media
- [x] **Verificación de Imágenes**: Revisar que todas las recetas tengan imágenes correctas
    - Confirmar que no hay referencias a `loremflickr` o URLs externas
    - Verificar que todas las imágenes en `assets/` estén siendo utilizadas
    - Comprobar que no falten imágenes para ninguna receta
    - **Resultado**: Todas verificadas, sin enlaces externos, sin faltantes.

- [x] **Optimización de Imágenes**:
    - Las imágenes manuscritas (JPG) tienen tamaños grandes (6-7 MB cada una)
    - Considerar compresión para mejorar tiempos de carga
    - Especialmente importante para la versión móvil/PWA
    - **Resultado**: 55 imágenes optimizadas (ahorro significativo de espacio).

- [ ] **Revisión de Contenido**:
    - Verificar que todas las biografías estén completas y correctas
    - Confirmar que la dedicatoria refleja el contenido deseado
    - Revisar que los nombres de recetas sean consistentes

### 🟢 Prioridad Baja / Mejoras Futuras
- [ ] **SEO y Metadatos**:
    - Añadir meta tags Open Graph para compartir en redes sociales
    - Crear favicon personalizado (actualmente usa placeholder)
    - Mejorar descripción meta para SEO

- [ ] **Accesibilidad**:
    - Revisar contraste de colores para WCAG compliance
    - Añadir atributos ARIA donde sea necesario
    - Verificar navegación por teclado

- [ ] **Analytics** (Opcional):
    - Considerar añadir Google Analytics o similar
    - Monitorear qué recetas son más visitadas

- [ ] **Backup de Manuscritos Originales**:
    - Asegurar que todos los manuscritos originales estén respaldados
    - Documentar la correspondencia entre imágenes generadas y manuscritos

### 📝 Notas Técnicas
- **Deployment**: Configurado en Netlify (`s-lili-mari.netlify.app`)
- **Repository**: Conectado a GitHub con auto-deploy
- **PWA**: Service Worker configurado (`sw.js`) para funcionalidad offline
- **Estado actual**: Funcional pero con cambios sin publicar

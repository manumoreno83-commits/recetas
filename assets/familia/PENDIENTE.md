# PENDIENTE: Añadir Fotos Familiares

## Estado Actual:
La carpeta `assets/familia/` ha sido creada pero está vacía.

## Acción Requerida:
Necesitas añadir 6 fotos de familia manualmente:

### Opción 1: Usar tus propias fotos
1. Selecciona 6 fotos familiares
2. Renómbralas a: foto1.jpg, foto2.jpg, foto3.jpg, foto4.jpg, foto5.jpg, foto6.jpg
3. Cópialas a la carpeta `assets/familia/`

### Opción 2: Generar placeholders temporales
Si prefieres usar imágenes temporales mientras consigues las fotos reales:
- La cuota de generación de imágenes se resetea en ~22 minutos (22:49 UTC)
- Después podemos generar 6 imágenes placeholder con temática familiar/cocina

### Opción 3: Ocultar el carrusel temporalmente
Si prefieres ocultar el carrusel hasta tener las fotos:
1. Editar `index.html`
2. Comentar las líneas 66-79 (sección del carrusel)

## Mientras tanto:
El sitio funcionará, pero el carrusel mostrará imágenes rotas hasta que se añadan las fotos.

## Próximos pasos después de añadir fotos:
```bash
git add assets/familia/
git commit -m "Add family photos for carousel"
git push origin main
```

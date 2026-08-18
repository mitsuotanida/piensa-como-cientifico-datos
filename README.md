# Piensa como científico de datos · GitHub Pages

Sitio estático, responsive y listo para GitHub Pages para centralizar objetivos, sesiones y materiales del taller.

## Estructura

```text
piensa-como-cientifico-datos-site/
├── index.html
├── README.md
├── assets/
│   ├── css/styles.css
│   ├── js/content.js
│   ├── js/app.js
│   └── favicon.svg
└── materials/
    ├── programa/
    ├── sesion-01/
    └── sesion-02/
```

## Publicar en GitHub Pages

1. Crea un repositorio en GitHub, por ejemplo `piensa-como-cientifico-datos`.
2. Sube **todo el contenido de esta carpeta** a la raíz del repositorio.
3. En GitHub entra a **Settings → Pages**.
4. En **Build and deployment**, elige **Deploy from a branch**.
5. Selecciona la rama **main** y la carpeta **/(root)**.
6. Presiona **Save**.
7. GitHub generará la URL pública del sitio después de unos minutos.

## Cómo agregar una nueva clase

La página fue preparada para que no tengas que tocar el HTML cada vez.

1. Crea una carpeta nueva, por ejemplo `materials/sesion-03/`.
2. Sube ahí el PPT, Word, PDF o material de esa clase.
3. Abre `assets/js/content.js`.
4. En `sessions`, cambia el estado de la sesión correspondiente y agrega sus archivos en `materials`.
5. En `library`, agrega una tarjeta nueva con título, descripción, tipo, sesión y ruta.
6. Guarda los cambios. GitHub Pages se actualizará automáticamente.

## Recomendación de nombres

Usa nombres simples, sin espacios ni tildes en las rutas, por ejemplo:

```text
materials/sesion-03/presentacion-sesion-03.pptx
materials/sesion-03/guia-estudiante-sesion-03.docx
```

Eso evita problemas con enlaces y hace que el repositorio se mantenga limpio y escalable.

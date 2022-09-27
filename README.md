# pwa-agenda
Crear PWA

1.-Añadir manifest.json
{
    "name": "Agenda de Contactos",
    "short_name": "Agenda",
    "theme_color": "#2196f3",
    "background_color": "#2196f3",
    "display": "fullscreen",
    "orientation": "portrait",
    "scope": "./",
    "start_url": "./",
    "icons": [
        {
            "src": "./images/icono-512.png",
            "type": "image/png",
            "sizes": "512x512"
        }
    ]
}

2.-Añadir link al head del index

<link rel="manifest" href="./manifest.json">

3.-Si no se tiene instalar worbox

npm install workbox-cli --global

4.-En la ruta de la carpeta

iniciar: workbox wizard
selecionar donde esta l aplicaicon: .
elegir los archivos
elegir si se genera manifest
elegir nombres

generar sw:
workbox generateSW workbox-config.js

// Escribe aquí los nombres exactos de los archivos que están en tu carpeta "imagenes"
const listaImagenes = [
    '1.webp',
    '2.wepb',
    '3.webp',
    '4.webp',
    '5.webp',
    '6.webp',
    '7.wepb',
    '8.webp',
    '9.webp',
    '10.webp'
];

const visorImagen = document.getElementById('visorImagen');
const btnCambiar = document.getElementById('btnCambiar');

// Función para elegir una imagen al azar
function mostrarImagenAleatoria() {
    const indiceAleatorio = Math.floor(Math.random() * listaImagenes.length);
    const nombreImagen = listaImagenes[indiceAleatorio];
    
    // Cambiamos la ruta de la imagen actual
    visorImagen.src = `imagenes/${nombreImagen}`;
}

// Escuchar el clic del botón
btnCambiar.addEventListener('click', mostrarImagenAleatoria);

// Mostrar una imagen al cargar la página por primera vez
window.onload = mostrarImagenAleatoria;


// ==========================================
// REGISTRO DEL SERVICE WORKER (Para la PWA)
// ==========================================
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('./sw.js')
            .then(registro => {
                console.log('Service Worker registrado correctamente', registro);
            })
            .catch(error => {
                console.log('Fallo al registrar el Service Worker', error);
            });
    });
}
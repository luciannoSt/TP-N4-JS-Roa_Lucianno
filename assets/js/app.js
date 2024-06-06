// Obtener elementos del DOM
const michi = document.getElementById("michi"); // Contenedor para la imagen del gato
const perro = document.getElementById("perro"); // Contenedor para la imagen del perro
const michi_btn = document.getElementById("michi_btn"); // Botón para obtener una imagen de un gato
const perro_btn = document.getElementById("perro_btn"); // Botón para obtener una imagen de un perro

// Agregar event listeners a los botones
michi_btn.addEventListener("click", getmichi); // Asocia el evento de clic en michi_btn con la función getmichi
perro_btn.addEventListener("click", getperro); // Asocia el evento de clic en perro_btn con la función getperro

// Función para obtener una imagen de un gato
function getmichi() {
    // Realiza una solicitud a la API de The Cat API para obtener una imagen aleatoria de un gato
    fetch("https://api.thecatapi.com/v1/images/search")
        .then((response) => response.json()) // Convierte la respuesta a JSON
        .then((data) => {
            // Actualiza el contenido del contenedor michi con la imagen del gato obtenida
            michi.innerHTML = `<img src=${data[0].url} alt="gato"/>`;
        });
}

// Función para obtener una imagen de un perro
function getperro() {
    // Realiza una solicitud a la API de Dog CEO para obtener una imagen aleatoria de un perro
    fetch("https://dog.ceo/api/breeds/image/random")
        .then((response) => response.json()) // Convierte la respuesta a JSON
        .then((data) => {
            // Actualiza el contenido del contenedor perro con la imagen del perro obtenida
            perro.innerHTML = `<img src=${data.message} alt="perro"/>`;
        });
}



window.onload = function() {
    getmichi();
    getperro();
}
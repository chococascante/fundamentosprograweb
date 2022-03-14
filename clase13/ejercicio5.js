const imagenes = ["./imagen1.jpeg","http://farm4.staticflickr.com/3691/11268502654_f28f05966c_m.jpg", "http://farm4.staticflickr.com/3691/11268502654_f28f05966c_m.jpg", "http://farm4.staticflickr.com/3691/11268502654_f28f05966c_m.jpg"]

function mostarImagenAleatoria() {
    const imagen = document.querySelector('#imagen');
    const indice = Math.random() * (2 - 0) + 0;

    imagen.src = imagenes[indice];
}
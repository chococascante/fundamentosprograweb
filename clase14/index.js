window.onload = async function() {
    const respuesta = await fetch('https://jsonplaceholder.typicode.com/posts');
    const datos = await JSON.parse(respuesta);
    
    console.log(datos);
    datos.forEach(function(publicacion) {
        crearPublicacion(publicacion);
    });
    
}

function crearPublicacion(publicacion) {
    const contenedor = document.querySelector('#contenedor');

    const publicacionNueva = document.createElement('li');

    const titulo = document.createElement('h3');
    titulo.innerHTML = publicacion.title;

    const cuerpo = document.createElement('p');
    cuerpo.innerHTML = publicacion.body;
}
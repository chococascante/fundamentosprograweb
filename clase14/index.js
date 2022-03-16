window.onload = async function () {
    const respuesta = await fetch('https://jsonplaceholder.typicode.com/posts');
    const datos = await respuesta.json();

    const respuestaComentarios = await fetch('https://jsonplaceholder.typicode.com/comments');
    const datosComentarios = await respuestaComentarios.json();
    datos.forEach(function (publicacion) {
        const comentarios = datosComentarios.filter(function (comentario) {
            return publicacion.id === comentario.postId;
        });
        crearPublicacion(publicacion, comentarios);
    });

}

function crearPublicacion(publicacion, comentarios = []) {
    const contenedor = document.querySelector('#contenedor');

    const publicacionNueva = document.createElement('li');

    const titulo = document.createElement('h3');
    titulo.innerHTML = formatearTitulo(publicacion.title);

    const cuerpo = document.createElement('p');
    cuerpo.innerHTML = publicacion.body;

    publicacionNueva.appendChild(titulo);
    publicacionNueva.appendChild(cuerpo);

    const listaComentarios = document.createElement('ol');

    comentarios.forEach(function (comentario) {
        const item = document.createElement('li');
        const nombre = document.createElement('h4');
        nombre = formatearTitulo(comentario.name);
        item.appendChild(nombre);



        listaComentarios.appendChild(item);
        
    });
    publicacionNueva.appendChild(listaComentarios);
    contenedor.appendChild(publicacionNueva);
}

function formatearTitulo(titulo = '') {
    return `${titulo[0].toUpperCase()}${titulo.slice(1)}`;
}
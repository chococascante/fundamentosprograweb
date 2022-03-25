window.onload = async function () {
  const respuesta = await fetch("https://jsonplaceholder.typicode.com/posts");
  const datos = await respuesta.json();

  const respuestaUsuarios = await fetch(
    "https://jsonplaceholder.typicode.com/users"
  );
  const usuarios = await respuestaUsuarios.json();

  const respuestaComentarios = await fetch(
    "https://jsonplaceholder.typicode.com/comments"
  );
  const datosComentarios = await respuestaComentarios.json();

  datos.forEach(function (publicacion) {
    const comentarios = datosComentarios.filter(function (comentario) {
      return publicacion.id === comentario.postId;
    });

    const usuario = usuarios.find(function (usuario) {
      return publicacion.userId === usuario.id;
    });

    crearPublicacion(publicacion, usuario, comentarios);
  });
};

function crearPublicacion(publicacion = {}, usuario = {}, comentarios = []) {
  const contenedor = document.querySelector("#contenedor");

  const publicacionNueva = document.createElement("li");

  const titulo = document.createElement("h3");
  titulo.innerHTML = formatearTitulo(publicacion.title);

  const autorPublicacion = document.createElement("a");
  autorPublicacion.innerHTML = usuario.name;
  autorPublicacion.href = "./perfil.html?id=" + usuario.id;

  const cuerpo = document.createElement("p");
  cuerpo.innerHTML = publicacion.body;

  publicacionNueva.appendChild(titulo);
  publicacionNueva.appendChild(autorPublicacion);
  publicacionNueva.appendChild(cuerpo);

  const listaComentarios = document.createElement("ol");

  comentarios.forEach(function (comentario) {
    const elemento = document.createElement("li");

    const nombre = document.createElement("h4");
    nombre.innerHTML = formatearTitulo(comentario.name);
    elemento.appendChild(nombre);

    const autor = document.createElement("p");
    autor.innerHTML = comentario.email;
    elemento.appendChild(autor);

    const cuerpoComentario = document.createElement("p");
    cuerpoComentario.innerHTML = comentario.body;
    elemento.appendChild(cuerpoComentario);

    listaComentarios.appendChild(elemento);
  });
  publicacionNueva.appendChild(listaComentarios);
  contenedor.appendChild(publicacionNueva);
}

function formatearTitulo(titulo = "") {
  return `${titulo[0].toUpperCase()}${titulo.slice(1)}`;
}

function irAlPerfil() {
  window.location.href = "perfil.html";
}

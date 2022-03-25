window.onload = async function () {
  const respuesta = await fetch("https://jsonplaceholder.typicode.com/posts");
  const publicaciones = await respuesta.json();

  const respuestaUsuarios = await fetch(
    "https://jsonplaceholder.typicode.com/users"
  );
  const usuarios = await respuestaUsuarios.json();

  const respuestaComentarios = await fetch(
    "https://jsonplaceholder.typicode.com/comments"
  );
  const datosComentarios = await respuestaComentarios.json();
  // [{},{},{}]
  publicaciones.forEach(function (publicacion) {
    const comentarios = datosComentarios.filter(function (comentario) {
      return publicacion.id === comentario.postId;
    });

    const usuario = usuarios.find(function (usuario) {
      return publicacion.userId === usuario.id;
    });

    crearHTML(publicacion, usuario, comentarios);
  });
};

function crearHTML(publicacion = {}, usuario = {}, comentarios = []) {
  const contenedor = document.querySelector("#contenedor");

  const publicacionNueva = document.createElement("li");

  const titulo = document.createElement("h3"); // Creo
  titulo.innerHTML = formatearTitulo(publicacion.title); // Agrego
  publicacionNueva.appendChild(titulo); // Meto

  const autorPublicacion = document.createElement("a");
  autorPublicacion.innerHTML = usuario.name;
  autorPublicacion.href = "./perfil.html?id=" + usuario.id;
  publicacionNueva.appendChild(autorPublicacion);

  const cuerpo = document.createElement("p");
  cuerpo.innerHTML = publicacion.body;
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

function crearHTMLImg(url) {
  const img = document.createElement("img");
  img.src = url;
  bla.appendChild(img);
}

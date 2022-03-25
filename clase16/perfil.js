const parametros = location.search;
const paramsUrl = new URLSearchParams(parametros);

const idUsuario = paramsUrl.get("id");

window.onload = async function () {
  try {
    const respuestaUsuario = await fetch(
      "https://jsonplaceholder.typicode.com/users/" + idUsuario
    );
    const usuario = await respuestaUsuario.json();

    const nombre = document.createElement("h2");
    nombre.innerHTML = usuario.name;

    const nombreUsuario = document.createElement("p");
    nombreUsuario.innerHTML = usuario.username;

    const emailUsuario = document.createElement("a");
    emailUsuario.href = "mailto:" + usuario.email;
    emailUsuario.innerHTML = usuario.email;

    const telefono = document.createElement("a");
    telefono.href = "tel:" + usuario.phone;
    telefono.innerHTML = usuario.phone;

    const sitioWeb = document.createElement("a");
    sitioWeb.href = "http://" + usuario.website; // "hildegard.org"
    sitioWeb.innerHTML = usuario.website;

    const contenedor = document.getElementById("perfil");
    contenedor.appendChild(nombre);
    contenedor.appendChild(nombreUsuario);
    contenedor.appendChild(emailUsuario);
    contenedor.appendChild(telefono);
    contenedor.appendChild(sitioWeb);
  } catch (e) {
    console.error(e);
  }
};

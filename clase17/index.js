function revisarAlmacenamiento() {
  const nombre = localStorage.getItem("nombre");
  const formulario = document.getElementById("formulario");
  const mensajeBienvenida = document.getElementById("mensajeBienvenida");
  if (nombre) {
    // null, undefined, false, 0, ''
    formulario.style.display = "none";
    mensajeBienvenida.style.display = "block";
    mensajeBienvenida.innerHTML = `Bienvenido ${nombre}`;
  } else {
    mensajeBienvenida.style.display = "none";
    formulario.style.display = "block";
  }
}

window.onload = function () {
  // window.setTimeout(revisarAlmacenamiento, 3000);
  revisarAlmacenamiento();

  const boton = document.getElementById("boton");
  // Agregar un detector de eventos
  boton.addEventListener("click", function () {
    const input = document.getElementById("inputNombre");
    // const nombre = input.value;
    localStorage.setItem("nombre", input.value);
    revisarAlmacenamiento();
  });
};

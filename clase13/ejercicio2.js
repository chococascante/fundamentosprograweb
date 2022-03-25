function sacarValores() {
  const inputNombre = document.getElementById("nombre");
  const nombre = inputNombre.value;

  const inputApellido = document.getElementById("apellidos");
  const apellidos = inputApellido.value;

  console.log(nombre, apellidos);
  // console.log(`<td>${i},${j}</td>`);
}

window.onload = function () {
  const botones = document.getElementById("button");
  const button = botones[0];
  // Agregar un detector de eventos
  button.addEventListener("click", function () {
    // Haga algo
  });
};

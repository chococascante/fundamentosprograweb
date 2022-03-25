window.onload = function () {
  // DOM => Document Object Model
  const parrafo = document.getElementById("text"); // Traer un elemento por id
  //   document.getElementsByClassName("parrafo");
  //   document.getElementsByTagName("p");
  //              document.querySelector('#text');
  parrafo.style.color = "blue";
  // font-size
  parrafo.style.fontSize = "32px";
  parrafo.style.backgroundColor = "red";
};

function cambiarEstilo() {
  const parrafo = document.getElementById("text");
  //              document.querySelector('#text');
  parrafo.style.color = "red";
  parrafo.style.fontSize = "32px";
  parrafo.style.backgroundColor = "yellow";
}

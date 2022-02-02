window.onload = () => {
  const parrafo = document.getElementById("texto");
  parrafo.innerHTML = "Hola";

  const main = document.getElementById("main");
  console.log(main);
  const nombre = "Luis";
  main.innerHTML = main.innerHTML.concat(`<p>Hola ${nombre}!</p>`);
};

// Escriba una función que reciba una variable y diga si es string o no.
// Recordar: typeof

function esString(str) {
  return typeof str === "string";
}

// Escriba una función que reciba un string y diga si es vacío o no.
// String vacío = ''   NO ES LO MISMO QUE ' '
function esStringVacio(str) {
  return str === "";
}

// Escriba una función que reciba un string con el nombre y apellido juntos, y los separe en un arreglo.
// 'Luis Cascante' => ['Luis', 'Cascante']
function separarNombre(nombreCompleto) {
  return nombreCompleto.split(" ");
}

// Escriba una función que reciba un nombre y un apellido y devuelva las iniciales.
// 'Luis Cascante' => 'L.C'
function generarIniciales(nombreCompleto) {
  const nombreSeparado = nombreCompleto.split(" ");

  let iniciales = "";
  for (let i = 0; i < nombreSeparado.length; i++) {
    iniciales = iniciales.concat(nombreSeparado[i].charAt(0)).concat(".");
  }

  return iniciales;
}

// Escriba una función que reciba un texto y ponga la primera letra en mayúscula
// 'franco' => 'Franco'
// [...[1,2,3], 4, 5] => [1,2,3,4,5]
function primeraMayuscula(texto) {
  const primeraLetra = texto[0];
  const primeraLetraMayuscula = primeraLetra.toUpperCase();
  const restoTexto = texto.slice(1);
  // texto[0].toUpperCase().concat(texto.slice(1))
  return primeraLetraMayuscula.concat(restoTexto);
}

console.log(primeraMayuscula("franco"));

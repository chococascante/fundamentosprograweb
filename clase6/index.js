/**
 * Temas de hoy:
 * - Métodos de arreglos: .find, .reduce
 * - Métodos inventados: agregarEnUnIndice
 *
 */

const estudiantes = [
  {
    id: 1,
    name: "Aracellys Mercado",
    viveEnGAM: false,
  },
  {
    id: 2,
    name: "Jessica Mora",
    viveEnGAM: false,
  },
  {
    id: 3,
    name: "Laura Núñez",
    viveEnGAM: true,
  },
  { id: 4, name: "Jennifer Mora", viveEnGAM: false },
  { id: 5, name: "Dinia Castro", viveEnGAM: true },
  { id: 6, name: "Ileana Campos", viveEnGAM: false },
];

// 1. .find
// Encontrar y devolver el primer elemento que cumpla con la función

function revisarSiViveEnGAM(estudiante) {
  if (estudiante.viveEnGAM === true) {
    return true;
  }

  return false;
}

const resultado = estudiantes.find(function (estudiante) {
  if (estudiante.viveEnGAM === true) {
    return true;
  }

  return false;
});

// console.log(resultado);

const resultadoNombre = estudiantes.find((estudiante) => {
  if (estudiante.name[0] === "J") {
    return true;
  }

  return false;
});

// function adiosMundo() console.log('Adios mundo')

const holaMundo = () => console.log("Hola Mundo!");

// holaMundo();
// console.log(resultadoNombre);

function sacarPrimerElemento(arreglo) {
  return arreglo[0];
}

const sacarPrimerFlecha = (arreglo) => arreglo[0];

function sacarElementoN(arreglo, indice) {
  return arreglo[indice];
}

const sacarNFlecha = (arreglo, indice) => arreglo[indice];

// [0, 1, 2, 2].splice(3, 1, 3) => Se elimina 2, para meter 3
// [0, 1, ...]

const nuevoEstudiante = {
  id: 9,
  name: "Luis Cascante",
  viveEnGAM: false,
};

function agregarUnElementoEnIndice(arreglo, elemento, indice) {
  const antes = arreglo.slice(0, indice);
  const despues = arreglo.slice(indice, arreglo.length);

  //                    antes.concat(elemento).concat(despues)
  const nuevoArreglo = [...antes, elemento, ...despues];
  return nuevoArreglo;
}

const agregarSplice = (arreglo, elemento, indice) => {
  arreglo.splice(indice, 0, elemento);
  console.log(arreglo);
  return arreglo;
};

agregarSplice(estudiantes, nuevoEstudiante, 2);

// Antes: [0, 1, 2, 3]
// Elemento: 50
// Después: [4, 5, 6, 7]
// Resultado: [...[0, 1, 2, 3], 50, ...[4, 5, 6, 7]] => [0, 1, 2, 3, 50, 4, 5, 6, 7]
const resultadoNumeros = agregarUnElementoEnIndice(
  [0, 1, 2, 3, 4, 5, 6, 7],
  50,
  4
);
console.log(resultadoNumeros);

// console.log(resultadoAgregar);
